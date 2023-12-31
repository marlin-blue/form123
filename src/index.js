// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import HistoryPage from './HistoryPage';
import DraftsPage from './DraftsPage';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from "@aws-amplify/ui-react";
import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "@aws-amplify/ui-react/styles.css";
import { studioTheme } from "./ui-components";
import CalculationDataPage from './CalculationDataPage';
import { AmplifyProvider } from '@aws-amplify/ui-react'

Amplify.configure(awsconfig);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ThemeProvider theme={studioTheme}>
      <Router>
        <Routes>
          <Route exact path="/" element={<App />}></Route>
          <Route path="/history" element={<HistoryPage />}></Route>
          <Route path="/calculation/" element={<CalculationDataPage />}></Route>
          <Route path="/calculation/:id" element={<CalculationDataPage />} />
          <Route path="/form/:formId" element={<DraftsPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();
