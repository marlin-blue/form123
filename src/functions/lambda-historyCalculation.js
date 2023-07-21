const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event, context) => {
  try {

    const tableName = 'calculatedData';

    // Retrieve the calculation data from the DynamoDB table
    const params = {
      TableName: 'calculatedData',
      IndexName: 'created_at', // Assuming you have created an index on 'created_at' attribute
      KeyConditionExpression: 'created_at > :timestamp', // Change 'created_at' to your attribute name
      ExpressionAttributeValues: {
        ':timestamp': 0, // Provide a timestamp value to retrieve the latest calculations from that point
      },
      ScanIndexForward: false, // Set to false to get the latest calculations in descending order
      Limit: 10, // Number of latest calculations you want to retrieve
    };


    const result = await dynamodb.get(params).promise();

    // Return the calculation data
    return {
      statusCode: 200,      
      headers: {
        "Access-Control-Allow-Headers": "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
      },
      body: JSON.stringify(result.Item),

    };
  } catch (error) {
    console.error(error);

    // Return an error response
    return {
      statusCode: 500,
            headers: {
        "Access-Control-Allow-Headers": "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
      },
      body: JSON.stringify({ error: 'An error occurred while retrieving the data' })
    };
  }
};
