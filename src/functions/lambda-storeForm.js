const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB.DocumentClient();
const formsTableName = 'formsTable';

// Generate a timestamp-based ID
function generateTimestampId() {
    const timestamp = new Date().getTime();
    const random = Math.floor(Math.random() * 1000); // Generate a random number between 0 and 999
    return `${timestamp}-${random}`;
  }

exports.handler = async (event) => {

  try {
    const ports = [
    {
      port1: event.queryStringParameters.port1,
      port2: event.queryStringParameters.port2,
      port3: event.queryStringParameters.port3,
      port4: event.queryStringParameters.port4,
      port5: event.queryStringParameters.port5,
      port6: event.queryStringParameters.port6
    }
    ];
    
    const cargos = [
      {
        type: event.queryStringParameters.cargo1,
        quantity: parseFloat(event.queryStringParameters.cargo1_quantity),
        rate: parseFloat(event.queryStringParameters.cargo1_rate)
      },
      {
        type: event.queryStringParameters.cargo2,
        quantity: parseFloat(event.queryStringParameters.cargo2_quantity),
        rate: parseFloat(event.queryStringParameters.cargo2_rate)
      },
      {
        type: event.queryStringParameters.cargo3,
        quantity: parseFloat(event.queryStringParameters.cargo3_quantity),
        rate: parseFloat(event.queryStringParameters.cargo3_rate)
      },
      {
        type: event.queryStringParameters.cargo4,
        quantity: parseFloat(event.queryStringParameters.cargo4_quantity),
        rate: parseFloat(event.queryStringParameters.cargo4_rate)
      },
      {
        type: event.queryStringParameters.cargo5,
        quantity: parseFloat(event.queryStringParameters.cargo5_quantity),
        rate: parseFloat(event.queryStringParameters.cargo5_rate)
      },
      {
        type: event.queryStringParameters.cargo6,
        quantity: parseFloat(event.queryStringParameters.cargo6_quantity),
        rate: parseFloat(event.queryStringParameters.cargo6_rate)
      }
    ];

    const miscCosts = parseFloat(event.queryStringParameters.miscCosts);
    const totalCraneUsage = parseFloat(event.queryStringParameters.craneUsage);
    const totalPortDays = parseFloat(event.queryStringParameters.portDays);
    const bunkerFuelRate = parseFloat(event.queryStringParameters.bunker_rate);
    const dieselFuelRate = parseFloat(event.queryStringParameters.diesel_rate);
    
    // Generate a unique ID
    const id = generateTimestampId();
    
    // Get the current timestamp for created_at
    const created_at = new Date().toISOString();
    
    // Store the form details in the DynamoDB table
    const formParams = {
      TableName: formsTableName,
      Item: {
        id: id,
        ports: ports,
        cargos: cargos,
        miscCosts: miscCosts,
        totalCraneUsage: totalCraneUsage,
        totalPortDays: totalPortDays,
        bunkerFuelRate: bunkerFuelRate,
        dieselFuelRate: dieselFuelRate,
        created_at: created_at
        
      }
    };

    await dynamodb.put(formParams).promise();

    const response = {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Headers": "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
      },
      body: JSON.stringify({ id, message: "Form submitted successfully" }),
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