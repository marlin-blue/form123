const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
  // Retrieve the form ID from the request path parameters
  const formId = event.pathParameters.id;

  try {
    // Retrieve the form data from the database
    const params = {
      TableName: 'formsTable', // Replace with your DynamoDB table name
      Key: {
        id: formId,
      },
    };

    const result = await dynamodb.get(params).promise();

    // Return the form data in the response with added headers
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
    // Return an error response with added headers if any error occurs
    return {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Headers": "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
      },
      body: JSON.stringify({ message: 'Failed to retrieve form data' }),
    };
  }
};
