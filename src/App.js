import React, { useState, useRef, useEffect } from "react";
import { Calculator } from "./ui-components";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {
  storeFormAPICall,
  calculateDataAPICall,
  fetchCalculationAPICall,
} from "./functions/api/api-calls";
import "./App.css";
import { withAuthenticator, Button } from '@aws-amplify/ui-react';
import { Auth } from 'aws-amplify';


function App({ signOut, initialValues, titleMessage, instructionsMessage }) {

  const [result, setResult] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [calculationData, setCalculationData] = useState([]);
  const [submittedMessage, setSubmittedMessage] = useState("");
  const [calculationId, setCalculationId] = useState(null); // Add formId state
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState()
  const [formId, setFormId] = useState()
  const [creatorUsername , setCreatorUsername] = useState()
  const tableRef = useRef(null); // Create a ref for the table element
  const [titleMessageData, setTitleMessageData] = useState(titleMessage)
  const [instructionsMessageData, setInstructionsMessageData] = useState(instructionsMessage)

  useEffect(() => {
    if (!initialValues) {
      setTitleMessageData('Freight Calculator');
      setInstructionsMessageData('Welcome to the freight calculator! Enter the voyage information into this form to calculate the expected profits or loss. Complete the form and click "Submit". Once submission is successful, click "Calculate" to display the results. Results are displayed in the tables below the form. Happy calculating!');
    }
  }, []);

  const handleSubmit = async (formData) => {
    try {
      // Form validation checks
      if (Object.values(formData).some((value) => value === "")) {
        const emptyField = Object.keys(formData).find(
          (key) => formData[key] === ""
        );
        throw new Error(`Empty field at ${emptyField}! Please fill up the form.`);
      }

      if (Object.values(formData).some((value) => value < 0)) {
        const negativeField = Object.keys(formData).find(
          (key) => formData[key] < 0
        );
        throw new Error(`Negative value at ${negativeField}! Please modify it.`);
      }

      if (calculationData.length >= 10) {
        setErrorMessage(
          "Calculation limit reached! Please refresh the page to start again."
        );
        throw new Error(
          "Calculation limit reached! Please refresh the page to start again."
        );
      }

      // Get the current authenticated user
      const user = await Auth.currentAuthenticatedUser();
      const username = user.username;
      setCreatorUsername(username); // Store the username in the state


      console.log(formData);
      console.log(username);
      const response = await storeFormAPICall(formData, username);
      const newFormId = response.id;
      console.log("FormId:", newFormId);
      setFormId(newFormId); // Set the formId in the state
      try {
        setLoading(true);
        const calculationResponse = await calculateDataAPICall(newFormId); // Pass the formId for calculation
        
        console.log("CalculationId:", calculationResponse.id);
        setCalculationId(calculationResponse.id); // Get the calculation ID from the response


        setResult(response.message);
        setErrorMessage(null);

        // The displayCalculation function will be called automatically through useEffect when calculationId changes
      } catch (error) {
        setResult(null);
        setErrorMessage(error.response.data.error || "An error occurred.");
      }
    } catch (error) {
      setResult(null);
      setErrorMessage(error.message || "An error occurred.");
    }
  };


  const displayCalculation = async (calculationId) => {
    try {
      setLoading(true);
      const calculationDataResponse = await fetchCalculationAPICall(
        calculationId
      );
      setLoading(false);

      setSubmittedMessage(
        "Data has been calculated! Please submit another form."
      ); // Reset the submittedMessage state

      // Add the new calculation data to the existing array of calculation data
      setCalculationData((prevCalculationData) => [
        ...prevCalculationData,
        calculationDataResponse,
      ]);

      // Check if the calculation limit is reached
      if (calculationData.length >= 10) {
        setErrorMessage(
          "Calculation limit reached! Please refresh the page to start again."
        );
        throw new Error(
          "Calculation limit reached! Please refresh the page to start again."
        );
      }
      console.log("CalculationData:", calculationDataResponse);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    // This useEffect hook will be triggered whenever calculationId is updated
    if (calculationId) {
      displayCalculation(calculationId);
    }
  }, [calculationId]);

  return (
    <div>
      <div>
        {/* Navigation Bar */}
        <nav className="navbar">
          {/* Left side: Freight Calculator */}
          <h1 className="navbar-title">Freight Calculator</h1>

          {/* Right side: Calculator, Drafts, and History */}
          <div className="navbar-buttons">
            <Link to="/" className="navbar-button">
              Calculator
            </Link>
            <Link to="/history" className="navbar-button">
              History
            </Link>
            <Button onClick={signOut}>Sign out</Button>
          </div>
        </nav>
      </div>

      <h1>{titleMessageData}</h1>
      <p>
      {instructionsMessageData}
      </p>
      <Calculator onSubmit={handleSubmit} onChange={setFormData} initialFormData={initialValues} />

      <div style={{ marginTop: "20px" }}>
        {!loading && !errorMessage && !result && (
          <p
            style={{
              color: "black",
              fontWeight: "bold",
              textAlign: "center",
              marginBottom: "100px",
            }}
          >
            Please complete and submit the form.
          </p>
        )}
        {loading && !errorMessage && (
          <p
            style={{
              color: "black",
              fontWeight: "bold",
              textAlign: "center",
              marginBottom: "100px",
            }}
          >
            Loading...
          </p>
        )}
        {errorMessage && (
          <p style={{ color: "red", fontWeight: "bold", textAlign: "center" }}>
            {errorMessage}
          </p>
        )}
        {!loading && result && !errorMessage && (
          <div>
            <p style={{ color: "green", fontWeight: "bold", textAlign: "center" }}>
              {submittedMessage}
            </p>
            <p style={{ fontWeight: "bold", textAlign: "center" }}>
              <Link to={`/calculation/${calculationId}`} target="_blank">View Calculation</Link>
            </p>
          </div>
        )}
      </div>

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
                    const currencyCode =
                      data.currency_type.match(/\((.*)\)/)[1];
                    if (cargoType !== "NIL") {
                      return (
                        <td key={columnIndex}>
                          {cargoType}, {cargoQuantity} MT, {cargoRate}{" "}
                          {currencyCode}
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
                  <td key={index}>
                    {formatNumber(Math.round(data.portCosts))} THB
                  </td>
                ))}
              </tr>
              <tr>
                <td>Surveying Fees</td>
                {calculationData.map((data, index) => (
                  <td key={index}>
                    {formatNumber(Math.round(data.totalSurveyingFees))} THB
                  </td>
                ))}
              </tr>
              <tr>
                <td>Brokerage Costs</td>
                {calculationData.map((data, index) => (
                  <td key={index}>
                    {formatNumber(Math.round(data.brokerageCosts))} THB
                  </td>
                ))}
              </tr>
              <tr>
                <td>Voyage Bonus</td>
                {calculationData.map((data, index) => (
                  <td key={index}>
                    {formatNumber(Math.round(data.voyageBonus))} THB
                  </td>
                ))}
              </tr>
              <tr>
                <td>Total Misc Costs</td>
                {calculationData.map((data, index) => (
                  <td key={index}>
                    {formatNumber(Math.round(data.totalMiscCosts))} THB
                  </td>
                ))}
              </tr>
              <tr>
                <td>Duration at Sea</td>
                {calculationData.map((data, index) => (
                  <td key={index}>
                    {formatNumber(Math.round(data.duration_at_sea))} Hours
                  </td>
                ))}
              </tr>
              <tr>
                <td>Duration of Port Calls</td>
                {calculationData.map((data, index) => (
                  <td key={index}>
                    {formatNumber(Math.round(data.duration_at_port))} Hours
                  </td>
                ))}
              </tr>
              <tr>
                <td>Duration of Crane Usage</td>
                {calculationData.map((data, index) => (
                  <td key={index}>
                    {formatNumber(Math.round(data.duration_crane_usage))} Hours
                  </td>
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
                    <span
                      style={{
                        color: data.hn5_profit >= 0 ? "green" : "red",
                        fontWeight: "bold",
                      }}
                    >
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
                  <td key={index}>
                    {formatNumber(Math.round(data.hn5_totalCosts))} THB
                  </td>
                ))}
              </tr>
              <tr>
                <td>Margin</td>
                {calculationData.map((data, index) => (
                  <td key={index}>
                    <span
                      style={{
                        color: data.hn5_marginPercentage >= 0 ? "green" : "red",
                        fontWeight: "bold",
                      }}
                    >
                      {data.hn5_marginPercentage.toFixed(2)}%
                    </span>
                  </td>
                ))}
              </tr>
              <tr>
                <td>Fuel Costs</td>
                {calculationData.map((data, index) => (
                  <td key={index}>
                    {formatNumber(Math.round(data.hn5_fuelCosts))} THB
                  </td>
                ))}
              </tr>
              <tr>
                <td>Percentage Fuel Cost of Revenue</td>
                {calculationData.map((data, index) => (
                  <td key={index}>
                    <span
                      style={{
                        color:
                          data.hn5_fuelCostsPercentage <= 30 ? "green" : "red",
                        fontWeight: "bold",
                      }}
                    >
                      {data.hn5_fuelCostsPercentage.toFixed(2)}%
                    </span>
                  </td>
                ))}
              </tr>
              <tr>
                <td>Operational Costs</td>
                {calculationData.map((data, index) => (
                  <td key={index}>
                    {formatNumber(Math.round(data.hn5_operatingCosts))} THB
                  </td>
                ))}
              </tr>
              <tr>
                <td>Voyage Expenses</td>
                {calculationData.map((data, index) => (
                  <td key={index}>
                    {formatNumber(Math.round(data.voyageExpenses))} THB
                  </td>
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
                    <span
                      style={{
                        color: data.hn9_profit >= 0 ? "green" : "red",
                        fontWeight: "bold",
                      }}
                    >
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
                  <td key={index}>
                    {formatNumber(Math.round(data.hn9_totalCosts))} THB
                  </td>
                ))}
              </tr>
              <tr>
                <td>Margin</td>
                {calculationData.map((data, index) => (
                  <td key={index}>
                    <span
                      style={{
                        color: data.hn9_marginPercentage >= 0 ? "green" : "red",
                        fontWeight: "bold",
                      }}
                    >
                      {data.hn9_marginPercentage.toFixed(2)}%
                    </span>
                  </td>
                ))}
              </tr>
              <tr>
                <td>Fuel Costs</td>
                {calculationData.map((data, index) => (
                  <td key={index}>
                    {formatNumber(Math.round(data.hn9_fuelCosts))} THB
                  </td>
                ))}
              </tr>
              <tr>
                <td>Percentage Fuel Cost of Revenue</td>
                {calculationData.map((data, index) => (
                  <td key={index}>
                    <span
                      style={{
                        color:
                          data.hn9_fuelCostsPercentage <= 30 ? "green" : "red",
                        fontWeight: "bold",
                      }}
                    >
                      {data.hn9_fuelCostsPercentage.toFixed(2)}%
                    </span>
                  </td>
                ))}
              </tr>
              <tr>
                <td>Operational Costs</td>
                {calculationData.map((data, index) => (
                  <td key={index}>
                    {formatNumber(Math.round(data.hn9_operatingCosts))} THB
                  </td>
                ))}
              </tr>
              <tr>
                <td>Voyage Expenses</td>
                {calculationData.map((data, index) => (
                  <td key={index}>
                    {formatNumber(Math.round(data.voyageExpenses))} THB
                  </td>
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
  if (typeof number === "number") {
    return number.toLocaleString();
  }
  return "";
}

const withAuthenticatorOptions = {
  hideSignUp: true
}

export default withAuthenticator(App, withAuthenticatorOptions);
