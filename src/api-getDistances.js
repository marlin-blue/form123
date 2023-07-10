export const fetchDistanceFromAPI = async (sourcePort, destinationPort) => {
    const url = `https://27ph7xpsud.execute-api.us-west-2.amazonaws.com/prod/distance?sourcePort=${encodeURIComponent(
      sourcePort)}&destinationPort=${encodeURIComponent(destinationPort)}`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
  
      if (response.ok) {
        if (data.distance) {
          return data;
        } else {
          throw new Error('Pair Not Found');
        }
      } else {
        throw new Error('API request failed');
      }
    } catch (error) {
      throw new Error(error.message);
    }
  };
  