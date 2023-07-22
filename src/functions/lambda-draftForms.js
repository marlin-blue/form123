const AWS = require("aws-sdk");
const dynamodb = new AWS.DynamoDB.DocumentClient();
exports.handler = async (event, context) => {
  try {
    // Get the pagination token from the query parameters
    const { nextToken } = event.queryStringParameters || {};

    // Parameters for the DynamoDB query
    const params = {
      TableName: "formsTable",
      ScanIndexForward: false, // Set to false to get the latest items first
      Limit: 10, // Get the next 10 items
      ExclusiveStartKey: nextToken
        ? JSON.parse(decodeURIComponent(nextToken))
        : undefined, // Use the pagination token
    };

    // Perform the query
    const result = await dynamodb.scan(params).promise();

    // Create the next pagination token for the next query
    const nextPaginationToken = result.LastEvaluatedKey
      ? encodeURIComponent(JSON.stringify(result.LastEvaluatedKey))
      : null;

    // Return the retrieved items along with the next pagination token
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Headers":
          "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
      },
      body: JSON.stringify({
        items: result.Items,
        nextToken: nextPaginationToken,
      }),
    };
  } catch (error) {
    // Handle any errors that occur during the query
    return {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Headers":
          "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
      },
      body: JSON.stringify({
        message: "An error occurred while retrieving data.",
      }),
    };
  }
};
