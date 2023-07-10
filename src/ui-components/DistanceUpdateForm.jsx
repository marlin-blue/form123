/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Distance } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function DistanceUpdateForm(props) {
  const {
    id: idProp,
    distance: distanceModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    port1: "",
    port2: "",
    port3: "",
    port4: "",
    port5: "",
    port6: "",
    cargo1: "",
    cargo2: "",
    cargo3: "",
    cargo4: "",
    cargo5: "",
    cargo6: "",
    miscCosts: "",
    craneUsage: "",
    cargo5_quanity: "",
    cargo6_quantity: "",
    cargo4_quantity: "",
    cargo3_quantity: "",
    cargo2_quantity: "",
    cargo1_quantity: "",
    cargo3_rate: "",
    cargo4_rate: "",
    cargo5_rate: "",
    cargo6_rate: "",
    cargo1_rate: "",
    cargo2_rate: "",
    portDays: "",
    bunker_rate: "",
    diesel_rate: "",
  };
  const [port1, setPort1] = React.useState(initialValues.port1);
  const [port2, setPort2] = React.useState(initialValues.port2);
  const [port3, setPort3] = React.useState(initialValues.port3);
  const [port4, setPort4] = React.useState(initialValues.port4);
  const [port5, setPort5] = React.useState(initialValues.port5);
  const [port6, setPort6] = React.useState(initialValues.port6);
  const [cargo1, setCargo1] = React.useState(initialValues.cargo1);
  const [cargo2, setCargo2] = React.useState(initialValues.cargo2);
  const [cargo3, setCargo3] = React.useState(initialValues.cargo3);
  const [cargo4, setCargo4] = React.useState(initialValues.cargo4);
  const [cargo5, setCargo5] = React.useState(initialValues.cargo5);
  const [cargo6, setCargo6] = React.useState(initialValues.cargo6);
  const [miscCosts, setMiscCosts] = React.useState(initialValues.miscCosts);
  const [craneUsage, setCraneUsage] = React.useState(initialValues.craneUsage);
  const [cargo5_quanity, setCargo5_quanity] = React.useState(
    initialValues.cargo5_quanity
  );
  const [cargo6_quantity, setCargo6_quantity] = React.useState(
    initialValues.cargo6_quantity
  );
  const [cargo4_quantity, setCargo4_quantity] = React.useState(
    initialValues.cargo4_quantity
  );
  const [cargo3_quantity, setCargo3_quantity] = React.useState(
    initialValues.cargo3_quantity
  );
  const [cargo2_quantity, setCargo2_quantity] = React.useState(
    initialValues.cargo2_quantity
  );
  const [cargo1_quantity, setCargo1_quantity] = React.useState(
    initialValues.cargo1_quantity
  );
  const [cargo3_rate, setCargo3_rate] = React.useState(
    initialValues.cargo3_rate
  );
  const [cargo4_rate, setCargo4_rate] = React.useState(
    initialValues.cargo4_rate
  );
  const [cargo5_rate, setCargo5_rate] = React.useState(
    initialValues.cargo5_rate
  );
  const [cargo6_rate, setCargo6_rate] = React.useState(
    initialValues.cargo6_rate
  );
  const [cargo1_rate, setCargo1_rate] = React.useState(
    initialValues.cargo1_rate
  );
  const [cargo2_rate, setCargo2_rate] = React.useState(
    initialValues.cargo2_rate
  );
  const [portDays, setPortDays] = React.useState(initialValues.portDays);
  const [bunker_rate, setBunker_rate] = React.useState(
    initialValues.bunker_rate
  );
  const [diesel_rate, setDiesel_rate] = React.useState(
    initialValues.diesel_rate
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = distanceRecord
      ? { ...initialValues, ...distanceRecord }
      : initialValues;
    setPort1(cleanValues.port1);
    setPort2(cleanValues.port2);
    setPort3(cleanValues.port3);
    setPort4(cleanValues.port4);
    setPort5(cleanValues.port5);
    setPort6(cleanValues.port6);
    setCargo1(cleanValues.cargo1);
    setCargo2(cleanValues.cargo2);
    setCargo3(cleanValues.cargo3);
    setCargo4(cleanValues.cargo4);
    setCargo5(cleanValues.cargo5);
    setCargo6(cleanValues.cargo6);
    setMiscCosts(cleanValues.miscCosts);
    setCraneUsage(cleanValues.craneUsage);
    setCargo5_quanity(cleanValues.cargo5_quanity);
    setCargo6_quantity(cleanValues.cargo6_quantity);
    setCargo4_quantity(cleanValues.cargo4_quantity);
    setCargo3_quantity(cleanValues.cargo3_quantity);
    setCargo2_quantity(cleanValues.cargo2_quantity);
    setCargo1_quantity(cleanValues.cargo1_quantity);
    setCargo3_rate(cleanValues.cargo3_rate);
    setCargo4_rate(cleanValues.cargo4_rate);
    setCargo5_rate(cleanValues.cargo5_rate);
    setCargo6_rate(cleanValues.cargo6_rate);
    setCargo1_rate(cleanValues.cargo1_rate);
    setCargo2_rate(cleanValues.cargo2_rate);
    setPortDays(cleanValues.portDays);
    setBunker_rate(cleanValues.bunker_rate);
    setDiesel_rate(cleanValues.diesel_rate);
    setErrors({});
  };
  const [distanceRecord, setDistanceRecord] = React.useState(distanceModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Distance, idProp)
        : distanceModelProp;
      setDistanceRecord(record);
    };
    queryData();
  }, [idProp, distanceModelProp]);
  React.useEffect(resetStateValues, [distanceRecord]);
  const validations = {
    port1: [],
    port2: [],
    port3: [],
    port4: [],
    port5: [],
    port6: [],
    cargo1: [],
    cargo2: [],
    cargo3: [],
    cargo4: [],
    cargo5: [],
    cargo6: [],
    miscCosts: [],
    craneUsage: [],
    cargo5_quanity: [],
    cargo6_quantity: [],
    cargo4_quantity: [],
    cargo3_quantity: [],
    cargo2_quantity: [],
    cargo1_quantity: [],
    cargo3_rate: [],
    cargo4_rate: [],
    cargo5_rate: [],
    cargo6_rate: [],
    cargo1_rate: [],
    cargo2_rate: [],
    portDays: [],
    bunker_rate: [],
    diesel_rate: [],
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
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          port1,
          port2,
          port3,
          port4,
          port5,
          port6,
          cargo1,
          cargo2,
          cargo3,
          cargo4,
          cargo5,
          cargo6,
          miscCosts,
          craneUsage,
          cargo5_quanity,
          cargo6_quantity,
          cargo4_quantity,
          cargo3_quantity,
          cargo2_quantity,
          cargo1_quantity,
          cargo3_rate,
          cargo4_rate,
          cargo5_rate,
          cargo6_rate,
          cargo1_rate,
          cargo2_rate,
          portDays,
          bunker_rate,
          diesel_rate,
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
          await DataStore.save(
            Distance.copyOf(distanceRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "DistanceUpdateForm")}
      {...rest}
    >
      <TextField
        label="Port1"
        isRequired={false}
        isReadOnly={false}
        value={port1}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              port1: value,
              port2,
              port3,
              port4,
              port5,
              port6,
              cargo1,
              cargo2,
              cargo3,
              cargo4,
              cargo5,
              cargo6,
              miscCosts,
              craneUsage,
              cargo5_quanity,
              cargo6_quantity,
              cargo4_quantity,
              cargo3_quantity,
              cargo2_quantity,
              cargo1_quantity,
              cargo3_rate,
              cargo4_rate,
              cargo5_rate,
              cargo6_rate,
              cargo1_rate,
              cargo2_rate,
              portDays,
              bunker_rate,
              diesel_rate,
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
      ></TextField>
      <TextField
        label="Port2"
        isRequired={false}
        isReadOnly={false}
        value={port2}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              port1,
              port2: value,
              port3,
              port4,
              port5,
              port6,
              cargo1,
              cargo2,
              cargo3,
              cargo4,
              cargo5,
              cargo6,
              miscCosts,
              craneUsage,
              cargo5_quanity,
              cargo6_quantity,
              cargo4_quantity,
              cargo3_quantity,
              cargo2_quantity,
              cargo1_quantity,
              cargo3_rate,
              cargo4_rate,
              cargo5_rate,
              cargo6_rate,
              cargo1_rate,
              cargo2_rate,
              portDays,
              bunker_rate,
              diesel_rate,
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
      ></TextField>
      <TextField
        label="Port3"
        isRequired={false}
        isReadOnly={false}
        value={port3}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              port1,
              port2,
              port3: value,
              port4,
              port5,
              port6,
              cargo1,
              cargo2,
              cargo3,
              cargo4,
              cargo5,
              cargo6,
              miscCosts,
              craneUsage,
              cargo5_quanity,
              cargo6_quantity,
              cargo4_quantity,
              cargo3_quantity,
              cargo2_quantity,
              cargo1_quantity,
              cargo3_rate,
              cargo4_rate,
              cargo5_rate,
              cargo6_rate,
              cargo1_rate,
              cargo2_rate,
              portDays,
              bunker_rate,
              diesel_rate,
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
      ></TextField>
      <TextField
        label="Port4"
        isRequired={false}
        isReadOnly={false}
        value={port4}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              port1,
              port2,
              port3,
              port4: value,
              port5,
              port6,
              cargo1,
              cargo2,
              cargo3,
              cargo4,
              cargo5,
              cargo6,
              miscCosts,
              craneUsage,
              cargo5_quanity,
              cargo6_quantity,
              cargo4_quantity,
              cargo3_quantity,
              cargo2_quantity,
              cargo1_quantity,
              cargo3_rate,
              cargo4_rate,
              cargo5_rate,
              cargo6_rate,
              cargo1_rate,
              cargo2_rate,
              portDays,
              bunker_rate,
              diesel_rate,
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
      ></TextField>
      <TextField
        label="Port5"
        isRequired={false}
        isReadOnly={false}
        value={port5}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              port1,
              port2,
              port3,
              port4,
              port5: value,
              port6,
              cargo1,
              cargo2,
              cargo3,
              cargo4,
              cargo5,
              cargo6,
              miscCosts,
              craneUsage,
              cargo5_quanity,
              cargo6_quantity,
              cargo4_quantity,
              cargo3_quantity,
              cargo2_quantity,
              cargo1_quantity,
              cargo3_rate,
              cargo4_rate,
              cargo5_rate,
              cargo6_rate,
              cargo1_rate,
              cargo2_rate,
              portDays,
              bunker_rate,
              diesel_rate,
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
      ></TextField>
      <TextField
        label="Port6"
        isRequired={false}
        isReadOnly={false}
        value={port6}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              port1,
              port2,
              port3,
              port4,
              port5,
              port6: value,
              cargo1,
              cargo2,
              cargo3,
              cargo4,
              cargo5,
              cargo6,
              miscCosts,
              craneUsage,
              cargo5_quanity,
              cargo6_quantity,
              cargo4_quantity,
              cargo3_quantity,
              cargo2_quantity,
              cargo1_quantity,
              cargo3_rate,
              cargo4_rate,
              cargo5_rate,
              cargo6_rate,
              cargo1_rate,
              cargo2_rate,
              portDays,
              bunker_rate,
              diesel_rate,
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
      ></TextField>
      <TextField
        label="Cargo1"
        isRequired={false}
        isReadOnly={false}
        value={cargo1}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              port1,
              port2,
              port3,
              port4,
              port5,
              port6,
              cargo1: value,
              cargo2,
              cargo3,
              cargo4,
              cargo5,
              cargo6,
              miscCosts,
              craneUsage,
              cargo5_quanity,
              cargo6_quantity,
              cargo4_quantity,
              cargo3_quantity,
              cargo2_quantity,
              cargo1_quantity,
              cargo3_rate,
              cargo4_rate,
              cargo5_rate,
              cargo6_rate,
              cargo1_rate,
              cargo2_rate,
              portDays,
              bunker_rate,
              diesel_rate,
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
      ></TextField>
      <TextField
        label="Cargo2"
        isRequired={false}
        isReadOnly={false}
        value={cargo2}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              port1,
              port2,
              port3,
              port4,
              port5,
              port6,
              cargo1,
              cargo2: value,
              cargo3,
              cargo4,
              cargo5,
              cargo6,
              miscCosts,
              craneUsage,
              cargo5_quanity,
              cargo6_quantity,
              cargo4_quantity,
              cargo3_quantity,
              cargo2_quantity,
              cargo1_quantity,
              cargo3_rate,
              cargo4_rate,
              cargo5_rate,
              cargo6_rate,
              cargo1_rate,
              cargo2_rate,
              portDays,
              bunker_rate,
              diesel_rate,
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
      ></TextField>
      <TextField
        label="Cargo3"
        isRequired={false}
        isReadOnly={false}
        value={cargo3}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              port1,
              port2,
              port3,
              port4,
              port5,
              port6,
              cargo1,
              cargo2,
              cargo3: value,
              cargo4,
              cargo5,
              cargo6,
              miscCosts,
              craneUsage,
              cargo5_quanity,
              cargo6_quantity,
              cargo4_quantity,
              cargo3_quantity,
              cargo2_quantity,
              cargo1_quantity,
              cargo3_rate,
              cargo4_rate,
              cargo5_rate,
              cargo6_rate,
              cargo1_rate,
              cargo2_rate,
              portDays,
              bunker_rate,
              diesel_rate,
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
      ></TextField>
      <TextField
        label="Cargo4"
        isRequired={false}
        isReadOnly={false}
        value={cargo4}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              port1,
              port2,
              port3,
              port4,
              port5,
              port6,
              cargo1,
              cargo2,
              cargo3,
              cargo4: value,
              cargo5,
              cargo6,
              miscCosts,
              craneUsage,
              cargo5_quanity,
              cargo6_quantity,
              cargo4_quantity,
              cargo3_quantity,
              cargo2_quantity,
              cargo1_quantity,
              cargo3_rate,
              cargo4_rate,
              cargo5_rate,
              cargo6_rate,
              cargo1_rate,
              cargo2_rate,
              portDays,
              bunker_rate,
              diesel_rate,
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
      ></TextField>
      <TextField
        label="Cargo5"
        isRequired={false}
        isReadOnly={false}
        value={cargo5}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              port1,
              port2,
              port3,
              port4,
              port5,
              port6,
              cargo1,
              cargo2,
              cargo3,
              cargo4,
              cargo5: value,
              cargo6,
              miscCosts,
              craneUsage,
              cargo5_quanity,
              cargo6_quantity,
              cargo4_quantity,
              cargo3_quantity,
              cargo2_quantity,
              cargo1_quantity,
              cargo3_rate,
              cargo4_rate,
              cargo5_rate,
              cargo6_rate,
              cargo1_rate,
              cargo2_rate,
              portDays,
              bunker_rate,
              diesel_rate,
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
      ></TextField>
      <TextField
        label="Cargo6"
        isRequired={false}
        isReadOnly={false}
        value={cargo6}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              port1,
              port2,
              port3,
              port4,
              port5,
              port6,
              cargo1,
              cargo2,
              cargo3,
              cargo4,
              cargo5,
              cargo6: value,
              miscCosts,
              craneUsage,
              cargo5_quanity,
              cargo6_quantity,
              cargo4_quantity,
              cargo3_quantity,
              cargo2_quantity,
              cargo1_quantity,
              cargo3_rate,
              cargo4_rate,
              cargo5_rate,
              cargo6_rate,
              cargo1_rate,
              cargo2_rate,
              portDays,
              bunker_rate,
              diesel_rate,
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
      ></TextField>
      <TextField
        label="Misc costs"
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
              port1,
              port2,
              port3,
              port4,
              port5,
              port6,
              cargo1,
              cargo2,
              cargo3,
              cargo4,
              cargo5,
              cargo6,
              miscCosts: value,
              craneUsage,
              cargo5_quanity,
              cargo6_quantity,
              cargo4_quantity,
              cargo3_quantity,
              cargo2_quantity,
              cargo1_quantity,
              cargo3_rate,
              cargo4_rate,
              cargo5_rate,
              cargo6_rate,
              cargo1_rate,
              cargo2_rate,
              portDays,
              bunker_rate,
              diesel_rate,
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
      <TextField
        label="Crane usage"
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
              port1,
              port2,
              port3,
              port4,
              port5,
              port6,
              cargo1,
              cargo2,
              cargo3,
              cargo4,
              cargo5,
              cargo6,
              miscCosts,
              craneUsage: value,
              cargo5_quanity,
              cargo6_quantity,
              cargo4_quantity,
              cargo3_quantity,
              cargo2_quantity,
              cargo1_quantity,
              cargo3_rate,
              cargo4_rate,
              cargo5_rate,
              cargo6_rate,
              cargo1_rate,
              cargo2_rate,
              portDays,
              bunker_rate,
              diesel_rate,
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
        label="Cargo5 quanity"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={cargo5_quanity}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              port1,
              port2,
              port3,
              port4,
              port5,
              port6,
              cargo1,
              cargo2,
              cargo3,
              cargo4,
              cargo5,
              cargo6,
              miscCosts,
              craneUsage,
              cargo5_quanity: value,
              cargo6_quantity,
              cargo4_quantity,
              cargo3_quantity,
              cargo2_quantity,
              cargo1_quantity,
              cargo3_rate,
              cargo4_rate,
              cargo5_rate,
              cargo6_rate,
              cargo1_rate,
              cargo2_rate,
              portDays,
              bunker_rate,
              diesel_rate,
            };
            const result = onChange(modelFields);
            value = result?.cargo5_quanity ?? value;
          }
          if (errors.cargo5_quanity?.hasError) {
            runValidationTasks("cargo5_quanity", value);
          }
          setCargo5_quanity(value);
        }}
        onBlur={() => runValidationTasks("cargo5_quanity", cargo5_quanity)}
        errorMessage={errors.cargo5_quanity?.errorMessage}
        hasError={errors.cargo5_quanity?.hasError}
        {...getOverrideProps(overrides, "cargo5_quanity")}
      ></TextField>
      <TextField
        label="Cargo6 quantity"
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
              port1,
              port2,
              port3,
              port4,
              port5,
              port6,
              cargo1,
              cargo2,
              cargo3,
              cargo4,
              cargo5,
              cargo6,
              miscCosts,
              craneUsage,
              cargo5_quanity,
              cargo6_quantity: value,
              cargo4_quantity,
              cargo3_quantity,
              cargo2_quantity,
              cargo1_quantity,
              cargo3_rate,
              cargo4_rate,
              cargo5_rate,
              cargo6_rate,
              cargo1_rate,
              cargo2_rate,
              portDays,
              bunker_rate,
              diesel_rate,
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
        label="Cargo4 quantity"
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
              port1,
              port2,
              port3,
              port4,
              port5,
              port6,
              cargo1,
              cargo2,
              cargo3,
              cargo4,
              cargo5,
              cargo6,
              miscCosts,
              craneUsage,
              cargo5_quanity,
              cargo6_quantity,
              cargo4_quantity: value,
              cargo3_quantity,
              cargo2_quantity,
              cargo1_quantity,
              cargo3_rate,
              cargo4_rate,
              cargo5_rate,
              cargo6_rate,
              cargo1_rate,
              cargo2_rate,
              portDays,
              bunker_rate,
              diesel_rate,
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
        label="Cargo3 quantity"
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
              port1,
              port2,
              port3,
              port4,
              port5,
              port6,
              cargo1,
              cargo2,
              cargo3,
              cargo4,
              cargo5,
              cargo6,
              miscCosts,
              craneUsage,
              cargo5_quanity,
              cargo6_quantity,
              cargo4_quantity,
              cargo3_quantity: value,
              cargo2_quantity,
              cargo1_quantity,
              cargo3_rate,
              cargo4_rate,
              cargo5_rate,
              cargo6_rate,
              cargo1_rate,
              cargo2_rate,
              portDays,
              bunker_rate,
              diesel_rate,
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
        label="Cargo2 quantity"
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
              port1,
              port2,
              port3,
              port4,
              port5,
              port6,
              cargo1,
              cargo2,
              cargo3,
              cargo4,
              cargo5,
              cargo6,
              miscCosts,
              craneUsage,
              cargo5_quanity,
              cargo6_quantity,
              cargo4_quantity,
              cargo3_quantity,
              cargo2_quantity: value,
              cargo1_quantity,
              cargo3_rate,
              cargo4_rate,
              cargo5_rate,
              cargo6_rate,
              cargo1_rate,
              cargo2_rate,
              portDays,
              bunker_rate,
              diesel_rate,
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
        label="Cargo1 quantity"
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
              port1,
              port2,
              port3,
              port4,
              port5,
              port6,
              cargo1,
              cargo2,
              cargo3,
              cargo4,
              cargo5,
              cargo6,
              miscCosts,
              craneUsage,
              cargo5_quanity,
              cargo6_quantity,
              cargo4_quantity,
              cargo3_quantity,
              cargo2_quantity,
              cargo1_quantity: value,
              cargo3_rate,
              cargo4_rate,
              cargo5_rate,
              cargo6_rate,
              cargo1_rate,
              cargo2_rate,
              portDays,
              bunker_rate,
              diesel_rate,
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
        label="Cargo3 rate"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={cargo3_rate}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              port1,
              port2,
              port3,
              port4,
              port5,
              port6,
              cargo1,
              cargo2,
              cargo3,
              cargo4,
              cargo5,
              cargo6,
              miscCosts,
              craneUsage,
              cargo5_quanity,
              cargo6_quantity,
              cargo4_quantity,
              cargo3_quantity,
              cargo2_quantity,
              cargo1_quantity,
              cargo3_rate: value,
              cargo4_rate,
              cargo5_rate,
              cargo6_rate,
              cargo1_rate,
              cargo2_rate,
              portDays,
              bunker_rate,
              diesel_rate,
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
      <TextField
        label="Cargo4 rate"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={cargo4_rate}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              port1,
              port2,
              port3,
              port4,
              port5,
              port6,
              cargo1,
              cargo2,
              cargo3,
              cargo4,
              cargo5,
              cargo6,
              miscCosts,
              craneUsage,
              cargo5_quanity,
              cargo6_quantity,
              cargo4_quantity,
              cargo3_quantity,
              cargo2_quantity,
              cargo1_quantity,
              cargo3_rate,
              cargo4_rate: value,
              cargo5_rate,
              cargo6_rate,
              cargo1_rate,
              cargo2_rate,
              portDays,
              bunker_rate,
              diesel_rate,
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
      <TextField
        label="Cargo5 rate"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={cargo5_rate}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              port1,
              port2,
              port3,
              port4,
              port5,
              port6,
              cargo1,
              cargo2,
              cargo3,
              cargo4,
              cargo5,
              cargo6,
              miscCosts,
              craneUsage,
              cargo5_quanity,
              cargo6_quantity,
              cargo4_quantity,
              cargo3_quantity,
              cargo2_quantity,
              cargo1_quantity,
              cargo3_rate,
              cargo4_rate,
              cargo5_rate: value,
              cargo6_rate,
              cargo1_rate,
              cargo2_rate,
              portDays,
              bunker_rate,
              diesel_rate,
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
      <TextField
        label="Cargo6 rate"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={cargo6_rate}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              port1,
              port2,
              port3,
              port4,
              port5,
              port6,
              cargo1,
              cargo2,
              cargo3,
              cargo4,
              cargo5,
              cargo6,
              miscCosts,
              craneUsage,
              cargo5_quanity,
              cargo6_quantity,
              cargo4_quantity,
              cargo3_quantity,
              cargo2_quantity,
              cargo1_quantity,
              cargo3_rate,
              cargo4_rate,
              cargo5_rate,
              cargo6_rate: value,
              cargo1_rate,
              cargo2_rate,
              portDays,
              bunker_rate,
              diesel_rate,
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
      <TextField
        label="Cargo1 rate"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={cargo1_rate}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              port1,
              port2,
              port3,
              port4,
              port5,
              port6,
              cargo1,
              cargo2,
              cargo3,
              cargo4,
              cargo5,
              cargo6,
              miscCosts,
              craneUsage,
              cargo5_quanity,
              cargo6_quantity,
              cargo4_quantity,
              cargo3_quantity,
              cargo2_quantity,
              cargo1_quantity,
              cargo3_rate,
              cargo4_rate,
              cargo5_rate,
              cargo6_rate,
              cargo1_rate: value,
              cargo2_rate,
              portDays,
              bunker_rate,
              diesel_rate,
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
      <TextField
        label="Cargo2 rate"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={cargo2_rate}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              port1,
              port2,
              port3,
              port4,
              port5,
              port6,
              cargo1,
              cargo2,
              cargo3,
              cargo4,
              cargo5,
              cargo6,
              miscCosts,
              craneUsage,
              cargo5_quanity,
              cargo6_quantity,
              cargo4_quantity,
              cargo3_quantity,
              cargo2_quantity,
              cargo1_quantity,
              cargo3_rate,
              cargo4_rate,
              cargo5_rate,
              cargo6_rate,
              cargo1_rate,
              cargo2_rate: value,
              portDays,
              bunker_rate,
              diesel_rate,
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
      <TextField
        label="Port days"
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
              port1,
              port2,
              port3,
              port4,
              port5,
              port6,
              cargo1,
              cargo2,
              cargo3,
              cargo4,
              cargo5,
              cargo6,
              miscCosts,
              craneUsage,
              cargo5_quanity,
              cargo6_quantity,
              cargo4_quantity,
              cargo3_quantity,
              cargo2_quantity,
              cargo1_quantity,
              cargo3_rate,
              cargo4_rate,
              cargo5_rate,
              cargo6_rate,
              cargo1_rate,
              cargo2_rate,
              portDays: value,
              bunker_rate,
              diesel_rate,
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
      <TextField
        label="Bunker rate"
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
              port1,
              port2,
              port3,
              port4,
              port5,
              port6,
              cargo1,
              cargo2,
              cargo3,
              cargo4,
              cargo5,
              cargo6,
              miscCosts,
              craneUsage,
              cargo5_quanity,
              cargo6_quantity,
              cargo4_quantity,
              cargo3_quantity,
              cargo2_quantity,
              cargo1_quantity,
              cargo3_rate,
              cargo4_rate,
              cargo5_rate,
              cargo6_rate,
              cargo1_rate,
              cargo2_rate,
              portDays,
              bunker_rate: value,
              diesel_rate,
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
        label="Diesel rate"
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
              port1,
              port2,
              port3,
              port4,
              port5,
              port6,
              cargo1,
              cargo2,
              cargo3,
              cargo4,
              cargo5,
              cargo6,
              miscCosts,
              craneUsage,
              cargo5_quanity,
              cargo6_quantity,
              cargo4_quantity,
              cargo3_quantity,
              cargo2_quantity,
              cargo1_quantity,
              cargo3_rate,
              cargo4_rate,
              cargo5_rate,
              cargo6_rate,
              cargo1_rate,
              cargo2_rate,
              portDays,
              bunker_rate,
              diesel_rate: value,
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
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || distanceModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || distanceModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
