import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCalculationAPICall, fetchFormDataAPICall } from "./functions/api/api-calls";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { Button, withAuthenticator } from '@aws-amplify/ui-react';

function CalculationDataPage({signOut}) {
  const { id } = useParams();
  const [calculationData, setCalculationData] = useState(null);
  const [formId, setFormId] = useState(null);
  const [portData, setPortData] = useState(null);

  useEffect(() => {
    const fetchCalculationData = async () => {
      try {
        const response = await fetchCalculationAPICall(id);
        setCalculationData(response);
        setFormId(response.formId); // Set the formId from the response
        console.log("Updated formId:", response.formId);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCalculationData();
  }, [id]);

  useEffect(() => {
    const fetchPortData = async () => {
      if (formId !== null) { // Check if formId is not null before fetching port data
        try {
          const response = await fetchFormDataAPICall(formId);
          setPortData(response.ports);
          console.log("Updated portData:", response.ports);
        } catch (error) {
          console.error(error);
        }
      }
    };

    fetchPortData();
  }, [formId]); // Add formId to the dependency array

  if (!calculationData) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
  // Extracted the cargo data from the calculationData object
  const { cargoData, currency_type, portCosts, totalSurveyingFees, brokerageCosts, voyageBonus, totalMiscCosts, duration_at_sea, duration_at_port, duration_crane_usage } = calculationData;

  return (

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
      <h1>Past Calculation</h1>
      <h3>Calculation ID: {calculationData.id}</h3>
      <h3>Created on {new Date(new Date(calculationData.created_at).getTime()).toLocaleString(
        "en-UK",
        { timeZone: "Asia/Bangkok" }
      )}</h3>
      <h2>Form Data</h2>

      <div>
        <table>
          <thead>
            <tr>
              <th>Port</th>
              <th>Name</th>
              <th>PDA Fees</th>
              <th>Port Call (Days)</th>
              <th>Crane Usage (Hours)</th>
              <th>Surveying Fees</th>
              <th>Misc Costs </th>
            </tr>
          </thead>
          <tbody>
            {portData && portData.length > 0 ? (
              portData.map((data, rowIndex) => (
                <tr key={rowIndex}>
                  <td>Port {rowIndex + 1}</td>
                  {data.type !== "NIL" ? (
                    <td key={`port${rowIndex}`}>{data.port}</td>
                  ) : (
                    <td key={`port${rowIndex}`}>N/A</td>
                  )}

                  {data.type !== "NIL" ? (
                    <td key={`fees_${rowIndex}`}>{data.fees}</td>
                  ) : (
                    <td key={`fees_${rowIndex}`}>N/A</td>
                  )}

                  {data.type !== "NIL" ? (
                    <td key={`port_call_${rowIndex}`}>{data.port_call}</td>
                  ) : (
                    <td key={`port_call_${rowIndex}`}>N/A</td>
                  )}
                  {data.type !== "NIL" ? (
                    <td key={`crane_usage)${rowIndex}`}>{data.crane_usage}</td>
                  ) : (
                    <td key={`crane_usage${rowIndex}`}>N/A</td>
                  )}
                  {data.type !== "NIL" ? (
                    <td key={`surveying_fees_${rowIndex}`}>{data.surveying_fees}</td>
                  ) : (
                    <td key={`surveying_fees_${rowIndex}`}>N/A</td>
                  )}
                  {data.type !== "NIL" ? (
                    <td key={`miscCosts_${rowIndex}`}>{data.miscCosts}</td>
                  ) : (
                    <td key={`miscCosts_${rowIndex}`}>N/A</td>
                  )}


                </tr>

              ))
            ) : (
              <tr>
                <td colSpan="7">No port data available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>Description</th>
              <th>Calculation</th>
            </tr>
          </thead>
          <tbody>
            {cargoData.map((data, rowIndex) => (
              <tr key={rowIndex}>
                <td>Cargo {rowIndex + 1}</td>
                {data.type !== "NIL" ? (
                  <td>
                    {data.type}, {data.quantity} MT, {data.rate}{" "}
                    {currency_type.match(/\((.*)\)/)[1]}
                  </td>
                ) : (
                  <td>N/A</td>
                )}
              </tr>
            ))}
            <tr>
              <td>PDA Fees</td>
              <td>{formatNumber(Math.round(portCosts))} THB</td>
            </tr>
            <tr>
              <td>Surveying Fees</td>
              <td>{formatNumber(Math.round(totalSurveyingFees))} THB</td>
            </tr>
            <tr>
              <td>Brokerage Costs</td>
              <td>{formatNumber(Math.round(brokerageCosts))} THB</td>
            </tr>
            <tr>
              <td>Voyage Bonus</td>
              <td>{formatNumber(Math.round(voyageBonus))} THB</td>
            </tr>
            <tr>
              <td>Total Misc Costs</td>
              <td>{formatNumber(Math.round(totalMiscCosts))} THB</td>
            </tr>
            <tr>
              <td>Duration at Sea</td>
              <td>{formatNumber(Math.round(duration_at_sea))} Hours</td>
            </tr>
            <tr>
              <td>Duration of Port Calls</td>
              <td>{formatNumber(Math.round(duration_at_port))} Hours</td>
            </tr>
            <tr>
              <td>Duration of Crane Usage</td>
              <td>{formatNumber(Math.round(duration_crane_usage))} Hours</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <h1>Calculation Data</h1>
        <table>
          <thead>
            <tr>
              <th>Data</th>
              <th>Calculation HN5</th>
              <th>Calculation HN9</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Profit/Loss</td>
              <td>
                <span
                  style={{
                    color: calculationData.hn9_profit >= 0 ? "green" : "red",
                    fontWeight: "bold",
                  }}
                >
                  {formatNumber(Math.round(calculationData.hn5_profit))} THB
                </span>
              </td>
              <td>
                <span
                  style={{
                    color: calculationData.hn9_profit >= 0 ? "green" : "red",
                    fontWeight: "bold",
                  }}
                >
                  {formatNumber(Math.round(calculationData.hn9_profit))} THB
                </span>
              </td>
            </tr>
            <tr>
              <td>Revenue</td>
              <td>{formatNumber(calculationData.revenue)} THB</td>
              <td>{formatNumber(calculationData.revenue)} THB</td>
            </tr>
            <tr>
              <td>Costs</td>
              <td>
                {formatNumber(Math.round(calculationData.hn5_totalCosts))} THB
              </td>
              <td>
                {formatNumber(Math.round(calculationData.hn9_totalCosts))} THB
              </td>
            </tr>
            <tr>
              <td>Margin</td>
              <td>
                <span
                  style={{
                    color: calculationData.hn9_marginPercentage >= 0 ? "green" : "red",
                    fontWeight: "bold",
                  }}
                >
                  {calculationData.hn5_marginPercentage.toFixed(2)}%
                </span>
              </td>
              <td>
                <span
                  style={{
                    color: calculationData.hn9_marginPercentage >= 0 ? "green" : "red",
                    fontWeight: "bold",
                  }}
                >
                  {calculationData.hn9_marginPercentage.toFixed(2)}%
                </span>
              </td>
            </tr>
            <tr>
              <td>Fuel Costs</td>
              <td>
                {formatNumber(Math.round(calculationData.hn5_fuelCosts))} THB
              </td>
              <td>
                {formatNumber(Math.round(calculationData.hn9_fuelCosts))} THB
              </td>
            </tr>
            <tr>
              <td>Percentage Fuel Cost of Revenue</td>
              <td>
                <span
                  style={{
                    color:
                      calculationData.hn9_fuelCostsPercentage <= 30 ? "green" : "red",
                    fontWeight: "bold",
                  }}
                >
                  {calculationData.hn5_fuelCostsPercentage.toFixed(2)}%
                </span>
              </td>
              <td>
                <span
                  style={{
                    color:
                      calculationData.hn9_fuelCostsPercentage <= 30 ? "green" : "red",
                    fontWeight: "bold",
                  }}
                >
                  {calculationData.hn9_fuelCostsPercentage.toFixed(2)}%
                </span>
              </td>
            </tr>
            <tr>
              <td>Operational Costs</td>
              <td>
                {formatNumber(Math.round(calculationData.hn5_operatingCosts))} THB
              </td>
              <td>
                {formatNumber(Math.round(calculationData.hn9_operatingCosts))} THB
              </td>
            </tr>
            <tr>
              <td>Voyage Expenses</td>
              <td>
                {formatNumber(Math.round(calculationData.voyageExpenses))} THB
              </td>
              <td>
                {formatNumber(Math.round(calculationData.voyageExpenses))} THB
              </td>
            </tr>
          </tbody>

        </table>
      </div>
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

export default withAuthenticator(CalculationDataPage, withAuthenticatorOptions);
