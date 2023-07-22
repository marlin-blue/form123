import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@aws-amplify/ui-react";
import { draftFormsAPICall } from './functions/api/api-calls';

function DraftsPage() {
  const [formData, setFormData] = useState([]);
  const [sortOrder, setSortOrder] = useState('desc'); // 'asc' for ascending, 'desc' for descending
  const itemsPerPage = 10; // Number of calculations to display per page
  const [nextToken, setNextToken] = useState(null);

  useEffect(() => {
    fetchFormData(); // Fetch the initial calculation data when the component mounts
  }, []);

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
        <table>
          <thead>
            <tr>
              <th>
                Form ID
              </th>
              <th onClick={sortFormData}>
              Created Date (BKT) {sortOrder === 'asc' ? '↑' : '↓'}
              </th>
            </tr>
          </thead>
          <tbody>
            {formData.map((data) => (
              <tr key={data.id}>
                <td>{data.id}</td>
                <td>{data.created_at}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {nextToken && <Button onClick={handleLoadMore}>Load More</Button>} {/* Show Load More button only if there's a nextToken */}
      </div>
    </div>
  );
}

export default DraftsPage;
