const fetchDistanceFromDatabase = async (sourcePort, destinationPort) => {
    try {
      // Make an API request to retrieve the distance from the database
      const response = await fetch('your-api-endpoint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Add any necessary headers or authentication tokens
        },
        body: JSON.stringify({
          sourcePort,
          destinationPort,
        }),
      });
  
      if (!response.ok) {
        throw new Error('Failed to fetch distance from the database');
      }
  
      // Parse the response and extract the distance
      const data = await response.json();
      const distance = data.distance;
  
      return distance;
    } catch (error) {
      throw new Error('Error fetching distance from the database: ' + error.message);
    }
  };
  