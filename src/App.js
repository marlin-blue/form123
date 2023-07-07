import React, { useState } from 'react';
import { DistanceCreateForm } from './ui-components';
import { fetchDistanceFromAPI } from './api';

function App() {
  const [distance, setDistance] = useState(null);

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

      if (response.distance) {
        // Set the distance in state
        setDistance(response.distance);
      } else {
        // Handle error scenario
        console.log('Error:', response.error);
      }
    } catch (error) {
      console.log('Error:', error);
      // Handle error scenario
    }
  };

  return (
    <div>
      <h1>Distance Calculator</h1>
      <DistanceCreateForm onSubmit={onSubmit} />
      {distance && <p>Distance: {distance} nm</p>}
    </div>
  );
}

export default App;
