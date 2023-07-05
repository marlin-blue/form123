export const fetchDistanceFromDatabase = async (sourcePort, destinationPort) => {
    try {
      const url = `https://bpkvwnlc02.execute-api.us-west-2.amazonaws.com/prod?sourcePort=${sourcePort}&destinationPort=${destinationPort}`;
  
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          // Add any necessary headers or authentication tokens
        },
      });
  
      if (!response.ok) {
        throw new Error('Failed to fetch distance from the database');
      }
  
      const data = await response.json();
      const distance = data.distance;
  
      return distance;
    } catch (error) {
      throw new Error('Error fetching distance from the database: ' + error.message);
    }
  };
  