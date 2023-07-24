const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
  try {
    // Retrieve the form ID from the request path parameters
    const formId = event.pathParameters.id;

    // Retrieve the form data from the DynamoDB table
    const params = {
      TableName: 'formsTable',
      KeyConditionExpression: 'id = :formId', // Fix the KeyConditionExpression to filter by formId
      ExpressionAttributeValues: {
        ':formId': formId,
      },
    };

    const result = await dynamodb.query(params).promise();

    // Check if any items were found
    if (!result.Items || result.Items.length === 0) {
      // Return a 404 Not Found response
      return {
        statusCode: 404,
        headers: {
          "Access-Control-Allow-Headers": "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
        },
        body: JSON.stringify({ error: 'Form data not found' }),
      };
    }

    // Return the form data
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Headers": "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
      },
      body: JSON.stringify(result.Items[0]), // Assuming the ID is unique and you only want to return one item
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
      body: JSON.stringify({ error: 'An error occurred while retrieving the form data' })
    };
  }
};
