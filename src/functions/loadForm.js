
import React, { useState } from 'react';
import * as React from "react";
import { getFormAPICall } from './functions/api/api-calls';

function getExisitingForm() {

    const [formData, setFormData] = useState({});
    const [formId, setFormId] = useState({});

    const formValues = await getFormAPICall(formId, formData) //get from data from getForm API
    console.log(formValues)
    
    //load form data into the formValues values in the form

    const [port1, setPort1] = useState(formValues.port1);
    const [port2, setPort2] = useState(formValues.port2);
    const [port3, setPort3] = useState(formValues.port3);
    const [port4, setPort4] = useState(formValues.port4);
    const [port5, setPort5] = useState(formValues.port5);
    const [port6, setPort6] = useState(formValues.port6);
    const [cargo1, setCargo1] = useState(formValues.cargo1);
    const [cargo1_quantity, setCargo1_quantity] = useState(
        formValues.cargo1_quantity
    );
    const [cargo1_rate, setCargo1_rate] = useState(
        formValues.cargo1_rate
    );
    const [cargo2, setCargo2] = useState(formValues.cargo2);
    const [cargo2_quantity, setCargo2_quantity] = useState(
        formValues.cargo2_quantity
    );
    const [cargo2_rate, setCargo2_rate] = useState(
        formValues.cargo2_rate
    );
    const [cargo3, setCargo3] = useState(formValues.cargo3);
    const [cargo3_quantity, setCargo3_quantity] = useState(
        formValues.cargo3_quantity
    );
    const [cargo3_rate, setCargo3_rate] = useState(
        formValues.cargo3_rate
    );
    const [cargo4, setCargo4] = useState(formValues.cargo4);
    const [cargo4_quantity, setCargo4_quantity] = useState(
        formValues.cargo4_quantity
    );
    const [cargo4_rate, setCargo4_rate] = useState(
        formValues.cargo4_rate
    );
    const [cargo5, setCargo5] = useState(formValues.cargo5);
    const [cargo5_quantity, setCargo5_quantity] = useState(
        formValues.cargo5_quantity
    );
    const [cargo5_rate, setCargo5_rate] = useState(
        formValues.cargo5_rate
    );
    const [cargo6, setCargo6] = useState(formValues.cargo6);
    const [cargo6_quantity, setCargo6_quantity] = useState(
        formValues.cargo6_quantity
    );
    const [cargo6_rate, setCargo6_rate] = useState(
        formValues.cargo6_rate
    );
    const [bunker_rate, setBunker_rate] = useState(
        formValues.bunker_rate
    );
    const [diesel_rate, setDiesel_rate] = useState(
        formValues.diesel_rate
    );
    const [miscCosts, setMiscCosts] = useState(formValues.miscCosts);
    const [craneUsage, setCraneUsage] = useState(formValues.craneUsage);
    const [portDays, setPortDays] = useState(formValues.portDays);

}
export default getExisitingForm;