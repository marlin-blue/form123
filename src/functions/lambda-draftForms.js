const AWS = require("aws-sdk");
const dynamodb = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event, context) => {
  try {
    // Get the pagination token from the query parameters
    const { nextToken } = event.queryStringParameters || {};

    // Parameters for the DynamoDB scan
    const params = {
      TableName: "formsTable",
      ExclusiveStartKey: nextToken
        ? JSON.parse(decodeURIComponent(nextToken))
        : undefined, // Use the pagination token
    };

    // Perform the scan operation
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
    // Handle any errors that occur during the scan
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
