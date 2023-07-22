import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCalculationAPICall } from "./functions/api/api-calls"; // Replace this with the actual function to fetch data by ID

function CalculationDataPage() {
  const { id } = useParams();
  const [calculationData, setCalculationData] = useState(null);

  useEffect(() => {
    // Fetch calculation data by ID when the component mounts
    fetchCalculationDataById();
  }, []);

  const fetchCalculationDataById = async () => {
    try {
      // Replace getCalculationDataById with the actual function to fetch data by ID
      const data = await fetchCalculationAPICall(id);
      setCalculationData(data); // Set the fetched data to the state
    } catch (error) {
      console.error(error);
      // Handle error
    }
  };

  if (!calculationData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Calculation Details</h1>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Calculation ID</td>
            <td>{calculationData.id}</td>
          </tr>
          <tr>
            <td>Form ID</td>
            <td>{calculationData.formId}</td>
          </tr>
          {/* Add more rows for other attributes you want to display */}
        </tbody>
      </table>
    </div>
  );
}

export default CalculationDetailsPage;
