import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { Button, withAuthenticator } from "@aws-amplify/ui-react";
import {
  historyCalculationAPICall,
  draftFormsAPICall,
  toggleHideCalculationDataAPICall
} from "./functions/api/api-calls";
import './App.css';
import moment, { max } from "moment";

function HistoryPage({ signOut }) {
  const [calculationData, setCalculationData] = useState([]);
  const [sortOrder, setSortOrder] = useState("desc"); // 'asc' for ascending, 'desc' for descending
  const [searchQuery, setSearchQuery] = useState(""); // State to hold the search query
  const [filteredCalculationData, setFilteredCalculationData] = useState([]); // New state for filtered data
  const [nextToken, setNextToken] = useState(null);
  const [hiddenRows, setHiddenRows] = useState([]);
  const [showAll, setShowAll] = useState(false);

  // Pagination and fetch data
  useEffect(() => {
    fetchCalculationData();
  }, []); // Add showAll as a dependency

  // Filtering and sorting data
  useEffect(() => {
    const filteredData = calculationData.filter((data) => {
      const { id, formId, cargoData, created_at, ports, username } = data;
      const query = searchQuery.toLowerCase();
      const dateTimeRegex = /^\d{1,2}\/\d{1,2}\/\d{4}, \d{1,2}:\d{2}:\d{2} (AM|PM)$/; // Remove the single quote at the end
      // Format the date and time in the desired format for comparison
      const formattedDateTime = moment(created_at).format("M/D/YYYY, h:mm:ss A");

      // Perform the relevant search based on your criteria
      const portNames = ports.map((port) => port.port.toLowerCase());
      const portCodes = ports.map((port) => port.port.replace(/\s+\(.+?\)/g, '').toLowerCase());

      const partialMatchId = id.toLowerCase().includes(query);
      const partialMatchFormId = formId.toLowerCase().includes(query);

      // Check for exact matches for each field, including entire port query
      const exactMatch =
        id.toLowerCase() === query ||
        formId.toLowerCase() === query ||
        username.toLowerCase() === query ||
        portNames.includes(query) ||
        portCodes.includes(query) ||
        cargoData.some((cargo) => cargo.type.toLowerCase() === query) ||
        created_at.toLowerCase().includes(query) ||
        ports.map((port) => port.port.toLowerCase()).join(', ').includes(query); // Search for the entire comma-separated ports string

      // Perform the relevant search based on your criteria
      const matchesSearchQuery =
        exactMatch ||
        partialMatchId ||
        partialMatchFormId ||
        ports.some((port) => port.port.toLowerCase().includes(query)) ||
        ports.map(port => port.port.toLowerCase()).join(' ').includes(query) ||
        ports.map(port => port.port.replace(/\s+\(.+?\)/g, '')).join(' ').toLowerCase().includes(query) ||
        cargoData.some((cargo) => cargo.type.toLowerCase().includes(query)) ||
        (dateTimeRegex.test(query) && formattedDateTime.includes(query));

      // Show all rows if showAll is true, otherwise only show rows that are not hidden
      return showAll ? matchesSearchQuery : (matchesSearchQuery && !data.hideData);
    });

    const sortedData = filteredData.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

    setFilteredCalculationData(sortedData); // Update the filteredCalculationData
  }, [searchQuery, calculationData, showAll]);

  const fetchCalculationData = useCallback(async () => {
    try {
      const response = await historyCalculationAPICall(nextToken);
      setNextToken(response.nextToken);

      const updatedData = await Promise.all(response.items);

      const newItems = updatedData.filter(item => !item.hideData);
      setCalculationData((prevData) => {
        return nextToken ? [...prevData, ...newItems] : newItems;
      });
    } catch (error) {
      console.error(error);
    }
  }, [nextToken]);

  const toggleHideRow = async (id) => {
    try {
      // Call the API function to toggle hide data
      await toggleHideCalculationDataAPICall(id);

      // Update the hiddenRows state to show or hide the row based on its current state
      setHiddenRows(prevHiddenRows => {
        if (prevHiddenRows.includes(id)) {
          return prevHiddenRows.filter(rowId => rowId !== id); // Remove the id from hiddenRows
        } else {
          return [...prevHiddenRows, id]; // Add the id to hiddenRows
        }
      });

      // Update the filteredCalculationData state to reflect the updated data
      setFilteredCalculationData((prevData) =>
        prevData.map((data) => (data.id === id ? { ...data, hideData: !data.hideData } : data))
      );
    } catch (error) {
      console.error(error);
    }
  };

  const handleShowAll = async () => {
    setShowAll((prevShowAll) => !prevShowAll);
    setHiddenRows([]); // Reset the hiddenRows when showing all

    if (!showAll) {
      // If we were in the "hide" mode, we need to show all rows again
      // Update the hiddenRows state to an empty array
      setHiddenRows([]);
      // Fetch calculation data and update the filteredCalculationData state
      try {
        const response = await historyCalculationAPICall();
        const newItems = response.items;
        setFilteredCalculationData(newItems);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleLoadMore = () => {
    fetchCalculationData();
  };

  // Sorting function for 'Created Date'
  const sortCalculationData = useCallback(() => {
    setFilteredCalculationData((prevData) => {
      const sortedData = [...prevData].sort((a, b) => {
        // Date comparison for sorting
        const dateA = new Date(a.created_at);
        const dateB = new Date(b.created_at);
        return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
      });
      return sortedData;
    });
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc'); // Toggle the sort order
  }, [sortOrder]);

  // Memoize the date formatting function
  const formatNumberMemoized = useCallback(formatNumber, []);

  // JSX code
  return (
    <div>
      <div>
        {/* Navigation Bar */}
        <nav className="navbar">
          <h1 className="navbar-title">Freight Calculator</h1>
          <div className="navbar-buttons">
            <Link to="/" className="navbar-button">
              Calculator
            </Link>
            <Link to="/history" className="navbar-button">
              History
            </Link>
            <Button onClick={signOut}>Sign out</Button>
          </div>
        </nav>
      </div>
      <div>
        <h1>Past Calculations</h1>
        {/* Search Box */}
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search..."
          style={{ marginLeft: "10%", marginBottom: "10px" }}
        />
        {/* Show All Button */}
        <Button onClick={handleShowAll} style={{ marginLeft: "10%", marginBottom: "20px" }}>
          {showAll ? "Hide All" : "Show All"}
        </Button>
        <table style={{ fontSize: "12px" }} >
          <thead>
            <tr>
              <th style={{ width: "10px" }}>Item</th>
              <th>Calculation ID</th>
              <th>Form ID</th>
              <th>Ports</th>
              <th>Cargo</th>
              <th>Profit/Loss</th>
              <th onClick={sortCalculationData}>
                Timestamp {sortOrder === "asc" ? "↑" : "↓"}
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredCalculationData.map((data, index) => (
              <tr key={data.id}>
                <td style={{ width: "10px" }}>{index + 1}</td>
                <td>
                  {/* Make the Calculation ID clickable and open in a new tab */}
                  <Link to={`/calculation/${data.id}`} target="_blank">
                    {data.id}
                  </Link>
                </td>
                <td>
                  {/* Make the Calculation ID clickable and open in a new tab */}
                  <Link to={`/form/${data.formId}`} target="_blank">
                    {data.formId}
                  </Link></td>
                <td>
                  {data.ports.map((port, index) => (
                    // Only show the port if it's not "NIL"
                    port.port !== "NIL" && (
                      <React.Fragment key={port.id}>
                        {index > 0 && ', '}
                        {port.port}
                      </React.Fragment>
                    )
                  ))}
                </td>
                <td>
                  {data.cargoData.map((cargo, index) => (
                    // Only show the cargo type if it's not "NIL"
                    cargo.type !== "NIL" && (
                      <div
                        key={cargo.id} // Use a unique identifier for each row
                        hidden={!showAll && hiddenRows.includes(cargo.id)}
                      >
                        {cargo.type}, {formatNumberMemoized(cargo.quantity)} MT, {formatNumberMemoized(cargo.rate * 35)} THB
                      </div>
                    )
                  ))}
                </td>
                <td>
                  <div>
                    <span
                      style={{
                        color: data.hn5_profit >= 0 ? "green" : "red",
                        fontWeight: "bold",
                      }}
                    >
                      HN5: {formatNumberMemoized(data.hn5_profit)} THB
                    </span>
                  </div>
                  <div>
                    <span
                      style={{
                        color: data.hn9_profit >= 0 ? "green" : "red",
                        fontWeight: "bold",
                      }}
                    >
                      HN9: {formatNumber(Math.round(data.hn9_profit))} THB
                    </span>
                  </div>
                </td>
                <td>
                  <div>
                    {new Date(new Date(data.created_at).getTime()).toLocaleString(
                      "en-UK",
                      { timeZone: "Asia/Bangkok" }
                    )}
                  </div>
                  <div>
                    Created by: {data.username}
                  </div>
                </td>
                <td className="button-td" style={{ border: "none", padding: 0, background: "transparent", textAlign: "center" }}>
                  <Button onClick={() => toggleHideRow(data.id)} style={{ maxWidth: "50px", margin: "10px", fontWeight: 'normal' }}
                  >
                    {hiddenRows.includes(data.id) || data.hideData ? "Show" : "Hide"}
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {nextToken && <Button onClick={handleLoadMore} style={{ marginLeft: '10%', marginTop: '10px', marginBottom: '50px' }}>Load More</Button>}
      </div>
    </div>
  );
}

const withAuthenticatorOptions = {
  hideSignUp: true
}

export default withAuthenticator(HistoryPage, withAuthenticatorOptions);

function formatNumber(number) {
  if (typeof number === "number") {
    return number.toLocaleString();
  }
  return "";
}
