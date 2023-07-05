import React, { useState } from 'react';
import { DistanceCreateForm } from './ui-components';
import { fetchDistanceFromDatabase } from './api';

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
      // Query the database for the distance based on source and destination port names
      const distance = await fetchDistanceFromDatabase(updatedFields.sourcePort, updatedFields.destinationPort);

      // Set the distance in state
      setDistance(distance);
    } catch (error) {
      console.log('Error fetching distance:', error);
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
