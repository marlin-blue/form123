/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  CheckboxField,
  Divider,
  Flex,
  Grid,
  Heading,
  SelectField,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Distance } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function DistanceCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const { tokens } = useTheme();
  const initialValues = {
    Field4: "",
    vessel_ht1: false,
    vessel_hn5: false,
    vessel_hn7: false,
    vessel_hn9: false,
    vessel_hn10: false,
    vessel_ht20: false,
    vessel_ht21: false,
    port1: "",
    port1_fees: "",
    port1_port_call: "",
    port1_crane_usage: "",
    port2: "",
    port2_fees: "",
    port2_port_call: "",
    port2_crane_usage: "",
    port3: "",
    port3_fees: "",
    port3_port_call: "",
    port3_crane_usage: "",
    port4: "",
    port4_fees: "",
    port4_port_call: "",
    port4_crane_usage: "",
    port5: "",
    port5_fees: "",
    port6: "",
    port6_fees: "",
    cargo1: "",
    cargo1_quantity: "",
    cargo1_rate: "",
    cargo2: "",
    cargo2_quantity: "",
    cargo2_rate: "",
    cargo3: "",
    cargo3_quantity: "",
    cargo3_rate: "",
    cargo4: "",
    cargo4_quantity: "",
    cargo4_rate: "",
    cargo5: "",
    cargo5_quantity: "",
    cargo5_rate: "",
    cargo6: "",
    cargo6_quantity: "",
    cargo6_rate: "",
    bunker_rate: "",
    diesel_rate: "",
    lube_rate: "",
    surveying_fees: "",
    Field0: "",
    miscCosts: "",
    craneUsage: "",
    portDays: "",
  };
  const [Field4, setField4] = React.useState(initialValues.Field4);
  const [vessel_ht1, setVessel_ht1] = React.useState(initialValues.vessel_ht1);
  const [vessel_hn5, setVessel_hn5] = React.useState(initialValues.vessel_hn5);
  const [vessel_hn7, setVessel_hn7] = React.useState(initialValues.vessel_hn7);
  const [vessel_hn9, setVessel_hn9] = React.useState(initialValues.vessel_hn9);
  const [vessel_hn10, setVessel_hn10] = React.useState(
    initialValues.vessel_hn10
  );
  const [vessel_ht20, setVessel_ht20] = React.useState(
    initialValues.vessel_ht20
  );
  const [vessel_ht21, setVessel_ht21] = React.useState(
    initialValues.vessel_ht21
  );
  const [port1, setPort1] = React.useState(initialValues.port1);
  const [port1_fees, setPort1_fees] = React.useState(initialValues.port1_fees);
  const [port1_port_call, setPort1_port_call] = React.useState(
    initialValues.port1_port_call
  );
  const [port1_crane_usage, setPort1_crane_usage] = React.useState(
    initialValues.port1_crane_usage
  );
  const [port2, setPort2] = React.useState(initialValues.port2);
  const [port2_fees, setPort2_fees] = React.useState(initialValues.port2_fees);
  const [port2_port_call, setPort2_port_call] = React.useState(
    initialValues.port2_port_call
  );
  const [port2_crane_usage, setPort2_crane_usage] = React.useState(
    initialValues.port2_crane_usage
  );
  const [port3, setPort3] = React.useState(initialValues.port3);
  const [port3_fees, setPort3_fees] = React.useState(initialValues.port3_fees);
  const [port3_port_call, setPort3_port_call] = React.useState(
    initialValues.port3_port_call
  );
  const [port3_crane_usage, setPort3_crane_usage] = React.useState(
    initialValues.port3_crane_usage
  );
  const [port4, setPort4] = React.useState(initialValues.port4);
  const [port4_fees, setPort4_fees] = React.useState(initialValues.port4_fees);
  const [port4_port_call, setPort4_port_call] = React.useState(
    initialValues.port4_port_call
  );
  const [port4_crane_usage, setPort4_crane_usage] = React.useState(
    initialValues.port4_crane_usage
  );
  const [port5, setPort5] = React.useState(initialValues.port5);
  const [port5_fees, setPort5_fees] = React.useState(initialValues.port5_fees);
  const [port6, setPort6] = React.useState(initialValues.port6);
  const [port6_fees, setPort6_fees] = React.useState(initialValues.port6_fees);
  const [cargo1, setCargo1] = React.useState(initialValues.cargo1);
  const [cargo1_quantity, setCargo1_quantity] = React.useState(
    initialValues.cargo1_quantity
  );
  const [cargo1_rate, setCargo1_rate] = React.useState(
    initialValues.cargo1_rate
  );
  const [cargo2, setCargo2] = React.useState(initialValues.cargo2);
  const [cargo2_quantity, setCargo2_quantity] = React.useState(
    initialValues.cargo2_quantity
  );
  const [cargo2_rate, setCargo2_rate] = React.useState(
    initialValues.cargo2_rate
  );
  const [cargo3, setCargo3] = React.useState(initialValues.cargo3);
  const [cargo3_quantity, setCargo3_quantity] = React.useState(
    initialValues.cargo3_quantity
  );
  const [cargo3_rate, setCargo3_rate] = React.useState(
    initialValues.cargo3_rate
  );
  const [cargo4, setCargo4] = React.useState(initialValues.cargo4);
  const [cargo4_quantity, setCargo4_quantity] = React.useState(
    initialValues.cargo4_quantity
  );
  const [cargo4_rate, setCargo4_rate] = React.useState(
    initialValues.cargo4_rate
  );
  const [cargo5, setCargo5] = React.useState(initialValues.cargo5);
  const [cargo5_quantity, setCargo5_quantity] = React.useState(
    initialValues.cargo5_quantity
  );
  const [cargo5_rate, setCargo5_rate] = React.useState(
    initialValues.cargo5_rate
  );
  const [cargo6, setCargo6] = React.useState(initialValues.cargo6);
  const [cargo6_quantity, setCargo6_quantity] = React.useState(
    initialValues.cargo6_quantity
  );
  const [cargo6_rate, setCargo6_rate] = React.useState(
    initialValues.cargo6_rate
  );
  const [bunker_rate, setBunker_rate] = React.useState(
    initialValues.bunker_rate
  );
  const [diesel_rate, setDiesel_rate] = React.useState(
    initialValues.diesel_rate
  );
  const [lube_rate, setLube_rate] = React.useState(initialValues.lube_rate);
  const [surveying_fees, setSurveying_fees] = React.useState(
    initialValues.surveying_fees
  );
  const [Field0, setField0] = React.useState(initialValues.Field0);
  const [miscCosts, setMiscCosts] = React.useState(initialValues.miscCosts);
  const [craneUsage, setCraneUsage] = React.useState(initialValues.craneUsage);
  const [portDays, setPortDays] = React.useState(initialValues.portDays);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setField4(initialValues.Field4);
    setVessel_ht1(initialValues.vessel_ht1);
    setVessel_hn5(initialValues.vessel_hn5);
    setVessel_hn7(initialValues.vessel_hn7);
    setVessel_hn9(initialValues.vessel_hn9);
    setVessel_hn10(initialValues.vessel_hn10);
    setVessel_ht20(initialValues.vessel_ht20);
    setVessel_ht21(initialValues.vessel_ht21);
    setPort1(initialValues.port1);
    setPort1_fees(initialValues.port1_fees);
    setPort1_port_call(initialValues.port1_port_call);
    setPort1_crane_usage(initialValues.port1_crane_usage);
    setPort2(initialValues.port2);
    setPort2_fees(initialValues.port2_fees);
    setPort2_port_call(initialValues.port2_port_call);
    setPort2_crane_usage(initialValues.port2_crane_usage);
    setPort3(initialValues.port3);
    setPort3_fees(initialValues.port3_fees);
    setPort3_port_call(initialValues.port3_port_call);
    setPort3_crane_usage(initialValues.port3_crane_usage);
    setPort4(initialValues.port4);
    setPort4_fees(initialValues.port4_fees);
    setPort4_port_call(initialValues.port4_port_call);
    setPort4_crane_usage(initialValues.port4_crane_usage);
    setPort5(initialValues.port5);
    setPort5_fees(initialValues.port5_fees);
    setPort6(initialValues.port6);
    setPort6_fees(initialValues.port6_fees);
    setCargo1(initialValues.cargo1);
    setCargo1_quantity(initialValues.cargo1_quantity);
    setCargo1_rate(initialValues.cargo1_rate);
    setCargo2(initialValues.cargo2);
    setCargo2_quantity(initialValues.cargo2_quantity);
    setCargo2_rate(initialValues.cargo2_rate);
    setCargo3(initialValues.cargo3);
    setCargo3_quantity(initialValues.cargo3_quantity);
    setCargo3_rate(initialValues.cargo3_rate);
    setCargo4(initialValues.cargo4);
    setCargo4_quantity(initialValues.cargo4_quantity);
    setCargo4_rate(initialValues.cargo4_rate);
    setCargo5(initialValues.cargo5);
    setCargo5_quantity(initialValues.cargo5_quantity);
    setCargo5_rate(initialValues.cargo5_rate);
    setCargo6(initialValues.cargo6);
    setCargo6_quantity(initialValues.cargo6_quantity);
    setCargo6_rate(initialValues.cargo6_rate);
    setBunker_rate(initialValues.bunker_rate);
    setDiesel_rate(initialValues.diesel_rate);
    setLube_rate(initialValues.lube_rate);
    setSurveying_fees(initialValues.surveying_fees);
    setField0(initialValues.Field0);
    setMiscCosts(initialValues.miscCosts);
    setCraneUsage(initialValues.craneUsage);
    setPortDays(initialValues.portDays);
    setErrors({});
  };
  const validations = {
    Field4: [],
    vessel_ht1: [],
    vessel_hn5: [],
    vessel_hn7: [],
    vessel_hn9: [],
    vessel_hn10: [],
    vessel_ht20: [],
    vessel_ht21: [],
    port1: [],
    port1_fees: [],
    port1_port_call: [],
    port1_crane_usage: [],
    port2: [],
    port2_fees: [],
    port2_port_call: [],
    port2_crane_usage: [],
    port3: [],
    port3_fees: [],
    port3_port_call: [],
    port3_crane_usage: [],
    port4: [],
    port4_fees: [],
    port4_port_call: [],
    port4_crane_usage: [],
    port5: [],
    port5_fees: [],
    port6: [],
    port6_fees: [],
    cargo1: [],
    cargo1_quantity: [],
    cargo1_rate: [],
    cargo2: [],
    cargo2_quantity: [],
    cargo2_rate: [],
    cargo3: [],
    cargo3_quantity: [],
    cargo3_rate: [],
    cargo4: [],
    cargo4_quantity: [],
    cargo4_rate: [],
    cargo5: [],
    cargo5_quantity: [],
    cargo5_rate: [],
    cargo6: [],
    cargo6_quantity: [],
    cargo6_rate: [],
    bunker_rate: [],
    diesel_rate: [],
    lube_rate: [],
    surveying_fees: [],
    Field0: [],
    miscCosts: [],
    craneUsage: [],
    portDays: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap={tokens.space.xxxs.value}
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          Field4,
          vessel_ht1,
          vessel_hn5,
          vessel_hn7,
          vessel_hn9,
          vessel_hn10,
          vessel_ht20,
          vessel_ht21,
          port1,
          port1_fees,
          port1_port_call,
          port1_crane_usage,
          port2,
          port2_fees,
          port2_port_call,
          port2_crane_usage,
          port3,
          port3_fees,
          port3_port_call,
          port3_crane_usage,
          port4,
          port4_fees,
          port4_port_call,
          port4_crane_usage,
          port5,
          port5_fees,
          port6,
          port6_fees,
          cargo1,
          cargo1_quantity,
          cargo1_rate,
          cargo2,
          cargo2_quantity,
          cargo2_rate,
          cargo3,
          cargo3_quantity,
          cargo3_rate,
          cargo4,
          cargo4_quantity,
          cargo4_rate,
          cargo5,
          cargo5_quantity,
          cargo5_rate,
          cargo6,
          cargo6_quantity,
          cargo6_rate,
          bunker_rate,
          diesel_rate,
          lube_rate,
          surveying_fees,
          Field0,
          miscCosts,
          craneUsage,
          portDays,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          const modelFieldsToSave = {
            port1: modelFields.port1,
            port2: modelFields.port2,
            port3: modelFields.port3,
            port4: modelFields.port4,
            port5: modelFields.port5,
            port6: modelFields.port6,
            cargo1: modelFields.cargo1,
            cargo1_quantity: modelFields.cargo1_quantity,
            cargo1_rate: modelFields.cargo1_rate,
            cargo2: modelFields.cargo2,
            cargo2_quantity: modelFields.cargo2_quantity,
            cargo2_rate: modelFields.cargo2_rate,
            cargo3: modelFields.cargo3,
            cargo3_quantity: modelFields.cargo3_quantity,
            cargo3_rate: modelFields.cargo3_rate,
            cargo4: modelFields.cargo4,
            cargo4_quantity: modelFields.cargo4_quantity,
            cargo4_rate: modelFields.cargo4_rate,
            cargo5: modelFields.cargo5,
            cargo5_rate: modelFields.cargo5_rate,
            cargo6: modelFields.cargo6,
            cargo6_quantity: modelFields.cargo6_quantity,
            cargo6_rate: modelFields.cargo6_rate,
            bunker_rate: modelFields.bunker_rate,
            diesel_rate: modelFields.diesel_rate,
            miscCosts: modelFields.miscCosts,
            craneUsage: modelFields.craneUsage,
            portDays: modelFields.portDays,
          };
          await DataStore.save(new Distance(modelFieldsToSave));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "DistanceCreateForm")}
      {...rest}
    >
      <Heading
        level={3}
        children="Vessel's Voyage "
        {...getOverrideProps(overrides, "SectionalElement8")}
      ></Heading>
      <SelectField
        label="Currency"
        placeholder="Please select an option"
        value={Field4}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Field4: value,
              vessel_ht1,
              vessel_hn5,
              vessel_hn7,
              vessel_hn9,
              vessel_hn10,
              vessel_ht20,
              vessel_ht21,
              port1,
              port1_fees,
              port1_port_call,
              port1_crane_usage,
              port2,
              port2_fees,
              port2_port_call,
              port2_crane_usage,
              port3,
              port3_fees,
              port3_port_call,
              port3_crane_usage,
              port4,
              port4_fees,
              port4_port_call,
              port4_crane_usage,
              port5,
              port5_fees,
              port6,
              port6_fees,
              cargo1,
              cargo1_quantity,
              cargo1_rate,
              cargo2,
              cargo2_quantity,
              cargo2_rate,
              cargo3,
              cargo3_quantity,
              cargo3_rate,
              cargo4,
              cargo4_quantity,
              cargo4_rate,
              cargo5,
              cargo5_quantity,
              cargo5_rate,
              cargo6,
              cargo6_quantity,
              cargo6_rate,
              bunker_rate,
              diesel_rate,
              lube_rate,
              surveying_fees,
              Field0,
              miscCosts,
              craneUsage,
              portDays,
            };
            const result = onChange(modelFields);
            value = result?.Field4 ?? value;
          }
          if (errors.Field4?.hasError) {
            runValidationTasks("Field4", value);
          }
          setField4(value);
        }}
        onBlur={() => runValidationTasks("Field4", Field4)}
        errorMessage={errors.Field4?.errorMessage}
        hasError={errors.Field4?.hasError}
        {...getOverrideProps(overrides, "Field4")}
      >
        <option
          children="THB"
          value="THB"
          {...getOverrideProps(overrides, "Field4option0")}
        ></option>
        <option
          children="USD"
          value="USD"
          {...getOverrideProps(overrides, "Field4option1")}
        ></option>
        <option
          children="MYR"
          value="MYR"
          {...getOverrideProps(overrides, "Field4option2")}
        ></option>
      </SelectField>
      <Heading
        children="Vessels"
        {...getOverrideProps(overrides, "SectionalElement15")}
      ></Heading>
      <CheckboxField
        label="Harin Transport 1"
        name="fieldName"
        value="fieldName"
        checked={vessel_ht1}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              Field4,
              vessel_ht1: value,
              vessel_hn5,
              vessel_hn7,
              vessel_hn9,
              vessel_hn10,
              vessel_ht20,
              vessel_ht21,
              port1,
              port1_fees,
              port1_port_call,
              port1_crane_usage,
              port2,
              port2_fees,
              port2_port_call,
              port2_crane_usage,
              port3,
              port3_fees,
              port3_port_call,
              port3_crane_usage,
              port4,
              port4_fees,
              port4_port_call,
              port4_crane_usage,
              port5,
              port5_fees,
              port6,
              port6_fees,
              cargo1,
              cargo1_quantity,
              cargo1_rate,
              cargo2,
              cargo2_quantity,
              cargo2_rate,
              cargo3,
              cargo3_quantity,
              cargo3_rate,
              cargo4,
              cargo4_quantity,
              cargo4_rate,
              cargo5,
              cargo5_quantity,
              cargo5_rate,
              cargo6,
              cargo6_quantity,
              cargo6_rate,
              bunker_rate,
              diesel_rate,
              lube_rate,
              surveying_fees,
              Field0,
              miscCosts,
              craneUsage,
              portDays,
            };
            const result = onChange(modelFields);
            value = result?.vessel_ht1 ?? value;
          }
          if (errors.vessel_ht1?.hasError) {
            runValidationTasks("vessel_ht1", value);
          }
          setVessel_ht1(value);
        }}
        onBlur={() => runValidationTasks("vessel_ht1", vessel_ht1)}
        errorMessage={errors.vessel_ht1?.errorMessage}
        hasError={errors.vessel_ht1?.hasError}
        {...getOverrideProps(overrides, "vessel_ht1")}
      ></CheckboxField>
      <CheckboxField
        label="Harin Navee 5"
        name="fieldName"
        value="fieldName"
        checked={vessel_hn5}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              Field4,
              vessel_ht1,
              vessel_hn5: value,
              vessel_hn7,
              vessel_hn9,
              vessel_hn10,
              vessel_ht20,
              vessel_ht21,
              port1,
              port1_fees,
              port1_port_call,
              port1_crane_usage,
              port2,
              port2_fees,
              port2_port_call,
              port2_crane_usage,
              port3,
              port3_fees,
              port3_port_call,
              port3_crane_usage,
              port4,
              port4_fees,
              port4_port_call,
              port4_crane_usage,
              port5,
              port5_fees,
              port6,
              port6_fees,
              cargo1,
              cargo1_quantity,
              cargo1_rate,
              cargo2,
              cargo2_quantity,
              cargo2_rate,
              cargo3,
              cargo3_quantity,
              cargo3_rate,
              cargo4,
              cargo4_quantity,
              cargo4_rate,
              cargo5,
              cargo5_quantity,
              cargo5_rate,
              cargo6,
              cargo6_quantity,
              cargo6_rate,
              bunker_rate,
              diesel_rate,
              lube_rate,
              surveying_fees,
              Field0,
              miscCosts,
              craneUsage,
              portDays,
            };
            const result = onChange(modelFields);
            value = result?.vessel_hn5 ?? value;
          }
          if (errors.vessel_hn5?.hasError) {
            runValidationTasks("vessel_hn5", value);
          }
          setVessel_hn5(value);
        }}
        onBlur={() => runValidationTasks("vessel_hn5", vessel_hn5)}
        errorMessage={errors.vessel_hn5?.errorMessage}
        hasError={errors.vessel_hn5?.hasError}
        {...getOverrideProps(overrides, "vessel_hn5")}
      ></CheckboxField>
      <CheckboxField
        label="Harin Navee 7"
        name="fieldName"
        value="fieldName"
        checked={vessel_hn7}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              Field4,
              vessel_ht1,
              vessel_hn5,
              vessel_hn7: value,
              vessel_hn9,
              vessel_hn10,
              vessel_ht20,
              vessel_ht21,
              port1,
              port1_fees,
              port1_port_call,
              port1_crane_usage,
              port2,
              port2_fees,
              port2_port_call,
              port2_crane_usage,
              port3,
              port3_fees,
              port3_port_call,
              port3_crane_usage,
              port4,
              port4_fees,
              port4_port_call,
              port4_crane_usage,
              port5,
              port5_fees,
              port6,
              port6_fees,
              cargo1,
              cargo1_quantity,
              cargo1_rate,
              cargo2,
              cargo2_quantity,
              cargo2_rate,
              cargo3,
              cargo3_quantity,
              cargo3_rate,
              cargo4,
              cargo4_quantity,
              cargo4_rate,
              cargo5,
              cargo5_quantity,
              cargo5_rate,
              cargo6,
              cargo6_quantity,
              cargo6_rate,
              bunker_rate,
              diesel_rate,
              lube_rate,
              surveying_fees,
              Field0,
              miscCosts,
              craneUsage,
              portDays,
            };
            const result = onChange(modelFields);
            value = result?.vessel_hn7 ?? value;
          }
          if (errors.vessel_hn7?.hasError) {
            runValidationTasks("vessel_hn7", value);
          }
          setVessel_hn7(value);
        }}
        onBlur={() => runValidationTasks("vessel_hn7", vessel_hn7)}
        errorMessage={errors.vessel_hn7?.errorMessage}
        hasError={errors.vessel_hn7?.hasError}
        {...getOverrideProps(overrides, "vessel_hn7")}
      ></CheckboxField>
      <CheckboxField
        label="Harin Navee 9"
        name="fieldName"
        value="fieldName"
        checked={vessel_hn9}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              Field4,
              vessel_ht1,
              vessel_hn5,
              vessel_hn7,
              vessel_hn9: value,
              vessel_hn10,
              vessel_ht20,
              vessel_ht21,
              port1,
              port1_fees,
              port1_port_call,
              port1_crane_usage,
              port2,
              port2_fees,
              port2_port_call,
              port2_crane_usage,
              port3,
              port3_fees,
              port3_port_call,
              port3_crane_usage,
              port4,
              port4_fees,
              port4_port_call,
              port4_crane_usage,
              port5,
              port5_fees,
              port6,
              port6_fees,
              cargo1,
              cargo1_quantity,
              cargo1_rate,
              cargo2,
              cargo2_quantity,
              cargo2_rate,
              cargo3,
              cargo3_quantity,
              cargo3_rate,
              cargo4,
              cargo4_quantity,
              cargo4_rate,
              cargo5,
              cargo5_quantity,
              cargo5_rate,
              cargo6,
              cargo6_quantity,
              cargo6_rate,
              bunker_rate,
              diesel_rate,
              lube_rate,
              surveying_fees,
              Field0,
              miscCosts,
              craneUsage,
              portDays,
            };
            const result = onChange(modelFields);
            value = result?.vessel_hn9 ?? value;
          }
          if (errors.vessel_hn9?.hasError) {
            runValidationTasks("vessel_hn9", value);
          }
          setVessel_hn9(value);
        }}
        onBlur={() => runValidationTasks("vessel_hn9", vessel_hn9)}
        errorMessage={errors.vessel_hn9?.errorMessage}
        hasError={errors.vessel_hn9?.hasError}
        {...getOverrideProps(overrides, "vessel_hn9")}
      ></CheckboxField>
      <CheckboxField
        label="Harin Navee 10"
        name="fieldName"
        value="fieldName"
        checked={vessel_hn10}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              Field4,
              vessel_ht1,
              vessel_hn5,
              vessel_hn7,
              vessel_hn9,
              vessel_hn10: value,
              vessel_ht20,
              vessel_ht21,
              port1,
              port1_fees,
              port1_port_call,
              port1_crane_usage,
              port2,
              port2_fees,
              port2_port_call,
              port2_crane_usage,
              port3,
              port3_fees,
              port3_port_call,
              port3_crane_usage,
              port4,
              port4_fees,
              port4_port_call,
              port4_crane_usage,
              port5,
              port5_fees,
              port6,
              port6_fees,
              cargo1,
              cargo1_quantity,
              cargo1_rate,
              cargo2,
              cargo2_quantity,
              cargo2_rate,
              cargo3,
              cargo3_quantity,
              cargo3_rate,
              cargo4,
              cargo4_quantity,
              cargo4_rate,
              cargo5,
              cargo5_quantity,
              cargo5_rate,
              cargo6,
              cargo6_quantity,
              cargo6_rate,
              bunker_rate,
              diesel_rate,
              lube_rate,
              surveying_fees,
              Field0,
              miscCosts,
              craneUsage,
              portDays,
            };
            const result = onChange(modelFields);
            value = result?.vessel_hn10 ?? value;
          }
          if (errors.vessel_hn10?.hasError) {
            runValidationTasks("vessel_hn10", value);
          }
          setVessel_hn10(value);
        }}
        onBlur={() => runValidationTasks("vessel_hn10", vessel_hn10)}
        errorMessage={errors.vessel_hn10?.errorMessage}
        hasError={errors.vessel_hn10?.hasError}
        {...getOverrideProps(overrides, "vessel_hn10")}
      ></CheckboxField>
      <CheckboxField
        label="Harin Transport 20"
        name="fieldName"
        value="fieldName"
        checked={vessel_ht20}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              Field4,
              vessel_ht1,
              vessel_hn5,
              vessel_hn7,
              vessel_hn9,
              vessel_hn10,
              vessel_ht20: value,
              vessel_ht21,
              port1,
              port1_fees,
              port1_port_call,
              port1_crane_usage,
              port2,
              port2_fees,
              port2_port_call,
              port2_crane_usage,
              port3,
              port3_fees,
              port3_port_call,
              port3_crane_usage,
              port4,
              port4_fees,
              port4_port_call,
              port4_crane_usage,
              port5,
              port5_fees,
              port6,
              port6_fees,
              cargo1,
              cargo1_quantity,
              cargo1_rate,
              cargo2,
              cargo2_quantity,
              cargo2_rate,
              cargo3,
              cargo3_quantity,
              cargo3_rate,
              cargo4,
              cargo4_quantity,
              cargo4_rate,
              cargo5,
              cargo5_quantity,
              cargo5_rate,
              cargo6,
              cargo6_quantity,
              cargo6_rate,
              bunker_rate,
              diesel_rate,
              lube_rate,
              surveying_fees,
              Field0,
              miscCosts,
              craneUsage,
              portDays,
            };
            const result = onChange(modelFields);
            value = result?.vessel_ht20 ?? value;
          }
          if (errors.vessel_ht20?.hasError) {
            runValidationTasks("vessel_ht20", value);
          }
          setVessel_ht20(value);
        }}
        onBlur={() => runValidationTasks("vessel_ht20", vessel_ht20)}
        errorMessage={errors.vessel_ht20?.errorMessage}
        hasError={errors.vessel_ht20?.hasError}
        {...getOverrideProps(overrides, "vessel_ht20")}
      ></CheckboxField>
      <CheckboxField
        label="Harin Transport 21"
        name="fieldName"
        value="fieldName"
        checked={vessel_ht21}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              Field4,
              vessel_ht1,
              vessel_hn5,
              vessel_hn7,
              vessel_hn9,
              vessel_hn10,
              vessel_ht20,
              vessel_ht21: value,
              port1,
              port1_fees,
              port1_port_call,
              port1_crane_usage,
              port2,
              port2_fees,
              port2_port_call,
              port2_crane_usage,
              port3,
              port3_fees,
              port3_port_call,
              port3_crane_usage,
              port4,
              port4_fees,
              port4_port_call,
              port4_crane_usage,
              port5,
              port5_fees,
              port6,
              port6_fees,
              cargo1,
              cargo1_quantity,
              cargo1_rate,
              cargo2,
              cargo2_quantity,
              cargo2_rate,
              cargo3,
              cargo3_quantity,
              cargo3_rate,
              cargo4,
              cargo4_quantity,
              cargo4_rate,
              cargo5,
              cargo5_quantity,
              cargo5_rate,
              cargo6,
              cargo6_quantity,
              cargo6_rate,
              bunker_rate,
              diesel_rate,
              lube_rate,
              surveying_fees,
              Field0,
              miscCosts,
              craneUsage,
              portDays,
            };
            const result = onChange(modelFields);
            value = result?.vessel_ht21 ?? value;
          }
          if (errors.vessel_ht21?.hasError) {
            runValidationTasks("vessel_ht21", value);
          }
          setVessel_ht21(value);
        }}
        onBlur={() => runValidationTasks("vessel_ht21", vessel_ht21)}
        errorMessage={errors.vessel_ht21?.errorMessage}
        hasError={errors.vessel_ht21?.hasError}
        {...getOverrideProps(overrides, "vessel_ht21")}
      ></CheckboxField>
      <Divider
        orientation="horizontal"
        {...getOverrideProps(overrides, "SectionalElement16")}
      ></Divider>
      <Heading
        children="Port 1"
        {...getOverrideProps(overrides, "SectionalElement9")}
      ></Heading>
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(2, auto)"
        {...getOverrideProps(overrides, "RowGrid12")}
      >
        <SelectField
          label="Name"
          placeholder="Please select an option"
          isDisabled={false}
          value={port1}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                Field4,
                vessel_ht1,
                vessel_hn5,
                vessel_hn7,
                vessel_hn9,
                vessel_hn10,
                vessel_ht20,
                vessel_ht21,
                port1: value,
                port1_fees,
                port1_port_call,
                port1_crane_usage,
                port2,
                port2_fees,
                port2_port_call,
                port2_crane_usage,
                port3,
                port3_fees,
                port3_port_call,
                port3_crane_usage,
                port4,
                port4_fees,
                port4_port_call,
                port4_crane_usage,
                port5,
                port5_fees,
                port6,
                port6_fees,
                cargo1,
                cargo1_quantity,
                cargo1_rate,
                cargo2,
                cargo2_quantity,
                cargo2_rate,
                cargo3,
                cargo3_quantity,
                cargo3_rate,
                cargo4,
                cargo4_quantity,
                cargo4_rate,
                cargo5,
                cargo5_quantity,
                cargo5_rate,
                cargo6,
                cargo6_quantity,
                cargo6_rate,
                bunker_rate,
                diesel_rate,
                lube_rate,
                surveying_fees,
                Field0,
                miscCosts,
                craneUsage,
                portDays,
              };
              const result = onChange(modelFields);
              value = result?.port1 ?? value;
            }
            if (errors.port1?.hasError) {
              runValidationTasks("port1", value);
            }
            setPort1(value);
          }}
          onBlur={() => runValidationTasks("port1", port1)}
          errorMessage={errors.port1?.errorMessage}
          hasError={errors.port1?.hasError}
          {...getOverrideProps(overrides, "port1")}
        >
          <option
            children="NIL"
            value="NIL"
            {...getOverrideProps(overrides, "port1option0")}
          ></option>
          <option
            children="Ayutthaya - Bangpain (AB)"
            value="Ayutthaya - Bangpain (AB)"
            {...getOverrideProps(overrides, "port1option1")}
          ></option>
          <option
            children="Ayutthaya - Nakorn Luang (ANL)"
            value="Ayutthaya - Nakorn Luang (ANL)"
            {...getOverrideProps(overrides, "port1option2")}
          ></option>
          <option
            children="Bahodopi (BHDP)"
            value="Bahodopi (BHDP)"
            {...getOverrideProps(overrides, "port1option3")}
          ></option>
          <option
            children="Balikpapan (BPN)"
            value="Balikpapan (BPN)"
            {...getOverrideProps(overrides, "port1option4")}
          ></option>
          <option
            children="Bang Sapan (BS)"
            value="Bang Sapan (BS)"
            {...getOverrideProps(overrides, "port1option5")}
          ></option>
          <option
            children="Bangkok (BK)"
            value="Bangkok (BK)"
            {...getOverrideProps(overrides, "port1option6")}
          ></option>
          <option
            children="Bangpakong (BAK)"
            value="Bangpakong (BAK)"
            {...getOverrideProps(overrides, "port1option7")}
          ></option>
          <option
            children="Banyuwangi - Tanjung Wangi (BJU)"
            value="Banyuwangi - Tanjung Wangi (BJU)"
            {...getOverrideProps(overrides, "port1option8")}
          ></option>
          <option
            children="Batam (BAT)"
            value="Batam (BAT)"
            {...getOverrideProps(overrides, "port1option9")}
          ></option>
          <option
            children="Beihai (BHY)"
            value="Beihai (BHY)"
            {...getOverrideProps(overrides, "port1option10")}
          ></option>
          <option
            children="Belawan (BRW)"
            value="Belawan (BRW)"
            {...getOverrideProps(overrides, "port1option11")}
          ></option>
          <option
            children="Benoa (Bali) (BAO)"
            value="Benoa (Bali) (BAO)"
            {...getOverrideProps(overrides, "port1option12")}
          ></option>
          <option
            children="Bintan (BTN)"
            value="Bintan (BTN)"
            {...getOverrideProps(overrides, "port1option13")}
          ></option>
          <option
            children="Bintulu (BIN)"
            value="Bintulu (BIN)"
            {...getOverrideProps(overrides, "port1option14")}
          ></option>
          <option
            children="Bitung (BIT)"
            value="Bitung (BIT)"
            {...getOverrideProps(overrides, "port1option15")}
          ></option>
          <option
            children="Bontang (BXT)"
            value="Bontang (BXT)"
            {...getOverrideProps(overrides, "port1option16")}
          ></option>
          <option
            children="Bourbon (BOUR)"
            value="Bourbon (BOUR)"
            {...getOverrideProps(overrides, "port1option17")}
          ></option>
          <option
            children="Brunei (BRU)"
            value="Brunei (BRU)"
            {...getOverrideProps(overrides, "port1option18")}
          ></option>
          <option
            children="Cai Lan (CLN)"
            value="Cai Lan (CLN)"
            {...getOverrideProps(overrides, "port1option19")}
          ></option>
          <option
            children="Cam Pha (CPH)"
            value="Cam Pha (CPH)"
            {...getOverrideProps(overrides, "port1option20")}
          ></option>
          <option
            children="Can Tho (VCA)"
            value="Can Tho (VCA)"
            {...getOverrideProps(overrides, "port1option21")}
          ></option>
          <option
            children="Cat Lai (CLI)"
            value="Cat Lai (CLI)"
            {...getOverrideProps(overrides, "port1option22")}
          ></option>
          <option
            children="Cayagan de Oro City (Macabalan wharf) (CDO)"
            value="Cayagan de Oro City (Macabalan wharf) (CDO)"
            {...getOverrideProps(overrides, "port1option23")}
          ></option>
          <option
            children="Century Harbour (MHI)"
            value="Century Harbour (MHI)"
            {...getOverrideProps(overrides, "port1option24")}
          ></option>
          <option
            children="Chantaburi LaemSing (CLS)"
            value="Chantaburi LaemSing (CLS)"
            {...getOverrideProps(overrides, "port1option25")}
          ></option>
          <option
            children="Chittagong (CTG)"
            value="Chittagong (CTG)"
            {...getOverrideProps(overrides, "port1option26")}
          ></option>
          <option
            children="Cigading (CIG)"
            value="Cigading (CIG)"
            {...getOverrideProps(overrides, "port1option27")}
          ></option>
          <option
            children="Danang (DAD)"
            value="Danang (DAD)"
            {...getOverrideProps(overrides, "port1option28")}
          ></option>
          <option
            children="Davao (Sasa Wharf) (DVO)"
            value="Davao (Sasa Wharf) (DVO)"
            {...getOverrideProps(overrides, "port1option29")}
          ></option>
          <option
            children="Dhaka (DKA)"
            value="Dhaka (DKA)"
            {...getOverrideProps(overrides, "port1option30")}
          ></option>
          <option
            children="Dumai (DMI)"
            value="Dumai (DMI)"
            {...getOverrideProps(overrides, "port1option31")}
          ></option>
          <option
            children="Dung Quat (DQT)"
            value="Dung Quat (DQT)"
            {...getOverrideProps(overrides, "port1option32")}
          ></option>
          <option
            children="Fangcheng (FAN)"
            value="Fangcheng (FAN)"
            {...getOverrideProps(overrides, "port1option33")}
          ></option>
          <option
            children="Futong (FTG)"
            value="Futong (FTG)"
            {...getOverrideProps(overrides, "port1option34")}
          ></option>
          <option
            children="Godau port  (GDP)"
            value="Godau port  (GDP)"
            {...getOverrideProps(overrides, "port1option35")}
          ></option>
          <option
            children="Haiphong (HPH)"
            value="Haiphong (HPH)"
            {...getOverrideProps(overrides, "port1option36")}
          ></option>
          <option
            children="Halong Bay (HLG)"
            value="Halong Bay (HLG)"
            {...getOverrideProps(overrides, "port1option37")}
          ></option>
          <option
            children="HO CHI MINH (HCM)"
            value="HO CHI MINH (HCM)"
            {...getOverrideProps(overrides, "port1option38")}
          ></option>
          <option
            children="Hon Gai (HON)"
            value="Hon Gai (HON)"
            {...getOverrideProps(overrides, "port1option39")}
          ></option>
          <option
            children="Hong Kong (HKG)"
            value="Hong Kong (HKG)"
            {...getOverrideProps(overrides, "port1option40")}
          ></option>
          <option
            children="Jakarta (JAK)"
            value="Jakarta (JAK)"
            {...getOverrideProps(overrides, "port1option41")}
          ></option>
          <option
            children="Jambi (JBI)"
            value="Jambi (JBI)"
            {...getOverrideProps(overrides, "port1option42")}
          ></option>
          <option
            children="K.K. Kota Kinabalu (KK)"
            value="K.K. Kota Kinabalu (KK)"
            {...getOverrideProps(overrides, "port1option43")}
          ></option>
          <option
            children="Kampot (KMP)"
            value="Kampot (KMP)"
            {...getOverrideProps(overrides, "port1option44")}
          ></option>
          <option
            children="Kantang (KTG)"
            value="Kantang (KTG)"
            {...getOverrideProps(overrides, "port1option45")}
          ></option>
          <option
            children="Kedah (KKH)"
            value="Kedah (KKH)"
            {...getOverrideProps(overrides, "port1option46")}
          ></option>
          <option
            children="Kelantan (KLT)"
            value="Kelantan (KLT)"
            {...getOverrideProps(overrides, "port1option47")}
          ></option>
          <option
            children="Kemaman (KMN)"
            value="Kemaman (KMN)"
            {...getOverrideProps(overrides, "port1option48")}
          ></option>
          <option
            children="Khanom (KHM)"
            value="Khanom (KHM)"
            {...getOverrideProps(overrides, "port1option49")}
          ></option>
          <option
            children="Ko Sichang (KSI)"
            value="Ko Sichang (KSI)"
            {...getOverrideProps(overrides, "port1option50")}
          ></option>
          <option
            children="Kolkata (CCU)"
            value="Kolkata (CCU)"
            {...getOverrideProps(overrides, "port1option51")}
          ></option>
          <option
            children="Kor Samui (KSM)"
            value="Kor Samui (KSM)"
            {...getOverrideProps(overrides, "port1option52")}
          ></option>
          <option
            children="Kuantan (KT)"
            value="Kuantan (KT)"
            {...getOverrideProps(overrides, "port1option53")}
          ></option>
          <option
            children="Kuching (KUC)"
            value="Kuching (KUC)"
            {...getOverrideProps(overrides, "port1option54")}
          ></option>
          <option
            children="Labuan (LBN)"
            value="Labuan (LBN)"
            {...getOverrideProps(overrides, "port1option55")}
          ></option>
          <option
            children="Laem Chabang (LCB)"
            value="Laem Chabang (LCB)"
            {...getOverrideProps(overrides, "port1option56")}
          ></option>
          <option
            children="Lahad Datu (LDU)"
            value="Lahad Datu (LDU)"
            {...getOverrideProps(overrides, "port1option57")}
          ></option>
          <option
            children="Lhokseumawe (LHOK)"
            value="Lhokseumawe (LHOK)"
            {...getOverrideProps(overrides, "port1option58")}
          ></option>
          <option
            children="Lumut (LUM)"
            value="Lumut (LUM)"
            {...getOverrideProps(overrides, "port1option59")}
          ></option>
          <option
            children="Maeklong (Firesun) (MKG)"
            value="Maeklong (Firesun) (MKG)"
            {...getOverrideProps(overrides, "port1option60")}
          ></option>
          <option
            children="Mahachai (MHI)"
            value="Mahachai (MHI)"
            {...getOverrideProps(overrides, "port1option61")}
          ></option>
          <option
            children="Makassar (MAK)"
            value="Makassar (MAK)"
            {...getOverrideProps(overrides, "port1option62")}
          ></option>
          <option
            children="Malacca (MAL)"
            value="Malacca (MAL)"
            {...getOverrideProps(overrides, "port1option63")}
          ></option>
          <option
            children="Manila Habour (MNL)"
            value="Manila Habour (MNL)"
            {...getOverrideProps(overrides, "port1option64")}
          ></option>
          <option
            children="Maptaphut (MAT)"
            value="Maptaphut (MAT)"
            {...getOverrideProps(overrides, "port1option65")}
          ></option>
          <option
            children="Marunda (MRD)"
            value="Marunda (MRD)"
            {...getOverrideProps(overrides, "port1option66")}
          ></option>
          <option
            children="Mawei Fuzhou (FOC)"
            value="Mawei Fuzhou (FOC)"
            {...getOverrideProps(overrides, "port1option67")}
          ></option>
          <option
            children="Muara (MUR)"
            value="Muara (MUR)"
            {...getOverrideProps(overrides, "port1option68")}
          ></option>
          <option
            children="My Tho (MUT)"
            value="My Tho (MUT)"
            {...getOverrideProps(overrides, "port1option69")}
          ></option>
          <option
            children="Nan Tong (NTG)"
            value="Nan Tong (NTG)"
            {...getOverrideProps(overrides, "port1option70")}
          ></option>
          <option
            children="Narathiwat (NAW)"
            value="Narathiwat (NAW)"
            {...getOverrideProps(overrides, "port1option71")}
          ></option>
          <option
            children="Nghi Son (NGH)"
            value="Nghi Son (NGH)"
            {...getOverrideProps(overrides, "port1option72")}
          ></option>
          <option
            children="Ningde (NDE)"
            value="Ningde (NDE)"
            {...getOverrideProps(overrides, "port1option73")}
          ></option>
          <option
            children="Nunukan (NNX)"
            value="Nunukan (NNX)"
            {...getOverrideProps(overrides, "port1option74")}
          ></option>
          <option
            children="Oknha Mong Port (OMP)"
            value="Oknha Mong Port (OMP)"
            {...getOverrideProps(overrides, "port1option75")}
          ></option>
          <option
            children="Onomichi (ONO)"
            value="Onomichi (ONO)"
            {...getOverrideProps(overrides, "port1option76")}
          ></option>
          <option
            children="Padang - Telux Buyur (TBR)"
            value="Padang - Telux Buyur (TBR)"
            {...getOverrideProps(overrides, "port1option77")}
          ></option>
          <option
            children="PAKAN Baru (PKRU)"
            value="PAKAN Baru (PKRU)"
            {...getOverrideProps(overrides, "port1option78")}
          ></option>
          <option
            children="Palembang (PLB)"
            value="Palembang (PLB)"
            {...getOverrideProps(overrides, "port1option79")}
          ></option>
          <option
            children="Panjang (PNJ)"
            value="Panjang (PNJ)"
            {...getOverrideProps(overrides, "port1option80")}
          ></option>
          <option
            children="Pasir Gudang (PAS)"
            value="Pasir Gudang (PAS)"
            {...getOverrideProps(overrides, "port1option81")}
          ></option>
          <option
            children="Patimban (PTB)"
            value="Patimban (PTB)"
            {...getOverrideProps(overrides, "port1option82")}
          ></option>
          <option
            children="Pattani (PTN)"
            value="Pattani (PTN)"
            {...getOverrideProps(overrides, "port1option83")}
          ></option>
          <option
            children="Penang (PNG)"
            value="Penang (PNG)"
            {...getOverrideProps(overrides, "port1option84")}
          ></option>
          <option
            children="Phnom Penh (PNH)"
            value="Phnom Penh (PNH)"
            {...getOverrideProps(overrides, "port1option85")}
          ></option>
          <option
            children="Phra Chulachomklao Fort (PCF)"
            value="Phra Chulachomklao Fort (PCF)"
            {...getOverrideProps(overrides, "port1option86")}
          ></option>
          <option
            children="Phuket (HKT)"
            value="Phuket (HKT)"
            {...getOverrideProps(overrides, "port1option87")}
          ></option>
          <option
            children="Phumy (PHU)"
            value="Phumy (PHU)"
            {...getOverrideProps(overrides, "port1option88")}
          ></option>
          <option
            children="Plathong Oil Rig (PATO)"
            value="Plathong Oil Rig (PATO)"
            {...getOverrideProps(overrides, "port1option89")}
          ></option>
          <option
            children="Pontianak (POT)"
            value="Pontianak (POT)"
            {...getOverrideProps(overrides, "port1option90")}
          ></option>
          <option
            children="Port Klang (PKL)"
            value="Port Klang (PKL)"
            {...getOverrideProps(overrides, "port1option91")}
          ></option>
          <option
            children="Port Moresby (PGPOM)"
            value="Port Moresby (PGPOM)"
            {...getOverrideProps(overrides, "port1option92")}
          ></option>
          <option
            children="Poso (POSO)"
            value="Poso (POSO)"
            {...getOverrideProps(overrides, "port1option93")}
          ></option>
          <option
            children="Pusan (PUS)"
            value="Pusan (PUS)"
            {...getOverrideProps(overrides, "port1option94")}
          ></option>
          <option
            children="Quinzhou (QZH)"
            value="Quinzhou (QZH)"
            {...getOverrideProps(overrides, "port1option95")}
          ></option>
          <option
            children="Quy Nhon (QNN)"
            value="Quy Nhon (QNN)"
            {...getOverrideProps(overrides, "port1option96")}
          ></option>
          <option
            children="Ranong (UNN)"
            value="Ranong (UNN)"
            {...getOverrideProps(overrides, "port1option97")}
          ></option>
          <option
            children="Rayong (IRPC)"
            value="Rayong (IRPC)"
            {...getOverrideProps(overrides, "port1option98")}
          ></option>
          <option
            children="Sampit (SMQ)"
            value="Sampit (SMQ)"
            {...getOverrideProps(overrides, "port1option99")}
          ></option>
          <option
            children="Sandakan (SAN)"
            value="Sandakan (SAN)"
            {...getOverrideProps(overrides, "port1option100")}
          ></option>
          <option
            children="Sarawak (SRW)"
            value="Sarawak (SRW)"
            {...getOverrideProps(overrides, "port1option101")}
          ></option>
          <option
            children="Sarekei (SRK)"
            value="Sarekei (SRK)"
            {...getOverrideProps(overrides, "port1option102")}
          ></option>
          <option
            children="Sattahip (SATP)"
            value="Sattahip (SATP)"
            {...getOverrideProps(overrides, "port1option103")}
          ></option>
          <option
            children="Semarang - Tanjung Emas (SRG)"
            value="Semarang - Tanjung Emas (SRG)"
            {...getOverrideProps(overrides, "port1option104")}
          ></option>
          <option
            children="Semarang (SRG)"
            value="Semarang (SRG)"
            {...getOverrideProps(overrides, "port1option105")}
          ></option>
          <option
            children="Sibu (SIB)"
            value="Sibu (SIB)"
            {...getOverrideProps(overrides, "port1option106")}
          ></option>
          <option
            children="Singapore (SG)"
            value="Singapore (SG)"
            {...getOverrideProps(overrides, "port1option107")}
          ></option>
          <option
            children="Sipitang (SIP)"
            value="Sipitang (SIP)"
            {...getOverrideProps(overrides, "port1option108")}
          ></option>
          <option
            children="Son Duong (SOD)"
            value="Son Duong (SOD)"
            {...getOverrideProps(overrides, "port1option109")}
          ></option>
          <option
            children="Songkhla (SK)"
            value="Songkhla (SK)"
            {...getOverrideProps(overrides, "port1option110")}
          ></option>
          <option
            children="Srihanoville (SIH)"
            value="Srihanoville (SIH)"
            {...getOverrideProps(overrides, "port1option111")}
          ></option>
          <option
            children="Sriracha Harbor (SRC)"
            value="Sriracha Harbor (SRC)"
            {...getOverrideProps(overrides, "port1option112")}
          ></option>
          <option
            children="Sritama Jetty (STM)"
            value="Sritama Jetty (STM)"
            {...getOverrideProps(overrides, "port1option113")}
          ></option>
          <option
            children="Steung Hav (SHV)"
            value="Steung Hav (SHV)"
            {...getOverrideProps(overrides, "port1option114")}
          ></option>
          <option
            children="Sungai Guntung (SGGT)"
            value="Sungai Guntung (SGGT)"
            {...getOverrideProps(overrides, "port1option115")}
          ></option>
          <option
            children="Surabaya (SUBY)"
            value="Surabaya (SUBY)"
            {...getOverrideProps(overrides, "port1option116")}
          ></option>
          <option
            children="Surat Thanee (SRT)"
            value="Surat Thanee (SRT)"
            {...getOverrideProps(overrides, "port1option117")}
          ></option>
          <option
            children="Tacloban (TAC)"
            value="Tacloban (TAC)"
            {...getOverrideProps(overrides, "port1option118")}
          ></option>
          <option
            children="Tagbilaran (TAG)"
            value="Tagbilaran (TAG)"
            {...getOverrideProps(overrides, "port1option119")}
          ></option>
          <option
            children="Tanjong Manis (TGM)"
            value="Tanjong Manis (TGM)"
            {...getOverrideProps(overrides, "port1option120")}
          ></option>
          <option
            children="Tanjung Batu (TJQ)"
            value="Tanjung Batu (TJQ)"
            {...getOverrideProps(overrides, "port1option121")}
          ></option>
          <option
            children="Tanjung Priok (TP)"
            value="Tanjung Priok (TP)"
            {...getOverrideProps(overrides, "port1option122")}
          ></option>
          <option
            children="Tarjun (TAR)"
            value="Tarjun (TAR)"
            {...getOverrideProps(overrides, "port1option123")}
          ></option>
          <option
            children="Tawau (TAW)"
            value="Tawau (TAW)"
            {...getOverrideProps(overrides, "port1option124")}
          ></option>
          <option
            children="Terengganu (TGG)"
            value="Terengganu (TGG)"
            {...getOverrideProps(overrides, "port1option125")}
          ></option>
          <option
            children="Tha Sala (TSL)"
            value="Tha Sala (TSL)"
            {...getOverrideProps(overrides, "port1option126")}
          ></option>
          <option
            children="Tsukumi (TSUM)"
            value="Tsukumi (TSUM)"
            {...getOverrideProps(overrides, "port1option127")}
          ></option>
          <option
            children="Vung Ang (VAG)"
            value="Vung Ang (VAG)"
            {...getOverrideProps(overrides, "port1option128")}
          ></option>
          <option
            children="Vung Tau (VUT)"
            value="Vung Tau (VUT)"
            {...getOverrideProps(overrides, "port1option129")}
          ></option>
          <option
            children="Yangon (RGN)"
            value="Yangon (RGN)"
            {...getOverrideProps(overrides, "port1option130")}
          ></option>
        </SelectField>
        <TextField
          label="Fees"
          type="number"
          step="any"
          value={port1_fees}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                Field4,
                vessel_ht1,
                vessel_hn5,
                vessel_hn7,
                vessel_hn9,
                vessel_hn10,
                vessel_ht20,
                vessel_ht21,
                port1,
                port1_fees: value,
                port1_port_call,
                port1_crane_usage,
                port2,
                port2_fees,
                port2_port_call,
                port2_crane_usage,
                port3,
                port3_fees,
                port3_port_call,
                port3_crane_usage,
                port4,
                port4_fees,
                port4_port_call,
                port4_crane_usage,
                port5,
                port5_fees,
                port6,
                port6_fees,
                cargo1,
                cargo1_quantity,
                cargo1_rate,
                cargo2,
                cargo2_quantity,
                cargo2_rate,
                cargo3,
                cargo3_quantity,
                cargo3_rate,
                cargo4,
                cargo4_quantity,
                cargo4_rate,
                cargo5,
                cargo5_quantity,
                cargo5_rate,
                cargo6,
                cargo6_quantity,
                cargo6_rate,
                bunker_rate,
                diesel_rate,
                lube_rate,
                surveying_fees,
                Field0,
                miscCosts,
                craneUsage,
                portDays,
              };
              const result = onChange(modelFields);
              value = result?.port1_fees ?? value;
            }
            if (errors.port1_fees?.hasError) {
              runValidationTasks("port1_fees", value);
            }
            setPort1_fees(value);
          }}
          onBlur={() => runValidationTasks("port1_fees", port1_fees)}
          errorMessage={errors.port1_fees?.errorMessage}
          hasError={errors.port1_fees?.hasError}
          {...getOverrideProps(overrides, "port1_fees")}
        ></TextField>
      </Grid>
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(2, auto)"
        {...getOverrideProps(overrides, "RowGrid13")}
      >
        <TextField
          label="Port Call Duration (Days)"
          type="number"
          step="any"
          value={port1_port_call}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                Field4,
                vessel_ht1,
                vessel_hn5,
                vessel_hn7,
                vessel_hn9,
                vessel_hn10,
                vessel_ht20,
                vessel_ht21,
                port1,
                port1_fees,
                port1_port_call: value,
                port1_crane_usage,
                port2,
                port2_fees,
                port2_port_call,
                port2_crane_usage,
                port3,
                port3_fees,
                port3_port_call,
                port3_crane_usage,
                port4,
                port4_fees,
                port4_port_call,
                port4_crane_usage,
                port5,
                port5_fees,
                port6,
                port6_fees,
                cargo1,
                cargo1_quantity,
                cargo1_rate,
                cargo2,
                cargo2_quantity,
                cargo2_rate,
                cargo3,
                cargo3_quantity,
                cargo3_rate,
                cargo4,
                cargo4_quantity,
                cargo4_rate,
                cargo5,
                cargo5_quantity,
                cargo5_rate,
                cargo6,
                cargo6_quantity,
                cargo6_rate,
                bunker_rate,
                diesel_rate,
                lube_rate,
                surveying_fees,
                Field0,
                miscCosts,
                craneUsage,
                portDays,
              };
              const result = onChange(modelFields);
              value = result?.port1_port_call ?? value;
            }
            if (errors.port1_port_call?.hasError) {
              runValidationTasks("port1_port_call", value);
            }
            setPort1_port_call(value);
          }}
          onBlur={() => runValidationTasks("port1_port_call", port1_port_call)}
          errorMessage={errors.port1_port_call?.errorMessage}
          hasError={errors.port1_port_call?.hasError}
          {...getOverrideProps(overrides, "port1_port_call")}
        ></TextField>
        <TextField
          label="Crane Usage (Hours)"
          type="number"
          step="any"
          value={port1_crane_usage}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                Field4,
                vessel_ht1,
                vessel_hn5,
                vessel_hn7,
                vessel_hn9,
                vessel_hn10,
                vessel_ht20,
                vessel_ht21,
                port1,
                port1_fees,
                port1_port_call,
                port1_crane_usage: value,
                port2,
                port2_fees,
                port2_port_call,
                port2_crane_usage,
                port3,
                port3_fees,
                port3_port_call,
                port3_crane_usage,
                port4,
                port4_fees,
                port4_port_call,
                port4_crane_usage,
                port5,
                port5_fees,
                port6,
                port6_fees,
                cargo1,
                cargo1_quantity,
                cargo1_rate,
                cargo2,
                cargo2_quantity,
                cargo2_rate,
                cargo3,
                cargo3_quantity,
                cargo3_rate,
                cargo4,
                cargo4_quantity,
                cargo4_rate,
                cargo5,
                cargo5_quantity,
                cargo5_rate,
                cargo6,
                cargo6_quantity,
                cargo6_rate,
                bunker_rate,
                diesel_rate,
                lube_rate,
                surveying_fees,
                Field0,
                miscCosts,
                craneUsage,
                portDays,
              };
              const result = onChange(modelFields);
              value = result?.port1_crane_usage ?? value;
            }
            if (errors.port1_crane_usage?.hasError) {
              runValidationTasks("port1_crane_usage", value);
            }
            setPort1_crane_usage(value);
          }}
          onBlur={() =>
            runValidationTasks("port1_crane_usage", port1_crane_usage)
          }
          errorMessage={errors.port1_crane_usage?.errorMessage}
          hasError={errors.port1_crane_usage?.hasError}
          {...getOverrideProps(overrides, "port1_crane_usage")}
        ></TextField>
      </Grid>
      <Heading
        children="Port 2"
        {...getOverrideProps(overrides, "SectionalElement10")}
      ></Heading>
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(2, auto)"
        {...getOverrideProps(overrides, "RowGrid15")}
      >
        <SelectField
          label="Name"
          placeholder="Please select an option"
          isDisabled={false}
          value={port2}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                Field4,
                vessel_ht1,
                vessel_hn5,
                vessel_hn7,
                vessel_hn9,
                vessel_hn10,
                vessel_ht20,
                vessel_ht21,
                port1,
                port1_fees,
                port1_port_call,
                port1_crane_usage,
                port2: value,
                port2_fees,
                port2_port_call,
                port2_crane_usage,
                port3,
                port3_fees,
                port3_port_call,
                port3_crane_usage,
                port4,
                port4_fees,
                port4_port_call,
                port4_crane_usage,
                port5,
                port5_fees,
                port6,
                port6_fees,
                cargo1,
                cargo1_quantity,
                cargo1_rate,
                cargo2,
                cargo2_quantity,
                cargo2_rate,
                cargo3,
                cargo3_quantity,
                cargo3_rate,
                cargo4,
                cargo4_quantity,
                cargo4_rate,
                cargo5,
                cargo5_quantity,
                cargo5_rate,
                cargo6,
                cargo6_quantity,
                cargo6_rate,
                bunker_rate,
                diesel_rate,
                lube_rate,
                surveying_fees,
                Field0,
                miscCosts,
                craneUsage,
                portDays,
              };
              const result = onChange(modelFields);
              value = result?.port2 ?? value;
            }
            if (errors.port2?.hasError) {
              runValidationTasks("port2", value);
            }
            setPort2(value);
          }}
          onBlur={() => runValidationTasks("port2", port2)}
          errorMessage={errors.port2?.errorMessage}
          hasError={errors.port2?.hasError}
          {...getOverrideProps(overrides, "port2")}
        >
          <option
            children="NIL"
            value="NIL"
            {...getOverrideProps(overrides, "port2option0")}
          ></option>
          <option
            children="Ayutthaya - Bangpain (AB)"
            value="Ayutthaya - Bangpain (AB)"
            {...getOverrideProps(overrides, "port2option1")}
          ></option>
          <option
            children="Ayutthaya - Nakorn Luang (ANL)"
            value="Ayutthaya - Nakorn Luang (ANL)"
            {...getOverrideProps(overrides, "port2option2")}
          ></option>
          <option
            children="Bahodopi (BHDP)"
            value="Bahodopi (BHDP)"
            {...getOverrideProps(overrides, "port2option3")}
          ></option>
          <option
            children="Balikpapan (BPN)"
            value="Balikpapan (BPN)"
            {...getOverrideProps(overrides, "port2option4")}
          ></option>
          <option
            children="Bang Sapan (BS)"
            value="Bang Sapan (BS)"
            {...getOverrideProps(overrides, "port2option5")}
          ></option>
          <option
            children="Bangkok (BK)"
            value="Bangkok (BK)"
            {...getOverrideProps(overrides, "port2option6")}
          ></option>
          <option
            children="Bangpakong (BAK)"
            value="Bangpakong (BAK)"
            {...getOverrideProps(overrides, "port2option7")}
          ></option>
          <option
            children="Banyuwangi - Tanjung Wangi (BJU)"
            value="Banyuwangi - Tanjung Wangi (BJU)"
            {...getOverrideProps(overrides, "port2option8")}
          ></option>
          <option
            children="Batam (BAT)"
            value="Batam (BAT)"
            {...getOverrideProps(overrides, "port2option9")}
          ></option>
          <option
            children="Beihai (BHY)"
            value="Beihai (BHY)"
            {...getOverrideProps(overrides, "port2option10")}
          ></option>
          <option
            children="Belawan (BRW)"
            value="Belawan (BRW)"
            {...getOverrideProps(overrides, "port2option11")}
          ></option>
          <option
            children="Benoa (Bali) (BAO)"
            value="Benoa (Bali) (BAO)"
            {...getOverrideProps(overrides, "port2option12")}
          ></option>
          <option
            children="Bintan (BTN)"
            value="Bintan (BTN)"
            {...getOverrideProps(overrides, "port2option13")}
          ></option>
          <option
            children="Bintulu (BIN)"
            value="Bintulu (BIN)"
            {...getOverrideProps(overrides, "port2option14")}
          ></option>
          <option
            children="Bitung (BIT)"
            value="Bitung (BIT)"
            {...getOverrideProps(overrides, "port2option15")}
          ></option>
          <option
            children="Bontang (BXT)"
            value="Bontang (BXT)"
            {...getOverrideProps(overrides, "port2option16")}
          ></option>
          <option
            children="Bourbon (BOUR)"
            value="Bourbon (BOUR)"
            {...getOverrideProps(overrides, "port2option17")}
          ></option>
          <option
            children="Brunei (BRU)"
            value="Brunei (BRU)"
            {...getOverrideProps(overrides, "port2option18")}
          ></option>
          <option
            children="Cai Lan (CLN)"
            value="Cai Lan (CLN)"
            {...getOverrideProps(overrides, "port2option19")}
          ></option>
          <option
            children="Cam Pha (CPH)"
            value="Cam Pha (CPH)"
            {...getOverrideProps(overrides, "port2option20")}
          ></option>
          <option
            children="Can Tho (VCA)"
            value="Can Tho (VCA)"
            {...getOverrideProps(overrides, "port2option21")}
          ></option>
          <option
            children="Cat Lai (CLI)"
            value="Cat Lai (CLI)"
            {...getOverrideProps(overrides, "port2option22")}
          ></option>
          <option
            children="Cayagan de Oro City (Macabalan wharf) (CDO)"
            value="Cayagan de Oro City (Macabalan wharf) (CDO)"
            {...getOverrideProps(overrides, "port2option23")}
          ></option>
          <option
            children="Century Harbour (MHI)"
            value="Century Harbour (MHI)"
            {...getOverrideProps(overrides, "port2option24")}
          ></option>
          <option
            children="Chantaburi LaemSing (CLS)"
            value="Chantaburi LaemSing (CLS)"
            {...getOverrideProps(overrides, "port2option25")}
          ></option>
          <option
            children="Chittagong (CTG)"
            value="Chittagong (CTG)"
            {...getOverrideProps(overrides, "port2option26")}
          ></option>
          <option
            children="Cigading (CIG)"
            value="Cigading (CIG)"
            {...getOverrideProps(overrides, "port2option27")}
          ></option>
          <option
            children="Danang (DAD)"
            value="Danang (DAD)"
            {...getOverrideProps(overrides, "port2option28")}
          ></option>
          <option
            children="Davao (Sasa Wharf) (DVO)"
            value="Davao (Sasa Wharf) (DVO)"
            {...getOverrideProps(overrides, "port2option29")}
          ></option>
          <option
            children="Dhaka (DKA)"
            value="Dhaka (DKA)"
            {...getOverrideProps(overrides, "port2option30")}
          ></option>
          <option
            children="Dumai (DMI)"
            value="Dumai (DMI)"
            {...getOverrideProps(overrides, "port2option31")}
          ></option>
          <option
            children="Dung Quat (DQT)"
            value="Dung Quat (DQT)"
            {...getOverrideProps(overrides, "port2option32")}
          ></option>
          <option
            children="Fangcheng (FAN)"
            value="Fangcheng (FAN)"
            {...getOverrideProps(overrides, "port2option33")}
          ></option>
          <option
            children="Futong (FTG)"
            value="Futong (FTG)"
            {...getOverrideProps(overrides, "port2option34")}
          ></option>
          <option
            children="Godau port  (GDP)"
            value="Godau port  (GDP)"
            {...getOverrideProps(overrides, "port2option35")}
          ></option>
          <option
            children="Haiphong (HPH)"
            value="Haiphong (HPH)"
            {...getOverrideProps(overrides, "port2option36")}
          ></option>
          <option
            children="Halong Bay (HLG)"
            value="Halong Bay (HLG)"
            {...getOverrideProps(overrides, "port2option37")}
          ></option>
          <option
            children="HO CHI MINH (HCM)"
            value="HO CHI MINH (HCM)"
            {...getOverrideProps(overrides, "port2option38")}
          ></option>
          <option
            children="Hon Gai (HON)"
            value="Hon Gai (HON)"
            {...getOverrideProps(overrides, "port2option39")}
          ></option>
          <option
            children="Hong Kong (HKG)"
            value="Hong Kong (HKG)"
            {...getOverrideProps(overrides, "port2option40")}
          ></option>
          <option
            children="Jakarta (JAK)"
            value="Jakarta (JAK)"
            {...getOverrideProps(overrides, "port2option41")}
          ></option>
          <option
            children="Jambi (JBI)"
            value="Jambi (JBI)"
            {...getOverrideProps(overrides, "port2option42")}
          ></option>
          <option
            children="K.K. Kota Kinabalu (KK)"
            value="K.K. Kota Kinabalu (KK)"
            {...getOverrideProps(overrides, "port2option43")}
          ></option>
          <option
            children="Kampot (KMP)"
            value="Kampot (KMP)"
            {...getOverrideProps(overrides, "port2option44")}
          ></option>
          <option
            children="Kantang (KTG)"
            value="Kantang (KTG)"
            {...getOverrideProps(overrides, "port2option45")}
          ></option>
          <option
            children="Kedah (KKH)"
            value="Kedah (KKH)"
            {...getOverrideProps(overrides, "port2option46")}
          ></option>
          <option
            children="Kelantan (KLT)"
            value="Kelantan (KLT)"
            {...getOverrideProps(overrides, "port2option47")}
          ></option>
          <option
            children="Kemaman (KMN)"
            value="Kemaman (KMN)"
            {...getOverrideProps(overrides, "port2option48")}
          ></option>
          <option
            children="Khanom (KHM)"
            value="Khanom (KHM)"
            {...getOverrideProps(overrides, "port2option49")}
          ></option>
          <option
            children="Ko Sichang (KSI)"
            value="Ko Sichang (KSI)"
            {...getOverrideProps(overrides, "port2option50")}
          ></option>
          <option
            children="Kolkata (CCU)"
            value="Kolkata (CCU)"
            {...getOverrideProps(overrides, "port2option51")}
          ></option>
          <option
            children="Kor Samui (KSM)"
            value="Kor Samui (KSM)"
            {...getOverrideProps(overrides, "port2option52")}
          ></option>
          <option
            children="Kuantan (KT)"
            value="Kuantan (KT)"
            {...getOverrideProps(overrides, "port2option53")}
          ></option>
          <option
            children="Kuching (KUC)"
            value="Kuching (KUC)"
            {...getOverrideProps(overrides, "port2option54")}
          ></option>
          <option
            children="Labuan (LBN)"
            value="Labuan (LBN)"
            {...getOverrideProps(overrides, "port2option55")}
          ></option>
          <option
            children="Laem Chabang (LCB)"
            value="Laem Chabang (LCB)"
            {...getOverrideProps(overrides, "port2option56")}
          ></option>
          <option
            children="Lahad Datu (LDU)"
            value="Lahad Datu (LDU)"
            {...getOverrideProps(overrides, "port2option57")}
          ></option>
          <option
            children="Lhokseumawe (LHOK)"
            value="Lhokseumawe (LHOK)"
            {...getOverrideProps(overrides, "port2option58")}
          ></option>
          <option
            children="Lumut (LUM)"
            value="Lumut (LUM)"
            {...getOverrideProps(overrides, "port2option59")}
          ></option>
          <option
            children="Maeklong (Firesun) (MKG)"
            value="Maeklong (Firesun) (MKG)"
            {...getOverrideProps(overrides, "port2option60")}
          ></option>
          <option
            children="Mahachai (MHI)"
            value="Mahachai (MHI)"
            {...getOverrideProps(overrides, "port2option61")}
          ></option>
          <option
            children="Makassar (MAK)"
            value="Makassar (MAK)"
            {...getOverrideProps(overrides, "port2option62")}
          ></option>
          <option
            children="Malacca (MAL)"
            value="Malacca (MAL)"
            {...getOverrideProps(overrides, "port2option63")}
          ></option>
          <option
            children="Manila Habour (MNL)"
            value="Manila Habour (MNL)"
            {...getOverrideProps(overrides, "port2option64")}
          ></option>
          <option
            children="Maptaphut (MAT)"
            value="Maptaphut (MAT)"
            {...getOverrideProps(overrides, "port2option65")}
          ></option>
          <option
            children="Marunda (MRD)"
            value="Marunda (MRD)"
            {...getOverrideProps(overrides, "port2option66")}
          ></option>
          <option
            children="Mawei Fuzhou (FOC)"
            value="Mawei Fuzhou (FOC)"
            {...getOverrideProps(overrides, "port2option67")}
          ></option>
          <option
            children="Muara (MUR)"
            value="Muara (MUR)"
            {...getOverrideProps(overrides, "port2option68")}
          ></option>
          <option
            children="My Tho (MUT)"
            value="My Tho (MUT)"
            {...getOverrideProps(overrides, "port2option69")}
          ></option>
          <option
            children="Nan Tong (NTG)"
            value="Nan Tong (NTG)"
            {...getOverrideProps(overrides, "port2option70")}
          ></option>
          <option
            children="Narathiwat (NAW)"
            value="Narathiwat (NAW)"
            {...getOverrideProps(overrides, "port2option71")}
          ></option>
          <option
            children="Nghi Son (NGH)"
            value="Nghi Son (NGH)"
            {...getOverrideProps(overrides, "port2option72")}
          ></option>
          <option
            children="Ningde (NDE)"
            value="Ningde (NDE)"
            {...getOverrideProps(overrides, "port2option73")}
          ></option>
          <option
            children="Nunukan (NNX)"
            value="Nunukan (NNX)"
            {...getOverrideProps(overrides, "port2option74")}
          ></option>
          <option
            children="Oknha Mong Port (OMP)"
            value="Oknha Mong Port (OMP)"
            {...getOverrideProps(overrides, "port2option75")}
          ></option>
          <option
            children="Onomichi (ONO)"
            value="Onomichi (ONO)"
            {...getOverrideProps(overrides, "port2option76")}
          ></option>
          <option
            children="Padang - Telux Buyur (TBR)"
            value="Padang - Telux Buyur (TBR)"
            {...getOverrideProps(overrides, "port2option77")}
          ></option>
          <option
            children="PAKAN Baru (PKRU)"
            value="PAKAN Baru (PKRU)"
            {...getOverrideProps(overrides, "port2option78")}
          ></option>
          <option
            children="Palembang (PLB)"
            value="Palembang (PLB)"
            {...getOverrideProps(overrides, "port2option79")}
          ></option>
          <option
            children="Panjang (PNJ)"
            value="Panjang (PNJ)"
            {...getOverrideProps(overrides, "port2option80")}
          ></option>
          <option
            children="Pasir Gudang (PAS)"
            value="Pasir Gudang (PAS)"
            {...getOverrideProps(overrides, "port2option81")}
          ></option>
          <option
            children="Patimban (PTB)"
            value="Patimban (PTB)"
            {...getOverrideProps(overrides, "port2option82")}
          ></option>
          <option
            children="Pattani (PTN)"
            value="Pattani (PTN)"
            {...getOverrideProps(overrides, "port2option83")}
          ></option>
          <option
            children="Penang (PNG)"
            value="Penang (PNG)"
            {...getOverrideProps(overrides, "port2option84")}
          ></option>
          <option
            children="Phnom Penh (PNH)"
            value="Phnom Penh (PNH)"
            {...getOverrideProps(overrides, "port2option85")}
          ></option>
          <option
            children="Phra Chulachomklao Fort (PCF)"
            value="Phra Chulachomklao Fort (PCF)"
            {...getOverrideProps(overrides, "port2option86")}
          ></option>
          <option
            children="Phuket (HKT)"
            value="Phuket (HKT)"
            {...getOverrideProps(overrides, "port2option87")}
          ></option>
          <option
            children="Phumy (PHU)"
            value="Phumy (PHU)"
            {...getOverrideProps(overrides, "port2option88")}
          ></option>
          <option
            children="Plathong Oil Rig (PATO)"
            value="Plathong Oil Rig (PATO)"
            {...getOverrideProps(overrides, "port2option89")}
          ></option>
          <option
            children="Pontianak (POT)"
            value="Pontianak (POT)"
            {...getOverrideProps(overrides, "port2option90")}
          ></option>
          <option
            children="Port Klang (PKL)"
            value="Port Klang (PKL)"
            {...getOverrideProps(overrides, "port2option91")}
          ></option>
          <option
            children="Port Moresby (PGPOM)"
            value="Port Moresby (PGPOM)"
            {...getOverrideProps(overrides, "port2option92")}
          ></option>
          <option
            children="Poso (POSO)"
            value="Poso (POSO)"
            {...getOverrideProps(overrides, "port2option93")}
          ></option>
          <option
            children="Pusan (PUS)"
            value="Pusan (PUS)"
            {...getOverrideProps(overrides, "port2option94")}
          ></option>
          <option
            children="Quinzhou (QZH)"
            value="Quinzhou (QZH)"
            {...getOverrideProps(overrides, "port2option95")}
          ></option>
          <option
            children="Quy Nhon (QNN)"
            value="Quy Nhon (QNN)"
            {...getOverrideProps(overrides, "port2option96")}
          ></option>
          <option
            children="Ranong (UNN)"
            value="Ranong (UNN)"
            {...getOverrideProps(overrides, "port2option97")}
          ></option>
          <option
            children="Rayong (IRPC)"
            value="Rayong (IRPC)"
            {...getOverrideProps(overrides, "port2option98")}
          ></option>
          <option
            children="Sampit (SMQ)"
            value="Sampit (SMQ)"
            {...getOverrideProps(overrides, "port2option99")}
          ></option>
          <option
            children="Sandakan (SAN)"
            value="Sandakan (SAN)"
            {...getOverrideProps(overrides, "port2option100")}
          ></option>
          <option
            children="Sarawak (SRW)"
            value="Sarawak (SRW)"
            {...getOverrideProps(overrides, "port2option101")}
          ></option>
          <option
            children="Sarekei (SRK)"
            value="Sarekei (SRK)"
            {...getOverrideProps(overrides, "port2option102")}
          ></option>
          <option
            children="Sattahip (SATP)"
            value="Sattahip (SATP)"
            {...getOverrideProps(overrides, "port2option103")}
          ></option>
          <option
            children="Semarang - Tanjung Emas (SRG)"
            value="Semarang - Tanjung Emas (SRG)"
            {...getOverrideProps(overrides, "port2option104")}
          ></option>
          <option
            children="Semarang (SRG)"
            value="Semarang (SRG)"
            {...getOverrideProps(overrides, "port2option105")}
          ></option>
          <option
            children="Sibu (SIB)"
            value="Sibu (SIB)"
            {...getOverrideProps(overrides, "port2option106")}
          ></option>
          <option
            children="Singapore (SG)"
            value="Singapore (SG)"
            {...getOverrideProps(overrides, "port2option107")}
          ></option>
          <option
            children="Sipitang (SIP)"
            value="Sipitang (SIP)"
            {...getOverrideProps(overrides, "port2option108")}
          ></option>
          <option
            children="Son Duong (SOD)"
            value="Son Duong (SOD)"
            {...getOverrideProps(overrides, "port2option109")}
          ></option>
          <option
            children="Songkhla (SK)"
            value="Songkhla (SK)"
            {...getOverrideProps(overrides, "port2option110")}
          ></option>
          <option
            children="Srihanoville (SIH)"
            value="Srihanoville (SIH)"
            {...getOverrideProps(overrides, "port2option111")}
          ></option>
          <option
            children="Sriracha Harbor (SRC)"
            value="Sriracha Harbor (SRC)"
            {...getOverrideProps(overrides, "port2option112")}
          ></option>
          <option
            children="Sritama Jetty (STM)"
            value="Sritama Jetty (STM)"
            {...getOverrideProps(overrides, "port2option113")}
          ></option>
          <option
            children="Steung Hav (SHV)"
            value="Steung Hav (SHV)"
            {...getOverrideProps(overrides, "port2option114")}
          ></option>
          <option
            children="Sungai Guntung (SGGT)"
            value="Sungai Guntung (SGGT)"
            {...getOverrideProps(overrides, "port2option115")}
          ></option>
          <option
            children="Surabaya (SUBY)"
            value="Surabaya (SUBY)"
            {...getOverrideProps(overrides, "port2option116")}
          ></option>
          <option
            children="Surat Thanee (SRT)"
            value="Surat Thanee (SRT)"
            {...getOverrideProps(overrides, "port2option117")}
          ></option>
          <option
            children="Tacloban (TAC)"
            value="Tacloban (TAC)"
            {...getOverrideProps(overrides, "port2option118")}
          ></option>
          <option
            children="Tagbilaran (TAG)"
            value="Tagbilaran (TAG)"
            {...getOverrideProps(overrides, "port2option119")}
          ></option>
          <option
            children="Tanjong Manis (TGM)"
            value="Tanjong Manis (TGM)"
            {...getOverrideProps(overrides, "port2option120")}
          ></option>
          <option
            children="Tanjung Batu (TJQ)"
            value="Tanjung Batu (TJQ)"
            {...getOverrideProps(overrides, "port2option121")}
          ></option>
          <option
            children="Tanjung Priok (TP)"
            value="Tanjung Priok (TP)"
            {...getOverrideProps(overrides, "port2option122")}
          ></option>
          <option
            children="Tarjun (TAR)"
            value="Tarjun (TAR)"
            {...getOverrideProps(overrides, "port2option123")}
          ></option>
          <option
            children="Tawau (TAW)"
            value="Tawau (TAW)"
            {...getOverrideProps(overrides, "port2option124")}
          ></option>
          <option
            children="Terengganu (TGG)"
            value="Terengganu (TGG)"
            {...getOverrideProps(overrides, "port2option125")}
          ></option>
          <option
            children="Tha Sala (TSL)"
            value="Tha Sala (TSL)"
            {...getOverrideProps(overrides, "port2option126")}
          ></option>
          <option
            children="Tsukumi (TSUM)"
            value="Tsukumi (TSUM)"
            {...getOverrideProps(overrides, "port2option127")}
          ></option>
          <option
            children="Vung Ang (VAG)"
            value="Vung Ang (VAG)"
            {...getOverrideProps(overrides, "port2option128")}
          ></option>
          <option
            children="Vung Tau (VUT)"
            value="Vung Tau (VUT)"
            {...getOverrideProps(overrides, "port2option129")}
          ></option>
          <option
            children="Yangon (RGN)"
            value="Yangon (RGN)"
            {...getOverrideProps(overrides, "port2option130")}
          ></option>
        </SelectField>
        <TextField
          label="Fees"
          type="number"
          step="any"
          value={port2_fees}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                Field4,
                vessel_ht1,
                vessel_hn5,
                vessel_hn7,
                vessel_hn9,
                vessel_hn10,
                vessel_ht20,
                vessel_ht21,
                port1,
                port1_fees,
                port1_port_call,
                port1_crane_usage,
                port2,
                port2_fees: value,
                port2_port_call,
                port2_crane_usage,
                port3,
                port3_fees,
                port3_port_call,
                port3_crane_usage,
                port4,
                port4_fees,
                port4_port_call,
                port4_crane_usage,
                port5,
                port5_fees,
                port6,
                port6_fees,
                cargo1,
                cargo1_quantity,
                cargo1_rate,
                cargo2,
                cargo2_quantity,
                cargo2_rate,
                cargo3,
                cargo3_quantity,
                cargo3_rate,
                cargo4,
                cargo4_quantity,
                cargo4_rate,
                cargo5,
                cargo5_quantity,
                cargo5_rate,
                cargo6,
                cargo6_quantity,
                cargo6_rate,
                bunker_rate,
                diesel_rate,
                lube_rate,
                surveying_fees,
                Field0,
                miscCosts,
                craneUsage,
                portDays,
              };
              const result = onChange(modelFields);
              value = result?.port2_fees ?? value;
            }
            if (errors.port2_fees?.hasError) {
              runValidationTasks("port2_fees", value);
            }
            setPort2_fees(value);
          }}
          onBlur={() => runValidationTasks("port2_fees", port2_fees)}
          errorMessage={errors.port2_fees?.errorMessage}
          hasError={errors.port2_fees?.hasError}
          {...getOverrideProps(overrides, "port2_fees")}
        ></TextField>
      </Grid>
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(2, auto)"
        {...getOverrideProps(overrides, "RowGrid16")}
      >
        <TextField
          label="Port Call Duration (Days)"
          type="number"
          step="any"
          value={port2_port_call}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                Field4,
                vessel_ht1,
                vessel_hn5,
                vessel_hn7,
                vessel_hn9,
                vessel_hn10,
                vessel_ht20,
                vessel_ht21,
                port1,
                port1_fees,
                port1_port_call,
                port1_crane_usage,
                port2,
                port2_fees,
                port2_port_call: value,
                port2_crane_usage,
                port3,
                port3_fees,
                port3_port_call,
                port3_crane_usage,
                port4,
                port4_fees,
                port4_port_call,
                port4_crane_usage,
                port5,
                port5_fees,
                port6,
                port6_fees,
                cargo1,
                cargo1_quantity,
                cargo1_rate,
                cargo2,
                cargo2_quantity,
                cargo2_rate,
                cargo3,
                cargo3_quantity,
                cargo3_rate,
                cargo4,
                cargo4_quantity,
                cargo4_rate,
                cargo5,
                cargo5_quantity,
                cargo5_rate,
                cargo6,
                cargo6_quantity,
                cargo6_rate,
                bunker_rate,
                diesel_rate,
                lube_rate,
                surveying_fees,
                Field0,
                miscCosts,
                craneUsage,
                portDays,
              };
              const result = onChange(modelFields);
              value = result?.port2_port_call ?? value;
            }
            if (errors.port2_port_call?.hasError) {
              runValidationTasks("port2_port_call", value);
            }
            setPort2_port_call(value);
          }}
          onBlur={() => runValidationTasks("port2_port_call", port2_port_call)}
          errorMessage={errors.port2_port_call?.errorMessage}
          hasError={errors.port2_port_call?.hasError}
          {...getOverrideProps(overrides, "port2_port_call")}
        ></TextField>
        <TextField
          label="Crane Usage (Hours)"
          type="number"
          step="any"
          value={port2_crane_usage}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                Field4,
                vessel_ht1,
                vessel_hn5,
                vessel_hn7,
                vessel_hn9,
                vessel_hn10,
                vessel_ht20,
                vessel_ht21,
                port1,
                port1_fees,
                port1_port_call,
                port1_crane_usage,
                port2,
                port2_fees,
                port2_port_call,
                port2_crane_usage: value,
                port3,
                port3_fees,
                port3_port_call,
                port3_crane_usage,
                port4,
                port4_fees,
                port4_port_call,
                port4_crane_usage,
                port5,
                port5_fees,
                port6,
                port6_fees,
                cargo1,
                cargo1_quantity,
                cargo1_rate,
                cargo2,
                cargo2_quantity,
                cargo2_rate,
                cargo3,
                cargo3_quantity,
                cargo3_rate,
                cargo4,
                cargo4_quantity,
                cargo4_rate,
                cargo5,
                cargo5_quantity,
                cargo5_rate,
                cargo6,
                cargo6_quantity,
                cargo6_rate,
                bunker_rate,
                diesel_rate,
                lube_rate,
                surveying_fees,
                Field0,
                miscCosts,
                craneUsage,
                portDays,
              };
              const result = onChange(modelFields);
              value = result?.port2_crane_usage ?? value;
            }
            if (errors.port2_crane_usage?.hasError) {
              runValidationTasks("port2_crane_usage", value);
            }
            setPort2_crane_usage(value);
          }}
          onBlur={() =>
            runValidationTasks("port2_crane_usage", port2_crane_usage)
          }
          errorMessage={errors.port2_crane_usage?.errorMessage}
          hasError={errors.port2_crane_usage?.hasError}
          {...getOverrideProps(overrides, "port2_crane_usage")}
        ></TextField>
      </Grid>
      <Heading
        children="Port 3"
        {...getOverrideProps(overrides, "SectionalElement11")}
      ></Heading>
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(2, auto)"
        {...getOverrideProps(overrides, "RowGrid18")}
      >
        <SelectField
          label="Name"
          placeholder="Please select an option"
          isDisabled={false}
          value={port3}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                Field4,
                vessel_ht1,
                vessel_hn5,
                vessel_hn7,
                vessel_hn9,
                vessel_hn10,
                vessel_ht20,
                vessel_ht21,
                port1,
                port1_fees,
                port1_port_call,
                port1_crane_usage,
                port2,
                port2_fees,
                port2_port_call,
                port2_crane_usage,
                port3: value,
                port3_fees,
                port3_port_call,
                port3_crane_usage,
                port4,
                port4_fees,
                port4_port_call,
                port4_crane_usage,
                port5,
                port5_fees,
                port6,
                port6_fees,
                cargo1,
                cargo1_quantity,
                cargo1_rate,
                cargo2,
                cargo2_quantity,
                cargo2_rate,
                cargo3,
                cargo3_quantity,
                cargo3_rate,
                cargo4,
                cargo4_quantity,
                cargo4_rate,
                cargo5,
                cargo5_quantity,
                cargo5_rate,
                cargo6,
                cargo6_quantity,
                cargo6_rate,
                bunker_rate,
                diesel_rate,
                lube_rate,
                surveying_fees,
                Field0,
                miscCosts,
                craneUsage,
                portDays,
              };
              const result = onChange(modelFields);
              value = result?.port3 ?? value;
            }
            if (errors.port3?.hasError) {
              runValidationTasks("port3", value);
            }
            setPort3(value);
          }}
          onBlur={() => runValidationTasks("port3", port3)}
          errorMessage={errors.port3?.errorMessage}
          hasError={errors.port3?.hasError}
          {...getOverrideProps(overrides, "port3")}
        >
          <option
            children="NIL"
            value="NIL"
            {...getOverrideProps(overrides, "port3option0")}
          ></option>
          <option
            children="Ayutthaya - Bangpain (AB)"
            value="Ayutthaya - Bangpain (AB)"
            {...getOverrideProps(overrides, "port3option1")}
          ></option>
          <option
            children="Ayutthaya - Nakorn Luang (ANL)"
            value="Ayutthaya - Nakorn Luang (ANL)"
            {...getOverrideProps(overrides, "port3option2")}
          ></option>
          <option
            children="Bahodopi (BHDP)"
            value="Bahodopi (BHDP)"
            {...getOverrideProps(overrides, "port3option3")}
          ></option>
          <option
            children="Balikpapan (BPN)"
            value="Balikpapan (BPN)"
            {...getOverrideProps(overrides, "port3option4")}
          ></option>
          <option
            children="Bang Sapan (BS)"
            value="Bang Sapan (BS)"
            {...getOverrideProps(overrides, "port3option5")}
          ></option>
          <option
            children="Bangkok (BK)"
            value="Bangkok (BK)"
            {...getOverrideProps(overrides, "port3option6")}
          ></option>
          <option
            children="Bangpakong (BAK)"
            value="Bangpakong (BAK)"
            {...getOverrideProps(overrides, "port3option7")}
          ></option>
          <option
            children="Banyuwangi - Tanjung Wangi (BJU)"
            value="Banyuwangi - Tanjung Wangi (BJU)"
            {...getOverrideProps(overrides, "port3option8")}
          ></option>
          <option
            children="Batam (BAT)"
            value="Batam (BAT)"
            {...getOverrideProps(overrides, "port3option9")}
          ></option>
          <option
            children="Beihai (BHY)"
            value="Beihai (BHY)"
            {...getOverrideProps(overrides, "port3option10")}
          ></option>
          <option
            children="Belawan (BRW)"
            value="Belawan (BRW)"
            {...getOverrideProps(overrides, "port3option11")}
          ></option>
          <option
            children="Benoa (Bali) (BAO)"
            value="Benoa (Bali) (BAO)"
            {...getOverrideProps(overrides, "port3option12")}
          ></option>
          <option
            children="Bintan (BTN)"
            value="Bintan (BTN)"
            {...getOverrideProps(overrides, "port3option13")}
          ></option>
          <option
            children="Bintulu (BIN)"
            value="Bintulu (BIN)"
            {...getOverrideProps(overrides, "port3option14")}
          ></option>
          <option
            children="Bitung (BIT)"
            value="Bitung (BIT)"
            {...getOverrideProps(overrides, "port3option15")}
          ></option>
          <option
            children="Bontang (BXT)"
            value="Bontang (BXT)"
            {...getOverrideProps(overrides, "port3option16")}
          ></option>
          <option
            children="Bourbon (BOUR)"
            value="Bourbon (BOUR)"
            {...getOverrideProps(overrides, "port3option17")}
          ></option>
          <option
            children="Brunei (BRU)"
            value="Brunei (BRU)"
            {...getOverrideProps(overrides, "port3option18")}
          ></option>
          <option
            children="Cai Lan (CLN)"
            value="Cai Lan (CLN)"
            {...getOverrideProps(overrides, "port3option19")}
          ></option>
          <option
            children="Cam Pha (CPH)"
            value="Cam Pha (CPH)"
            {...getOverrideProps(overrides, "port3option20")}
          ></option>
          <option
            children="Can Tho (VCA)"
            value="Can Tho (VCA)"
            {...getOverrideProps(overrides, "port3option21")}
          ></option>
          <option
            children="Cat Lai (CLI)"
            value="Cat Lai (CLI)"
            {...getOverrideProps(overrides, "port3option22")}
          ></option>
          <option
            children="Cayagan de Oro City (Macabalan wharf) (CDO)"
            value="Cayagan de Oro City (Macabalan wharf) (CDO)"
            {...getOverrideProps(overrides, "port3option23")}
          ></option>
          <option
            children="Century Harbour (MHI)"
            value="Century Harbour (MHI)"
            {...getOverrideProps(overrides, "port3option24")}
          ></option>
          <option
            children="Chantaburi LaemSing (CLS)"
            value="Chantaburi LaemSing (CLS)"
            {...getOverrideProps(overrides, "port3option25")}
          ></option>
          <option
            children="Chittagong (CTG)"
            value="Chittagong (CTG)"
            {...getOverrideProps(overrides, "port3option26")}
          ></option>
          <option
            children="Cigading (CIG)"
            value="Cigading (CIG)"
            {...getOverrideProps(overrides, "port3option27")}
          ></option>
          <option
            children="Danang (DAD)"
            value="Danang (DAD)"
            {...getOverrideProps(overrides, "port3option28")}
          ></option>
          <option
            children="Davao (Sasa Wharf) (DVO)"
            value="Davao (Sasa Wharf) (DVO)"
            {...getOverrideProps(overrides, "port3option29")}
          ></option>
          <option
            children="Dhaka (DKA)"
            value="Dhaka (DKA)"
            {...getOverrideProps(overrides, "port3option30")}
          ></option>
          <option
            children="Dumai (DMI)"
            value="Dumai (DMI)"
            {...getOverrideProps(overrides, "port3option31")}
          ></option>
          <option
            children="Dung Quat (DQT)"
            value="Dung Quat (DQT)"
            {...getOverrideProps(overrides, "port3option32")}
          ></option>
          <option
            children="Fangcheng (FAN)"
            value="Fangcheng (FAN)"
            {...getOverrideProps(overrides, "port3option33")}
          ></option>
          <option
            children="Futong (FTG)"
            value="Futong (FTG)"
            {...getOverrideProps(overrides, "port3option34")}
          ></option>
          <option
            children="Godau port  (GDP)"
            value="Godau port  (GDP)"
            {...getOverrideProps(overrides, "port3option35")}
          ></option>
          <option
            children="Haiphong (HPH)"
            value="Haiphong (HPH)"
            {...getOverrideProps(overrides, "port3option36")}
          ></option>
          <option
            children="Halong Bay (HLG)"
            value="Halong Bay (HLG)"
            {...getOverrideProps(overrides, "port3option37")}
          ></option>
          <option
            children="HO CHI MINH (HCM)"
            value="HO CHI MINH (HCM)"
            {...getOverrideProps(overrides, "port3option38")}
          ></option>
          <option
            children="Hon Gai (HON)"
            value="Hon Gai (HON)"
            {...getOverrideProps(overrides, "port3option39")}
          ></option>
          <option
            children="Hong Kong (HKG)"
            value="Hong Kong (HKG)"
            {...getOverrideProps(overrides, "port3option40")}
          ></option>
          <option
            children="Jakarta (JAK)"
            value="Jakarta (JAK)"
            {...getOverrideProps(overrides, "port3option41")}
          ></option>
          <option
            children="Jambi (JBI)"
            value="Jambi (JBI)"
            {...getOverrideProps(overrides, "port3option42")}
          ></option>
          <option
            children="K.K. Kota Kinabalu (KK)"
            value="K.K. Kota Kinabalu (KK)"
            {...getOverrideProps(overrides, "port3option43")}
          ></option>
          <option
            children="Kampot (KMP)"
            value="Kampot (KMP)"
            {...getOverrideProps(overrides, "port3option44")}
          ></option>
          <option
            children="Kantang (KTG)"
            value="Kantang (KTG)"
            {...getOverrideProps(overrides, "port3option45")}
          ></option>
          <option
            children="Kedah (KKH)"
            value="Kedah (KKH)"
            {...getOverrideProps(overrides, "port3option46")}
          ></option>
          <option
            children="Kelantan (KLT)"
            value="Kelantan (KLT)"
            {...getOverrideProps(overrides, "port3option47")}
          ></option>
          <option
            children="Kemaman (KMN)"
            value="Kemaman (KMN)"
            {...getOverrideProps(overrides, "port3option48")}
          ></option>
          <option
            children="Khanom (KHM)"
            value="Khanom (KHM)"
            {...getOverrideProps(overrides, "port3option49")}
          ></option>
          <option
            children="Ko Sichang (KSI)"
            value="Ko Sichang (KSI)"
            {...getOverrideProps(overrides, "port3option50")}
          ></option>
          <option
            children="Kolkata (CCU)"
            value="Kolkata (CCU)"
            {...getOverrideProps(overrides, "port3option51")}
          ></option>
          <option
            children="Kor Samui (KSM)"
            value="Kor Samui (KSM)"
            {...getOverrideProps(overrides, "port3option52")}
          ></option>
          <option
            children="Kuantan (KT)"
            value="Kuantan (KT)"
            {...getOverrideProps(overrides, "port3option53")}
          ></option>
          <option
            children="Kuching (KUC)"
            value="Kuching (KUC)"
            {...getOverrideProps(overrides, "port3option54")}
          ></option>
          <option
            children="Labuan (LBN)"
            value="Labuan (LBN)"
            {...getOverrideProps(overrides, "port3option55")}
          ></option>
          <option
            children="Laem Chabang (LCB)"
            value="Laem Chabang (LCB)"
            {...getOverrideProps(overrides, "port3option56")}
          ></option>
          <option
            children="Lahad Datu (LDU)"
            value="Lahad Datu (LDU)"
            {...getOverrideProps(overrides, "port3option57")}
          ></option>
          <option
            children="Lhokseumawe (LHOK)"
            value="Lhokseumawe (LHOK)"
            {...getOverrideProps(overrides, "port3option58")}
          ></option>
          <option
            children="Lumut (LUM)"
            value="Lumut (LUM)"
            {...getOverrideProps(overrides, "port3option59")}
          ></option>
          <option
            children="Maeklong (Firesun) (MKG)"
            value="Maeklong (Firesun) (MKG)"
            {...getOverrideProps(overrides, "port3option60")}
          ></option>
          <option
            children="Mahachai (MHI)"
            value="Mahachai (MHI)"
            {...getOverrideProps(overrides, "port3option61")}
          ></option>
          <option
            children="Makassar (MAK)"
            value="Makassar (MAK)"
            {...getOverrideProps(overrides, "port3option62")}
          ></option>
          <option
            children="Malacca (MAL)"
            value="Malacca (MAL)"
            {...getOverrideProps(overrides, "port3option63")}
          ></option>
          <option
            children="Manila Habour (MNL)"
            value="Manila Habour (MNL)"
            {...getOverrideProps(overrides, "port3option64")}
          ></option>
          <option
            children="Maptaphut (MAT)"
            value="Maptaphut (MAT)"
            {...getOverrideProps(overrides, "port3option65")}
          ></option>
          <option
            children="Marunda (MRD)"
            value="Marunda (MRD)"
            {...getOverrideProps(overrides, "port3option66")}
          ></option>
          <option
            children="Mawei Fuzhou (FOC)"
            value="Mawei Fuzhou (FOC)"
            {...getOverrideProps(overrides, "port3option67")}
          ></option>
          <option
            children="Muara (MUR)"
            value="Muara (MUR)"
            {...getOverrideProps(overrides, "port3option68")}
          ></option>
          <option
            children="My Tho (MUT)"
            value="My Tho (MUT)"
            {...getOverrideProps(overrides, "port3option69")}
          ></option>
          <option
            children="Nan Tong (NTG)"
            value="Nan Tong (NTG)"
            {...getOverrideProps(overrides, "port3option70")}
          ></option>
          <option
            children="Narathiwat (NAW)"
            value="Narathiwat (NAW)"
            {...getOverrideProps(overrides, "port3option71")}
          ></option>
          <option
            children="Nghi Son (NGH)"
            value="Nghi Son (NGH)"
            {...getOverrideProps(overrides, "port3option72")}
          ></option>
          <option
            children="Ningde (NDE)"
            value="Ningde (NDE)"
            {...getOverrideProps(overrides, "port3option73")}
          ></option>
          <option
            children="Nunukan (NNX)"
            value="Nunukan (NNX)"
            {...getOverrideProps(overrides, "port3option74")}
          ></option>
          <option
            children="Oknha Mong Port (OMP)"
            value="Oknha Mong Port (OMP)"
            {...getOverrideProps(overrides, "port3option75")}
          ></option>
          <option
            children="Onomichi (ONO)"
            value="Onomichi (ONO)"
            {...getOverrideProps(overrides, "port3option76")}
          ></option>
          <option
            children="Padang - Telux Buyur (TBR)"
            value="Padang - Telux Buyur (TBR)"
            {...getOverrideProps(overrides, "port3option77")}
          ></option>
          <option
            children="PAKAN Baru (PKRU)"
            value="PAKAN Baru (PKRU)"
            {...getOverrideProps(overrides, "port3option78")}
          ></option>
          <option
            children="Palembang (PLB)"
            value="Palembang (PLB)"
            {...getOverrideProps(overrides, "port3option79")}
          ></option>
          <option
            children="Panjang (PNJ)"
            value="Panjang (PNJ)"
            {...getOverrideProps(overrides, "port3option80")}
          ></option>
          <option
            children="Pasir Gudang (PAS)"
            value="Pasir Gudang (PAS)"
            {...getOverrideProps(overrides, "port3option81")}
          ></option>
          <option
            children="Patimban (PTB)"
            value="Patimban (PTB)"
            {...getOverrideProps(overrides, "port3option82")}
          ></option>
          <option
            children="Pattani (PTN)"
            value="Pattani (PTN)"
            {...getOverrideProps(overrides, "port3option83")}
          ></option>
          <option
            children="Penang (PNG)"
            value="Penang (PNG)"
            {...getOverrideProps(overrides, "port3option84")}
          ></option>
          <option
            children="Phnom Penh (PNH)"
            value="Phnom Penh (PNH)"
            {...getOverrideProps(overrides, "port3option85")}
          ></option>
          <option
            children="Phra Chulachomklao Fort (PCF)"
            value="Phra Chulachomklao Fort (PCF)"
            {...getOverrideProps(overrides, "port3option86")}
          ></option>
          <option
            children="Phuket (HKT)"
            value="Phuket (HKT)"
            {...getOverrideProps(overrides, "port3option87")}
          ></option>
          <option
            children="Phumy (PHU)"
            value="Phumy (PHU)"
            {...getOverrideProps(overrides, "port3option88")}
          ></option>
          <option
            children="Plathong Oil Rig (PATO)"
            value="Plathong Oil Rig (PATO)"
            {...getOverrideProps(overrides, "port3option89")}
          ></option>
          <option
            children="Pontianak (POT)"
            value="Pontianak (POT)"
            {...getOverrideProps(overrides, "port3option90")}
          ></option>
          <option
            children="Port Klang (PKL)"
            value="Port Klang (PKL)"
            {...getOverrideProps(overrides, "port3option91")}
          ></option>
          <option
            children="Port Moresby (PGPOM)"
            value="Port Moresby (PGPOM)"
            {...getOverrideProps(overrides, "port3option92")}
          ></option>
          <option
            children="Poso (POSO)"
            value="Poso (POSO)"
            {...getOverrideProps(overrides, "port3option93")}
          ></option>
          <option
            children="Pusan (PUS)"
            value="Pusan (PUS)"
            {...getOverrideProps(overrides, "port3option94")}
          ></option>
          <option
            children="Quinzhou (QZH)"
            value="Quinzhou (QZH)"
            {...getOverrideProps(overrides, "port3option95")}
          ></option>
          <option
            children="Quy Nhon (QNN)"
            value="Quy Nhon (QNN)"
            {...getOverrideProps(overrides, "port3option96")}
          ></option>
          <option
            children="Ranong (UNN)"
            value="Ranong (UNN)"
            {...getOverrideProps(overrides, "port3option97")}
          ></option>
          <option
            children="Rayong (IRPC)"
            value="Rayong (IRPC)"
            {...getOverrideProps(overrides, "port3option98")}
          ></option>
          <option
            children="Sampit (SMQ)"
            value="Sampit (SMQ)"
            {...getOverrideProps(overrides, "port3option99")}
          ></option>
          <option
            children="Sandakan (SAN)"
            value="Sandakan (SAN)"
            {...getOverrideProps(overrides, "port3option100")}
          ></option>
          <option
            children="Sarawak (SRW)"
            value="Sarawak (SRW)"
            {...getOverrideProps(overrides, "port3option101")}
          ></option>
          <option
            children="Sarekei (SRK)"
            value="Sarekei (SRK)"
            {...getOverrideProps(overrides, "port3option102")}
          ></option>
          <option
            children="Sattahip (SATP)"
            value="Sattahip (SATP)"
            {...getOverrideProps(overrides, "port3option103")}
          ></option>
          <option
            children="Semarang - Tanjung Emas (SRG)"
            value="Semarang - Tanjung Emas (SRG)"
            {...getOverrideProps(overrides, "port3option104")}
          ></option>
          <option
            children="Semarang (SRG)"
            value="Semarang (SRG)"
            {...getOverrideProps(overrides, "port3option105")}
          ></option>
          <option
            children="Sibu (SIB)"
            value="Sibu (SIB)"
            {...getOverrideProps(overrides, "port3option106")}
          ></option>
          <option
            children="Singapore (SG)"
            value="Singapore (SG)"
            {...getOverrideProps(overrides, "port3option107")}
          ></option>
          <option
            children="Sipitang (SIP)"
            value="Sipitang (SIP)"
            {...getOverrideProps(overrides, "port3option108")}
          ></option>
          <option
            children="Son Duong (SOD)"
            value="Son Duong (SOD)"
            {...getOverrideProps(overrides, "port3option109")}
          ></option>
          <option
            children="Songkhla (SK)"
            value="Songkhla (SK)"
            {...getOverrideProps(overrides, "port3option110")}
          ></option>
          <option
            children="Srihanoville (SIH)"
            value="Srihanoville (SIH)"
            {...getOverrideProps(overrides, "port3option111")}
          ></option>
          <option
            children="Sriracha Harbor (SRC)"
            value="Sriracha Harbor (SRC)"
            {...getOverrideProps(overrides, "port3option112")}
          ></option>
          <option
            children="Sritama Jetty (STM)"
            value="Sritama Jetty (STM)"
            {...getOverrideProps(overrides, "port3option113")}
          ></option>
          <option
            children="Steung Hav (SHV)"
            value="Steung Hav (SHV)"
            {...getOverrideProps(overrides, "port3option114")}
          ></option>
          <option
            children="Sungai Guntung (SGGT)"
            value="Sungai Guntung (SGGT)"
            {...getOverrideProps(overrides, "port3option115")}
          ></option>
          <option
            children="Surabaya (SUBY)"
            value="Surabaya (SUBY)"
            {...getOverrideProps(overrides, "port3option116")}
          ></option>
          <option
            children="Surat Thanee (SRT)"
            value="Surat Thanee (SRT)"
            {...getOverrideProps(overrides, "port3option117")}
          ></option>
          <option
            children="Tacloban (TAC)"
            value="Tacloban (TAC)"
            {...getOverrideProps(overrides, "port3option118")}
          ></option>
          <option
            children="Tagbilaran (TAG)"
            value="Tagbilaran (TAG)"
            {...getOverrideProps(overrides, "port3option119")}
          ></option>
          <option
            children="Tanjong Manis (TGM)"
            value="Tanjong Manis (TGM)"
            {...getOverrideProps(overrides, "port3option120")}
          ></option>
          <option
            children="Tanjung Batu (TJQ)"
            value="Tanjung Batu (TJQ)"
            {...getOverrideProps(overrides, "port3option121")}
          ></option>
          <option
            children="Tanjung Priok (TP)"
            value="Tanjung Priok (TP)"
            {...getOverrideProps(overrides, "port3option122")}
          ></option>
          <option
            children="Tarjun (TAR)"
            value="Tarjun (TAR)"
            {...getOverrideProps(overrides, "port3option123")}
          ></option>
          <option
            children="Tawau (TAW)"
            value="Tawau (TAW)"
            {...getOverrideProps(overrides, "port3option124")}
          ></option>
          <option
            children="Terengganu (TGG)"
            value="Terengganu (TGG)"
            {...getOverrideProps(overrides, "port3option125")}
          ></option>
          <option
            children="Tha Sala (TSL)"
            value="Tha Sala (TSL)"
            {...getOverrideProps(overrides, "port3option126")}
          ></option>
          <option
            children="Tsukumi (TSUM)"
            value="Tsukumi (TSUM)"
            {...getOverrideProps(overrides, "port3option127")}
          ></option>
          <option
            children="Vung Ang (VAG)"
            value="Vung Ang (VAG)"
            {...getOverrideProps(overrides, "port3option128")}
          ></option>
          <option
            children="Vung Tau (VUT)"
            value="Vung Tau (VUT)"
            {...getOverrideProps(overrides, "port3option129")}
          ></option>
          <option
            children="Yangon (RGN)"
            value="Yangon (RGN)"
            {...getOverrideProps(overrides, "port3option130")}
          ></option>
        </SelectField>
        <TextField
          label="Fees"
          type="number"
          step="any"
          value={port3_fees}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                Field4,
                vessel_ht1,
                vessel_hn5,
                vessel_hn7,
                vessel_hn9,
                vessel_hn10,
                vessel_ht20,
                vessel_ht21,
                port1,
                port1_fees,
                port1_port_call,
                port1_crane_usage,
                port2,
                port2_fees,
                port2_port_call,
                port2_crane_usage,
                port3,
                port3_fees: value,
                port3_port_call,
                port3_crane_usage,
                port4,
                port4_fees,
                port4_port_call,
                port4_crane_usage,
                port5,
                port5_fees,
                port6,
                port6_fees,
                cargo1,
                cargo1_quantity,
                cargo1_rate,
                cargo2,
                cargo2_quantity,
                cargo2_rate,
                cargo3,
                cargo3_quantity,
                cargo3_rate,
                cargo4,
                cargo4_quantity,
                cargo4_rate,
                cargo5,
                cargo5_quantity,
                cargo5_rate,
                cargo6,
                cargo6_quantity,
                cargo6_rate,
                bunker_rate,
                diesel_rate,
                lube_rate,
                surveying_fees,
                Field0,
                miscCosts,
                craneUsage,
                portDays,
              };
              const result = onChange(modelFields);
              value = result?.port3_fees ?? value;
            }
            if (errors.port3_fees?.hasError) {
              runValidationTasks("port3_fees", value);
            }
            setPort3_fees(value);
          }}
          onBlur={() => runValidationTasks("port3_fees", port3_fees)}
          errorMessage={errors.port3_fees?.errorMessage}
          hasError={errors.port3_fees?.hasError}
          {...getOverrideProps(overrides, "port3_fees")}
        ></TextField>
      </Grid>
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(2, auto)"
        {...getOverrideProps(overrides, "RowGrid19")}
      >
        <TextField
          label="Port Call Duration (Days)"
          type="number"
          step="any"
          value={port3_port_call}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                Field4,
                vessel_ht1,
                vessel_hn5,
                vessel_hn7,
                vessel_hn9,
                vessel_hn10,
                vessel_ht20,
                vessel_ht21,
                port1,
                port1_fees,
                port1_port_call,
                port1_crane_usage,
                port2,
                port2_fees,
                port2_port_call,
                port2_crane_usage,
                port3,
                port3_fees,
                port3_port_call: value,
                port3_crane_usage,
                port4,
                port4_fees,
                port4_port_call,
                port4_crane_usage,
                port5,
                port5_fees,
                port6,
                port6_fees,
                cargo1,
                cargo1_quantity,
                cargo1_rate,
                cargo2,
                cargo2_quantity,
                cargo2_rate,
                cargo3,
                cargo3_quantity,
                cargo3_rate,
                cargo4,
                cargo4_quantity,
                cargo4_rate,
                cargo5,
                cargo5_quantity,
                cargo5_rate,
                cargo6,
                cargo6_quantity,
                cargo6_rate,
                bunker_rate,
                diesel_rate,
                lube_rate,
                surveying_fees,
                Field0,
                miscCosts,
                craneUsage,
                portDays,
              };
              const result = onChange(modelFields);
              value = result?.port3_port_call ?? value;
            }
            if (errors.port3_port_call?.hasError) {
              runValidationTasks("port3_port_call", value);
            }
            setPort3_port_call(value);
          }}
          onBlur={() => runValidationTasks("port3_port_call", port3_port_call)}
          errorMessage={errors.port3_port_call?.errorMessage}
          hasError={errors.port3_port_call?.hasError}
          {...getOverrideProps(overrides, "port3_port_call")}
        ></TextField>
        <TextField
          label="Crane Usage (Hours)"
          type="number"
          step="any"
          value={port3_crane_usage}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                Field4,
                vessel_ht1,
                vessel_hn5,
                vessel_hn7,
                vessel_hn9,
                vessel_hn10,
                vessel_ht20,
                vessel_ht21,
                port1,
                port1_fees,
                port1_port_call,
                port1_crane_usage,
                port2,
                port2_fees,
                port2_port_call,
                port2_crane_usage,
                port3,
                port3_fees,
                port3_port_call,
                port3_crane_usage: value,
                port4,
                port4_fees,
                port4_port_call,
                port4_crane_usage,
                port5,
                port5_fees,
                port6,
                port6_fees,
                cargo1,
                cargo1_quantity,
                cargo1_rate,
                cargo2,
                cargo2_quantity,
                cargo2_rate,
                cargo3,
                cargo3_quantity,
                cargo3_rate,
                cargo4,
                cargo4_quantity,
                cargo4_rate,
                cargo5,
                cargo5_quantity,
                cargo5_rate,
                cargo6,
                cargo6_quantity,
                cargo6_rate,
                bunker_rate,
                diesel_rate,
                lube_rate,
                surveying_fees,
                Field0,
                miscCosts,
                craneUsage,
                portDays,
              };
              const result = onChange(modelFields);
              value = result?.port3_crane_usage ?? value;
            }
            if (errors.port3_crane_usage?.hasError) {
              runValidationTasks("port3_crane_usage", value);
            }
            setPort3_crane_usage(value);
          }}
          onBlur={() =>
            runValidationTasks("port3_crane_usage", port3_crane_usage)
          }
          errorMessage={errors.port3_crane_usage?.errorMessage}
          hasError={errors.port3_crane_usage?.hasError}
          {...getOverrideProps(overrides, "port3_crane_usage")}
        ></TextField>
      </Grid>
      <Heading
        children="Port 4"
        {...getOverrideProps(overrides, "SectionalElement12")}
      ></Heading>
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(2, auto)"
        {...getOverrideProps(overrides, "RowGrid21")}
      >
        <SelectField
          label="Name"
          placeholder="Please select an option"
          isDisabled={false}
          value={port4}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                Field4,
                vessel_ht1,
                vessel_hn5,
                vessel_hn7,
                vessel_hn9,
                vessel_hn10,
                vessel_ht20,
                vessel_ht21,
                port1,
                port1_fees,
                port1_port_call,
                port1_crane_usage,
                port2,
                port2_fees,
                port2_port_call,
                port2_crane_usage,
                port3,
                port3_fees,
                port3_port_call,
                port3_crane_usage,
                port4: value,
                port4_fees,
                port4_port_call,
                port4_crane_usage,
                port5,
                port5_fees,
                port6,
                port6_fees,
                cargo1,
                cargo1_quantity,
                cargo1_rate,
                cargo2,
                cargo2_quantity,
                cargo2_rate,
                cargo3,
                cargo3_quantity,
                cargo3_rate,
                cargo4,
                cargo4_quantity,
                cargo4_rate,
                cargo5,
                cargo5_quantity,
                cargo5_rate,
                cargo6,
                cargo6_quantity,
                cargo6_rate,
                bunker_rate,
                diesel_rate,
                lube_rate,
                surveying_fees,
                Field0,
                miscCosts,
                craneUsage,
                portDays,
              };
              const result = onChange(modelFields);
              value = result?.port4 ?? value;
            }
            if (errors.port4?.hasError) {
              runValidationTasks("port4", value);
            }
            setPort4(value);
          }}
          onBlur={() => runValidationTasks("port4", port4)}
          errorMessage={errors.port4?.errorMessage}
          hasError={errors.port4?.hasError}
          {...getOverrideProps(overrides, "port4")}
        >
          <option
            children="NIL"
            value="NIL"
            {...getOverrideProps(overrides, "port4option0")}
          ></option>
          <option
            children="Ayutthaya - Bangpain (AB)"
            value="Ayutthaya - Bangpain (AB)"
            {...getOverrideProps(overrides, "port4option1")}
          ></option>
          <option
            children="Ayutthaya - Nakorn Luang (ANL)"
            value="Ayutthaya - Nakorn Luang (ANL)"
            {...getOverrideProps(overrides, "port4option2")}
          ></option>
          <option
            children="Bahodopi (BHDP)"
            value="Bahodopi (BHDP)"
            {...getOverrideProps(overrides, "port4option3")}
          ></option>
          <option
            children="Balikpapan (BPN)"
            value="Balikpapan (BPN)"
            {...getOverrideProps(overrides, "port4option4")}
          ></option>
          <option
            children="Bang Sapan (BS)"
            value="Bang Sapan (BS)"
            {...getOverrideProps(overrides, "port4option5")}
          ></option>
          <option
            children="Bangkok (BK)"
            value="Bangkok (BK)"
            {...getOverrideProps(overrides, "port4option6")}
          ></option>
          <option
            children="Bangpakong (BAK)"
            value="Bangpakong (BAK)"
            {...getOverrideProps(overrides, "port4option7")}
          ></option>
          <option
            children="Banyuwangi - Tanjung Wangi (BJU)"
            value="Banyuwangi - Tanjung Wangi (BJU)"
            {...getOverrideProps(overrides, "port4option8")}
          ></option>
          <option
            children="Batam (BAT)"
            value="Batam (BAT)"
            {...getOverrideProps(overrides, "port4option9")}
          ></option>
          <option
            children="Beihai (BHY)"
            value="Beihai (BHY)"
            {...getOverrideProps(overrides, "port4option10")}
          ></option>
          <option
            children="Belawan (BRW)"
            value="Belawan (BRW)"
            {...getOverrideProps(overrides, "port4option11")}
          ></option>
          <option
            children="Benoa (Bali) (BAO)"
            value="Benoa (Bali) (BAO)"
            {...getOverrideProps(overrides, "port4option12")}
          ></option>
          <option
            children="Bintan (BTN)"
            value="Bintan (BTN)"
            {...getOverrideProps(overrides, "port4option13")}
          ></option>
          <option
            children="Bintulu (BIN)"
            value="Bintulu (BIN)"
            {...getOverrideProps(overrides, "port4option14")}
          ></option>
          <option
            children="Bitung (BIT)"
            value="Bitung (BIT)"
            {...getOverrideProps(overrides, "port4option15")}
          ></option>
          <option
            children="Bontang (BXT)"
            value="Bontang (BXT)"
            {...getOverrideProps(overrides, "port4option16")}
          ></option>
          <option
            children="Bourbon (BOUR)"
            value="Bourbon (BOUR)"
            {...getOverrideProps(overrides, "port4option17")}
          ></option>
          <option
            children="Brunei (BRU)"
            value="Brunei (BRU)"
            {...getOverrideProps(overrides, "port4option18")}
          ></option>
          <option
            children="Cai Lan (CLN)"
            value="Cai Lan (CLN)"
            {...getOverrideProps(overrides, "port4option19")}
          ></option>
          <option
            children="Cam Pha (CPH)"
            value="Cam Pha (CPH)"
            {...getOverrideProps(overrides, "port4option20")}
          ></option>
          <option
            children="Can Tho (VCA)"
            value="Can Tho (VCA)"
            {...getOverrideProps(overrides, "port4option21")}
          ></option>
          <option
            children="Cat Lai (CLI)"
            value="Cat Lai (CLI)"
            {...getOverrideProps(overrides, "port4option22")}
          ></option>
          <option
            children="Cayagan de Oro City (Macabalan wharf) (CDO)"
            value="Cayagan de Oro City (Macabalan wharf) (CDO)"
            {...getOverrideProps(overrides, "port4option23")}
          ></option>
          <option
            children="Century Harbour (MHI)"
            value="Century Harbour (MHI)"
            {...getOverrideProps(overrides, "port4option24")}
          ></option>
          <option
            children="Chantaburi LaemSing (CLS)"
            value="Chantaburi LaemSing (CLS)"
            {...getOverrideProps(overrides, "port4option25")}
          ></option>
          <option
            children="Chittagong (CTG)"
            value="Chittagong (CTG)"
            {...getOverrideProps(overrides, "port4option26")}
          ></option>
          <option
            children="Cigading (CIG)"
            value="Cigading (CIG)"
            {...getOverrideProps(overrides, "port4option27")}
          ></option>
          <option
            children="Danang (DAD)"
            value="Danang (DAD)"
            {...getOverrideProps(overrides, "port4option28")}
          ></option>
          <option
            children="Davao (Sasa Wharf) (DVO)"
            value="Davao (Sasa Wharf) (DVO)"
            {...getOverrideProps(overrides, "port4option29")}
          ></option>
          <option
            children="Dhaka (DKA)"
            value="Dhaka (DKA)"
            {...getOverrideProps(overrides, "port4option30")}
          ></option>
          <option
            children="Dumai (DMI)"
            value="Dumai (DMI)"
            {...getOverrideProps(overrides, "port4option31")}
          ></option>
          <option
            children="Dung Quat (DQT)"
            value="Dung Quat (DQT)"
            {...getOverrideProps(overrides, "port4option32")}
          ></option>
          <option
            children="Fangcheng (FAN)"
            value="Fangcheng (FAN)"
            {...getOverrideProps(overrides, "port4option33")}
          ></option>
          <option
            children="Futong (FTG)"
            value="Futong (FTG)"
            {...getOverrideProps(overrides, "port4option34")}
          ></option>
          <option
            children="Godau port  (GDP)"
            value="Godau port  (GDP)"
            {...getOverrideProps(overrides, "port4option35")}
          ></option>
          <option
            children="Haiphong (HPH)"
            value="Haiphong (HPH)"
            {...getOverrideProps(overrides, "port4option36")}
          ></option>
          <option
            children="Halong Bay (HLG)"
            value="Halong Bay (HLG)"
            {...getOverrideProps(overrides, "port4option37")}
          ></option>
          <option
            children="HO CHI MINH (HCM)"
            value="HO CHI MINH (HCM)"
            {...getOverrideProps(overrides, "port4option38")}
          ></option>
          <option
            children="Hon Gai (HON)"
            value="Hon Gai (HON)"
            {...getOverrideProps(overrides, "port4option39")}
          ></option>
          <option
            children="Hong Kong (HKG)"
            value="Hong Kong (HKG)"
            {...getOverrideProps(overrides, "port4option40")}
          ></option>
          <option
            children="Jakarta (JAK)"
            value="Jakarta (JAK)"
            {...getOverrideProps(overrides, "port4option41")}
          ></option>
          <option
            children="Jambi (JBI)"
            value="Jambi (JBI)"
            {...getOverrideProps(overrides, "port4option42")}
          ></option>
          <option
            children="K.K. Kota Kinabalu (KK)"
            value="K.K. Kota Kinabalu (KK)"
            {...getOverrideProps(overrides, "port4option43")}
          ></option>
          <option
            children="Kampot (KMP)"
            value="Kampot (KMP)"
            {...getOverrideProps(overrides, "port4option44")}
          ></option>
          <option
            children="Kantang (KTG)"
            value="Kantang (KTG)"
            {...getOverrideProps(overrides, "port4option45")}
          ></option>
          <option
            children="Kedah (KKH)"
            value="Kedah (KKH)"
            {...getOverrideProps(overrides, "port4option46")}
          ></option>
          <option
            children="Kelantan (KLT)"
            value="Kelantan (KLT)"
            {...getOverrideProps(overrides, "port4option47")}
          ></option>
          <option
            children="Kemaman (KMN)"
            value="Kemaman (KMN)"
            {...getOverrideProps(overrides, "port4option48")}
          ></option>
          <option
            children="Khanom (KHM)"
            value="Khanom (KHM)"
            {...getOverrideProps(overrides, "port4option49")}
          ></option>
          <option
            children="Ko Sichang (KSI)"
            value="Ko Sichang (KSI)"
            {...getOverrideProps(overrides, "port4option50")}
          ></option>
          <option
            children="Kolkata (CCU)"
            value="Kolkata (CCU)"
            {...getOverrideProps(overrides, "port4option51")}
          ></option>
          <option
            children="Kor Samui (KSM)"
            value="Kor Samui (KSM)"
            {...getOverrideProps(overrides, "port4option52")}
          ></option>
          <option
            children="Kuantan (KT)"
            value="Kuantan (KT)"
            {...getOverrideProps(overrides, "port4option53")}
          ></option>
          <option
            children="Kuching (KUC)"
            value="Kuching (KUC)"
            {...getOverrideProps(overrides, "port4option54")}
          ></option>
          <option
            children="Labuan (LBN)"
            value="Labuan (LBN)"
            {...getOverrideProps(overrides, "port4option55")}
          ></option>
          <option
            children="Laem Chabang (LCB)"
            value="Laem Chabang (LCB)"
            {...getOverrideProps(overrides, "port4option56")}
          ></option>
          <option
            children="Lahad Datu (LDU)"
            value="Lahad Datu (LDU)"
            {...getOverrideProps(overrides, "port4option57")}
          ></option>
          <option
            children="Lhokseumawe (LHOK)"
            value="Lhokseumawe (LHOK)"
            {...getOverrideProps(overrides, "port4option58")}
          ></option>
          <option
            children="Lumut (LUM)"
            value="Lumut (LUM)"
            {...getOverrideProps(overrides, "port4option59")}
          ></option>
          <option
            children="Maeklong (Firesun) (MKG)"
            value="Maeklong (Firesun) (MKG)"
            {...getOverrideProps(overrides, "port4option60")}
          ></option>
          <option
            children="Mahachai (MHI)"
            value="Mahachai (MHI)"
            {...getOverrideProps(overrides, "port4option61")}
          ></option>
          <option
            children="Makassar (MAK)"
            value="Makassar (MAK)"
            {...getOverrideProps(overrides, "port4option62")}
          ></option>
          <option
            children="Malacca (MAL)"
            value="Malacca (MAL)"
            {...getOverrideProps(overrides, "port4option63")}
          ></option>
          <option
            children="Manila Habour (MNL)"
            value="Manila Habour (MNL)"
            {...getOverrideProps(overrides, "port4option64")}
          ></option>
          <option
            children="Maptaphut (MAT)"
            value="Maptaphut (MAT)"
            {...getOverrideProps(overrides, "port4option65")}
          ></option>
          <option
            children="Marunda (MRD)"
            value="Marunda (MRD)"
            {...getOverrideProps(overrides, "port4option66")}
          ></option>
          <option
            children="Mawei Fuzhou (FOC)"
            value="Mawei Fuzhou (FOC)"
            {...getOverrideProps(overrides, "port4option67")}
          ></option>
          <option
            children="Muara (MUR)"
            value="Muara (MUR)"
            {...getOverrideProps(overrides, "port4option68")}
          ></option>
          <option
            children="My Tho (MUT)"
            value="My Tho (MUT)"
            {...getOverrideProps(overrides, "port4option69")}
          ></option>
          <option
            children="Nan Tong (NTG)"
            value="Nan Tong (NTG)"
            {...getOverrideProps(overrides, "port4option70")}
          ></option>
          <option
            children="Narathiwat (NAW)"
            value="Narathiwat (NAW)"
            {...getOverrideProps(overrides, "port4option71")}
          ></option>
          <option
            children="Nghi Son (NGH)"
            value="Nghi Son (NGH)"
            {...getOverrideProps(overrides, "port4option72")}
          ></option>
          <option
            children="Ningde (NDE)"
            value="Ningde (NDE)"
            {...getOverrideProps(overrides, "port4option73")}
          ></option>
          <option
            children="Nunukan (NNX)"
            value="Nunukan (NNX)"
            {...getOverrideProps(overrides, "port4option74")}
          ></option>
          <option
            children="Oknha Mong Port (OMP)"
            value="Oknha Mong Port (OMP)"
            {...getOverrideProps(overrides, "port4option75")}
          ></option>
          <option
            children="Onomichi (ONO)"
            value="Onomichi (ONO)"
            {...getOverrideProps(overrides, "port4option76")}
          ></option>
          <option
            children="Padang - Telux Buyur (TBR)"
            value="Padang - Telux Buyur (TBR)"
            {...getOverrideProps(overrides, "port4option77")}
          ></option>
          <option
            children="PAKAN Baru (PKRU)"
            value="PAKAN Baru (PKRU)"
            {...getOverrideProps(overrides, "port4option78")}
          ></option>
          <option
            children="Palembang (PLB)"
            value="Palembang (PLB)"
            {...getOverrideProps(overrides, "port4option79")}
          ></option>
          <option
            children="Panjang (PNJ)"
            value="Panjang (PNJ)"
            {...getOverrideProps(overrides, "port4option80")}
          ></option>
          <option
            children="Pasir Gudang (PAS)"
            value="Pasir Gudang (PAS)"
            {...getOverrideProps(overrides, "port4option81")}
          ></option>
          <option
            children="Patimban (PTB)"
            value="Patimban (PTB)"
            {...getOverrideProps(overrides, "port4option82")}
          ></option>
          <option
            children="Pattani (PTN)"
            value="Pattani (PTN)"
            {...getOverrideProps(overrides, "port4option83")}
          ></option>
          <option
            children="Penang (PNG)"
            value="Penang (PNG)"
            {...getOverrideProps(overrides, "port4option84")}
          ></option>
          <option
            children="Phnom Penh (PNH)"
            value="Phnom Penh (PNH)"
            {...getOverrideProps(overrides, "port4option85")}
          ></option>
          <option
            children="Phra Chulachomklao Fort (PCF)"
            value="Phra Chulachomklao Fort (PCF)"
            {...getOverrideProps(overrides, "port4option86")}
          ></option>
          <option
            children="Phuket (HKT)"
            value="Phuket (HKT)"
            {...getOverrideProps(overrides, "port4option87")}
          ></option>
          <option
            children="Phumy (PHU)"
            value="Phumy (PHU)"
            {...getOverrideProps(overrides, "port4option88")}
          ></option>
          <option
            children="Plathong Oil Rig (PATO)"
            value="Plathong Oil Rig (PATO)"
            {...getOverrideProps(overrides, "port4option89")}
          ></option>
          <option
            children="Pontianak (POT)"
            value="Pontianak (POT)"
            {...getOverrideProps(overrides, "port4option90")}
          ></option>
          <option
            children="Port Klang (PKL)"
            value="Port Klang (PKL)"
            {...getOverrideProps(overrides, "port4option91")}
          ></option>
          <option
            children="Port Moresby (PGPOM)"
            value="Port Moresby (PGPOM)"
            {...getOverrideProps(overrides, "port4option92")}
          ></option>
          <option
            children="Poso (POSO)"
            value="Poso (POSO)"
            {...getOverrideProps(overrides, "port4option93")}
          ></option>
          <option
            children="Pusan (PUS)"
            value="Pusan (PUS)"
            {...getOverrideProps(overrides, "port4option94")}
          ></option>
          <option
            children="Quinzhou (QZH)"
            value="Quinzhou (QZH)"
            {...getOverrideProps(overrides, "port4option95")}
          ></option>
          <option
            children="Quy Nhon (QNN)"
            value="Quy Nhon (QNN)"
            {...getOverrideProps(overrides, "port4option96")}
          ></option>
          <option
            children="Ranong (UNN)"
            value="Ranong (UNN)"
            {...getOverrideProps(overrides, "port4option97")}
          ></option>
          <option
            children="Rayong (IRPC)"
            value="Rayong (IRPC)"
            {...getOverrideProps(overrides, "port4option98")}
          ></option>
          <option
            children="Sampit (SMQ)"
            value="Sampit (SMQ)"
            {...getOverrideProps(overrides, "port4option99")}
          ></option>
          <option
            children="Sandakan (SAN)"
            value="Sandakan (SAN)"
            {...getOverrideProps(overrides, "port4option100")}
          ></option>
          <option
            children="Sarawak (SRW)"
            value="Sarawak (SRW)"
            {...getOverrideProps(overrides, "port4option101")}
          ></option>
          <option
            children="Sarekei (SRK)"
            value="Sarekei (SRK)"
            {...getOverrideProps(overrides, "port4option102")}
          ></option>
          <option
            children="Sattahip (SATP)"
            value="Sattahip (SATP)"
            {...getOverrideProps(overrides, "port4option103")}
          ></option>
          <option
            children="Semarang - Tanjung Emas (SRG)"
            value="Semarang - Tanjung Emas (SRG)"
            {...getOverrideProps(overrides, "port4option104")}
          ></option>
          <option
            children="Semarang (SRG)"
            value="Semarang (SRG)"
            {...getOverrideProps(overrides, "port4option105")}
          ></option>
          <option
            children="Sibu (SIB)"
            value="Sibu (SIB)"
            {...getOverrideProps(overrides, "port4option106")}
          ></option>
          <option
            children="Singapore (SG)"
            value="Singapore (SG)"
            {...getOverrideProps(overrides, "port4option107")}
          ></option>
          <option
            children="Sipitang (SIP)"
            value="Sipitang (SIP)"
            {...getOverrideProps(overrides, "port4option108")}
          ></option>
          <option
            children="Son Duong (SOD)"
            value="Son Duong (SOD)"
            {...getOverrideProps(overrides, "port4option109")}
          ></option>
          <option
            children="Songkhla (SK)"
            value="Songkhla (SK)"
            {...getOverrideProps(overrides, "port4option110")}
          ></option>
          <option
            children="Srihanoville (SIH)"
            value="Srihanoville (SIH)"
            {...getOverrideProps(overrides, "port4option111")}
          ></option>
          <option
            children="Sriracha Harbor (SRC)"
            value="Sriracha Harbor (SRC)"
            {...getOverrideProps(overrides, "port4option112")}
          ></option>
          <option
            children="Sritama Jetty (STM)"
            value="Sritama Jetty (STM)"
            {...getOverrideProps(overrides, "port4option113")}
          ></option>
          <option
            children="Steung Hav (SHV)"
            value="Steung Hav (SHV)"
            {...getOverrideProps(overrides, "port4option114")}
          ></option>
          <option
            children="Sungai Guntung (SGGT)"
            value="Sungai Guntung (SGGT)"
            {...getOverrideProps(overrides, "port4option115")}
          ></option>
          <option
            children="Surabaya (SUBY)"
            value="Surabaya (SUBY)"
            {...getOverrideProps(overrides, "port4option116")}
          ></option>
          <option
            children="Surat Thanee (SRT)"
            value="Surat Thanee (SRT)"
            {...getOverrideProps(overrides, "port4option117")}
          ></option>
          <option
            children="Tacloban (TAC)"
            value="Tacloban (TAC)"
            {...getOverrideProps(overrides, "port4option118")}
          ></option>
          <option
            children="Tagbilaran (TAG)"
            value="Tagbilaran (TAG)"
            {...getOverrideProps(overrides, "port4option119")}
          ></option>
          <option
            children="Tanjong Manis (TGM)"
            value="Tanjong Manis (TGM)"
            {...getOverrideProps(overrides, "port4option120")}
          ></option>
          <option
            children="Tanjung Batu (TJQ)"
            value="Tanjung Batu (TJQ)"
            {...getOverrideProps(overrides, "port4option121")}
          ></option>
          <option
            children="Tanjung Priok (TP)"
            value="Tanjung Priok (TP)"
            {...getOverrideProps(overrides, "port4option122")}
          ></option>
          <option
            children="Tarjun (TAR)"
            value="Tarjun (TAR)"
            {...getOverrideProps(overrides, "port4option123")}
          ></option>
          <option
            children="Tawau (TAW)"
            value="Tawau (TAW)"
            {...getOverrideProps(overrides, "port4option124")}
          ></option>
          <option
            children="Terengganu (TGG)"
            value="Terengganu (TGG)"
            {...getOverrideProps(overrides, "port4option125")}
          ></option>
          <option
            children="Tha Sala (TSL)"
            value="Tha Sala (TSL)"
            {...getOverrideProps(overrides, "port4option126")}
          ></option>
          <option
            children="Tsukumi (TSUM)"
            value="Tsukumi (TSUM)"
            {...getOverrideProps(overrides, "port4option127")}
          ></option>
          <option
            children="Vung Ang (VAG)"
            value="Vung Ang (VAG)"
            {...getOverrideProps(overrides, "port4option128")}
          ></option>
          <option
            children="Vung Tau (VUT)"
            value="Vung Tau (VUT)"
            {...getOverrideProps(overrides, "port4option129")}
          ></option>
          <option
            children="Yangon (RGN)"
            value="Yangon (RGN)"
            {...getOverrideProps(overrides, "port4option130")}
          ></option>
        </SelectField>
        <TextField
          label="Fees"
          type="number"
          step="any"
          value={port4_fees}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                Field4,
                vessel_ht1,
                vessel_hn5,
                vessel_hn7,
                vessel_hn9,
                vessel_hn10,
                vessel_ht20,
                vessel_ht21,
                port1,
                port1_fees,
                port1_port_call,
                port1_crane_usage,
                port2,
                port2_fees,
                port2_port_call,
                port2_crane_usage,
                port3,
                port3_fees,
                port3_port_call,
                port3_crane_usage,
                port4,
                port4_fees: value,
                port4_port_call,
                port4_crane_usage,
                port5,
                port5_fees,
                port6,
                port6_fees,
                cargo1,
                cargo1_quantity,
                cargo1_rate,
                cargo2,
                cargo2_quantity,
                cargo2_rate,
                cargo3,
                cargo3_quantity,
                cargo3_rate,
                cargo4,
                cargo4_quantity,
                cargo4_rate,
                cargo5,
                cargo5_quantity,
                cargo5_rate,
                cargo6,
                cargo6_quantity,
                cargo6_rate,
                bunker_rate,
                diesel_rate,
                lube_rate,
                surveying_fees,
                Field0,
                miscCosts,
                craneUsage,
                portDays,
              };
              const result = onChange(modelFields);
              value = result?.port4_fees ?? value;
            }
            if (errors.port4_fees?.hasError) {
              runValidationTasks("port4_fees", value);
            }
            setPort4_fees(value);
          }}
          onBlur={() => runValidationTasks("port4_fees", port4_fees)}
          errorMessage={errors.port4_fees?.errorMessage}
          hasError={errors.port4_fees?.hasError}
          {...getOverrideProps(overrides, "port4_fees")}
        ></TextField>
      </Grid>
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(2, auto)"
        {...getOverrideProps(overrides, "RowGrid22")}
      >
        <TextField
          label="Port Call Duration (Days)"
          type="number"
          step="any"
          value={port4_port_call}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                Field4,
                vessel_ht1,
                vessel_hn5,
                vessel_hn7,
                vessel_hn9,
                vessel_hn10,
                vessel_ht20,
                vessel_ht21,
                port1,
                port1_fees,
                port1_port_call,
                port1_crane_usage,
                port2,
                port2_fees,
                port2_port_call,
                port2_crane_usage,
                port3,
                port3_fees,
                port3_port_call,
                port3_crane_usage,
                port4,
                port4_fees,
                port4_port_call: value,
                port4_crane_usage,
                port5,
                port5_fees,
                port6,
                port6_fees,
                cargo1,
                cargo1_quantity,
                cargo1_rate,
                cargo2,
                cargo2_quantity,
                cargo2_rate,
                cargo3,
                cargo3_quantity,
                cargo3_rate,
                cargo4,
                cargo4_quantity,
                cargo4_rate,
                cargo5,
                cargo5_quantity,
                cargo5_rate,
                cargo6,
                cargo6_quantity,
                cargo6_rate,
                bunker_rate,
                diesel_rate,
                lube_rate,
                surveying_fees,
                Field0,
                miscCosts,
                craneUsage,
                portDays,
              };
              const result = onChange(modelFields);
              value = result?.port4_port_call ?? value;
            }
            if (errors.port4_port_call?.hasError) {
              runValidationTasks("port4_port_call", value);
            }
            setPort4_port_call(value);
          }}
          onBlur={() => runValidationTasks("port4_port_call", port4_port_call)}
          errorMessage={errors.port4_port_call?.errorMessage}
          hasError={errors.port4_port_call?.hasError}
          {...getOverrideProps(overrides, "port4_port_call")}
        ></TextField>
        <TextField
          label="Crane Usage (Hours)"
          type="number"
          step="any"
          value={port4_crane_usage}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                Field4,
                vessel_ht1,
                vessel_hn5,
                vessel_hn7,
                vessel_hn9,
                vessel_hn10,
                vessel_ht20,
                vessel_ht21,
                port1,
                port1_fees,
                port1_port_call,
                port1_crane_usage,
                port2,
                port2_fees,
                port2_port_call,
                port2_crane_usage,
                port3,
                port3_fees,
                port3_port_call,
                port3_crane_usage,
                port4,
                port4_fees,
                port4_port_call,
                port4_crane_usage: value,
                port5,
                port5_fees,
                port6,
                port6_fees,
                cargo1,
                cargo1_quantity,
                cargo1_rate,
                cargo2,
                cargo2_quantity,
                cargo2_rate,
                cargo3,
                cargo3_quantity,
                cargo3_rate,
                cargo4,
                cargo4_quantity,
                cargo4_rate,
                cargo5,
                cargo5_quantity,
                cargo5_rate,
                cargo6,
                cargo6_quantity,
                cargo6_rate,
                bunker_rate,
                diesel_rate,
                lube_rate,
                surveying_fees,
                Field0,
                miscCosts,
                craneUsage,
                portDays,
              };
              const result = onChange(modelFields);
              value = result?.port4_crane_usage ?? value;
            }
            if (errors.port4_crane_usage?.hasError) {
              runValidationTasks("port4_crane_usage", value);
            }
            setPort4_crane_usage(value);
          }}
          onBlur={() =>
            runValidationTasks("port4_crane_usage", port4_crane_usage)
          }
          errorMessage={errors.port4_crane_usage?.errorMessage}
          hasError={errors.port4_crane_usage?.hasError}
          {...getOverrideProps(overrides, "port4_crane_usage")}
        ></TextField>
      </Grid>
      <Heading
        children="Port 5"
        {...getOverrideProps(overrides, "SectionalElement13")}
      ></Heading>
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(2, auto)"
        {...getOverrideProps(overrides, "RowGrid24")}
      >
        <SelectField
          label="Name"
          placeholder="Please select an option"
          isDisabled={false}
          value={port5}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                Field4,
                vessel_ht1,
                vessel_hn5,
                vessel_hn7,
                vessel_hn9,
                vessel_hn10,
                vessel_ht20,
                vessel_ht21,
                port1,
                port1_fees,
                port1_port_call,
                port1_crane_usage,
                port2,
                port2_fees,
                port2_port_call,
                port2_crane_usage,
                port3,
                port3_fees,
                port3_port_call,
                port3_crane_usage,
                port4,
                port4_fees,
                port4_port_call,
                port4_crane_usage,
                port5: value,
                port5_fees,
                port6,
                port6_fees,
                cargo1,
                cargo1_quantity,
                cargo1_rate,
                cargo2,
                cargo2_quantity,
                cargo2_rate,
                cargo3,
                cargo3_quantity,
                cargo3_rate,
                cargo4,
                cargo4_quantity,
                cargo4_rate,
                cargo5,
                cargo5_quantity,
                cargo5_rate,
                cargo6,
                cargo6_quantity,
                cargo6_rate,
                bunker_rate,
                diesel_rate,
                lube_rate,
                surveying_fees,
                Field0,
                miscCosts,
                craneUsage,
                portDays,
              };
              const result = onChange(modelFields);
              value = result?.port5 ?? value;
            }
            if (errors.port5?.hasError) {
              runValidationTasks("port5", value);
            }
            setPort5(value);
          }}
          onBlur={() => runValidationTasks("port5", port5)}
          errorMessage={errors.port5?.errorMessage}
          hasError={errors.port5?.hasError}
          {...getOverrideProps(overrides, "port5")}
        >
          <option
            children="NIL"
            value="NIL"
            {...getOverrideProps(overrides, "port5option0")}
          ></option>
          <option
            children="Ayutthaya - Bangpain (AB)"
            value="Ayutthaya - Bangpain (AB)"
            {...getOverrideProps(overrides, "port5option1")}
          ></option>
          <option
            children="Ayutthaya - Nakorn Luang (ANL)"
            value="Ayutthaya - Nakorn Luang (ANL)"
            {...getOverrideProps(overrides, "port5option2")}
          ></option>
          <option
            children="Bahodopi (BHDP)"
            value="Bahodopi (BHDP)"
            {...getOverrideProps(overrides, "port5option3")}
          ></option>
          <option
            children="Balikpapan (BPN)"
            value="Balikpapan (BPN)"
            {...getOverrideProps(overrides, "port5option4")}
          ></option>
          <option
            children="Bang Sapan (BS)"
            value="Bang Sapan (BS)"
            {...getOverrideProps(overrides, "port5option5")}
          ></option>
          <option
            children="Bangkok (BK)"
            value="Bangkok (BK)"
            {...getOverrideProps(overrides, "port5option6")}
          ></option>
          <option
            children="Bangpakong (BAK)"
            value="Bangpakong (BAK)"
            {...getOverrideProps(overrides, "port5option7")}
          ></option>
          <option
            children="Banyuwangi - Tanjung Wangi (BJU)"
            value="Banyuwangi - Tanjung Wangi (BJU)"
            {...getOverrideProps(overrides, "port5option8")}
          ></option>
          <option
            children="Batam (BAT)"
            value="Batam (BAT)"
            {...getOverrideProps(overrides, "port5option9")}
          ></option>
          <option
            children="Beihai (BHY)"
            value="Beihai (BHY)"
            {...getOverrideProps(overrides, "port5option10")}
          ></option>
          <option
            children="Belawan (BRW)"
            value="Belawan (BRW)"
            {...getOverrideProps(overrides, "port5option11")}
          ></option>
          <option
            children="Benoa (Bali) (BAO)"
            value="Benoa (Bali) (BAO)"
            {...getOverrideProps(overrides, "port5option12")}
          ></option>
          <option
            children="Bintan (BTN)"
            value="Bintan (BTN)"
            {...getOverrideProps(overrides, "port5option13")}
          ></option>
          <option
            children="Bintulu (BIN)"
            value="Bintulu (BIN)"
            {...getOverrideProps(overrides, "port5option14")}
          ></option>
          <option
            children="Bitung (BIT)"
            value="Bitung (BIT)"
            {...getOverrideProps(overrides, "port5option15")}
          ></option>
          <option
            children="Bontang (BXT)"
            value="Bontang (BXT)"
            {...getOverrideProps(overrides, "port5option16")}
          ></option>
          <option
            children="Bourbon (BOUR)"
            value="Bourbon (BOUR)"
            {...getOverrideProps(overrides, "port5option17")}
          ></option>
          <option
            children="Brunei (BRU)"
            value="Brunei (BRU)"
            {...getOverrideProps(overrides, "port5option18")}
          ></option>
          <option
            children="Cai Lan (CLN)"
            value="Cai Lan (CLN)"
            {...getOverrideProps(overrides, "port5option19")}
          ></option>
          <option
            children="Cam Pha (CPH)"
            value="Cam Pha (CPH)"
            {...getOverrideProps(overrides, "port5option20")}
          ></option>
          <option
            children="Can Tho (VCA)"
            value="Can Tho (VCA)"
            {...getOverrideProps(overrides, "port5option21")}
          ></option>
          <option
            children="Cat Lai (CLI)"
            value="Cat Lai (CLI)"
            {...getOverrideProps(overrides, "port5option22")}
          ></option>
          <option
            children="Cayagan de Oro City (Macabalan wharf) (CDO)"
            value="Cayagan de Oro City (Macabalan wharf) (CDO)"
            {...getOverrideProps(overrides, "port5option23")}
          ></option>
          <option
            children="Century Harbour (MHI)"
            value="Century Harbour (MHI)"
            {...getOverrideProps(overrides, "port5option24")}
          ></option>
          <option
            children="Chantaburi LaemSing (CLS)"
            value="Chantaburi LaemSing (CLS)"
            {...getOverrideProps(overrides, "port5option25")}
          ></option>
          <option
            children="Chittagong (CTG)"
            value="Chittagong (CTG)"
            {...getOverrideProps(overrides, "port5option26")}
          ></option>
          <option
            children="Cigading (CIG)"
            value="Cigading (CIG)"
            {...getOverrideProps(overrides, "port5option27")}
          ></option>
          <option
            children="Danang (DAD)"
            value="Danang (DAD)"
            {...getOverrideProps(overrides, "port5option28")}
          ></option>
          <option
            children="Davao (Sasa Wharf) (DVO)"
            value="Davao (Sasa Wharf) (DVO)"
            {...getOverrideProps(overrides, "port5option29")}
          ></option>
          <option
            children="Dhaka (DKA)"
            value="Dhaka (DKA)"
            {...getOverrideProps(overrides, "port5option30")}
          ></option>
          <option
            children="Dumai (DMI)"
            value="Dumai (DMI)"
            {...getOverrideProps(overrides, "port5option31")}
          ></option>
          <option
            children="Dung Quat (DQT)"
            value="Dung Quat (DQT)"
            {...getOverrideProps(overrides, "port5option32")}
          ></option>
          <option
            children="Fangcheng (FAN)"
            value="Fangcheng (FAN)"
            {...getOverrideProps(overrides, "port5option33")}
          ></option>
          <option
            children="Futong (FTG)"
            value="Futong (FTG)"
            {...getOverrideProps(overrides, "port5option34")}
          ></option>
          <option
            children="Godau port  (GDP)"
            value="Godau port  (GDP)"
            {...getOverrideProps(overrides, "port5option35")}
          ></option>
          <option
            children="Haiphong (HPH)"
            value="Haiphong (HPH)"
            {...getOverrideProps(overrides, "port5option36")}
          ></option>
          <option
            children="Halong Bay (HLG)"
            value="Halong Bay (HLG)"
            {...getOverrideProps(overrides, "port5option37")}
          ></option>
          <option
            children="HO CHI MINH (HCM)"
            value="HO CHI MINH (HCM)"
            {...getOverrideProps(overrides, "port5option38")}
          ></option>
          <option
            children="Hon Gai (HON)"
            value="Hon Gai (HON)"
            {...getOverrideProps(overrides, "port5option39")}
          ></option>
          <option
            children="Hong Kong (HKG)"
            value="Hong Kong (HKG)"
            {...getOverrideProps(overrides, "port5option40")}
          ></option>
          <option
            children="Jakarta (JAK)"
            value="Jakarta (JAK)"
            {...getOverrideProps(overrides, "port5option41")}
          ></option>
          <option
            children="Jambi (JBI)"
            value="Jambi (JBI)"
            {...getOverrideProps(overrides, "port5option42")}
          ></option>
          <option
            children="K.K. Kota Kinabalu (KK)"
            value="K.K. Kota Kinabalu (KK)"
            {...getOverrideProps(overrides, "port5option43")}
          ></option>
          <option
            children="Kampot (KMP)"
            value="Kampot (KMP)"
            {...getOverrideProps(overrides, "port5option44")}
          ></option>
          <option
            children="Kantang (KTG)"
            value="Kantang (KTG)"
            {...getOverrideProps(overrides, "port5option45")}
          ></option>
          <option
            children="Kedah (KKH)"
            value="Kedah (KKH)"
            {...getOverrideProps(overrides, "port5option46")}
          ></option>
          <option
            children="Kelantan (KLT)"
            value="Kelantan (KLT)"
            {...getOverrideProps(overrides, "port5option47")}
          ></option>
          <option
            children="Kemaman (KMN)"
            value="Kemaman (KMN)"
            {...getOverrideProps(overrides, "port5option48")}
          ></option>
          <option
            children="Khanom (KHM)"
            value="Khanom (KHM)"
            {...getOverrideProps(overrides, "port5option49")}
          ></option>
          <option
            children="Ko Sichang (KSI)"
            value="Ko Sichang (KSI)"
            {...getOverrideProps(overrides, "port5option50")}
          ></option>
          <option
            children="Kolkata (CCU)"
            value="Kolkata (CCU)"
            {...getOverrideProps(overrides, "port5option51")}
          ></option>
          <option
            children="Kor Samui (KSM)"
            value="Kor Samui (KSM)"
            {...getOverrideProps(overrides, "port5option52")}
          ></option>
          <option
            children="Kuantan (KT)"
            value="Kuantan (KT)"
            {...getOverrideProps(overrides, "port5option53")}
          ></option>
          <option
            children="Kuching (KUC)"
            value="Kuching (KUC)"
            {...getOverrideProps(overrides, "port5option54")}
          ></option>
          <option
            children="Labuan (LBN)"
            value="Labuan (LBN)"
            {...getOverrideProps(overrides, "port5option55")}
          ></option>
          <option
            children="Laem Chabang (LCB)"
            value="Laem Chabang (LCB)"
            {...getOverrideProps(overrides, "port5option56")}
          ></option>
          <option
            children="Lahad Datu (LDU)"
            value="Lahad Datu (LDU)"
            {...getOverrideProps(overrides, "port5option57")}
          ></option>
          <option
            children="Lhokseumawe (LHOK)"
            value="Lhokseumawe (LHOK)"
            {...getOverrideProps(overrides, "port5option58")}
          ></option>
          <option
            children="Lumut (LUM)"
            value="Lumut (LUM)"
            {...getOverrideProps(overrides, "port5option59")}
          ></option>
          <option
            children="Maeklong (Firesun) (MKG)"
            value="Maeklong (Firesun) (MKG)"
            {...getOverrideProps(overrides, "port5option60")}
          ></option>
          <option
            children="Mahachai (MHI)"
            value="Mahachai (MHI)"
            {...getOverrideProps(overrides, "port5option61")}
          ></option>
          <option
            children="Makassar (MAK)"
            value="Makassar (MAK)"
            {...getOverrideProps(overrides, "port5option62")}
          ></option>
          <option
            children="Malacca (MAL)"
            value="Malacca (MAL)"
            {...getOverrideProps(overrides, "port5option63")}
          ></option>
          <option
            children="Manila Habour (MNL)"
            value="Manila Habour (MNL)"
            {...getOverrideProps(overrides, "port5option64")}
          ></option>
          <option
            children="Maptaphut (MAT)"
            value="Maptaphut (MAT)"
            {...getOverrideProps(overrides, "port5option65")}
          ></option>
          <option
            children="Marunda (MRD)"
            value="Marunda (MRD)"
            {...getOverrideProps(overrides, "port5option66")}
          ></option>
          <option
            children="Mawei Fuzhou (FOC)"
            value="Mawei Fuzhou (FOC)"
            {...getOverrideProps(overrides, "port5option67")}
          ></option>
          <option
            children="Muara (MUR)"
            value="Muara (MUR)"
            {...getOverrideProps(overrides, "port5option68")}
          ></option>
          <option
            children="My Tho (MUT)"
            value="My Tho (MUT)"
            {...getOverrideProps(overrides, "port5option69")}
          ></option>
          <option
            children="Nan Tong (NTG)"
            value="Nan Tong (NTG)"
            {...getOverrideProps(overrides, "port5option70")}
          ></option>
          <option
            children="Narathiwat (NAW)"
            value="Narathiwat (NAW)"
            {...getOverrideProps(overrides, "port5option71")}
          ></option>
          <option
            children="Nghi Son (NGH)"
            value="Nghi Son (NGH)"
            {...getOverrideProps(overrides, "port5option72")}
          ></option>
          <option
            children="Ningde (NDE)"
            value="Ningde (NDE)"
            {...getOverrideProps(overrides, "port5option73")}
          ></option>
          <option
            children="Nunukan (NNX)"
            value="Nunukan (NNX)"
            {...getOverrideProps(overrides, "port5option74")}
          ></option>
          <option
            children="Oknha Mong Port (OMP)"
            value="Oknha Mong Port (OMP)"
            {...getOverrideProps(overrides, "port5option75")}
          ></option>
          <option
            children="Onomichi (ONO)"
            value="Onomichi (ONO)"
            {...getOverrideProps(overrides, "port5option76")}
          ></option>
          <option
            children="Padang - Telux Buyur (TBR)"
            value="Padang - Telux Buyur (TBR)"
            {...getOverrideProps(overrides, "port5option77")}
          ></option>
          <option
            children="PAKAN Baru (PKRU)"
            value="PAKAN Baru (PKRU)"
            {...getOverrideProps(overrides, "port5option78")}
          ></option>
          <option
            children="Palembang (PLB)"
            value="Palembang (PLB)"
            {...getOverrideProps(overrides, "port5option79")}
          ></option>
          <option
            children="Panjang (PNJ)"
            value="Panjang (PNJ)"
            {...getOverrideProps(overrides, "port5option80")}
          ></option>
          <option
            children="Pasir Gudang (PAS)"
            value="Pasir Gudang (PAS)"
            {...getOverrideProps(overrides, "port5option81")}
          ></option>
          <option
            children="Patimban (PTB)"
            value="Patimban (PTB)"
            {...getOverrideProps(overrides, "port5option82")}
          ></option>
          <option
            children="Pattani (PTN)"
            value="Pattani (PTN)"
            {...getOverrideProps(overrides, "port5option83")}
          ></option>
          <option
            children="Penang (PNG)"
            value="Penang (PNG)"
            {...getOverrideProps(overrides, "port5option84")}
          ></option>
          <option
            children="Phnom Penh (PNH)"
            value="Phnom Penh (PNH)"
            {...getOverrideProps(overrides, "port5option85")}
          ></option>
          <option
            children="Phra Chulachomklao Fort (PCF)"
            value="Phra Chulachomklao Fort (PCF)"
            {...getOverrideProps(overrides, "port5option86")}
          ></option>
          <option
            children="Phuket (HKT)"
            value="Phuket (HKT)"
            {...getOverrideProps(overrides, "port5option87")}
          ></option>
          <option
            children="Phumy (PHU)"
            value="Phumy (PHU)"
            {...getOverrideProps(overrides, "port5option88")}
          ></option>
          <option
            children="Plathong Oil Rig (PATO)"
            value="Plathong Oil Rig (PATO)"
            {...getOverrideProps(overrides, "port5option89")}
          ></option>
          <option
            children="Pontianak (POT)"
            value="Pontianak (POT)"
            {...getOverrideProps(overrides, "port5option90")}
          ></option>
          <option
            children="Port Klang (PKL)"
            value="Port Klang (PKL)"
            {...getOverrideProps(overrides, "port5option91")}
          ></option>
          <option
            children="Port Moresby (PGPOM)"
            value="Port Moresby (PGPOM)"
            {...getOverrideProps(overrides, "port5option92")}
          ></option>
          <option
            children="Poso (POSO)"
            value="Poso (POSO)"
            {...getOverrideProps(overrides, "port5option93")}
          ></option>
          <option
            children="Pusan (PUS)"
            value="Pusan (PUS)"
            {...getOverrideProps(overrides, "port5option94")}
          ></option>
          <option
            children="Quinzhou (QZH)"
            value="Quinzhou (QZH)"
            {...getOverrideProps(overrides, "port5option95")}
          ></option>
          <option
            children="Quy Nhon (QNN)"
            value="Quy Nhon (QNN)"
            {...getOverrideProps(overrides, "port5option96")}
          ></option>
          <option
            children="Ranong (UNN)"
            value="Ranong (UNN)"
            {...getOverrideProps(overrides, "port5option97")}
          ></option>
          <option
            children="Rayong (IRPC)"
            value="Rayong (IRPC)"
            {...getOverrideProps(overrides, "port5option98")}
          ></option>
          <option
            children="Sampit (SMQ)"
            value="Sampit (SMQ)"
            {...getOverrideProps(overrides, "port5option99")}
          ></option>
          <option
            children="Sandakan (SAN)"
            value="Sandakan (SAN)"
            {...getOverrideProps(overrides, "port5option100")}
          ></option>
          <option
            children="Sarawak (SRW)"
            value="Sarawak (SRW)"
            {...getOverrideProps(overrides, "port5option101")}
          ></option>
          <option
            children="Sarekei (SRK)"
            value="Sarekei (SRK)"
            {...getOverrideProps(overrides, "port5option102")}
          ></option>
          <option
            children="Sattahip (SATP)"
            value="Sattahip (SATP)"
            {...getOverrideProps(overrides, "port5option103")}
          ></option>
          <option
            children="Semarang - Tanjung Emas (SRG)"
            value="Semarang - Tanjung Emas (SRG)"
            {...getOverrideProps(overrides, "port5option104")}
          ></option>
          <option
            children="Semarang (SRG)"
            value="Semarang (SRG)"
            {...getOverrideProps(overrides, "port5option105")}
          ></option>
          <option
            children="Sibu (SIB)"
            value="Sibu (SIB)"
            {...getOverrideProps(overrides, "port5option106")}
          ></option>
          <option
            children="Singapore (SG)"
            value="Singapore (SG)"
            {...getOverrideProps(overrides, "port5option107")}
          ></option>
          <option
            children="Sipitang (SIP)"
            value="Sipitang (SIP)"
            {...getOverrideProps(overrides, "port5option108")}
          ></option>
          <option
            children="Son Duong (SOD)"
            value="Son Duong (SOD)"
            {...getOverrideProps(overrides, "port5option109")}
          ></option>
          <option
            children="Songkhla (SK)"
            value="Songkhla (SK)"
            {...getOverrideProps(overrides, "port5option110")}
          ></option>
          <option
            children="Srihanoville (SIH)"
            value="Srihanoville (SIH)"
            {...getOverrideProps(overrides, "port5option111")}
          ></option>
          <option
            children="Sriracha Harbor (SRC)"
            value="Sriracha Harbor (SRC)"
            {...getOverrideProps(overrides, "port5option112")}
          ></option>
          <option
            children="Sritama Jetty (STM)"
            value="Sritama Jetty (STM)"
            {...getOverrideProps(overrides, "port5option113")}
          ></option>
          <option
            children="Steung Hav (SHV)"
            value="Steung Hav (SHV)"
            {...getOverrideProps(overrides, "port5option114")}
          ></option>
          <option
            children="Sungai Guntung (SGGT)"
            value="Sungai Guntung (SGGT)"
            {...getOverrideProps(overrides, "port5option115")}
          ></option>
          <option
            children="Surabaya (SUBY)"
            value="Surabaya (SUBY)"
            {...getOverrideProps(overrides, "port5option116")}
          ></option>
          <option
            children="Surat Thanee (SRT)"
            value="Surat Thanee (SRT)"
            {...getOverrideProps(overrides, "port5option117")}
          ></option>
          <option
            children="Tacloban (TAC)"
            value="Tacloban (TAC)"
            {...getOverrideProps(overrides, "port5option118")}
          ></option>
          <option
            children="Tagbilaran (TAG)"
            value="Tagbilaran (TAG)"
            {...getOverrideProps(overrides, "port5option119")}
          ></option>
          <option
            children="Tanjong Manis (TGM)"
            value="Tanjong Manis (TGM)"
            {...getOverrideProps(overrides, "port5option120")}
          ></option>
          <option
            children="Tanjung Batu (TJQ)"
            value="Tanjung Batu (TJQ)"
            {...getOverrideProps(overrides, "port5option121")}
          ></option>
          <option
            children="Tanjung Priok (TP)"
            value="Tanjung Priok (TP)"
            {...getOverrideProps(overrides, "port5option122")}
          ></option>
          <option
            children="Tarjun (TAR)"
            value="Tarjun (TAR)"
            {...getOverrideProps(overrides, "port5option123")}
          ></option>
          <option
            children="Tawau (TAW)"
            value="Tawau (TAW)"
            {...getOverrideProps(overrides, "port5option124")}
          ></option>
          <option
            children="Terengganu (TGG)"
            value="Terengganu (TGG)"
            {...getOverrideProps(overrides, "port5option125")}
          ></option>
          <option
            children="Tha Sala (TSL)"
            value="Tha Sala (TSL)"
            {...getOverrideProps(overrides, "port5option126")}
          ></option>
          <option
            children="Tsukumi (TSUM)"
            value="Tsukumi (TSUM)"
            {...getOverrideProps(overrides, "port5option127")}
          ></option>
          <option
            children="Vung Ang (VAG)"
            value="Vung Ang (VAG)"
            {...getOverrideProps(overrides, "port5option128")}
          ></option>
          <option
            children="Vung Tau (VUT)"
            value="Vung Tau (VUT)"
            {...getOverrideProps(overrides, "port5option129")}
          ></option>
          <option
            children="Yangon (RGN)"
            value="Yangon (RGN)"
            {...getOverrideProps(overrides, "port5option130")}
          ></option>
        </SelectField>
        <TextField
          label="Fees"
          type="number"
          step="any"
          value={port5_fees}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                Field4,
                vessel_ht1,
                vessel_hn5,
                vessel_hn7,
                vessel_hn9,
                vessel_hn10,
                vessel_ht20,
                vessel_ht21,
                port1,
                port1_fees,
                port1_port_call,
                port1_crane_usage,
                port2,
                port2_fees,
                port2_port_call,
                port2_crane_usage,
                port3,
                port3_fees,
                port3_port_call,
                port3_crane_usage,
                port4,
                port4_fees,
                port4_port_call,
                port4_crane_usage,
                port5,
                port5_fees: value,
                port6,
                port6_fees,
                cargo1,
                cargo1_quantity,
                cargo1_rate,
                cargo2,
                cargo2_quantity,
                cargo2_rate,
                cargo3,
                cargo3_quantity,
                cargo3_rate,
                cargo4,
                cargo4_quantity,
                cargo4_rate,
                cargo5,
                cargo5_quantity,
                cargo5_rate,
                cargo6,
                cargo6_quantity,
                cargo6_rate,
                bunker_rate,
                diesel_rate,
                lube_rate,
                surveying_fees,
                Field0,
                miscCosts,
                craneUsage,
                portDays,
              };
              const result = onChange(modelFields);
              value = result?.port5_fees ?? value;
            }
            if (errors.port5_fees?.hasError) {
              runValidationTasks("port5_fees", value);
            }
            setPort5_fees(value);
          }}
          onBlur={() => runValidationTasks("port5_fees", port5_fees)}
          errorMessage={errors.port5_fees?.errorMessage}
          hasError={errors.port5_fees?.hasError}
          {...getOverrideProps(overrides, "port5_fees")}
        ></TextField>
      </Grid>
      <Heading
        children="Port 6"
        {...getOverrideProps(overrides, "SectionalElement14")}
      ></Heading>
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(2, auto)"
        {...getOverrideProps(overrides, "RowGrid26")}
      >
        <SelectField
          label="Name"
          placeholder="Please select an option"
          isDisabled={false}
          value={port6}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                Field4,
                vessel_ht1,
                vessel_hn5,
                vessel_hn7,
                vessel_hn9,
                vessel_hn10,
                vessel_ht20,
                vessel_ht21,
                port1,
                port1_fees,
                port1_port_call,
                port1_crane_usage,
                port2,
                port2_fees,
                port2_port_call,
                port2_crane_usage,
                port3,
                port3_fees,
                port3_port_call,
                port3_crane_usage,
                port4,
                port4_fees,
                port4_port_call,
                port4_crane_usage,
                port5,
                port5_fees,
                port6: value,
                port6_fees,
                cargo1,
                cargo1_quantity,
                cargo1_rate,
                cargo2,
                cargo2_quantity,
                cargo2_rate,
                cargo3,
                cargo3_quantity,
                cargo3_rate,
                cargo4,
                cargo4_quantity,
                cargo4_rate,
                cargo5,
                cargo5_quantity,
                cargo5_rate,
                cargo6,
                cargo6_quantity,
                cargo6_rate,
                bunker_rate,
                diesel_rate,
                lube_rate,
                surveying_fees,
                Field0,
                miscCosts,
                craneUsage,
                portDays,
              };
              const result = onChange(modelFields);
              value = result?.port6 ?? value;
            }
            if (errors.port6?.hasError) {
              runValidationTasks("port6", value);
            }
            setPort6(value);
          }}
          onBlur={() => runValidationTasks("port6", port6)}
          errorMessage={errors.port6?.errorMessage}
          hasError={errors.port6?.hasError}
          {...getOverrideProps(overrides, "port6")}
        >
          <option
            children="NIL"
            value="NIL"
            {...getOverrideProps(overrides, "port6option0")}
          ></option>
          <option
            children="Ayutthaya - Bangpain (AB)"
            value="Ayutthaya - Bangpain (AB)"
            {...getOverrideProps(overrides, "port6option1")}
          ></option>
          <option
            children="Ayutthaya - Nakorn Luang (ANL)"
            value="Ayutthaya - Nakorn Luang (ANL)"
            {...getOverrideProps(overrides, "port6option2")}
          ></option>
          <option
            children="Bahodopi (BHDP)"
            value="Bahodopi (BHDP)"
            {...getOverrideProps(overrides, "port6option3")}
          ></option>
          <option
            children="Balikpapan (BPN)"
            value="Balikpapan (BPN)"
            {...getOverrideProps(overrides, "port6option4")}
          ></option>
          <option
            children="Bang Sapan (BS)"
            value="Bang Sapan (BS)"
            {...getOverrideProps(overrides, "port6option5")}
          ></option>
          <option
            children="Bangkok (BK)"
            value="Bangkok (BK)"
            {...getOverrideProps(overrides, "port6option6")}
          ></option>
          <option
            children="Bangpakong (BAK)"
            value="Bangpakong (BAK)"
            {...getOverrideProps(overrides, "port6option7")}
          ></option>
          <option
            children="Banyuwangi - Tanjung Wangi (BJU)"
            value="Banyuwangi - Tanjung Wangi (BJU)"
            {...getOverrideProps(overrides, "port6option8")}
          ></option>
          <option
            children="Batam (BAT)"
            value="Batam (BAT)"
            {...getOverrideProps(overrides, "port6option9")}
          ></option>
          <option
            children="Beihai (BHY)"
            value="Beihai (BHY)"
            {...getOverrideProps(overrides, "port6option10")}
          ></option>
          <option
            children="Belawan (BRW)"
            value="Belawan (BRW)"
            {...getOverrideProps(overrides, "port6option11")}
          ></option>
          <option
            children="Benoa (Bali) (BAO)"
            value="Benoa (Bali) (BAO)"
            {...getOverrideProps(overrides, "port6option12")}
          ></option>
          <option
            children="Bintan (BTN)"
            value="Bintan (BTN)"
            {...getOverrideProps(overrides, "port6option13")}
          ></option>
          <option
            children="Bintulu (BIN)"
            value="Bintulu (BIN)"
            {...getOverrideProps(overrides, "port6option14")}
          ></option>
          <option
            children="Bitung (BIT)"
            value="Bitung (BIT)"
            {...getOverrideProps(overrides, "port6option15")}
          ></option>
          <option
            children="Bontang (BXT)"
            value="Bontang (BXT)"
            {...getOverrideProps(overrides, "port6option16")}
          ></option>
          <option
            children="Bourbon (BOUR)"
            value="Bourbon (BOUR)"
            {...getOverrideProps(overrides, "port6option17")}
          ></option>
          <option
            children="Brunei (BRU)"
            value="Brunei (BRU)"
            {...getOverrideProps(overrides, "port6option18")}
          ></option>
          <option
            children="Cai Lan (CLN)"
            value="Cai Lan (CLN)"
            {...getOverrideProps(overrides, "port6option19")}
          ></option>
          <option
            children="Cam Pha (CPH)"
            value="Cam Pha (CPH)"
            {...getOverrideProps(overrides, "port6option20")}
          ></option>
          <option
            children="Can Tho (VCA)"
            value="Can Tho (VCA)"
            {...getOverrideProps(overrides, "port6option21")}
          ></option>
          <option
            children="Cat Lai (CLI)"
            value="Cat Lai (CLI)"
            {...getOverrideProps(overrides, "port6option22")}
          ></option>
          <option
            children="Cayagan de Oro City (Macabalan wharf) (CDO)"
            value="Cayagan de Oro City (Macabalan wharf) (CDO)"
            {...getOverrideProps(overrides, "port6option23")}
          ></option>
          <option
            children="Century Harbour (MHI)"
            value="Century Harbour (MHI)"
            {...getOverrideProps(overrides, "port6option24")}
          ></option>
          <option
            children="Chantaburi LaemSing (CLS)"
            value="Chantaburi LaemSing (CLS)"
            {...getOverrideProps(overrides, "port6option25")}
          ></option>
          <option
            children="Chittagong (CTG)"
            value="Chittagong (CTG)"
            {...getOverrideProps(overrides, "port6option26")}
          ></option>
          <option
            children="Cigading (CIG)"
            value="Cigading (CIG)"
            {...getOverrideProps(overrides, "port6option27")}
          ></option>
          <option
            children="Danang (DAD)"
            value="Danang (DAD)"
            {...getOverrideProps(overrides, "port6option28")}
          ></option>
          <option
            children="Davao (Sasa Wharf) (DVO)"
            value="Davao (Sasa Wharf) (DVO)"
            {...getOverrideProps(overrides, "port6option29")}
          ></option>
          <option
            children="Dhaka (DKA)"
            value="Dhaka (DKA)"
            {...getOverrideProps(overrides, "port6option30")}
          ></option>
          <option
            children="Dumai (DMI)"
            value="Dumai (DMI)"
            {...getOverrideProps(overrides, "port6option31")}
          ></option>
          <option
            children="Dung Quat (DQT)"
            value="Dung Quat (DQT)"
            {...getOverrideProps(overrides, "port6option32")}
          ></option>
          <option
            children="Fangcheng (FAN)"
            value="Fangcheng (FAN)"
            {...getOverrideProps(overrides, "port6option33")}
          ></option>
          <option
            children="Futong (FTG)"
            value="Futong (FTG)"
            {...getOverrideProps(overrides, "port6option34")}
          ></option>
          <option
            children="Godau port  (GDP)"
            value="Godau port  (GDP)"
            {...getOverrideProps(overrides, "port6option35")}
          ></option>
          <option
            children="Haiphong (HPH)"
            value="Haiphong (HPH)"
            {...getOverrideProps(overrides, "port6option36")}
          ></option>
          <option
            children="Halong Bay (HLG)"
            value="Halong Bay (HLG)"
            {...getOverrideProps(overrides, "port6option37")}
          ></option>
          <option
            children="HO CHI MINH (HCM)"
            value="HO CHI MINH (HCM)"
            {...getOverrideProps(overrides, "port6option38")}
          ></option>
          <option
            children="Hon Gai (HON)"
            value="Hon Gai (HON)"
            {...getOverrideProps(overrides, "port6option39")}
          ></option>
          <option
            children="Hong Kong (HKG)"
            value="Hong Kong (HKG)"
            {...getOverrideProps(overrides, "port6option40")}
          ></option>
          <option
            children="Jakarta (JAK)"
            value="Jakarta (JAK)"
            {...getOverrideProps(overrides, "port6option41")}
          ></option>
          <option
            children="Jambi (JBI)"
            value="Jambi (JBI)"
            {...getOverrideProps(overrides, "port6option42")}
          ></option>
          <option
            children="K.K. Kota Kinabalu (KK)"
            value="K.K. Kota Kinabalu (KK)"
            {...getOverrideProps(overrides, "port6option43")}
          ></option>
          <option
            children="Kampot (KMP)"
            value="Kampot (KMP)"
            {...getOverrideProps(overrides, "port6option44")}
          ></option>
          <option
            children="Kantang (KTG)"
            value="Kantang (KTG)"
            {...getOverrideProps(overrides, "port6option45")}
          ></option>
          <option
            children="Kedah (KKH)"
            value="Kedah (KKH)"
            {...getOverrideProps(overrides, "port6option46")}
          ></option>
          <option
            children="Kelantan (KLT)"
            value="Kelantan (KLT)"
            {...getOverrideProps(overrides, "port6option47")}
          ></option>
          <option
            children="Kemaman (KMN)"
            value="Kemaman (KMN)"
            {...getOverrideProps(overrides, "port6option48")}
          ></option>
          <option
            children="Khanom (KHM)"
            value="Khanom (KHM)"
            {...getOverrideProps(overrides, "port6option49")}
          ></option>
          <option
            children="Ko Sichang (KSI)"
            value="Ko Sichang (KSI)"
            {...getOverrideProps(overrides, "port6option50")}
          ></option>
          <option
            children="Kolkata (CCU)"
            value="Kolkata (CCU)"
            {...getOverrideProps(overrides, "port6option51")}
          ></option>
          <option
            children="Kor Samui (KSM)"
            value="Kor Samui (KSM)"
            {...getOverrideProps(overrides, "port6option52")}
          ></option>
          <option
            children="Kuantan (KT)"
            value="Kuantan (KT)"
            {...getOverrideProps(overrides, "port6option53")}
          ></option>
          <option
            children="Kuching (KUC)"
            value="Kuching (KUC)"
            {...getOverrideProps(overrides, "port6option54")}
          ></option>
          <option
            children="Labuan (LBN)"
            value="Labuan (LBN)"
            {...getOverrideProps(overrides, "port6option55")}
          ></option>
          <option
            children="Laem Chabang (LCB)"
            value="Laem Chabang (LCB)"
            {...getOverrideProps(overrides, "port6option56")}
          ></option>
          <option
            children="Lahad Datu (LDU)"
            value="Lahad Datu (LDU)"
            {...getOverrideProps(overrides, "port6option57")}
          ></option>
          <option
            children="Lhokseumawe (LHOK)"
            value="Lhokseumawe (LHOK)"
            {...getOverrideProps(overrides, "port6option58")}
          ></option>
          <option
            children="Lumut (LUM)"
            value="Lumut (LUM)"
            {...getOverrideProps(overrides, "port6option59")}
          ></option>
          <option
            children="Maeklong (Firesun) (MKG)"
            value="Maeklong (Firesun) (MKG)"
            {...getOverrideProps(overrides, "port6option60")}
          ></option>
          <option
            children="Mahachai (MHI)"
            value="Mahachai (MHI)"
            {...getOverrideProps(overrides, "port6option61")}
          ></option>
          <option
            children="Makassar (MAK)"
            value="Makassar (MAK)"
            {...getOverrideProps(overrides, "port6option62")}
          ></option>
          <option
            children="Malacca (MAL)"
            value="Malacca (MAL)"
            {...getOverrideProps(overrides, "port6option63")}
          ></option>
          <option
            children="Manila Habour (MNL)"
            value="Manila Habour (MNL)"
            {...getOverrideProps(overrides, "port6option64")}
          ></option>
          <option
            children="Maptaphut (MAT)"
            value="Maptaphut (MAT)"
            {...getOverrideProps(overrides, "port6option65")}
          ></option>
          <option
            children="Marunda (MRD)"
            value="Marunda (MRD)"
            {...getOverrideProps(overrides, "port6option66")}
          ></option>
          <option
            children="Mawei Fuzhou (FOC)"
            value="Mawei Fuzhou (FOC)"
            {...getOverrideProps(overrides, "port6option67")}
          ></option>
          <option
            children="Muara (MUR)"
            value="Muara (MUR)"
            {...getOverrideProps(overrides, "port6option68")}
          ></option>
          <option
            children="My Tho (MUT)"
            value="My Tho (MUT)"
            {...getOverrideProps(overrides, "port6option69")}
          ></option>
          <option
            children="Nan Tong (NTG)"
            value="Nan Tong (NTG)"
            {...getOverrideProps(overrides, "port6option70")}
          ></option>
          <option
            children="Narathiwat (NAW)"
            value="Narathiwat (NAW)"
            {...getOverrideProps(overrides, "port6option71")}
          ></option>
          <option
            children="Nghi Son (NGH)"
            value="Nghi Son (NGH)"
            {...getOverrideProps(overrides, "port6option72")}
          ></option>
          <option
            children="Ningde (NDE)"
            value="Ningde (NDE)"
            {...getOverrideProps(overrides, "port6option73")}
          ></option>
          <option
            children="Nunukan (NNX)"
            value="Nunukan (NNX)"
            {...getOverrideProps(overrides, "port6option74")}
          ></option>
          <option
            children="Oknha Mong Port (OMP)"
            value="Oknha Mong Port (OMP)"
            {...getOverrideProps(overrides, "port6option75")}
          ></option>
          <option
            children="Onomichi (ONO)"
            value="Onomichi (ONO)"
            {...getOverrideProps(overrides, "port6option76")}
          ></option>
          <option
            children="Padang - Telux Buyur (TBR)"
            value="Padang - Telux Buyur (TBR)"
            {...getOverrideProps(overrides, "port6option77")}
          ></option>
          <option
            children="PAKAN Baru (PKRU)"
            value="PAKAN Baru (PKRU)"
            {...getOverrideProps(overrides, "port6option78")}
          ></option>
          <option
            children="Palembang (PLB)"
            value="Palembang (PLB)"
            {...getOverrideProps(overrides, "port6option79")}
          ></option>
          <option
            children="Panjang (PNJ)"
            value="Panjang (PNJ)"
            {...getOverrideProps(overrides, "port6option80")}
          ></option>
          <option
            children="Pasir Gudang (PAS)"
            value="Pasir Gudang (PAS)"
            {...getOverrideProps(overrides, "port6option81")}
          ></option>
          <option
            children="Patimban (PTB)"
            value="Patimban (PTB)"
            {...getOverrideProps(overrides, "port6option82")}
          ></option>
          <option
            children="Pattani (PTN)"
            value="Pattani (PTN)"
            {...getOverrideProps(overrides, "port6option83")}
          ></option>
          <option
            children="Penang (PNG)"
            value="Penang (PNG)"
            {...getOverrideProps(overrides, "port6option84")}
          ></option>
          <option
            children="Phnom Penh (PNH)"
            value="Phnom Penh (PNH)"
            {...getOverrideProps(overrides, "port6option85")}
          ></option>
          <option
            children="Phra Chulachomklao Fort (PCF)"
            value="Phra Chulachomklao Fort (PCF)"
            {...getOverrideProps(overrides, "port6option86")}
          ></option>
          <option
            children="Phuket (HKT)"
            value="Phuket (HKT)"
            {...getOverrideProps(overrides, "port6option87")}
          ></option>
          <option
            children="Phumy (PHU)"
            value="Phumy (PHU)"
            {...getOverrideProps(overrides, "port6option88")}
          ></option>
          <option
            children="Plathong Oil Rig (PATO)"
            value="Plathong Oil Rig (PATO)"
            {...getOverrideProps(overrides, "port6option89")}
          ></option>
          <option
            children="Pontianak (POT)"
            value="Pontianak (POT)"
            {...getOverrideProps(overrides, "port6option90")}
          ></option>
          <option
            children="Port Klang (PKL)"
            value="Port Klang (PKL)"
            {...getOverrideProps(overrides, "port6option91")}
          ></option>
          <option
            children="Port Moresby (PGPOM)"
            value="Port Moresby (PGPOM)"
            {...getOverrideProps(overrides, "port6option92")}
          ></option>
          <option
            children="Poso (POSO)"
            value="Poso (POSO)"
            {...getOverrideProps(overrides, "port6option93")}
          ></option>
          <option
            children="Pusan (PUS)"
            value="Pusan (PUS)"
            {...getOverrideProps(overrides, "port6option94")}
          ></option>
          <option
            children="Quinzhou (QZH)"
            value="Quinzhou (QZH)"
            {...getOverrideProps(overrides, "port6option95")}
          ></option>
          <option
            children="Quy Nhon (QNN)"
            value="Quy Nhon (QNN)"
            {...getOverrideProps(overrides, "port6option96")}
          ></option>
          <option
            children="Ranong (UNN)"
            value="Ranong (UNN)"
            {...getOverrideProps(overrides, "port6option97")}
          ></option>
          <option
            children="Rayong (IRPC)"
            value="Rayong (IRPC)"
            {...getOverrideProps(overrides, "port6option98")}
          ></option>
          <option
            children="Sampit (SMQ)"
            value="Sampit (SMQ)"
            {...getOverrideProps(overrides, "port6option99")}
          ></option>
          <option
            children="Sandakan (SAN)"
            value="Sandakan (SAN)"
            {...getOverrideProps(overrides, "port6option100")}
          ></option>
          <option
            children="Sarawak (SRW)"
            value="Sarawak (SRW)"
            {...getOverrideProps(overrides, "port6option101")}
          ></option>
          <option
            children="Sarekei (SRK)"
            value="Sarekei (SRK)"
            {...getOverrideProps(overrides, "port6option102")}
          ></option>
          <option
            children="Sattahip (SATP)"
            value="Sattahip (SATP)"
            {...getOverrideProps(overrides, "port6option103")}
          ></option>
          <option
            children="Semarang - Tanjung Emas (SRG)"
            value="Semarang - Tanjung Emas (SRG)"
            {...getOverrideProps(overrides, "port6option104")}
          ></option>
          <option
            children="Semarang (SRG)"
            value="Semarang (SRG)"
            {...getOverrideProps(overrides, "port6option105")}
          ></option>
          <option
            children="Sibu (SIB)"
            value="Sibu (SIB)"
            {...getOverrideProps(overrides, "port6option106")}
          ></option>
          <option
            children="Singapore (SG)"
            value="Singapore (SG)"
            {...getOverrideProps(overrides, "port6option107")}
          ></option>
          <option
            children="Sipitang (SIP)"
            value="Sipitang (SIP)"
            {...getOverrideProps(overrides, "port6option108")}
          ></option>
          <option
            children="Son Duong (SOD)"
            value="Son Duong (SOD)"
            {...getOverrideProps(overrides, "port6option109")}
          ></option>
          <option
            children="Songkhla (SK)"
            value="Songkhla (SK)"
            {...getOverrideProps(overrides, "port6option110")}
          ></option>
          <option
            children="Srihanoville (SIH)"
            value="Srihanoville (SIH)"
            {...getOverrideProps(overrides, "port6option111")}
          ></option>
          <option
            children="Sriracha Harbor (SRC)"
            value="Sriracha Harbor (SRC)"
            {...getOverrideProps(overrides, "port6option112")}
          ></option>
          <option
            children="Sritama Jetty (STM)"
            value="Sritama Jetty (STM)"
            {...getOverrideProps(overrides, "port6option113")}
          ></option>
          <option
            children="Steung Hav (SHV)"
            value="Steung Hav (SHV)"
            {...getOverrideProps(overrides, "port6option114")}
          ></option>
          <option
            children="Sungai Guntung (SGGT)"
            value="Sungai Guntung (SGGT)"
            {...getOverrideProps(overrides, "port6option115")}
          ></option>
          <option
            children="Surabaya (SUBY)"
            value="Surabaya (SUBY)"
            {...getOverrideProps(overrides, "port6option116")}
          ></option>
          <option
            children="Surat Thanee (SRT)"
            value="Surat Thanee (SRT)"
            {...getOverrideProps(overrides, "port6option117")}
          ></option>
          <option
            children="Tacloban (TAC)"
            value="Tacloban (TAC)"
            {...getOverrideProps(overrides, "port6option118")}
          ></option>
          <option
            children="Tagbilaran (TAG)"
            value="Tagbilaran (TAG)"
            {...getOverrideProps(overrides, "port6option119")}
          ></option>
          <option
            children="Tanjong Manis (TGM)"
            value="Tanjong Manis (TGM)"
            {...getOverrideProps(overrides, "port6option120")}
          ></option>
          <option
            children="Tanjung Batu (TJQ)"
            value="Tanjung Batu (TJQ)"
            {...getOverrideProps(overrides, "port6option121")}
          ></option>
          <option
            children="Tanjung Priok (TP)"
            value="Tanjung Priok (TP)"
            {...getOverrideProps(overrides, "port6option122")}
          ></option>
          <option
            children="Tarjun (TAR)"
            value="Tarjun (TAR)"
            {...getOverrideProps(overrides, "port6option123")}
          ></option>
          <option
            children="Tawau (TAW)"
            value="Tawau (TAW)"
            {...getOverrideProps(overrides, "port6option124")}
          ></option>
          <option
            children="Terengganu (TGG)"
            value="Terengganu (TGG)"
            {...getOverrideProps(overrides, "port6option125")}
          ></option>
          <option
            children="Tha Sala (TSL)"
            value="Tha Sala (TSL)"
            {...getOverrideProps(overrides, "port6option126")}
          ></option>
          <option
            children="Tsukumi (TSUM)"
            value="Tsukumi (TSUM)"
            {...getOverrideProps(overrides, "port6option127")}
          ></option>
          <option
            children="Vung Ang (VAG)"
            value="Vung Ang (VAG)"
            {...getOverrideProps(overrides, "port6option128")}
          ></option>
          <option
            children="Vung Tau (VUT)"
            value="Vung Tau (VUT)"
            {...getOverrideProps(overrides, "port6option129")}
          ></option>
          <option
            children="Yangon (RGN)"
            value="Yangon (RGN)"
            {...getOverrideProps(overrides, "port6option130")}
          ></option>
        </SelectField>
        <TextField
          label="Fees"
          type="number"
          step="any"
          value={port6_fees}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                Field4,
                vessel_ht1,
                vessel_hn5,
                vessel_hn7,
                vessel_hn9,
                vessel_hn10,
                vessel_ht20,
                vessel_ht21,
                port1,
                port1_fees,
                port1_port_call,
                port1_crane_usage,
                port2,
                port2_fees,
                port2_port_call,
                port2_crane_usage,
                port3,
                port3_fees,
                port3_port_call,
                port3_crane_usage,
                port4,
                port4_fees,
                port4_port_call,
                port4_crane_usage,
                port5,
                port5_fees,
                port6,
                port6_fees: value,
                cargo1,
                cargo1_quantity,
                cargo1_rate,
                cargo2,
                cargo2_quantity,
                cargo2_rate,
                cargo3,
                cargo3_quantity,
                cargo3_rate,
                cargo4,
                cargo4_quantity,
                cargo4_rate,
                cargo5,
                cargo5_quantity,
                cargo5_rate,
                cargo6,
                cargo6_quantity,
                cargo6_rate,
                bunker_rate,
                diesel_rate,
                lube_rate,
                surveying_fees,
                Field0,
                miscCosts,
                craneUsage,
                portDays,
              };
              const result = onChange(modelFields);
              value = result?.port6_fees ?? value;
            }
            if (errors.port6_fees?.hasError) {
              runValidationTasks("port6_fees", value);
            }
            setPort6_fees(value);
          }}
          onBlur={() => runValidationTasks("port6_fees", port6_fees)}
          errorMessage={errors.port6_fees?.errorMessage}
          hasError={errors.port6_fees?.hasError}
          {...getOverrideProps(overrides, "port6_fees")}
        ></TextField>
      </Grid>
      <Divider
        orientation="horizontal"
        {...getOverrideProps(overrides, "SectionalElement1")}
      ></Divider>
      <Heading
        children="Cargo 1"
        {...getOverrideProps(overrides, "SectionalElement0")}
      ></Heading>
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(3, auto)"
        {...getOverrideProps(overrides, "RowGrid29")}
      >
        <SelectField
          label="Type"
          placeholder="Please select an option"
          isDisabled={false}
          value={cargo1}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                Field4,
                vessel_ht1,
                vessel_hn5,
                vessel_hn7,
                vessel_hn9,
                vessel_hn10,
                vessel_ht20,
                vessel_ht21,
                port1,
                port1_fees,
                port1_port_call,
                port1_crane_usage,
                port2,
                port2_fees,
                port2_port_call,
                port2_crane_usage,
                port3,
                port3_fees,
                port3_port_call,
                port3_crane_usage,
                port4,
                port4_fees,
                port4_port_call,
                port4_crane_usage,
                port5,
                port5_fees,
                port6,
                port6_fees,
                cargo1: value,
                cargo1_quantity,
                cargo1_rate,
                cargo2,
                cargo2_quantity,
                cargo2_rate,
                cargo3,
                cargo3_quantity,
                cargo3_rate,
                cargo4,
                cargo4_quantity,
                cargo4_rate,
                cargo5,
                cargo5_quantity,
                cargo5_rate,
                cargo6,
                cargo6_quantity,
                cargo6_rate,
                bunker_rate,
                diesel_rate,
                lube_rate,
                surveying_fees,
                Field0,
                miscCosts,
                craneUsage,
                portDays,
              };
              const result = onChange(modelFields);
              value = result?.cargo1 ?? value;
            }
            if (errors.cargo1?.hasError) {
              runValidationTasks("cargo1", value);
            }
            setCargo1(value);
          }}
          onBlur={() => runValidationTasks("cargo1", cargo1)}
          errorMessage={errors.cargo1?.errorMessage}
          hasError={errors.cargo1?.hasError}
          {...getOverrideProps(overrides, "cargo1")}
        >
          <option
            children="NIL"
            value="NIL"
            {...getOverrideProps(overrides, "cargo1option0")}
          ></option>
          <option
            children="Barite"
            value="Barite"
            {...getOverrideProps(overrides, "cargo1option1")}
          ></option>
          <option
            children="Barley"
            value="Barley"
            {...getOverrideProps(overrides, "cargo1option2")}
          ></option>
          <option
            children="Charcoal"
            value="Charcoal"
            {...getOverrideProps(overrides, "cargo1option3")}
          ></option>
          <option
            children="Cold Rolled Coil"
            value="Cold Rolled Coil"
            {...getOverrideProps(overrides, "cargo1option4")}
          ></option>
          <option
            children="Containers"
            value="Containers"
            {...getOverrideProps(overrides, "cargo1option5")}
          ></option>
          <option
            children="Dickite"
            value="Dickite"
            {...getOverrideProps(overrides, "cargo1option6")}
          ></option>
          <option
            children="Dolomite"
            value="Dolomite"
            {...getOverrideProps(overrides, "cargo1option7")}
          ></option>
          <option
            children="Feldspar"
            value="Feldspar"
            {...getOverrideProps(overrides, "cargo1option8")}
          ></option>
          <option
            children="Fertilizer"
            value="Fertilizer"
            {...getOverrideProps(overrides, "cargo1option9")}
          ></option>
          <option
            children="Hot Rolled Coil"
            value="Hot Rolled Coil"
            {...getOverrideProps(overrides, "cargo1option10")}
          ></option>
          <option
            children="Maize"
            value="Maize"
            {...getOverrideProps(overrides, "cargo1option11")}
          ></option>
          <option
            children="Palm Kernel Shell (PKS)"
            value="Palm Kernel Shell (PKS)"
            {...getOverrideProps(overrides, "cargo1option12")}
          ></option>
          <option
            children="Palm Kernel Expeller (PKE)"
            value="Palm Kernel Expeller (PKE)"
            {...getOverrideProps(overrides, "cargo1option13")}
          ></option>
          <option
            children="Plastic Resin"
            value="Plastic Resin"
            {...getOverrideProps(overrides, "cargo1option14")}
          ></option>
          <option
            children="Project Cargo"
            value="Project Cargo"
            {...getOverrideProps(overrides, "cargo1option15")}
          ></option>
          <option
            children="Rice"
            value="Rice"
            {...getOverrideProps(overrides, "cargo1option16")}
          ></option>
          <option
            children="Salt"
            value="Salt"
            {...getOverrideProps(overrides, "cargo1option17")}
          ></option>
          <option
            children="Salt and Flour"
            value="Salt and Flour"
            {...getOverrideProps(overrides, "cargo1option18")}
          ></option>
          <option
            children="Silica Sand"
            value="Silica Sand"
            {...getOverrideProps(overrides, "cargo1option19")}
          ></option>
          <option
            children="Sodium Sulphate Anhydrous"
            value="Sodium Sulphate Anhydrous"
            {...getOverrideProps(overrides, "cargo1option20")}
          ></option>
          <option
            children="Soy Bean Meal"
            value="Soy Bean Meal"
            {...getOverrideProps(overrides, "cargo1option21")}
          ></option>
          <option
            children="Steel Coil"
            value="Steel Coil"
            {...getOverrideProps(overrides, "cargo1option22")}
          ></option>
          <option
            children="Tapioca"
            value="Tapioca"
            {...getOverrideProps(overrides, "cargo1option23")}
          ></option>
          <option
            children="Tapioca (Jumbo)"
            value="Tapioca (Jumbo)"
            {...getOverrideProps(overrides, "cargo1option24")}
          ></option>
          <option
            children="Tapioca Pellet"
            value="Tapioca Pellet"
            {...getOverrideProps(overrides, "cargo1option25")}
          ></option>
          <option
            children="Timber"
            value="Timber"
            {...getOverrideProps(overrides, "cargo1option26")}
          ></option>
          <option
            children="Urea"
            value="Urea"
            {...getOverrideProps(overrides, "cargo1option27")}
          ></option>
          <option
            children="Wheat"
            value="Wheat"
            {...getOverrideProps(overrides, "cargo1option28")}
          ></option>
          <option
            children="Wood Chips"
            value="Wood Chips"
            {...getOverrideProps(overrides, "cargo1option29")}
          ></option>
          <option
            children="Wood Pellets"
            value="Wood Pellets"
            {...getOverrideProps(overrides, "cargo1option30")}
          ></option>
        </SelectField>
        <TextField
          label="Quantity"
          isRequired={false}
          isReadOnly={false}
          type="number"
          step="any"
          value={cargo1_quantity}
          onChange={(e) => {
            let value = isNaN(parseFloat(e.target.value))
              ? e.target.value
              : parseFloat(e.target.value);
            if (onChange) {
              const modelFields = {
                Field4,
                vessel_ht1,
                vessel_hn5,
                vessel_hn7,
                vessel_hn9,
                vessel_hn10,
                vessel_ht20,
                vessel_ht21,
                port1,
                port1_fees,
                port1_port_call,
                port1_crane_usage,
                port2,
                port2_fees,
                port2_port_call,
                port2_crane_usage,
                port3,
                port3_fees,
                port3_port_call,
                port3_crane_usage,
                port4,
                port4_fees,
                port4_port_call,
                port4_crane_usage,
                port5,
                port5_fees,
                port6,
                port6_fees,
                cargo1,
                cargo1_quantity: value,
                cargo1_rate,
                cargo2,
                cargo2_quantity,
                cargo2_rate,
                cargo3,
                cargo3_quantity,
                cargo3_rate,
                cargo4,
                cargo4_quantity,
                cargo4_rate,
                cargo5,
                cargo5_quantity,
                cargo5_rate,
                cargo6,
                cargo6_quantity,
                cargo6_rate,
                bunker_rate,
                diesel_rate,
                lube_rate,
                surveying_fees,
                Field0,
                miscCosts,
                craneUsage,
                portDays,
              };
              const result = onChange(modelFields);
              value = result?.cargo1_quantity ?? value;
            }
            if (errors.cargo1_quantity?.hasError) {
              runValidationTasks("cargo1_quantity", value);
            }
            setCargo1_quantity(value);
          }}
          onBlur={() => runValidationTasks("cargo1_quantity", cargo1_quantity)}
          errorMessage={errors.cargo1_quantity?.errorMessage}
          hasError={errors.cargo1_quantity?.hasError}
          {...getOverrideProps(overrides, "cargo1_quantity")}
        ></TextField>
        <TextField
          label="Freight Rate"
          isRequired={false}
          isReadOnly={false}
          placeholder="$"
          type="number"
          step="any"
          value={cargo1_rate}
          onChange={(e) => {
            let value = isNaN(parseFloat(e.target.value))
              ? e.target.value
              : parseFloat(e.target.value);
            if (onChange) {
              const modelFields = {
                Field4,
                vessel_ht1,
                vessel_hn5,
                vessel_hn7,
                vessel_hn9,
                vessel_hn10,
                vessel_ht20,
                vessel_ht21,
                port1,
                port1_fees,
                port1_port_call,
                port1_crane_usage,
                port2,
                port2_fees,
                port2_port_call,
                port2_crane_usage,
                port3,
                port3_fees,
                port3_port_call,
                port3_crane_usage,
                port4,
                port4_fees,
                port4_port_call,
                port4_crane_usage,
                port5,
                port5_fees,
                port6,
                port6_fees,
                cargo1,
                cargo1_quantity,
                cargo1_rate: value,
                cargo2,
                cargo2_quantity,
                cargo2_rate,
                cargo3,
                cargo3_quantity,
                cargo3_rate,
                cargo4,
                cargo4_quantity,
                cargo4_rate,
                cargo5,
                cargo5_quantity,
                cargo5_rate,
                cargo6,
                cargo6_quantity,
                cargo6_rate,
                bunker_rate,
                diesel_rate,
                lube_rate,
                surveying_fees,
                Field0,
                miscCosts,
                craneUsage,
                portDays,
              };
              const result = onChange(modelFields);
              value = result?.cargo1_rate ?? value;
            }
            if (errors.cargo1_rate?.hasError) {
              runValidationTasks("cargo1_rate", value);
            }
            setCargo1_rate(value);
          }}
          onBlur={() => runValidationTasks("cargo1_rate", cargo1_rate)}
          errorMessage={errors.cargo1_rate?.errorMessage}
          hasError={errors.cargo1_rate?.hasError}
          {...getOverrideProps(overrides, "cargo1_rate")}
        ></TextField>
      </Grid>
      <Heading
        level={6}
        children="Cargo 2"
        {...getOverrideProps(overrides, "SectionalElement2")}
      ></Heading>
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(3, auto)"
        {...getOverrideProps(overrides, "RowGrid31")}
      >
        <SelectField
          label="Type"
          placeholder="Please select an option"
          isDisabled={false}
          value={cargo2}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                Field4,
                vessel_ht1,
                vessel_hn5,
                vessel_hn7,
                vessel_hn9,
                vessel_hn10,
                vessel_ht20,
                vessel_ht21,
                port1,
                port1_fees,
                port1_port_call,
                port1_crane_usage,
                port2,
                port2_fees,
                port2_port_call,
                port2_crane_usage,
                port3,
                port3_fees,
                port3_port_call,
                port3_crane_usage,
                port4,
                port4_fees,
                port4_port_call,
                port4_crane_usage,
                port5,
                port5_fees,
                port6,
                port6_fees,
                cargo1,
                cargo1_quantity,
                cargo1_rate,
                cargo2: value,
                cargo2_quantity,
                cargo2_rate,
                cargo3,
                cargo3_quantity,
                cargo3_rate,
                cargo4,
                cargo4_quantity,
                cargo4_rate,
                cargo5,
                cargo5_quantity,
                cargo5_rate,
                cargo6,
                cargo6_quantity,
                cargo6_rate,
                bunker_rate,
                diesel_rate,
                lube_rate,
                surveying_fees,
                Field0,
                miscCosts,
                craneUsage,
                portDays,
              };
              const result = onChange(modelFields);
              value = result?.cargo2 ?? value;
            }
            if (errors.cargo2?.hasError) {
              runValidationTasks("cargo2", value);
            }
            setCargo2(value);
          }}
          onBlur={() => runValidationTasks("cargo2", cargo2)}
          errorMessage={errors.cargo2?.errorMessage}
          hasError={errors.cargo2?.hasError}
          {...getOverrideProps(overrides, "cargo2")}
        >
          <option
            children="NIL"
            value="NIL"
            {...getOverrideProps(overrides, "cargo2option0")}
          ></option>
          <option
            children="Barite"
            value="Barite"
            {...getOverrideProps(overrides, "cargo2option1")}
          ></option>
          <option
            children="Barley"
            value="Barley"
            {...getOverrideProps(overrides, "cargo2option2")}
          ></option>
          <option
            children="Charcoal"
            value="Charcoal"
            {...getOverrideProps(overrides, "cargo2option3")}
          ></option>
          <option
            children="Cold Rolled Coil"
            value="Cold Rolled Coil"
            {...getOverrideProps(overrides, "cargo2option4")}
          ></option>
          <option
            children="Containers"
            value="Containers"
            {...getOverrideProps(overrides, "cargo2option5")}
          ></option>
          <option
            children="Dickite"
            value="Dickite"
            {...getOverrideProps(overrides, "cargo2option6")}
          ></option>
          <option
            children="Dolomite"
            value="Dolomite"
            {...getOverrideProps(overrides, "cargo2option7")}
          ></option>
          <option
            children="Feldspar"
            value="Feldspar"
            {...getOverrideProps(overrides, "cargo2option8")}
          ></option>
          <option
            children="Fertilizer"
            value="Fertilizer"
            {...getOverrideProps(overrides, "cargo2option9")}
          ></option>
          <option
            children="Hot Rolled Coil"
            value="Hot Rolled Coil"
            {...getOverrideProps(overrides, "cargo2option10")}
          ></option>
          <option
            children="Maize"
            value="Maize"
            {...getOverrideProps(overrides, "cargo2option11")}
          ></option>
          <option
            children="Palm Kernel Shell (PKS)"
            value="Palm Kernel Shell (PKS)"
            {...getOverrideProps(overrides, "cargo2option12")}
          ></option>
          <option
            children="Palm Kernel Expeller (PKE)"
            value="Palm Kernel Expeller (PKE)"
            {...getOverrideProps(overrides, "cargo2option13")}
          ></option>
          <option
            children="Plastic Resin"
            value="Plastic Resin"
            {...getOverrideProps(overrides, "cargo2option14")}
          ></option>
          <option
            children="Project Cargo"
            value="Project Cargo"
            {...getOverrideProps(overrides, "cargo2option15")}
          ></option>
          <option
            children="Rice"
            value="Rice"
            {...getOverrideProps(overrides, "cargo2option16")}
          ></option>
          <option
            children="Salt"
            value="Salt"
            {...getOverrideProps(overrides, "cargo2option17")}
          ></option>
          <option
            children="Salt and Flour"
            value="Salt and Flour"
            {...getOverrideProps(overrides, "cargo2option18")}
          ></option>
          <option
            children="Silica Sand"
            value="Silica Sand"
            {...getOverrideProps(overrides, "cargo2option19")}
          ></option>
          <option
            children="Sodium Sulphate Anhydrous"
            value="Sodium Sulphate Anhydrous"
            {...getOverrideProps(overrides, "cargo2option20")}
          ></option>
          <option
            children="Soy Bean Meal"
            value="Soy Bean Meal"
            {...getOverrideProps(overrides, "cargo2option21")}
          ></option>
          <option
            children="Steel Coil"
            value="Steel Coil"
            {...getOverrideProps(overrides, "cargo2option22")}
          ></option>
          <option
            children="Tapioca"
            value="Tapioca"
            {...getOverrideProps(overrides, "cargo2option23")}
          ></option>
          <option
            children="Tapioca (Jumbo)"
            value="Tapioca (Jumbo)"
            {...getOverrideProps(overrides, "cargo2option24")}
          ></option>
          <option
            children="Tapioca Pellet"
            value="Tapioca Pellet"
            {...getOverrideProps(overrides, "cargo2option25")}
          ></option>
          <option
            children="Timber"
            value="Timber"
            {...getOverrideProps(overrides, "cargo2option26")}
          ></option>
          <option
            children="Urea"
            value="Urea"
            {...getOverrideProps(overrides, "cargo2option27")}
          ></option>
          <option
            children="Wheat"
            value="Wheat"
            {...getOverrideProps(overrides, "cargo2option28")}
          ></option>
          <option
            children="Wood Chips"
            value="Wood Chips"
            {...getOverrideProps(overrides, "cargo2option29")}
          ></option>
          <option
            children="Wood Pellets"
            value="Wood Pellets"
            {...getOverrideProps(overrides, "cargo2option30")}
          ></option>
        </SelectField>
        <TextField
          label="Quantity"
          isRequired={false}
          isReadOnly={false}
          type="number"
          step="any"
          value={cargo2_quantity}
          onChange={(e) => {
            let value = isNaN(parseFloat(e.target.value))
              ? e.target.value
              : parseFloat(e.target.value);
            if (onChange) {
              const modelFields = {
                Field4,
                vessel_ht1,
                vessel_hn5,
                vessel_hn7,
                vessel_hn9,
                vessel_hn10,
                vessel_ht20,
                vessel_ht21,
                port1,
                port1_fees,
                port1_port_call,
                port1_crane_usage,
                port2,
                port2_fees,
                port2_port_call,
                port2_crane_usage,
                port3,
                port3_fees,
                port3_port_call,
                port3_crane_usage,
                port4,
                port4_fees,
                port4_port_call,
                port4_crane_usage,
                port5,
                port5_fees,
                port6,
                port6_fees,
                cargo1,
                cargo1_quantity,
                cargo1_rate,
                cargo2,
                cargo2_quantity: value,
                cargo2_rate,
                cargo3,
                cargo3_quantity,
                cargo3_rate,
                cargo4,
                cargo4_quantity,
                cargo4_rate,
                cargo5,
                cargo5_quantity,
                cargo5_rate,
                cargo6,
                cargo6_quantity,
                cargo6_rate,
                bunker_rate,
                diesel_rate,
                lube_rate,
                surveying_fees,
                Field0,
                miscCosts,
                craneUsage,
                portDays,
              };
              const result = onChange(modelFields);
              value = result?.cargo2_quantity ?? value;
            }
            if (errors.cargo2_quantity?.hasError) {
              runValidationTasks("cargo2_quantity", value);
            }
            setCargo2_quantity(value);
          }}
          onBlur={() => runValidationTasks("cargo2_quantity", cargo2_quantity)}
          errorMessage={errors.cargo2_quantity?.errorMessage}
          hasError={errors.cargo2_quantity?.hasError}
          {...getOverrideProps(overrides, "cargo2_quantity")}
        ></TextField>
        <TextField
          label="Freight Rate"
          isRequired={false}
          isReadOnly={false}
          placeholder="$"
          type="number"
          step="any"
          value={cargo2_rate}
          onChange={(e) => {
            let value = isNaN(parseFloat(e.target.value))
              ? e.target.value
              : parseFloat(e.target.value);
            if (onChange) {
              const modelFields = {
                Field4,
                vessel_ht1,
                vessel_hn5,
                vessel_hn7,
                vessel_hn9,
                vessel_hn10,
                vessel_ht20,
                vessel_ht21,
                port1,
                port1_fees,
                port1_port_call,
                port1_crane_usage,
                port2,
                port2_fees,
                port2_port_call,
                port2_crane_usage,
                port3,
                port3_fees,
                port3_port_call,
                port3_crane_usage,
                port4,
                port4_fees,
                port4_port_call,
                port4_crane_usage,
                port5,
                port5_fees,
                port6,
                port6_fees,
                cargo1,
                cargo1_quantity,
                cargo1_rate,
                cargo2,
                cargo2_quantity,
                cargo2_rate: value,
                cargo3,
                cargo3_quantity,
                cargo3_rate,
                cargo4,
                cargo4_quantity,
                cargo4_rate,
                cargo5,
                cargo5_quantity,
                cargo5_rate,
                cargo6,
                cargo6_quantity,
                cargo6_rate,
                bunker_rate,
                diesel_rate,
                lube_rate,
                surveying_fees,
                Field0,
                miscCosts,
                craneUsage,
                portDays,
              };
              const result = onChange(modelFields);
              value = result?.cargo2_rate ?? value;
            }
            if (errors.cargo2_rate?.hasError) {
              runValidationTasks("cargo2_rate", value);
            }
            setCargo2_rate(value);
          }}
          onBlur={() => runValidationTasks("cargo2_rate", cargo2_rate)}
          errorMessage={errors.cargo2_rate?.errorMessage}
          hasError={errors.cargo2_rate?.hasError}
          {...getOverrideProps(overrides, "cargo2_rate")}
        ></TextField>
      </Grid>
      <Heading
        children="Cargo 3"
        {...getOverrideProps(overrides, "SectionalElement3")}
      ></Heading>
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(3, auto)"
        {...getOverrideProps(overrides, "RowGrid33")}
      >
        <SelectField
          label="Type"
          placeholder="Please select an option"
          isDisabled={false}
          value={cargo3}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                Field4,
                vessel_ht1,
                vessel_hn5,
                vessel_hn7,
                vessel_hn9,
                vessel_hn10,
                vessel_ht20,
                vessel_ht21,
                port1,
                port1_fees,
                port1_port_call,
                port1_crane_usage,
                port2,
                port2_fees,
                port2_port_call,
                port2_crane_usage,
                port3,
                port3_fees,
                port3_port_call,
                port3_crane_usage,
                port4,
                port4_fees,
                port4_port_call,
                port4_crane_usage,
                port5,
                port5_fees,
                port6,
                port6_fees,
                cargo1,
                cargo1_quantity,
                cargo1_rate,
                cargo2,
                cargo2_quantity,
                cargo2_rate,
                cargo3: value,
                cargo3_quantity,
                cargo3_rate,
                cargo4,
                cargo4_quantity,
                cargo4_rate,
                cargo5,
                cargo5_quantity,
                cargo5_rate,
                cargo6,
                cargo6_quantity,
                cargo6_rate,
                bunker_rate,
                diesel_rate,
                lube_rate,
                surveying_fees,
                Field0,
                miscCosts,
                craneUsage,
                portDays,
              };
              const result = onChange(modelFields);
              value = result?.cargo3 ?? value;
            }
            if (errors.cargo3?.hasError) {
              runValidationTasks("cargo3", value);
            }
            setCargo3(value);
          }}
          onBlur={() => runValidationTasks("cargo3", cargo3)}
          errorMessage={errors.cargo3?.errorMessage}
          hasError={errors.cargo3?.hasError}
          {...getOverrideProps(overrides, "cargo3")}
        >
          <option
            children="NIL"
            value="NIL"
            {...getOverrideProps(overrides, "cargo3option0")}
          ></option>
          <option
            children="Barite"
            value="Barite"
            {...getOverrideProps(overrides, "cargo3option1")}
          ></option>
          <option
            children="Barley"
            value="Barley"
            {...getOverrideProps(overrides, "cargo3option2")}
          ></option>
          <option
            children="Charcoal"
            value="Charcoal"
            {...getOverrideProps(overrides, "cargo3option3")}
          ></option>
          <option
            children="Cold Rolled Coil"
            value="Cold Rolled Coil"
            {...getOverrideProps(overrides, "cargo3option4")}
          ></option>
          <option
            children="Containers"
            value="Containers"
            {...getOverrideProps(overrides, "cargo3option5")}
          ></option>
          <option
            children="Dickite"
            value="Dickite"
            {...getOverrideProps(overrides, "cargo3option6")}
          ></option>
          <option
            children="Dolomite"
            value="Dolomite"
            {...getOverrideProps(overrides, "cargo3option7")}
          ></option>
          <option
            children="Feldspar"
            value="Feldspar"
            {...getOverrideProps(overrides, "cargo3option8")}
          ></option>
          <option
            children="Fertilizer"
            value="Fertilizer"
            {...getOverrideProps(overrides, "cargo3option9")}
          ></option>
          <option
            children="Hot Rolled Coil"
            value="Hot Rolled Coil"
            {...getOverrideProps(overrides, "cargo3option10")}
          ></option>
          <option
            children="Maize"
            value="Maize"
            {...getOverrideProps(overrides, "cargo3option11")}
          ></option>
          <option
            children="Palm Kernel Shell (PKS)"
            value="Palm Kernel Shell (PKS)"
            {...getOverrideProps(overrides, "cargo3option12")}
          ></option>
          <option
            children="Palm Kernel Expeller (PKE)"
            value="Palm Kernel Expeller (PKE)"
            {...getOverrideProps(overrides, "cargo3option13")}
          ></option>
          <option
            children="Plastic Resin"
            value="Plastic Resin"
            {...getOverrideProps(overrides, "cargo3option14")}
          ></option>
          <option
            children="Project Cargo"
            value="Project Cargo"
            {...getOverrideProps(overrides, "cargo3option15")}
          ></option>
          <option
            children="Rice"
            value="Rice"
            {...getOverrideProps(overrides, "cargo3option16")}
          ></option>
          <option
            children="Salt"
            value="Salt"
            {...getOverrideProps(overrides, "cargo3option17")}
          ></option>
          <option
            children="Salt and Flour"
            value="Salt and Flour"
            {...getOverrideProps(overrides, "cargo3option18")}
          ></option>
          <option
            children="Silica Sand"
            value="Silica Sand"
            {...getOverrideProps(overrides, "cargo3option19")}
          ></option>
          <option
            children="Sodium Sulphate Anhydrous"
            value="Sodium Sulphate Anhydrous"
            {...getOverrideProps(overrides, "cargo3option20")}
          ></option>
          <option
            children="Soy Bean Meal"
            value="Soy Bean Meal"
            {...getOverrideProps(overrides, "cargo3option21")}
          ></option>
          <option
            children="Steel Coil"
            value="Steel Coil"
            {...getOverrideProps(overrides, "cargo3option22")}
          ></option>
          <option
            children="Tapioca"
            value="Tapioca"
            {...getOverrideProps(overrides, "cargo3option23")}
          ></option>
          <option
            children="Tapioca (Jumbo)"
            value="Tapioca (Jumbo)"
            {...getOverrideProps(overrides, "cargo3option24")}
          ></option>
          <option
            children="Tapioca Pellet"
            value="Tapioca Pellet"
            {...getOverrideProps(overrides, "cargo3option25")}
          ></option>
          <option
            children="Timber"
            value="Timber"
            {...getOverrideProps(overrides, "cargo3option26")}
          ></option>
          <option
            children="Urea"
            value="Urea"
            {...getOverrideProps(overrides, "cargo3option27")}
          ></option>
          <option
            children="Wheat"
            value="Wheat"
            {...getOverrideProps(overrides, "cargo3option28")}
          ></option>
          <option
            children="Wood Chips"
            value="Wood Chips"
            {...getOverrideProps(overrides, "cargo3option29")}
          ></option>
          <option
            children="Wood Pellets"
            value="Wood Pellets"
            {...getOverrideProps(overrides, "cargo3option30")}
          ></option>
        </SelectField>
        <TextField
          label="Quanity"
          isRequired={false}
          isReadOnly={false}
          type="number"
          step="any"
          value={cargo3_quantity}
          onChange={(e) => {
            let value = isNaN(parseFloat(e.target.value))
              ? e.target.value
              : parseFloat(e.target.value);
            if (onChange) {
              const modelFields = {
                Field4,
                vessel_ht1,
                vessel_hn5,
                vessel_hn7,
                vessel_hn9,
                vessel_hn10,
                vessel_ht20,
                vessel_ht21,
                port1,
                port1_fees,
                port1_port_call,
                port1_crane_usage,
                port2,
                port2_fees,
                port2_port_call,
                port2_crane_usage,
                port3,
                port3_fees,
                port3_port_call,
                port3_crane_usage,
                port4,
                port4_fees,
                port4_port_call,
                port4_crane_usage,
                port5,
                port5_fees,
                port6,
                port6_fees,
                cargo1,
                cargo1_quantity,
                cargo1_rate,
                cargo2,
                cargo2_quantity,
                cargo2_rate,
                cargo3,
                cargo3_quantity: value,
                cargo3_rate,
                cargo4,
                cargo4_quantity,
                cargo4_rate,
                cargo5,
                cargo5_quantity,
                cargo5_rate,
                cargo6,
                cargo6_quantity,
                cargo6_rate,
                bunker_rate,
                diesel_rate,
                lube_rate,
                surveying_fees,
                Field0,
                miscCosts,
                craneUsage,
                portDays,
              };
              const result = onChange(modelFields);
              value = result?.cargo3_quantity ?? value;
            }
            if (errors.cargo3_quantity?.hasError) {
              runValidationTasks("cargo3_quantity", value);
            }
            setCargo3_quantity(value);
          }}
          onBlur={() => runValidationTasks("cargo3_quantity", cargo3_quantity)}
          errorMessage={errors.cargo3_quantity?.errorMessage}
          hasError={errors.cargo3_quantity?.hasError}
          {...getOverrideProps(overrides, "cargo3_quantity")}
        ></TextField>
        <TextField
          label="Freight Rate"
          isRequired={false}
          isReadOnly={false}
          placeholder="$"
          type="number"
          step="any"
          value={cargo3_rate}
          onChange={(e) => {
            let value = isNaN(parseFloat(e.target.value))
              ? e.target.value
              : parseFloat(e.target.value);
            if (onChange) {
              const modelFields = {
                Field4,
                vessel_ht1,
                vessel_hn5,
                vessel_hn7,
                vessel_hn9,
                vessel_hn10,
                vessel_ht20,
                vessel_ht21,
                port1,
                port1_fees,
                port1_port_call,
                port1_crane_usage,
                port2,
                port2_fees,
                port2_port_call,
                port2_crane_usage,
                port3,
                port3_fees,
                port3_port_call,
                port3_crane_usage,
                port4,
                port4_fees,
                port4_port_call,
                port4_crane_usage,
                port5,
                port5_fees,
                port6,
                port6_fees,
                cargo1,
                cargo1_quantity,
                cargo1_rate,
                cargo2,
                cargo2_quantity,
                cargo2_rate,
                cargo3,
                cargo3_quantity,
                cargo3_rate: value,
                cargo4,
                cargo4_quantity,
                cargo4_rate,
                cargo5,
                cargo5_quantity,
                cargo5_rate,
                cargo6,
                cargo6_quantity,
                cargo6_rate,
                bunker_rate,
                diesel_rate,
                lube_rate,
                surveying_fees,
                Field0,
                miscCosts,
                craneUsage,
                portDays,
              };
              const result = onChange(modelFields);
              value = result?.cargo3_rate ?? value;
            }
            if (errors.cargo3_rate?.hasError) {
              runValidationTasks("cargo3_rate", value);
            }
            setCargo3_rate(value);
          }}
          onBlur={() => runValidationTasks("cargo3_rate", cargo3_rate)}
          errorMessage={errors.cargo3_rate?.errorMessage}
          hasError={errors.cargo3_rate?.hasError}
          {...getOverrideProps(overrides, "cargo3_rate")}
        ></TextField>
      </Grid>
      <Heading
        children="Cargo 4"
        {...getOverrideProps(overrides, "SectionalElement4")}
      ></Heading>
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(3, auto)"
        {...getOverrideProps(overrides, "RowGrid35")}
      >
        <SelectField
          label="Type"
          placeholder="Please select an option"
          isDisabled={false}
          value={cargo4}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                Field4,
                vessel_ht1,
                vessel_hn5,
                vessel_hn7,
                vessel_hn9,
                vessel_hn10,
                vessel_ht20,
                vessel_ht21,
                port1,
                port1_fees,
                port1_port_call,
                port1_crane_usage,
                port2,
                port2_fees,
                port2_port_call,
                port2_crane_usage,
                port3,
                port3_fees,
                port3_port_call,
                port3_crane_usage,
                port4,
                port4_fees,
                port4_port_call,
                port4_crane_usage,
                port5,
                port5_fees,
                port6,
                port6_fees,
                cargo1,
                cargo1_quantity,
                cargo1_rate,
                cargo2,
                cargo2_quantity,
                cargo2_rate,
                cargo3,
                cargo3_quantity,
                cargo3_rate,
                cargo4: value,
                cargo4_quantity,
                cargo4_rate,
                cargo5,
                cargo5_quantity,
                cargo5_rate,
                cargo6,
                cargo6_quantity,
                cargo6_rate,
                bunker_rate,
                diesel_rate,
                lube_rate,
                surveying_fees,
                Field0,
                miscCosts,
                craneUsage,
                portDays,
              };
              const result = onChange(modelFields);
              value = result?.cargo4 ?? value;
            }
            if (errors.cargo4?.hasError) {
              runValidationTasks("cargo4", value);
            }
            setCargo4(value);
          }}
          onBlur={() => runValidationTasks("cargo4", cargo4)}
          errorMessage={errors.cargo4?.errorMessage}
          hasError={errors.cargo4?.hasError}
          {...getOverrideProps(overrides, "cargo4")}
        >
          <option
            children="NIL"
            value="NIL"
            {...getOverrideProps(overrides, "cargo4option0")}
          ></option>
          <option
            children="Barite"
            value="Barite"
            {...getOverrideProps(overrides, "cargo4option1")}
          ></option>
          <option
            children="Barley"
            value="Barley"
            {...getOverrideProps(overrides, "cargo4option2")}
          ></option>
          <option
            children="Charcoal"
            value="Charcoal"
            {...getOverrideProps(overrides, "cargo4option3")}
          ></option>
          <option
            children="Cold Rolled Coil"
            value="Cold Rolled Coil"
            {...getOverrideProps(overrides, "cargo4option4")}
          ></option>
          <option
            children="Containers"
            value="Containers"
            {...getOverrideProps(overrides, "cargo4option5")}
          ></option>
          <option
            children="Dickite"
            value="Dickite"
            {...getOverrideProps(overrides, "cargo4option6")}
          ></option>
          <option
            children="Dolomite"
            value="Dolomite"
            {...getOverrideProps(overrides, "cargo4option7")}
          ></option>
          <option
            children="Feldspar"
            value="Feldspar"
            {...getOverrideProps(overrides, "cargo4option8")}
          ></option>
          <option
            children="Fertilizer"
            value="Fertilizer"
            {...getOverrideProps(overrides, "cargo4option9")}
          ></option>
          <option
            children="Hot Rolled Coil"
            value="Hot Rolled Coil"
            {...getOverrideProps(overrides, "cargo4option10")}
          ></option>
          <option
            children="Maize"
            value="Maize"
            {...getOverrideProps(overrides, "cargo4option11")}
          ></option>
          <option
            children="Palm Kernel Shell (PKS)"
            value="Palm Kernel Shell (PKS)"
            {...getOverrideProps(overrides, "cargo4option12")}
          ></option>
          <option
            children="Palm Kernel Expeller (PKE)"
            value="Palm Kernel Expeller (PKE)"
            {...getOverrideProps(overrides, "cargo4option13")}
          ></option>
          <option
            children="Plastic Resin"
            value="Plastic Resin"
            {...getOverrideProps(overrides, "cargo4option14")}
          ></option>
          <option
            children="Project Cargo"
            value="Project Cargo"
            {...getOverrideProps(overrides, "cargo4option15")}
          ></option>
          <option
            children="Rice"
            value="Rice"
            {...getOverrideProps(overrides, "cargo4option16")}
          ></option>
          <option
            children="Salt"
            value="Salt"
            {...getOverrideProps(overrides, "cargo4option17")}
          ></option>
          <option
            children="Salt and Flour"
            value="Salt and Flour"
            {...getOverrideProps(overrides, "cargo4option18")}
          ></option>
          <option
            children="Silica Sand"
            value="Silica Sand"
            {...getOverrideProps(overrides, "cargo4option19")}
          ></option>
          <option
            children="Sodium Sulphate Anhydrous"
            value="Sodium Sulphate Anhydrous"
            {...getOverrideProps(overrides, "cargo4option20")}
          ></option>
          <option
            children="Soy Bean Meal"
            value="Soy Bean Meal"
            {...getOverrideProps(overrides, "cargo4option21")}
          ></option>
          <option
            children="Steel Coil"
            value="Steel Coil"
            {...getOverrideProps(overrides, "cargo4option22")}
          ></option>
          <option
            children="Tapioca"
            value="Tapioca"
            {...getOverrideProps(overrides, "cargo4option23")}
          ></option>
          <option
            children="Tapioca (Jumbo)"
            value="Tapioca (Jumbo)"
            {...getOverrideProps(overrides, "cargo4option24")}
          ></option>
          <option
            children="Tapioca Pellet"
            value="Tapioca Pellet"
            {...getOverrideProps(overrides, "cargo4option25")}
          ></option>
          <option
            children="Timber"
            value="Timber"
            {...getOverrideProps(overrides, "cargo4option26")}
          ></option>
          <option
            children="Urea"
            value="Urea"
            {...getOverrideProps(overrides, "cargo4option27")}
          ></option>
          <option
            children="Wheat"
            value="Wheat"
            {...getOverrideProps(overrides, "cargo4option28")}
          ></option>
          <option
            children="Wood Chips"
            value="Wood Chips"
            {...getOverrideProps(overrides, "cargo4option29")}
          ></option>
          <option
            children="Wood Pellets"
            value="Wood Pellets"
            {...getOverrideProps(overrides, "cargo4option30")}
          ></option>
        </SelectField>
        <TextField
          label="Quanity"
          isRequired={false}
          isReadOnly={false}
          type="number"
          step="any"
          value={cargo4_quantity}
          onChange={(e) => {
            let value = isNaN(parseFloat(e.target.value))
              ? e.target.value
              : parseFloat(e.target.value);
            if (onChange) {
              const modelFields = {
                Field4,
                vessel_ht1,
                vessel_hn5,
                vessel_hn7,
                vessel_hn9,
                vessel_hn10,
                vessel_ht20,
                vessel_ht21,
                port1,
                port1_fees,
                port1_port_call,
                port1_crane_usage,
                port2,
                port2_fees,
                port2_port_call,
                port2_crane_usage,
                port3,
                port3_fees,
                port3_port_call,
                port3_crane_usage,
                port4,
                port4_fees,
                port4_port_call,
                port4_crane_usage,
                port5,
                port5_fees,
                port6,
                port6_fees,
                cargo1,
                cargo1_quantity,
                cargo1_rate,
                cargo2,
                cargo2_quantity,
                cargo2_rate,
                cargo3,
                cargo3_quantity,
                cargo3_rate,
                cargo4,
                cargo4_quantity: value,
                cargo4_rate,
                cargo5,
                cargo5_quantity,
                cargo5_rate,
                cargo6,
                cargo6_quantity,
                cargo6_rate,
                bunker_rate,
                diesel_rate,
                lube_rate,
                surveying_fees,
                Field0,
                miscCosts,
                craneUsage,
                portDays,
              };
              const result = onChange(modelFields);
              value = result?.cargo4_quantity ?? value;
            }
            if (errors.cargo4_quantity?.hasError) {
              runValidationTasks("cargo4_quantity", value);
            }
            setCargo4_quantity(value);
          }}
          onBlur={() => runValidationTasks("cargo4_quantity", cargo4_quantity)}
          errorMessage={errors.cargo4_quantity?.errorMessage}
          hasError={errors.cargo4_quantity?.hasError}
          {...getOverrideProps(overrides, "cargo4_quantity")}
        ></TextField>
        <TextField
          label="Freight Rate"
          isRequired={false}
          isReadOnly={false}
          placeholder="$"
          type="number"
          step="any"
          value={cargo4_rate}
          onChange={(e) => {
            let value = isNaN(parseFloat(e.target.value))
              ? e.target.value
              : parseFloat(e.target.value);
            if (onChange) {
              const modelFields = {
                Field4,
                vessel_ht1,
                vessel_hn5,
                vessel_hn7,
                vessel_hn9,
                vessel_hn10,
                vessel_ht20,
                vessel_ht21,
                port1,
                port1_fees,
                port1_port_call,
                port1_crane_usage,
                port2,
                port2_fees,
                port2_port_call,
                port2_crane_usage,
                port3,
                port3_fees,
                port3_port_call,
                port3_crane_usage,
                port4,
                port4_fees,
                port4_port_call,
                port4_crane_usage,
                port5,
                port5_fees,
                port6,
                port6_fees,
                cargo1,
                cargo1_quantity,
                cargo1_rate,
                cargo2,
                cargo2_quantity,
                cargo2_rate,
                cargo3,
                cargo3_quantity,
                cargo3_rate,
                cargo4,
                cargo4_quantity,
                cargo4_rate: value,
                cargo5,
                cargo5_quantity,
                cargo5_rate,
                cargo6,
                cargo6_quantity,
                cargo6_rate,
                bunker_rate,
                diesel_rate,
                lube_rate,
                surveying_fees,
                Field0,
                miscCosts,
                craneUsage,
                portDays,
              };
              const result = onChange(modelFields);
              value = result?.cargo4_rate ?? value;
            }
            if (errors.cargo4_rate?.hasError) {
              runValidationTasks("cargo4_rate", value);
            }
            setCargo4_rate(value);
          }}
          onBlur={() => runValidationTasks("cargo4_rate", cargo4_rate)}
          errorMessage={errors.cargo4_rate?.errorMessage}
          hasError={errors.cargo4_rate?.hasError}
          {...getOverrideProps(overrides, "cargo4_rate")}
        ></TextField>
      </Grid>
      <Heading
        children="Cargo 5"
        {...getOverrideProps(overrides, "SectionalElement5")}
      ></Heading>
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(3, auto)"
        {...getOverrideProps(overrides, "RowGrid37")}
      >
        <SelectField
          label="Type"
          placeholder="Please select an option"
          isDisabled={false}
          value={cargo5}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                Field4,
                vessel_ht1,
                vessel_hn5,
                vessel_hn7,
                vessel_hn9,
                vessel_hn10,
                vessel_ht20,
                vessel_ht21,
                port1,
                port1_fees,
                port1_port_call,
                port1_crane_usage,
                port2,
                port2_fees,
                port2_port_call,
                port2_crane_usage,
                port3,
                port3_fees,
                port3_port_call,
                port3_crane_usage,
                port4,
                port4_fees,
                port4_port_call,
                port4_crane_usage,
                port5,
                port5_fees,
                port6,
                port6_fees,
                cargo1,
                cargo1_quantity,
                cargo1_rate,
                cargo2,
                cargo2_quantity,
                cargo2_rate,
                cargo3,
                cargo3_quantity,
                cargo3_rate,
                cargo4,
                cargo4_quantity,
                cargo4_rate,
                cargo5: value,
                cargo5_quantity,
                cargo5_rate,
                cargo6,
                cargo6_quantity,
                cargo6_rate,
                bunker_rate,
                diesel_rate,
                lube_rate,
                surveying_fees,
                Field0,
                miscCosts,
                craneUsage,
                portDays,
              };
              const result = onChange(modelFields);
              value = result?.cargo5 ?? value;
            }
            if (errors.cargo5?.hasError) {
              runValidationTasks("cargo5", value);
            }
            setCargo5(value);
          }}
          onBlur={() => runValidationTasks("cargo5", cargo5)}
          errorMessage={errors.cargo5?.errorMessage}
          hasError={errors.cargo5?.hasError}
          {...getOverrideProps(overrides, "cargo5")}
        >
          <option
            children="NIL"
            value="NIL"
            {...getOverrideProps(overrides, "cargo5option0")}
          ></option>
          <option
            children="Barite"
            value="Barite"
            {...getOverrideProps(overrides, "cargo5option1")}
          ></option>
          <option
            children="Barley"
            value="Barley"
            {...getOverrideProps(overrides, "cargo5option2")}
          ></option>
          <option
            children="Charcoal"
            value="Charcoal"
            {...getOverrideProps(overrides, "cargo5option3")}
          ></option>
          <option
            children="Cold Rolled Coil"
            value="Cold Rolled Coil"
            {...getOverrideProps(overrides, "cargo5option4")}
          ></option>
          <option
            children="Containers"
            value="Containers"
            {...getOverrideProps(overrides, "cargo5option5")}
          ></option>
          <option
            children="Dickite"
            value="Dickite"
            {...getOverrideProps(overrides, "cargo5option6")}
          ></option>
          <option
            children="Dolomite"
            value="Dolomite"
            {...getOverrideProps(overrides, "cargo5option7")}
          ></option>
          <option
            children="Feldspar"
            value="Feldspar"
            {...getOverrideProps(overrides, "cargo5option8")}
          ></option>
          <option
            children="Fertilizer"
            value="Fertilizer"
            {...getOverrideProps(overrides, "cargo5option9")}
          ></option>
          <option
            children="Hot Rolled Coil"
            value="Hot Rolled Coil"
            {...getOverrideProps(overrides, "cargo5option10")}
          ></option>
          <option
            children="Maize"
            value="Maize"
            {...getOverrideProps(overrides, "cargo5option11")}
          ></option>
          <option
            children="Palm Kernel Shell (PKS)"
            value="Palm Kernel Shell (PKS)"
            {...getOverrideProps(overrides, "cargo5option12")}
          ></option>
          <option
            children="Palm Kernel Expeller (PKE)"
            value="Palm Kernel Expeller (PKE)"
            {...getOverrideProps(overrides, "cargo5option13")}
          ></option>
          <option
            children="Plastic Resin"
            value="Plastic Resin"
            {...getOverrideProps(overrides, "cargo5option14")}
          ></option>
          <option
            children="Project Cargo"
            value="Project Cargo"
            {...getOverrideProps(overrides, "cargo5option15")}
          ></option>
          <option
            children="Rice"
            value="Rice"
            {...getOverrideProps(overrides, "cargo5option16")}
          ></option>
          <option
            children="Salt"
            value="Salt"
            {...getOverrideProps(overrides, "cargo5option17")}
          ></option>
          <option
            children="Salt and Flour"
            value="Salt and Flour"
            {...getOverrideProps(overrides, "cargo5option18")}
          ></option>
          <option
            children="Silica Sand"
            value="Silica Sand"
            {...getOverrideProps(overrides, "cargo5option19")}
          ></option>
          <option
            children="Sodium Sulphate Anhydrous"
            value="Sodium Sulphate Anhydrous"
            {...getOverrideProps(overrides, "cargo5option20")}
          ></option>
          <option
            children="Soy Bean Meal"
            value="Soy Bean Meal"
            {...getOverrideProps(overrides, "cargo5option21")}
          ></option>
          <option
            children="Steel Coil"
            value="Steel Coil"
            {...getOverrideProps(overrides, "cargo5option22")}
          ></option>
          <option
            children="Tapioca"
            value="Tapioca"
            {...getOverrideProps(overrides, "cargo5option23")}
          ></option>
          <option
            children="Tapioca (Jumbo)"
            value="Tapioca (Jumbo)"
            {...getOverrideProps(overrides, "cargo5option24")}
          ></option>
          <option
            children="Tapioca Pellet"
            value="Tapioca Pellet"
            {...getOverrideProps(overrides, "cargo5option25")}
          ></option>
          <option
            children="Timber"
            value="Timber"
            {...getOverrideProps(overrides, "cargo5option26")}
          ></option>
          <option
            children="Urea"
            value="Urea"
            {...getOverrideProps(overrides, "cargo5option27")}
          ></option>
          <option
            children="Wheat"
            value="Wheat"
            {...getOverrideProps(overrides, "cargo5option28")}
          ></option>
          <option
            children="Wood Chips"
            value="Wood Chips"
            {...getOverrideProps(overrides, "cargo5option29")}
          ></option>
          <option
            children="Wood Pellets"
            value="Wood Pellets"
            {...getOverrideProps(overrides, "cargo5option30")}
          ></option>
        </SelectField>
        <TextField
          label="Quantity"
          type="number"
          step="any"
          value={cargo5_quantity}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                Field4,
                vessel_ht1,
                vessel_hn5,
                vessel_hn7,
                vessel_hn9,
                vessel_hn10,
                vessel_ht20,
                vessel_ht21,
                port1,
                port1_fees,
                port1_port_call,
                port1_crane_usage,
                port2,
                port2_fees,
                port2_port_call,
                port2_crane_usage,
                port3,
                port3_fees,
                port3_port_call,
                port3_crane_usage,
                port4,
                port4_fees,
                port4_port_call,
                port4_crane_usage,
                port5,
                port5_fees,
                port6,
                port6_fees,
                cargo1,
                cargo1_quantity,
                cargo1_rate,
                cargo2,
                cargo2_quantity,
                cargo2_rate,
                cargo3,
                cargo3_quantity,
                cargo3_rate,
                cargo4,
                cargo4_quantity,
                cargo4_rate,
                cargo5,
                cargo5_quantity: value,
                cargo5_rate,
                cargo6,
                cargo6_quantity,
                cargo6_rate,
                bunker_rate,
                diesel_rate,
                lube_rate,
                surveying_fees,
                Field0,
                miscCosts,
                craneUsage,
                portDays,
              };
              const result = onChange(modelFields);
              value = result?.cargo5_quantity ?? value;
            }
            if (errors.cargo5_quantity?.hasError) {
              runValidationTasks("cargo5_quantity", value);
            }
            setCargo5_quantity(value);
          }}
          onBlur={() => runValidationTasks("cargo5_quantity", cargo5_quantity)}
          errorMessage={errors.cargo5_quantity?.errorMessage}
          hasError={errors.cargo5_quantity?.hasError}
          {...getOverrideProps(overrides, "cargo5_quantity")}
        ></TextField>
        <TextField
          label="Freight Rate"
          isRequired={false}
          isReadOnly={false}
          placeholder="$"
          type="number"
          step="any"
          value={cargo5_rate}
          onChange={(e) => {
            let value = isNaN(parseFloat(e.target.value))
              ? e.target.value
              : parseFloat(e.target.value);
            if (onChange) {
              const modelFields = {
                Field4,
                vessel_ht1,
                vessel_hn5,
                vessel_hn7,
                vessel_hn9,
                vessel_hn10,
                vessel_ht20,
                vessel_ht21,
                port1,
                port1_fees,
                port1_port_call,
                port1_crane_usage,
                port2,
                port2_fees,
                port2_port_call,
                port2_crane_usage,
                port3,
                port3_fees,
                port3_port_call,
                port3_crane_usage,
                port4,
                port4_fees,
                port4_port_call,
                port4_crane_usage,
                port5,
                port5_fees,
                port6,
                port6_fees,
                cargo1,
                cargo1_quantity,
                cargo1_rate,
                cargo2,
                cargo2_quantity,
                cargo2_rate,
                cargo3,
                cargo3_quantity,
                cargo3_rate,
                cargo4,
                cargo4_quantity,
                cargo4_rate,
                cargo5,
                cargo5_quantity,
                cargo5_rate: value,
                cargo6,
                cargo6_quantity,
                cargo6_rate,
                bunker_rate,
                diesel_rate,
                lube_rate,
                surveying_fees,
                Field0,
                miscCosts,
                craneUsage,
                portDays,
              };
              const result = onChange(modelFields);
              value = result?.cargo5_rate ?? value;
            }
            if (errors.cargo5_rate?.hasError) {
              runValidationTasks("cargo5_rate", value);
            }
            setCargo5_rate(value);
          }}
          onBlur={() => runValidationTasks("cargo5_rate", cargo5_rate)}
          errorMessage={errors.cargo5_rate?.errorMessage}
          hasError={errors.cargo5_rate?.hasError}
          {...getOverrideProps(overrides, "cargo5_rate")}
        ></TextField>
      </Grid>
      <Heading
        children="Cargo 6"
        {...getOverrideProps(overrides, "SectionalElement6")}
      ></Heading>
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(3, auto)"
        {...getOverrideProps(overrides, "RowGrid39")}
      >
        <SelectField
          label="Type"
          placeholder="Please select an option"
          isDisabled={false}
          value={cargo6}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                Field4,
                vessel_ht1,
                vessel_hn5,
                vessel_hn7,
                vessel_hn9,
                vessel_hn10,
                vessel_ht20,
                vessel_ht21,
                port1,
                port1_fees,
                port1_port_call,
                port1_crane_usage,
                port2,
                port2_fees,
                port2_port_call,
                port2_crane_usage,
                port3,
                port3_fees,
                port3_port_call,
                port3_crane_usage,
                port4,
                port4_fees,
                port4_port_call,
                port4_crane_usage,
                port5,
                port5_fees,
                port6,
                port6_fees,
                cargo1,
                cargo1_quantity,
                cargo1_rate,
                cargo2,
                cargo2_quantity,
                cargo2_rate,
                cargo3,
                cargo3_quantity,
                cargo3_rate,
                cargo4,
                cargo4_quantity,
                cargo4_rate,
                cargo5,
                cargo5_quantity,
                cargo5_rate,
                cargo6: value,
                cargo6_quantity,
                cargo6_rate,
                bunker_rate,
                diesel_rate,
                lube_rate,
                surveying_fees,
                Field0,
                miscCosts,
                craneUsage,
                portDays,
              };
              const result = onChange(modelFields);
              value = result?.cargo6 ?? value;
            }
            if (errors.cargo6?.hasError) {
              runValidationTasks("cargo6", value);
            }
            setCargo6(value);
          }}
          onBlur={() => runValidationTasks("cargo6", cargo6)}
          errorMessage={errors.cargo6?.errorMessage}
          hasError={errors.cargo6?.hasError}
          {...getOverrideProps(overrides, "cargo6")}
        >
          <option
            children="NIL"
            value="NIL"
            {...getOverrideProps(overrides, "cargo6option0")}
          ></option>
          <option
            children="Barite"
            value="Barite"
            {...getOverrideProps(overrides, "cargo6option1")}
          ></option>
          <option
            children="Barley"
            value="Barley"
            {...getOverrideProps(overrides, "cargo6option2")}
          ></option>
          <option
            children="Charcoal"
            value="Charcoal"
            {...getOverrideProps(overrides, "cargo6option3")}
          ></option>
          <option
            children="Cold Rolled Coil"
            value="Cold Rolled Coil"
            {...getOverrideProps(overrides, "cargo6option4")}
          ></option>
          <option
            children="Containers"
            value="Containers"
            {...getOverrideProps(overrides, "cargo6option5")}
          ></option>
          <option
            children="Dickite"
            value="Dickite"
            {...getOverrideProps(overrides, "cargo6option6")}
          ></option>
          <option
            children="Dolomite"
            value="Dolomite"
            {...getOverrideProps(overrides, "cargo6option7")}
          ></option>
          <option
            children="Feldspar"
            value="Feldspar"
            {...getOverrideProps(overrides, "cargo6option8")}
          ></option>
          <option
            children="Fertilizer"
            value="Fertilizer"
            {...getOverrideProps(overrides, "cargo6option9")}
          ></option>
          <option
            children="Hot Rolled Coil"
            value="Hot Rolled Coil"
            {...getOverrideProps(overrides, "cargo6option10")}
          ></option>
          <option
            children="Maize"
            value="Maize"
            {...getOverrideProps(overrides, "cargo6option11")}
          ></option>
          <option
            children="Palm Kernel Shell (PKS)"
            value="Palm Kernel Shell (PKS)"
            {...getOverrideProps(overrides, "cargo6option12")}
          ></option>
          <option
            children="Palm Kernel Expeller (PKE)"
            value="Palm Kernel Expeller (PKE)"
            {...getOverrideProps(overrides, "cargo6option13")}
          ></option>
          <option
            children="Plastic Resin"
            value="Plastic Resin"
            {...getOverrideProps(overrides, "cargo6option14")}
          ></option>
          <option
            children="Project Cargo"
            value="Project Cargo"
            {...getOverrideProps(overrides, "cargo6option15")}
          ></option>
          <option
            children="Rice"
            value="Rice"
            {...getOverrideProps(overrides, "cargo6option16")}
          ></option>
          <option
            children="Salt"
            value="Salt"
            {...getOverrideProps(overrides, "cargo6option17")}
          ></option>
          <option
            children="Salt and Flour"
            value="Salt and Flour"
            {...getOverrideProps(overrides, "cargo6option18")}
          ></option>
          <option
            children="Silica Sand"
            value="Silica Sand"
            {...getOverrideProps(overrides, "cargo6option19")}
          ></option>
          <option
            children="Sodium Sulphate Anhydrous"
            value="Sodium Sulphate Anhydrous"
            {...getOverrideProps(overrides, "cargo6option20")}
          ></option>
          <option
            children="Soy Bean Meal"
            value="Soy Bean Meal"
            {...getOverrideProps(overrides, "cargo6option21")}
          ></option>
          <option
            children="Steel Coil"
            value="Steel Coil"
            {...getOverrideProps(overrides, "cargo6option22")}
          ></option>
          <option
            children="Tapioca"
            value="Tapioca"
            {...getOverrideProps(overrides, "cargo6option23")}
          ></option>
          <option
            children="Tapioca (Jumbo)"
            value="Tapioca (Jumbo)"
            {...getOverrideProps(overrides, "cargo6option24")}
          ></option>
          <option
            children="Tapioca Pellet"
            value="Tapioca Pellet"
            {...getOverrideProps(overrides, "cargo6option25")}
          ></option>
          <option
            children="Timber"
            value="Timber"
            {...getOverrideProps(overrides, "cargo6option26")}
          ></option>
          <option
            children="Urea"
            value="Urea"
            {...getOverrideProps(overrides, "cargo6option27")}
          ></option>
          <option
            children="Wheat"
            value="Wheat"
            {...getOverrideProps(overrides, "cargo6option28")}
          ></option>
          <option
            children="Wood Chips"
            value="Wood Chips"
            {...getOverrideProps(overrides, "cargo6option29")}
          ></option>
          <option
            children="Wood Pellets"
            value="Wood Pellets"
            {...getOverrideProps(overrides, "cargo6option30")}
          ></option>
        </SelectField>
        <TextField
          label="Quanity"
          isRequired={false}
          isReadOnly={false}
          type="number"
          step="any"
          value={cargo6_quantity}
          onChange={(e) => {
            let value = isNaN(parseFloat(e.target.value))
              ? e.target.value
              : parseFloat(e.target.value);
            if (onChange) {
              const modelFields = {
                Field4,
                vessel_ht1,
                vessel_hn5,
                vessel_hn7,
                vessel_hn9,
                vessel_hn10,
                vessel_ht20,
                vessel_ht21,
                port1,
                port1_fees,
                port1_port_call,
                port1_crane_usage,
                port2,
                port2_fees,
                port2_port_call,
                port2_crane_usage,
                port3,
                port3_fees,
                port3_port_call,
                port3_crane_usage,
                port4,
                port4_fees,
                port4_port_call,
                port4_crane_usage,
                port5,
                port5_fees,
                port6,
                port6_fees,
                cargo1,
                cargo1_quantity,
                cargo1_rate,
                cargo2,
                cargo2_quantity,
                cargo2_rate,
                cargo3,
                cargo3_quantity,
                cargo3_rate,
                cargo4,
                cargo4_quantity,
                cargo4_rate,
                cargo5,
                cargo5_quantity,
                cargo5_rate,
                cargo6,
                cargo6_quantity: value,
                cargo6_rate,
                bunker_rate,
                diesel_rate,
                lube_rate,
                surveying_fees,
                Field0,
                miscCosts,
                craneUsage,
                portDays,
              };
              const result = onChange(modelFields);
              value = result?.cargo6_quantity ?? value;
            }
            if (errors.cargo6_quantity?.hasError) {
              runValidationTasks("cargo6_quantity", value);
            }
            setCargo6_quantity(value);
          }}
          onBlur={() => runValidationTasks("cargo6_quantity", cargo6_quantity)}
          errorMessage={errors.cargo6_quantity?.errorMessage}
          hasError={errors.cargo6_quantity?.hasError}
          {...getOverrideProps(overrides, "cargo6_quantity")}
        ></TextField>
        <TextField
          label="Freight Rate"
          isRequired={false}
          isReadOnly={false}
          placeholder="$"
          type="number"
          step="any"
          value={cargo6_rate}
          onChange={(e) => {
            let value = isNaN(parseFloat(e.target.value))
              ? e.target.value
              : parseFloat(e.target.value);
            if (onChange) {
              const modelFields = {
                Field4,
                vessel_ht1,
                vessel_hn5,
                vessel_hn7,
                vessel_hn9,
                vessel_hn10,
                vessel_ht20,
                vessel_ht21,
                port1,
                port1_fees,
                port1_port_call,
                port1_crane_usage,
                port2,
                port2_fees,
                port2_port_call,
                port2_crane_usage,
                port3,
                port3_fees,
                port3_port_call,
                port3_crane_usage,
                port4,
                port4_fees,
                port4_port_call,
                port4_crane_usage,
                port5,
                port5_fees,
                port6,
                port6_fees,
                cargo1,
                cargo1_quantity,
                cargo1_rate,
                cargo2,
                cargo2_quantity,
                cargo2_rate,
                cargo3,
                cargo3_quantity,
                cargo3_rate,
                cargo4,
                cargo4_quantity,
                cargo4_rate,
                cargo5,
                cargo5_quantity,
                cargo5_rate,
                cargo6,
                cargo6_quantity,
                cargo6_rate: value,
                bunker_rate,
                diesel_rate,
                lube_rate,
                surveying_fees,
                Field0,
                miscCosts,
                craneUsage,
                portDays,
              };
              const result = onChange(modelFields);
              value = result?.cargo6_rate ?? value;
            }
            if (errors.cargo6_rate?.hasError) {
              runValidationTasks("cargo6_rate", value);
            }
            setCargo6_rate(value);
          }}
          onBlur={() => runValidationTasks("cargo6_rate", cargo6_rate)}
          errorMessage={errors.cargo6_rate?.errorMessage}
          hasError={errors.cargo6_rate?.hasError}
          {...getOverrideProps(overrides, "cargo6_rate")}
        ></TextField>
      </Grid>
      <Divider
        orientation="horizontal"
        {...getOverrideProps(overrides, "SectionalElement7")}
      ></Divider>
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(3, auto)"
        {...getOverrideProps(overrides, "RowGrid41")}
      >
        <TextField
          label="Bunker Fuel Rate"
          isRequired={false}
          isReadOnly={false}
          type="number"
          step="any"
          value={bunker_rate}
          onChange={(e) => {
            let value = isNaN(parseFloat(e.target.value))
              ? e.target.value
              : parseFloat(e.target.value);
            if (onChange) {
              const modelFields = {
                Field4,
                vessel_ht1,
                vessel_hn5,
                vessel_hn7,
                vessel_hn9,
                vessel_hn10,
                vessel_ht20,
                vessel_ht21,
                port1,
                port1_fees,
                port1_port_call,
                port1_crane_usage,
                port2,
                port2_fees,
                port2_port_call,
                port2_crane_usage,
                port3,
                port3_fees,
                port3_port_call,
                port3_crane_usage,
                port4,
                port4_fees,
                port4_port_call,
                port4_crane_usage,
                port5,
                port5_fees,
                port6,
                port6_fees,
                cargo1,
                cargo1_quantity,
                cargo1_rate,
                cargo2,
                cargo2_quantity,
                cargo2_rate,
                cargo3,
                cargo3_quantity,
                cargo3_rate,
                cargo4,
                cargo4_quantity,
                cargo4_rate,
                cargo5,
                cargo5_quantity,
                cargo5_rate,
                cargo6,
                cargo6_quantity,
                cargo6_rate,
                bunker_rate: value,
                diesel_rate,
                lube_rate,
                surveying_fees,
                Field0,
                miscCosts,
                craneUsage,
                portDays,
              };
              const result = onChange(modelFields);
              value = result?.bunker_rate ?? value;
            }
            if (errors.bunker_rate?.hasError) {
              runValidationTasks("bunker_rate", value);
            }
            setBunker_rate(value);
          }}
          onBlur={() => runValidationTasks("bunker_rate", bunker_rate)}
          errorMessage={errors.bunker_rate?.errorMessage}
          hasError={errors.bunker_rate?.hasError}
          {...getOverrideProps(overrides, "bunker_rate")}
        ></TextField>
        <TextField
          label="Diesel Fuel Rate"
          isRequired={false}
          isReadOnly={false}
          type="number"
          step="any"
          value={diesel_rate}
          onChange={(e) => {
            let value = isNaN(parseFloat(e.target.value))
              ? e.target.value
              : parseFloat(e.target.value);
            if (onChange) {
              const modelFields = {
                Field4,
                vessel_ht1,
                vessel_hn5,
                vessel_hn7,
                vessel_hn9,
                vessel_hn10,
                vessel_ht20,
                vessel_ht21,
                port1,
                port1_fees,
                port1_port_call,
                port1_crane_usage,
                port2,
                port2_fees,
                port2_port_call,
                port2_crane_usage,
                port3,
                port3_fees,
                port3_port_call,
                port3_crane_usage,
                port4,
                port4_fees,
                port4_port_call,
                port4_crane_usage,
                port5,
                port5_fees,
                port6,
                port6_fees,
                cargo1,
                cargo1_quantity,
                cargo1_rate,
                cargo2,
                cargo2_quantity,
                cargo2_rate,
                cargo3,
                cargo3_quantity,
                cargo3_rate,
                cargo4,
                cargo4_quantity,
                cargo4_rate,
                cargo5,
                cargo5_quantity,
                cargo5_rate,
                cargo6,
                cargo6_quantity,
                cargo6_rate,
                bunker_rate,
                diesel_rate: value,
                lube_rate,
                surveying_fees,
                Field0,
                miscCosts,
                craneUsage,
                portDays,
              };
              const result = onChange(modelFields);
              value = result?.diesel_rate ?? value;
            }
            if (errors.diesel_rate?.hasError) {
              runValidationTasks("diesel_rate", value);
            }
            setDiesel_rate(value);
          }}
          onBlur={() => runValidationTasks("diesel_rate", diesel_rate)}
          errorMessage={errors.diesel_rate?.errorMessage}
          hasError={errors.diesel_rate?.hasError}
          {...getOverrideProps(overrides, "diesel_rate")}
        ></TextField>
        <TextField
          label="Lube Rate"
          type="number"
          step="any"
          value={lube_rate}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                Field4,
                vessel_ht1,
                vessel_hn5,
                vessel_hn7,
                vessel_hn9,
                vessel_hn10,
                vessel_ht20,
                vessel_ht21,
                port1,
                port1_fees,
                port1_port_call,
                port1_crane_usage,
                port2,
                port2_fees,
                port2_port_call,
                port2_crane_usage,
                port3,
                port3_fees,
                port3_port_call,
                port3_crane_usage,
                port4,
                port4_fees,
                port4_port_call,
                port4_crane_usage,
                port5,
                port5_fees,
                port6,
                port6_fees,
                cargo1,
                cargo1_quantity,
                cargo1_rate,
                cargo2,
                cargo2_quantity,
                cargo2_rate,
                cargo3,
                cargo3_quantity,
                cargo3_rate,
                cargo4,
                cargo4_quantity,
                cargo4_rate,
                cargo5,
                cargo5_quantity,
                cargo5_rate,
                cargo6,
                cargo6_quantity,
                cargo6_rate,
                bunker_rate,
                diesel_rate,
                lube_rate: value,
                surveying_fees,
                Field0,
                miscCosts,
                craneUsage,
                portDays,
              };
              const result = onChange(modelFields);
              value = result?.lube_rate ?? value;
            }
            if (errors.lube_rate?.hasError) {
              runValidationTasks("lube_rate", value);
            }
            setLube_rate(value);
          }}
          onBlur={() => runValidationTasks("lube_rate", lube_rate)}
          errorMessage={errors.lube_rate?.errorMessage}
          hasError={errors.lube_rate?.hasError}
          {...getOverrideProps(overrides, "lube_rate")}
        ></TextField>
      </Grid>
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(3, auto)"
        {...getOverrideProps(overrides, "RowGrid42")}
      >
        <TextField
          label="Surverying Fees"
          type="number"
          step="any"
          value={surveying_fees}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                Field4,
                vessel_ht1,
                vessel_hn5,
                vessel_hn7,
                vessel_hn9,
                vessel_hn10,
                vessel_ht20,
                vessel_ht21,
                port1,
                port1_fees,
                port1_port_call,
                port1_crane_usage,
                port2,
                port2_fees,
                port2_port_call,
                port2_crane_usage,
                port3,
                port3_fees,
                port3_port_call,
                port3_crane_usage,
                port4,
                port4_fees,
                port4_port_call,
                port4_crane_usage,
                port5,
                port5_fees,
                port6,
                port6_fees,
                cargo1,
                cargo1_quantity,
                cargo1_rate,
                cargo2,
                cargo2_quantity,
                cargo2_rate,
                cargo3,
                cargo3_quantity,
                cargo3_rate,
                cargo4,
                cargo4_quantity,
                cargo4_rate,
                cargo5,
                cargo5_quantity,
                cargo5_rate,
                cargo6,
                cargo6_quantity,
                cargo6_rate,
                bunker_rate,
                diesel_rate,
                lube_rate,
                surveying_fees: value,
                Field0,
                miscCosts,
                craneUsage,
                portDays,
              };
              const result = onChange(modelFields);
              value = result?.surveying_fees ?? value;
            }
            if (errors.surveying_fees?.hasError) {
              runValidationTasks("surveying_fees", value);
            }
            setSurveying_fees(value);
          }}
          onBlur={() => runValidationTasks("surveying_fees", surveying_fees)}
          errorMessage={errors.surveying_fees?.errorMessage}
          hasError={errors.surveying_fees?.hasError}
          {...getOverrideProps(overrides, "surveying_fees")}
        ></TextField>
        <TextField
          label="Cargo Brokerage Fees"
          type="number"
          step="any"
          value={Field0}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                Field4,
                vessel_ht1,
                vessel_hn5,
                vessel_hn7,
                vessel_hn9,
                vessel_hn10,
                vessel_ht20,
                vessel_ht21,
                port1,
                port1_fees,
                port1_port_call,
                port1_crane_usage,
                port2,
                port2_fees,
                port2_port_call,
                port2_crane_usage,
                port3,
                port3_fees,
                port3_port_call,
                port3_crane_usage,
                port4,
                port4_fees,
                port4_port_call,
                port4_crane_usage,
                port5,
                port5_fees,
                port6,
                port6_fees,
                cargo1,
                cargo1_quantity,
                cargo1_rate,
                cargo2,
                cargo2_quantity,
                cargo2_rate,
                cargo3,
                cargo3_quantity,
                cargo3_rate,
                cargo4,
                cargo4_quantity,
                cargo4_rate,
                cargo5,
                cargo5_quantity,
                cargo5_rate,
                cargo6,
                cargo6_quantity,
                cargo6_rate,
                bunker_rate,
                diesel_rate,
                lube_rate,
                surveying_fees,
                Field0: value,
                miscCosts,
                craneUsage,
                portDays,
              };
              const result = onChange(modelFields);
              value = result?.Field0 ?? value;
            }
            if (errors.Field0?.hasError) {
              runValidationTasks("Field0", value);
            }
            setField0(value);
          }}
          onBlur={() => runValidationTasks("Field0", Field0)}
          errorMessage={errors.Field0?.errorMessage}
          hasError={errors.Field0?.hasError}
          {...getOverrideProps(overrides, "Field0")}
        ></TextField>
        <TextField
          label="Misc Costs"
          isRequired={false}
          isReadOnly={false}
          type="number"
          step="any"
          value={miscCosts}
          onChange={(e) => {
            let value = isNaN(parseFloat(e.target.value))
              ? e.target.value
              : parseFloat(e.target.value);
            if (onChange) {
              const modelFields = {
                Field4,
                vessel_ht1,
                vessel_hn5,
                vessel_hn7,
                vessel_hn9,
                vessel_hn10,
                vessel_ht20,
                vessel_ht21,
                port1,
                port1_fees,
                port1_port_call,
                port1_crane_usage,
                port2,
                port2_fees,
                port2_port_call,
                port2_crane_usage,
                port3,
                port3_fees,
                port3_port_call,
                port3_crane_usage,
                port4,
                port4_fees,
                port4_port_call,
                port4_crane_usage,
                port5,
                port5_fees,
                port6,
                port6_fees,
                cargo1,
                cargo1_quantity,
                cargo1_rate,
                cargo2,
                cargo2_quantity,
                cargo2_rate,
                cargo3,
                cargo3_quantity,
                cargo3_rate,
                cargo4,
                cargo4_quantity,
                cargo4_rate,
                cargo5,
                cargo5_quantity,
                cargo5_rate,
                cargo6,
                cargo6_quantity,
                cargo6_rate,
                bunker_rate,
                diesel_rate,
                lube_rate,
                surveying_fees,
                Field0,
                miscCosts: value,
                craneUsage,
                portDays,
              };
              const result = onChange(modelFields);
              value = result?.miscCosts ?? value;
            }
            if (errors.miscCosts?.hasError) {
              runValidationTasks("miscCosts", value);
            }
            setMiscCosts(value);
          }}
          onBlur={() => runValidationTasks("miscCosts", miscCosts)}
          errorMessage={errors.miscCosts?.errorMessage}
          hasError={errors.miscCosts?.hasError}
          {...getOverrideProps(overrides, "miscCosts")}
        ></TextField>
      </Grid>
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(2, auto)"
        {...getOverrideProps(overrides, "RowGrid43")}
      >
        <TextField
          label="Total Crane Usage (Hours)"
          isRequired={false}
          isReadOnly={false}
          type="number"
          step="any"
          value={craneUsage}
          onChange={(e) => {
            let value = isNaN(parseFloat(e.target.value))
              ? e.target.value
              : parseFloat(e.target.value);
            if (onChange) {
              const modelFields = {
                Field4,
                vessel_ht1,
                vessel_hn5,
                vessel_hn7,
                vessel_hn9,
                vessel_hn10,
                vessel_ht20,
                vessel_ht21,
                port1,
                port1_fees,
                port1_port_call,
                port1_crane_usage,
                port2,
                port2_fees,
                port2_port_call,
                port2_crane_usage,
                port3,
                port3_fees,
                port3_port_call,
                port3_crane_usage,
                port4,
                port4_fees,
                port4_port_call,
                port4_crane_usage,
                port5,
                port5_fees,
                port6,
                port6_fees,
                cargo1,
                cargo1_quantity,
                cargo1_rate,
                cargo2,
                cargo2_quantity,
                cargo2_rate,
                cargo3,
                cargo3_quantity,
                cargo3_rate,
                cargo4,
                cargo4_quantity,
                cargo4_rate,
                cargo5,
                cargo5_quantity,
                cargo5_rate,
                cargo6,
                cargo6_quantity,
                cargo6_rate,
                bunker_rate,
                diesel_rate,
                lube_rate,
                surveying_fees,
                Field0,
                miscCosts,
                craneUsage: value,
                portDays,
              };
              const result = onChange(modelFields);
              value = result?.craneUsage ?? value;
            }
            if (errors.craneUsage?.hasError) {
              runValidationTasks("craneUsage", value);
            }
            setCraneUsage(value);
          }}
          onBlur={() => runValidationTasks("craneUsage", craneUsage)}
          errorMessage={errors.craneUsage?.errorMessage}
          hasError={errors.craneUsage?.hasError}
          {...getOverrideProps(overrides, "craneUsage")}
        ></TextField>
        <TextField
          label="Total Port Days"
          isRequired={false}
          isReadOnly={false}
          type="number"
          step="any"
          value={portDays}
          onChange={(e) => {
            let value = isNaN(parseFloat(e.target.value))
              ? e.target.value
              : parseFloat(e.target.value);
            if (onChange) {
              const modelFields = {
                Field4,
                vessel_ht1,
                vessel_hn5,
                vessel_hn7,
                vessel_hn9,
                vessel_hn10,
                vessel_ht20,
                vessel_ht21,
                port1,
                port1_fees,
                port1_port_call,
                port1_crane_usage,
                port2,
                port2_fees,
                port2_port_call,
                port2_crane_usage,
                port3,
                port3_fees,
                port3_port_call,
                port3_crane_usage,
                port4,
                port4_fees,
                port4_port_call,
                port4_crane_usage,
                port5,
                port5_fees,
                port6,
                port6_fees,
                cargo1,
                cargo1_quantity,
                cargo1_rate,
                cargo2,
                cargo2_quantity,
                cargo2_rate,
                cargo3,
                cargo3_quantity,
                cargo3_rate,
                cargo4,
                cargo4_quantity,
                cargo4_rate,
                cargo5,
                cargo5_quantity,
                cargo5_rate,
                cargo6,
                cargo6_quantity,
                cargo6_rate,
                bunker_rate,
                diesel_rate,
                lube_rate,
                surveying_fees,
                Field0,
                miscCosts,
                craneUsage,
                portDays: value,
              };
              const result = onChange(modelFields);
              value = result?.portDays ?? value;
            }
            if (errors.portDays?.hasError) {
              runValidationTasks("portDays", value);
            }
            setPortDays(value);
          }}
          onBlur={() => runValidationTasks("portDays", portDays)}
          errorMessage={errors.portDays?.errorMessage}
          hasError={errors.portDays?.hasError}
          {...getOverrideProps(overrides, "portDays")}
        ></TextField>
      </Grid>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap={tokens.space.xxxs.value}
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
