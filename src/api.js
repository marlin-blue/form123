export const fetchDistanceFromAPI = async (sourcePort, destinationPort) => {
    const url = `https://27ph7xpsud.execute-api.us-west-2.amazonaws.com/prod/distance?sourcePort=${encodeURIComponent(
      sourcePort
    )}&destinationPort=${encodeURIComponent(destinationPort)}`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
  
      if (response.ok) {
        return data;
      } else {
        throw new Error(data.error);
      }
    } catch (error) {
      throw new Error('Error making API request: ' + error.message);
    }
  };
  