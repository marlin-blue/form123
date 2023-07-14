const axios = require('axios');
const apiUrl = 'https://c6wt2zay38.execute-api.us-west-2.amazonaws.com/prod';

export async function storeFormAPICall(formInputs) {
  try {

    const queryStringParameters = {
      currency_type: formInputs.currency_type,
      port1: formInputs.port1,
      port1_fees: formInputs.port1_fees,
      port1_port_call: formInputs.port1_port_call,
      port1_crane_usage: formInputs.port1_crane_usage,
      port2: formInputs.port2,
      port2_fees: formInputs.port2_fees,
      port2_port_call: formInputs.port2_port_call,
      port2_crane_usage: formInputs.port2_crane_usage,
      port3: formInputs.port3,
      port3_fees: formInputs.port3_fees,
      port3_port_call: formInputs.port3_port_call,
      port3_crane_usage: formInputs.port3_crane_usage,
      port4: formInputs.port4,
      port4_fees: formInputs.port4_fees,
      port4_port_call: formInputs.port4_port_call,
      port4_crane_usage: formInputs.port4_crane_usage,
      port5: formInputs.port5,
      port5_fees: formInputs.port5_fees,
      port5_port_call: formInputs.port5_port_call,
      port5_crane_usage: formInputs.port5_crane_usage,
      port6: formInputs.port6,
      port6_fees: formInputs.port6_fees,
      port6_port_call: formInputs.port6_port_call,
      port6_crane_usage: formInputs.port6_crane_usage,
      cargo1: formInputs.cargo1,
      cargo1_quantity: formInputs.cargo1_quantity,
      cargo1_rate: formInputs.cargo1_rate,
      cargo2: formInputs.cargo2,
      cargo2_quantity: formInputs.cargo2_quantity,
      cargo2_rate: formInputs.cargo2_rate,
      cargo3: formInputs.cargo3,
      cargo3_quantity: formInputs.cargo3_quantity,
      cargo3_rate: formInputs.cargo3_rate,
      cargo4: formInputs.cargo4,
      cargo4_quantity: formInputs.cargo4_quantity,
      cargo4_rate: formInputs.cargo4_rate,
      cargo5: formInputs.cargo5,
      cargo5_quantity: formInputs.cargo5_quantity,
      cargo5_rate: formInputs.cargo5_rate,
      cargo6: formInputs.cargo6,
      cargo6_quantity: formInputs.cargo6_quantity,
      cargo6_rate: formInputs.cargo6_rate,
      bunker_rate: formInputs.bunker_rate,
      diesel_rate: formInputs.diesel_rate,
      lube_rate: formInputs.lube_rate,
      brokerage_fees: formInputs.brokerage_fees,
      surveying_fees: formInputs.surveying_fees,
      miscCosts: formInputs.miscCosts,
    };    

    const response = await axios.get(`${apiUrl}/form`, {
      params: queryStringParameters,
    });
    console.log('Submitted Data:', formInputs);
    return response.data;
  } catch (error) {
    console.error('StoreForm API call error:', error);
    throw new Error(error);
  }
}

// export async function updateFormAPICall(formId, formInputs) {
//   try {
//     const response = await fetch(`https://wyvjgrod85.execute-api.us-west-2.amazonaws.com/prod/form/${formId}`, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(formInputs),
//     });

//     if (!response.ok) {
//       throw new Error('Failed to update form data');
//     }

//     const result = await response.json();
//     return result;
//   } catch (error) {
//     throw new Error(error.message);
//   }
// }



// export async function getFormAPICall(formId) {
//   try {
//     const apiUrl = `https://wyvjgrod85.execute-api.us-west-2.amazonaws.com/prod/form/${formId}`;

//     const response = await fetch(apiUrl);
//     const data = await response.json();

//     if (response.ok) {
//       // API call was successful, return the form data
//       return data;
//     } else {
//       // API call returned an error, throw an error with the message
//       throw new Error(data.message);
//     }
//   } catch (error) {
//     console.error('GetForm API call error:', error);
//     throw error;
//   }
// }


export async function calculateDataAPICall(formId) {

  try {
    const response = await axios.get(`${apiUrl}/calculate/${formId}`);
    return response.data;
  } catch (error) {
    console.error('Calcuate API call error:', error);
    throw error;
  }
}

export async function fetchCalculationAPICall(calculationId) {
  try {
    const response = await axios.get(`${apiUrl}/calculate/display/${calculationId}`);
    return response.data;
  } catch (error) {
    console.error('Display Calcuation API call error:', error);
    throw error;
  }
}