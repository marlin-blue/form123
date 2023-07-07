const AWS = require('aws-sdk');

const dynamodb = new AWS.DynamoDB.DocumentClient();
const tableName = 'distance';

exports.handler = async (event) => {
  try {
    const { sourcePort, destinationPort } = JSON.parse(event.body);
    // Retrieve the sourcePort and destinationPort values from the request body

    const params = {
      TableName: tableName,
      FilterExpression: 'sourcePort = :source AND destinationPort = :destination',
      ExpressionAttributeValues: {
        ':source': sourcePort,
        ':destination': destinationPort,
      },
    };
    // Use the sourcePort and destinationPort values in the FilterExpression and ExpressionAttributeValues

    const result = await dynamodb.scan(params).promise();
    const distance = result.Items[0].distance;
    // Retrieve the distance value from the result

    const response = {
      statusCode: 200,
      body: JSON.stringify({ distance }),
    };
    // Prepare the response with the retrieved distance value

    return response;
  } catch (error) {
    const response = {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
    // Handle any errors and prepare the error response

    return response;
  }
};
