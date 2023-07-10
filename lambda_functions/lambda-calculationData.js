const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB.DocumentClient();
const distanceTableName = 'distanceTable';
const calculatedDataName = 'calculatedData';
const formsTableName = 'formsTable';

// Generate a timestamp-based ID
function generateTimestampId() {
  const timestamp = new Date().getTime();
  const random = Math.floor(Math.random() * 1000); // Generate a random number between 0 and 999
  return `${timestamp}-${random}`;
}

exports.handler = async (event) => {
  console.log(JSON.stringify(event, null, 2)); // Log the event details

  try {
    const formId = event.queryStringParameters.formId;

    // Retrieve the form details from the forms table
    const formParams = {
      TableName: formsTableName,
      Key: {
        id: formId
      }
    };

    const formResult = await dynamodb.get(formParams).promise();
    const form = formResult.Item;

    const ports = form.ports;
    const cargos = form.cargos;
    const miscCosts = form.miscCosts;
    const totalCraneUsage = form.totalCraneUsage;
    const totalPortDays = form.totalPortDays;
    const dieselFuelRate = form.dieselFuelRate;

    // Calculate the revenue
    const revenue = cargos.reduce((sum, cargo) => {
      return sum + (cargo.quantity * cargo.rate);
    }, 0);

    // Retrieve the distance from the distances table (assuming source and destination ports are available in the form)
    const distanceParams = {
      TableName: distanceTableName,
      FilterExpression: 'sourcePort IN (:ports) AND destinationPort IN (:ports)',
      ExpressionAttributeValues: {
        ':ports': ports
      },
    };

    const distanceResult = await dynamodb.scan(distanceParams).promise();
    const distanceItems = distanceResult.Items;

    // Calculate the total distance
    const totalDistance = distanceItems.reduce((sum, item) => {
      return sum + Number(item.distance);
    }, 0);

    // Calculate the costs
    const costs = (totalDistance * dieselFuelRate) + (totalCraneUsage * form.bunkerFuelRate) + (totalPortDays * dieselFuelRate) + miscCosts;

    // Calculate the profit
    const profit = revenue - costs;

    // Calculate the margin percentage
    const marginPercentage = (profit / revenue) * 100;

    // Calculate the fuel costs
    const fuelCosts = (totalDistance * dieselFuelRate) + (totalCraneUsage * form.bunkerFuelRate) + (totalPortDays * dieselFuelRate);

    // Calculate the percentage fuel costs
    const percentageFuelCost = (fuelCosts / revenue) * 100;

    // Generate a unique ID
    const id = generateTimestampId();

    // Get the current timestamp for created_at
    const created_at = new Date().toISOString();
    
    // Store the calculation results in the calculated data table
    const calculatedDataParams = {
      TableName: calculatedDataName,
      Item: {
        id: id,
        formId: formId,
        revenue: revenue,
        costs: costs,
        profit: profit,
        marginPercentage: marginPercentage,
        fuelCosts: fuelCosts,
        percentageFuelCost: percentageFuelCost,
        created_at: created_at

      }
    };

    await dynamodb.put(calculatedDataParams).promise();

    const response = {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Headers": "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
      },
      body: JSON.stringify({ id, message: "Calculation performed successfully" }),
    };
    // Prepare the response with the ID and success message

    return response;
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
    // Handle any errors and prepare the error response

    return response;
  }
};
