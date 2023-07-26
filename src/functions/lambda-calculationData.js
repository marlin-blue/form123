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
    const diesel_rate = form.dieselFuelRate * exchange_rate;
    const bunker_rate = form.bunkerFuelRate * exchange_rate;
    const lube_rate = form.lubeRate * exchange_rate;
    const voyageBonus = form.voyageBonus * exchange_rate;
    const cargoData = form.cargos;

    const hideData = false;

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
    let errorMessage = ''; // Initialize the error message variable

    for (let i = 0; i < ports.length - 1; i++) {
      const sourcePort = ports[i].port;
      const destinationPort = ports[i + 1].port;

      if (sourcePort === "NIL" || destinationPort === "NIL") {
        break;
      }
      if (sourcePort === destinationPort) {
        totalDistance += 0; // Add distance = 0
      } else {
        const distanceParams = {
          TableName: distanceTableName,
          FilterExpression: 'sourcePort = :source AND destinationPort = :destination',
          ExpressionAttributeValues: {
            ':source': sourcePort,
            ':destination': destinationPort
          }
        };

        try {
          const distanceResult = await dynamodb.scan(distanceParams).promise();
          const distanceItems = distanceResult.Items;

          if (distanceItems.length === 0) {
            errorMessage = `Distance between ${sourcePort} and ${destinationPort} not available!`;
            throw new Error(errorMessage);
          }

          const distance = Number(distanceItems[0].distance);
          totalDistance += distance;
        } catch (error) {
          console.error(error);
          errorMessage = `Distance between ${sourcePort} and ${destinationPort} not available!`;
          throw new Error(errorMessage);
        }
      }
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
    const hn5_main_engine_fuel_cost = duration_at_sea * bunker_rate * (195.0);
    const hn5_main_diesel_cost = duration_at_sea * diesel_rate * 0; // HN5 NA
    const hn5_winch_diesel_cost = duration_crane_usage * diesel_rate * (56.0);
    const hn5_generator_diesel_cost = (duration_at_sea + duration_at_port) * diesel_rate * (16.0);
    const hn5_lube_cost = duration_at_sea * lube_rate * (2.25);


    // Calculate the fuel costs for HN9
    const hn9_main_engine_fuel_cost = duration_at_sea * bunker_rate * (162.6);
    const hn9_main_diesel_cost = duration_at_sea * diesel_rate * 0; // HN9 NA
    const hn9_winch_diesel_cost = duration_crane_usage * diesel_rate * (56.0);
    const hn9_generator_diesel_cost = (duration_at_sea + duration_at_port) * diesel_rate * (16.0);
    const hn9_lube_cost = duration_at_sea * lube_rate * (2.25);

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
    const hn5_operatingCosts = (83630.6039623607) * ((duration_at_sea + duration_at_port) / 24); // from operating costs table (fixed costs)

    // Calculate operating costs for HN9
    const hn9_operatingCosts = (73803.5818451258) * ((duration_at_sea + duration_at_port) / 24); // from operating costs table (fixed costs)

    // Sum of port fees
    const portCosts = ports.reduce((sum, ports) => {
      return sum + (ports.fees * exchange_rate);
    }, 0);

    // Sum of misc costs
    const totalMiscCosts = ports.reduce((sum, ports) => {
      return sum + (ports.miscCosts * exchange_rate);
    }, 0);

    // Sum of Costs
    const hn5_totalCosts = (hn5_fuelCosts + portCosts + totalMiscCosts
      + brokerageCosts + hn5_operatingCosts + voyageBonus + totalSurveyingFees);

    const voyageExpenses = portCosts + totalMiscCosts + brokerageCosts + voyageBonus + totalSurveyingFees;

    const hn9_totalCosts = (hn9_fuelCosts + portCosts + totalMiscCosts
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
    const username = form.username;
    // Store the calculation results in the calculated data table
    const calculatedDataParams = {
      TableName: calculatedDataName,
      Item: {
        id: id,
        formId: formId,
        username: username,
        currency_type: currency_type,
        revenue: revenue,
        ports: ports,

        duration_at_sea: duration_at_sea,
        duration_at_port: duration_at_port,
        duration_crane_usage: duration_crane_usage,

        portCosts: portCosts,
        totalSurveyingFees: totalSurveyingFees,
        brokerageCosts: brokerageCosts,
        totalMiscCosts: totalMiscCosts,
        voyageBonus: voyageBonus,
        voyageExpenses: voyageExpenses,

        hn5_totalCosts: hn5_totalCosts,
        hn5_profit: hn5_profit,
        hn5_marginPercentage: hn5_marginPercentage,
        hn5_fuelCosts: hn5_fuelCosts,
        hn5_fuelCostsPercentage: hn5_fuelCostsPercentage,
        hn5_operatingCosts: hn5_operatingCosts,

        hn9_totalCosts: hn9_totalCosts,
        hn9_profit: hn9_profit,
        hn9_marginPercentage: hn9_marginPercentage,
        hn9_fuelCosts: hn9_fuelCosts,
        hn9_fuelCostsPercentage: hn9_fuelCostsPercentage,
        hn9_operatingCosts: hn9_operatingCosts,

        cargoData: cargoData,
        created_at: created_at,
        hideData: hideData
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
      statusCode: 404,
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