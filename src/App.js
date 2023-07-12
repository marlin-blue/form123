import React, { useState } from 'react';
import { DistanceCreateForm } from './ui-components';
import { storeFormAPICall, calculateDataAPICall, getCalculatedDataAPICall } from './functions/api/api-calls';
import './App.css';

function App() {
  const [result, setResult] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [formData, setFormData] = useState({});
  const [calculationData, setCalculationData] = useState(

  );
  const [formId, setFormId] = useState(null); // Add formId state

  const handleSubmit = async (formData) => {
    try {
      console.log(formData);
      const response = await storeFormAPICall(formData);
      setResult(response.message);
      setErrorMessage(null);

      const formId = response.id;
      console.log("FormId:", formId);

      setFormId(formId); // Set the formId in the state
      await calculateDataAPICall(formId, formData); // Pass the form data for calculation
    } catch (error) {
      setResult(null);
      setErrorMessage(error.message);
    }
  };

  const handleCalculate = async () => {
    try {
      const response = await calculateDataAPICall(formId, formData); // Calculate with data from the formId and form data
      const calculationId = response.id;
      const calculationDataResponse = await getCalculatedDataAPICall(calculationId);

      console.log("CalculationId:", calculationId);
      console.log("CalculationData:", calculationDataResponse);
      setCalculationData(calculationDataResponse);

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Calculator</h1>
      <DistanceCreateForm onSubmit={handleSubmit} onChange={setFormData} />
      {result && <p style={{ color: 'green' }}>Result: {result}. You can now calculate!</p>}

      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      {result && !errorMessage && (
        <div>
          <button onClick={handleCalculate} style={{ display: 'block', margin: '0 auto', backgroundColor: 'green' }}>Calculate</button>
          {calculationData && (
            <div>
              <h2>Calculation Data:</h2>
              <p>Revenue: ${calculationData.revenue.toLocaleString()}</p>
              <p>Costs: ${calculationData.costs.toLocaleString()}</p>
              <p>Profit/Loss: ${calculationData.profit.toLocaleString()}</p>
              <p>Margin: {calculationData.marginPercentage.toFixed(2)}%</p>
              <p>Fuel Costs: ${calculationData.fuelCosts.toLocaleString()}</p>
              <p>Percentage Fuel Cost: {calculationData.percentageFuelCost.toFixed(2)}%</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
