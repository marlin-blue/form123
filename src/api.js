export const fetchDistanceFromAPI = async (sourcePort, destinationPort) => {
    const url = 'https://je63zukb2a.execute-api.us-west-2.amazonaws.com/prod';
    const requestBody = JSON.stringify({ sourcePort, destinationPort });
  
    try {
      const response = await fetch(url, {
        method: 'GET',
        body: requestBody,
      });
  
      return response.json();
    } catch (error) {
      throw new Error('Error making API request');
    }
  };
  