import React, { useState } from 'react';
import { Calculator } from './ui-components';
import { storeFormAPICall, calculateDataAPICall, fetchCalculationAPICall } from './functions/api/api-calls';
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
      const calculationDataResponse = await fetchCalculationAPICall(calculationId);
      
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
      <Calculator onSubmit={handleSubmit} onChange={setFormData} />
      {result && <p style={{ color: 'green' }}>Result: {result}. You can now calculate!</p>}
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      {result && !errorMessage && (
        <div>
          <button onClick={handleCalculate} style={{ display: 'block', margin: '0 auto', backgroundColor: 'green', color: 'white' }}>Calculate</button>

          {calculationData && (
            <div>
              <h1>Calculation Data for HN5:</h1>
              
              <p>
                Profit/Loss:{" "}
                <span
                  style={{
                    color: calculationData.profit >= 0 ? "green" : "red",
                    fontWeight: "bold"
                  }}
                >
                  {formatNumber(Math.round(calculationData.profit))}
                </span> 
              </p>
              <p>Revenue: {formatNumber(calculationData.revenue)} THB</p>
              <p>Costs: {formatNumber(Math.round(calculationData.totalCosts))} THB</p>
              <p>Margin: {calculationData.marginPercentage.toFixed(2)}%</p>
              <p>Fuel Costs: {formatNumber(calculationData.fuelCosts)} THB</p>
              <p>Percentage Fuel Cost: {calculationData.fuelCostsPercentage.toFixed(2)}%</p>

            </div>
          )}
        </div>
      )}
    </div>
  );
}

function formatNumber(number) {
  return number.toLocaleString();
}

export default App;
