import React, { useState, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { storeFormAPICall, calculateDataAPICall, fetchCalculationAPICall } from './functions/api/api-calls';
import './App.css';
import { Button } from "@aws-amplify/ui-react";

function Drafts() {
    const [calculationData, setCalculationData] = useState(["7 July 2023"]);
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
            <div>
                <h1>Draft Forms</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Form ID</th>
                            <th>Created Date</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>12341233</td>
                            {calculationData.map((data, index) => (
                                <td key={index}>
                                    <span>
                                        {data}
                                    </span>
                                </td>
                            ))}
                            <td>Cargo, Ports</td>
                        </tr>

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Drafts;

function formatNumber(number) {
    if (typeof number === 'number') {
        return number.toLocaleString();
    }
    return '';
}
