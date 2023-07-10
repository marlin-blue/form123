const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB.DocumentClient();
const distancesTableName = 'distancesTable';
const calculatedDataTableName = 'calculatedDataTable';

// Generate a timestamp-based ID
function generateTimestampId() {
    const timestamp = new Date().getTime();
    const random = Math.floor(Math.random() * 1000); // Generate a random number between 0 and 999
    return `${timestamp}-${random}`;
  }

exports.handler = async (event) => {
  console.log(JSON.stringify(event, null, 2)); // Log the event details

  // Generate a timestamp-based ID

  try {
    const ports = [
      event.queryStringParameters.sourcePort1,
      event.queryStringParameters.sourcePort2,
      event.queryStringParameters.sourcePort3,
      event.queryStringParameters.sourcePort4,
      event.queryStringParameters.sourcePort5,
      event.queryStringParameters.sourcePort6
    ];
    // Extract port names from the query string parameters and store them in an array

    let totalDistance = 0;
    let i = 0;
    let stopCalculation = false;

    while (i < ports.length - 1 && !stopCalculation) {
      const sourcePort = ports[i];
      const destinationPort = ports[i + 1];

      if (sourcePort === 'NIL' || destinationPort === 'NIL') {
        stopCalculation = true;
      } else {
        const distanceParams = {
          TableName: distancesTableName,
          FilterExpression: 'sourcePort = :source AND destinationPort = :destination',
          ExpressionAttributeValues: {
            ':source': sourcePort,
            ':destination': destinationPort,
          },
        };

        const distanceResult = await dynamodb.scan(distanceParams).promise();
        const distanceItems = distanceResult.Items;

        if (distanceItems.length > 0) {
          const distance = Number(distanceItems[0].distance);
          totalDistance += distance;
        }
      }

      i++;
    }
    // Generate a unique ID
    const id = generateTimestampId();
    
    // Store the data in the DynamoDB table
    const calculatedDataParams = {
      TableName: calculatedDataTableName,
      Item: {
        id: id,
        portNames: ports,
        totalDistance: totalDistance
      }
    };

    await dynamodb.put(calculatedDataParams).promise();

    const response = {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Headers": "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
      },
      body: JSON.stringify({ id, portNames: ports, totalDistance }),
    };
    // Prepare the response with the ID, port names, and total distance

    return response;
  } catch (error) {
    const response = {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Headers": "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
      },
      body: JSON.stringify({ error: error.message }),
    };
    // Handle any errors and prepare the error response

    return response;
  }
};
