import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@aws-amplify/ui-react";
import {
  historyCalculationAPICall,
  draftFormsAPICall,
} from "./functions/api/api-calls";
import './App.css';
import moment from "moment";

function HistoryPage() {
  const [calculationData, setCalculationData] = useState([]);
  const [sortOrder, setSortOrder] = useState("desc"); // 'asc' for ascending, 'desc' for descending
  const [searchQuery, setSearchQuery] = useState(""); // State to hold the search query
  const [filteredCalculationData, setFilteredCalculationData] = useState([]); // New state for filtered data
  const itemsPerPage = 10; // Number of calculations to display per page
  const [nextToken, setNextToken] = useState(null);


  useEffect(() => {
    fetchCalculationData(); // Fetch the initial calculation data when the component mounts
  }, []);


  useEffect(() => {
    // When the search query changes, filter the calculationData and update filteredCalculationData
    const filteredData = calculationData.filter((data) => {
      const { id, formId, cargoData, created_at } = data;
      const query = searchQuery.toLowerCase();
      const dateTimeRegex = /^\d{1,2}\/\d{1,2}\/\d{4}, \d{1,2}:\d{2}:\d{2} (AM|PM)$/;
    // Format the date and time in the desired format for comparison
    const formattedDateTime = moment(created_at).format("M/D/YYYY, h:mm:ss A");

      // Perform the relevant search based on your criteria
      return (
        id.toLowerCase().includes(query) ||
        formId.toLowerCase().includes(query) ||
        cargoData.some((cargo) => cargo.type.toLowerCase().includes(query)) ||
        dateTimeRegex.test(query) && formattedDateTime.includes(query) || // Check if query matches date and time format
        created_at.toLowerCase().includes(query)
      );
    });

    const sortedData = filteredData.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));


    setFilteredCalculationData(sortedData); // Update the filteredCalculationData
  }, [searchQuery, calculationData]); // Include calculationData in the dependency array

  const fetchCalculationData = async () => {
    try {
      const response = await historyCalculationAPICall(nextToken); // Pass the nextToken as a parameter
      console.log(response);
      setNextToken(response.nextToken); // Update the nextToken for pagination
      setCalculationData((prevData) =>
        nextToken ? [...prevData, ...response.items] : response.items
      ); // Replace or append the data
    } catch (error) {
      console.error(error);
    }
  };


  const handleLoadMore = () => {
    fetchCalculationData();
  };

  // Sorting function for 'Created Date'
  const sortCalculationData = () => {
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
  };


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
            <Link to="/drafts" className="navbar-button">
              Drafts
            </Link>
            <Link to="/history" className="navbar-button">
              History
            </Link>
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
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>
                Calculation ID
              </th>
              <th>Form ID</th>
              <th>Cargo</th>
              <th onClick={sortCalculationData}>
                Created Date (BKT) {sortOrder === "asc" ? "↑" : "↓"}
              </th>

            </tr>
          </thead>
          <tbody>
            {filteredCalculationData.map((data, index) => (
              <tr key={data.id}>
                <td>{index + 1}</td> {/* Item number starts from 1 */}
                <td>
                  {/* Make the Calculation ID clickable and open in a new tab */}
                  <Link to={`/calculation/${data.id}`} target="_blank">{data.id}</Link>
                </td>
                <td>{data.formId}</td>
                <td>
                  {data.cargoData.map((cargo, index) => (
                    // Only show the cargo type if it's not "NIL"
                    cargo.type !== "NIL" && (
                      <span key={index}>{cargo.type} </span>
                    )
                  ))}
                </td>
                <td>
                  {new Date(new Date(data.created_at).getTime()).toLocaleString(
                    "en-UK",
                    { timeZone: "Asia/Bangkok" }
                  )}
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

export default HistoryPage;
