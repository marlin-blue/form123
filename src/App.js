import React, { useState } from 'react';
import { DistanceCreateForm } from './ui-components';
import { storeFormAPICall } from './functions/api/api-calls';
import './App.css';

function App() {
  const [result, setResult] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = async (formData) => {
    try {
      console.log(formData)
      const response = await storeFormAPICall(formData);
      setResult(response.message);
      setErrorMessage(null);
    } catch (error) {
      setResult(null);
      setErrorMessage(error.message);
    }
  };

  return (
    <div>
      <h1>Calculator</h1>
      <DistanceCreateForm onSubmit={handleSubmit} />
      {result && <p style={{ color: 'green' }}>Result: {result}</p>}
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
}

export default App;
