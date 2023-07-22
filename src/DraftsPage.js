import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@aws-amplify/ui-react";
import { draftFormsAPICall } from './functions/api/api-calls';
import './App.css';

function DraftsPage() {
  const [formData, setFormData] = useState([]);
  const [sortOrder, setSortOrder] = useState('desc'); // 'asc' for ascending, 'desc' for descending
  const [searchQuery, setSearchQuery] = useState(''); // State to hold the search query
  const itemsPerPage = 10; // Number of calculations to display per page
  const [nextToken, setNextToken] = useState(null);

  useEffect(() => {
    fetchFormData(); // Fetch the initial form data when the component mounts
  }, []);

  useEffect(() => {
    // When the search query changes, filter the formData
    const filteredData = formData.filter(data => {
      const { id, created_at } = data;
      const query = searchQuery.toLowerCase();

      // Perform the relevant search based on your criteria
      return (
        id.toLowerCase().includes(query) ||
        created_at.toLowerCase().includes(query)
      );
    });

    setFormData(filteredData);
  }, [searchQuery]);

  const fetchFormData = async () => {
    try {
      const response = await draftFormsAPICall(nextToken); // Pass the nextToken as a parameter
      console.log(response);
      setNextToken(response.nextToken); // Update the nextToken for pagination
      setFormData((prevData) => (nextToken ? [...prevData, ...response.items] : response.items)); // Replace or append the data
    } catch (error) {
      console.error(error);
    }
  };

  const handleLoadMore = () => {
    fetchFormData();
  };

  // Sorting function for 'Created Date'
  const sortFormData = () => {
    setFormData((prevData) => {
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
            <Link to="/" className="navbar-button">Calculator</Link>
            <Link to="/drafts" className="navbar-button">Drafts</Link>
            <Link to="/history" className="navbar-button">History</Link>
          </div>
        </nav>
      </div>
      <div>
        <h1>Draft Forms</h1>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search..." 
          style={{ marginLeft: '10%', marginBottom: '10px'}}
        />
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>
                Form ID
              </th>
              <th onClick={sortFormData}>
              Created Date (BKT) {sortOrder === 'asc' ? '↑' : '↓'}
              </th>
            </tr>
          </thead>
          <tbody>
            {formData && formData.map((data, index) => (
              <tr key={data.id}>
                <td>{index + 1}</td> {/* Item number starts from 1 */}
                <td>{data.id}</td>
                <td>{new Date(new Date(data.created_at).getTime() ).toLocaleString('en-US', { timeZone: 'Asia/Bangkok' })}</td>

              </tr>
            ))}
          </tbody>
        </table>
        {nextToken && <Button onClick={handleLoadMore} style={{ marginLeft: '10%', marginTop: '10px', marginBottom: '50px'}}>Load More</Button>} {/* Show Load More button only if there's a nextToken */}
      </div>
    </div>
  );
}

export default DraftsPage;
