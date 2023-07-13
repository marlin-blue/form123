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
    // Generate a unique ID
    const id = generateTimestampId();
    
    // Get the current timestamp for created_at
    const created_at = new Date().toISOString();

    const voyage_type = event.queryStringParameters.voyage_type  //radio button 

    const currency_type = event.queryStringParameters.currency_type
    
    const vessels = [ 
    { 
    vessel_ht1: event.queryStringParameters.voyage_ht1 === 'true',
    vessel_hn5: event.queryStringParameters.voyage_hn5 === 'true',
    vessel_hn7: event.queryStringParameters.voyage_hn7 === 'true',
    vessel_hn9: event.queryStringParameters.voyage_hn9 === 'true',
    vessel_hn10: event.queryStringParameter.voyage_hn10 === 'true',
    vessel_ht20: event.queryStringParameters.voyage_ht20 === 'true',
    vessel_ht21: event.queryStringParameters.voyage_ht21 === 'true'
    }] // boonlean 

    const ports = [
    {
      port1: event.queryStringParameters.port1,
      port1_fees: event.queryStringParameters.port1_fees,
      port1_port_call:event.queryStringParameters.port1_port_call,
      port1_crane_usage:event.queryStringParameters.port1_crane_usage
    },
    {
      port2: event.queryStringParameters.port2,
      port2_fees: event.queryStringParameters.port2_fees,
      port2_port_call:event.queryStringParameters.port2_port_call,
      port2_crane_usage:event.queryStringParameters.port2_crane_usage
    },
    {  
      port3: event.queryStringParameters.port3,
      port3_fees: event.queryStringParameters.port3_fees,
      port3_port_call:event.queryStringParameters.port3_port_call,
      port3_crane_usage:event.queryStringParameters.port3_crane_usage
    },
    {  
      port4: event.queryStringParameters.port4,
      port4_fees: event.queryStringParameters.port4_fees,
      port4_port_call:event.queryStringParameters.port4_port_call,
      port4_crane_usage:event.queryStringParameters.port4_crane_usage
    },
    {  
      port5: event.queryStringParameters.port5,
      port5_fees: event.queryStringParameters.port5_fees,
      port5_port_call:event.queryStringParameters.port5_port_call,
      port5_crane_usage:event.queryStringParameters.port5_crane_usage
    },
    {  
      port6: event.queryStringParameters.port6,
      port6_fees: event.queryStringParameters.port6_fees,
      port6_port_call:event.queryStringParameters.port6_port_call,
      port6_crane_usage:event.queryStringParameters.port6_crane_usage
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
    const bunkerFuelRate = parseFloat(event.queryStringParameters.bunker_rate);
    const dieselFuelRate = parseFloat(event.queryStringParameters.diesel_rate);
    const lubeRate = parseFloat(event.queryStringParameters.lube_rate);
    const surveyingFees = parseFloat(event.queryStringParameters.surveying_fees);
    const brokerageFees = parseFloat(event.queryStringParameters.brokerage_fees);
    const miscCosts = parseFloat(event.queryStringParameters.miscCosts);
    const totalCraneUsage = parseFloat(event.queryStringParameters.craneUsage);
    const totalPortDays = parseFloat(event.queryStringParameters.portDays);

    // Store the form details in the DynamoDB table
    const formParams = {
      TableName: formsTableName,
      Item: {
        id: id,
        created_at: created_at,
        voyage_type: voyage_type,
        currency_type: currency_type,
        vessels: vessels,
        ports: ports,
        cargos: cargos,
        miscCosts: miscCosts,
        totalCraneUsage: totalCraneUsage,
        totalPortDays: totalPortDays,
        bunkerFuelRate: bunkerFuelRate,
        dieselFuelRate: dieselFuelRate,
        lubeRate: lubeRate,
        surveyingFees: surveyingFees,
        brokerageFees: brokerageFees
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