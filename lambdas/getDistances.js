const AWS = require('aws-sdk');

const dynamodb = new AWS.DynamoDB.DocumentClient();
const tableName = 'distance';

exports.handler = async (event) => {
  console.log(JSON.stringify(event, null, 2)); // Log the event details

  try {
    const sourcePort = event.queryStringParameters.sourcePort;
    const destinationPort = event.queryStringParameters.destinationPort;
    // Retrieve the sourcePort and destinationPort values from the query string parameters

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
    const items = result.Items;
    // Retrieve the items from the result
    try {
      

    if (items.length > 0) {
      const distance = items[0].distance;
      // Retrieve the distance value from the items

      const response = {
        statusCode: 200,
        headers: {
          "Access-Control-Allow-Headers": "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
        },
        body: JSON.stringify({ distance }),
      };
      // Prepare the response with the retrieved distance value

      return response;
    } else {
      throw new Error('Pair Not Found');
    }
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
    // Handle the "Pair Not Found" scenario and prepare the error response

    return response;
  }
};


// test
//{
//    "queryStringParameters": {
//      "sourcePort": "Bangkok (BK)",
//      "destinationPort": "Batam (BAT)"
//    }
//  }
// api query: sourcePort=Bangkok (BK)&destinationPort=Batam (BAT)
//https://27ph7xpsud.execute-api.us-west-2.amazonaws.com/prod/distance?sourcePort=Bangkok%20(BK)&destinationPort=Batam%20(BAT)