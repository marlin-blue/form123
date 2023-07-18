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
    const exchange_rate = form.exchangeRate
    const dieselFuelRate = form.dieselFuelRate * exchange_rate;
    const lubeRate = form.lubeRate * exchange_rate;
    const voyageBonus = form.voyageBonus * exchange_rate;
    const miscCosts = form.miscCosts * exchange_rate;
    const cargoData = form.cargos;

    // Calculate the revenue
    const revenue = cargos.reduce((sum, cargo) => {
      return sum + (cargo.quantity * cargo.rate * exchange_rate);
    }, 0);

    // Cargo Brokerage Fees
    const brokerageCosts = cargos.reduce((sum, cargo) => {
      return sum + ((cargo.brokerage_fees / 100) * (cargo.quantity * cargo.rate * exchange_rate))
    }, 0);

    //Calculate total Surveying Fees
    const totalSurveyingFees = ports.reduce((sum, ports) => {
      return sum + (ports.surveying_fees * exchange_rate);
    }, 0);

    // Assuming `ports` is the array containing port data
    let totalDistance = 0;

    for (let i = 0; i < ports.length - 1; i++) {
      const sourcePort = ports[i].port;
      const destinationPort = ports[i + 1].port;

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
    const hn5_main_engine_fuel_cost = duration_at_sea * dieselFuelRate * (195.0); // HN5 no bunker fuel
    const hn5_main_diesel_cost = duration_at_sea * dieselFuelRate * 0; // HN5 NA
    const hn5_winch_diesel_cost = duration_crane_usage * dieselFuelRate * (56.0);
    const hn5_generator_diesel_cost = (duration_at_sea + (duration_crane_usage / 24)) * dieselFuelRate * (16.0);
    const hn5_lube_cost = duration_at_sea * lubeRate * (2.25);

    // Calculate the fuel costs for HN9
    const hn9_main_engine_fuel_cost = duration_at_sea * dieselFuelRate * (162.6); // HN5 no bunker fuel
    const hn9_main_diesel_cost = duration_at_sea * dieselFuelRate * 0; // HN5 NA
    const hn9_winch_diesel_cost = duration_crane_usage * dieselFuelRate * (56.0);
    const hn9_generator_diesel_cost = (duration_at_sea + (duration_crane_usage / 24)) * dieselFuelRate * (16.0);
    const hn9_lube_cost = duration_at_sea * lubeRate * (2.25);

    const hn5_fuelCosts =
      hn5_main_engine_fuel_cost +
      hn5_main_diesel_cost +
      hn5_winch_diesel_cost +
      hn5_generator_diesel_cost +
      hn5_lube_cost;

    const hn9_fuelCosts =
      hn9_main_engine_fuel_cost +
      hn9_main_diesel_cost +
      hn9_winch_diesel_cost +
      hn9_generator_diesel_cost +
      hn9_lube_cost;

    // Calculate operating costs for HN5
    const hn5_operatingCosts = (83577) * ((duration_at_sea + duration_at_port) / 24); // from operating costs table (fixed costs)

    // Calculate operating costs for HN9
    const hn9_operatingCosts = (73757) * ((duration_at_sea + duration_at_port) / 24); // from operating costs table (fixed costs)

    // Sum of port fees
    const portCosts = ports.reduce((sum, ports) => {
      return sum + (ports.fees * exchange_rate);
    }, 0);

    // Sum of Costs
    const hn5_totalCosts = (hn5_fuelCosts + portCosts + miscCosts
      + brokerageCosts + hn5_operatingCosts + voyageBonus + totalSurveyingFees);

    const hn9_totalCosts = (hn9_fuelCosts + portCosts + miscCosts
      + brokerageCosts + hn9_operatingCosts + voyageBonus + totalSurveyingFees);

    // Calculate the profit
    const hn5_profit = (revenue - hn5_totalCosts);
    const hn9_profit = (revenue - hn9_totalCosts);

    // Calculate the margin percentage
    let hn5_marginPercentage;
    if (revenue <= 0) {
      hn5_marginPercentage = 0;
    } else {
      hn5_marginPercentage = (hn5_profit / revenue) * 100;
    }


    let hn9_marginPercentage;
    if (revenue <= 0) {
      hn9_marginPercentage = 0;
    } else {
      hn9_marginPercentage = (hn9_profit / revenue) * 100;
    }

    // Calculate the percentage fuel costs
    let hn5_fuelCostsPercentage;
    if (revenue <= 0) {
      hn5_fuelCostsPercentage = 0;
    } else {
      hn5_fuelCostsPercentage = (hn5_fuelCosts / revenue) * 100;
    }

    let hn9_fuelCostsPercentage;
    if (revenue <= 0) {
      hn9_fuelCostsPercentage = 0;
    } else {
      hn9_fuelCostsPercentage = (hn9_fuelCosts / revenue) * 100;
    }

    // Generate a unique ID
    const id = generateTimestampId();

    // Get the current timestamp for created_at
    const created_at = new Date().toISOString();
    console.log("currency_type:", currency_type)
    console.log("exchange_rate:", exchange_rate)
    console.log("ports:", ports)
    console.log("cargos:", cargos)
    console.log("exchangeRate:", exchange_rate)
    console.log("dieselFuelRate:", dieselFuelRate)
    console.log("lubeRate:", lubeRate)
    console.log("voyageBonus:", voyageBonus)
    console.log("miscCosts:", miscCosts)
    console.log("revenue:", revenue)
    console.log("brokerageCosts:", brokerageCosts)
    console.log("totalSurveyingFees:", totalSurveyingFees)
    console.log("totalDistance:", totalDistance)
    console.log("duration_at_sea:", duration_at_sea)
    console.log("duration_at_port:", duration_at_port)
    console.log("duration_crane_usage:", duration_crane_usage)
    console.log("fuelCosts:", hn5_fuelCosts)
    console.log("fuelCosts:", hn9_fuelCosts)
    console.log("hn5 operatingCosts:", hn5_operatingCosts)
    console.log("hn9 operatingCosts:", hn9_operatingCosts)
    console.log("portCosts:", portCosts)
    console.log("profit:", hn5_profit)
    console.log("profit:", hn9_profit)
    console.log("marginPercentage:", hn5_marginPercentage)
    console.log("fuelCostsPercentage:", hn5_fuelCostsPercentage)
    console.log("marginPercentage:", hn9_marginPercentage)
    console.log("fuelCostsPercentage:", hn9_fuelCostsPercentage)
    console.log("cargos:", cargos)
    // Store the calculation results in the calculated data table
    const calculatedDataParams = {
      TableName: calculatedDataName,
      Item: {
        id: id,
        formId: formId,
        currency_type: currency_type,
        revenue: revenue,

        hn5_totalCosts: hn5_totalCosts,
        hn5_profit: hn5_profit,
        hn5_marginPercentage: hn5_marginPercentage,
        hn5_fuelCosts: hn5_fuelCosts,
        hn5_fuelCostsPercentage: hn5_fuelCostsPercentage,

        hn9_totalCosts: hn9_totalCosts,
        hn9_profit: hn9_profit,
        hn9_marginPercentage: hn9_marginPercentage,
        hn9_fuelCosts: hn9_fuelCosts,
        hn9_fuelCostsPercentage: hn9_fuelCostsPercentage,

        cargoData: cargoData,
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