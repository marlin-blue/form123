const AWS = require('aws-sdk');

exports.handler = async (event) => {
  try {
    // Retrieve the calculation ID from the request path parameters
    const calculationId = event.pathParameters.id;

    // Create a DynamoDB DocumentClient
    const dynamodb = new AWS.DynamoDB.DocumentClient();

    // Retrieve the calculation data from the DynamoDB table
    const params = {
      TableName: 'calculatedData',
      KeyConditionExpression: 'id = :id',
      ExpressionAttributeValues: {
        ':id': calculationId
      }
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
        body: JSON.stringify({ error: 'Calculation data not found' }),
      };
    }

    const calculationData = result.Items[0];
    calculationData.hideData = !calculationData.hideData;
    console.log(calculationData.hideData);

    // Update the item in DynamoDB
    const updateParams = {
      TableName: 'calculatedData',
      Key: { id: calculationId, created_at: calculationData.created_at },
      UpdateExpression: 'SET hideData = :hideData',
      ExpressionAttributeValues: { ':hideData': calculationData.hideData },
      ReturnValues: 'ALL_NEW',
    };

    await dynamodb.update(updateParams).promise();

    // Return the calculation data
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Headers": "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
      },
      body: JSON.stringify(calculationData.hideData),
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
