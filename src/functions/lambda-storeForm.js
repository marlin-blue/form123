    const AWS = require('aws-sdk');
    const dynamodb = new AWS.DynamoDB.DocumentClient();
    const formsTableName = 'formsTable';

    // Generate a timestamp-based ID
    function generateTimestampId() {
        const timestamp = new Date().getTime();
        const random = Math.floor(Math.random() * 1000); // Generate a random number between 0 and 999
        return `${timestamp}${random}`;
    }

    exports.handler = async (event) => {
        try {
            // Generate a unique ID
            const id = generateTimestampId();

            // Get the current timestamp for created_at
            const created_at = new Date().toISOString();

            const currency_type = event.queryStringParameters.currency_type;

            const ports = [
                {
                    port: event.queryStringParameters.port1,
                    fees: parseFloat(event.queryStringParameters.port1_fees),
                    port_call: parseFloat(event.queryStringParameters.port1_port_call),
                    crane_usage: parseFloat(event.queryStringParameters.port1_crane_usage),
                    surveying_fees: parseFloat(event.queryStringParameters.port1_surveying_fees),
                    miscCosts: parseFloat(event.queryStringParameters.port1_miscCosts)
                },
                {
                    port: event.queryStringParameters.port2,
                    fees: parseFloat(event.queryStringParameters.port2_fees),
                    port_call: parseFloat(event.queryStringParameters.port2_port_call),
                    crane_usage: parseFloat(event.queryStringParameters.port2_crane_usage),
                    surveying_fees: parseFloat(event.queryStringParameters.port2_surveying_fees),
                    miscCosts: parseFloat(event.queryStringParameters.port2_miscCosts)
                },
                {
                    port: event.queryStringParameters.port3,
                    fees: parseFloat(event.queryStringParameters.port3_fees),
                    port_call: parseFloat(event.queryStringParameters.port3_port_call),
                    crane_usage: parseFloat(event.queryStringParameters.port3_crane_usage),
                    surveying_fees: parseFloat(event.queryStringParameters.port3_surveying_fees),
                    miscCosts: parseFloat(event.queryStringParameters.port3_miscCosts)
                },
                {
                    port: event.queryStringParameters.port4,
                    fees: parseFloat(event.queryStringParameters.port4_fees),
                    port_call: parseFloat(event.queryStringParameters.port4_port_call),
                    crane_usage: parseFloat(event.queryStringParameters.port4_crane_usage),
                    surveying_fees: parseFloat(event.queryStringParameters.port4_surveying_fees),
                    miscCosts: parseFloat(event.queryStringParameters.port4_miscCosts)
                },
                {
                    port: event.queryStringParameters.port5,
                    fees: parseFloat(event.queryStringParameters.port5_fees),
                    port_call: parseFloat(event.queryStringParameters.port5_port_call),
                    crane_usage: parseFloat(event.queryStringParameters.port5_crane_usage),
                    surveying_fees: parseFloat(event.queryStringParameters.port5_surveying_fees),
                    miscCosts: parseFloat(event.queryStringParameters.port5_miscCosts)
                },
                {
                    port: event.queryStringParameters.port6,
                    fees: parseFloat(event.queryStringParameters.port6_fees),
                    port_call: parseFloat(event.queryStringParameters.port6_port_call),
                    crane_usage: parseFloat(event.queryStringParameters.port6_crane_usage),
                    surveying_fees: parseFloat(event.queryStringParameters.port6_surveying_fees),
                    miscCosts: parseFloat(event.queryStringParameters.port6_miscCosts)
                },
                {
                    port: event.queryStringParameters.port7,
                    fees: parseFloat(event.queryStringParameters.port7_fees),
                    port_call: parseFloat(event.queryStringParameters.port7_port_call),
                    crane_usage: parseFloat(event.queryStringParameters.port7_crane_usage),
                    surveying_fees: parseFloat(event.queryStringParameters.port7_surveying_fees),
                    miscCosts: parseFloat(event.queryStringParameters.port7_miscCosts)
                },
                {
                    port: event.queryStringParameters.port8,
                    fees: parseFloat(event.queryStringParameters.port8_fees),
                    port_call: parseFloat(event.queryStringParameters.port8_port_call),
                    crane_usage: parseFloat(event.queryStringParameters.port8_crane_usage),
                    surveying_fees: parseFloat(event.queryStringParameters.port8_surveying_fees),
                    miscCosts: parseFloat(event.queryStringParameters.port8_miscCosts)
                },
                {
                    port: event.queryStringParameters.port9,
                    fees: parseFloat(event.queryStringParameters.port9_fees),
                    port_call: parseFloat(event.queryStringParameters.port9_port_call),
                    crane_usage: parseFloat(event.queryStringParameters.port9_crane_usage),
                    surveying_fees: parseFloat(event.queryStringParameters.port9_surveying_fees),
                    miscCosts: parseFloat(event.queryStringParameters.port9_miscCosts)
                },
                {
                    port: event.queryStringParameters.port10,
                    fees: parseFloat(event.queryStringParameters.port10_fees),
                    port_call: parseFloat(event.queryStringParameters.port10_port_call),
                    crane_usage: parseFloat(event.queryStringParameters.port10_crane_usage),
                    surveying_fees: parseFloat(event.queryStringParameters.port10_surveying_fees),
                    miscCosts: parseFloat(event.queryStringParameters.port10_miscCosts)
                }
            ];

            const cargos = [
                {
                    type: event.queryStringParameters.cargo1_type,
                    quantity: parseFloat(event.queryStringParameters.cargo1_quantity),
                    rate: parseFloat(event.queryStringParameters.cargo1_rate),
                    brokerage_fees: parseFloat(event.queryStringParameters.cargo1_brokerage_fees)
                },
                {
                    type: event.queryStringParameters.cargo2_type,
                    quantity: parseFloat(event.queryStringParameters.cargo2_quantity),
                    rate: parseFloat(event.queryStringParameters.cargo2_rate),
                    brokerage_fees: parseFloat(event.queryStringParameters.cargo2_brokerage_fees)
                },
                {
                    type: event.queryStringParameters.cargo3_type,
                    quantity: parseFloat(event.queryStringParameters.cargo3_quantity),
                    rate: parseFloat(event.queryStringParameters.cargo3_rate),
                    brokerage_fees: parseFloat(event.queryStringParameters.cargo3_brokerage_fees)
                },
                {
                    type: event.queryStringParameters.cargo4_type,
                    quantity: parseFloat(event.queryStringParameters.cargo4_quantity),
                    rate: parseFloat(event.queryStringParameters.cargo4_rate),
                    brokerage_fees: parseFloat(event.queryStringParameters.cargo4_brokerage_fees)
                },
                {
                    type: event.queryStringParameters.cargo5_type,
                    quantity: parseFloat(event.queryStringParameters.cargo5_quantity),
                    rate: parseFloat(event.queryStringParameters.cargo5_rate),
                    brokerage_fees: parseFloat(event.queryStringParameters.cargo5_brokerage_fees)
                },
                {
                    type: event.queryStringParameters.cargo6_type,
                    quantity: parseFloat(event.queryStringParameters.cargo6_quantity),
                    rate: parseFloat(event.queryStringParameters.cargo6_rate),
                    brokerage_fees: parseFloat(event.queryStringParameters.cargo6_brokerage_fees)
                },
                {
                    type: event.queryStringParameters.cargo6_type,
                    quantity: parseFloat(event.queryStringParameters.cargo6_quantity),
                    rate: parseFloat(event.queryStringParameters.cargo6_rate),
                    brokerage_fees: parseFloat(event.queryStringParameters.cargo6_brokerage_fees)
                }
                
            ];

            const exchangeRate = parseFloat(event.queryStringParameters.exchange_rate);
            const dieselFuelRate = parseFloat(event.queryStringParameters.diesel_rate);
            const bunkerFuelRate = parseFloat(event.queryStringParameters.bunker_rate);
            const lubeRate = parseFloat(event.queryStringParameters.lube_rate);
            const voyageBonus = parseFloat(event.queryStringParameters.voyageBonus);

            // Store the form details in the DynamoDB table
            const formParams = {
                TableName: formsTableName,
                Item: {
                    id: id,
                    created_at: created_at,
                    currency_type: currency_type,
                    ports: ports,
                    cargos: cargos,
                    exchangeRate: exchangeRate,
                    dieselFuelRate: dieselFuelRate,
                    bunkerFuelRate: bunkerFuelRate,
                    lubeRate: lubeRate,
                    voyageBonus: voyageBonus,
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
            let errorMessage = 'An error occurred';
            if (error.parameter) {
                errorMessage += `: The parameter '${error.parameter}' cannot be converted to a numeric value`;
            } else {
                errorMessage += `: ${error.message}`;
            }
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
