import React, { useState, useRef, useEffect } from 'react';
import { Calculator } from './ui-components';
import { storeFormAPICall, calculateDataAPICall, fetchCalculationAPICall } from './functions/api/api-calls';
import './App.css';

function App() {
  const [result, setResult] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [formData, setFormData] = useState({});
  const [calculationData, setCalculationData] = useState([]);
  const [formId, setFormId] = useState(null); // Add formId state
  const tableRef = useRef(null); // Create a ref for the table element

  const handleSubmit = async (formData) => {
    try {
      console.log(formData);
      const response = await storeFormAPICall(formData);
      setResult(response.message);
      setErrorMessage(null);

      const newFormId = response.id;
      console.log("FormId:", newFormId);

      setFormId(newFormId); // Set the formId in the state
      await calculateDataAPICall(newFormId, formData); // Pass the form data for calculation
      // Scroll to the bottom of the page
      window.scrollTo(0, document.body.scrollHeight);
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

      // Add the new calculation data to the existing array of calculation data
      setCalculationData((prevCalculationData) => [...prevCalculationData, calculationDataResponse]);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    // Scroll to the bottom when calculationData updates
    if (tableRef.current) {
      tableRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  }, [calculationData]);

  return (
    <div>
      <h1>Freight Calculator</h1>
      <Calculator onSubmit={handleSubmit} onChange={setFormData} />
      {result && <p style={{ color: 'green', fontWeight: 'bold' }}>Form has been submitted! Please click "Calculate" below.</p>}
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      {result && !errorMessage && (
        <div>
          <button onClick={handleCalculate} style={{ display: 'block', margin: '0 auto', backgroundColor: 'green', color: 'white' }}>Calculate</button>

          {calculationData.length > 0 && (
            <div>
              <h1>Calculation Data for HN5:</h1>

              <table ref={tableRef}>
                <thead>
                  <tr>
                    <th>Form ID</th>
                    {calculationData.map((data, index) => (
                      <th key={index}>Calculation {index + 1}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Profit/Loss:</td>
                    {calculationData.map((data, index) => (
                      <td key={index}>
                        <span style={{ color: data.profit >= 0 ? 'green' : 'red', fontWeight: 'bold' }}>
                          {formatNumber(Math.round(data.profit))} THB
                        </span>
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td>Revenue:</td>
                    {calculationData.map((data, index) => (
                      <td key={index}>{formatNumber(data.revenue)} THB</td>
                    ))}
                  </tr>
                  <tr>
                    <td>Costs:</td>
                    {calculationData.map((data, index) => (
                      <td key={index}>{formatNumber(Math.round(data.totalCosts))} THB</td>
                    ))}
                  </tr>
                  <tr>
                    <td>Margin:</td>
                    {calculationData.map((data, index) => (
                      <td key={index}>{data.marginPercentage <= 0 ? 'NA' : data.marginPercentage.toFixed(2)}%</td>
                    ))}
                  </tr>
                  <tr>
                    <td>Fuel Costs:</td>
                    {calculationData.map((data, index) => (
                      <td key={index}>{formatNumber(data.fuelCosts)} THB</td>
                    ))}
                  </tr>
                  <tr>
                    <td>Percentage Fuel Cost:</td>
                    {calculationData.map((data, index) => (
                      <td key={index}>{data.fuelCostsPercentage.toFixed(2)}%</td>
                    ))}
                  </tr>
                </tbody>
              </table>
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
