import React, { useState, useRef } from 'react';
import { Calculator } from './ui-components';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { storeFormAPICall, calculateDataAPICall, fetchCalculationAPICall } from './functions/api/api-calls';
import './App.css';
import { Button } from "@aws-amplify/ui-react";


function App() {
  const [result, setResult] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [formData, setFormData] = useState({});
  const [calculationData, setCalculationData] = useState([]);
  const [submittedMessage, setSubmittedMessage] = useState('');
  const [formId, setFormId] = useState(null); // Add formId state
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [loading, setLoading] = useState(false);
  const tableRef = useRef(null); // Create a ref for the table element

  const handleSubmit = async (formData) => {
    try {
      if (Object.values(formData).some(value => value === "")) {
        const emptyField = Object.keys(formData).find(key => formData[key] === "");
        throw new Error(`Empty field at ${emptyField}! Please fill up the form.`);
      }
      if (Object.values(formData).some(value => value < 0)) {
        const negativeField = Object.keys(formData).find(key => formData[key] < 0);
        throw new Error(`Negative value at ${negativeField}! Please modify it.`);
      }
      if (calculationData.length >= 10) {
        setErrorMessage("Calculation limit reached! Please refresh the page to start again.");
        throw new Error("Calculation limit reached! Please refresh the page to start again.");
      }
      console.log(formData);
      const response = await storeFormAPICall(formData);

      const newFormId = response.id;
      console.log("FormId:", newFormId);

      setFormId(newFormId); // Set the formId in the state
      try {
        setLoading(true);
        await calculateDataAPICall(newFormId); // Pass the formId for calculation
        setLoading(false);
        setResult(response.message);
        setErrorMessage(null);
        setSubmittedMessage("Form has been submitted! Please click 'Calculate' below."); // Update the submittedMessage state
        setIsButtonClicked(false);

      } catch (error) {
        setResult(null);
        setErrorMessage(error.response.data.error || "An error occurred.");
      }
    } catch (error) {
      setResult(null);
      setErrorMessage(error.message || "An error occurred.");
    }
  }

  const handleCalculate = async () => {
    try {
      setLoading(true);
      const response = await calculateDataAPICall(formId, formData); // Calculate with data from the formId and form data
      const calculationId = response.id;
      const calculationDataResponse = await fetchCalculationAPICall(calculationId);
      setLoading(false);
      setSubmittedMessage('Data has been calculated! Please submit another form.'); // Reset the submittedMessage state

      // Add the new calculation data to the existing array of calculation data
      setCalculationData((prevCalculationData) => [...prevCalculationData, calculationDataResponse]);
      // Check if the calculation limit is reached
      if (calculationData.length >= 10) {
        setErrorMessage("Calculation limit reached! Please refresh the page to start again.");
        throw new Error("Calculation limit reached! Please refresh the page to start again.");
      }
      console.log("CalculationId:", calculationId);
      console.log("CalculationData:", calculationDataResponse);

      setIsButtonClicked(true); // Set the state to true when the button is clicked

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div>
        {/* Navigation Bar */}
        <nav className="navbar">
          {/* Left side: Freight Calculator */}
          <h1 className="navbar-title">Freight Calculator</h1>

          {/* Right side: Calculator, Drafts, and History */}
          <div className="navbar-buttons">
            <Link to="/" className="navbar-button">Calculator</Link>
            <Link to="/drafts" className="navbar-button">Drafts</Link>
            <Link to="/history" className="navbar-button">History</Link>
          </div>
        </nav>
      </div>

      <h1>Freight Calculator</h1>
      <p>Welcome to the freight calculator! Enter the voyage information into this form to calculate the expected profits or loss.
        Complete the form and click "Submit". Once submission is successful, click "Calculate" to display the results.
        Results are displayed in the tables below the form. Happy calculating!
      </p>
      <p>
        Note: There is a limit of 10 calculation attempts. Refresh the page to reset.
        If you encounter the "Distance not available" error. Please contact the admin to add the distance.
        Results are displayed in THB. If "Currency" is THB, please change the exchange rate to "1".
      </p>
      <Calculator onSubmit={handleSubmit} onChange={setFormData} />

      <div style={{ marginTop: '20px' }}>
        {!loading && !errorMessage && !result && <p style={{ color: 'black', fontWeight: 'bold', textAlign: 'center', marginBottom: '100px' }}>Please complete and submit the form.</p>}
        {loading && !errorMessage && <p style={{ color: 'black', fontWeight: 'bold', textAlign: 'center', marginBottom: '100px' }}>Loading...</p>}
        {!loading && errorMessage && <p style={{ color: 'red', fontWeight: 'bold', textAlign: 'center' }}>{errorMessage}</p>}
        {!loading && result && !errorMessage && <p style={{ color: 'green', fontWeight: 'bold', textAlign: 'center' }}>{submittedMessage}</p>}
      </div>

      {!loading && result && !errorMessage && !isButtonClicked && (
        <div>
          <Button
            onClick={handleCalculate}
            style={{ display: 'block', margin: '0 auto', backgroundColor: 'green', color: 'white', marginBottom: '30px', padding: '10px 40px' }}
          >
            Calculate
          </Button>
        </div>
      )}


      {calculationData.length > 0 && (
        <div>
          <h1>Form Data</h1>
          <table ref={tableRef}>
            <thead>
              <tr>
                <th>Description</th>
                {calculationData.map((_, index) => (
                  <th key={index}>Calculation {index + 1}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[...Array(6)].map((_, rowIndex) => (
                <tr key={rowIndex}>
                  <td>Cargo {rowIndex + 1}</td>
                  {calculationData.map((data, columnIndex) => {
                    const cargoType = data.cargoData[rowIndex].type;
                    const cargoQuantity = data.cargoData[rowIndex].quantity;
                    const cargoRate = data.cargoData[rowIndex].rate;
                    const currencyCode = data.currency_type.match(/\((.*)\)/)[1];
                    if (cargoType !== "NIL") {
                      return (
                        <td key={columnIndex}>
                          {cargoType}, {cargoQuantity} MT, {cargoRate} {currencyCode}
                        </td>
                      );
                    } else {
                      return <td key={columnIndex}>N/A</td>;
                    }
                  })}
                </tr>

              ))}
              <tr>
                <td>PDA Fees</td>
                {calculationData.map((data, index) => (
                  <td key={index}>{formatNumber(Math.round(data.portCosts))} THB</td>
                ))}
              </tr>
              <tr>
                <td>Surveying Fees</td>
                {calculationData.map((data, index) => (
                  <td key={index}>{formatNumber(Math.round(data.totalSurveyingFees))} THB</td>
                ))}
              </tr>
              <tr>
                <td>Brokerage Costs</td>
                {calculationData.map((data, index) => (
                  <td key={index}>{formatNumber(Math.round(data.brokerageCosts))} THB</td>
                ))}
              </tr>
              <tr>
                <td>Voyage Bonus</td>
                {calculationData.map((data, index) => (
                  <td key={index}>{formatNumber(Math.round(data.voyageBonus))} THB</td>
                ))}
              </tr>
              <tr>
                <td>Misc Costs</td>
                {calculationData.map((data, index) => (
                  <td key={index}>{formatNumber(Math.round(data.miscCosts))} THB</td>
                ))}
              </tr>
              <tr>
                <td>Duration at Sea</td>
                {calculationData.map((data, index) => (
                  <td key={index}>{formatNumber(Math.round(data.duration_at_sea))} Hours</td>
                ))}
              </tr>
              <tr>
                <td>Duration of Port Calls</td>
                {calculationData.map((data, index) => (
                  <td key={index}>{formatNumber(Math.round(data.duration_at_port))} Hours</td>
                ))}
              </tr>
              <tr>
                <td>Duration of Crane Usage</td>
                {calculationData.map((data, index) => (
                  <td key={index}>{formatNumber(Math.round(data.duration_crane_usage))} Hours</td>
                ))}
              </tr>
            </tbody>

          </table>
        </div>
      )}

      {calculationData.length > 0 && (
        <div>
          <h1>Calculation Data for HN5</h1>
          <table ref={tableRef}>
            <thead>
              <tr>
                <th>Data</th>
                {calculationData.map((_, index) => (
                  <th key={index}>Calculation {index + 1}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Profit/Loss</td>
                {calculationData.map((data, index) => (
                  <td key={index}>
                    <span style={{ color: data.hn5_profit >= 0 ? 'green' : 'red', fontWeight: 'bold' }}>
                      {formatNumber(Math.round(data.hn5_profit))} THB
                    </span>
                  </td>
                ))}
              </tr>
              <tr>
                <td>Revenue</td>
                {calculationData.map((data, index) => (
                  <td key={index}>{formatNumber(data.revenue)} THB</td>
                ))}
              </tr>
              <tr>
                <td>Costs</td>
                {calculationData.map((data, index) => (
                  <td key={index}>{formatNumber(Math.round(data.hn5_totalCosts))} THB</td>
                ))}
              </tr>
              <tr>
                <td>Margin</td>
                {calculationData.map((data, index) => (
                  <td key={index}>
                    <span style={{ color: data.hn5_marginPercentage >= 0 ? 'green' : 'red', fontWeight: 'bold' }}>
                      {data.hn5_marginPercentage.toFixed(2)}%
                    </span>
                  </td>
                ))}
              </tr>
              <tr>
                <td>Fuel Costs</td>
                {calculationData.map((data, index) => (
                  <td key={index}>{formatNumber(Math.round(data.hn5_fuelCosts))} THB</td>
                ))}
              </tr>
              <tr>
                <td>Percentage Fuel Cost</td>
                {calculationData.map((data, index) => (
                  <td key={index}>
                    <span style={{ color: data.hn5_fuelCostsPercentage <= 30 ? 'green' : 'red', fontWeight: 'bold' }}>
                      {data.hn5_fuelCostsPercentage.toFixed(2)}%
                    </span>
                  </td>
                ))}
              </tr>
              <tr>
                <td>Operational Costs</td>
                {calculationData.map((data, index) => (
                  <td key={index}>{formatNumber(Math.round(data.hn5_operatingCosts))} THB</td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      )}

      {calculationData.length > 0 && (
        <div>
          <h1>Calculation Data for HN9</h1>
          <table ref={tableRef}>
            <thead>
              <tr>
                <th>Data</th>
                {calculationData.map((_, index) => (
                  <th key={index}>Calculation {index + 1}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Profit/Loss</td>
                {calculationData.map((data, index) => (
                  <td key={index}>
                    <span style={{ color: data.hn9_profit >= 0 ? 'green' : 'red', fontWeight: 'bold' }}>
                      {formatNumber(Math.round(data.hn9_profit))} THB
                    </span>
                  </td>
                ))}
              </tr>
              <tr>
                <td>Revenue</td>
                {calculationData.map((data, index) => (
                  <td key={index}>{formatNumber(data.revenue)} THB</td>
                ))}
              </tr>
              <tr>
                <td>Costs</td>
                {calculationData.map((data, index) => (
                  <td key={index}>{formatNumber(Math.round(data.hn9_totalCosts))} THB</td>
                ))}
              </tr>
              <tr>
                <td>Margin</td>
                {calculationData.map((data, index) => (
                  <td key={index}>
                    <span style={{ color: data.hn9_marginPercentage >= 0 ? 'green' : 'red', fontWeight: 'bold' }}>
                      {data.hn9_marginPercentage.toFixed(2)}%
                    </span>
                  </td>
                ))}
              </tr>
              <tr>
                <td>Fuel Costs</td>
                {calculationData.map((data, index) => (
                  <td key={index}>
                    {formatNumber(Math.round(data.hn9_fuelCosts))} THB</td>
                ))}
              </tr>
              <tr>
                <td>Percentage Fuel Cost</td>
                {calculationData.map((data, index) => (
                  <td key={index}>
                    <span style={{ color: data.hn9_fuelCostsPercentage <= 30 ? 'green' : 'red', fontWeight: 'bold' }}>
                      {data.hn9_fuelCostsPercentage.toFixed(2)}%
                    </span>
                  </td>
                ))}
              </tr>
              <tr>
                <td>Operational Costs</td>
                {calculationData.map((data, index) => (
                  <td key={index}>{formatNumber(Math.round(data.hn9_operatingCosts))} THB</td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}


function formatNumber(number) {
  if (typeof number === 'number') {
    return number.toLocaleString();
  }
  return '';
}

export default App;
