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
  const initialValues = {
    sourcePort: "",
    destinationPort: "",
    distance: "",
  };
  const [sourcePort, setSourcePort] = React.useState(initialValues.sourcePort);
  const [destinationPort, setDestinationPort] = React.useState(
    initialValues.destinationPort
  );
  const [distance, setDistance] = React.useState(initialValues.distance);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setSourcePort(initialValues.sourcePort);
    setDestinationPort(initialValues.destinationPort);
    setDistance(initialValues.distance);
    setErrors({});
  };
  const validations = {
    sourcePort: [],
    destinationPort: [],
    distance: [],
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
          sourcePort,
          destinationPort,
          distance,
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
          await DataStore.save(new Distance(modelFields));
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
      <TextField
        label="Source port"
        isRequired={false}
        isReadOnly={false}
        value={sourcePort}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              sourcePort: value,
              destinationPort,
              distance,
            };
            const result = onChange(modelFields);
            value = result?.sourcePort ?? value;
          }
          if (errors.sourcePort?.hasError) {
            runValidationTasks("sourcePort", value);
          }
          setSourcePort(value);
        }}
        onBlur={() => runValidationTasks("sourcePort", sourcePort)}
        errorMessage={errors.sourcePort?.errorMessage}
        hasError={errors.sourcePort?.hasError}
        {...getOverrideProps(overrides, "sourcePort")}
      ></TextField>
      <TextField
        label="Destination port"
        isRequired={false}
        isReadOnly={false}
        value={destinationPort}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              sourcePort,
              destinationPort: value,
              distance,
            };
            const result = onChange(modelFields);
            value = result?.destinationPort ?? value;
          }
          if (errors.destinationPort?.hasError) {
            runValidationTasks("destinationPort", value);
          }
          setDestinationPort(value);
        }}
        onBlur={() => runValidationTasks("destinationPort", destinationPort)}
        errorMessage={errors.destinationPort?.errorMessage}
        hasError={errors.destinationPort?.hasError}
        {...getOverrideProps(overrides, "destinationPort")}
      ></TextField>
      <TextField
        label="Distance"
        isRequired={false}
        isReadOnly={false}
        value={distance}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              sourcePort,
              destinationPort,
              distance: value,
            };
            const result = onChange(modelFields);
            value = result?.distance ?? value;
          }
          if (errors.distance?.hasError) {
            runValidationTasks("distance", value);
          }
          setDistance(value);
        }}
        onBlur={() => runValidationTasks("distance", distance)}
        errorMessage={errors.distance?.errorMessage}
        hasError={errors.distance?.hasError}
        {...getOverrideProps(overrides, "distance")}
      ></TextField>
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
          gap="15px"
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
