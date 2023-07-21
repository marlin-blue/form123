import React, { useState, useRef } from 'react';
import { Calculator } from './ui-components';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { storeFormAPICall, calculateDataAPICall, fetchCalculationAPICall } from './functions/api/api-calls';
import './App.css';
import { Button } from "@aws-amplify/ui-react";

function Drafts() {
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
            <h2>Drafts</h2>
            <ul>
                <li>Form 1</li>
                <li>Form 2</li>
                <li>Form 3</li>
                {/* Add more items as needed */}
            </ul>
        </div>
    );
};

export default Drafts;
