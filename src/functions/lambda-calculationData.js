const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB.DocumentClient();
const distanceTableName = 'distanceTable';
const calculatedDataName = 'calculatedData';
const formsTableName = 'formsTable';

// Generate a timestamp-based ID
function generateTimestampId() {
  const timestamp = new Date().getTime();
  const random = Math.floor(Math.random() * 1000); // Generate a random number between 0 and 999
  return `${timestamp}${random}`;
}

exports.handler = async (event) => {
  console.log(JSON.stringify(event, null, 2)); // Log the event details

  try {
    const formId = event.pathParameters.id;

    // Retrieve the form details from the forms table
    const formParams = {
      TableName: formsTableName,
      Key: {
        id: formId
      }
    };

    const formResult = await dynamodb.get(formParams).promise();
    const form = formResult.Item;

    const currency_type = form.currency_type;
    const ports = form.ports;
    const cargos = form.cargos;
    const bunkerFuelRate = form.bunkerFuelRate;
    const dieselFuelRate = form.dieselFuelRate;
    const lubeRate = form.lubeRate;
    const surveying_fees = form.surveyingFees;
    const brokerage_fees = form.brokerageFees;
    const miscCosts = form.miscCosts;


    // Calculate the revenue
    const revenue = cargos.reduce((sum, cargo) => {
      return sum + (cargo.quantity * cargo.rate);
    }, 0);

    // Assuming `ports` is the array containing port data
    let totalDistance = 0;

    for (let i = 0; i < ports.length - 1; i++) {
      const sourcePort = ports[i].port;
      const destinationPort = ports[i+1].port;

      if (sourcePort === "NIL" || destinationPort === "NIL") {
        break;
      }
    
      const distanceParams = {
        TableName: distanceTableName,
        FilterExpression: 'sourcePort = :source AND destinationPort = :destination',
        ExpressionAttributeValues: {
          ':source': sourcePort,
          ':destination': destinationPort
        }
      };
    
      const distanceResult = await dynamodb.scan(distanceParams).promise();
      const distanceItems = distanceResult.Items;
      
      const distance = Number(distanceItems[0].distance);
      totalDistance += (distance);
      
    }
    

    // Duration at sea
    const duration_at_sea = totalDistance / 9; //speed

    // Calculate the total port call duration and crane usage
    const duration_at_port = ports.reduce((sum, ports) => {
      return sum + (ports.port_call * 24);
    }, 0);

    const duration_crane_usage = ports.reduce((sum, ports) => {
      return sum + (ports.crane_usage);
    }, 0);

    // Calculate the fuel costs for HN5
    const main_engine_fuel_cost = duration_at_sea * dieselFuelRate * 195.0; // HN5 no bunker fuel
    const main_diesel_cost = duration_at_sea * dieselFuelRate * 0; // HN5 NA
    const winch_diesel_cost = duration_crane_usage * dieselFuelRate * 56.0;
    const generator_diesel_cost = (duration_at_sea + duration_crane_usage / 24) * dieselFuelRate * 16.0;
    const lube_cost = duration_at_sea * lubeRate * 2.25;

    const fuelCosts = main_engine_fuel_cost + main_diesel_cost + winch_diesel_cost + generator_diesel_cost + lube_cost;

    // Calculate operating costs (THB to USD)
    const operatingCosts = (83577 / 35) * (duration_at_sea + (duration_at_port / 24)); // from operating costs table (fixed costs)

    // Sum of port fees
    const portCosts = ports.reduce((sum, ports) => {
      return sum + (ports.fees);
    }, 0);

    // Cargo Brokerage Fees
    const brokerageCosts = (brokerage_fees / 100) * revenue;

    // Sum of Costs
    const totalCosts = fuelCosts + portCosts + miscCosts + brokerageCosts + operatingCosts + surveying_fees;

    // Calculate the profit
    const profit = revenue - totalCosts;

    // Calculate the margin percentage
    const marginPercentage = (profit / revenue) * 100;

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
        currency_type: currency_type,
        revenue: revenue,
        totalCosts: totalCosts,
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