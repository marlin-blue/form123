const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
  const { formId, formData } = event;

  try {
    const params = {
      TableName: 'formsTable',
      Key: { formId },
      UpdateExpression: 'SET formData = :formData',
      ExpressionAttributeValues: { ':formData': formData },
      ReturnValues: 'ALL_NEW',
    };

    const result = await dynamodb.update(params).promise();
    const updatedData = result.Attributes.formData;

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Headers": "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
      },
      body: JSON.stringify({ message: 'Form data updated successfully', formData: updatedData }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Headers": "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
      },
      body: JSON.stringify({ message: 'Failed to update form data', error }),
    };
  }
};
