/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
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
    cargo5quantity: "",
    port1fees: "",
    port2fees: "",
    port3fees: "",
    port6fees: "",
    port5fees: "",
    port4fees: "",
    vesselhn5: false,
    vesselhn7: false,
    vesselhn9: false,
    surveyingfees: "",
    vesselht1: false,
    vesselhn10: false,
    vesselht20: false,
    vesselht21: false,
    luberate: "",
    Field4: "",
    port2craneusage: "",
    port2portcall: "",
    port1portcall: "",
    port1craneusage: "",
    port3portcall: "",
    port3craneusage: "",
    port4portcall: "",
    port4craneusage: "",
    port5portcall: "",
    port5craneusage: "",
    port6portcall: "",
    port6craneusage: "",
    brokeragefees: "",
    voyagetype: "",
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
  const [cargo5quantity, setCargo5quantity] = React.useState(
    initialValues.cargo5quantity
  );
  const [port1fees, setPort1fees] = React.useState(initialValues.port1fees);
  const [port2fees, setPort2fees] = React.useState(initialValues.port2fees);
  const [port3fees, setPort3fees] = React.useState(initialValues.port3fees);
  const [port6fees, setPort6fees] = React.useState(initialValues.port6fees);
  const [port5fees, setPort5fees] = React.useState(initialValues.port5fees);
  const [port4fees, setPort4fees] = React.useState(initialValues.port4fees);
  const [vesselhn5, setVesselhn5] = React.useState(initialValues.vesselhn5);
  const [vesselhn7, setVesselhn7] = React.useState(initialValues.vesselhn7);
  const [vesselhn9, setVesselhn9] = React.useState(initialValues.vesselhn9);
  const [surveyingfees, setSurveyingfees] = React.useState(
    initialValues.surveyingfees
  );
  const [vesselht1, setVesselht1] = React.useState(initialValues.vesselht1);
  const [vesselhn10, setVesselhn10] = React.useState(initialValues.vesselhn10);
  const [vesselht20, setVesselht20] = React.useState(initialValues.vesselht20);
  const [vesselht21, setVesselht21] = React.useState(initialValues.vesselht21);
  const [luberate, setLuberate] = React.useState(initialValues.luberate);
  const [Field4, setField4] = React.useState(initialValues.Field4);
  const [port2craneusage, setPort2craneusage] = React.useState(
    initialValues.port2craneusage
  );
  const [port2portcall, setPort2portcall] = React.useState(
    initialValues.port2portcall
  );
  const [port1portcall, setPort1portcall] = React.useState(
    initialValues.port1portcall
  );
  const [port1craneusage, setPort1craneusage] = React.useState(
    initialValues.port1craneusage
  );
  const [port3portcall, setPort3portcall] = React.useState(
    initialValues.port3portcall
  );
  const [port3craneusage, setPort3craneusage] = React.useState(
    initialValues.port3craneusage
  );
  const [port4portcall, setPort4portcall] = React.useState(
    initialValues.port4portcall
  );
  const [port4craneusage, setPort4craneusage] = React.useState(
    initialValues.port4craneusage
  );
  const [port5portcall, setPort5portcall] = React.useState(
    initialValues.port5portcall
  );
  const [port5craneusage, setPort5craneusage] = React.useState(
    initialValues.port5craneusage
  );
  const [port6portcall, setPort6portcall] = React.useState(
    initialValues.port6portcall
  );
  const [port6craneusage, setPort6craneusage] = React.useState(
    initialValues.port6craneusage
  );
  const [brokeragefees, setBrokeragefees] = React.useState(
    initialValues.brokeragefees
  );
  const [voyagetype, setVoyagetype] = React.useState(initialValues.voyagetype);
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
    setCargo5quantity(cleanValues.cargo5quantity);
    setPort1fees(cleanValues.port1fees);
    setPort2fees(cleanValues.port2fees);
    setPort3fees(cleanValues.port3fees);
    setPort6fees(cleanValues.port6fees);
    setPort5fees(cleanValues.port5fees);
    setPort4fees(cleanValues.port4fees);
    setVesselhn5(cleanValues.vesselhn5);
    setVesselhn7(cleanValues.vesselhn7);
    setVesselhn9(cleanValues.vesselhn9);
    setSurveyingfees(cleanValues.surveyingfees);
    setVesselht1(cleanValues.vesselht1);
    setVesselhn10(cleanValues.vesselhn10);
    setVesselht20(cleanValues.vesselht20);
    setVesselht21(cleanValues.vesselht21);
    setLuberate(cleanValues.luberate);
    setField4(cleanValues.Field4);
    setPort2craneusage(cleanValues.port2craneusage);
    setPort2portcall(cleanValues.port2portcall);
    setPort1portcall(cleanValues.port1portcall);
    setPort1craneusage(cleanValues.port1craneusage);
    setPort3portcall(cleanValues.port3portcall);
    setPort3craneusage(cleanValues.port3craneusage);
    setPort4portcall(cleanValues.port4portcall);
    setPort4craneusage(cleanValues.port4craneusage);
    setPort5portcall(cleanValues.port5portcall);
    setPort5craneusage(cleanValues.port5craneusage);
    setPort6portcall(cleanValues.port6portcall);
    setPort6craneusage(cleanValues.port6craneusage);
    setBrokeragefees(cleanValues.brokeragefees);
    setVoyagetype(cleanValues.voyagetype);
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
    cargo5quantity: [],
    port1fees: [],
    port2fees: [],
    port3fees: [],
    port6fees: [],
    port5fees: [],
    port4fees: [],
    vesselhn5: [],
    vesselhn7: [],
    vesselhn9: [],
    surveyingfees: [],
    vesselht1: [],
    vesselhn10: [],
    vesselht20: [],
    vesselht21: [],
    luberate: [],
    Field4: [],
    port2craneusage: [],
    port2portcall: [],
    port1portcall: [],
    port1craneusage: [],
    port3portcall: [],
    port3craneusage: [],
    port4portcall: [],
    port4craneusage: [],
    port5portcall: [],
    port5craneusage: [],
    port6portcall: [],
    port6craneusage: [],
    brokeragefees: [],
    voyagetype: [],
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
          cargo5quantity,
          port1fees,
          port2fees,
          port3fees,
          port6fees,
          port5fees,
          port4fees,
          vesselhn5,
          vesselhn7,
          vesselhn9,
          surveyingfees,
          vesselht1,
          vesselhn10,
          vesselht20,
          vesselht21,
          luberate,
          Field4,
          port2craneusage,
          port2portcall,
          port1portcall,
          port1craneusage,
          port3portcall,
          port3craneusage,
          port4portcall,
          port4craneusage,
          port5portcall,
          port5craneusage,
          port6portcall,
          port6craneusage,
          brokeragefees,
          voyagetype,
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
              cargo5quantity,
              port1fees,
              port2fees,
              port3fees,
              port6fees,
              port5fees,
              port4fees,
              vesselhn5,
              vesselhn7,
              vesselhn9,
              surveyingfees,
              vesselht1,
              vesselhn10,
              vesselht20,
              vesselht21,
              luberate,
              Field4,
              port2craneusage,
              port2portcall,
              port1portcall,
              port1craneusage,
              port3portcall,
              port3craneusage,
              port4portcall,
              port4craneusage,
              port5portcall,
              port5craneusage,
              port6portcall,
              port6craneusage,
              brokeragefees,
              voyagetype,
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
              cargo5quantity,
              port1fees,
              port2fees,
              port3fees,
              port6fees,
              port5fees,
              port4fees,
              vesselhn5,
              vesselhn7,
              vesselhn9,
              surveyingfees,
              vesselht1,
              vesselhn10,
              vesselht20,
              vesselht21,
              luberate,
              Field4,
              port2craneusage,
              port2portcall,
              port1portcall,
              port1craneusage,
              port3portcall,
              port3craneusage,
              port4portcall,
              port4craneusage,
              port5portcall,
              port5craneusage,
              port6portcall,
              port6craneusage,
              brokeragefees,
              voyagetype,
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
              cargo5quantity,
              port1fees,
              port2fees,
              port3fees,
              port6fees,
              port5fees,
              port4fees,
              vesselhn5,
              vesselhn7,
              vesselhn9,
              surveyingfees,
              vesselht1,
              vesselhn10,
              vesselht20,
              vesselht21,
              luberate,
              Field4,
              port2craneusage,
              port2portcall,
              port1portcall,
              port1craneusage,
              port3portcall,
              port3craneusage,
              port4portcall,
              port4craneusage,
              port5portcall,
              port5craneusage,
              port6portcall,
              port6craneusage,
              brokeragefees,
              voyagetype,
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
              cargo5quantity,
              port1fees,
              port2fees,
              port3fees,
              port6fees,
              port5fees,
              port4fees,
              vesselhn5,
              vesselhn7,
              vesselhn9,
              surveyingfees,
              vesselht1,
              vesselhn10,
              vesselht20,
              vesselht21,
              luberate,
              Field4,
              port2craneusage,
              port2portcall,
              port1portcall,
              port1craneusage,
              port3portcall,
              port3craneusage,
              port4portcall,
              port4craneusage,
              port5portcall,
              port5craneusage,
              port6portcall,
              port6craneusage,
              brokeragefees,
              voyagetype,
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
              cargo5quantity,
              port1fees,
              port2fees,
              port3fees,
              port6fees,
              port5fees,
              port4fees,
              vesselhn5,
              vesselhn7,
              vesselhn9,
              surveyingfees,
              vesselht1,
              vesselhn10,
              vesselht20,
              vesselht21,
              luberate,
              Field4,
              port2craneusage,
              port2portcall,
              port1portcall,
              port1craneusage,
              port3portcall,
              port3craneusage,
              port4portcall,
              port4craneusage,
              port5portcall,
              port5craneusage,
              port6portcall,
              port6craneusage,
              brokeragefees,
              voyagetype,
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
              cargo5quantity,
              port1fees,
              port2fees,
              port3fees,
              port6fees,
              port5fees,
              port4fees,
              vesselhn5,
              vesselhn7,
              vesselhn9,
              surveyingfees,
              vesselht1,
              vesselhn10,
              vesselht20,
              vesselht21,
              luberate,
              Field4,
              port2craneusage,
              port2portcall,
              port1portcall,
              port1craneusage,
              port3portcall,
              port3craneusage,
              port4portcall,
              port4craneusage,
              port5portcall,
              port5craneusage,
              port6portcall,
              port6craneusage,
              brokeragefees,
              voyagetype,
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
              cargo5quantity,
              port1fees,
              port2fees,
              port3fees,
              port6fees,
              port5fees,
              port4fees,
              vesselhn5,
              vesselhn7,
              vesselhn9,
              surveyingfees,
              vesselht1,
              vesselhn10,
              vesselht20,
              vesselht21,
              luberate,
              Field4,
              port2craneusage,
              port2portcall,
              port1portcall,
              port1craneusage,
              port3portcall,
              port3craneusage,
              port4portcall,
              port4craneusage,
              port5portcall,
              port5craneusage,
              port6portcall,
              port6craneusage,
              brokeragefees,
              voyagetype,
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
              cargo5quantity,
              port1fees,
              port2fees,
              port3fees,
              port6fees,
              port5fees,
              port4fees,
              vesselhn5,
              vesselhn7,
              vesselhn9,
              surveyingfees,
              vesselht1,
              vesselhn10,
              vesselht20,
              vesselht21,
              luberate,
              Field4,
              port2craneusage,
              port2portcall,
              port1portcall,
              port1craneusage,
              port3portcall,
              port3craneusage,
              port4portcall,
              port4craneusage,
              port5portcall,
              port5craneusage,
              port6portcall,
              port6craneusage,
              brokeragefees,
              voyagetype,
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
              cargo5quantity,
              port1fees,
              port2fees,
              port3fees,
              port6fees,
              port5fees,
              port4fees,
              vesselhn5,
              vesselhn7,
              vesselhn9,
              surveyingfees,
              vesselht1,
              vesselhn10,
              vesselht20,
              vesselht21,
              luberate,
              Field4,
              port2craneusage,
              port2portcall,
              port1portcall,
              port1craneusage,
              port3portcall,
              port3craneusage,
              port4portcall,
              port4craneusage,
              port5portcall,
              port5craneusage,
              port6portcall,
              port6craneusage,
              brokeragefees,
              voyagetype,
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
              cargo5quantity,
              port1fees,
              port2fees,
              port3fees,
              port6fees,
              port5fees,
              port4fees,
              vesselhn5,
              vesselhn7,
              vesselhn9,
              surveyingfees,
              vesselht1,
              vesselhn10,
              vesselht20,
              vesselht21,
              luberate,
              Field4,
              port2craneusage,
              port2portcall,
              port1portcall,
              port1craneusage,
              port3portcall,
              port3craneusage,
              port4portcall,
              port4craneusage,
              port5portcall,
              port5craneusage,
              port6portcall,
              port6craneusage,
              brokeragefees,
              voyagetype,
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
              cargo5quantity,
              port1fees,
              port2fees,
              port3fees,
              port6fees,
              port5fees,
              port4fees,
              vesselhn5,
              vesselhn7,
              vesselhn9,
              surveyingfees,
              vesselht1,
              vesselhn10,
              vesselht20,
              vesselht21,
              luberate,
              Field4,
              port2craneusage,
              port2portcall,
              port1portcall,
              port1craneusage,
              port3portcall,
              port3craneusage,
              port4portcall,
              port4craneusage,
              port5portcall,
              port5craneusage,
              port6portcall,
              port6craneusage,
              brokeragefees,
              voyagetype,
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
              cargo5quantity,
              port1fees,
              port2fees,
              port3fees,
              port6fees,
              port5fees,
              port4fees,
              vesselhn5,
              vesselhn7,
              vesselhn9,
              surveyingfees,
              vesselht1,
              vesselhn10,
              vesselht20,
              vesselht21,
              luberate,
              Field4,
              port2craneusage,
              port2portcall,
              port1portcall,
              port1craneusage,
              port3portcall,
              port3craneusage,
              port4portcall,
              port4craneusage,
              port5portcall,
              port5craneusage,
              port6portcall,
              port6craneusage,
              brokeragefees,
              voyagetype,
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
              cargo5quantity,
              port1fees,
              port2fees,
              port3fees,
              port6fees,
              port5fees,
              port4fees,
              vesselhn5,
              vesselhn7,
              vesselhn9,
              surveyingfees,
              vesselht1,
              vesselhn10,
              vesselht20,
              vesselht21,
              luberate,
              Field4,
              port2craneusage,
              port2portcall,
              port1portcall,
              port1craneusage,
              port3portcall,
              port3craneusage,
              port4portcall,
              port4craneusage,
              port5portcall,
              port5craneusage,
              port6portcall,
              port6craneusage,
              brokeragefees,
              voyagetype,
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
              cargo5quantity,
              port1fees,
              port2fees,
              port3fees,
              port6fees,
              port5fees,
              port4fees,
              vesselhn5,
              vesselhn7,
              vesselhn9,
              surveyingfees,
              vesselht1,
              vesselhn10,
              vesselht20,
              vesselht21,
              luberate,
              Field4,
              port2craneusage,
              port2portcall,
              port1portcall,
              port1craneusage,
              port3portcall,
              port3craneusage,
              port4portcall,
              port4craneusage,
              port5portcall,
              port5craneusage,
              port6portcall,
              port6craneusage,
              brokeragefees,
              voyagetype,
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
              cargo5quantity,
              port1fees,
              port2fees,
              port3fees,
              port6fees,
              port5fees,
              port4fees,
              vesselhn5,
              vesselhn7,
              vesselhn9,
              surveyingfees,
              vesselht1,
              vesselhn10,
              vesselht20,
              vesselht21,
              luberate,
              Field4,
              port2craneusage,
              port2portcall,
              port1portcall,
              port1craneusage,
              port3portcall,
              port3craneusage,
              port4portcall,
              port4craneusage,
              port5portcall,
              port5craneusage,
              port6portcall,
              port6craneusage,
              brokeragefees,
              voyagetype,
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
              cargo5quantity,
              port1fees,
              port2fees,
              port3fees,
              port6fees,
              port5fees,
              port4fees,
              vesselhn5,
              vesselhn7,
              vesselhn9,
              surveyingfees,
              vesselht1,
              vesselhn10,
              vesselht20,
              vesselht21,
              luberate,
              Field4,
              port2craneusage,
              port2portcall,
              port1portcall,
              port1craneusage,
              port3portcall,
              port3craneusage,
              port4portcall,
              port4craneusage,
              port5portcall,
              port5craneusage,
              port6portcall,
              port6craneusage,
              brokeragefees,
              voyagetype,
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
              cargo5quantity,
              port1fees,
              port2fees,
              port3fees,
              port6fees,
              port5fees,
              port4fees,
              vesselhn5,
              vesselhn7,
              vesselhn9,
              surveyingfees,
              vesselht1,
              vesselhn10,
              vesselht20,
              vesselht21,
              luberate,
              Field4,
              port2craneusage,
              port2portcall,
              port1portcall,
              port1craneusage,
              port3portcall,
              port3craneusage,
              port4portcall,
              port4craneusage,
              port5portcall,
              port5craneusage,
              port6portcall,
              port6craneusage,
              brokeragefees,
              voyagetype,
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
              cargo5quantity,
              port1fees,
              port2fees,
              port3fees,
              port6fees,
              port5fees,
              port4fees,
              vesselhn5,
              vesselhn7,
              vesselhn9,
              surveyingfees,
              vesselht1,
              vesselhn10,
              vesselht20,
              vesselht21,
              luberate,
              Field4,
              port2craneusage,
              port2portcall,
              port1portcall,
              port1craneusage,
              port3portcall,
              port3craneusage,
              port4portcall,
              port4craneusage,
              port5portcall,
              port5craneusage,
              port6portcall,
              port6craneusage,
              brokeragefees,
              voyagetype,
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
              cargo5quantity,
              port1fees,
              port2fees,
              port3fees,
              port6fees,
              port5fees,
              port4fees,
              vesselhn5,
              vesselhn7,
              vesselhn9,
              surveyingfees,
              vesselht1,
              vesselhn10,
              vesselht20,
              vesselht21,
              luberate,
              Field4,
              port2craneusage,
              port2portcall,
              port1portcall,
              port1craneusage,
              port3portcall,
              port3craneusage,
              port4portcall,
              port4craneusage,
              port5portcall,
              port5craneusage,
              port6portcall,
              port6craneusage,
              brokeragefees,
              voyagetype,
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
              cargo5quantity,
              port1fees,
              port2fees,
              port3fees,
              port6fees,
              port5fees,
              port4fees,
              vesselhn5,
              vesselhn7,
              vesselhn9,
              surveyingfees,
              vesselht1,
              vesselhn10,
              vesselht20,
              vesselht21,
              luberate,
              Field4,
              port2craneusage,
              port2portcall,
              port1portcall,
              port1craneusage,
              port3portcall,
              port3craneusage,
              port4portcall,
              port4craneusage,
              port5portcall,
              port5craneusage,
              port6portcall,
              port6craneusage,
              brokeragefees,
              voyagetype,
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
              cargo5quantity,
              port1fees,
              port2fees,
              port3fees,
              port6fees,
              port5fees,
              port4fees,
              vesselhn5,
              vesselhn7,
              vesselhn9,
              surveyingfees,
              vesselht1,
              vesselhn10,
              vesselht20,
              vesselht21,
              luberate,
              Field4,
              port2craneusage,
              port2portcall,
              port1portcall,
              port1craneusage,
              port3portcall,
              port3craneusage,
              port4portcall,
              port4craneusage,
              port5portcall,
              port5craneusage,
              port6portcall,
              port6craneusage,
              brokeragefees,
              voyagetype,
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
              cargo5quantity,
              port1fees,
              port2fees,
              port3fees,
              port6fees,
              port5fees,
              port4fees,
              vesselhn5,
              vesselhn7,
              vesselhn9,
              surveyingfees,
              vesselht1,
              vesselhn10,
              vesselht20,
              vesselht21,
              luberate,
              Field4,
              port2craneusage,
              port2portcall,
              port1portcall,
              port1craneusage,
              port3portcall,
              port3craneusage,
              port4portcall,
              port4craneusage,
              port5portcall,
              port5craneusage,
              port6portcall,
              port6craneusage,
              brokeragefees,
              voyagetype,
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
              cargo5quantity,
              port1fees,
              port2fees,
              port3fees,
              port6fees,
              port5fees,
              port4fees,
              vesselhn5,
              vesselhn7,
              vesselhn9,
              surveyingfees,
              vesselht1,
              vesselhn10,
              vesselht20,
              vesselht21,
              luberate,
              Field4,
              port2craneusage,
              port2portcall,
              port1portcall,
              port1craneusage,
              port3portcall,
              port3craneusage,
              port4portcall,
              port4craneusage,
              port5portcall,
              port5craneusage,
              port6portcall,
              port6craneusage,
              brokeragefees,
              voyagetype,
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
              cargo5quantity,
              port1fees,
              port2fees,
              port3fees,
              port6fees,
              port5fees,
              port4fees,
              vesselhn5,
              vesselhn7,
              vesselhn9,
              surveyingfees,
              vesselht1,
              vesselhn10,
              vesselht20,
              vesselht21,
              luberate,
              Field4,
              port2craneusage,
              port2portcall,
              port1portcall,
              port1craneusage,
              port3portcall,
              port3craneusage,
              port4portcall,
              port4craneusage,
              port5portcall,
              port5craneusage,
              port6portcall,
              port6craneusage,
              brokeragefees,
              voyagetype,
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
              cargo5quantity,
              port1fees,
              port2fees,
              port3fees,
              port6fees,
              port5fees,
              port4fees,
              vesselhn5,
              vesselhn7,
              vesselhn9,
              surveyingfees,
              vesselht1,
              vesselhn10,
              vesselht20,
              vesselht21,
              luberate,
              Field4,
              port2craneusage,
              port2portcall,
              port1portcall,
              port1craneusage,
              port3portcall,
              port3craneusage,
              port4portcall,
              port4craneusage,
              port5portcall,
              port5craneusage,
              port6portcall,
              port6craneusage,
              brokeragefees,
              voyagetype,
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
              cargo5quantity,
              port1fees,
              port2fees,
              port3fees,
              port6fees,
              port5fees,
              port4fees,
              vesselhn5,
              vesselhn7,
              vesselhn9,
              surveyingfees,
              vesselht1,
              vesselhn10,
              vesselht20,
              vesselht21,
              luberate,
              Field4,
              port2craneusage,
              port2portcall,
              port1portcall,
              port1craneusage,
              port3portcall,
              port3craneusage,
              port4portcall,
              port4craneusage,
              port5portcall,
              port5craneusage,
              port6portcall,
              port6craneusage,
              brokeragefees,
              voyagetype,
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
              cargo5quantity,
              port1fees,
              port2fees,
              port3fees,
              port6fees,
              port5fees,
              port4fees,
              vesselhn5,
              vesselhn7,
              vesselhn9,
              surveyingfees,
              vesselht1,
              vesselhn10,
              vesselht20,
              vesselht21,
              luberate,
              Field4,
              port2craneusage,
              port2portcall,
              port1portcall,
              port1craneusage,
              port3portcall,
              port3craneusage,
              port4portcall,
              port4craneusage,
              port5portcall,
              port5craneusage,
              port6portcall,
              port6craneusage,
              brokeragefees,
              voyagetype,
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
              cargo5quantity,
              port1fees,
              port2fees,
              port3fees,
              port6fees,
              port5fees,
              port4fees,
              vesselhn5,
              vesselhn7,
              vesselhn9,
              surveyingfees,
              vesselht1,
              vesselhn10,
              vesselht20,
              vesselht21,
              luberate,
              Field4,
              port2craneusage,
              port2portcall,
              port1portcall,
              port1craneusage,
              port3portcall,
              port3craneusage,
              port4portcall,
              port4craneusage,
              port5portcall,
              port5craneusage,
              port6portcall,
              port6craneusage,
              brokeragefees,
              voyagetype,
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
              cargo5quantity,
              port1fees,
              port2fees,
              port3fees,
              port6fees,
              port5fees,
              port4fees,
              vesselhn5,
              vesselhn7,
              vesselhn9,
              surveyingfees,
              vesselht1,
              vesselhn10,
              vesselht20,
              vesselht21,
              luberate,
              Field4,
              port2craneusage,
              port2portcall,
              port1portcall,
              port1craneusage,
              port3portcall,
              port3craneusage,
              port4portcall,
              port4craneusage,
              port5portcall,
              port5craneusage,
              port6portcall,
              port6craneusage,
              brokeragefees,
              voyagetype,
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
        label="Cargo5quantity"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={cargo5quantity}
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
              diesel_rate,
              cargo5quantity: value,
              port1fees,
              port2fees,
              port3fees,
              port6fees,
              port5fees,
              port4fees,
              vesselhn5,
              vesselhn7,
              vesselhn9,
              surveyingfees,
              vesselht1,
              vesselhn10,
              vesselht20,
              vesselht21,
              luberate,
              Field4,
              port2craneusage,
              port2portcall,
              port1portcall,
              port1craneusage,
              port3portcall,
              port3craneusage,
              port4portcall,
              port4craneusage,
              port5portcall,
              port5craneusage,
              port6portcall,
              port6craneusage,
              brokeragefees,
              voyagetype,
            };
            const result = onChange(modelFields);
            value = result?.cargo5quantity ?? value;
          }
          if (errors.cargo5quantity?.hasError) {
            runValidationTasks("cargo5quantity", value);
          }
          setCargo5quantity(value);
        }}
        onBlur={() => runValidationTasks("cargo5quantity", cargo5quantity)}
        errorMessage={errors.cargo5quantity?.errorMessage}
        hasError={errors.cargo5quantity?.hasError}
        {...getOverrideProps(overrides, "cargo5quantity")}
      ></TextField>
      <TextField
        label="Port1fees"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={port1fees}
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
              diesel_rate,
              cargo5quantity,
              port1fees: value,
              port2fees,
              port3fees,
              port6fees,
              port5fees,
              port4fees,
              vesselhn5,
              vesselhn7,
              vesselhn9,
              surveyingfees,
              vesselht1,
              vesselhn10,
              vesselht20,
              vesselht21,
              luberate,
              Field4,
              port2craneusage,
              port2portcall,
              port1portcall,
              port1craneusage,
              port3portcall,
              port3craneusage,
              port4portcall,
              port4craneusage,
              port5portcall,
              port5craneusage,
              port6portcall,
              port6craneusage,
              brokeragefees,
              voyagetype,
            };
            const result = onChange(modelFields);
            value = result?.port1fees ?? value;
          }
          if (errors.port1fees?.hasError) {
            runValidationTasks("port1fees", value);
          }
          setPort1fees(value);
        }}
        onBlur={() => runValidationTasks("port1fees", port1fees)}
        errorMessage={errors.port1fees?.errorMessage}
        hasError={errors.port1fees?.hasError}
        {...getOverrideProps(overrides, "port1fees")}
      ></TextField>
      <TextField
        label="Port2fees"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={port2fees}
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
              diesel_rate,
              cargo5quantity,
              port1fees,
              port2fees: value,
              port3fees,
              port6fees,
              port5fees,
              port4fees,
              vesselhn5,
              vesselhn7,
              vesselhn9,
              surveyingfees,
              vesselht1,
              vesselhn10,
              vesselht20,
              vesselht21,
              luberate,
              Field4,
              port2craneusage,
              port2portcall,
              port1portcall,
              port1craneusage,
              port3portcall,
              port3craneusage,
              port4portcall,
              port4craneusage,
              port5portcall,
              port5craneusage,
              port6portcall,
              port6craneusage,
              brokeragefees,
              voyagetype,
            };
            const result = onChange(modelFields);
            value = result?.port2fees ?? value;
          }
          if (errors.port2fees?.hasError) {
            runValidationTasks("port2fees", value);
          }
          setPort2fees(value);
        }}
        onBlur={() => runValidationTasks("port2fees", port2fees)}
        errorMessage={errors.port2fees?.errorMessage}
        hasError={errors.port2fees?.hasError}
        {...getOverrideProps(overrides, "port2fees")}
      ></TextField>
      <TextField
        label="Port3fees"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={port3fees}
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
              diesel_rate,
              cargo5quantity,
              port1fees,
              port2fees,
              port3fees: value,
              port6fees,
              port5fees,
              port4fees,
              vesselhn5,
              vesselhn7,
              vesselhn9,
              surveyingfees,
              vesselht1,
              vesselhn10,
              vesselht20,
              vesselht21,
              luberate,
              Field4,
              port2craneusage,
              port2portcall,
              port1portcall,
              port1craneusage,
              port3portcall,
              port3craneusage,
              port4portcall,
              port4craneusage,
              port5portcall,
              port5craneusage,
              port6portcall,
              port6craneusage,
              brokeragefees,
              voyagetype,
            };
            const result = onChange(modelFields);
            value = result?.port3fees ?? value;
          }
          if (errors.port3fees?.hasError) {
            runValidationTasks("port3fees", value);
          }
          setPort3fees(value);
        }}
        onBlur={() => runValidationTasks("port3fees", port3fees)}
        errorMessage={errors.port3fees?.errorMessage}
        hasError={errors.port3fees?.hasError}
        {...getOverrideProps(overrides, "port3fees")}
      ></TextField>
      <TextField
        label="Port6fees"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={port6fees}
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
              diesel_rate,
              cargo5quantity,
              port1fees,
              port2fees,
              port3fees,
              port6fees: value,
              port5fees,
              port4fees,
              vesselhn5,
              vesselhn7,
              vesselhn9,
              surveyingfees,
              vesselht1,
              vesselhn10,
              vesselht20,
              vesselht21,
              luberate,
              Field4,
              port2craneusage,
              port2portcall,
              port1portcall,
              port1craneusage,
              port3portcall,
              port3craneusage,
              port4portcall,
              port4craneusage,
              port5portcall,
              port5craneusage,
              port6portcall,
              port6craneusage,
              brokeragefees,
              voyagetype,
            };
            const result = onChange(modelFields);
            value = result?.port6fees ?? value;
          }
          if (errors.port6fees?.hasError) {
            runValidationTasks("port6fees", value);
          }
          setPort6fees(value);
        }}
        onBlur={() => runValidationTasks("port6fees", port6fees)}
        errorMessage={errors.port6fees?.errorMessage}
        hasError={errors.port6fees?.hasError}
        {...getOverrideProps(overrides, "port6fees")}
      ></TextField>
      <TextField
        label="Port5fees"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={port5fees}
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
              diesel_rate,
              cargo5quantity,
              port1fees,
              port2fees,
              port3fees,
              port6fees,
              port5fees: value,
              port4fees,
              vesselhn5,
              vesselhn7,
              vesselhn9,
              surveyingfees,
              vesselht1,
              vesselhn10,
              vesselht20,
              vesselht21,
              luberate,
              Field4,
              port2craneusage,
              port2portcall,
              port1portcall,
              port1craneusage,
              port3portcall,
              port3craneusage,
              port4portcall,
              port4craneusage,
              port5portcall,
              port5craneusage,
              port6portcall,
              port6craneusage,
              brokeragefees,
              voyagetype,
            };
            const result = onChange(modelFields);
            value = result?.port5fees ?? value;
          }
          if (errors.port5fees?.hasError) {
            runValidationTasks("port5fees", value);
          }
          setPort5fees(value);
        }}
        onBlur={() => runValidationTasks("port5fees", port5fees)}
        errorMessage={errors.port5fees?.errorMessage}
        hasError={errors.port5fees?.hasError}
        {...getOverrideProps(overrides, "port5fees")}
      ></TextField>
      <TextField
        label="Port4fees"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={port4fees}
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
              diesel_rate,
              cargo5quantity,
              port1fees,
              port2fees,
              port3fees,
              port6fees,
              port5fees,
              port4fees: value,
              vesselhn5,
              vesselhn7,
              vesselhn9,
              surveyingfees,
              vesselht1,
              vesselhn10,
              vesselht20,
              vesselht21,
              luberate,
              Field4,
              port2craneusage,
              port2portcall,
              port1portcall,
              port1craneusage,
              port3portcall,
              port3craneusage,
              port4portcall,
              port4craneusage,
              port5portcall,
              port5craneusage,
              port6portcall,
              port6craneusage,
              brokeragefees,
              voyagetype,
            };
            const result = onChange(modelFields);
            value = result?.port4fees ?? value;
          }
          if (errors.port4fees?.hasError) {
            runValidationTasks("port4fees", value);
          }
          setPort4fees(value);
        }}
        onBlur={() => runValidationTasks("port4fees", port4fees)}
        errorMessage={errors.port4fees?.errorMessage}
        hasError={errors.port4fees?.hasError}
        {...getOverrideProps(overrides, "port4fees")}
      ></TextField>
      <SwitchField
        label="Vesselhn5"
        defaultChecked={false}
        isDisabled={false}
        isChecked={vesselhn5}
        onChange={(e) => {
          let value = e.target.checked;
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
              diesel_rate,
              cargo5quantity,
              port1fees,
              port2fees,
              port3fees,
              port6fees,
              port5fees,
              port4fees,
              vesselhn5: value,
              vesselhn7,
              vesselhn9,
              surveyingfees,
              vesselht1,
              vesselhn10,
              vesselht20,
              vesselht21,
              luberate,
              Field4,
              port2craneusage,
              port2portcall,
              port1portcall,
              port1craneusage,
              port3portcall,
              port3craneusage,
              port4portcall,
              port4craneusage,
              port5portcall,
              port5craneusage,
              port6portcall,
              port6craneusage,
              brokeragefees,
              voyagetype,
            };
            const result = onChange(modelFields);
            value = result?.vesselhn5 ?? value;
          }
          if (errors.vesselhn5?.hasError) {
            runValidationTasks("vesselhn5", value);
          }
          setVesselhn5(value);
        }}
        onBlur={() => runValidationTasks("vesselhn5", vesselhn5)}
        errorMessage={errors.vesselhn5?.errorMessage}
        hasError={errors.vesselhn5?.hasError}
        {...getOverrideProps(overrides, "vesselhn5")}
      ></SwitchField>
      <SwitchField
        label="Vesselhn7"
        defaultChecked={false}
        isDisabled={false}
        isChecked={vesselhn7}
        onChange={(e) => {
          let value = e.target.checked;
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
              diesel_rate,
              cargo5quantity,
              port1fees,
              port2fees,
              port3fees,
              port6fees,
              port5fees,
              port4fees,
              vesselhn5,
              vesselhn7: value,
              vesselhn9,
              surveyingfees,
              vesselht1,
              vesselhn10,
              vesselht20,
              vesselht21,
              luberate,
              Field4,
              port2craneusage,
              port2portcall,
              port1portcall,
              port1craneusage,
              port3portcall,
              port3craneusage,
              port4portcall,
              port4craneusage,
              port5portcall,
              port5craneusage,
              port6portcall,
              port6craneusage,
              brokeragefees,
              voyagetype,
            };
            const result = onChange(modelFields);
            value = result?.vesselhn7 ?? value;
          }
          if (errors.vesselhn7?.hasError) {
            runValidationTasks("vesselhn7", value);
          }
          setVesselhn7(value);
        }}
        onBlur={() => runValidationTasks("vesselhn7", vesselhn7)}
        errorMessage={errors.vesselhn7?.errorMessage}
        hasError={errors.vesselhn7?.hasError}
        {...getOverrideProps(overrides, "vesselhn7")}
      ></SwitchField>
      <SwitchField
        label="Vesselhn9"
        defaultChecked={false}
        isDisabled={false}
        isChecked={vesselhn9}
        onChange={(e) => {
          let value = e.target.checked;
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
              diesel_rate,
              cargo5quantity,
              port1fees,
              port2fees,
              port3fees,
              port6fees,
              port5fees,
              port4fees,
              vesselhn5,
              vesselhn7,
              vesselhn9: value,
              surveyingfees,
              vesselht1,
              vesselhn10,
              vesselht20,
              vesselht21,
              luberate,
              Field4,
              port2craneusage,
              port2portcall,
              port1portcall,
              port1craneusage,
              port3portcall,
              port3craneusage,
              port4portcall,
              port4craneusage,
              port5portcall,
              port5craneusage,
              port6portcall,
              port6craneusage,
              brokeragefees,
              voyagetype,
            };
            const result = onChange(modelFields);
            value = result?.vesselhn9 ?? value;
          }
          if (errors.vesselhn9?.hasError) {
            runValidationTasks("vesselhn9", value);
          }
          setVesselhn9(value);
        }}
        onBlur={() => runValidationTasks("vesselhn9", vesselhn9)}
        errorMessage={errors.vesselhn9?.errorMessage}
        hasError={errors.vesselhn9?.hasError}
        {...getOverrideProps(overrides, "vesselhn9")}
      ></SwitchField>
      <TextField
        label="Surveyingfees"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={surveyingfees}
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
              diesel_rate,
              cargo5quantity,
              port1fees,
              port2fees,
              port3fees,
              port6fees,
              port5fees,
              port4fees,
              vesselhn5,
              vesselhn7,
              vesselhn9,
              surveyingfees: value,
              vesselht1,
              vesselhn10,
              vesselht20,
              vesselht21,
              luberate,
              Field4,
              port2craneusage,
              port2portcall,
              port1portcall,
              port1craneusage,
              port3portcall,
              port3craneusage,
              port4portcall,
              port4craneusage,
              port5portcall,
              port5craneusage,
              port6portcall,
              port6craneusage,
              brokeragefees,
              voyagetype,
            };
            const result = onChange(modelFields);
            value = result?.surveyingfees ?? value;
          }
          if (errors.surveyingfees?.hasError) {
            runValidationTasks("surveyingfees", value);
          }
          setSurveyingfees(value);
        }}
        onBlur={() => runValidationTasks("surveyingfees", surveyingfees)}
        errorMessage={errors.surveyingfees?.errorMessage}
        hasError={errors.surveyingfees?.hasError}
        {...getOverrideProps(overrides, "surveyingfees")}
      ></TextField>
      <SwitchField
        label="Vesselht1"
        defaultChecked={false}
        isDisabled={false}
        isChecked={vesselht1}
        onChange={(e) => {
          let value = e.target.checked;
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
              diesel_rate,
              cargo5quantity,
              port1fees,
              port2fees,
              port3fees,
              port6fees,
              port5fees,
              port4fees,
              vesselhn5,
              vesselhn7,
              vesselhn9,
              surveyingfees,
              vesselht1: value,
              vesselhn10,
              vesselht20,
              vesselht21,
              luberate,
              Field4,
              port2craneusage,
              port2portcall,
              port1portcall,
              port1craneusage,
              port3portcall,
              port3craneusage,
              port4portcall,
              port4craneusage,
              port5portcall,
              port5craneusage,
              port6portcall,
              port6craneusage,
              brokeragefees,
              voyagetype,
            };
            const result = onChange(modelFields);
            value = result?.vesselht1 ?? value;
          }
          if (errors.vesselht1?.hasError) {
            runValidationTasks("vesselht1", value);
          }
          setVesselht1(value);
        }}
        onBlur={() => runValidationTasks("vesselht1", vesselht1)}
        errorMessage={errors.vesselht1?.errorMessage}
        hasError={errors.vesselht1?.hasError}
        {...getOverrideProps(overrides, "vesselht1")}
      ></SwitchField>
      <SwitchField
        label="Vesselhn10"
        defaultChecked={false}
        isDisabled={false}
        isChecked={vesselhn10}
        onChange={(e) => {
          let value = e.target.checked;
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
              diesel_rate,
              cargo5quantity,
              port1fees,
              port2fees,
              port3fees,
              port6fees,
              port5fees,
              port4fees,
              vesselhn5,
              vesselhn7,
              vesselhn9,
              surveyingfees,
              vesselht1,
              vesselhn10: value,
              vesselht20,
              vesselht21,
              luberate,
              Field4,
              port2craneusage,
              port2portcall,
              port1portcall,
              port1craneusage,
              port3portcall,
              port3craneusage,
              port4portcall,
              port4craneusage,
              port5portcall,
              port5craneusage,
              port6portcall,
              port6craneusage,
              brokeragefees,
              voyagetype,
            };
            const result = onChange(modelFields);
            value = result?.vesselhn10 ?? value;
          }
          if (errors.vesselhn10?.hasError) {
            runValidationTasks("vesselhn10", value);
          }
          setVesselhn10(value);
        }}
        onBlur={() => runValidationTasks("vesselhn10", vesselhn10)}
        errorMessage={errors.vesselhn10?.errorMessage}
        hasError={errors.vesselhn10?.hasError}
        {...getOverrideProps(overrides, "vesselhn10")}
      ></SwitchField>
      <SwitchField
        label="Vesselht20"
        defaultChecked={false}
        isDisabled={false}
        isChecked={vesselht20}
        onChange={(e) => {
          let value = e.target.checked;
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
              diesel_rate,
              cargo5quantity,
              port1fees,
              port2fees,
              port3fees,
              port6fees,
              port5fees,
              port4fees,
              vesselhn5,
              vesselhn7,
              vesselhn9,
              surveyingfees,
              vesselht1,
              vesselhn10,
              vesselht20: value,
              vesselht21,
              luberate,
              Field4,
              port2craneusage,
              port2portcall,
              port1portcall,
              port1craneusage,
              port3portcall,
              port3craneusage,
              port4portcall,
              port4craneusage,
              port5portcall,
              port5craneusage,
              port6portcall,
              port6craneusage,
              brokeragefees,
              voyagetype,
            };
            const result = onChange(modelFields);
            value = result?.vesselht20 ?? value;
          }
          if (errors.vesselht20?.hasError) {
            runValidationTasks("vesselht20", value);
          }
          setVesselht20(value);
        }}
        onBlur={() => runValidationTasks("vesselht20", vesselht20)}
        errorMessage={errors.vesselht20?.errorMessage}
        hasError={errors.vesselht20?.hasError}
        {...getOverrideProps(overrides, "vesselht20")}
      ></SwitchField>
      <SwitchField
        label="Vesselht21"
        defaultChecked={false}
        isDisabled={false}
        isChecked={vesselht21}
        onChange={(e) => {
          let value = e.target.checked;
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
              diesel_rate,
              cargo5quantity,
              port1fees,
              port2fees,
              port3fees,
              port6fees,
              port5fees,
              port4fees,
              vesselhn5,
              vesselhn7,
              vesselhn9,
              surveyingfees,
              vesselht1,
              vesselhn10,
              vesselht20,
              vesselht21: value,
              luberate,
              Field4,
              port2craneusage,
              port2portcall,
              port1portcall,
              port1craneusage,
              port3portcall,
              port3craneusage,
              port4portcall,
              port4craneusage,
              port5portcall,
              port5craneusage,
              port6portcall,
              port6craneusage,
              brokeragefees,
              voyagetype,
            };
            const result = onChange(modelFields);
            value = result?.vesselht21 ?? value;
          }
          if (errors.vesselht21?.hasError) {
            runValidationTasks("vesselht21", value);
          }
          setVesselht21(value);
        }}
        onBlur={() => runValidationTasks("vesselht21", vesselht21)}
        errorMessage={errors.vesselht21?.errorMessage}
        hasError={errors.vesselht21?.hasError}
        {...getOverrideProps(overrides, "vesselht21")}
      ></SwitchField>
      <TextField
        label="Luberate"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={luberate}
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
              diesel_rate,
              cargo5quantity,
              port1fees,
              port2fees,
              port3fees,
              port6fees,
              port5fees,
              port4fees,
              vesselhn5,
              vesselhn7,
              vesselhn9,
              surveyingfees,
              vesselht1,
              vesselhn10,
              vesselht20,
              vesselht21,
              luberate: value,
              Field4,
              port2craneusage,
              port2portcall,
              port1portcall,
              port1craneusage,
              port3portcall,
              port3craneusage,
              port4portcall,
              port4craneusage,
              port5portcall,
              port5craneusage,
              port6portcall,
              port6craneusage,
              brokeragefees,
              voyagetype,
            };
            const result = onChange(modelFields);
            value = result?.luberate ?? value;
          }
          if (errors.luberate?.hasError) {
            runValidationTasks("luberate", value);
          }
          setLuberate(value);
        }}
        onBlur={() => runValidationTasks("luberate", luberate)}
        errorMessage={errors.luberate?.errorMessage}
        hasError={errors.luberate?.hasError}
        {...getOverrideProps(overrides, "luberate")}
      ></TextField>
      <TextField
        label="Field4"
        isRequired={false}
        isReadOnly={false}
        value={Field4}
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
              cargo5quantity,
              port1fees,
              port2fees,
              port3fees,
              port6fees,
              port5fees,
              port4fees,
              vesselhn5,
              vesselhn7,
              vesselhn9,
              surveyingfees,
              vesselht1,
              vesselhn10,
              vesselht20,
              vesselht21,
              luberate,
              Field4: value,
              port2craneusage,
              port2portcall,
              port1portcall,
              port1craneusage,
              port3portcall,
              port3craneusage,
              port4portcall,
              port4craneusage,
              port5portcall,
              port5craneusage,
              port6portcall,
              port6craneusage,
              brokeragefees,
              voyagetype,
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
      ></TextField>
      <TextField
        label="Port2craneusage"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={port2craneusage}
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
              diesel_rate,
              cargo5quantity,
              port1fees,
              port2fees,
              port3fees,
              port6fees,
              port5fees,
              port4fees,
              vesselhn5,
              vesselhn7,
              vesselhn9,
              surveyingfees,
              vesselht1,
              vesselhn10,
              vesselht20,
              vesselht21,
              luberate,
              Field4,
              port2craneusage: value,
              port2portcall,
              port1portcall,
              port1craneusage,
              port3portcall,
              port3craneusage,
              port4portcall,
              port4craneusage,
              port5portcall,
              port5craneusage,
              port6portcall,
              port6craneusage,
              brokeragefees,
              voyagetype,
            };
            const result = onChange(modelFields);
            value = result?.port2craneusage ?? value;
          }
          if (errors.port2craneusage?.hasError) {
            runValidationTasks("port2craneusage", value);
          }
          setPort2craneusage(value);
        }}
        onBlur={() => runValidationTasks("port2craneusage", port2craneusage)}
        errorMessage={errors.port2craneusage?.errorMessage}
        hasError={errors.port2craneusage?.hasError}
        {...getOverrideProps(overrides, "port2craneusage")}
      ></TextField>
      <TextField
        label="Port2portcall"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={port2portcall}
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
              diesel_rate,
              cargo5quantity,
              port1fees,
              port2fees,
              port3fees,
              port6fees,
              port5fees,
              port4fees,
              vesselhn5,
              vesselhn7,
              vesselhn9,
              surveyingfees,
              vesselht1,
              vesselhn10,
              vesselht20,
              vesselht21,
              luberate,
              Field4,
              port2craneusage,
              port2portcall: value,
              port1portcall,
              port1craneusage,
              port3portcall,
              port3craneusage,
              port4portcall,
              port4craneusage,
              port5portcall,
              port5craneusage,
              port6portcall,
              port6craneusage,
              brokeragefees,
              voyagetype,
            };
            const result = onChange(modelFields);
            value = result?.port2portcall ?? value;
          }
          if (errors.port2portcall?.hasError) {
            runValidationTasks("port2portcall", value);
          }
          setPort2portcall(value);
        }}
        onBlur={() => runValidationTasks("port2portcall", port2portcall)}
        errorMessage={errors.port2portcall?.errorMessage}
        hasError={errors.port2portcall?.hasError}
        {...getOverrideProps(overrides, "port2portcall")}
      ></TextField>
      <TextField
        label="Port1portcall"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={port1portcall}
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
              diesel_rate,
              cargo5quantity,
              port1fees,
              port2fees,
              port3fees,
              port6fees,
              port5fees,
              port4fees,
              vesselhn5,
              vesselhn7,
              vesselhn9,
              surveyingfees,
              vesselht1,
              vesselhn10,
              vesselht20,
              vesselht21,
              luberate,
              Field4,
              port2craneusage,
              port2portcall,
              port1portcall: value,
              port1craneusage,
              port3portcall,
              port3craneusage,
              port4portcall,
              port4craneusage,
              port5portcall,
              port5craneusage,
              port6portcall,
              port6craneusage,
              brokeragefees,
              voyagetype,
            };
            const result = onChange(modelFields);
            value = result?.port1portcall ?? value;
          }
          if (errors.port1portcall?.hasError) {
            runValidationTasks("port1portcall", value);
          }
          setPort1portcall(value);
        }}
        onBlur={() => runValidationTasks("port1portcall", port1portcall)}
        errorMessage={errors.port1portcall?.errorMessage}
        hasError={errors.port1portcall?.hasError}
        {...getOverrideProps(overrides, "port1portcall")}
      ></TextField>
      <TextField
        label="Port1craneusage"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={port1craneusage}
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
              diesel_rate,
              cargo5quantity,
              port1fees,
              port2fees,
              port3fees,
              port6fees,
              port5fees,
              port4fees,
              vesselhn5,
              vesselhn7,
              vesselhn9,
              surveyingfees,
              vesselht1,
              vesselhn10,
              vesselht20,
              vesselht21,
              luberate,
              Field4,
              port2craneusage,
              port2portcall,
              port1portcall,
              port1craneusage: value,
              port3portcall,
              port3craneusage,
              port4portcall,
              port4craneusage,
              port5portcall,
              port5craneusage,
              port6portcall,
              port6craneusage,
              brokeragefees,
              voyagetype,
            };
            const result = onChange(modelFields);
            value = result?.port1craneusage ?? value;
          }
          if (errors.port1craneusage?.hasError) {
            runValidationTasks("port1craneusage", value);
          }
          setPort1craneusage(value);
        }}
        onBlur={() => runValidationTasks("port1craneusage", port1craneusage)}
        errorMessage={errors.port1craneusage?.errorMessage}
        hasError={errors.port1craneusage?.hasError}
        {...getOverrideProps(overrides, "port1craneusage")}
      ></TextField>
      <TextField
        label="Port3portcall"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={port3portcall}
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
              diesel_rate,
              cargo5quantity,
              port1fees,
              port2fees,
              port3fees,
              port6fees,
              port5fees,
              port4fees,
              vesselhn5,
              vesselhn7,
              vesselhn9,
              surveyingfees,
              vesselht1,
              vesselhn10,
              vesselht20,
              vesselht21,
              luberate,
              Field4,
              port2craneusage,
              port2portcall,
              port1portcall,
              port1craneusage,
              port3portcall: value,
              port3craneusage,
              port4portcall,
              port4craneusage,
              port5portcall,
              port5craneusage,
              port6portcall,
              port6craneusage,
              brokeragefees,
              voyagetype,
            };
            const result = onChange(modelFields);
            value = result?.port3portcall ?? value;
          }
          if (errors.port3portcall?.hasError) {
            runValidationTasks("port3portcall", value);
          }
          setPort3portcall(value);
        }}
        onBlur={() => runValidationTasks("port3portcall", port3portcall)}
        errorMessage={errors.port3portcall?.errorMessage}
        hasError={errors.port3portcall?.hasError}
        {...getOverrideProps(overrides, "port3portcall")}
      ></TextField>
      <TextField
        label="Port3craneusage"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={port3craneusage}
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
              diesel_rate,
              cargo5quantity,
              port1fees,
              port2fees,
              port3fees,
              port6fees,
              port5fees,
              port4fees,
              vesselhn5,
              vesselhn7,
              vesselhn9,
              surveyingfees,
              vesselht1,
              vesselhn10,
              vesselht20,
              vesselht21,
              luberate,
              Field4,
              port2craneusage,
              port2portcall,
              port1portcall,
              port1craneusage,
              port3portcall,
              port3craneusage: value,
              port4portcall,
              port4craneusage,
              port5portcall,
              port5craneusage,
              port6portcall,
              port6craneusage,
              brokeragefees,
              voyagetype,
            };
            const result = onChange(modelFields);
            value = result?.port3craneusage ?? value;
          }
          if (errors.port3craneusage?.hasError) {
            runValidationTasks("port3craneusage", value);
          }
          setPort3craneusage(value);
        }}
        onBlur={() => runValidationTasks("port3craneusage", port3craneusage)}
        errorMessage={errors.port3craneusage?.errorMessage}
        hasError={errors.port3craneusage?.hasError}
        {...getOverrideProps(overrides, "port3craneusage")}
      ></TextField>
      <TextField
        label="Port4portcall"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={port4portcall}
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
              diesel_rate,
              cargo5quantity,
              port1fees,
              port2fees,
              port3fees,
              port6fees,
              port5fees,
              port4fees,
              vesselhn5,
              vesselhn7,
              vesselhn9,
              surveyingfees,
              vesselht1,
              vesselhn10,
              vesselht20,
              vesselht21,
              luberate,
              Field4,
              port2craneusage,
              port2portcall,
              port1portcall,
              port1craneusage,
              port3portcall,
              port3craneusage,
              port4portcall: value,
              port4craneusage,
              port5portcall,
              port5craneusage,
              port6portcall,
              port6craneusage,
              brokeragefees,
              voyagetype,
            };
            const result = onChange(modelFields);
            value = result?.port4portcall ?? value;
          }
          if (errors.port4portcall?.hasError) {
            runValidationTasks("port4portcall", value);
          }
          setPort4portcall(value);
        }}
        onBlur={() => runValidationTasks("port4portcall", port4portcall)}
        errorMessage={errors.port4portcall?.errorMessage}
        hasError={errors.port4portcall?.hasError}
        {...getOverrideProps(overrides, "port4portcall")}
      ></TextField>
      <TextField
        label="Port4craneusage"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={port4craneusage}
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
              diesel_rate,
              cargo5quantity,
              port1fees,
              port2fees,
              port3fees,
              port6fees,
              port5fees,
              port4fees,
              vesselhn5,
              vesselhn7,
              vesselhn9,
              surveyingfees,
              vesselht1,
              vesselhn10,
              vesselht20,
              vesselht21,
              luberate,
              Field4,
              port2craneusage,
              port2portcall,
              port1portcall,
              port1craneusage,
              port3portcall,
              port3craneusage,
              port4portcall,
              port4craneusage: value,
              port5portcall,
              port5craneusage,
              port6portcall,
              port6craneusage,
              brokeragefees,
              voyagetype,
            };
            const result = onChange(modelFields);
            value = result?.port4craneusage ?? value;
          }
          if (errors.port4craneusage?.hasError) {
            runValidationTasks("port4craneusage", value);
          }
          setPort4craneusage(value);
        }}
        onBlur={() => runValidationTasks("port4craneusage", port4craneusage)}
        errorMessage={errors.port4craneusage?.errorMessage}
        hasError={errors.port4craneusage?.hasError}
        {...getOverrideProps(overrides, "port4craneusage")}
      ></TextField>
      <TextField
        label="Port5portcall"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={port5portcall}
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
              diesel_rate,
              cargo5quantity,
              port1fees,
              port2fees,
              port3fees,
              port6fees,
              port5fees,
              port4fees,
              vesselhn5,
              vesselhn7,
              vesselhn9,
              surveyingfees,
              vesselht1,
              vesselhn10,
              vesselht20,
              vesselht21,
              luberate,
              Field4,
              port2craneusage,
              port2portcall,
              port1portcall,
              port1craneusage,
              port3portcall,
              port3craneusage,
              port4portcall,
              port4craneusage,
              port5portcall: value,
              port5craneusage,
              port6portcall,
              port6craneusage,
              brokeragefees,
              voyagetype,
            };
            const result = onChange(modelFields);
            value = result?.port5portcall ?? value;
          }
          if (errors.port5portcall?.hasError) {
            runValidationTasks("port5portcall", value);
          }
          setPort5portcall(value);
        }}
        onBlur={() => runValidationTasks("port5portcall", port5portcall)}
        errorMessage={errors.port5portcall?.errorMessage}
        hasError={errors.port5portcall?.hasError}
        {...getOverrideProps(overrides, "port5portcall")}
      ></TextField>
      <TextField
        label="Port5craneusage"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={port5craneusage}
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
              diesel_rate,
              cargo5quantity,
              port1fees,
              port2fees,
              port3fees,
              port6fees,
              port5fees,
              port4fees,
              vesselhn5,
              vesselhn7,
              vesselhn9,
              surveyingfees,
              vesselht1,
              vesselhn10,
              vesselht20,
              vesselht21,
              luberate,
              Field4,
              port2craneusage,
              port2portcall,
              port1portcall,
              port1craneusage,
              port3portcall,
              port3craneusage,
              port4portcall,
              port4craneusage,
              port5portcall,
              port5craneusage: value,
              port6portcall,
              port6craneusage,
              brokeragefees,
              voyagetype,
            };
            const result = onChange(modelFields);
            value = result?.port5craneusage ?? value;
          }
          if (errors.port5craneusage?.hasError) {
            runValidationTasks("port5craneusage", value);
          }
          setPort5craneusage(value);
        }}
        onBlur={() => runValidationTasks("port5craneusage", port5craneusage)}
        errorMessage={errors.port5craneusage?.errorMessage}
        hasError={errors.port5craneusage?.hasError}
        {...getOverrideProps(overrides, "port5craneusage")}
      ></TextField>
      <TextField
        label="Port6portcall"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={port6portcall}
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
              diesel_rate,
              cargo5quantity,
              port1fees,
              port2fees,
              port3fees,
              port6fees,
              port5fees,
              port4fees,
              vesselhn5,
              vesselhn7,
              vesselhn9,
              surveyingfees,
              vesselht1,
              vesselhn10,
              vesselht20,
              vesselht21,
              luberate,
              Field4,
              port2craneusage,
              port2portcall,
              port1portcall,
              port1craneusage,
              port3portcall,
              port3craneusage,
              port4portcall,
              port4craneusage,
              port5portcall,
              port5craneusage,
              port6portcall: value,
              port6craneusage,
              brokeragefees,
              voyagetype,
            };
            const result = onChange(modelFields);
            value = result?.port6portcall ?? value;
          }
          if (errors.port6portcall?.hasError) {
            runValidationTasks("port6portcall", value);
          }
          setPort6portcall(value);
        }}
        onBlur={() => runValidationTasks("port6portcall", port6portcall)}
        errorMessage={errors.port6portcall?.errorMessage}
        hasError={errors.port6portcall?.hasError}
        {...getOverrideProps(overrides, "port6portcall")}
      ></TextField>
      <TextField
        label="Port6craneusage"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={port6craneusage}
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
              diesel_rate,
              cargo5quantity,
              port1fees,
              port2fees,
              port3fees,
              port6fees,
              port5fees,
              port4fees,
              vesselhn5,
              vesselhn7,
              vesselhn9,
              surveyingfees,
              vesselht1,
              vesselhn10,
              vesselht20,
              vesselht21,
              luberate,
              Field4,
              port2craneusage,
              port2portcall,
              port1portcall,
              port1craneusage,
              port3portcall,
              port3craneusage,
              port4portcall,
              port4craneusage,
              port5portcall,
              port5craneusage,
              port6portcall,
              port6craneusage: value,
              brokeragefees,
              voyagetype,
            };
            const result = onChange(modelFields);
            value = result?.port6craneusage ?? value;
          }
          if (errors.port6craneusage?.hasError) {
            runValidationTasks("port6craneusage", value);
          }
          setPort6craneusage(value);
        }}
        onBlur={() => runValidationTasks("port6craneusage", port6craneusage)}
        errorMessage={errors.port6craneusage?.errorMessage}
        hasError={errors.port6craneusage?.hasError}
        {...getOverrideProps(overrides, "port6craneusage")}
      ></TextField>
      <TextField
        label="Brokeragefees"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={brokeragefees}
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
              diesel_rate,
              cargo5quantity,
              port1fees,
              port2fees,
              port3fees,
              port6fees,
              port5fees,
              port4fees,
              vesselhn5,
              vesselhn7,
              vesselhn9,
              surveyingfees,
              vesselht1,
              vesselhn10,
              vesselht20,
              vesselht21,
              luberate,
              Field4,
              port2craneusage,
              port2portcall,
              port1portcall,
              port1craneusage,
              port3portcall,
              port3craneusage,
              port4portcall,
              port4craneusage,
              port5portcall,
              port5craneusage,
              port6portcall,
              port6craneusage,
              brokeragefees: value,
              voyagetype,
            };
            const result = onChange(modelFields);
            value = result?.brokeragefees ?? value;
          }
          if (errors.brokeragefees?.hasError) {
            runValidationTasks("brokeragefees", value);
          }
          setBrokeragefees(value);
        }}
        onBlur={() => runValidationTasks("brokeragefees", brokeragefees)}
        errorMessage={errors.brokeragefees?.errorMessage}
        hasError={errors.brokeragefees?.hasError}
        {...getOverrideProps(overrides, "brokeragefees")}
      ></TextField>
      <TextField
        label="Voyagetype"
        isRequired={false}
        isReadOnly={false}
        value={voyagetype}
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
              cargo5quantity,
              port1fees,
              port2fees,
              port3fees,
              port6fees,
              port5fees,
              port4fees,
              vesselhn5,
              vesselhn7,
              vesselhn9,
              surveyingfees,
              vesselht1,
              vesselhn10,
              vesselht20,
              vesselht21,
              luberate,
              Field4,
              port2craneusage,
              port2portcall,
              port1portcall,
              port1craneusage,
              port3portcall,
              port3craneusage,
              port4portcall,
              port4craneusage,
              port5portcall,
              port5craneusage,
              port6portcall,
              port6craneusage,
              brokeragefees,
              voyagetype: value,
            };
            const result = onChange(modelFields);
            value = result?.voyagetype ?? value;
          }
          if (errors.voyagetype?.hasError) {
            runValidationTasks("voyagetype", value);
          }
          setVoyagetype(value);
        }}
        onBlur={() => runValidationTasks("voyagetype", voyagetype)}
        errorMessage={errors.voyagetype?.errorMessage}
        hasError={errors.voyagetype?.hasError}
        {...getOverrideProps(overrides, "voyagetype")}
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
