import React, { useState, useEffect } from 'react';
import { DistanceCreateForm } from './ui-components';
import { storeFormAPICall, getFormAPICall, calculateDataAPICall, updateFormAPICall } from './functions/api/api-calls';
import './App.css';

function App() {
  const [result, setResult] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [formData, setFormData] = useState({
    Port1: '',
    Port2: '',
    Port3: '',
    Port4: '',
    Port5: '',
    Port6: '',
    cargo1: '',
    cargo1_quantity: 0,
    cargo1_rate: 0.0,
    cargo2: '',
    cargo2_quantity: 0,
    cargo2_rate: 0.0,
    cargo3: '',
    cargo3_quantity: 0,
    cargo3_rate: 0.0,
    cargo4: '',
    cargo4_quantity: 0,
    cargo4_rate: 0.0,
    cargo5: '',
    cargo5_quantity: 0,
    cargo5_rate: 0.0,
    cargo6: '',
    cargo6_quantity: 0,
    cargo6_rate: 0.0,
    miscCosts: 0,
    craneUsage: 0.0,
    portDays: 0.0,
    bunker_rate: 0.0,
    diesel_rate: 0.0,
  });
  const [formId, setFormId] = useState(null);

  useEffect(() => {
    const currentFormId = getFormIdFromURL();
    if (currentFormId) {
      setFormId(currentFormId);
      fetchFormData(currentFormId);
    }
  }, []);

  const getFormIdFromURL = () => {
    const currentURL = window.location.href;
    const formId = currentURL.split('/form/')[1];
    return formId;
  };

  const fetchFormData = async (formId) => {
    try {
      const response = await getFormAPICall(formId);
      console.log("API Response:", response); 
      setFormData(response);
  
      // Log the formData to the console
      console.log("Received formData:", response.formData);
    } catch (error) {
      setErrorMessage(error.message);
    }
  };
  

  const handleSubmit = async (event) => {
    try {
      let response;
      if (formId) {
        // Update existing form data
        response = await updateFormAPICall(formId, formData);
      } else {
        // Store new form data
        response = await storeFormAPICall(formData);
        const newFormId = response.id;

        // Pass the new form ID to the calculation lambda function
        await calculateDataAPICall(newFormId);

        // Update the URL with the new form ID
        window.history.pushState({}, '', `/form/${newFormId}`);
        setFormId(newFormId);
      }

      setResult(response.message);
      setErrorMessage(null);
    } catch (error) {
      setResult(null);
      setErrorMessage(error.message);
    }
  };

  // const handleCalculate = async () => {
  //   try {
  //     let response;
  //     if (formId) {
  //       // Calculate data for existing form
  //       response = await calculateDataAPICall(formId);
  //     } else {
  //       // Calculate data for new form (optional)
  //       response = await calculateDataAPICall(formData);
  //     }

  //     setResult(response.data);
  //   } catch (error) {
  //     setResult(null);
  //     setErrorMessage(error.message);
  //   }
  // };

  return (
    <div>
      <h1>Calculator</h1>
      <DistanceCreateForm
        formdata={formData}
        onSubmit={handleSubmit}
      />
      {result && <p style={{ color: 'green' }}>Result: {result} </p>}
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
}

export default App;
