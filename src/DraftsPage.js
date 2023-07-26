import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import { Button, withAuthenticator } from "@aws-amplify/ui-react";
import { fetchFormDataAPICall } from './functions/api/api-calls';
import './App.css';
import App from './App';

function DraftsPage({ signOut }) {
  const { formId } = useParams();
  const [formData, setFormData] = useState([]);
  const [initialValues, setInitialValues] = useState({}); // Move this outside the useEffect and initialize with an empty object

  useEffect(() => {
    async function fetchData() {
      const response = await fetchFormDataAPICall(formId);
      setFormData(response);

      // Convert the fetched formData to initialValues
      const initialValuesData = convertFormData(response);
      setInitialValues(initialValuesData);
    }

    fetchData();
  }, [formId]);

  // Check if formData is empty before attempting to convert
  if (!formData || formData.length === 0) {
    return <div><h1>Loading...</h1></div>;
  }

  return (
    <div>
      <App
        signOut={signOut}
        initialValues={initialValues}
        titleMessage={`Displaying Form ${formId}`}
        instructionsMessage=""
      />
    </div>
  );
}

const withAuthenticatorOptions = {
  hideSignUp: true
};

export default withAuthenticator(DraftsPage, withAuthenticatorOptions);

function convertFormData(formData) {
  // Extract individual properties from the formData object
  const {
    currency_type,
    exchangeRate,
    dieselFuelRate,
    bunkerFuelRate,
    lubeRate,
    voyageBonus,
    ports,
    cargos,
  } = formData;

  // Create the initial values object for the Calculator component
  const initialValues = {
    currency_type,
    exchange_rate: exchangeRate.toString(),
    diesel_rate: dieselFuelRate.toString(),
    bunker_rate: bunkerFuelRate.toString(),
    lube_rate: lubeRate.toString(),
    voyageBonus: voyageBonus.toString(),
  };

  // Add port details to the initialValues object
  for (let i = 0; i < ports.length; i++) {
    const port = ports[i];
    const portNumber = i + 1;
    initialValues[`port${portNumber}`] = port.port;
    initialValues[`port${portNumber}_fees`] = port.fees.toString();
    initialValues[`port${portNumber}_port_call`] = port.port_call.toString();
    initialValues[`port${portNumber}_crane_usage`] = port.crane_usage.toString();
    initialValues[`port${portNumber}_surveying_fees`] = port.surveying_fees.toString();
    initialValues[`port${portNumber}_miscCosts`] = port.miscCosts.toString();
  }

  // Add cargo details to the initialValues object
  for (let i = 0; i < cargos.length; i++) {
    const cargo = cargos[i];
    const cargoNumber = i + 1;
    initialValues[`cargo${cargoNumber}_type`] = cargo.type;
    initialValues[`cargo${cargoNumber}_quantity`] = cargo.quantity.toString();
    initialValues[`cargo${cargoNumber}_rate`] = cargo.rate.toString();
    initialValues[`cargo${cargoNumber}_brokerage_fees`] = cargo.brokerage_fees.toString();
  }

  return initialValues;
}
