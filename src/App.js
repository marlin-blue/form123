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

    try {
      // Make an HTTP POST request to the API Gateway endpoint
      const response = await fetchDistanceFromAPI(updatedFields.sourcePort, updatedFields.destinationPort);

      if (response.statusCode === 200) {
        const { distance } = JSON.parse(response.body);
        // Set the distance in state
        setDistance(distance);
      } else {
        // Handle error scenario
        console.log('Error:', response.body);
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
      {distance && <p>Distance: {distance} km</p>}
    </div>
  );
}

export default App;
