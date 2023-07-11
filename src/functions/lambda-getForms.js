const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
  // Retrieve the form ID from the request path parameters
  const formId = event.pathParameters.id;

  try {
    // Retrieve the form data from the database
    const params = {
      TableName: 'YourTableName', // Replace with your DynamoDB table name
      Key: {
        id: formId,
      },
    };

    const result = await dynamodb.get(params).promise();

    // Return the form data in the response
    return {
      statusCode: 200,
      body: JSON.stringify(result.Item),
    };
  } catch (error) {
    // Return an error response if any error occurs
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Failed to retrieve form data' }),
    };
  }
};
