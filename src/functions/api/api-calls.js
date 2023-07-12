const axios = require('axios');

export async function storeFormAPICall(formInputs) {
  try {
    const formUrl = 'https://xapc7etvo8.execute-api.us-west-2.amazonaws.com/prod/storeform';

    const queryStringParameters = {
      port1: formInputs.port1,
      port2: formInputs.port2,
      port3: formInputs.port3,
      port4: formInputs.port4,
      port5: formInputs.port5,
      port6: formInputs.port6,
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
      miscCosts: formInputs.miscCosts,
      craneUsage: formInputs.craneUsage,
      portDays: formInputs.portDays,
      bunker_rate: formInputs.bunker_rate,
      diesel_rate: formInputs.diesel_rate
    };

    const response = await axios.get(formUrl, { params: queryStringParameters });
    console.log('Submitted Data:', formInputs);
    return response.data;
  } catch (error) {
    console.error('StoreForm API call error:', error);
    throw new Error(error);
  }
}

export async function updateFormAPICall(formId, formInputs) {
  try {
    const response = await fetch(`https://wyvjgrod85.execute-api.us-west-2.amazonaws.com/prod/form/${formId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formInputs),
    });

    if (!response.ok) {
      throw new Error('Failed to update form data');
    }

    const result = await response.json();
    return result;
  } catch (error) {
    throw new Error(error.message);
  }
}



export async function getFormAPICall(formId) {
  try {
    const apiUrl = `https://wyvjgrod85.execute-api.us-west-2.amazonaws.com/prod/form/${formId}`;

    const response = await fetch(apiUrl);
    const data = await response.json();

    if (response.ok) {
      // API call was successful, return the form data
      return data;
    } else {
      // API call returned an error, throw an error with the message
      throw new Error(data.message);
    }
  } catch (error) {
    console.error('GetForm API call error:', error);
    throw error;
  }
}


export async function calculateDataAPICall(formId) {
  const apiUrl = `https://4mip1e8tc0.execute-api.us-west-2.amazonaws.com/prod/calculate?formId=${formId}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Calcuate API call error:', error);
    throw error;
  }
}

export async function getCalculatedDataAPICall(formId) {
  const apiUrl = `https://4mip1e8tc0.execute-api.us-west-2.amazonaws.com/prod/calculate/${formId}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Display Calcuation API call error:', error);
    throw error;
  }
}