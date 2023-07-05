import React, { useState } from 'react';
import { DistanceCreateForm } from './ui-components';
import { API } from 'aws-amplify';
import { listDistances } from './graphql/queries';

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
      const apiData = await API.graphql({
        query: listDistances,
        variables: {
          filter: {
            sourcePort: { eq: updatedFields.sourcePort },
            destinationPort: { eq: updatedFields.destinationPort }
          }
        }
      });

      // Retrieve the distance from the API response
      const { items } = apiData.data.listDistances;
      if (items.length > 0) {
        const distance = items[0].distance;
        // Set the distance in state
        setDistance(distance);
      } else {
        // Distance not found
        setDistance(null);
      }
    } catch (error) {
      console.log('Error fetching distance:', error);
      // Handle error scenario
    }
  };

  return (
    <div>
      <h1>Distance Calculator</h1>
      <DistanceCreateForm onSubmit={onSubmit} />
      {distance !== null && <p>Distance: {distance} km</p>}
    </div>
  );
}

export default App;
