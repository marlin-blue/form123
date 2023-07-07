import React, { useState } from 'react';
import { DistanceCreateForm } from './ui-components';
import { fetchDistanceFromAPI } from './api';
import './App.css';

function App() {
  const [distance, setDistance] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const onSubmit = async (fields) => {
    const updatedFields = {};
    Object.keys(fields).forEach((key) => {
      if (typeof fields[key] === 'string') {
        updatedFields[key] = fields[key].trim();
      } else {
        updatedFields[key] = fields[key];
      }
    });

    // Log the selected options in the console
    console.log('Selected sourcePort:', updatedFields.sourcePort);
    console.log('Selected destinationPort:', updatedFields.destinationPort);

    try {
      // Make an HTTP GET request to the API endpoint
      const response = await fetchDistanceFromAPI(updatedFields.sourcePort, updatedFields.destinationPort);

      if (response.error && response.error.includes('Pair Not Found')) {
        // Handle the "Pair Not Found" error scenario
        console.log('Error: Pair Not Found');
        setDistance(null);
        setErrorMessage('Pair Not Found'); // Updated this line
      } else if (response.distance) {
        // Set the distance in state
        setDistance(response.distance);
        setErrorMessage(null);
      } else {
        // Clear the distance and display a generic error message
        setDistance(null);
        setErrorMessage('Error: Distance calculation failed');
      }
    } catch (error) {
      console.log(error);
      // Handle error scenario
      setDistance(null);
      setErrorMessage('Error: ' + error.message);
    }
  };

  return (
    <div>
      <h1>Distance Calculator</h1>
      <DistanceCreateForm onSubmit={onSubmit} />
      {distance && <p style={{ color: 'green' }}>Distance: {distance} nm</p>}
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
}

export default App;
