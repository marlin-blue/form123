const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
  try {
    // Retrieve the form ID from the request path parameters
    const formId = event.pathParameters.id;

    // Retrieve the calculation data from the DynamoDB table
    const params = {
      TableName: 'calculatedData',
      Key: {
        id: formId
      }
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
      body: JSON.stringify({ error: 'An error occurred while retrieving the calculation data' })
    };
  }
};
