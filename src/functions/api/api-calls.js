const axios = require('axios');
const apiUrl = 'https://mms8hsgh9g.execute-api.ap-southeast-2.amazonaws.com/prod';

export async function storeFormAPICall(formInputs) {
  try {

    const queryStringParameters = {
      currency_type: formInputs.currency_type,
      port1: formInputs.port1,
      port1_fees: formInputs.port1_fees,
      port1_port_call: formInputs.port1_port_call,
      port1_crane_usage: formInputs.port1_crane_usage,
      port1_surveying_fees: formInputs.port1_surveying_fees,
      port1_miscCosts: formInputs.port1_miscCosts,
      port2: formInputs.port2,
      port2_fees: formInputs.port2_fees,
      port2_port_call: formInputs.port2_port_call,
      port2_crane_usage: formInputs.port2_crane_usage,
      port2_surveying_fees: formInputs.port2_surveying_fees,
      port2_miscCosts: formInputs.port2_miscCosts,
      
      port3: formInputs.port3,
      port3_fees: formInputs.port3_fees,
      port3_port_call: formInputs.port3_port_call,
      port3_crane_usage: formInputs.port3_crane_usage,
      port3_surveying_fees: formInputs.port3_surveying_fees,
      port3_miscCosts: formInputs.port3_miscCosts,

      port4: formInputs.port4,
      port4_fees: formInputs.port4_fees,
      port4_port_call: formInputs.port4_port_call,
      port4_crane_usage: formInputs.port4_crane_usage,
      port4_surveying_fees: formInputs.port4_surveying_fees,
      port4_miscCosts: formInputs.port4_miscCosts,

      port5: formInputs.port5,
      port5_fees: formInputs.port5_fees,
      port5_port_call: formInputs.port5_port_call,
      port5_crane_usage: formInputs.port5_crane_usage,
      port5_surveying_fees: formInputs.port5_surveying_fees,
      port5_miscCosts: formInputs.port5_miscCosts,

      port6: formInputs.port6,
      port6_fees: formInputs.port6_fees,
      port6_port_call: formInputs.port6_port_call,
      port6_crane_usage: formInputs.port6_crane_usage,
      port6_surveying_fees: formInputs.port6_surveying_fees,
      port6_miscCosts: formInputs.port6_miscCosts,

      port7: formInputs.port7,
      port7_fees: formInputs.port7_fees,
      port7_port_call: formInputs.port7_port_call,
      port7_crane_usage: formInputs.port7_crane_usage,
      port7_surveying_fees: formInputs.port7_surveying_fees,
      port7_miscCosts: formInputs.port7_miscCosts,

      port8: formInputs.port8,
      port8_fees: formInputs.port8_fees,
      port8_port_call: formInputs.port8_port_call,
      port8_crane_usage: formInputs.port8_crane_usage,
      port8_surveying_fees: formInputs.port8_surveying_fees,
      port8_miscCosts: formInputs.port8_miscCosts,

      port9: formInputs.port9,
      port9_fees: formInputs.port9_fees,
      port9_port_call: formInputs.port9_port_call,
      port9_crane_usage: formInputs.port9_crane_usage,
      port9_surveying_fees: formInputs.port9_surveying_fees,
      port9_miscCosts: formInputs.port9_miscCosts,

      port10: formInputs.port10,
      port10_fees: formInputs.port10_fees,
      port10_port_call: formInputs.port10_port_call,
      port10_crane_usage: formInputs.port10_crane_usage,
      port10_surveying_fees: formInputs.port10_surveying_fees,
      port10_miscCosts: formInputs.port10_miscCosts,

      cargo1_type: formInputs.cargo1_type,
      cargo1_quantity: formInputs.cargo1_quantity,
      cargo1_rate: formInputs.cargo1_rate,
      cargo1_brokerage_fees: formInputs.cargo1_brokerage_fees,
      cargo2_type: formInputs.cargo2_type,
      cargo2_quantity: formInputs.cargo2_quantity,
      cargo2_rate: formInputs.cargo2_rate,
      cargo2_brokerage_fees: formInputs.cargo2_brokerage_fees,
      cargo3_type: formInputs.cargo3_type,
      cargo3_quantity: formInputs.cargo3_quantity,
      cargo3_rate: formInputs.cargo3_rate,
      cargo3_brokerage_fees: formInputs.cargo3_brokerage_fees,
      cargo4_type: formInputs.cargo4_type,
      cargo4_quantity: formInputs.cargo4_quantity,
      cargo4_rate: formInputs.cargo4_rate,
      cargo4_brokerage_fees: formInputs.cargo4_brokerage_fees,
      cargo5_type: formInputs.cargo5_type,
      cargo5_quantity: formInputs.cargo5_quantity,
      cargo5_rate: formInputs.cargo5_rate,
      cargo5_brokerage_fees: formInputs.cargo5_brokerage_fees,
      cargo6_type: formInputs.cargo6_type,
      cargo6_quantity: formInputs.cargo6_quantity,
      cargo6_rate: formInputs.cargo6_rate,
      cargo6_brokerage_fees: formInputs.cargo6_brokerage_fees,
      exchange_rate: formInputs.exchange_rate,
      diesel_rate: formInputs.diesel_rate,
      bunker_rate: formInputs.bunker_rate,
      lube_rate: formInputs.lube_rate,
      voyageBonus: formInputs.voyageBonus,
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
    const response = await axios.get(`${apiUrl}/calculate/execute/${formId}`);

    // Check if the response contains an error message
    if (response.data.error) {
      throw new Error(response.data.error);
    }

    return response.data;
  } catch (error) {
    console.error('Calculate API call error:', error);
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

export async function historyCalculationAPICall(timestamp) {
  try {
    const response = await axios.get(`${apiUrl}/calculate/history/`);
    return response.data;
  } catch (error) {
    console.error('History Calcuation API call error:', error);
    throw error;
  }

}

export async function draftFormsAPICall(timestamp) {
  try {
    const response = await axios.get(`${apiUrl}/form/drafts/`);
    return response.data;
  } catch (error) {
    console.error('Draft Forms API call error:', error);
    throw error;
  }

}

export async function fetchFormDataAPICall(formId) {
  try {
    const response = await axios.get(`${apiUrl}/form/fetch/${formId}`);
    return response.data;
  } catch (error) {
    console.error('Fetch form Data API call error:', error);
    throw error;
  }

}