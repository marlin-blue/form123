/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Divider,
  Flex,
  Grid,
  Heading,
  SelectField,
  TextField,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { fetchByPath, validateField } from "./utils";
export default function Calculator(props) {
  const { onSubmit, onValidate, onChange, overrides, ...rest } = props;
  const initialValues = {
    currency_type: "US Dollar (USD)",
    diesel_rate: "0.7",
    exchange_rate: "35",
    lube_rate: "2.33",
    bunker_rate: "0.6",
    port1: "Bangkok (BK)",
    port1_fees: "8000",
    port1_port_call: "0",
    port1_crane_usage: "0",
    port1_surveying_fees: "0",
    port2: "Songkhla (SK)",
    port2_fees: "0",
    port2_port_call: "8",
    port2_crane_usage: "40",
    port2_surveying_fees: "0",
    port3: "Penang (PNG)",
    port3_fees: "0",
    port3_port_call: "0",
    port3_crane_usage: "0",
    port3_surveying_fees: "0",
    port4: "Kuching (KUC)",
    port4_fees: "0",
    port4_port_call: "15",
    port4_crane_usage: "75",
    port4_surveying_fees: "0",
    port5: "Bintulu (BIN)",
    port5_fees: "0",
    port5_port_call: "0",
    port5_crane_usage: "0",
    port5_surveying_fees: "0",
    port6: "Bangkok (BK)",
    port6_fees: " 1,771.43",
    port6_port_call: "6",
    port6_crane_usage: "0",
    port6_surveying_fees: "0",
    port7: "NIL",
    port7_fees: "0",
    port7_port_call: "0",
    port7_crane_usage: "0",
    port7_surveying_fees: "0",
    port8: "NIL",
    port8_fees: "0",
    port8_port_call: "0",
    port8_crane_usage: "0",
    port8_surveying_fees: "0",
    port9: "NIL",
    port9_fees: "0",
    port9_port_call: "0",
    port9_crane_usage: "0",
    port9_surveying_fees: "0",
    port10: "NIL",
    port10_fees: "0",
    port10_port_call: "0",
    port10_crane_usage: "0",
    port10_surveying_fees: "0",
    cargo1_type: "Soy Bean Meal",
    cargo1_quantity: "3600",
    cargo1_rate: " 20.26",
    cargo1_brokerage_fees: "0",
    cargo2_type: "Titimas Bleaching Earth",
    cargo2_quantity: "3000",
    cargo2_rate: "30",
    cargo2_brokerage_fees: "2.5",
    cargo3_type: "Timber",
    cargo3_quantity: "700",
    cargo3_rate: "52",
    cargo3_brokerage_fees: "0",
    cargo4_type: "NIL",
    cargo4_quantity: "0",
    cargo4_rate: "0",
    cargo4_brokerage_fees: "0",
    cargo5_type: "NIL",
    cargo5_quantity: "0",
    cargo5_rate: "0",
    cargo5_brokerage_fees: "0",
    cargo6_type: "NIL",
    cargo6_quantity: "0",
    cargo6_rate: "0",
    cargo6_brokerage_fees: "0",
    voyageBonus: "300",
    miscCosts: "3000"
  };

  const [currency_type, setCurrency_type] = React.useState(
    initialValues.currency_type
  );
  const [exchange_rate, setExchange_rate] = React.useState(
    initialValues.exchange_rate
  );
  const [diesel_rate, setDiesel_rate] = React.useState(
    initialValues.diesel_rate
  );
  const [bunker_rate, setBunker_rate] = React.useState(
    initialValues.bunker_rate
  );
  const [lube_rate, setLube_rate] = React.useState(initialValues.lube_rate);
  const [port1, setPort1] = React.useState(initialValues.port1);
  const [port1_fees, setPort1_fees] = React.useState(initialValues.port1_fees);
  const [port1_port_call, setPort1_port_call] = React.useState(
    initialValues.port1_port_call
  );
  const [port1_crane_usage, setPort1_crane_usage] = React.useState(
    initialValues.port1_crane_usage
  );
  const [port1_surveying_fees, setPort1_surveying_fees] = React.useState(
    initialValues.port1_surveying_fees
  );
  const [port2, setPort2] = React.useState(initialValues.port2);
  const [port2_fees, setPort2_fees] = React.useState(initialValues.port2_fees);
  const [port2_port_call, setPort2_port_call] = React.useState(
    initialValues.port2_port_call
  );
  const [port2_crane_usage, setPort2_crane_usage] = React.useState(
    initialValues.port2_crane_usage
  );
  const [port2_surveying_fees, setPort2_surveying_fees] = React.useState(
    initialValues.port2_surveying_fees
  );
  const [port3, setPort3] = React.useState(initialValues.port3);
  const [port3_fees, setPort3_fees] = React.useState(initialValues.port3_fees);
  const [port3_port_call, setPort3_port_call] = React.useState(
    initialValues.port3_port_call
  );
  const [port3_crane_usage, setPort3_crane_usage] = React.useState(
    initialValues.port3_crane_usage
  );
  const [port3_surveying_fees, setPort3_surveying_fees] = React.useState(
    initialValues.port3_surveying_fees
  );
  const [port4, setPort4] = React.useState(initialValues.port4);
  const [port4_fees, setPort4_fees] = React.useState(initialValues.port4_fees);
  const [port4_port_call, setPort4_port_call] = React.useState(
    initialValues.port4_port_call
  );
  const [port4_crane_usage, setPort4_crane_usage] = React.useState(
    initialValues.port4_crane_usage
  );
  const [port4_surveying_fees, setPort4_surveying_fees] = React.useState(
    initialValues.port4_surveying_fees
  );
  const [port5, setPort5] = React.useState(initialValues.port5);
  const [port5_fees, setPort5_fees] = React.useState(initialValues.port5_fees);
  const [port5_port_call, setPort5_port_call] = React.useState(
    initialValues.port5_port_call
  );
  const [port5_crane_usage, setPort5_crane_usage] = React.useState(
    initialValues.port5_crane_usage
  );
  const [port5_surveying_fees, setPort5_surveying_fees] = React.useState(
    initialValues.port5_surveying_fees
  );
  const [port6, setPort6] = React.useState(initialValues.port6);
  const [port6_fees, setPort6_fees] = React.useState(initialValues.port6_fees);
  const [port6_port_call, setPort6_port_call] = React.useState(
    initialValues.port6_port_call
  );
  const [port6_crane_usage, setPort6_crane_usage] = React.useState(
    initialValues.port6_crane_usage
  );
  const [port6_surveying_fees, setPort6_surveying_fees] = React.useState(
    initialValues.port6_surveying_fees
  );

  const [port7, setPort7] = React.useState(initialValues.port7);
  const [port7_fees, setPort7_fees] = React.useState(initialValues.port7_fees);
  const [port7_port_call, setPort7_port_call] = React.useState(
    initialValues.port7_port_call
  );
  const [port7_crane_usage, setPort7_crane_usage] = React.useState(
    initialValues.port7_crane_usage
  );
  const [port7_surveying_fees, setPort7_surveying_fees] = React.useState(
    initialValues.port7_surveying_fees
  );

  const [port8, setPort8] = React.useState(initialValues.port8);
  const [port8_fees, setPort8_fees] = React.useState(initialValues.port8_fees);
  const [port8_port_call, setPort8_port_call] = React.useState(
    initialValues.port8_port_call
  );
  const [port8_crane_usage, setPort8_crane_usage] = React.useState(
    initialValues.port8_crane_usage
  );
  const [port8_surveying_fees, setPort8_surveying_fees] = React.useState(
    initialValues.port8_surveying_fees
  );

  const [port9, setPort9] = React.useState(initialValues.port9);
  const [port9_fees, setPort9_fees] = React.useState(initialValues.port9_fees);
  const [port9_port_call, setPort9_port_call] = React.useState(
    initialValues.port9_port_call
  );
  const [port9_crane_usage, setPort9_crane_usage] = React.useState(
    initialValues.port9_crane_usage
  );
  const [port9_surveying_fees, setPort9_surveying_fees] = React.useState(
    initialValues.port9_surveying_fees
  );

  const [port10, setPort10] = React.useState(initialValues.port10);
  const [port10_fees, setPort10_fees] = React.useState(initialValues.port10_fees);
  const [port10_port_call, setPort10_port_call] = React.useState(
    initialValues.port10_port_call
  );
  const [port10_crane_usage, setPort10_crane_usage] = React.useState(
    initialValues.port10_crane_usage
  );
  const [port10_surveying_fees, setPort10_surveying_fees] = React.useState(
    initialValues.port10_surveying_fees
  );

  const [cargo1_type, setCargo1_type] = React.useState(
    initialValues.cargo1_type
  );
  const [cargo1_quantity, setCargo1_quantity] = React.useState(
    initialValues.cargo1_quantity
  );
  const [cargo1_rate, setCargo1_rate] = React.useState(
    initialValues.cargo1_rate
  );
  const [cargo1_brokerage_fees, setCargo1_brokerage_fees] = React.useState(
    initialValues.cargo1_brokerage_fees
  );
  const [cargo2_type, setCargo2_type] = React.useState(
    initialValues.cargo2_type
  );
  const [cargo2_quantity, setCargo2_quantity] = React.useState(
    initialValues.cargo2_quantity
  );
  const [cargo2_rate, setCargo2_rate] = React.useState(
    initialValues.cargo2_rate
  );
  const [cargo2_brokerage_fees, setCargo2_brokerage_fees] = React.useState(
    initialValues.cargo2_brokerage_fees
  );
  const [cargo3_type, setCargo3_type] = React.useState(
    initialValues.cargo3_type
  );
  const [cargo3_quantity, setCargo3_quantity] = React.useState(
    initialValues.cargo3_quantity
  );
  const [cargo3_rate, setCargo3_rate] = React.useState(
    initialValues.cargo3_rate
  );
  const [cargo3_brokerage_fees, setCargo3_brokerage_fees] = React.useState(
    initialValues.cargo3_brokerage_fees
  );
  const [cargo4_type, setCargo4_type] = React.useState(
    initialValues.cargo4_type
  );
  const [cargo4_quantity, setCargo4_quantity] = React.useState(
    initialValues.cargo4_quantity
  );
  const [cargo4_rate, setCargo4_rate] = React.useState(
    initialValues.cargo4_rate
  );
  const [cargo4_brokerage_fees, setCargo4_brokerage_fees] = React.useState(
    initialValues.cargo4_brokerage_fees
  );
  const [cargo5_type, setCargo5_type] = React.useState(
    initialValues.cargo5_type
  );
  const [cargo5_quantity, setCargo5_quantity] = React.useState(
    initialValues.cargo5_quantity
  );
  const [cargo5_rate, setCargo5_rate] = React.useState(
    initialValues.cargo5_rate
  );
  const [cargo5_brokerage_fees, setCargo5_brokerage_fees] = React.useState(
    initialValues.cargo5_brokerage_fees
  );
  const [cargo6_type, setCargo6_type] = React.useState(
    initialValues.cargo6_type
  );
  const [cargo6_quantity, setCargo6_quantity] = React.useState(
    initialValues.cargo6_quantity
  );
  const [cargo6_rate, setCargo6_rate] = React.useState(
    initialValues.cargo6_rate
  );
  const [cargo6_brokerage_fees, setCargo6_brokerage_fees] = React.useState(
    initialValues.cargo6_brokerage_fees
  );
  const [voyageBonus, setVoyageBonus] = React.useState(
    initialValues.voyageBonus
  );
  const [miscCosts, setMiscCosts] = React.useState(initialValues.miscCosts);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setCurrency_type(initialValues.currency_type);
    setExchange_rate(initialValues.exchange_rate);
    setDiesel_rate(initialValues.diesel_rate);
    setBunker_rate(initialValues.bunker_rate);
    setLube_rate(initialValues.lube_rate);
    setPort1(initialValues.port1);
    setPort1_fees(initialValues.port1_fees);
    setPort1_port_call(initialValues.port1_port_call);
    setPort1_crane_usage(initialValues.port1_crane_usage);
    setPort1_surveying_fees(initialValues.port1_surveying_fees);
    setPort2(initialValues.port2);
    setPort2_fees(initialValues.port2_fees);
    setPort2_port_call(initialValues.port2_port_call);
    setPort2_crane_usage(initialValues.port2_crane_usage);
    setPort2_surveying_fees(initialValues.port2_surveying_fees);
    setPort3(initialValues.port3);
    setPort3_fees(initialValues.port3_fees);
    setPort3_port_call(initialValues.port3_port_call);
    setPort3_crane_usage(initialValues.port3_crane_usage);
    setPort3_surveying_fees(initialValues.port3_surveying_fees);
    setPort4(initialValues.port4);
    setPort4_fees(initialValues.port4_fees);
    setPort4_port_call(initialValues.port4_port_call);
    setPort4_crane_usage(initialValues.port4_crane_usage);
    setPort4_surveying_fees(initialValues.port4_surveying_fees);
    setPort5(initialValues.port5);
    setPort5_fees(initialValues.port5_fees);
    setPort5_port_call(initialValues.port5_port_call);
    setPort5_crane_usage(initialValues.port5_crane_usage);
    setPort5_surveying_fees(initialValues.port5_surveying_fees);
    setPort6(initialValues.port6);
    setPort6_fees(initialValues.port6_fees);
    setPort6_port_call(initialValues.port6_port_call);
    setPort6_crane_usage(initialValues.port6_crane_usage);
    setPort6_surveying_fees(initialValues.port6_surveying_fees);
    setPort7(initialValues.port7);
    setPort7_fees(initialValues.port7_fees);
    setPort7_port_call(initialValues.port7_port_call);
    setPort7_crane_usage(initialValues.port7_crane_usage);
    setPort7_surveying_fees(initialValues.port7_surveying_fees);
    setPort8(initialValues.port8);
    setPort8_fees(initialValues.port8_fees);
    setPort8_port_call(initialValues.port8_port_call);
    setPort8_crane_usage(initialValues.port8_crane_usage);
    setPort8_surveying_fees(initialValues.port8_surveying_fees);
    setPort9(initialValues.port9);
    setPort9_fees(initialValues.port9_fees);
    setPort9_port_call(initialValues.port9_port_call);
    setPort9_crane_usage(initialValues.port9_crane_usage);
    setPort9_surveying_fees(initialValues.port9_surveying_fees);
    setPort10(initialValues.port10);
    setPort10_fees(initialValues.port10_fees);
    setPort10_port_call(initialValues.port10_port_call);
    setPort10_crane_usage(initialValues.port10_crane_usage);
    setPort10_surveying_fees(initialValues.port10_surveying_fees);
    setCargo1_type(initialValues.cargo1_type);
    setCargo1_quantity(initialValues.cargo1_quantity);
    setCargo1_rate(initialValues.cargo1_rate);
    setCargo1_brokerage_fees(initialValues.cargo1_brokerage_fees);
    setCargo2_type(initialValues.cargo2_type);
    setCargo2_quantity(initialValues.cargo2_quantity);
    setCargo2_rate(initialValues.cargo2_rate);
    setCargo2_brokerage_fees(initialValues.cargo2_brokerage_fees);
    setCargo3_type(initialValues.cargo3_type);
    setCargo3_quantity(initialValues.cargo3_quantity);
    setCargo3_rate(initialValues.cargo3_rate);
    setCargo3_brokerage_fees(initialValues.cargo3_brokerage_fees);
    setCargo4_type(initialValues.cargo4_type);
    setCargo4_quantity(initialValues.cargo4_quantity);
    setCargo4_rate(initialValues.cargo4_rate);
    setCargo4_brokerage_fees(initialValues.cargo4_brokerage_fees);
    setCargo5_type(initialValues.cargo5_type);
    setCargo5_quantity(initialValues.cargo5_quantity);
    setCargo5_rate(initialValues.cargo5_rate);
    setCargo5_brokerage_fees(initialValues.cargo5_brokerage_fees);
    setCargo6_type(initialValues.cargo6_type);
    setCargo6_quantity(initialValues.cargo6_quantity);
    setCargo6_rate(initialValues.cargo6_rate);
    setCargo6_brokerage_fees(initialValues.cargo6_brokerage_fees);
    setVoyageBonus(initialValues.voyageBonus);
    setMiscCosts(initialValues.miscCosts);
    setErrors({});
  };
  const validations = {
    currency_type: [],
    exchange_rate: [],
    diesel_rate: [],
    bunker_rate: [],
    lube_rate: [],
    port1: [],
    port1_fees: [],
    port1_port_call: [],
    port1_crane_usage: [],
    port1_surveying_fees: [],
    port2: [],
    port2_fees: [],
    port2_port_call: [],
    port2_crane_usage: [],
    port2_surveying_fees: [],
    port3: [],
    port3_fees: [],
    port3_port_call: [],
    port3_crane_usage: [],
    port3_surveying_fees: [],
    port4: [],
    port4_fees: [],
    port4_port_call: [],
    port4_crane_usage: [],
    port4_surveying_fees: [],
    port5: [],
    port5_fees: [],
    port5_port_call: [],
    port5_crane_usage: [],
    port5_surveying_fees: [],
    port6: [],
    port6_fees: [],
    port6_port_call: [],
    port6_crane_usage: [],
    port6_surveying_fees: [],
    port7: [],
    port7_fees: [],
    port7_port_call: [],
    port7_crane_usage: [],
    port7_surveying_fees: [],
    port8: [],
    port8_fees: [],
    port8_port_call: [],
    port8_crane_usage: [],
    port8_surveying_fees: [],
    port9: [],
    port9_fees: [],
    port9_port_call: [],
    port9_crane_usage: [],
    port9_surveying_fees: [],
    port10: [],
    port10_fees: [],
    port10_port_call: [],
    port10_crane_usage: [],
    port10_surveying_fees: [],
    cargo1_type: [],
    cargo1_quantity: [],
    cargo1_rate: [],
    cargo1_brokerage_fees: [],
    cargo2_type: [],
    cargo2_quantity: [],
    cargo2_rate: [],
    cargo2_brokerage_fees: [],
    cargo3_type: [],
    cargo3_quantity: [],
    cargo3_rate: [],
    cargo3_brokerage_fees: [],
    cargo4_type: [],
    cargo4_quantity: [],
    cargo4_rate: [],
    cargo4_brokerage_fees: [],
    cargo5_type: [],
    cargo5_quantity: [],
    cargo5_rate: [],
    cargo5_brokerage_fees: [],
    cargo6_type: [],
    cargo6_quantity: [],
    cargo6_rate: [],
    cargo6_brokerage_fees: [],
    voyageBonus: [],
    miscCosts: [],
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
      rowGap="20px"
      columnGap="10px"
      padding="10px"
      maxWidth="80%"
      margin-top="10px"
      margin-bottom="10px"
      margin="0 auto"


      onSubmit={async (event) => {
        event.preventDefault();
        const modelFields = {
          currency_type,
          exchange_rate,
          diesel_rate,
          bunker_rate,
          lube_rate,
          port1,
          port1_fees,
          port1_port_call,
          port1_crane_usage,
          port1_surveying_fees,
          port2,
          port2_fees,
          port2_port_call,
          port2_crane_usage,
          port2_surveying_fees,
          port3,
          port3_fees,
          port3_port_call,
          port3_crane_usage,
          port3_surveying_fees,
          port4,
          port4_fees,
          port4_port_call,
          port4_crane_usage,
          port4_surveying_fees,
          port5,
          port5_fees,
          port5_port_call,
          port5_crane_usage,
          port5_surveying_fees,
          port6,
          port6_fees,
          port6_port_call,
          port6_crane_usage,
          port6_surveying_fees,
          port7,
          port7_fees,
          port7_port_call,
          port7_crane_usage,
          port7_surveying_fees,
          port8,
          port8_fees,
          port8_port_call,
          port8_crane_usage,
          port8_surveying_fees,
          port9,
          port9_fees,
          port9_port_call,
          port9_crane_usage,
          port9_surveying_fees,
          port10,
          port10_fees,
          port10_port_call,
          port10_crane_usage,
          port10_surveying_fees,
          cargo1_type,
          cargo1_quantity,
          cargo1_rate,
          cargo1_brokerage_fees,
          cargo2_type,
          cargo2_quantity,
          cargo2_rate,
          cargo2_brokerage_fees,
          cargo3_type,
          cargo3_quantity,
          cargo3_rate,
          cargo3_brokerage_fees,
          cargo4_type,
          cargo4_quantity,
          cargo4_rate,
          cargo4_brokerage_fees,
          cargo5_type,
          cargo5_quantity,
          cargo5_rate,
          cargo5_brokerage_fees,
          cargo6_type,
          cargo6_quantity,
          cargo6_rate,
          cargo6_brokerage_fees,
          voyageBonus,
          miscCosts,
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
        await onSubmit(modelFields);
      }}
      {...getOverrideProps(overrides, "Calculator")}
      {...rest}
    >
      <Heading
        level={3}
        children="Voyage Information"
        {...getOverrideProps(overrides, "SectionalElement3")}
      ></Heading>
      <SelectField
        label="Currency"
        placeholder="Please select an option"
        value={currency_type}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              currency_type: value,
              exchange_rate,
              diesel_rate,
              bunker_rate,
              lube_rate,
              port1,
              port1_fees,
              port1_port_call,
              port1_crane_usage,
              port1_surveying_fees,
              port2,
              port2_fees,
              port2_port_call,
              port2_crane_usage,
              port2_surveying_fees,
              port3,
              port3_fees,
              port3_port_call,
              port3_crane_usage,
              port3_surveying_fees,
              port4,
              port4_fees,
              port4_port_call,
              port4_crane_usage,
              port4_surveying_fees,
              port5,
              port5_fees,
              port5_port_call,
              port5_crane_usage,
              port5_surveying_fees,
              port6,
              port6_fees,
              port6_port_call,
              port6_crane_usage,
              port6_surveying_fees,
              port7,
              port7_fees,
              port7_port_call,
              port7_crane_usage,
              port7_surveying_fees,
              port8,
              port8_fees,
              port8_port_call,
              port8_crane_usage,
              port8_surveying_fees,
              port9,
              port9_fees,
              port9_port_call,
              port9_crane_usage,
              port9_surveying_fees,
              port10,
              port10_fees,
              port10_port_call,
              port10_crane_usage,
              port10_surveying_fees,
              cargo1_type,
              cargo1_quantity,
              cargo1_rate,
              cargo1_brokerage_fees,
              cargo2_type,
              cargo2_quantity,
              cargo2_rate,
              cargo2_brokerage_fees,
              cargo3_type,
              cargo3_quantity,
              cargo3_rate,
              cargo3_brokerage_fees,
              cargo4_type,
              cargo4_quantity,
              cargo4_rate,
              cargo4_brokerage_fees,
              cargo5_type,
              cargo5_quantity,
              cargo5_rate,
              cargo5_brokerage_fees,
              cargo6_type,
              cargo6_quantity,
              cargo6_rate,
              cargo6_brokerage_fees,
              voyageBonus,
              miscCosts,
            };
            const result = onChange(modelFields);
            value = result?.currency_type ?? value;
          }
          if (errors.currency_type?.hasError) {
            runValidationTasks("currency_type", value);
          }
          setCurrency_type(value);
        }}
        onBlur={() => runValidationTasks("currency_type", currency_type)}
        errorMessage={errors.currency_type?.errorMessage}
        hasError={errors.currency_type?.hasError}
        {...getOverrideProps(overrides, "currency_type")}
      >
        <option
          children="US Dollar (USD)"
          value="US Dollar (USD)"
          {...getOverrideProps(overrides, "currency_typeoption0")}
        ></option>
        <option
          children="Thai Bhat (THB)"
          value="Thai Bhat (THB)"
          {...getOverrideProps(overrides, "currency_typeoption1")}
        ></option>
      </SelectField>
      <TextField
        label="Exchange Rate"
        type="number"
        step="any"
        value={exchange_rate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              currency_type,
              exchange_rate: value,
              diesel_rate,
              bunker_rate,
              lube_rate,
              port1,
              port1_fees,
              port1_port_call,
              port1_crane_usage,
              port1_surveying_fees,
              port2,
              port2_fees,
              port2_port_call,
              port2_crane_usage,
              port2_surveying_fees,
              port3,
              port3_fees,
              port3_port_call,
              port3_crane_usage,
              port3_surveying_fees,
              port4,
              port4_fees,
              port4_port_call,
              port4_crane_usage,
              port4_surveying_fees,
              port5,
              port5_fees,
              port5_port_call,
              port5_crane_usage,
              port5_surveying_fees,
              port6,
              port6_fees,
              port6_port_call,
              port6_crane_usage,
              port6_surveying_fees,
              port7,
              port7_fees,
              port7_port_call,
              port7_crane_usage,
              port7_surveying_fees,
              port8,
              port8_fees,
              port8_port_call,
              port8_crane_usage,
              port8_surveying_fees,
              port9,
              port9_fees,
              port9_port_call,
              port9_crane_usage,
              port9_surveying_fees,
              port10,
              port10_fees,
              port10_port_call,
              port10_crane_usage,
              port10_surveying_fees,
              cargo1_type,
              cargo1_quantity,
              cargo1_rate,
              cargo1_brokerage_fees,
              cargo2_type,
              cargo2_quantity,
              cargo2_rate,
              cargo2_brokerage_fees,
              cargo3_type,
              cargo3_quantity,
              cargo3_rate,
              cargo3_brokerage_fees,
              cargo4_type,
              cargo4_quantity,
              cargo4_rate,
              cargo4_brokerage_fees,
              cargo5_type,
              cargo5_quantity,
              cargo5_rate,
              cargo5_brokerage_fees,
              cargo6_type,
              cargo6_quantity,
              cargo6_rate,
              cargo6_brokerage_fees,
              voyageBonus,
              miscCosts,
            };
            const result = onChange(modelFields);
            value = result?.exchange_rate ?? value;
          }
          if (errors.exchange_rate?.hasError) {
            runValidationTasks("exchange_rate", value);
          }
          setExchange_rate(value);
        }}
        onBlur={() => runValidationTasks("exchange_rate", exchange_rate)}
        errorMessage={errors.exchange_rate?.errorMessage}
        hasError={errors.exchange_rate?.hasError}
        {...getOverrideProps(overrides, "exchange_rate")}
      ></TextField>
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(3, auto)"
        {...getOverrideProps(overrides, "RowGrid2")}
      >
        <TextField
          label="Diesel Rate"
          type="number"
          step="any"
          value={diesel_rate}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                currency_type,
                exchange_rate,
                diesel_rate: value,
                bunker_rate,
                lube_rate,
                port1,
                port1_fees,
                port1_port_call,
                port1_crane_usage,
                port1_surveying_fees,
                port2,
                port2_fees,
                port2_port_call,
                port2_crane_usage,
                port2_surveying_fees,
                port3,
                port3_fees,
                port3_port_call,
                port3_crane_usage,
                port3_surveying_fees,
                port4,
                port4_fees,
                port4_port_call,
                port4_crane_usage,
                port4_surveying_fees,
                port5,
                port5_fees,
                port5_port_call,
                port5_crane_usage,
                port5_surveying_fees,
                port6,
                port6_fees,
                port6_port_call,
                port6_crane_usage,
                port6_surveying_fees,
                port7,
                port7_fees,
                port7_port_call,
                port7_crane_usage,
                port7_surveying_fees,
                port8,
                port8_fees,
                port8_port_call,
                port8_crane_usage,
                port8_surveying_fees,
                port9,
                port9_fees,
                port9_port_call,
                port9_crane_usage,
                port9_surveying_fees,
                port10,
                port10_fees,
                port10_port_call,
                port10_crane_usage,
                port10_surveying_fees,
                cargo1_type,
                cargo1_quantity,
                cargo1_rate,
                cargo1_brokerage_fees,
                cargo2_type,
                cargo2_quantity,
                cargo2_rate,
                cargo2_brokerage_fees,
                cargo3_type,
                cargo3_quantity,
                cargo3_rate,
                cargo3_brokerage_fees,
                cargo4_type,
                cargo4_quantity,
                cargo4_rate,
                cargo4_brokerage_fees,
                cargo5_type,
                cargo5_quantity,
                cargo5_rate,
                cargo5_brokerage_fees,
                cargo6_type,
                cargo6_quantity,
                cargo6_rate,
                cargo6_brokerage_fees,
                voyageBonus,
                miscCosts,
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
          label="Bunker Rate (Low Sulphur Fuel)"
          type="number"
          step="any"
          value={bunker_rate}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                currency_type,
                exchange_rate,
                diesel_rate,
                bunker_rate: value,
                lube_rate,
                port1,
                port1_fees,
                port1_port_call,
                port1_crane_usage,
                port1_surveying_fees,
                port2,
                port2_fees,
                port2_port_call,
                port2_crane_usage,
                port2_surveying_fees,
                port3,
                port3_fees,
                port3_port_call,
                port3_crane_usage,
                port3_surveying_fees,
                port4,
                port4_fees,
                port4_port_call,
                port4_crane_usage,
                port4_surveying_fees,
                port5,
                port5_fees,
                port5_port_call,
                port5_crane_usage,
                port5_surveying_fees,
                port6,
                port6_fees,
                port6_port_call,
                port6_crane_usage,
                port6_surveying_fees,
                port7,
                port7_fees,
                port7_port_call,
                port7_crane_usage,
                port7_surveying_fees,
                port8,
                port8_fees,
                port8_port_call,
                port8_crane_usage,
                port8_surveying_fees,
                port9,
                port9_fees,
                port9_port_call,
                port9_crane_usage,
                port9_surveying_fees,
                port10,
                port10_fees,
                port10_port_call,
                port10_crane_usage,
                port10_surveying_fees,
                cargo1_type,
                cargo1_quantity,
                cargo1_rate,
                cargo1_brokerage_fees,
                cargo2_type,
                cargo2_quantity,
                cargo2_rate,
                cargo2_brokerage_fees,
                cargo3_type,
                cargo3_quantity,
                cargo3_rate,
                cargo3_brokerage_fees,
                cargo4_type,
                cargo4_quantity,
                cargo4_rate,
                cargo4_brokerage_fees,
                cargo5_type,
                cargo5_quantity,
                cargo5_rate,
                cargo5_brokerage_fees,
                cargo6_type,
                cargo6_quantity,
                cargo6_rate,
                cargo6_brokerage_fees,
                voyageBonus,
                miscCosts,
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
          label="Lube Rate"
          type="number"
          step="any"
          value={lube_rate}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                currency_type,
                exchange_rate,
                diesel_rate,
                bunker_rate,
                lube_rate: value,
                port1,
                port1_fees,
                port1_port_call,
                port1_crane_usage,
                port1_surveying_fees,
                port2,
                port2_fees,
                port2_port_call,
                port2_crane_usage,
                port2_surveying_fees,
                port3,
                port3_fees,
                port3_port_call,
                port3_crane_usage,
                port3_surveying_fees,
                port4,
                port4_fees,
                port4_port_call,
                port4_crane_usage,
                port4_surveying_fees,
                port5,
                port5_fees,
                port5_port_call,
                port5_crane_usage,
                port5_surveying_fees,
                port6,
                port6_fees,
                port6_port_call,
                port6_crane_usage,
                port6_surveying_fees,
                port7,
                port7_fees,
                port7_port_call,
                port7_crane_usage,
                port7_surveying_fees,
                port8,
                port8_fees,
                port8_port_call,
                port8_crane_usage,
                port8_surveying_fees,
                port9,
                port9_fees,
                port9_port_call,
                port9_crane_usage,
                port9_surveying_fees,
                port10,
                port10_fees,
                port10_port_call,
                port10_crane_usage,
                port10_surveying_fees,
                cargo1_type,
                cargo1_quantity,
                cargo1_rate,
                cargo1_brokerage_fees,
                cargo2_type,
                cargo2_quantity,
                cargo2_rate,
                cargo2_brokerage_fees,
                cargo3_type,
                cargo3_quantity,
                cargo3_rate,
                cargo3_brokerage_fees,
                cargo4_type,
                cargo4_quantity,
                cargo4_rate,
                cargo4_brokerage_fees,
                cargo5_type,
                cargo5_quantity,
                cargo5_rate,
                cargo5_brokerage_fees,
                cargo6_type,
                cargo6_quantity,
                cargo6_rate,
                cargo6_brokerage_fees,
                voyageBonus,
                miscCosts,
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
      <Divider
        orientation="horizontal"
        {...getOverrideProps(overrides, "SectionalElement0")}
      ></Divider>
      <Heading
        level={3}
        children="Port Information"
        {...getOverrideProps(overrides, "SectionalElement3")}
      ></Heading>
      <SelectField
        label={<span style={{ fontWeight: 'bold' }}>Port 1</span>}
        placeholder="Please select an option"
        value={port1}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              currency_type,
              exchange_rate,
              diesel_rate,
              bunker_rate,
              lube_rate,
              port1: value,
              port1_fees,
              port1_port_call,
              port1_crane_usage,
              port1_surveying_fees,
              port2,
              port2_fees,
              port2_port_call,
              port2_crane_usage,
              port2_surveying_fees,
              port3,
              port3_fees,
              port3_port_call,
              port3_crane_usage,
              port3_surveying_fees,
              port4,
              port4_fees,
              port4_port_call,
              port4_crane_usage,
              port4_surveying_fees,
              port5,
              port5_fees,
              port5_port_call,
              port5_crane_usage,
              port5_surveying_fees,
              port6,
              port6_fees,
              port6_port_call,
              port6_crane_usage,
              port6_surveying_fees,
              port7,
              port7_fees,
              port7_port_call,
              port7_crane_usage,
              port7_surveying_fees,
              port8,
              port8_fees,
              port8_port_call,
              port8_crane_usage,
              port8_surveying_fees,
              port9,
              port9_fees,
              port9_port_call,
              port9_crane_usage,
              port9_surveying_fees,
              port10,
              port10_fees,
              port10_port_call,
              port10_crane_usage,
              port10_surveying_fees,
              cargo1_type,
              cargo1_quantity,
              cargo1_rate,
              cargo1_brokerage_fees,
              cargo2_type,
              cargo2_quantity,
              cargo2_rate,
              cargo2_brokerage_fees,
              cargo3_type,
              cargo3_quantity,
              cargo3_rate,
              cargo3_brokerage_fees,
              cargo4_type,
              cargo4_quantity,
              cargo4_rate,
              cargo4_brokerage_fees,
              cargo5_type,
              cargo5_quantity,
              cargo5_rate,
              cargo5_brokerage_fees,
              cargo6_type,
              cargo6_quantity,
              cargo6_rate,
              cargo6_brokerage_fees,
              voyageBonus,
              miscCosts,
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
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(4, auto)"
        {...getOverrideProps(overrides, "RowGrid5")}
      >
        <TextField
          label="PDA Fees"
          type="number"
          step="any"
          value={port1_fees}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                currency_type,
                exchange_rate,
                diesel_rate,
                bunker_rate,
                lube_rate,
                port1,
                port1_fees: value,
                port1_port_call,
                port1_crane_usage,
                port1_surveying_fees,
                port2,
                port2_fees,
                port2_port_call,
                port2_crane_usage,
                port2_surveying_fees,
                port3,
                port3_fees,
                port3_port_call,
                port3_crane_usage,
                port3_surveying_fees,
                port4,
                port4_fees,
                port4_port_call,
                port4_crane_usage,
                port4_surveying_fees,
                port5,
                port5_fees,
                port5_port_call,
                port5_crane_usage,
                port5_surveying_fees,
                port6,
                port6_fees,
                port6_port_call,
                port6_crane_usage,
                port6_surveying_fees,
                port7,
                port7_fees,
                port7_port_call,
                port7_crane_usage,
                port7_surveying_fees,
                port8,
                port8_fees,
                port8_port_call,
                port8_crane_usage,
                port8_surveying_fees,
                port9,
                port9_fees,
                port9_port_call,
                port9_crane_usage,
                port9_surveying_fees,
                port10,
                port10_fees,
                port10_port_call,
                port10_crane_usage,
                port10_surveying_fees,
                cargo1_type,
                cargo1_quantity,
                cargo1_rate,
                cargo1_brokerage_fees,
                cargo2_type,
                cargo2_quantity,
                cargo2_rate,
                cargo2_brokerage_fees,
                cargo3_type,
                cargo3_quantity,
                cargo3_rate,
                cargo3_brokerage_fees,
                cargo4_type,
                cargo4_quantity,
                cargo4_rate,
                cargo4_brokerage_fees,
                cargo5_type,
                cargo5_quantity,
                cargo5_rate,
                cargo5_brokerage_fees,
                cargo6_type,
                cargo6_quantity,
                cargo6_rate,
                cargo6_brokerage_fees,
                voyageBonus,
                miscCosts,
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
        <TextField
          label="Port call (Days)"
          type="number"
          step="any"
          value={port1_port_call}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                currency_type,
                exchange_rate,
                diesel_rate,
                bunker_rate,
                lube_rate,
                port1,
                port1_fees,
                port1_port_call: value,
                port1_crane_usage,
                port1_surveying_fees,
                port2,
                port2_fees,
                port2_port_call,
                port2_crane_usage,
                port2_surveying_fees,
                port3,
                port3_fees,
                port3_port_call,
                port3_crane_usage,
                port3_surveying_fees,
                port4,
                port4_fees,
                port4_port_call,
                port4_crane_usage,
                port4_surveying_fees,
                port5,
                port5_fees,
                port5_port_call,
                port5_crane_usage,
                port5_surveying_fees,
                port6,
                port6_fees,
                port6_port_call,
                port6_crane_usage,
                port6_surveying_fees,
                port7,
                port7_fees,
                port7_port_call,
                port7_crane_usage,
                port7_surveying_fees,
                port8,
                port8_fees,
                port8_port_call,
                port8_crane_usage,
                port8_surveying_fees,
                port9,
                port9_fees,
                port9_port_call,
                port9_crane_usage,
                port9_surveying_fees,
                port10,
                port10_fees,
                port10_port_call,
                port10_crane_usage,
                port10_surveying_fees,
                cargo1_type,
                cargo1_quantity,
                cargo1_rate,
                cargo1_brokerage_fees,
                cargo2_type,
                cargo2_quantity,
                cargo2_rate,
                cargo2_brokerage_fees,
                cargo3_type,
                cargo3_quantity,
                cargo3_rate,
                cargo3_brokerage_fees,
                cargo4_type,
                cargo4_quantity,
                cargo4_rate,
                cargo4_brokerage_fees,
                cargo5_type,
                cargo5_quantity,
                cargo5_rate,
                cargo5_brokerage_fees,
                cargo6_type,
                cargo6_quantity,
                cargo6_rate,
                cargo6_brokerage_fees,
                voyageBonus,
                miscCosts,
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
                currency_type,
                exchange_rate,
                diesel_rate,
                bunker_rate,
                lube_rate,
                port1,
                port1_fees,
                port1_port_call,
                port1_crane_usage: value,
                port1_surveying_fees,
                port2,
                port2_fees,
                port2_port_call,
                port2_crane_usage,
                port2_surveying_fees,
                port3,
                port3_fees,
                port3_port_call,
                port3_crane_usage,
                port3_surveying_fees,
                port4,
                port4_fees,
                port4_port_call,
                port4_crane_usage,
                port4_surveying_fees,
                port5,
                port5_fees,
                port5_port_call,
                port5_crane_usage,
                port5_surveying_fees,
                port6,
                port6_fees,
                port6_port_call,
                port6_crane_usage,
                port6_surveying_fees,
                port7,
                port7_fees,
                port7_port_call,
                port7_crane_usage,
                port7_surveying_fees,
                port8,
                port8_fees,
                port8_port_call,
                port8_crane_usage,
                port8_surveying_fees,
                port9,
                port9_fees,
                port9_port_call,
                port9_crane_usage,
                port9_surveying_fees,
                port10,
                port10_fees,
                port10_port_call,
                port10_crane_usage,
                port10_surveying_fees,
                cargo1_type,
                cargo1_quantity,
                cargo1_rate,
                cargo1_brokerage_fees,
                cargo2_type,
                cargo2_quantity,
                cargo2_rate,
                cargo2_brokerage_fees,
                cargo3_type,
                cargo3_quantity,
                cargo3_rate,
                cargo3_brokerage_fees,
                cargo4_type,
                cargo4_quantity,
                cargo4_rate,
                cargo4_brokerage_fees,
                cargo5_type,
                cargo5_quantity,
                cargo5_rate,
                cargo5_brokerage_fees,
                cargo6_type,
                cargo6_quantity,
                cargo6_rate,
                cargo6_brokerage_fees,
                voyageBonus,
                miscCosts,
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
        <TextField
          label="Surveying Fees"
          type="number"
          step="any"
          value={port1_surveying_fees}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                currency_type,
                exchange_rate,
                diesel_rate,
                bunker_rate,
                lube_rate,
                port1,
                port1_fees,
                port1_port_call,
                port1_crane_usage,
                port1_surveying_fees: value,
                port2,
                port2_fees,
                port2_port_call,
                port2_crane_usage,
                port2_surveying_fees,
                port3,
                port3_fees,
                port3_port_call,
                port3_crane_usage,
                port3_surveying_fees,
                port4,
                port4_fees,
                port4_port_call,
                port4_crane_usage,
                port4_surveying_fees,
                port5,
                port5_fees,
                port5_port_call,
                port5_crane_usage,
                port5_surveying_fees,
                port6,
                port6_fees,
                port6_port_call,
                port6_crane_usage,
                port6_surveying_fees,
                port7,
                port7_fees,
                port7_port_call,
                port7_crane_usage,
                port7_surveying_fees,
                port8,
                port8_fees,
                port8_port_call,
                port8_crane_usage,
                port8_surveying_fees,
                port9,
                port9_fees,
                port9_port_call,
                port9_crane_usage,
                port9_surveying_fees,
                port10,
                port10_fees,
                port10_port_call,
                port10_crane_usage,
                port10_surveying_fees,
                cargo1_type,
                cargo1_quantity,
                cargo1_rate,
                cargo1_brokerage_fees,
                cargo2_type,
                cargo2_quantity,
                cargo2_rate,
                cargo2_brokerage_fees,
                cargo3_type,
                cargo3_quantity,
                cargo3_rate,
                cargo3_brokerage_fees,
                cargo4_type,
                cargo4_quantity,
                cargo4_rate,
                cargo4_brokerage_fees,
                cargo5_type,
                cargo5_quantity,
                cargo5_rate,
                cargo5_brokerage_fees,
                cargo6_type,
                cargo6_quantity,
                cargo6_rate,
                cargo6_brokerage_fees,
                voyageBonus,
                miscCosts,
              };
              const result = onChange(modelFields);
              value = result?.port1_surveying_fees ?? value;
            }
            if (errors.port1_surveying_fees?.hasError) {
              runValidationTasks("port1_surveying_fees", value);
            }
            setPort1_surveying_fees(value);
          }}
          onBlur={() =>
            runValidationTasks("port1_surveying_fees", port1_surveying_fees)
          }
          errorMessage={errors.port1_surveying_fees?.errorMessage}
          hasError={errors.port1_surveying_fees?.hasError}
          {...getOverrideProps(overrides, "port1_surveying_fees")}
        ></TextField>
      </Grid>
      <SelectField
        label={<span style={{ fontWeight: 'bold' }}>Port 2</span>}
        placeholder="Please select an option"
        value={port2}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              currency_type,
              exchange_rate,
              diesel_rate,
              bunker_rate,
              lube_rate,
              port1,
              port1_fees,
              port1_port_call,
              port1_crane_usage,
              port1_surveying_fees,
              port2: value,
              port2_fees,
              port2_port_call,
              port2_crane_usage,
              port2_surveying_fees,
              port3,
              port3_fees,
              port3_port_call,
              port3_crane_usage,
              port3_surveying_fees,
              port4,
              port4_fees,
              port4_port_call,
              port4_crane_usage,
              port4_surveying_fees,
              port5,
              port5_fees,
              port5_port_call,
              port5_crane_usage,
              port5_surveying_fees,
              port6,
              port6_fees,
              port6_port_call,
              port6_crane_usage,
              port6_surveying_fees,
              port7,
              port7_fees,
              port7_port_call,
              port7_crane_usage,
              port7_surveying_fees,
              port8,
              port8_fees,
              port8_port_call,
              port8_crane_usage,
              port8_surveying_fees,
              port9,
              port9_fees,
              port9_port_call,
              port9_crane_usage,
              port9_surveying_fees,
              port10,
              port10_fees,
              port10_port_call,
              port10_crane_usage,
              port10_surveying_fees,
              cargo1_type,
              cargo1_quantity,
              cargo1_rate,
              cargo1_brokerage_fees,
              cargo2_type,
              cargo2_quantity,
              cargo2_rate,
              cargo2_brokerage_fees,
              cargo3_type,
              cargo3_quantity,
              cargo3_rate,
              cargo3_brokerage_fees,
              cargo4_type,
              cargo4_quantity,
              cargo4_rate,
              cargo4_brokerage_fees,
              cargo5_type,
              cargo5_quantity,
              cargo5_rate,
              cargo5_brokerage_fees,
              cargo6_type,
              cargo6_quantity,
              cargo6_rate,
              cargo6_brokerage_fees,
              voyageBonus,
              miscCosts,
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
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(4, auto)"
        {...getOverrideProps(overrides, "RowGrid7")}
      >
        <TextField
          label="PDA Fees"
          type="number"
          step="any"
          value={port2_fees}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                currency_type,
                exchange_rate,
                diesel_rate,
                bunker_rate,
                lube_rate,
                port1,
                port1_fees,
                port1_port_call,
                port1_crane_usage,
                port1_surveying_fees,
                port2,
                port2_fees: value,
                port2_port_call,
                port2_crane_usage,
                port2_surveying_fees,
                port3,
                port3_fees,
                port3_port_call,
                port3_crane_usage,
                port3_surveying_fees,
                port4,
                port4_fees,
                port4_port_call,
                port4_crane_usage,
                port4_surveying_fees,
                port5,
                port5_fees,
                port5_port_call,
                port5_crane_usage,
                port5_surveying_fees,
                port6,
                port6_fees,
                port6_port_call,
                port6_crane_usage,
                port6_surveying_fees,
                port7,
                port7_fees,
                port7_port_call,
                port7_crane_usage,
                port7_surveying_fees,
                port8,
                port8_fees,
                port8_port_call,
                port8_crane_usage,
                port8_surveying_fees,
                port9,
                port9_fees,
                port9_port_call,
                port9_crane_usage,
                port9_surveying_fees,
                port10,
                port10_fees,
                port10_port_call,
                port10_crane_usage,
                port10_surveying_fees,
                cargo1_type,
                cargo1_quantity,
                cargo1_rate,
                cargo1_brokerage_fees,
                cargo2_type,
                cargo2_quantity,
                cargo2_rate,
                cargo2_brokerage_fees,
                cargo3_type,
                cargo3_quantity,
                cargo3_rate,
                cargo3_brokerage_fees,
                cargo4_type,
                cargo4_quantity,
                cargo4_rate,
                cargo4_brokerage_fees,
                cargo5_type,
                cargo5_quantity,
                cargo5_rate,
                cargo5_brokerage_fees,
                cargo6_type,
                cargo6_quantity,
                cargo6_rate,
                cargo6_brokerage_fees,
                voyageBonus,
                miscCosts,
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
        <TextField
          label="Port call (Days)"
          type="number"
          step="any"
          value={port2_port_call}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                currency_type,
                exchange_rate,
                diesel_rate,
                bunker_rate,
                lube_rate,
                port1,
                port1_fees,
                port1_port_call,
                port1_crane_usage,
                port1_surveying_fees,
                port2,
                port2_fees,
                port2_port_call: value,
                port2_crane_usage,
                port2_surveying_fees,
                port3,
                port3_fees,
                port3_port_call,
                port3_crane_usage,
                port3_surveying_fees,
                port4,
                port4_fees,
                port4_port_call,
                port4_crane_usage,
                port4_surveying_fees,
                port5,
                port5_fees,
                port5_port_call,
                port5_crane_usage,
                port5_surveying_fees,
                port6,
                port6_fees,
                port6_port_call,
                port6_crane_usage,
                port6_surveying_fees,
                port7,
                port7_fees,
                port7_port_call,
                port7_crane_usage,
                port7_surveying_fees,
                port8,
                port8_fees,
                port8_port_call,
                port8_crane_usage,
                port8_surveying_fees,
                port9,
                port9_fees,
                port9_port_call,
                port9_crane_usage,
                port9_surveying_fees,
                port10,
                port10_fees,
                port10_port_call,
                port10_crane_usage,
                port10_surveying_fees,
                cargo1_type,
                cargo1_quantity,
                cargo1_rate,
                cargo1_brokerage_fees,
                cargo2_type,
                cargo2_quantity,
                cargo2_rate,
                cargo2_brokerage_fees,
                cargo3_type,
                cargo3_quantity,
                cargo3_rate,
                cargo3_brokerage_fees,
                cargo4_type,
                cargo4_quantity,
                cargo4_rate,
                cargo4_brokerage_fees,
                cargo5_type,
                cargo5_quantity,
                cargo5_rate,
                cargo5_brokerage_fees,
                cargo6_type,
                cargo6_quantity,
                cargo6_rate,
                cargo6_brokerage_fees,
                voyageBonus,
                miscCosts,
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
                currency_type,
                exchange_rate,
                diesel_rate,
                bunker_rate,
                lube_rate,
                port1,
                port1_fees,
                port1_port_call,
                port1_crane_usage,
                port1_surveying_fees,
                port2,
                port2_fees,
                port2_port_call,
                port2_crane_usage: value,
                port2_surveying_fees,
                port3,
                port3_fees,
                port3_port_call,
                port3_crane_usage,
                port3_surveying_fees,
                port4,
                port4_fees,
                port4_port_call,
                port4_crane_usage,
                port4_surveying_fees,
                port5,
                port5_fees,
                port5_port_call,
                port5_crane_usage,
                port5_surveying_fees,
                port6,
                port6_fees,
                port6_port_call,
                port6_crane_usage,
                port6_surveying_fees,
                port7,
                port7_fees,
                port7_port_call,
                port7_crane_usage,
                port7_surveying_fees,
                port8,
                port8_fees,
                port8_port_call,
                port8_crane_usage,
                port8_surveying_fees,
                port9,
                port9_fees,
                port9_port_call,
                port9_crane_usage,
                port9_surveying_fees,
                port10,
                port10_fees,
                port10_port_call,
                port10_crane_usage,
                port10_surveying_fees,
                cargo1_type,
                cargo1_quantity,
                cargo1_rate,
                cargo1_brokerage_fees,
                cargo2_type,
                cargo2_quantity,
                cargo2_rate,
                cargo2_brokerage_fees,
                cargo3_type,
                cargo3_quantity,
                cargo3_rate,
                cargo3_brokerage_fees,
                cargo4_type,
                cargo4_quantity,
                cargo4_rate,
                cargo4_brokerage_fees,
                cargo5_type,
                cargo5_quantity,
                cargo5_rate,
                cargo5_brokerage_fees,
                cargo6_type,
                cargo6_quantity,
                cargo6_rate,
                cargo6_brokerage_fees,
                voyageBonus,
                miscCosts,
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
        <TextField
          label="Surveying Fees"
          type="number"
          step="any"
          value={port2_surveying_fees}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                currency_type,
                exchange_rate,
                diesel_rate,
                bunker_rate,
                lube_rate,
                port1,
                port1_fees,
                port1_port_call,
                port1_crane_usage,
                port1_surveying_fees,
                port2,
                port2_fees,
                port2_port_call,
                port2_crane_usage,
                port2_surveying_fees: value,
                port3,
                port3_fees,
                port3_port_call,
                port3_crane_usage,
                port3_surveying_fees,
                port4,
                port4_fees,
                port4_port_call,
                port4_crane_usage,
                port4_surveying_fees,
                port5,
                port5_fees,
                port5_port_call,
                port5_crane_usage,
                port5_surveying_fees,
                port6,
                port6_fees,
                port6_port_call,
                port6_crane_usage,
                port6_surveying_fees,
                port7,
                port7_fees,
                port7_port_call,
                port7_crane_usage,
                port7_surveying_fees,
                port8,
                port8_fees,
                port8_port_call,
                port8_crane_usage,
                port8_surveying_fees,
                port9,
                port9_fees,
                port9_port_call,
                port9_crane_usage,
                port9_surveying_fees,
                port10,
                port10_fees,
                port10_port_call,
                port10_crane_usage,
                port10_surveying_fees,
                cargo1_type,
                cargo1_quantity,
                cargo1_rate,
                cargo1_brokerage_fees,
                cargo2_type,
                cargo2_quantity,
                cargo2_rate,
                cargo2_brokerage_fees,
                cargo3_type,
                cargo3_quantity,
                cargo3_rate,
                cargo3_brokerage_fees,
                cargo4_type,
                cargo4_quantity,
                cargo4_rate,
                cargo4_brokerage_fees,
                cargo5_type,
                cargo5_quantity,
                cargo5_rate,
                cargo5_brokerage_fees,
                cargo6_type,
                cargo6_quantity,
                cargo6_rate,
                cargo6_brokerage_fees,
                voyageBonus,
                miscCosts,
              };
              const result = onChange(modelFields);
              value = result?.port2_surveying_fees ?? value;
            }
            if (errors.port2_surveying_fees?.hasError) {
              runValidationTasks("port2_surveying_fees", value);
            }
            setPort2_surveying_fees(value);
          }}
          onBlur={() =>
            runValidationTasks("port2_surveying_fees", port2_surveying_fees)
          }
          errorMessage={errors.port2_surveying_fees?.errorMessage}
          hasError={errors.port2_surveying_fees?.hasError}
          {...getOverrideProps(overrides, "port2_surveying_fees")}
        ></TextField>
      </Grid>
      <SelectField
        label={<span style={{ fontWeight: 'bold' }}>Port 3</span>}
        placeholder="Please select an option"
        value={port3}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              currency_type,
              exchange_rate,
              diesel_rate,
              bunker_rate,
              lube_rate,
              port1,
              port1_fees,
              port1_port_call,
              port1_crane_usage,
              port1_surveying_fees,
              port2,
              port2_fees,
              port2_port_call,
              port2_crane_usage,
              port2_surveying_fees,
              port3: value,
              port3_fees,
              port3_port_call,
              port3_crane_usage,
              port3_surveying_fees,
              port4,
              port4_fees,
              port4_port_call,
              port4_crane_usage,
              port4_surveying_fees,
              port5,
              port5_fees,
              port5_port_call,
              port5_crane_usage,
              port5_surveying_fees,
              port6,
              port6_fees,
              port6_port_call,
              port6_crane_usage,
              port6_surveying_fees,
              port7,
              port7_fees,
              port7_port_call,
              port7_crane_usage,
              port7_surveying_fees,
              port8,
              port8_fees,
              port8_port_call,
              port8_crane_usage,
              port8_surveying_fees,
              port9,
              port9_fees,
              port9_port_call,
              port9_crane_usage,
              port9_surveying_fees,
              port10,
              port10_fees,
              port10_port_call,
              port10_crane_usage,
              port10_surveying_fees,
              cargo1_type,
              cargo1_quantity,
              cargo1_rate,
              cargo1_brokerage_fees,
              cargo2_type,
              cargo2_quantity,
              cargo2_rate,
              cargo2_brokerage_fees,
              cargo3_type,
              cargo3_quantity,
              cargo3_rate,
              cargo3_brokerage_fees,
              cargo4_type,
              cargo4_quantity,
              cargo4_rate,
              cargo4_brokerage_fees,
              cargo5_type,
              cargo5_quantity,
              cargo5_rate,
              cargo5_brokerage_fees,
              cargo6_type,
              cargo6_quantity,
              cargo6_rate,
              cargo6_brokerage_fees,
              voyageBonus,
              miscCosts,
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
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(4, auto)"
        {...getOverrideProps(overrides, "RowGrid9")}
      >
        <TextField
          label="PDA Fees"
          type="number"
          step="any"
          value={port3_fees}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                currency_type,
                exchange_rate,
                diesel_rate,
                bunker_rate,
                lube_rate,
                port1,
                port1_fees,
                port1_port_call,
                port1_crane_usage,
                port1_surveying_fees,
                port2,
                port2_fees,
                port2_port_call,
                port2_crane_usage,
                port2_surveying_fees,
                port3,
                port3_fees: value,
                port3_port_call,
                port3_crane_usage,
                port3_surveying_fees,
                port4,
                port4_fees,
                port4_port_call,
                port4_crane_usage,
                port4_surveying_fees,
                port5,
                port5_fees,
                port5_port_call,
                port5_crane_usage,
                port5_surveying_fees,
                port6,
                port6_fees,
                port6_port_call,
                port6_crane_usage,
                port6_surveying_fees,
                port7,
                port7_fees,
                port7_port_call,
                port7_crane_usage,
                port7_surveying_fees,
                port8,
                port8_fees,
                port8_port_call,
                port8_crane_usage,
                port8_surveying_fees,
                port9,
                port9_fees,
                port9_port_call,
                port9_crane_usage,
                port9_surveying_fees,
                port10,
                port10_fees,
                port10_port_call,
                port10_crane_usage,
                port10_surveying_fees,
                cargo1_type,
                cargo1_quantity,
                cargo1_rate,
                cargo1_brokerage_fees,
                cargo2_type,
                cargo2_quantity,
                cargo2_rate,
                cargo2_brokerage_fees,
                cargo3_type,
                cargo3_quantity,
                cargo3_rate,
                cargo3_brokerage_fees,
                cargo4_type,
                cargo4_quantity,
                cargo4_rate,
                cargo4_brokerage_fees,
                cargo5_type,
                cargo5_quantity,
                cargo5_rate,
                cargo5_brokerage_fees,
                cargo6_type,
                cargo6_quantity,
                cargo6_rate,
                cargo6_brokerage_fees,
                voyageBonus,
                miscCosts,
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
        <TextField
          label="Port call (Days)"
          type="number"
          step="any"
          value={port3_port_call}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                currency_type,
                exchange_rate,
                diesel_rate,
                bunker_rate,
                lube_rate,
                port1,
                port1_fees,
                port1_port_call,
                port1_crane_usage,
                port1_surveying_fees,
                port2,
                port2_fees,
                port2_port_call,
                port2_crane_usage,
                port2_surveying_fees,
                port3,
                port3_fees,
                port3_port_call: value,
                port3_crane_usage,
                port3_surveying_fees,
                port4,
                port4_fees,
                port4_port_call,
                port4_crane_usage,
                port4_surveying_fees,
                port5,
                port5_fees,
                port5_port_call,
                port5_crane_usage,
                port5_surveying_fees,
                port6,
                port6_fees,
                port6_port_call,
                port6_crane_usage,
                port6_surveying_fees,
                port7,
                port7_fees,
                port7_port_call,
                port7_crane_usage,
                port7_surveying_fees,
                port8,
                port8_fees,
                port8_port_call,
                port8_crane_usage,
                port8_surveying_fees,
                port9,
                port9_fees,
                port9_port_call,
                port9_crane_usage,
                port9_surveying_fees,
                port10,
                port10_fees,
                port10_port_call,
                port10_crane_usage,
                port10_surveying_fees,
                cargo1_type,
                cargo1_quantity,
                cargo1_rate,
                cargo1_brokerage_fees,
                cargo2_type,
                cargo2_quantity,
                cargo2_rate,
                cargo2_brokerage_fees,
                cargo3_type,
                cargo3_quantity,
                cargo3_rate,
                cargo3_brokerage_fees,
                cargo4_type,
                cargo4_quantity,
                cargo4_rate,
                cargo4_brokerage_fees,
                cargo5_type,
                cargo5_quantity,
                cargo5_rate,
                cargo5_brokerage_fees,
                cargo6_type,
                cargo6_quantity,
                cargo6_rate,
                cargo6_brokerage_fees,
                voyageBonus,
                miscCosts,
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
                currency_type,
                exchange_rate,
                diesel_rate,
                bunker_rate,
                lube_rate,
                port1,
                port1_fees,
                port1_port_call,
                port1_crane_usage,
                port1_surveying_fees,
                port2,
                port2_fees,
                port2_port_call,
                port2_crane_usage,
                port2_surveying_fees,
                port3,
                port3_fees,
                port3_port_call,
                port3_crane_usage: value,
                port3_surveying_fees,
                port4,
                port4_fees,
                port4_port_call,
                port4_crane_usage,
                port4_surveying_fees,
                port5,
                port5_fees,
                port5_port_call,
                port5_crane_usage,
                port5_surveying_fees,
                port6,
                port6_fees,
                port6_port_call,
                port6_crane_usage,
                port6_surveying_fees,
                port7,
                port7_fees,
                port7_port_call,
                port7_crane_usage,
                port7_surveying_fees,
                port8,
                port8_fees,
                port8_port_call,
                port8_crane_usage,
                port8_surveying_fees,
                port9,
                port9_fees,
                port9_port_call,
                port9_crane_usage,
                port9_surveying_fees,
                port10,
                port10_fees,
                port10_port_call,
                port10_crane_usage,
                port10_surveying_fees,
                cargo1_type,
                cargo1_quantity,
                cargo1_rate,
                cargo1_brokerage_fees,
                cargo2_type,
                cargo2_quantity,
                cargo2_rate,
                cargo2_brokerage_fees,
                cargo3_type,
                cargo3_quantity,
                cargo3_rate,
                cargo3_brokerage_fees,
                cargo4_type,
                cargo4_quantity,
                cargo4_rate,
                cargo4_brokerage_fees,
                cargo5_type,
                cargo5_quantity,
                cargo5_rate,
                cargo5_brokerage_fees,
                cargo6_type,
                cargo6_quantity,
                cargo6_rate,
                cargo6_brokerage_fees,
                voyageBonus,
                miscCosts,
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
        <TextField
          label="Surveying Fees"
          type="number"
          step="any"
          value={port3_surveying_fees}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                currency_type,
                exchange_rate,
                diesel_rate,
                bunker_rate,
                lube_rate,
                port1,
                port1_fees,
                port1_port_call,
                port1_crane_usage,
                port1_surveying_fees,
                port2,
                port2_fees,
                port2_port_call,
                port2_crane_usage,
                port2_surveying_fees,
                port3,
                port3_fees,
                port3_port_call,
                port3_crane_usage,
                port3_surveying_fees: value,
                port4,
                port4_fees,
                port4_port_call,
                port4_crane_usage,
                port4_surveying_fees,
                port5,
                port5_fees,
                port5_port_call,
                port5_crane_usage,
                port5_surveying_fees,
                port6,
                port6_fees,
                port6_port_call,
                port6_crane_usage,
                port6_surveying_fees,
                port7,
                port7_fees,
                port7_port_call,
                port7_crane_usage,
                port7_surveying_fees,
                port8,
                port8_fees,
                port8_port_call,
                port8_crane_usage,
                port8_surveying_fees,
                port9,
                port9_fees,
                port9_port_call,
                port9_crane_usage,
                port9_surveying_fees,
                port10,
                port10_fees,
                port10_port_call,
                port10_crane_usage,
                port10_surveying_fees,
                cargo1_type,
                cargo1_quantity,
                cargo1_rate,
                cargo1_brokerage_fees,
                cargo2_type,
                cargo2_quantity,
                cargo2_rate,
                cargo2_brokerage_fees,
                cargo3_type,
                cargo3_quantity,
                cargo3_rate,
                cargo3_brokerage_fees,
                cargo4_type,
                cargo4_quantity,
                cargo4_rate,
                cargo4_brokerage_fees,
                cargo5_type,
                cargo5_quantity,
                cargo5_rate,
                cargo5_brokerage_fees,
                cargo6_type,
                cargo6_quantity,
                cargo6_rate,
                cargo6_brokerage_fees,
                voyageBonus,
                miscCosts,
              };
              const result = onChange(modelFields);
              value = result?.port3_surveying_fees ?? value;
            }
            if (errors.port3_surveying_fees?.hasError) {
              runValidationTasks("port3_surveying_fees", value);
            }
            setPort3_surveying_fees(value);
          }}
          onBlur={() =>
            runValidationTasks("port3_surveying_fees", port3_surveying_fees)
          }
          errorMessage={errors.port3_surveying_fees?.errorMessage}
          hasError={errors.port3_surveying_fees?.hasError}
          {...getOverrideProps(overrides, "port3_surveying_fees")}
        ></TextField>
      </Grid>
      <SelectField
        label={<span style={{ fontWeight: 'bold' }}>Port 4</span>}
        placeholder="Please select an option"
        value={port4}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              currency_type,
              exchange_rate,
              diesel_rate,
              bunker_rate,
              lube_rate,
              port1,
              port1_fees,
              port1_port_call,
              port1_crane_usage,
              port1_surveying_fees,
              port2,
              port2_fees,
              port2_port_call,
              port2_crane_usage,
              port2_surveying_fees,
              port3,
              port3_fees,
              port3_port_call,
              port3_crane_usage,
              port3_surveying_fees,
              port4: value,
              port4_fees,
              port4_port_call,
              port4_crane_usage,
              port4_surveying_fees,
              port5,
              port5_fees,
              port5_port_call,
              port5_crane_usage,
              port5_surveying_fees,
              port6,
              port6_fees,
              port6_port_call,
              port6_crane_usage,
              port6_surveying_fees,
              port7,
              port7_fees,
              port7_port_call,
              port7_crane_usage,
              port7_surveying_fees,
              port8,
              port8_fees,
              port8_port_call,
              port8_crane_usage,
              port8_surveying_fees,
              port9,
              port9_fees,
              port9_port_call,
              port9_crane_usage,
              port9_surveying_fees,
              port10,
              port10_fees,
              port10_port_call,
              port10_crane_usage,
              port10_surveying_fees,
              cargo1_type,
              cargo1_quantity,
              cargo1_rate,
              cargo1_brokerage_fees,
              cargo2_type,
              cargo2_quantity,
              cargo2_rate,
              cargo2_brokerage_fees,
              cargo3_type,
              cargo3_quantity,
              cargo3_rate,
              cargo3_brokerage_fees,
              cargo4_type,
              cargo4_quantity,
              cargo4_rate,
              cargo4_brokerage_fees,
              cargo5_type,
              cargo5_quantity,
              cargo5_rate,
              cargo5_brokerage_fees,
              cargo6_type,
              cargo6_quantity,
              cargo6_rate,
              cargo6_brokerage_fees,
              voyageBonus,
              miscCosts,
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
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(4, auto)"
        {...getOverrideProps(overrides, "RowGrid11")}
      >
        <TextField
          label="PDA Fees"
          type="number"
          step="any"
          value={port4_fees}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                currency_type,
                exchange_rate,
                diesel_rate,
                bunker_rate,
                lube_rate,
                port1,
                port1_fees,
                port1_port_call,
                port1_crane_usage,
                port1_surveying_fees,
                port2,
                port2_fees,
                port2_port_call,
                port2_crane_usage,
                port2_surveying_fees,
                port3,
                port3_fees,
                port3_port_call,
                port3_crane_usage,
                port3_surveying_fees,
                port4,
                port4_fees: value,
                port4_port_call,
                port4_crane_usage,
                port4_surveying_fees,
                port5,
                port5_fees,
                port5_port_call,
                port5_crane_usage,
                port5_surveying_fees,
                port6,
                port6_fees,
                port6_port_call,
                port6_crane_usage,
                port6_surveying_fees,
                port7,
                port7_fees,
                port7_port_call,
                port7_crane_usage,
                port7_surveying_fees,
                port8,
                port8_fees,
                port8_port_call,
                port8_crane_usage,
                port8_surveying_fees,
                port9,
                port9_fees,
                port9_port_call,
                port9_crane_usage,
                port9_surveying_fees,
                port10,
                port10_fees,
                port10_port_call,
                port10_crane_usage,
                port10_surveying_fees,
                cargo1_type,
                cargo1_quantity,
                cargo1_rate,
                cargo1_brokerage_fees,
                cargo2_type,
                cargo2_quantity,
                cargo2_rate,
                cargo2_brokerage_fees,
                cargo3_type,
                cargo3_quantity,
                cargo3_rate,
                cargo3_brokerage_fees,
                cargo4_type,
                cargo4_quantity,
                cargo4_rate,
                cargo4_brokerage_fees,
                cargo5_type,
                cargo5_quantity,
                cargo5_rate,
                cargo5_brokerage_fees,
                cargo6_type,
                cargo6_quantity,
                cargo6_rate,
                cargo6_brokerage_fees,
                voyageBonus,
                miscCosts,
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
        <TextField
          label="Port call (Days)"
          type="number"
          step="any"
          value={port4_port_call}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                currency_type,
                exchange_rate,
                diesel_rate,
                bunker_rate,
                lube_rate,
                port1,
                port1_fees,
                port1_port_call,
                port1_crane_usage,
                port1_surveying_fees,
                port2,
                port2_fees,
                port2_port_call,
                port2_crane_usage,
                port2_surveying_fees,
                port3,
                port3_fees,
                port3_port_call,
                port3_crane_usage,
                port3_surveying_fees,
                port4,
                port4_fees,
                port4_port_call: value,
                port4_crane_usage,
                port4_surveying_fees,
                port5,
                port5_fees,
                port5_port_call,
                port5_crane_usage,
                port5_surveying_fees,
                port6,
                port6_fees,
                port6_port_call,
                port6_crane_usage,
                port6_surveying_fees,
                port7,
                port7_fees,
                port7_port_call,
                port7_crane_usage,
                port7_surveying_fees,
                port8,
                port8_fees,
                port8_port_call,
                port8_crane_usage,
                port8_surveying_fees,
                port9,
                port9_fees,
                port9_port_call,
                port9_crane_usage,
                port9_surveying_fees,
                port10,
                port10_fees,
                port10_port_call,
                port10_crane_usage,
                port10_surveying_fees,
                cargo1_type,
                cargo1_quantity,
                cargo1_rate,
                cargo1_brokerage_fees,
                cargo2_type,
                cargo2_quantity,
                cargo2_rate,
                cargo2_brokerage_fees,
                cargo3_type,
                cargo3_quantity,
                cargo3_rate,
                cargo3_brokerage_fees,
                cargo4_type,
                cargo4_quantity,
                cargo4_rate,
                cargo4_brokerage_fees,
                cargo5_type,
                cargo5_quantity,
                cargo5_rate,
                cargo5_brokerage_fees,
                cargo6_type,
                cargo6_quantity,
                cargo6_rate,
                cargo6_brokerage_fees,
                voyageBonus,
                miscCosts,
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
                currency_type,
                exchange_rate,
                diesel_rate,
                bunker_rate,
                lube_rate,
                port1,
                port1_fees,
                port1_port_call,
                port1_crane_usage,
                port1_surveying_fees,
                port2,
                port2_fees,
                port2_port_call,
                port2_crane_usage,
                port2_surveying_fees,
                port3,
                port3_fees,
                port3_port_call,
                port3_crane_usage,
                port3_surveying_fees,
                port4,
                port4_fees,
                port4_port_call,
                port4_crane_usage: value,
                port4_surveying_fees,
                port5,
                port5_fees,
                port5_port_call,
                port5_crane_usage,
                port5_surveying_fees,
                port6,
                port6_fees,
                port6_port_call,
                port6_crane_usage,
                port6_surveying_fees,
                port7,
                port7_fees,
                port7_port_call,
                port7_crane_usage,
                port7_surveying_fees,
                port8,
                port8_fees,
                port8_port_call,
                port8_crane_usage,
                port8_surveying_fees,
                port9,
                port9_fees,
                port9_port_call,
                port9_crane_usage,
                port9_surveying_fees,
                port10,
                port10_fees,
                port10_port_call,
                port10_crane_usage,
                port10_surveying_fees,
                cargo1_type,
                cargo1_quantity,
                cargo1_rate,
                cargo1_brokerage_fees,
                cargo2_type,
                cargo2_quantity,
                cargo2_rate,
                cargo2_brokerage_fees,
                cargo3_type,
                cargo3_quantity,
                cargo3_rate,
                cargo3_brokerage_fees,
                cargo4_type,
                cargo4_quantity,
                cargo4_rate,
                cargo4_brokerage_fees,
                cargo5_type,
                cargo5_quantity,
                cargo5_rate,
                cargo5_brokerage_fees,
                cargo6_type,
                cargo6_quantity,
                cargo6_rate,
                cargo6_brokerage_fees,
                voyageBonus,
                miscCosts,
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
        <TextField
          label="Surveying Fees"
          type="number"
          step="any"
          value={port4_surveying_fees}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                currency_type,
                exchange_rate,
                diesel_rate,
                bunker_rate,
                lube_rate,
                port1,
                port1_fees,
                port1_port_call,
                port1_crane_usage,
                port1_surveying_fees,
                port2,
                port2_fees,
                port2_port_call,
                port2_crane_usage,
                port2_surveying_fees,
                port3,
                port3_fees,
                port3_port_call,
                port3_crane_usage,
                port3_surveying_fees,
                port4,
                port4_fees,
                port4_port_call,
                port4_crane_usage,
                port4_surveying_fees: value,
                port5,
                port5_fees,
                port5_port_call,
                port5_crane_usage,
                port5_surveying_fees,
                port6,
                port6_fees,
                port6_port_call,
                port6_crane_usage,
                port6_surveying_fees,
                port7,
                port7_fees,
                port7_port_call,
                port7_crane_usage,
                port7_surveying_fees,
                port8,
                port8_fees,
                port8_port_call,
                port8_crane_usage,
                port8_surveying_fees,
                port9,
                port9_fees,
                port9_port_call,
                port9_crane_usage,
                port9_surveying_fees,
                port10,
                port10_fees,
                port10_port_call,
                port10_crane_usage,
                port10_surveying_fees,
                cargo1_type,
                cargo1_quantity,
                cargo1_rate,
                cargo1_brokerage_fees,
                cargo2_type,
                cargo2_quantity,
                cargo2_rate,
                cargo2_brokerage_fees,
                cargo3_type,
                cargo3_quantity,
                cargo3_rate,
                cargo3_brokerage_fees,
                cargo4_type,
                cargo4_quantity,
                cargo4_rate,
                cargo4_brokerage_fees,
                cargo5_type,
                cargo5_quantity,
                cargo5_rate,
                cargo5_brokerage_fees,
                cargo6_type,
                cargo6_quantity,
                cargo6_rate,
                cargo6_brokerage_fees,
                voyageBonus,
                miscCosts,
              };
              const result = onChange(modelFields);
              value = result?.port4_surveying_fees ?? value;
            }
            if (errors.port4_surveying_fees?.hasError) {
              runValidationTasks("port4_surveying_fees", value);
            }
            setPort4_surveying_fees(value);
          }}
          onBlur={() =>
            runValidationTasks("port4_surveying_fees", port4_surveying_fees)
          }
          errorMessage={errors.port4_surveying_fees?.errorMessage}
          hasError={errors.port4_surveying_fees?.hasError}
          {...getOverrideProps(overrides, "port4_surveying_fees")}
        ></TextField>
      </Grid>
      <SelectField
        label={<span style={{ fontWeight: 'bold' }}>Port 5</span>}
        placeholder="Please select an option"
        value={port5}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              currency_type,
              exchange_rate,
              diesel_rate,
              bunker_rate,
              lube_rate,
              port1,
              port1_fees,
              port1_port_call,
              port1_crane_usage,
              port1_surveying_fees,
              port2,
              port2_fees,
              port2_port_call,
              port2_crane_usage,
              port2_surveying_fees,
              port3,
              port3_fees,
              port3_port_call,
              port3_crane_usage,
              port3_surveying_fees,
              port4,
              port4_fees,
              port4_port_call,
              port4_crane_usage,
              port4_surveying_fees,
              port5: value,
              port5_fees,
              port5_port_call,
              port5_crane_usage,
              port5_surveying_fees,
              port6,
              port6_fees,
              port6_port_call,
              port6_crane_usage,
              port6_surveying_fees,
              port7,
              port7_fees,
              port7_port_call,
              port7_crane_usage,
              port7_surveying_fees,
              port8,
              port8_fees,
              port8_port_call,
              port8_crane_usage,
              port8_surveying_fees,
              port9,
              port9_fees,
              port9_port_call,
              port9_crane_usage,
              port9_surveying_fees,
              port10,
              port10_fees,
              port10_port_call,
              port10_crane_usage,
              port10_surveying_fees,
              cargo1_type,
              cargo1_quantity,
              cargo1_rate,
              cargo1_brokerage_fees,
              cargo2_type,
              cargo2_quantity,
              cargo2_rate,
              cargo2_brokerage_fees,
              cargo3_type,
              cargo3_quantity,
              cargo3_rate,
              cargo3_brokerage_fees,
              cargo4_type,
              cargo4_quantity,
              cargo4_rate,
              cargo4_brokerage_fees,
              cargo5_type,
              cargo5_quantity,
              cargo5_rate,
              cargo5_brokerage_fees,
              cargo6_type,
              cargo6_quantity,
              cargo6_rate,
              cargo6_brokerage_fees,
              voyageBonus,
              miscCosts,
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
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(4, auto)"
        {...getOverrideProps(overrides, "RowGrid13")}
      >
        <TextField
          label="PDA Fees"
          type="number"
          step="any"
          value={port5_fees}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                currency_type,
                exchange_rate,
                diesel_rate,
                bunker_rate,
                lube_rate,
                port1,
                port1_fees,
                port1_port_call,
                port1_crane_usage,
                port1_surveying_fees,
                port2,
                port2_fees,
                port2_port_call,
                port2_crane_usage,
                port2_surveying_fees,
                port3,
                port3_fees,
                port3_port_call,
                port3_crane_usage,
                port3_surveying_fees,
                port4,
                port4_fees,
                port4_port_call,
                port4_crane_usage,
                port4_surveying_fees,
                port5,
                port5_fees: value,
                port5_port_call,
                port5_crane_usage,
                port5_surveying_fees,
                port6,
                port6_fees,
                port6_port_call,
                port6_crane_usage,
                port6_surveying_fees,
                port7,
                port7_fees,
                port7_port_call,
                port7_crane_usage,
                port7_surveying_fees,
                port8,
                port8_fees,
                port8_port_call,
                port8_crane_usage,
                port8_surveying_fees,
                port9,
                port9_fees,
                port9_port_call,
                port9_crane_usage,
                port9_surveying_fees,
                port10,
                port10_fees,
                port10_port_call,
                port10_crane_usage,
                port10_surveying_fees,
                cargo1_type,
                cargo1_quantity,
                cargo1_rate,
                cargo1_brokerage_fees,
                cargo2_type,
                cargo2_quantity,
                cargo2_rate,
                cargo2_brokerage_fees,
                cargo3_type,
                cargo3_quantity,
                cargo3_rate,
                cargo3_brokerage_fees,
                cargo4_type,
                cargo4_quantity,
                cargo4_rate,
                cargo4_brokerage_fees,
                cargo5_type,
                cargo5_quantity,
                cargo5_rate,
                cargo5_brokerage_fees,
                cargo6_type,
                cargo6_quantity,
                cargo6_rate,
                cargo6_brokerage_fees,
                voyageBonus,
                miscCosts,
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
        <TextField
          label="Port call (Days)"
          type="number"
          step="any"
          value={port5_port_call}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                currency_type,
                exchange_rate,
                diesel_rate,
                bunker_rate,
                lube_rate,
                port1,
                port1_fees,
                port1_port_call,
                port1_crane_usage,
                port1_surveying_fees,
                port2,
                port2_fees,
                port2_port_call,
                port2_crane_usage,
                port2_surveying_fees,
                port3,
                port3_fees,
                port3_port_call,
                port3_crane_usage,
                port3_surveying_fees,
                port4,
                port4_fees,
                port4_port_call,
                port4_crane_usage,
                port4_surveying_fees,
                port5,
                port5_fees,
                port5_port_call: value,
                port5_crane_usage,
                port5_surveying_fees,
                port6,
                port6_fees,
                port6_port_call,
                port6_crane_usage,
                port6_surveying_fees,
                port7,
                port7_fees,
                port7_port_call,
                port7_crane_usage,
                port7_surveying_fees,
                port8,
                port8_fees,
                port8_port_call,
                port8_crane_usage,
                port8_surveying_fees,
                port9,
                port9_fees,
                port9_port_call,
                port9_crane_usage,
                port9_surveying_fees,
                port10,
                port10_fees,
                port10_port_call,
                port10_crane_usage,
                port10_surveying_fees,
                cargo1_type,
                cargo1_quantity,
                cargo1_rate,
                cargo1_brokerage_fees,
                cargo2_type,
                cargo2_quantity,
                cargo2_rate,
                cargo2_brokerage_fees,
                cargo3_type,
                cargo3_quantity,
                cargo3_rate,
                cargo3_brokerage_fees,
                cargo4_type,
                cargo4_quantity,
                cargo4_rate,
                cargo4_brokerage_fees,
                cargo5_type,
                cargo5_quantity,
                cargo5_rate,
                cargo5_brokerage_fees,
                cargo6_type,
                cargo6_quantity,
                cargo6_rate,
                cargo6_brokerage_fees,
                voyageBonus,
                miscCosts,
              };
              const result = onChange(modelFields);
              value = result?.port5_port_call ?? value;
            }
            if (errors.port5_port_call?.hasError) {
              runValidationTasks("port5_port_call", value);
            }
            setPort5_port_call(value);
          }}
          onBlur={() => runValidationTasks("port5_port_call", port5_port_call)}
          errorMessage={errors.port5_port_call?.errorMessage}
          hasError={errors.port5_port_call?.hasError}
          {...getOverrideProps(overrides, "port5_port_call")}
        ></TextField>
        <TextField
          label="Crane Usage (Hours)"
          type="number"
          step="any"
          value={port5_crane_usage}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                currency_type,
                exchange_rate,
                diesel_rate,
                bunker_rate,
                lube_rate,
                port1,
                port1_fees,
                port1_port_call,
                port1_crane_usage,
                port1_surveying_fees,
                port2,
                port2_fees,
                port2_port_call,
                port2_crane_usage,
                port2_surveying_fees,
                port3,
                port3_fees,
                port3_port_call,
                port3_crane_usage,
                port3_surveying_fees,
                port4,
                port4_fees,
                port4_port_call,
                port4_crane_usage,
                port4_surveying_fees,
                port5,
                port5_fees,
                port5_port_call,
                port5_crane_usage: value,
                port5_surveying_fees,
                port6,
                port6_fees,
                port6_port_call,
                port6_crane_usage,
                port6_surveying_fees,
                port7,
                port7_fees,
                port7_port_call,
                port7_crane_usage,
                port7_surveying_fees,
                port8,
                port8_fees,
                port8_port_call,
                port8_crane_usage,
                port8_surveying_fees,
                port9,
                port9_fees,
                port9_port_call,
                port9_crane_usage,
                port9_surveying_fees,
                port10,
                port10_fees,
                port10_port_call,
                port10_crane_usage,
                port10_surveying_fees,
                cargo1_type,
                cargo1_quantity,
                cargo1_rate,
                cargo1_brokerage_fees,
                cargo2_type,
                cargo2_quantity,
                cargo2_rate,
                cargo2_brokerage_fees,
                cargo3_type,
                cargo3_quantity,
                cargo3_rate,
                cargo3_brokerage_fees,
                cargo4_type,
                cargo4_quantity,
                cargo4_rate,
                cargo4_brokerage_fees,
                cargo5_type,
                cargo5_quantity,
                cargo5_rate,
                cargo5_brokerage_fees,
                cargo6_type,
                cargo6_quantity,
                cargo6_rate,
                cargo6_brokerage_fees,
                voyageBonus,
                miscCosts,
              };
              const result = onChange(modelFields);
              value = result?.port5_crane_usage ?? value;
            }
            if (errors.port5_crane_usage?.hasError) {
              runValidationTasks("port5_crane_usage", value);
            }
            setPort5_crane_usage(value);
          }}
          onBlur={() =>
            runValidationTasks("port5_crane_usage", port5_crane_usage)
          }
          errorMessage={errors.port5_crane_usage?.errorMessage}
          hasError={errors.port5_crane_usage?.hasError}
          {...getOverrideProps(overrides, "port5_crane_usage")}
        ></TextField>
        <TextField
          label="Surveying Fees"
          type="number"
          step="any"
          value={port5_surveying_fees}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                currency_type,
                exchange_rate,
                diesel_rate,
                bunker_rate,
                lube_rate,
                port1,
                port1_fees,
                port1_port_call,
                port1_crane_usage,
                port1_surveying_fees,
                port2,
                port2_fees,
                port2_port_call,
                port2_crane_usage,
                port2_surveying_fees,
                port3,
                port3_fees,
                port3_port_call,
                port3_crane_usage,
                port3_surveying_fees,
                port4,
                port4_fees,
                port4_port_call,
                port4_crane_usage,
                port4_surveying_fees,
                port5,
                port5_fees,
                port5_port_call,
                port5_crane_usage,
                port5_surveying_fees: value,
                port6,
                port6_fees,
                port6_port_call,
                port6_crane_usage,
                port6_surveying_fees,
                port7,
                port7_fees,
                port7_port_call,
                port7_crane_usage,
                port7_surveying_fees,
                port8,
                port8_fees,
                port8_port_call,
                port8_crane_usage,
                port8_surveying_fees,
                port9,
                port9_fees,
                port9_port_call,
                port9_crane_usage,
                port9_surveying_fees,
                port10,
                port10_fees,
                port10_port_call,
                port10_crane_usage,
                port10_surveying_fees,
                cargo1_type,
                cargo1_quantity,
                cargo1_rate,
                cargo1_brokerage_fees,
                cargo2_type,
                cargo2_quantity,
                cargo2_rate,
                cargo2_brokerage_fees,
                cargo3_type,
                cargo3_quantity,
                cargo3_rate,
                cargo3_brokerage_fees,
                cargo4_type,
                cargo4_quantity,
                cargo4_rate,
                cargo4_brokerage_fees,
                cargo5_type,
                cargo5_quantity,
                cargo5_rate,
                cargo5_brokerage_fees,
                cargo6_type,
                cargo6_quantity,
                cargo6_rate,
                cargo6_brokerage_fees,
                voyageBonus,
                miscCosts,
              };
              const result = onChange(modelFields);
              value = result?.port5_surveying_fees ?? value;
            }
            if (errors.port5_surveying_fees?.hasError) {
              runValidationTasks("port5_surveying_fees", value);
            }
            setPort5_surveying_fees(value);
          }}
          onBlur={() =>
            runValidationTasks("port5_surveying_fees", port5_surveying_fees)
          }
          errorMessage={errors.port5_surveying_fees?.errorMessage}
          hasError={errors.port5_surveying_fees?.hasError}
          {...getOverrideProps(overrides, "port5_surveying_fees")}
        ></TextField>
      </Grid>
      <SelectField
        label={<span style={{ fontWeight: 'bold' }}>Port 6</span>}
        placeholder="Please select an option"
        value={port6}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              currency_type,
              exchange_rate,
              diesel_rate,
              bunker_rate,
              lube_rate,
              port1,
              port1_fees,
              port1_port_call,
              port1_crane_usage,
              port1_surveying_fees,
              port2,
              port2_fees,
              port2_port_call,
              port2_crane_usage,
              port2_surveying_fees,
              port3,
              port3_fees,
              port3_port_call,
              port3_crane_usage,
              port3_surveying_fees,
              port4,
              port4_fees,
              port4_port_call,
              port4_crane_usage,
              port4_surveying_fees,
              port5,
              port5_fees,
              port5_port_call,
              port5_crane_usage,
              port5_surveying_fees,
              port6: value,
              port6_fees,
              port6_port_call,
              port6_crane_usage,
              port6_surveying_fees,
              port7,
              port7_fees,
              port7_port_call,
              port7_crane_usage,
              port7_surveying_fees,
              port8,
              port8_fees,
              port8_port_call,
              port8_crane_usage,
              port8_surveying_fees,
              port9,
              port9_fees,
              port9_port_call,
              port9_crane_usage,
              port9_surveying_fees,
              port10,
              port10_fees,
              port10_port_call,
              port10_crane_usage,
              port10_surveying_fees,
              cargo1_type,
              cargo1_quantity,
              cargo1_rate,
              cargo1_brokerage_fees,
              cargo2_type,
              cargo2_quantity,
              cargo2_rate,
              cargo2_brokerage_fees,
              cargo3_type,
              cargo3_quantity,
              cargo3_rate,
              cargo3_brokerage_fees,
              cargo4_type,
              cargo4_quantity,
              cargo4_rate,
              cargo4_brokerage_fees,
              cargo5_type,
              cargo5_quantity,
              cargo5_rate,
              cargo5_brokerage_fees,
              cargo6_type,
              cargo6_quantity,
              cargo6_rate,
              cargo6_brokerage_fees,
              voyageBonus,
              miscCosts,
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
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(4, auto)"
        {...getOverrideProps(overrides, "RowGrid15")}
      >
        <TextField
          label="PDA Fees"
          type="number"
          step="any"
          value={port6_fees}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                currency_type,
                exchange_rate,
                diesel_rate,
                bunker_rate,
                lube_rate,
                port1,
                port1_fees,
                port1_port_call,
                port1_crane_usage,
                port1_surveying_fees,
                port2,
                port2_fees,
                port2_port_call,
                port2_crane_usage,
                port2_surveying_fees,
                port3,
                port3_fees,
                port3_port_call,
                port3_crane_usage,
                port3_surveying_fees,
                port4,
                port4_fees,
                port4_port_call,
                port4_crane_usage,
                port4_surveying_fees,
                port5,
                port5_fees,
                port5_port_call,
                port5_crane_usage,
                port5_surveying_fees,
                port6,
                port6_fees: value,
                port6_port_call,
                port6_crane_usage,
                port6_surveying_fees,
                port7,
                port7_fees,
                port7_port_call,
                port7_crane_usage,
                port7_surveying_fees,
                port8,
                port8_fees,
                port8_port_call,
                port8_crane_usage,
                port8_surveying_fees,
                port9,
                port9_fees,
                port9_port_call,
                port9_crane_usage,
                port9_surveying_fees,
                port10,
                port10_fees,
                port10_port_call,
                port10_crane_usage,
                port10_surveying_fees,
                cargo1_type,
                cargo1_quantity,
                cargo1_rate,
                cargo1_brokerage_fees,
                cargo2_type,
                cargo2_quantity,
                cargo2_rate,
                cargo2_brokerage_fees,
                cargo3_type,
                cargo3_quantity,
                cargo3_rate,
                cargo3_brokerage_fees,
                cargo4_type,
                cargo4_quantity,
                cargo4_rate,
                cargo4_brokerage_fees,
                cargo5_type,
                cargo5_quantity,
                cargo5_rate,
                cargo5_brokerage_fees,
                cargo6_type,
                cargo6_quantity,
                cargo6_rate,
                cargo6_brokerage_fees,
                voyageBonus,
                miscCosts,
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
        <TextField
          label="Port Call (Days)"
          type="number"
          step="any"
          value={port6_port_call}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                currency_type,
                exchange_rate,
                diesel_rate,
                bunker_rate,
                lube_rate,
                port1,
                port1_fees,
                port1_port_call,
                port1_crane_usage,
                port1_surveying_fees,
                port2,
                port2_fees,
                port2_port_call,
                port2_crane_usage,
                port2_surveying_fees,
                port3,
                port3_fees,
                port3_port_call,
                port3_crane_usage,
                port3_surveying_fees,
                port4,
                port4_fees,
                port4_port_call,
                port4_crane_usage,
                port4_surveying_fees,
                port5,
                port5_fees,
                port5_port_call,
                port5_crane_usage,
                port5_surveying_fees,
                port6,
                port6_fees,
                port6_port_call: value,
                port6_crane_usage,
                port6_surveying_fees,
                port7,
                port7_fees,
                port7_port_call,
                port7_crane_usage,
                port7_surveying_fees,
                port8,
                port8_fees,
                port8_port_call,
                port8_crane_usage,
                port8_surveying_fees,
                port9,
                port9_fees,
                port9_port_call,
                port9_crane_usage,
                port9_surveying_fees,
                port10,
                port10_fees,
                port10_port_call,
                port10_crane_usage,
                port10_surveying_fees,
                cargo1_type,
                cargo1_quantity,
                cargo1_rate,
                cargo1_brokerage_fees,
                cargo2_type,
                cargo2_quantity,
                cargo2_rate,
                cargo2_brokerage_fees,
                cargo3_type,
                cargo3_quantity,
                cargo3_rate,
                cargo3_brokerage_fees,
                cargo4_type,
                cargo4_quantity,
                cargo4_rate,
                cargo4_brokerage_fees,
                cargo5_type,
                cargo5_quantity,
                cargo5_rate,
                cargo5_brokerage_fees,
                cargo6_type,
                cargo6_quantity,
                cargo6_rate,
                cargo6_brokerage_fees,
                voyageBonus,
                miscCosts,
              };
              const result = onChange(modelFields);
              value = result?.port6_port_call ?? value;
            }
            if (errors.port6_port_call?.hasError) {
              runValidationTasks("port6_port_call", value);
            }
            setPort6_port_call(value);
          }}
          onBlur={() => runValidationTasks("port6_port_call", port6_port_call)}
          errorMessage={errors.port6_port_call?.errorMessage}
          hasError={errors.port6_port_call?.hasError}
          {...getOverrideProps(overrides, "port6_port_call")}
        ></TextField>
        <TextField
          label="Crane Usage (Hours)"
          type="number"
          step="any"
          value={port6_crane_usage}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                currency_type,
                exchange_rate,
                diesel_rate,
                bunker_rate,
                lube_rate,
                port1,
                port1_fees,
                port1_port_call,
                port1_crane_usage,
                port1_surveying_fees,
                port2,
                port2_fees,
                port2_port_call,
                port2_crane_usage,
                port2_surveying_fees,
                port3,
                port3_fees,
                port3_port_call,
                port3_crane_usage,
                port3_surveying_fees,
                port4,
                port4_fees,
                port4_port_call,
                port4_crane_usage,
                port4_surveying_fees,
                port5,
                port5_fees,
                port5_port_call,
                port5_crane_usage,
                port5_surveying_fees,
                port6,
                port6_fees,
                port6_port_call,
                port6_crane_usage: value,
                port6_surveying_fees,
                port7,
                port7_fees,
                port7_port_call,
                port7_crane_usage,
                port7_surveying_fees,
                port8,
                port8_fees,
                port8_port_call,
                port8_crane_usage,
                port8_surveying_fees,
                port9,
                port9_fees,
                port9_port_call,
                port9_crane_usage,
                port9_surveying_fees,
                port10,
                port10_fees,
                port10_port_call,
                port10_crane_usage,
                port10_surveying_fees,
                cargo1_type,
                cargo1_quantity,
                cargo1_rate,
                cargo1_brokerage_fees,
                cargo2_type,
                cargo2_quantity,
                cargo2_rate,
                cargo2_brokerage_fees,
                cargo3_type,
                cargo3_quantity,
                cargo3_rate,
                cargo3_brokerage_fees,
                cargo4_type,
                cargo4_quantity,
                cargo4_rate,
                cargo4_brokerage_fees,
                cargo5_type,
                cargo5_quantity,
                cargo5_rate,
                cargo5_brokerage_fees,
                cargo6_type,
                cargo6_quantity,
                cargo6_rate,
                cargo6_brokerage_fees,
                voyageBonus,
                miscCosts,
              };
              const result = onChange(modelFields);
              value = result?.port6_crane_usage ?? value;
            }
            if (errors.port6_crane_usage?.hasError) {
              runValidationTasks("port6_crane_usage", value);
            }
            setPort6_crane_usage(value);
          }}
          onBlur={() =>
            runValidationTasks("port6_crane_usage", port6_crane_usage)
          }
          errorMessage={errors.port6_crane_usage?.errorMessage}
          hasError={errors.port6_crane_usage?.hasError}
          {...getOverrideProps(overrides, "port6_crane_usage")}
        ></TextField>
        <TextField
          label="Surveying Fees"
          type="number"
          step="any"
          value={port6_surveying_fees}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                currency_type,
                exchange_rate,
                diesel_rate,
                bunker_rate,
                lube_rate,
                port1,
                port1_fees,
                port1_port_call,
                port1_crane_usage,
                port1_surveying_fees,
                port2,
                port2_fees,
                port2_port_call,
                port2_crane_usage,
                port2_surveying_fees,
                port3,
                port3_fees,
                port3_port_call,
                port3_crane_usage,
                port3_surveying_fees,
                port4,
                port4_fees,
                port4_port_call,
                port4_crane_usage,
                port4_surveying_fees,
                port5,
                port5_fees,
                port5_port_call,
                port5_crane_usage,
                port5_surveying_fees,
                port6,
                port6_fees,
                port6_port_call,
                port6_crane_usage,
                port6_surveying_fees: value,
                port7,
                port7_fees,
                port7_port_call,
                port7_crane_usage,
                port7_surveying_fees,
                port8,
                port8_fees,
                port8_port_call,
                port8_crane_usage,
                port8_surveying_fees,
                port9,
                port9_fees,
                port9_port_call,
                port9_crane_usage,
                port9_surveying_fees,
                port10,
                port10_fees,
                port10_port_call,
                port10_crane_usage,
                port10_surveying_fees,
                cargo1_type,
                cargo1_quantity,
                cargo1_rate,
                cargo1_brokerage_fees,
                cargo2_type,
                cargo2_quantity,
                cargo2_rate,
                cargo2_brokerage_fees,
                cargo3_type,
                cargo3_quantity,
                cargo3_rate,
                cargo3_brokerage_fees,
                cargo4_type,
                cargo4_quantity,
                cargo4_rate,
                cargo4_brokerage_fees,
                cargo5_type,
                cargo5_quantity,
                cargo5_rate,
                cargo5_brokerage_fees,
                cargo6_type,
                cargo6_quantity,
                cargo6_rate,
                cargo6_brokerage_fees,
                voyageBonus,
                miscCosts,
              };
              const result = onChange(modelFields);
              value = result?.port6_surveying_fees ?? value;
            }
            if (errors.port6_surveying_fees?.hasError) {
              runValidationTasks("port6_surveying_fees", value);
            }
            setPort6_surveying_fees(value);
          }}
          onBlur={() =>
            runValidationTasks("port6_surveying_fees", port6_surveying_fees)
          }
          errorMessage={errors.port6_surveying_fees?.errorMessage}
          hasError={errors.port6_surveying_fees?.hasError}
          {...getOverrideProps(overrides, "port6_surveying_fees")}
        ></TextField>
      </Grid>
      <SelectField
        label={<span style={{ fontWeight: 'bold' }}>Port 7</span>}
        placeholder="Please select an option"
        value={port7}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              currency_type,
              exchange_rate,
              diesel_rate,
              bunker_rate,
              lube_rate,
              port1,
              port1_fees,
              port1_port_call,
              port1_crane_usage,
              port1_surveying_fees,
              port2,
              port2_fees,
              port2_port_call,
              port2_crane_usage,
              port2_surveying_fees,
              port3,
              port3_fees,
              port3_port_call,
              port3_crane_usage,
              port3_surveying_fees,
              port4,
              port4_fees,
              port4_port_call,
              port4_crane_usage,
              port4_surveying_fees,
              port5,
              port5_fees,
              port5_port_call,
              port5_crane_usage,
              port5_surveying_fees,
              port6,
              port6_fees,
              port6_port_call,
              port6_crane_usage,
              port6_surveying_fees,
              port7: value,
              port7_fees,
              port7_port_call,
              port7_crane_usage,
              port7_surveying_fees,
              port8,
              port8_fees,
              port8_port_call,
              port8_crane_usage,
              port8_surveying_fees,
              port9,
              port9_fees,
              port9_port_call,
              port9_crane_usage,
              port9_surveying_fees,
              port10,
              port10_fees,
              port10_port_call,
              port10_crane_usage,
              port10_surveying_fees,
              cargo1_type,
              cargo1_quantity,
              cargo1_rate,
              cargo1_brokerage_fees,
              cargo2_type,
              cargo2_quantity,
              cargo2_rate,
              cargo2_brokerage_fees,
              cargo3_type,
              cargo3_quantity,
              cargo3_rate,
              cargo3_brokerage_fees,
              cargo4_type,
              cargo4_quantity,
              cargo4_rate,
              cargo4_brokerage_fees,
              cargo5_type,
              cargo5_quantity,
              cargo5_rate,
              cargo5_brokerage_fees,
              cargo6_type,
              cargo6_quantity,
              cargo6_rate,
              cargo6_brokerage_fees,
              voyageBonus,
              miscCosts,
            };
            const result = onChange(modelFields);
            value = result?.port7 ?? value;
          }
          if (errors.port7?.hasError) {
            runValidationTasks("port7", value);
          }
          setPort7(value);
        }}
        onBlur={() => runValidationTasks("port7", port7)}
        errorMessage={errors.port7?.errorMessage}
        hasError={errors.port7?.hasError}
        {...getOverrideProps(overrides, "port7")}
      >
        <option
          children="NIL"
          value="NIL"
          {...getOverrideProps(overrides, "port7option0")}
        ></option>
        <option
          children="Ayutthaya - Bangpain (AB)"
          value="Ayutthaya - Bangpain (AB)"
          {...getOverrideProps(overrides, "port7option1")}
        ></option>
        <option
          children="Ayutthaya - Nakorn Luang (ANL)"
          value="Ayutthaya - Nakorn Luang (ANL)"
          {...getOverrideProps(overrides, "port7option2")}
        ></option>
        <option
          children="Bahodopi (BHDP)"
          value="Bahodopi (BHDP)"
          {...getOverrideProps(overrides, "port7option3")}
        ></option>
        <option
          children="Balikpapan (BPN)"
          value="Balikpapan (BPN)"
          {...getOverrideProps(overrides, "port7option4")}
        ></option>
        <option
          children="Bang Sapan (BS)"
          value="Bang Sapan (BS)"
          {...getOverrideProps(overrides, "port7option5")}
        ></option>
        <option
          children="Bangkok (BK)"
          value="Bangkok (BK)"
          {...getOverrideProps(overrides, "port7option6")}
        ></option>
        <option
          children="Bangpakong (BAK)"
          value="Bangpakong (BAK)"
          {...getOverrideProps(overrides, "port7option7")}
        ></option>
        <option
          children="Banyuwangi - Tanjung Wangi (BJU)"
          value="Banyuwangi - Tanjung Wangi (BJU)"
          {...getOverrideProps(overrides, "port7option8")}
        ></option>
        <option
          children="Batam (BAT)"
          value="Batam (BAT)"
          {...getOverrideProps(overrides, "port7option9")}
        ></option>
        <option
          children="Beihai (BHY)"
          value="Beihai (BHY)"
          {...getOverrideProps(overrides, "port7option10")}
        ></option>
        <option
          children="Belawan (BRW)"
          value="Belawan (BRW)"
          {...getOverrideProps(overrides, "port7option11")}
        ></option>
        <option
          children="Benoa (Bali) (BAO)"
          value="Benoa (Bali) (BAO)"
          {...getOverrideProps(overrides, "port7option12")}
        ></option>
        <option
          children="Bintan (BTN)"
          value="Bintan (BTN)"
          {...getOverrideProps(overrides, "port7option13")}
        ></option>
        <option
          children="Bintulu (BIN)"
          value="Bintulu (BIN)"
          {...getOverrideProps(overrides, "port7option14")}
        ></option>
        <option
          children="Bitung (BIT)"
          value="Bitung (BIT)"
          {...getOverrideProps(overrides, "port7option15")}
        ></option>
        <option
          children="Bontang (BXT)"
          value="Bontang (BXT)"
          {...getOverrideProps(overrides, "port7option16")}
        ></option>
        <option
          children="Bourbon (BOUR)"
          value="Bourbon (BOUR)"
          {...getOverrideProps(overrides, "port7option17")}
        ></option>
        <option
          children="Brunei (BRU)"
          value="Brunei (BRU)"
          {...getOverrideProps(overrides, "port7option18")}
        ></option>
        <option
          children="Cai Lan (CLN)"
          value="Cai Lan (CLN)"
          {...getOverrideProps(overrides, "port7option19")}
        ></option>
        <option
          children="Cam Pha (CPH)"
          value="Cam Pha (CPH)"
          {...getOverrideProps(overrides, "port7option20")}
        ></option>
        <option
          children="Can Tho (VCA)"
          value="Can Tho (VCA)"
          {...getOverrideProps(overrides, "port7option21")}
        ></option>
        <option
          children="Cat Lai (CLI)"
          value="Cat Lai (CLI)"
          {...getOverrideProps(overrides, "port7option22")}
        ></option>
        <option
          children="Cayagan de Oro City (Macabalan wharf) (CDO)"
          value="Cayagan de Oro City (Macabalan wharf) (CDO)"
          {...getOverrideProps(overrides, "port7option23")}
        ></option>
        <option
          children="Century Harbour (MHI)"
          value="Century Harbour (MHI)"
          {...getOverrideProps(overrides, "port7option24")}
        ></option>
        <option
          children="Chantaburi LaemSing (CLS)"
          value="Chantaburi LaemSing (CLS)"
          {...getOverrideProps(overrides, "port7option25")}
        ></option>
        <option
          children="Chittagong (CTG)"
          value="Chittagong (CTG)"
          {...getOverrideProps(overrides, "port7option26")}
        ></option>
        <option
          children="Cigading (CIG)"
          value="Cigading (CIG)"
          {...getOverrideProps(overrides, "port7option27")}
        ></option>
        <option
          children="Danang (DAD)"
          value="Danang (DAD)"
          {...getOverrideProps(overrides, "port7option28")}
        ></option>
        <option
          children="Davao (Sasa Wharf) (DVO)"
          value="Davao (Sasa Wharf) (DVO)"
          {...getOverrideProps(overrides, "port7option29")}
        ></option>
        <option
          children="Dhaka (DKA)"
          value="Dhaka (DKA)"
          {...getOverrideProps(overrides, "port7option30")}
        ></option>
        <option
          children="Dumai (DMI)"
          value="Dumai (DMI)"
          {...getOverrideProps(overrides, "port7option31")}
        ></option>
        <option
          children="Dung Quat (DQT)"
          value="Dung Quat (DQT)"
          {...getOverrideProps(overrides, "port7option32")}
        ></option>
        <option
          children="Fangcheng (FAN)"
          value="Fangcheng (FAN)"
          {...getOverrideProps(overrides, "port7option33")}
        ></option>
        <option
          children="Futong (FTG)"
          value="Futong (FTG)"
          {...getOverrideProps(overrides, "port7option34")}
        ></option>
        <option
          children="Godau port  (GDP)"
          value="Godau port  (GDP)"
          {...getOverrideProps(overrides, "port7option35")}
        ></option>
        <option
          children="Haiphong (HPH)"
          value="Haiphong (HPH)"
          {...getOverrideProps(overrides, "port7option36")}
        ></option>
        <option
          children="Halong Bay (HLG)"
          value="Halong Bay (HLG)"
          {...getOverrideProps(overrides, "port7option37")}
        ></option>
        <option
          children="HO CHI MINH (HCM)"
          value="HO CHI MINH (HCM)"
          {...getOverrideProps(overrides, "port7option38")}
        ></option>
        <option
          children="Hon Gai (HON)"
          value="Hon Gai (HON)"
          {...getOverrideProps(overrides, "port7option39")}
        ></option>
        <option
          children="Hong Kong (HKG)"
          value="Hong Kong (HKG)"
          {...getOverrideProps(overrides, "port7option40")}
        ></option>
        <option
          children="Jakarta (JAK)"
          value="Jakarta (JAK)"
          {...getOverrideProps(overrides, "port7option41")}
        ></option>
        <option
          children="Jambi (JBI)"
          value="Jambi (JBI)"
          {...getOverrideProps(overrides, "port7option42")}
        ></option>
        <option
          children="K.K. Kota Kinabalu (KK)"
          value="K.K. Kota Kinabalu (KK)"
          {...getOverrideProps(overrides, "port7option43")}
        ></option>
        <option
          children="Kampot (KMP)"
          value="Kampot (KMP)"
          {...getOverrideProps(overrides, "port7option44")}
        ></option>
        <option
          children="Kantang (KTG)"
          value="Kantang (KTG)"
          {...getOverrideProps(overrides, "port7option45")}
        ></option>
        <option
          children="Kedah (KKH)"
          value="Kedah (KKH)"
          {...getOverrideProps(overrides, "port7option46")}
        ></option>
        <option
          children="Kelantan (KLT)"
          value="Kelantan (KLT)"
          {...getOverrideProps(overrides, "port7option47")}
        ></option>
        <option
          children="Kemaman (KMN)"
          value="Kemaman (KMN)"
          {...getOverrideProps(overrides, "port7option48")}
        ></option>
        <option
          children="Khanom (KHM)"
          value="Khanom (KHM)"
          {...getOverrideProps(overrides, "port7option49")}
        ></option>
        <option
          children="Ko Sichang (KSI)"
          value="Ko Sichang (KSI)"
          {...getOverrideProps(overrides, "port7option50")}
        ></option>
        <option
          children="Kolkata (CCU)"
          value="Kolkata (CCU)"
          {...getOverrideProps(overrides, "port7option51")}
        ></option>
        <option
          children="Kor Samui (KSM)"
          value="Kor Samui (KSM)"
          {...getOverrideProps(overrides, "port7option52")}
        ></option>
        <option
          children="Kuantan (KT)"
          value="Kuantan (KT)"
          {...getOverrideProps(overrides, "port7option53")}
        ></option>
        <option
          children="Kuching (KUC)"
          value="Kuching (KUC)"
          {...getOverrideProps(overrides, "port7option54")}
        ></option>
        <option
          children="Labuan (LBN)"
          value="Labuan (LBN)"
          {...getOverrideProps(overrides, "port7option55")}
        ></option>
        <option
          children="Laem Chabang (LCB)"
          value="Laem Chabang (LCB)"
          {...getOverrideProps(overrides, "port7option56")}
        ></option>
        <option
          children="Lahad Datu (LDU)"
          value="Lahad Datu (LDU)"
          {...getOverrideProps(overrides, "port7option57")}
        ></option>
        <option
          children="Lhokseumawe (LHOK)"
          value="Lhokseumawe (LHOK)"
          {...getOverrideProps(overrides, "port7option58")}
        ></option>
        <option
          children="Lumut (LUM)"
          value="Lumut (LUM)"
          {...getOverrideProps(overrides, "port7option59")}
        ></option>
        <option
          children="Maeklong (Firesun) (MKG)"
          value="Maeklong (Firesun) (MKG)"
          {...getOverrideProps(overrides, "port7option60")}
        ></option>
        <option
          children="Mahachai (MHI)"
          value="Mahachai (MHI)"
          {...getOverrideProps(overrides, "port7option61")}
        ></option>
        <option
          children="Makassar (MAK)"
          value="Makassar (MAK)"
          {...getOverrideProps(overrides, "port7option62")}
        ></option>
        <option
          children="Malacca (MAL)"
          value="Malacca (MAL)"
          {...getOverrideProps(overrides, "port7option63")}
        ></option>
        <option
          children="Manila Habour (MNL)"
          value="Manila Habour (MNL)"
          {...getOverrideProps(overrides, "port7option64")}
        ></option>
        <option
          children="Maptaphut (MAT)"
          value="Maptaphut (MAT)"
          {...getOverrideProps(overrides, "port7option65")}
        ></option>
        <option
          children="Marunda (MRD)"
          value="Marunda (MRD)"
          {...getOverrideProps(overrides, "port7option66")}
        ></option>
        <option
          children="Mawei Fuzhou (FOC)"
          value="Mawei Fuzhou (FOC)"
          {...getOverrideProps(overrides, "port7option67")}
        ></option>
        <option
          children="Muara (MUR)"
          value="Muara (MUR)"
          {...getOverrideProps(overrides, "port7option68")}
        ></option>
        <option
          children="My Tho (MUT)"
          value="My Tho (MUT)"
          {...getOverrideProps(overrides, "port7option69")}
        ></option>
        <option
          children="Nan Tong (NTG)"
          value="Nan Tong (NTG)"
          {...getOverrideProps(overrides, "port7option70")}
        ></option>
        <option
          children="Narathiwat (NAW)"
          value="Narathiwat (NAW)"
          {...getOverrideProps(overrides, "port7option71")}
        ></option>
        <option
          children="Nghi Son (NGH)"
          value="Nghi Son (NGH)"
          {...getOverrideProps(overrides, "port7option72")}
        ></option>
        <option
          children="Ningde (NDE)"
          value="Ningde (NDE)"
          {...getOverrideProps(overrides, "port7option73")}
        ></option>
        <option
          children="Nunukan (NNX)"
          value="Nunukan (NNX)"
          {...getOverrideProps(overrides, "port7option74")}
        ></option>
        <option
          children="Oknha Mong Port (OMP)"
          value="Oknha Mong Port (OMP)"
          {...getOverrideProps(overrides, "port7option75")}
        ></option>
        <option
          children="Onomichi (ONO)"
          value="Onomichi (ONO)"
          {...getOverrideProps(overrides, "port7option76")}
        ></option>
        <option
          children="Padang - Telux Buyur (TBR)"
          value="Padang - Telux Buyur (TBR)"
          {...getOverrideProps(overrides, "port7option77")}
        ></option>
        <option
          children="PAKAN Baru (PKRU)"
          value="PAKAN Baru (PKRU)"
          {...getOverrideProps(overrides, "port7option78")}
        ></option>
        <option
          children="Palembang (PLB)"
          value="Palembang (PLB)"
          {...getOverrideProps(overrides, "port7option79")}
        ></option>
        <option
          children="Panjang (PNJ)"
          value="Panjang (PNJ)"
          {...getOverrideProps(overrides, "port7option80")}
        ></option>
        <option
          children="Pasir Gudang (PAS)"
          value="Pasir Gudang (PAS)"
          {...getOverrideProps(overrides, "port7option81")}
        ></option>
        <option
          children="Patimban (PTB)"
          value="Patimban (PTB)"
          {...getOverrideProps(overrides, "port7option82")}
        ></option>
        <option
          children="Pattani (PTN)"
          value="Pattani (PTN)"
          {...getOverrideProps(overrides, "port7option83")}
        ></option>
        <option
          children="Penang (PNG)"
          value="Penang (PNG)"
          {...getOverrideProps(overrides, "port7option84")}
        ></option>
        <option
          children="Phnom Penh (PNH)"
          value="Phnom Penh (PNH)"
          {...getOverrideProps(overrides, "port7option85")}
        ></option>
        <option
          children="Phra Chulachomklao Fort (PCF)"
          value="Phra Chulachomklao Fort (PCF)"
          {...getOverrideProps(overrides, "port7option86")}
        ></option>
        <option
          children="Phuket (HKT)"
          value="Phuket (HKT)"
          {...getOverrideProps(overrides, "port7option87")}
        ></option>
        <option
          children="Phumy (PHU)"
          value="Phumy (PHU)"
          {...getOverrideProps(overrides, "port7option88")}
        ></option>
        <option
          children="Plathong Oil Rig (PATO)"
          value="Plathong Oil Rig (PATO)"
          {...getOverrideProps(overrides, "port7option89")}
        ></option>
        <option
          children="Pontianak (POT)"
          value="Pontianak (POT)"
          {...getOverrideProps(overrides, "port7option90")}
        ></option>
        <option
          children="Port Klang (PKL)"
          value="Port Klang (PKL)"
          {...getOverrideProps(overrides, "port7option91")}
        ></option>
        <option
          children="Port Moresby (PGPOM)"
          value="Port Moresby (PGPOM)"
          {...getOverrideProps(overrides, "port7option92")}
        ></option>
        <option
          children="Poso (POSO)"
          value="Poso (POSO)"
          {...getOverrideProps(overrides, "port7option93")}
        ></option>
        <option
          children="Pusan (PUS)"
          value="Pusan (PUS)"
          {...getOverrideProps(overrides, "port7option94")}
        ></option>
        <option
          children="Quinzhou (QZH)"
          value="Quinzhou (QZH)"
          {...getOverrideProps(overrides, "port7option95")}
        ></option>
        <option
          children="Quy Nhon (QNN)"
          value="Quy Nhon (QNN)"
          {...getOverrideProps(overrides, "port7option96")}
        ></option>
        <option
          children="Ranong (UNN)"
          value="Ranong (UNN)"
          {...getOverrideProps(overrides, "port7option97")}
        ></option>
        <option
          children="Rayong (IRPC)"
          value="Rayong (IRPC)"
          {...getOverrideProps(overrides, "port7option98")}
        ></option>
        <option
          children="Sampit (SMQ)"
          value="Sampit (SMQ)"
          {...getOverrideProps(overrides, "port7option99")}
        ></option>
        <option
          children="Sandakan (SAN)"
          value="Sandakan (SAN)"
          {...getOverrideProps(overrides, "port7option100")}
        ></option>
        <option
          children="Sarawak (SRW)"
          value="Sarawak (SRW)"
          {...getOverrideProps(overrides, "port7option101")}
        ></option>
        <option
          children="Sarekei (SRK)"
          value="Sarekei (SRK)"
          {...getOverrideProps(overrides, "port7option102")}
        ></option>
        <option
          children="Sattahip (SATP)"
          value="Sattahip (SATP)"
          {...getOverrideProps(overrides, "port7option103")}
        ></option>
        <option
          children="Semarang - Tanjung Emas (SRG)"
          value="Semarang - Tanjung Emas (SRG)"
          {...getOverrideProps(overrides, "port7option104")}
        ></option>
        <option
          children="Semarang (SRG)"
          value="Semarang (SRG)"
          {...getOverrideProps(overrides, "port7option105")}
        ></option>
        <option
          children="Sibu (SIB)"
          value="Sibu (SIB)"
          {...getOverrideProps(overrides, "port7option106")}
        ></option>
        <option
          children="Singapore (SG)"
          value="Singapore (SG)"
          {...getOverrideProps(overrides, "port7option107")}
        ></option>
        <option
          children="Sipitang (SIP)"
          value="Sipitang (SIP)"
          {...getOverrideProps(overrides, "port7option108")}
        ></option>
        <option
          children="Son Duong (SOD)"
          value="Son Duong (SOD)"
          {...getOverrideProps(overrides, "port7option109")}
        ></option>
        <option
          children="Songkhla (SK)"
          value="Songkhla (SK)"
          {...getOverrideProps(overrides, "port7option110")}
        ></option>
        <option
          children="Srihanoville (SIH)"
          value="Srihanoville (SIH)"
          {...getOverrideProps(overrides, "port7option111")}
        ></option>
        <option
          children="Sriracha Harbor (SRC)"
          value="Sriracha Harbor (SRC)"
          {...getOverrideProps(overrides, "port7option112")}
        ></option>
        <option
          children="Sritama Jetty (STM)"
          value="Sritama Jetty (STM)"
          {...getOverrideProps(overrides, "port7option113")}
        ></option>
        <option
          children="Steung Hav (SHV)"
          value="Steung Hav (SHV)"
          {...getOverrideProps(overrides, "port7option114")}
        ></option>
        <option
          children="Sungai Guntung (SGGT)"
          value="Sungai Guntung (SGGT)"
          {...getOverrideProps(overrides, "port7option115")}
        ></option>
        <option
          children="Surabaya (SUBY)"
          value="Surabaya (SUBY)"
          {...getOverrideProps(overrides, "port7option116")}
        ></option>
        <option
          children="Surat Thanee (SRT)"
          value="Surat Thanee (SRT)"
          {...getOverrideProps(overrides, "port7option117")}
        ></option>
        <option
          children="Tacloban (TAC)"
          value="Tacloban (TAC)"
          {...getOverrideProps(overrides, "port7option118")}
        ></option>
        <option
          children="Tagbilaran (TAG)"
          value="Tagbilaran (TAG)"
          {...getOverrideProps(overrides, "port7option119")}
        ></option>
        <option
          children="Tanjong Manis (TGM)"
          value="Tanjong Manis (TGM)"
          {...getOverrideProps(overrides, "port7option120")}
        ></option>
        <option
          children="Tanjung Batu (TJQ)"
          value="Tanjung Batu (TJQ)"
          {...getOverrideProps(overrides, "port7option121")}
        ></option>
        <option
          children="Tanjung Priok (TP)"
          value="Tanjung Priok (TP)"
          {...getOverrideProps(overrides, "port7option122")}
        ></option>
        <option
          children="Tarjun (TAR)"
          value="Tarjun (TAR)"
          {...getOverrideProps(overrides, "port7option123")}
        ></option>
        <option
          children="Tawau (TAW)"
          value="Tawau (TAW)"
          {...getOverrideProps(overrides, "port7option124")}
        ></option>
        <option
          children="Terengganu (TGG)"
          value="Terengganu (TGG)"
          {...getOverrideProps(overrides, "port7option125")}
        ></option>
        <option
          children="Tha Sala (TSL)"
          value="Tha Sala (TSL)"
          {...getOverrideProps(overrides, "port7option126")}
        ></option>
        <option
          children="Tsukumi (TSUM)"
          value="Tsukumi (TSUM)"
          {...getOverrideProps(overrides, "port7option127")}
        ></option>
        <option
          children="Vung Ang (VAG)"
          value="Vung Ang (VAG)"
          {...getOverrideProps(overrides, "port7option128")}
        ></option>
        <option
          children="Vung Tau (VUT)"
          value="Vung Tau (VUT)"
          {...getOverrideProps(overrides, "port7option129")}
        ></option>
        <option
          children="Yangon (RGN)"
          value="Yangon (RGN)"
          {...getOverrideProps(overrides, "port7option130")}
        ></option>
      </SelectField>
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(4, auto)"
        {...getOverrideProps(overrides, "RowGrid17")}
      >
        <TextField
          label="PDA Fees"
          type="number"
          step="any"
          value={port7_fees}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                currency_type,
                exchange_rate,
                diesel_rate,
                bunker_rate,
                lube_rate,
                port1,
                port1_fees,
                port1_port_call,
                port1_crane_usage,
                port1_surveying_fees,
                port2,
                port2_fees,
                port2_port_call,
                port2_crane_usage,
                port2_surveying_fees,
                port3,
                port3_fees,
                port3_port_call,
                port3_crane_usage,
                port3_surveying_fees,
                port4,
                port4_fees,
                port4_port_call,
                port4_crane_usage,
                port4_surveying_fees,
                port5,
                port5_fees,
                port5_port_call,
                port5_crane_usage,
                port5_surveying_fees,
                port6,
                port6_fees,
                port6_port_call,
                port6_crane_usage,
                port6_surveying_fees,
                port7,
                port7_fees: value,
                port7_port_call,
                port7_crane_usage,
                port7_surveying_fees,
                port8,
                port8_fees,
                port8_port_call,
                port8_crane_usage,
                port8_surveying_fees,
                port9,
                port9_fees: value,
                port9_port_call,
                port9_crane_usage,
                port9_surveying_fees,
                port10,
                port10_fees,
                port10_port_call,
                port10_crane_usage,
                port10_surveying_fees,
                cargo1_type,
                cargo1_quantity,
                cargo1_rate,
                cargo1_brokerage_fees,
                cargo2_type,
                cargo2_quantity,
                cargo2_rate,
                cargo2_brokerage_fees,
                cargo3_type,
                cargo3_quantity,
                cargo3_rate,
                cargo3_brokerage_fees,
                cargo4_type,
                cargo4_quantity,
                cargo4_rate,
                cargo4_brokerage_fees,
                cargo5_type,
                cargo5_quantity,
                cargo5_rate,
                cargo5_brokerage_fees,
                cargo6_type,
                cargo6_quantity,
                cargo6_rate,
                cargo6_brokerage_fees,
                voyageBonus,
                miscCosts,
              };
              const result = onChange(modelFields);
              value = result?.port7_fees ?? value;
            }
            if (errors.port7_fees?.hasError) {
              runValidationTasks("port7_fees", value);
            }
            setPort7_fees(value);
          }}
          onBlur={() => runValidationTasks("port7_fees", port7_fees)}
          errorMessage={errors.port7_fees?.errorMessage}
          hasError={errors.port7_fees?.hasError}
          {...getOverrideProps(overrides, "port7_fees")}
        ></TextField>
        <TextField
          label="Port Call (Days)"
          type="number"
          step="any"
          value={port7_port_call}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                currency_type,
                exchange_rate,
                diesel_rate,
                bunker_rate,
                lube_rate,
                port1,
                port1_fees,
                port1_port_call,
                port1_crane_usage,
                port1_surveying_fees,
                port2,
                port2_fees,
                port2_port_call,
                port2_crane_usage,
                port2_surveying_fees,
                port3,
                port3_fees,
                port3_port_call,
                port3_crane_usage,
                port3_surveying_fees,
                port4,
                port4_fees,
                port4_port_call,
                port4_crane_usage,
                port4_surveying_fees,
                port5,
                port5_fees,
                port5_port_call,
                port5_crane_usage,
                port5_surveying_fees,
                port6,
                port6_fees,
                port6_port_call,
                port6_crane_usage,
                port6_surveying_fees,
                port7,
                port7_fees,
                port7_port_call: value,
                port7_crane_usage,
                port7_surveying_fees,
                port8,
                port8_fees,
                port8_port_call,
                port8_crane_usage,
                port8_surveying_fees,
                port9,
                port9_fees,
                port9_port_call,
                port9_crane_usage,
                port9_surveying_fees,
                port10,
                port10_fees,
                port10_port_call: value,
                port10_crane_usage,
                port10_surveying_fees,
                cargo1_type,
                cargo1_quantity,
                cargo1_rate,
                cargo1_brokerage_fees,
                cargo2_type,
                cargo2_quantity,
                cargo2_rate,
                cargo2_brokerage_fees,
                cargo3_type,
                cargo3_quantity,
                cargo3_rate,
                cargo3_brokerage_fees,
                cargo4_type,
                cargo4_quantity,
                cargo4_rate,
                cargo4_brokerage_fees,
                cargo5_type,
                cargo5_quantity,
                cargo5_rate,
                cargo5_brokerage_fees,
                cargo6_type,
                cargo6_quantity,
                cargo6_rate,
                cargo6_brokerage_fees,
                voyageBonus,
                miscCosts,
              };
              const result = onChange(modelFields);
              value = result?.port7_port_call ?? value;
            }
            if (errors.port7_port_call?.hasError) {
              runValidationTasks("port7_port_call", value);
            }
            setPort7_port_call(value);
          }}
          onBlur={() => runValidationTasks("port7_port_call", port7_port_call)}
          errorMessage={errors.port7_port_call?.errorMessage}
          hasError={errors.port7_port_call?.hasError}
          {...getOverrideProps(overrides, "port7_port_call")}
        ></TextField>
        <TextField
          label="Crane Usage (Hours)"
          type="number"
          step="any"
          value={port7_crane_usage}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                currency_type,
                exchange_rate,
                diesel_rate,
                bunker_rate,
                lube_rate,
                port1,
                port1_fees,
                port1_port_call,
                port1_crane_usage,
                port1_surveying_fees,
                port2,
                port2_fees,
                port2_port_call,
                port2_crane_usage,
                port2_surveying_fees,
                port3,
                port3_fees,
                port3_port_call,
                port3_crane_usage,
                port3_surveying_fees,
                port4,
                port4_fees,
                port4_port_call,
                port4_crane_usage,
                port4_surveying_fees,
                port5,
                port5_fees,
                port5_port_call,
                port5_crane_usage,
                port5_surveying_fees,
                port6,
                port6_fees,
                port6_port_call,
                port6_crane_usage,
                port6_surveying_fees,
                port7,
                port7_fees,
                port7_port_call,
                port7_crane_usage: value,
                port7_surveying_fees,
                port8,
                port8_fees,
                port8_port_call,
                port8_crane_usage,
                port8_surveying_fees,
                port9,
                port9_fees,
                port9_port_call,
                port9_crane_usage,
                port9_surveying_fees,
                port10,
                port10_fees,
                port10_port_call,
                port10_crane_usage,
                port10_surveying_fees,
                cargo1_type,
                cargo1_quantity,
                cargo1_rate,
                cargo1_brokerage_fees,
                cargo2_type,
                cargo2_quantity,
                cargo2_rate,
                cargo2_brokerage_fees,
                cargo3_type,
                cargo3_quantity,
                cargo3_rate,
                cargo3_brokerage_fees,
                cargo4_type,
                cargo4_quantity,
                cargo4_rate,
                cargo4_brokerage_fees,
                cargo5_type,
                cargo5_quantity,
                cargo5_rate,
                cargo5_brokerage_fees,
                cargo6_type,
                cargo6_quantity,
                cargo6_rate,
                cargo6_brokerage_fees,
                voyageBonus,
                miscCosts,
              };
              const result = onChange(modelFields);
              value = result?.port7_crane_usage ?? value;
            }
            if (errors.port7_crane_usage?.hasError) {
              runValidationTasks("port7_crane_usage", value);
            }
            setPort7_crane_usage(value);
          }}
          onBlur={() =>
            runValidationTasks("port7_crane_usage", port7_crane_usage)
          }
          errorMessage={errors.port7_crane_usage?.errorMessage}
          hasError={errors.port7_crane_usage?.hasError}
          {...getOverrideProps(overrides, "port7_crane_usage")}
        ></TextField>
        <TextField
          label="Surveying Fees"
          type="number"
          step="any"
          value={port7_surveying_fees}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                currency_type,
                exchange_rate,
                diesel_rate,
                bunker_rate,
                lube_rate,
                port1,
                port1_fees,
                port1_port_call,
                port1_crane_usage,
                port1_surveying_fees,
                port2,
                port2_fees,
                port2_port_call,
                port2_crane_usage,
                port2_surveying_fees,
                port3,
                port3_fees,
                port3_port_call,
                port3_crane_usage,
                port3_surveying_fees,
                port4,
                port4_fees,
                port4_port_call,
                port4_crane_usage,
                port4_surveying_fees,
                port5,
                port5_fees,
                port5_port_call,
                port5_crane_usage,
                port5_surveying_fees,
                port6,
                port6_fees,
                port6_port_call,
                port6_crane_usage,
                port6_surveying_fees,
                port7,
                port7_fees,
                port7_port_call,
                port7_crane_usage,
                port7_surveying_fees: value,
                port8,
                port8_fees,
                port8_port_call,
                port8_crane_usage,
                port8_surveying_fees,
                port9,
                port9_fees,
                port9_port_call,
                port9_crane_usage,
                port9_surveying_fees,
                port10,
                port10_fees,
                port10_port_call,
                port10_crane_usage,
                port10_surveying_fees,
                cargo1_type,
                cargo1_quantity,
                cargo1_rate,
                cargo1_brokerage_fees,
                cargo2_type,
                cargo2_quantity,
                cargo2_rate,
                cargo2_brokerage_fees,
                cargo3_type,
                cargo3_quantity,
                cargo3_rate,
                cargo3_brokerage_fees,
                cargo4_type,
                cargo4_quantity,
                cargo4_rate,
                cargo4_brokerage_fees,
                cargo5_type,
                cargo5_quantity,
                cargo5_rate,
                cargo5_brokerage_fees,
                cargo6_type,
                cargo6_quantity,
                cargo6_rate,
                cargo6_brokerage_fees,
                voyageBonus,
                miscCosts,
              };
              const result = onChange(modelFields);
              value = result?.port7_surveying_fees ?? value;
            }
            if (errors.port7_surveying_fees?.hasError) {
              runValidationTasks("port7_surveying_fees", value);
            }
            setPort7_surveying_fees(value);
          }}
          onBlur={() =>
            runValidationTasks("port7_surveying_fees", port7_surveying_fees)
          }
          errorMessage={errors.port7_surveying_fees?.errorMessage}
          hasError={errors.port7_surveying_fees?.hasError}
          {...getOverrideProps(overrides, "port7_surveying_fees")}
        ></TextField>
      </Grid>
      <SelectField
        label={<span style={{ fontWeight: 'bold' }}>Port 8</span>}
        placeholder="Please select an option"
        value={port8}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              currency_type,
              exchange_rate,
              diesel_rate,
              bunker_rate,
              lube_rate,
              port1,
              port1_fees,
              port1_port_call,
              port1_crane_usage,
              port1_surveying_fees,
              port2,
              port2_fees,
              port2_port_call,
              port2_crane_usage,
              port2_surveying_fees,
              port3,
              port3_fees,
              port3_port_call,
              port3_crane_usage,
              port3_surveying_fees,
              port4,
              port4_fees,
              port4_port_call,
              port4_crane_usage,
              port4_surveying_fees,
              port5,
              port5_fees,
              port5_port_call,
              port5_crane_usage,
              port5_surveying_fees,
              port6,
              port6_fees,
              port6_port_call,
              port6_crane_usage,
              port6_surveying_fees,
              port7,
              port7_fees,
              port7_port_call,
              port7_crane_usage,
              port7_surveying_fees,
              port8: value,
              port8_fees,
              port8_port_call,
              port8_crane_usage,
              port8_surveying_fees,
              port9,
              port9_fees,
              port9_port_call,
              port9_crane_usage,
              port9_surveying_fees,
              port10,
              port10_fees,
              port10_port_call,
              port10_crane_usage,
              port10_surveying_fees,
              cargo1_type,
              cargo1_quantity,
              cargo1_rate,
              cargo1_brokerage_fees,
              cargo2_type,
              cargo2_quantity,
              cargo2_rate,
              cargo2_brokerage_fees,
              cargo3_type,
              cargo3_quantity,
              cargo3_rate,
              cargo3_brokerage_fees,
              cargo4_type,
              cargo4_quantity,
              cargo4_rate,
              cargo4_brokerage_fees,
              cargo5_type,
              cargo5_quantity,
              cargo5_rate,
              cargo5_brokerage_fees,
              cargo6_type,
              cargo6_quantity,
              cargo6_rate,
              cargo6_brokerage_fees,
              voyageBonus,
              miscCosts,
            };
            const result = onChange(modelFields);
            value = result?.port8 ?? value;
          }
          if (errors.port8?.hasError) {
            runValidationTasks("port8", value);
          }
          setPort8(value);
        }}
        onBlur={() => runValidationTasks("port8", port8)}
        errorMessage={errors.port8?.errorMessage}
        hasError={errors.port8?.hasError}
        {...getOverrideProps(overrides, "port8")}
      >
        <option
          children="NIL"
          value="NIL"
          {...getOverrideProps(overrides, "port8option0")}
        ></option>
        <option
          children="Ayutthaya - Bangpain (AB)"
          value="Ayutthaya - Bangpain (AB)"
          {...getOverrideProps(overrides, "port8option1")}
        ></option>
        <option
          children="Ayutthaya - Nakorn Luang (ANL)"
          value="Ayutthaya - Nakorn Luang (ANL)"
          {...getOverrideProps(overrides, "port8option2")}
        ></option>
        <option
          children="Bahodopi (BHDP)"
          value="Bahodopi (BHDP)"
          {...getOverrideProps(overrides, "port8option3")}
        ></option>
        <option
          children="Balikpapan (BPN)"
          value="Balikpapan (BPN)"
          {...getOverrideProps(overrides, "port8option4")}
        ></option>
        <option
          children="Bang Sapan (BS)"
          value="Bang Sapan (BS)"
          {...getOverrideProps(overrides, "port8option5")}
        ></option>
        <option
          children="Bangkok (BK)"
          value="Bangkok (BK)"
          {...getOverrideProps(overrides, "port8option6")}
        ></option>
        <option
          children="Bangpakong (BAK)"
          value="Bangpakong (BAK)"
          {...getOverrideProps(overrides, "port8option7")}
        ></option>
        <option
          children="Banyuwangi - Tanjung Wangi (BJU)"
          value="Banyuwangi - Tanjung Wangi (BJU)"
          {...getOverrideProps(overrides, "port8option8")}
        ></option>
        <option
          children="Batam (BAT)"
          value="Batam (BAT)"
          {...getOverrideProps(overrides, "port8option9")}
        ></option>
        <option
          children="Beihai (BHY)"
          value="Beihai (BHY)"
          {...getOverrideProps(overrides, "port8option10")}
        ></option>
        <option
          children="Belawan (BRW)"
          value="Belawan (BRW)"
          {...getOverrideProps(overrides, "port8option11")}
        ></option>
        <option
          children="Benoa (Bali) (BAO)"
          value="Benoa (Bali) (BAO)"
          {...getOverrideProps(overrides, "port8option12")}
        ></option>
        <option
          children="Bintan (BTN)"
          value="Bintan (BTN)"
          {...getOverrideProps(overrides, "port8option13")}
        ></option>
        <option
          children="Bintulu (BIN)"
          value="Bintulu (BIN)"
          {...getOverrideProps(overrides, "port8option14")}
        ></option>
        <option
          children="Bitung (BIT)"
          value="Bitung (BIT)"
          {...getOverrideProps(overrides, "port8option15")}
        ></option>
        <option
          children="Bontang (BXT)"
          value="Bontang (BXT)"
          {...getOverrideProps(overrides, "port8option16")}
        ></option>
        <option
          children="Bourbon (BOUR)"
          value="Bourbon (BOUR)"
          {...getOverrideProps(overrides, "port8option17")}
        ></option>
        <option
          children="Brunei (BRU)"
          value="Brunei (BRU)"
          {...getOverrideProps(overrides, "port8option18")}
        ></option>
        <option
          children="Cai Lan (CLN)"
          value="Cai Lan (CLN)"
          {...getOverrideProps(overrides, "port8option19")}
        ></option>
        <option
          children="Cam Pha (CPH)"
          value="Cam Pha (CPH)"
          {...getOverrideProps(overrides, "port8option20")}
        ></option>
        <option
          children="Can Tho (VCA)"
          value="Can Tho (VCA)"
          {...getOverrideProps(overrides, "port8option21")}
        ></option>
        <option
          children="Cat Lai (CLI)"
          value="Cat Lai (CLI)"
          {...getOverrideProps(overrides, "port8option22")}
        ></option>
        <option
          children="Cayagan de Oro City (Macabalan wharf) (CDO)"
          value="Cayagan de Oro City (Macabalan wharf) (CDO)"
          {...getOverrideProps(overrides, "port8option23")}
        ></option>
        <option
          children="Century Harbour (MHI)"
          value="Century Harbour (MHI)"
          {...getOverrideProps(overrides, "port8option24")}
        ></option>
        <option
          children="Chantaburi LaemSing (CLS)"
          value="Chantaburi LaemSing (CLS)"
          {...getOverrideProps(overrides, "port8option25")}
        ></option>
        <option
          children="Chittagong (CTG)"
          value="Chittagong (CTG)"
          {...getOverrideProps(overrides, "port8option26")}
        ></option>
        <option
          children="Cigading (CIG)"
          value="Cigading (CIG)"
          {...getOverrideProps(overrides, "port8option27")}
        ></option>
        <option
          children="Danang (DAD)"
          value="Danang (DAD)"
          {...getOverrideProps(overrides, "port8option28")}
        ></option>
        <option
          children="Davao (Sasa Wharf) (DVO)"
          value="Davao (Sasa Wharf) (DVO)"
          {...getOverrideProps(overrides, "port8option29")}
        ></option>
        <option
          children="Dhaka (DKA)"
          value="Dhaka (DKA)"
          {...getOverrideProps(overrides, "port8option30")}
        ></option>
        <option
          children="Dumai (DMI)"
          value="Dumai (DMI)"
          {...getOverrideProps(overrides, "port8option31")}
        ></option>
        <option
          children="Dung Quat (DQT)"
          value="Dung Quat (DQT)"
          {...getOverrideProps(overrides, "port8option32")}
        ></option>
        <option
          children="Fangcheng (FAN)"
          value="Fangcheng (FAN)"
          {...getOverrideProps(overrides, "port8option33")}
        ></option>
        <option
          children="Futong (FTG)"
          value="Futong (FTG)"
          {...getOverrideProps(overrides, "port8option34")}
        ></option>
        <option
          children="Godau port  (GDP)"
          value="Godau port  (GDP)"
          {...getOverrideProps(overrides, "port8option35")}
        ></option>
        <option
          children="Haiphong (HPH)"
          value="Haiphong (HPH)"
          {...getOverrideProps(overrides, "port8option36")}
        ></option>
        <option
          children="Halong Bay (HLG)"
          value="Halong Bay (HLG)"
          {...getOverrideProps(overrides, "port8option37")}
        ></option>
        <option
          children="HO CHI MINH (HCM)"
          value="HO CHI MINH (HCM)"
          {...getOverrideProps(overrides, "port8option38")}
        ></option>
        <option
          children="Hon Gai (HON)"
          value="Hon Gai (HON)"
          {...getOverrideProps(overrides, "port8option39")}
        ></option>
        <option
          children="Hong Kong (HKG)"
          value="Hong Kong (HKG)"
          {...getOverrideProps(overrides, "port8option40")}
        ></option>
        <option
          children="Jakarta (JAK)"
          value="Jakarta (JAK)"
          {...getOverrideProps(overrides, "port8option41")}
        ></option>
        <option
          children="Jambi (JBI)"
          value="Jambi (JBI)"
          {...getOverrideProps(overrides, "port8option42")}
        ></option>
        <option
          children="K.K. Kota Kinabalu (KK)"
          value="K.K. Kota Kinabalu (KK)"
          {...getOverrideProps(overrides, "port8option43")}
        ></option>
        <option
          children="Kampot (KMP)"
          value="Kampot (KMP)"
          {...getOverrideProps(overrides, "port8option44")}
        ></option>
        <option
          children="Kantang (KTG)"
          value="Kantang (KTG)"
          {...getOverrideProps(overrides, "port8option45")}
        ></option>
        <option
          children="Kedah (KKH)"
          value="Kedah (KKH)"
          {...getOverrideProps(overrides, "port8option46")}
        ></option>
        <option
          children="Kelantan (KLT)"
          value="Kelantan (KLT)"
          {...getOverrideProps(overrides, "port8option47")}
        ></option>
        <option
          children="Kemaman (KMN)"
          value="Kemaman (KMN)"
          {...getOverrideProps(overrides, "port8option48")}
        ></option>
        <option
          children="Khanom (KHM)"
          value="Khanom (KHM)"
          {...getOverrideProps(overrides, "port8option49")}
        ></option>
        <option
          children="Ko Sichang (KSI)"
          value="Ko Sichang (KSI)"
          {...getOverrideProps(overrides, "port8option50")}
        ></option>
        <option
          children="Kolkata (CCU)"
          value="Kolkata (CCU)"
          {...getOverrideProps(overrides, "port8option51")}
        ></option>
        <option
          children="Kor Samui (KSM)"
          value="Kor Samui (KSM)"
          {...getOverrideProps(overrides, "port8option52")}
        ></option>
        <option
          children="Kuantan (KT)"
          value="Kuantan (KT)"
          {...getOverrideProps(overrides, "port8option53")}
        ></option>
        <option
          children="Kuching (KUC)"
          value="Kuching (KUC)"
          {...getOverrideProps(overrides, "port8option54")}
        ></option>
        <option
          children="Labuan (LBN)"
          value="Labuan (LBN)"
          {...getOverrideProps(overrides, "port8option55")}
        ></option>
        <option
          children="Laem Chabang (LCB)"
          value="Laem Chabang (LCB)"
          {...getOverrideProps(overrides, "port8option56")}
        ></option>
        <option
          children="Lahad Datu (LDU)"
          value="Lahad Datu (LDU)"
          {...getOverrideProps(overrides, "port8option57")}
        ></option>
        <option
          children="Lhokseumawe (LHOK)"
          value="Lhokseumawe (LHOK)"
          {...getOverrideProps(overrides, "port8option58")}
        ></option>
        <option
          children="Lumut (LUM)"
          value="Lumut (LUM)"
          {...getOverrideProps(overrides, "port8option59")}
        ></option>
        <option
          children="Maeklong (Firesun) (MKG)"
          value="Maeklong (Firesun) (MKG)"
          {...getOverrideProps(overrides, "port8option60")}
        ></option>
        <option
          children="Mahachai (MHI)"
          value="Mahachai (MHI)"
          {...getOverrideProps(overrides, "port8option61")}
        ></option>
        <option
          children="Makassar (MAK)"
          value="Makassar (MAK)"
          {...getOverrideProps(overrides, "port8option62")}
        ></option>
        <option
          children="Malacca (MAL)"
          value="Malacca (MAL)"
          {...getOverrideProps(overrides, "port8option63")}
        ></option>
        <option
          children="Manila Habour (MNL)"
          value="Manila Habour (MNL)"
          {...getOverrideProps(overrides, "port8option64")}
        ></option>
        <option
          children="Maptaphut (MAT)"
          value="Maptaphut (MAT)"
          {...getOverrideProps(overrides, "port8option65")}
        ></option>
        <option
          children="Marunda (MRD)"
          value="Marunda (MRD)"
          {...getOverrideProps(overrides, "port8option66")}
        ></option>
        <option
          children="Mawei Fuzhou (FOC)"
          value="Mawei Fuzhou (FOC)"
          {...getOverrideProps(overrides, "port8option67")}
        ></option>
        <option
          children="Muara (MUR)"
          value="Muara (MUR)"
          {...getOverrideProps(overrides, "port8option68")}
        ></option>
        <option
          children="My Tho (MUT)"
          value="My Tho (MUT)"
          {...getOverrideProps(overrides, "port8option69")}
        ></option>
        <option
          children="Nan Tong (NTG)"
          value="Nan Tong (NTG)"
          {...getOverrideProps(overrides, "port8option70")}
        ></option>
        <option
          children="Narathiwat (NAW)"
          value="Narathiwat (NAW)"
          {...getOverrideProps(overrides, "port8option71")}
        ></option>
        <option
          children="Nghi Son (NGH)"
          value="Nghi Son (NGH)"
          {...getOverrideProps(overrides, "port8option72")}
        ></option>
        <option
          children="Ningde (NDE)"
          value="Ningde (NDE)"
          {...getOverrideProps(overrides, "port8option73")}
        ></option>
        <option
          children="Nunukan (NNX)"
          value="Nunukan (NNX)"
          {...getOverrideProps(overrides, "port8option74")}
        ></option>
        <option
          children="Oknha Mong Port (OMP)"
          value="Oknha Mong Port (OMP)"
          {...getOverrideProps(overrides, "port8option75")}
        ></option>
        <option
          children="Onomichi (ONO)"
          value="Onomichi (ONO)"
          {...getOverrideProps(overrides, "port8option76")}
        ></option>
        <option
          children="Padang - Telux Buyur (TBR)"
          value="Padang - Telux Buyur (TBR)"
          {...getOverrideProps(overrides, "port8option77")}
        ></option>
        <option
          children="PAKAN Baru (PKRU)"
          value="PAKAN Baru (PKRU)"
          {...getOverrideProps(overrides, "port8option78")}
        ></option>
        <option
          children="Palembang (PLB)"
          value="Palembang (PLB)"
          {...getOverrideProps(overrides, "port8option79")}
        ></option>
        <option
          children="Panjang (PNJ)"
          value="Panjang (PNJ)"
          {...getOverrideProps(overrides, "port8option80")}
        ></option>
        <option
          children="Pasir Gudang (PAS)"
          value="Pasir Gudang (PAS)"
          {...getOverrideProps(overrides, "port8option81")}
        ></option>
        <option
          children="Patimban (PTB)"
          value="Patimban (PTB)"
          {...getOverrideProps(overrides, "port8option82")}
        ></option>
        <option
          children="Pattani (PTN)"
          value="Pattani (PTN)"
          {...getOverrideProps(overrides, "port8option83")}
        ></option>
        <option
          children="Penang (PNG)"
          value="Penang (PNG)"
          {...getOverrideProps(overrides, "port8option84")}
        ></option>
        <option
          children="Phnom Penh (PNH)"
          value="Phnom Penh (PNH)"
          {...getOverrideProps(overrides, "port8option85")}
        ></option>
        <option
          children="Phra Chulachomklao Fort (PCF)"
          value="Phra Chulachomklao Fort (PCF)"
          {...getOverrideProps(overrides, "port8option86")}
        ></option>
        <option
          children="Phuket (HKT)"
          value="Phuket (HKT)"
          {...getOverrideProps(overrides, "port8option87")}
        ></option>
        <option
          children="Phumy (PHU)"
          value="Phumy (PHU)"
          {...getOverrideProps(overrides, "port8option88")}
        ></option>
        <option
          children="Plathong Oil Rig (PATO)"
          value="Plathong Oil Rig (PATO)"
          {...getOverrideProps(overrides, "port8option89")}
        ></option>
        <option
          children="Pontianak (POT)"
          value="Pontianak (POT)"
          {...getOverrideProps(overrides, "port8option90")}
        ></option>
        <option
          children="Port Klang (PKL)"
          value="Port Klang (PKL)"
          {...getOverrideProps(overrides, "port8option91")}
        ></option>
        <option
          children="Port Moresby (PGPOM)"
          value="Port Moresby (PGPOM)"
          {...getOverrideProps(overrides, "port8option92")}
        ></option>
        <option
          children="Poso (POSO)"
          value="Poso (POSO)"
          {...getOverrideProps(overrides, "port8option93")}
        ></option>
        <option
          children="Pusan (PUS)"
          value="Pusan (PUS)"
          {...getOverrideProps(overrides, "port8option94")}
        ></option>
        <option
          children="Quinzhou (QZH)"
          value="Quinzhou (QZH)"
          {...getOverrideProps(overrides, "port8option95")}
        ></option>
        <option
          children="Quy Nhon (QNN)"
          value="Quy Nhon (QNN)"
          {...getOverrideProps(overrides, "port8option96")}
        ></option>
        <option
          children="Ranong (UNN)"
          value="Ranong (UNN)"
          {...getOverrideProps(overrides, "port8option97")}
        ></option>
        <option
          children="Rayong (IRPC)"
          value="Rayong (IRPC)"
          {...getOverrideProps(overrides, "port8option98")}
        ></option>
        <option
          children="Sampit (SMQ)"
          value="Sampit (SMQ)"
          {...getOverrideProps(overrides, "port8option99")}
        ></option>
        <option
          children="Sandakan (SAN)"
          value="Sandakan (SAN)"
          {...getOverrideProps(overrides, "port8option100")}
        ></option>
        <option
          children="Sarawak (SRW)"
          value="Sarawak (SRW)"
          {...getOverrideProps(overrides, "port8option101")}
        ></option>
        <option
          children="Sarekei (SRK)"
          value="Sarekei (SRK)"
          {...getOverrideProps(overrides, "port8option102")}
        ></option>
        <option
          children="Sattahip (SATP)"
          value="Sattahip (SATP)"
          {...getOverrideProps(overrides, "port8option103")}
        ></option>
        <option
          children="Semarang - Tanjung Emas (SRG)"
          value="Semarang - Tanjung Emas (SRG)"
          {...getOverrideProps(overrides, "port8option104")}
        ></option>
        <option
          children="Semarang (SRG)"
          value="Semarang (SRG)"
          {...getOverrideProps(overrides, "port8option105")}
        ></option>
        <option
          children="Sibu (SIB)"
          value="Sibu (SIB)"
          {...getOverrideProps(overrides, "port8option106")}
        ></option>
        <option
          children="Singapore (SG)"
          value="Singapore (SG)"
          {...getOverrideProps(overrides, "port8option107")}
        ></option>
        <option
          children="Sipitang (SIP)"
          value="Sipitang (SIP)"
          {...getOverrideProps(overrides, "port8option108")}
        ></option>
        <option
          children="Son Duong (SOD)"
          value="Son Duong (SOD)"
          {...getOverrideProps(overrides, "port8option109")}
        ></option>
        <option
          children="Songkhla (SK)"
          value="Songkhla (SK)"
          {...getOverrideProps(overrides, "port8option110")}
        ></option>
        <option
          children="Srihanoville (SIH)"
          value="Srihanoville (SIH)"
          {...getOverrideProps(overrides, "port8option111")}
        ></option>
        <option
          children="Sriracha Harbor (SRC)"
          value="Sriracha Harbor (SRC)"
          {...getOverrideProps(overrides, "port8option112")}
        ></option>
        <option
          children="Sritama Jetty (STM)"
          value="Sritama Jetty (STM)"
          {...getOverrideProps(overrides, "port8option113")}
        ></option>
        <option
          children="Steung Hav (SHV)"
          value="Steung Hav (SHV)"
          {...getOverrideProps(overrides, "port8option114")}
        ></option>
        <option
          children="Sungai Guntung (SGGT)"
          value="Sungai Guntung (SGGT)"
          {...getOverrideProps(overrides, "port8option115")}
        ></option>
        <option
          children="Surabaya (SUBY)"
          value="Surabaya (SUBY)"
          {...getOverrideProps(overrides, "port8option116")}
        ></option>
        <option
          children="Surat Thanee (SRT)"
          value="Surat Thanee (SRT)"
          {...getOverrideProps(overrides, "port8option117")}
        ></option>
        <option
          children="Tacloban (TAC)"
          value="Tacloban (TAC)"
          {...getOverrideProps(overrides, "port8option118")}
        ></option>
        <option
          children="Tagbilaran (TAG)"
          value="Tagbilaran (TAG)"
          {...getOverrideProps(overrides, "port8option119")}
        ></option>
        <option
          children="Tanjong Manis (TGM)"
          value="Tanjong Manis (TGM)"
          {...getOverrideProps(overrides, "port8option120")}
        ></option>
        <option
          children="Tanjung Batu (TJQ)"
          value="Tanjung Batu (TJQ)"
          {...getOverrideProps(overrides, "port8option121")}
        ></option>
        <option
          children="Tanjung Priok (TP)"
          value="Tanjung Priok (TP)"
          {...getOverrideProps(overrides, "port8option122")}
        ></option>
        <option
          children="Tarjun (TAR)"
          value="Tarjun (TAR)"
          {...getOverrideProps(overrides, "port8option123")}
        ></option>
        <option
          children="Tawau (TAW)"
          value="Tawau (TAW)"
          {...getOverrideProps(overrides, "port8option124")}
        ></option>
        <option
          children="Terengganu (TGG)"
          value="Terengganu (TGG)"
          {...getOverrideProps(overrides, "port8option125")}
        ></option>
        <option
          children="Tha Sala (TSL)"
          value="Tha Sala (TSL)"
          {...getOverrideProps(overrides, "port8option126")}
        ></option>
        <option
          children="Tsukumi (TSUM)"
          value="Tsukumi (TSUM)"
          {...getOverrideProps(overrides, "port8option127")}
        ></option>
        <option
          children="Vung Ang (VAG)"
          value="Vung Ang (VAG)"
          {...getOverrideProps(overrides, "port8option128")}
        ></option>
        <option
          children="Vung Tau (VUT)"
          value="Vung Tau (VUT)"
          {...getOverrideProps(overrides, "port8option129")}
        ></option>
        <option
          children="Yangon (RGN)"
          value="Yangon (RGN)"
          {...getOverrideProps(overrides, "port8option130")}
        ></option>
      </SelectField>
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(4, auto)"
        {...getOverrideProps(overrides, "RowGrid19")}
      >
        <TextField
          label="PDA Fees"
          type="number"
          step="any"
          value={port8_fees}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                currency_type,
                exchange_rate,
                diesel_rate,
                bunker_rate,
                lube_rate,
                port1,
                port1_fees,
                port1_port_call,
                port1_crane_usage,
                port1_surveying_fees,
                port2,
                port2_fees,
                port2_port_call,
                port2_crane_usage,
                port2_surveying_fees,
                port3,
                port3_fees,
                port3_port_call,
                port3_crane_usage,
                port3_surveying_fees,
                port4,
                port4_fees,
                port4_port_call,
                port4_crane_usage,
                port4_surveying_fees,
                port5,
                port5_fees,
                port5_port_call,
                port5_crane_usage,
                port5_surveying_fees,
                port6,
                port6_fees,
                port6_port_call,
                port6_crane_usage,
                port6_surveying_fees,
                port7,
                port7_fees,
                port7_port_call,
                port7_crane_usage,
                port7_surveying_fees,
                port8,
                port8_fees: value,
                port8_port_call,
                port8_crane_usage,
                port8_surveying_fees,
                port9,
                port9_fees,
                port9_port_call,
                port9_crane_usage,
                port9_surveying_fees,
                port10,
                port10_fees,
                port10_port_call,
                port10_crane_usage,
                port10_surveying_fees,
                cargo1_type,
                cargo1_quantity,
                cargo1_rate,
                cargo1_brokerage_fees,
                cargo2_type,
                cargo2_quantity,
                cargo2_rate,
                cargo2_brokerage_fees,
                cargo3_type,
                cargo3_quantity,
                cargo3_rate,
                cargo3_brokerage_fees,
                cargo4_type,
                cargo4_quantity,
                cargo4_rate,
                cargo4_brokerage_fees,
                cargo5_type,
                cargo5_quantity,
                cargo5_rate,
                cargo5_brokerage_fees,
                cargo6_type,
                cargo6_quantity,
                cargo6_rate,
                cargo6_brokerage_fees,
                voyageBonus,
                miscCosts,
              };
              const result = onChange(modelFields);
              value = result?.port8_fees ?? value;
            }
            if (errors.port8_fees?.hasError) {
              runValidationTasks("port8_fees", value);
            }
            setPort8_fees(value);
          }}
          onBlur={() => runValidationTasks("port8_fees", port8_fees)}
          errorMessage={errors.port8_fees?.errorMessage}
          hasError={errors.port8_fees?.hasError}
          {...getOverrideProps(overrides, "port8_fees")}
        ></TextField>
        <TextField
          label="Port Call (Days)"
          type="number"
          step="any"
          value={port8_port_call}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                currency_type,
                exchange_rate,
                diesel_rate,
                bunker_rate,
                lube_rate,
                port1,
                port1_fees,
                port1_port_call,
                port1_crane_usage,
                port1_surveying_fees,
                port2,
                port2_fees,
                port2_port_call,
                port2_crane_usage,
                port2_surveying_fees,
                port3,
                port3_fees,
                port3_port_call,
                port3_crane_usage,
                port3_surveying_fees,
                port4,
                port4_fees,
                port4_port_call,
                port4_crane_usage,
                port4_surveying_fees,
                port5,
                port5_fees,
                port5_port_call,
                port5_crane_usage,
                port5_surveying_fees,
                port6,
                port6_fees,
                port6_port_call,
                port6_crane_usage,
                port6_surveying_fees,
                port7,
                port7_fees,
                port7_port_call,
                port7_crane_usage,
                port7_surveying_fees,
                port8,
                port8_fees,
                port8_port_call: value,
                port8_crane_usage,
                port8_surveying_fees,
                port9,
                port9_fees,
                port9_port_call,
                port9_crane_usage,
                port9_surveying_fees,
                port10,
                port10_fees,
                port10_port_call: value,
                port10_crane_usage,
                port10_surveying_fees,
                cargo1_type,
                cargo1_quantity,
                cargo1_rate,
                cargo1_brokerage_fees,
                cargo2_type,
                cargo2_quantity,
                cargo2_rate,
                cargo2_brokerage_fees,
                cargo3_type,
                cargo3_quantity,
                cargo3_rate,
                cargo3_brokerage_fees,
                cargo4_type,
                cargo4_quantity,
                cargo4_rate,
                cargo4_brokerage_fees,
                cargo5_type,
                cargo5_quantity,
                cargo5_rate,
                cargo5_brokerage_fees,
                cargo6_type,
                cargo6_quantity,
                cargo6_rate,
                cargo6_brokerage_fees,
                voyageBonus,
                miscCosts,
              };
              const result = onChange(modelFields);
              value = result?.port8_port_call ?? value;
            }
            if (errors.port8_port_call?.hasError) {
              runValidationTasks("port8_port_call", value);
            }
            setPort8_port_call(value);
          }}
          onBlur={() => runValidationTasks("port8_port_call", port8_port_call)}
          errorMessage={errors.port8_port_call?.errorMessage}
          hasError={errors.port8_port_call?.hasError}
          {...getOverrideProps(overrides, "port8_port_call")}
        ></TextField>
        <TextField
          label="Crane Usage (Hours)"
          type="number"
          step="any"
          value={port8_crane_usage}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                currency_type,
                exchange_rate,
                diesel_rate,
                bunker_rate,
                lube_rate,
                port1,
                port1_fees,
                port1_port_call,
                port1_crane_usage,
                port1_surveying_fees,
                port2,
                port2_fees,
                port2_port_call,
                port2_crane_usage,
                port2_surveying_fees,
                port3,
                port3_fees,
                port3_port_call,
                port3_crane_usage,
                port3_surveying_fees,
                port4,
                port4_fees,
                port4_port_call,
                port4_crane_usage,
                port4_surveying_fees,
                port5,
                port5_fees,
                port5_port_call,
                port5_crane_usage,
                port5_surveying_fees,
                port6,
                port6_fees,
                port6_port_call,
                port6_crane_usage,
                port6_surveying_fees,
                port7,
                port7_fees,
                port7_port_call,
                port7_crane_usage,
                port7_surveying_fees,
                port8,
                port8_fees,
                port8_port_call,
                port8_crane_usage: value,
                port8_surveying_fees,
                port9,
                port9_fees,
                port9_port_call,
                port9_crane_usage,
                port9_surveying_fees,
                port10,
                port10_fees,
                port10_port_call,
                port10_crane_usage,
                port10_surveying_fees,
                cargo1_type,
                cargo1_quantity,
                cargo1_rate,
                cargo1_brokerage_fees,
                cargo2_type,
                cargo2_quantity,
                cargo2_rate,
                cargo2_brokerage_fees,
                cargo3_type,
                cargo3_quantity,
                cargo3_rate,
                cargo3_brokerage_fees,
                cargo4_type,
                cargo4_quantity,
                cargo4_rate,
                cargo4_brokerage_fees,
                cargo5_type,
                cargo5_quantity,
                cargo5_rate,
                cargo5_brokerage_fees,
                cargo6_type,
                cargo6_quantity,
                cargo6_rate,
                cargo6_brokerage_fees,
                voyageBonus,
                miscCosts,
              };
              const result = onChange(modelFields);
              value = result?.port8_crane_usage ?? value;
            }
            if (errors.port8_crane_usage?.hasError) {
              runValidationTasks("port8_crane_usage", value);
            }
            setPort8_crane_usage(value);
          }}
          onBlur={() =>
            runValidationTasks("port8_crane_usage", port8_crane_usage)
          }
          errorMessage={errors.port8_crane_usage?.errorMessage}
          hasError={errors.port8_crane_usage?.hasError}
          {...getOverrideProps(overrides, "port8_crane_usage")}
        ></TextField>
        <TextField
          label="Surveying Fees"
          type="number"
          step="any"
          value={port8_surveying_fees}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                currency_type,
                exchange_rate,
                diesel_rate,
                bunker_rate,
                lube_rate,
                port1,
                port1_fees,
                port1_port_call,
                port1_crane_usage,
                port1_surveying_fees,
                port2,
                port2_fees,
                port2_port_call,
                port2_crane_usage,
                port2_surveying_fees,
                port3,
                port3_fees,
                port3_port_call,
                port3_crane_usage,
                port3_surveying_fees,
                port4,
                port4_fees,
                port4_port_call,
                port4_crane_usage,
                port4_surveying_fees,
                port5,
                port5_fees,
                port5_port_call,
                port5_crane_usage,
                port5_surveying_fees,
                port6,
                port6_fees,
                port6_port_call,
                port6_crane_usage,
                port6_surveying_fees,
                port7,
                port7_fees,
                port7_port_call,
                port7_crane_usage,
                port7_surveying_fees,
                port8,
                port8_fees,
                port8_port_call,
                port8_crane_usage,
                port8_surveying_fees: value,
                port9,
                port9_fees,
                port9_port_call,
                port9_crane_usage,
                port9_surveying_fees,
                port10,
                port10_fees,
                port10_port_call,
                port10_crane_usage,
                port10_surveying_fees,
                cargo1_type,
                cargo1_quantity,
                cargo1_rate,
                cargo1_brokerage_fees,
                cargo2_type,
                cargo2_quantity,
                cargo2_rate,
                cargo2_brokerage_fees,
                cargo3_type,
                cargo3_quantity,
                cargo3_rate,
                cargo3_brokerage_fees,
                cargo4_type,
                cargo4_quantity,
                cargo4_rate,
                cargo4_brokerage_fees,
                cargo5_type,
                cargo5_quantity,
                cargo5_rate,
                cargo5_brokerage_fees,
                cargo6_type,
                cargo6_quantity,
                cargo6_rate,
                cargo6_brokerage_fees,
                voyageBonus,
                miscCosts,
              };
              const result = onChange(modelFields);
              value = result?.port8_surveying_fees ?? value;
            }
            if (errors.port8_surveying_fees?.hasError) {
              runValidationTasks("port8_surveying_fees", value);
            }
            setPort8_surveying_fees(value);
          }}
          onBlur={() =>
            runValidationTasks("port8_surveying_fees", port8_surveying_fees)
          }
          errorMessage={errors.port8_surveying_fees?.errorMessage}
          hasError={errors.port8_surveying_fees?.hasError}
          {...getOverrideProps(overrides, "port8_surveying_fees")}
        ></TextField>
      </Grid>

      <SelectField
        label={<span style={{ fontWeight: 'bold' }}>Port 9</span>}
        placeholder="Please select an option"
        value={port9}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              currency_type,
              exchange_rate,
              diesel_rate,
              bunker_rate,
              lube_rate,
              port1,
              port1_fees,
              port1_port_call,
              port1_crane_usage,
              port1_surveying_fees,
              port2,
              port2_fees,
              port2_port_call,
              port2_crane_usage,
              port2_surveying_fees,
              port3,
              port3_fees,
              port3_port_call,
              port3_crane_usage,
              port3_surveying_fees,
              port4,
              port4_fees,
              port4_port_call,
              port4_crane_usage,
              port4_surveying_fees,
              port5,
              port5_fees,
              port5_port_call,
              port5_crane_usage,
              port5_surveying_fees,
              port6,
              port6_fees,
              port6_port_call,
              port6_crane_usage,
              port6_surveying_fees,
              port7,
              port7_fees,
              port7_port_call,
              port7_crane_usage,
              port7_surveying_fees,
              port8,
              port8_fees,
              port8_port_call,
              port8_crane_usage,
              port8_surveying_fees,
              port9: value,
              port9_fees,
              port9_port_call,
              port9_crane_usage,
              port9_surveying_fees,
              port10,
              port10_fees,
              port10_port_call,
              port10_crane_usage,
              port10_surveying_fees,
              cargo1_type,
              cargo1_quantity,
              cargo1_rate,
              cargo1_brokerage_fees,
              cargo2_type,
              cargo2_quantity,
              cargo2_rate,
              cargo2_brokerage_fees,
              cargo3_type,
              cargo3_quantity,
              cargo3_rate,
              cargo3_brokerage_fees,
              cargo4_type,
              cargo4_quantity,
              cargo4_rate,
              cargo4_brokerage_fees,
              cargo5_type,
              cargo5_quantity,
              cargo5_rate,
              cargo5_brokerage_fees,
              cargo6_type,
              cargo6_quantity,
              cargo6_rate,
              cargo6_brokerage_fees,
              voyageBonus,
              miscCosts,
            };
            const result = onChange(modelFields);
            value = result?.port9 ?? value;
          }
          if (errors.port9?.hasError) {
            runValidationTasks("port9", value);
          }
          setPort9(value);
        }}
        onBlur={() => runValidationTasks("port9", port9)}
        errorMessage={errors.port9?.errorMessage}
        hasError={errors.port9?.hasError}
        {...getOverrideProps(overrides, "port9")}
      >
        <option
          children="NIL"
          value="NIL"
          {...getOverrideProps(overrides, "port9option0")}
        ></option>
        <option
          children="Ayutthaya - Bangpain (AB)"
          value="Ayutthaya - Bangpain (AB)"
          {...getOverrideProps(overrides, "port9option1")}
        ></option>
        <option
          children="Ayutthaya - Nakorn Luang (ANL)"
          value="Ayutthaya - Nakorn Luang (ANL)"
          {...getOverrideProps(overrides, "port9option2")}
        ></option>
        <option
          children="Bahodopi (BHDP)"
          value="Bahodopi (BHDP)"
          {...getOverrideProps(overrides, "port9option3")}
        ></option>
        <option
          children="Balikpapan (BPN)"
          value="Balikpapan (BPN)"
          {...getOverrideProps(overrides, "port9option4")}
        ></option>
        <option
          children="Bang Sapan (BS)"
          value="Bang Sapan (BS)"
          {...getOverrideProps(overrides, "port9option5")}
        ></option>
        <option
          children="Bangkok (BK)"
          value="Bangkok (BK)"
          {...getOverrideProps(overrides, "port9option6")}
        ></option>
        <option
          children="Bangpakong (BAK)"
          value="Bangpakong (BAK)"
          {...getOverrideProps(overrides, "port9option7")}
        ></option>
        <option
          children="Banyuwangi - Tanjung Wangi (BJU)"
          value="Banyuwangi - Tanjung Wangi (BJU)"
          {...getOverrideProps(overrides, "port9option8")}
        ></option>
        <option
          children="Batam (BAT)"
          value="Batam (BAT)"
          {...getOverrideProps(overrides, "port9option9")}
        ></option>
        <option
          children="Beihai (BHY)"
          value="Beihai (BHY)"
          {...getOverrideProps(overrides, "port9option10")}
        ></option>
        <option
          children="Belawan (BRW)"
          value="Belawan (BRW)"
          {...getOverrideProps(overrides, "port9option11")}
        ></option>
        <option
          children="Benoa (Bali) (BAO)"
          value="Benoa (Bali) (BAO)"
          {...getOverrideProps(overrides, "port9option12")}
        ></option>
        <option
          children="Bintan (BTN)"
          value="Bintan (BTN)"
          {...getOverrideProps(overrides, "port9option13")}
        ></option>
        <option
          children="Bintulu (BIN)"
          value="Bintulu (BIN)"
          {...getOverrideProps(overrides, "port9option14")}
        ></option>
        <option
          children="Bitung (BIT)"
          value="Bitung (BIT)"
          {...getOverrideProps(overrides, "port9option15")}
        ></option>
        <option
          children="Bontang (BXT)"
          value="Bontang (BXT)"
          {...getOverrideProps(overrides, "port9option16")}
        ></option>
        <option
          children="Bourbon (BOUR)"
          value="Bourbon (BOUR)"
          {...getOverrideProps(overrides, "port9option17")}
        ></option>
        <option
          children="Brunei (BRU)"
          value="Brunei (BRU)"
          {...getOverrideProps(overrides, "port9option18")}
        ></option>
        <option
          children="Cai Lan (CLN)"
          value="Cai Lan (CLN)"
          {...getOverrideProps(overrides, "port9option19")}
        ></option>
        <option
          children="Cam Pha (CPH)"
          value="Cam Pha (CPH)"
          {...getOverrideProps(overrides, "port9option20")}
        ></option>
        <option
          children="Can Tho (VCA)"
          value="Can Tho (VCA)"
          {...getOverrideProps(overrides, "port9option21")}
        ></option>
        <option
          children="Cat Lai (CLI)"
          value="Cat Lai (CLI)"
          {...getOverrideProps(overrides, "port9option22")}
        ></option>
        <option
          children="Cayagan de Oro City (Macabalan wharf) (CDO)"
          value="Cayagan de Oro City (Macabalan wharf) (CDO)"
          {...getOverrideProps(overrides, "port9option23")}
        ></option>
        <option
          children="Century Harbour (MHI)"
          value="Century Harbour (MHI)"
          {...getOverrideProps(overrides, "port9option24")}
        ></option>
        <option
          children="Chantaburi LaemSing (CLS)"
          value="Chantaburi LaemSing (CLS)"
          {...getOverrideProps(overrides, "port9option25")}
        ></option>
        <option
          children="Chittagong (CTG)"
          value="Chittagong (CTG)"
          {...getOverrideProps(overrides, "port9option26")}
        ></option>
        <option
          children="Cigading (CIG)"
          value="Cigading (CIG)"
          {...getOverrideProps(overrides, "port9option27")}
        ></option>
        <option
          children="Danang (DAD)"
          value="Danang (DAD)"
          {...getOverrideProps(overrides, "port9option28")}
        ></option>
        <option
          children="Davao (Sasa Wharf) (DVO)"
          value="Davao (Sasa Wharf) (DVO)"
          {...getOverrideProps(overrides, "port9option29")}
        ></option>
        <option
          children="Dhaka (DKA)"
          value="Dhaka (DKA)"
          {...getOverrideProps(overrides, "port9option30")}
        ></option>
        <option
          children="Dumai (DMI)"
          value="Dumai (DMI)"
          {...getOverrideProps(overrides, "port9option31")}
        ></option>
        <option
          children="Dung Quat (DQT)"
          value="Dung Quat (DQT)"
          {...getOverrideProps(overrides, "port9option32")}
        ></option>
        <option
          children="Fangcheng (FAN)"
          value="Fangcheng (FAN)"
          {...getOverrideProps(overrides, "port9option33")}
        ></option>
        <option
          children="Futong (FTG)"
          value="Futong (FTG)"
          {...getOverrideProps(overrides, "port9option34")}
        ></option>
        <option
          children="Godau port  (GDP)"
          value="Godau port  (GDP)"
          {...getOverrideProps(overrides, "port9option35")}
        ></option>
        <option
          children="Haiphong (HPH)"
          value="Haiphong (HPH)"
          {...getOverrideProps(overrides, "port9option36")}
        ></option>
        <option
          children="Halong Bay (HLG)"
          value="Halong Bay (HLG)"
          {...getOverrideProps(overrides, "port9option37")}
        ></option>
        <option
          children="HO CHI MINH (HCM)"
          value="HO CHI MINH (HCM)"
          {...getOverrideProps(overrides, "port9option38")}
        ></option>
        <option
          children="Hon Gai (HON)"
          value="Hon Gai (HON)"
          {...getOverrideProps(overrides, "port9option39")}
        ></option>
        <option
          children="Hong Kong (HKG)"
          value="Hong Kong (HKG)"
          {...getOverrideProps(overrides, "port9option40")}
        ></option>
        <option
          children="Jakarta (JAK)"
          value="Jakarta (JAK)"
          {...getOverrideProps(overrides, "port9option41")}
        ></option>
        <option
          children="Jambi (JBI)"
          value="Jambi (JBI)"
          {...getOverrideProps(overrides, "port9option42")}
        ></option>
        <option
          children="K.K. Kota Kinabalu (KK)"
          value="K.K. Kota Kinabalu (KK)"
          {...getOverrideProps(overrides, "port9option43")}
        ></option>
        <option
          children="Kampot (KMP)"
          value="Kampot (KMP)"
          {...getOverrideProps(overrides, "port9option44")}
        ></option>
        <option
          children="Kantang (KTG)"
          value="Kantang (KTG)"
          {...getOverrideProps(overrides, "port9option45")}
        ></option>
        <option
          children="Kedah (KKH)"
          value="Kedah (KKH)"
          {...getOverrideProps(overrides, "port9option46")}
        ></option>
        <option
          children="Kelantan (KLT)"
          value="Kelantan (KLT)"
          {...getOverrideProps(overrides, "port9option47")}
        ></option>
        <option
          children="Kemaman (KMN)"
          value="Kemaman (KMN)"
          {...getOverrideProps(overrides, "port9option48")}
        ></option>
        <option
          children="Khanom (KHM)"
          value="Khanom (KHM)"
          {...getOverrideProps(overrides, "port9option49")}
        ></option>
        <option
          children="Ko Sichang (KSI)"
          value="Ko Sichang (KSI)"
          {...getOverrideProps(overrides, "port9option50")}
        ></option>
        <option
          children="Kolkata (CCU)"
          value="Kolkata (CCU)"
          {...getOverrideProps(overrides, "port9option51")}
        ></option>
        <option
          children="Kor Samui (KSM)"
          value="Kor Samui (KSM)"
          {...getOverrideProps(overrides, "port9option52")}
        ></option>
        <option
          children="Kuantan (KT)"
          value="Kuantan (KT)"
          {...getOverrideProps(overrides, "port9option53")}
        ></option>
        <option
          children="Kuching (KUC)"
          value="Kuching (KUC)"
          {...getOverrideProps(overrides, "port9option54")}
        ></option>
        <option
          children="Labuan (LBN)"
          value="Labuan (LBN)"
          {...getOverrideProps(overrides, "port9option55")}
        ></option>
        <option
          children="Laem Chabang (LCB)"
          value="Laem Chabang (LCB)"
          {...getOverrideProps(overrides, "port9option56")}
        ></option>
        <option
          children="Lahad Datu (LDU)"
          value="Lahad Datu (LDU)"
          {...getOverrideProps(overrides, "port9option57")}
        ></option>
        <option
          children="Lhokseumawe (LHOK)"
          value="Lhokseumawe (LHOK)"
          {...getOverrideProps(overrides, "port9option58")}
        ></option>
        <option
          children="Lumut (LUM)"
          value="Lumut (LUM)"
          {...getOverrideProps(overrides, "port9option59")}
        ></option>
        <option
          children="Maeklong (Firesun) (MKG)"
          value="Maeklong (Firesun) (MKG)"
          {...getOverrideProps(overrides, "port9option60")}
        ></option>
        <option
          children="Mahachai (MHI)"
          value="Mahachai (MHI)"
          {...getOverrideProps(overrides, "port9option61")}
        ></option>
        <option
          children="Makassar (MAK)"
          value="Makassar (MAK)"
          {...getOverrideProps(overrides, "port9option62")}
        ></option>
        <option
          children="Malacca (MAL)"
          value="Malacca (MAL)"
          {...getOverrideProps(overrides, "port9option63")}
        ></option>
        <option
          children="Manila Habour (MNL)"
          value="Manila Habour (MNL)"
          {...getOverrideProps(overrides, "port9option64")}
        ></option>
        <option
          children="Maptaphut (MAT)"
          value="Maptaphut (MAT)"
          {...getOverrideProps(overrides, "port9option65")}
        ></option>
        <option
          children="Marunda (MRD)"
          value="Marunda (MRD)"
          {...getOverrideProps(overrides, "port9option66")}
        ></option>
        <option
          children="Mawei Fuzhou (FOC)"
          value="Mawei Fuzhou (FOC)"
          {...getOverrideProps(overrides, "port9option67")}
        ></option>
        <option
          children="Muara (MUR)"
          value="Muara (MUR)"
          {...getOverrideProps(overrides, "port9option68")}
        ></option>
        <option
          children="My Tho (MUT)"
          value="My Tho (MUT)"
          {...getOverrideProps(overrides, "port9option69")}
        ></option>
        <option
          children="Nan Tong (NTG)"
          value="Nan Tong (NTG)"
          {...getOverrideProps(overrides, "port9option70")}
        ></option>
        <option
          children="Narathiwat (NAW)"
          value="Narathiwat (NAW)"
          {...getOverrideProps(overrides, "port9option71")}
        ></option>
        <option
          children="Nghi Son (NGH)"
          value="Nghi Son (NGH)"
          {...getOverrideProps(overrides, "port9option72")}
        ></option>
        <option
          children="Ningde (NDE)"
          value="Ningde (NDE)"
          {...getOverrideProps(overrides, "port9option73")}
        ></option>
        <option
          children="Nunukan (NNX)"
          value="Nunukan (NNX)"
          {...getOverrideProps(overrides, "port9option74")}
        ></option>
        <option
          children="Oknha Mong Port (OMP)"
          value="Oknha Mong Port (OMP)"
          {...getOverrideProps(overrides, "port9option75")}
        ></option>
        <option
          children="Onomichi (ONO)"
          value="Onomichi (ONO)"
          {...getOverrideProps(overrides, "port9option76")}
        ></option>
        <option
          children="Padang - Telux Buyur (TBR)"
          value="Padang - Telux Buyur (TBR)"
          {...getOverrideProps(overrides, "port9option77")}
        ></option>
        <option
          children="PAKAN Baru (PKRU)"
          value="PAKAN Baru (PKRU)"
          {...getOverrideProps(overrides, "port9option78")}
        ></option>
        <option
          children="Palembang (PLB)"
          value="Palembang (PLB)"
          {...getOverrideProps(overrides, "port9option79")}
        ></option>
        <option
          children="Panjang (PNJ)"
          value="Panjang (PNJ)"
          {...getOverrideProps(overrides, "port9option80")}
        ></option>
        <option
          children="Pasir Gudang (PAS)"
          value="Pasir Gudang (PAS)"
          {...getOverrideProps(overrides, "port9option81")}
        ></option>
        <option
          children="Patimban (PTB)"
          value="Patimban (PTB)"
          {...getOverrideProps(overrides, "port9option82")}
        ></option>
        <option
          children="Pattani (PTN)"
          value="Pattani (PTN)"
          {...getOverrideProps(overrides, "port9option83")}
        ></option>
        <option
          children="Penang (PNG)"
          value="Penang (PNG)"
          {...getOverrideProps(overrides, "port9option84")}
        ></option>
        <option
          children="Phnom Penh (PNH)"
          value="Phnom Penh (PNH)"
          {...getOverrideProps(overrides, "port9option85")}
        ></option>
        <option
          children="Phra Chulachomklao Fort (PCF)"
          value="Phra Chulachomklao Fort (PCF)"
          {...getOverrideProps(overrides, "port9option86")}
        ></option>
        <option
          children="Phuket (HKT)"
          value="Phuket (HKT)"
          {...getOverrideProps(overrides, "port9option87")}
        ></option>
        <option
          children="Phumy (PHU)"
          value="Phumy (PHU)"
          {...getOverrideProps(overrides, "port9option88")}
        ></option>
        <option
          children="Plathong Oil Rig (PATO)"
          value="Plathong Oil Rig (PATO)"
          {...getOverrideProps(overrides, "port9option89")}
        ></option>
        <option
          children="Pontianak (POT)"
          value="Pontianak (POT)"
          {...getOverrideProps(overrides, "port9option90")}
        ></option>
        <option
          children="Port Klang (PKL)"
          value="Port Klang (PKL)"
          {...getOverrideProps(overrides, "port9option91")}
        ></option>
        <option
          children="Port Moresby (PGPOM)"
          value="Port Moresby (PGPOM)"
          {...getOverrideProps(overrides, "port9option92")}
        ></option>
        <option
          children="Poso (POSO)"
          value="Poso (POSO)"
          {...getOverrideProps(overrides, "port9option93")}
        ></option>
        <option
          children="Pusan (PUS)"
          value="Pusan (PUS)"
          {...getOverrideProps(overrides, "port9option94")}
        ></option>
        <option
          children="Quinzhou (QZH)"
          value="Quinzhou (QZH)"
          {...getOverrideProps(overrides, "port9option95")}
        ></option>
        <option
          children="Quy Nhon (QNN)"
          value="Quy Nhon (QNN)"
          {...getOverrideProps(overrides, "port9option96")}
        ></option>
        <option
          children="Ranong (UNN)"
          value="Ranong (UNN)"
          {...getOverrideProps(overrides, "port9option97")}
        ></option>
        <option
          children="Rayong (IRPC)"
          value="Rayong (IRPC)"
          {...getOverrideProps(overrides, "port9option98")}
        ></option>
        <option
          children="Sampit (SMQ)"
          value="Sampit (SMQ)"
          {...getOverrideProps(overrides, "port9option99")}
        ></option>
        <option
          children="Sandakan (SAN)"
          value="Sandakan (SAN)"
          {...getOverrideProps(overrides, "port9option100")}
        ></option>
        <option
          children="Sarawak (SRW)"
          value="Sarawak (SRW)"
          {...getOverrideProps(overrides, "port9option101")}
        ></option>
        <option
          children="Sarekei (SRK)"
          value="Sarekei (SRK)"
          {...getOverrideProps(overrides, "port9option102")}
        ></option>
        <option
          children="Sattahip (SATP)"
          value="Sattahip (SATP)"
          {...getOverrideProps(overrides, "port9option103")}
        ></option>
        <option
          children="Semarang - Tanjung Emas (SRG)"
          value="Semarang - Tanjung Emas (SRG)"
          {...getOverrideProps(overrides, "port9option104")}
        ></option>
        <option
          children="Semarang (SRG)"
          value="Semarang (SRG)"
          {...getOverrideProps(overrides, "port9option105")}
        ></option>
        <option
          children="Sibu (SIB)"
          value="Sibu (SIB)"
          {...getOverrideProps(overrides, "port9option106")}
        ></option>
        <option
          children="Singapore (SG)"
          value="Singapore (SG)"
          {...getOverrideProps(overrides, "port9option107")}
        ></option>
        <option
          children="Sipitang (SIP)"
          value="Sipitang (SIP)"
          {...getOverrideProps(overrides, "port9option108")}
        ></option>
        <option
          children="Son Duong (SOD)"
          value="Son Duong (SOD)"
          {...getOverrideProps(overrides, "port9option109")}
        ></option>
        <option
          children="Songkhla (SK)"
          value="Songkhla (SK)"
          {...getOverrideProps(overrides, "port9option110")}
        ></option>
        <option
          children="Srihanoville (SIH)"
          value="Srihanoville (SIH)"
          {...getOverrideProps(overrides, "port9option111")}
        ></option>
        <option
          children="Sriracha Harbor (SRC)"
          value="Sriracha Harbor (SRC)"
          {...getOverrideProps(overrides, "port9option112")}
        ></option>
        <option
          children="Sritama Jetty (STM)"
          value="Sritama Jetty (STM)"
          {...getOverrideProps(overrides, "port9option113")}
        ></option>
        <option
          children="Steung Hav (SHV)"
          value="Steung Hav (SHV)"
          {...getOverrideProps(overrides, "port9option114")}
        ></option>
        <option
          children="Sungai Guntung (SGGT)"
          value="Sungai Guntung (SGGT)"
          {...getOverrideProps(overrides, "port9option115")}
        ></option>
        <option
          children="Surabaya (SUBY)"
          value="Surabaya (SUBY)"
          {...getOverrideProps(overrides, "port9option116")}
        ></option>
        <option
          children="Surat Thanee (SRT)"
          value="Surat Thanee (SRT)"
          {...getOverrideProps(overrides, "port9option117")}
        ></option>
        <option
          children="Tacloban (TAC)"
          value="Tacloban (TAC)"
          {...getOverrideProps(overrides, "port9option118")}
        ></option>
        <option
          children="Tagbilaran (TAG)"
          value="Tagbilaran (TAG)"
          {...getOverrideProps(overrides, "port9option119")}
        ></option>
        <option
          children="Tanjong Manis (TGM)"
          value="Tanjong Manis (TGM)"
          {...getOverrideProps(overrides, "port9option120")}
        ></option>
        <option
          children="Tanjung Batu (TJQ)"
          value="Tanjung Batu (TJQ)"
          {...getOverrideProps(overrides, "port9option121")}
        ></option>
        <option
          children="Tanjung Priok (TP)"
          value="Tanjung Priok (TP)"
          {...getOverrideProps(overrides, "port9option122")}
        ></option>
        <option
          children="Tarjun (TAR)"
          value="Tarjun (TAR)"
          {...getOverrideProps(overrides, "port9option123")}
        ></option>
        <option
          children="Tawau (TAW)"
          value="Tawau (TAW)"
          {...getOverrideProps(overrides, "port9option124")}
        ></option>
        <option
          children="Terengganu (TGG)"
          value="Terengganu (TGG)"
          {...getOverrideProps(overrides, "port9option125")}
        ></option>
        <option
          children="Tha Sala (TSL)"
          value="Tha Sala (TSL)"
          {...getOverrideProps(overrides, "port9option126")}
        ></option>
        <option
          children="Tsukumi (TSUM)"
          value="Tsukumi (TSUM)"
          {...getOverrideProps(overrides, "port9option127")}
        ></option>
        <option
          children="Vung Ang (VAG)"
          value="Vung Ang (VAG)"
          {...getOverrideProps(overrides, "port9option128")}
        ></option>
        <option
          children="Vung Tau (VUT)"
          value="Vung Tau (VUT)"
          {...getOverrideProps(overrides, "port9option129")}
        ></option>
        <option
          children="Yangon (RGN)"
          value="Yangon (RGN)"
          {...getOverrideProps(overrides, "port9option130")}
        ></option>
      </SelectField>
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(4, auto)"
        {...getOverrideProps(overrides, "RowGrid21")}
      >
        <TextField
          label="PDA Fees"
          type="number"
          step="any"
          value={port9_fees}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                currency_type,
                exchange_rate,
                diesel_rate,
                bunker_rate,
                lube_rate,
                port1,
                port1_fees,
                port1_port_call,
                port1_crane_usage,
                port1_surveying_fees,
                port2,
                port2_fees,
                port2_port_call,
                port2_crane_usage,
                port2_surveying_fees,
                port3,
                port3_fees,
                port3_port_call,
                port3_crane_usage,
                port3_surveying_fees,
                port4,
                port4_fees,
                port4_port_call,
                port4_crane_usage,
                port4_surveying_fees,
                port5,
                port5_fees,
                port5_port_call,
                port5_crane_usage,
                port5_surveying_fees,
                port6,
                port6_fees,
                port6_port_call,
                port6_crane_usage,
                port6_surveying_fees,
                port7,
                port7_fees,
                port7_port_call,
                port7_crane_usage,
                port7_surveying_fees,
                port8,
                port8_fees,
                port8_port_call,
                port8_crane_usage,
                port8_surveying_fees,
                port9,
                port9_fees: value,
                port9_port_call,
                port9_crane_usage,
                port9_surveying_fees,
                port10,
                port10_fees,
                port10_port_call,
                port10_crane_usage,
                port10_surveying_fees,
                cargo1_type,
                cargo1_quantity,
                cargo1_rate,
                cargo1_brokerage_fees,
                cargo2_type,
                cargo2_quantity,
                cargo2_rate,
                cargo2_brokerage_fees,
                cargo3_type,
                cargo3_quantity,
                cargo3_rate,
                cargo3_brokerage_fees,
                cargo4_type,
                cargo4_quantity,
                cargo4_rate,
                cargo4_brokerage_fees,
                cargo5_type,
                cargo5_quantity,
                cargo5_rate,
                cargo5_brokerage_fees,
                cargo6_type,
                cargo6_quantity,
                cargo6_rate,
                cargo6_brokerage_fees,
                voyageBonus,
                miscCosts,
              };
              const result = onChange(modelFields);
              value = result?.port9_fees ?? value;
            }
            if (errors.port9_fees?.hasError) {
              runValidationTasks("port9_fees", value);
            }
            setPort9_fees(value);
          }}
          onBlur={() => runValidationTasks("port9_fees", port9_fees)}
          errorMessage={errors.port9_fees?.errorMessage}
          hasError={errors.port9_fees?.hasError}
          {...getOverrideProps(overrides, "port9_fees")}
        ></TextField>
        <TextField
          label="Port Call (Days)"
          type="number"
          step="any"
          value={port9_port_call}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                currency_type,
                exchange_rate,
                diesel_rate,
                bunker_rate,
                lube_rate,
                port1,
                port1_fees,
                port1_port_call,
                port1_crane_usage,
                port1_surveying_fees,
                port2,
                port2_fees,
                port2_port_call,
                port2_crane_usage,
                port2_surveying_fees,
                port3,
                port3_fees,
                port3_port_call,
                port3_crane_usage,
                port3_surveying_fees,
                port4,
                port4_fees,
                port4_port_call,
                port4_crane_usage,
                port4_surveying_fees,
                port5,
                port5_fees,
                port5_port_call,
                port5_crane_usage,
                port5_surveying_fees,
                port6,
                port6_fees,
                port6_port_call,
                port6_crane_usage,
                port6_surveying_fees,
                port7,
                port7_fees,
                port7_port_call,
                port7_crane_usage,
                port7_surveying_fees,
                port8,
                port8_fees,
                port8_port_call,
                port8_crane_usage,
                port8_surveying_fees,
                port9,
                port9_fees,
                port9_port_call: value,
                port9_crane_usage,
                port9_surveying_fees,
                port10,
                port10_fees,
                port10_port_call: value,
                port10_crane_usage,
                port10_surveying_fees,
                cargo1_type,
                cargo1_quantity,
                cargo1_rate,
                cargo1_brokerage_fees,
                cargo2_type,
                cargo2_quantity,
                cargo2_rate,
                cargo2_brokerage_fees,
                cargo3_type,
                cargo3_quantity,
                cargo3_rate,
                cargo3_brokerage_fees,
                cargo4_type,
                cargo4_quantity,
                cargo4_rate,
                cargo4_brokerage_fees,
                cargo5_type,
                cargo5_quantity,
                cargo5_rate,
                cargo5_brokerage_fees,
                cargo6_type,
                cargo6_quantity,
                cargo6_rate,
                cargo6_brokerage_fees,
                voyageBonus,
                miscCosts,
              };
              const result = onChange(modelFields);
              value = result?.port9_port_call ?? value;
            }
            if (errors.port9_port_call?.hasError) {
              runValidationTasks("port9_port_call", value);
            }
            setPort9_port_call(value);
          }}
          onBlur={() => runValidationTasks("port9_port_call", port9_port_call)}
          errorMessage={errors.port9_port_call?.errorMessage}
          hasError={errors.port9_port_call?.hasError}
          {...getOverrideProps(overrides, "port9_port_call")}
        ></TextField>
        <TextField
          label="Crane Usage (Hours)"
          type="number"
          step="any"
          value={port9_crane_usage}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                currency_type,
                exchange_rate,
                diesel_rate,
                bunker_rate,
                lube_rate,
                port1,
                port1_fees,
                port1_port_call,
                port1_crane_usage,
                port1_surveying_fees,
                port2,
                port2_fees,
                port2_port_call,
                port2_crane_usage,
                port2_surveying_fees,
                port3,
                port3_fees,
                port3_port_call,
                port3_crane_usage,
                port3_surveying_fees,
                port4,
                port4_fees,
                port4_port_call,
                port4_crane_usage,
                port4_surveying_fees,
                port5,
                port5_fees,
                port5_port_call,
                port5_crane_usage,
                port5_surveying_fees,
                port6,
                port6_fees,
                port6_port_call,
                port6_crane_usage,
                port6_surveying_fees,
                port7,
                port7_fees,
                port7_port_call,
                port7_crane_usage,
                port7_surveying_fees,
                port8,
                port8_fees,
                port8_port_call,
                port8_crane_usage,
                port8_surveying_fees,
                port9,
                port9_fees,
                port9_port_call,
                port9_crane_usage: value,
                port9_surveying_fees,
                port10,
                port10_fees,
                port10_port_call,
                port10_crane_usage,
                port10_surveying_fees,
                cargo1_type,
                cargo1_quantity,
                cargo1_rate,
                cargo1_brokerage_fees,
                cargo2_type,
                cargo2_quantity,
                cargo2_rate,
                cargo2_brokerage_fees,
                cargo3_type,
                cargo3_quantity,
                cargo3_rate,
                cargo3_brokerage_fees,
                cargo4_type,
                cargo4_quantity,
                cargo4_rate,
                cargo4_brokerage_fees,
                cargo5_type,
                cargo5_quantity,
                cargo5_rate,
                cargo5_brokerage_fees,
                cargo6_type,
                cargo6_quantity,
                cargo6_rate,
                cargo6_brokerage_fees,
                voyageBonus,
                miscCosts,
              };
              const result = onChange(modelFields);
              value = result?.port9_crane_usage ?? value;
            }
            if (errors.port9_crane_usage?.hasError) {
              runValidationTasks("port9_crane_usage", value);
            }
            setPort9_crane_usage(value);
          }}
          onBlur={() =>
            runValidationTasks("port9_crane_usage", port9_crane_usage)
          }
          errorMessage={errors.port9_crane_usage?.errorMessage}
          hasError={errors.port9_crane_usage?.hasError}
          {...getOverrideProps(overrides, "port9_crane_usage")}
        ></TextField>
        <TextField
          label="Surveying Fees"
          type="number"
          step="any"
          value={port9_surveying_fees}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                currency_type,
                exchange_rate,
                diesel_rate,
                bunker_rate,
                lube_rate,
                port1,
                port1_fees,
                port1_port_call,
                port1_crane_usage,
                port1_surveying_fees,
                port2,
                port2_fees,
                port2_port_call,
                port2_crane_usage,
                port2_surveying_fees,
                port3,
                port3_fees,
                port3_port_call,
                port3_crane_usage,
                port3_surveying_fees,
                port4,
                port4_fees,
                port4_port_call,
                port4_crane_usage,
                port4_surveying_fees,
                port5,
                port5_fees,
                port5_port_call,
                port5_crane_usage,
                port5_surveying_fees,
                port6,
                port6_fees,
                port6_port_call,
                port6_crane_usage,
                port6_surveying_fees,
                port7,
                port7_fees,
                port7_port_call,
                port7_crane_usage,
                port7_surveying_fees,
                port8,
                port8_fees,
                port8_port_call,
                port8_crane_usage,
                port8_surveying_fees,
                port9,
                port9_fees,
                port9_port_call,
                port9_crane_usage,
                port9_surveying_fees: value,
                port10,
                port10_fees,
                port10_port_call,
                port10_crane_usage,
                port10_surveying_fees,
                cargo1_type,
                cargo1_quantity,
                cargo1_rate,
                cargo1_brokerage_fees,
                cargo2_type,
                cargo2_quantity,
                cargo2_rate,
                cargo2_brokerage_fees,
                cargo3_type,
                cargo3_quantity,
                cargo3_rate,
                cargo3_brokerage_fees,
                cargo4_type,
                cargo4_quantity,
                cargo4_rate,
                cargo4_brokerage_fees,
                cargo5_type,
                cargo5_quantity,
                cargo5_rate,
                cargo5_brokerage_fees,
                cargo6_type,
                cargo6_quantity,
                cargo6_rate,
                cargo6_brokerage_fees,
                voyageBonus,
                miscCosts,
              };
              const result = onChange(modelFields);
              value = result?.port9_surveying_fees ?? value;
            }
            if (errors.port9_surveying_fees?.hasError) {
              runValidationTasks("port9_surveying_fees", value);
            }
            setPort9_surveying_fees(value);
          }}
          onBlur={() =>
            runValidationTasks("port9_surveying_fees", port9_surveying_fees)
          }
          errorMessage={errors.port9_surveying_fees?.errorMessage}
          hasError={errors.port9_surveying_fees?.hasError}
          {...getOverrideProps(overrides, "port9_surveying_fees")}
        ></TextField>
      </Grid>

      <SelectField
        label={<span style={{ fontWeight: 'bold' }}>Port 10</span>}
        placeholder="Please select an option"
        value={port10}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              currency_type,
              exchange_rate,
              diesel_rate,
              bunker_rate,
              lube_rate,
              port1,
              port1_fees,
              port1_port_call,
              port1_crane_usage,
              port1_surveying_fees,
              port2,
              port2_fees,
              port2_port_call,
              port2_crane_usage,
              port2_surveying_fees,
              port3,
              port3_fees,
              port3_port_call,
              port3_crane_usage,
              port3_surveying_fees,
              port4,
              port4_fees,
              port4_port_call,
              port4_crane_usage,
              port4_surveying_fees,
              port5,
              port5_fees,
              port5_port_call,
              port5_crane_usage,
              port5_surveying_fees,
              port6,
              port6_fees,
              port6_port_call,
              port6_crane_usage,
              port6_surveying_fees,
              port7,
              port7_fees,
              port7_port_call,
              port7_crane_usage,
              port7_surveying_fees,
              port8,
              port8_fees,
              port8_port_call,
              port8_crane_usage,
              port8_surveying_fees,
              port9,
              port9_fees,
              port9_port_call,
              port9_crane_usage,
              port9_surveying_fees,
              port10: value,
              port10_fees,
              port10_port_call,
              port10_crane_usage,
              port10_surveying_fees,
              cargo1_type,
              cargo1_quantity,
              cargo1_rate,
              cargo1_brokerage_fees,
              cargo2_type,
              cargo2_quantity,
              cargo2_rate,
              cargo2_brokerage_fees,
              cargo3_type,
              cargo3_quantity,
              cargo3_rate,
              cargo3_brokerage_fees,
              cargo4_type,
              cargo4_quantity,
              cargo4_rate,
              cargo4_brokerage_fees,
              cargo5_type,
              cargo5_quantity,
              cargo5_rate,
              cargo5_brokerage_fees,
              cargo6_type,
              cargo6_quantity,
              cargo6_rate,
              cargo6_brokerage_fees,
              voyageBonus,
              miscCosts,
            };
            const result = onChange(modelFields);
            value = result?.port10 ?? value;
          }
          if (errors.port10?.hasError) {
            runValidationTasks("port10", value);
          }
          setport10(value);
        }}
        onBlur={() => runValidationTasks("port10", port10)}
        errorMessage={errors.port10?.errorMessage}
        hasError={errors.port10?.hasError}
        {...getOverrideProps(overrides, "port10")}
      >
        <option
          children="NIL"
          value="NIL"
          {...getOverrideProps(overrides, "port10option0")}
        ></option>
        <option
          children="Ayutthaya - Bangpain (AB)"
          value="Ayutthaya - Bangpain (AB)"
          {...getOverrideProps(overrides, "port10option1")}
        ></option>
        <option
          children="Ayutthaya - Nakorn Luang (ANL)"
          value="Ayutthaya - Nakorn Luang (ANL)"
          {...getOverrideProps(overrides, "port10option2")}
        ></option>
        <option
          children="Bahodopi (BHDP)"
          value="Bahodopi (BHDP)"
          {...getOverrideProps(overrides, "port10option3")}
        ></option>
        <option
          children="Balikpapan (BPN)"
          value="Balikpapan (BPN)"
          {...getOverrideProps(overrides, "port10option4")}
        ></option>
        <option
          children="Bang Sapan (BS)"
          value="Bang Sapan (BS)"
          {...getOverrideProps(overrides, "port10option5")}
        ></option>
        <option
          children="Bangkok (BK)"
          value="Bangkok (BK)"
          {...getOverrideProps(overrides, "port10option6")}
        ></option>
        <option
          children="Bangpakong (BAK)"
          value="Bangpakong (BAK)"
          {...getOverrideProps(overrides, "port10option7")}
        ></option>
        <option
          children="Banyuwangi - Tanjung Wangi (BJU)"
          value="Banyuwangi - Tanjung Wangi (BJU)"
          {...getOverrideProps(overrides, "port10option8")}
        ></option>
        <option
          children="Batam (BAT)"
          value="Batam (BAT)"
          {...getOverrideProps(overrides, "port10option9")}
        ></option>
        <option
          children="Beihai (BHY)"
          value="Beihai (BHY)"
          {...getOverrideProps(overrides, "port10option10")}
        ></option>
        <option
          children="Belawan (BRW)"
          value="Belawan (BRW)"
          {...getOverrideProps(overrides, "port10option11")}
        ></option>
        <option
          children="Benoa (Bali) (BAO)"
          value="Benoa (Bali) (BAO)"
          {...getOverrideProps(overrides, "port10option12")}
        ></option>
        <option
          children="Bintan (BTN)"
          value="Bintan (BTN)"
          {...getOverrideProps(overrides, "port10option13")}
        ></option>
        <option
          children="Bintulu (BIN)"
          value="Bintulu (BIN)"
          {...getOverrideProps(overrides, "port10option14")}
        ></option>
        <option
          children="Bitung (BIT)"
          value="Bitung (BIT)"
          {...getOverrideProps(overrides, "port10option15")}
        ></option>
        <option
          children="Bontang (BXT)"
          value="Bontang (BXT)"
          {...getOverrideProps(overrides, "port10option16")}
        ></option>
        <option
          children="Bourbon (BOUR)"
          value="Bourbon (BOUR)"
          {...getOverrideProps(overrides, "port10option17")}
        ></option>
        <option
          children="Brunei (BRU)"
          value="Brunei (BRU)"
          {...getOverrideProps(overrides, "port10option18")}
        ></option>
        <option
          children="Cai Lan (CLN)"
          value="Cai Lan (CLN)"
          {...getOverrideProps(overrides, "port10option19")}
        ></option>
        <option
          children="Cam Pha (CPH)"
          value="Cam Pha (CPH)"
          {...getOverrideProps(overrides, "port10option20")}
        ></option>
        <option
          children="Can Tho (VCA)"
          value="Can Tho (VCA)"
          {...getOverrideProps(overrides, "port10option21")}
        ></option>
        <option
          children="Cat Lai (CLI)"
          value="Cat Lai (CLI)"
          {...getOverrideProps(overrides, "port10option22")}
        ></option>
        <option
          children="Cayagan de Oro City (Macabalan wharf) (CDO)"
          value="Cayagan de Oro City (Macabalan wharf) (CDO)"
          {...getOverrideProps(overrides, "port10option23")}
        ></option>
        <option
          children="Century Harbour (MHI)"
          value="Century Harbour (MHI)"
          {...getOverrideProps(overrides, "port10option24")}
        ></option>
        <option
          children="Chantaburi LaemSing (CLS)"
          value="Chantaburi LaemSing (CLS)"
          {...getOverrideProps(overrides, "port10option25")}
        ></option>
        <option
          children="Chittagong (CTG)"
          value="Chittagong (CTG)"
          {...getOverrideProps(overrides, "port10option26")}
        ></option>
        <option
          children="Cigading (CIG)"
          value="Cigading (CIG)"
          {...getOverrideProps(overrides, "port10option27")}
        ></option>
        <option
          children="Danang (DAD)"
          value="Danang (DAD)"
          {...getOverrideProps(overrides, "port10option28")}
        ></option>
        <option
          children="Davao (Sasa Wharf) (DVO)"
          value="Davao (Sasa Wharf) (DVO)"
          {...getOverrideProps(overrides, "port10option29")}
        ></option>
        <option
          children="Dhaka (DKA)"
          value="Dhaka (DKA)"
          {...getOverrideProps(overrides, "port10option30")}
        ></option>
        <option
          children="Dumai (DMI)"
          value="Dumai (DMI)"
          {...getOverrideProps(overrides, "port10option31")}
        ></option>
        <option
          children="Dung Quat (DQT)"
          value="Dung Quat (DQT)"
          {...getOverrideProps(overrides, "port10option32")}
        ></option>
        <option
          children="Fangcheng (FAN)"
          value="Fangcheng (FAN)"
          {...getOverrideProps(overrides, "port10option33")}
        ></option>
        <option
          children="Futong (FTG)"
          value="Futong (FTG)"
          {...getOverrideProps(overrides, "port10option34")}
        ></option>
        <option
          children="Godau port  (GDP)"
          value="Godau port  (GDP)"
          {...getOverrideProps(overrides, "port10option35")}
        ></option>
        <option
          children="Haiphong (HPH)"
          value="Haiphong (HPH)"
          {...getOverrideProps(overrides, "port10option36")}
        ></option>
        <option
          children="Halong Bay (HLG)"
          value="Halong Bay (HLG)"
          {...getOverrideProps(overrides, "port10option37")}
        ></option>
        <option
          children="HO CHI MINH (HCM)"
          value="HO CHI MINH (HCM)"
          {...getOverrideProps(overrides, "port10option38")}
        ></option>
        <option
          children="Hon Gai (HON)"
          value="Hon Gai (HON)"
          {...getOverrideProps(overrides, "port10option39")}
        ></option>
        <option
          children="Hong Kong (HKG)"
          value="Hong Kong (HKG)"
          {...getOverrideProps(overrides, "port10option40")}
        ></option>
        <option
          children="Jakarta (JAK)"
          value="Jakarta (JAK)"
          {...getOverrideProps(overrides, "port10option41")}
        ></option>
        <option
          children="Jambi (JBI)"
          value="Jambi (JBI)"
          {...getOverrideProps(overrides, "port10option42")}
        ></option>
        <option
          children="K.K. Kota Kinabalu (KK)"
          value="K.K. Kota Kinabalu (KK)"
          {...getOverrideProps(overrides, "port10option43")}
        ></option>
        <option
          children="Kampot (KMP)"
          value="Kampot (KMP)"
          {...getOverrideProps(overrides, "port10option44")}
        ></option>
        <option
          children="Kantang (KTG)"
          value="Kantang (KTG)"
          {...getOverrideProps(overrides, "port10option45")}
        ></option>
        <option
          children="Kedah (KKH)"
          value="Kedah (KKH)"
          {...getOverrideProps(overrides, "port10option46")}
        ></option>
        <option
          children="Kelantan (KLT)"
          value="Kelantan (KLT)"
          {...getOverrideProps(overrides, "port10option47")}
        ></option>
        <option
          children="Kemaman (KMN)"
          value="Kemaman (KMN)"
          {...getOverrideProps(overrides, "port10option48")}
        ></option>
        <option
          children="Khanom (KHM)"
          value="Khanom (KHM)"
          {...getOverrideProps(overrides, "port10option49")}
        ></option>
        <option
          children="Ko Sichang (KSI)"
          value="Ko Sichang (KSI)"
          {...getOverrideProps(overrides, "port10option50")}
        ></option>
        <option
          children="Kolkata (CCU)"
          value="Kolkata (CCU)"
          {...getOverrideProps(overrides, "port10option51")}
        ></option>
        <option
          children="Kor Samui (KSM)"
          value="Kor Samui (KSM)"
          {...getOverrideProps(overrides, "port10option52")}
        ></option>
        <option
          children="Kuantan (KT)"
          value="Kuantan (KT)"
          {...getOverrideProps(overrides, "port10option53")}
        ></option>
        <option
          children="Kuching (KUC)"
          value="Kuching (KUC)"
          {...getOverrideProps(overrides, "port10option54")}
        ></option>
        <option
          children="Labuan (LBN)"
          value="Labuan (LBN)"
          {...getOverrideProps(overrides, "port10option55")}
        ></option>
        <option
          children="Laem Chabang (LCB)"
          value="Laem Chabang (LCB)"
          {...getOverrideProps(overrides, "port10option56")}
        ></option>
        <option
          children="Lahad Datu (LDU)"
          value="Lahad Datu (LDU)"
          {...getOverrideProps(overrides, "port10option57")}
        ></option>
        <option
          children="Lhokseumawe (LHOK)"
          value="Lhokseumawe (LHOK)"
          {...getOverrideProps(overrides, "port10option58")}
        ></option>
        <option
          children="Lumut (LUM)"
          value="Lumut (LUM)"
          {...getOverrideProps(overrides, "port10option59")}
        ></option>
        <option
          children="Maeklong (Firesun) (MKG)"
          value="Maeklong (Firesun) (MKG)"
          {...getOverrideProps(overrides, "port10option60")}
        ></option>
        <option
          children="Mahachai (MHI)"
          value="Mahachai (MHI)"
          {...getOverrideProps(overrides, "port10option61")}
        ></option>
        <option
          children="Makassar (MAK)"
          value="Makassar (MAK)"
          {...getOverrideProps(overrides, "port10option62")}
        ></option>
        <option
          children="Malacca (MAL)"
          value="Malacca (MAL)"
          {...getOverrideProps(overrides, "port10option63")}
        ></option>
        <option
          children="Manila Habour (MNL)"
          value="Manila Habour (MNL)"
          {...getOverrideProps(overrides, "port10option64")}
        ></option>
        <option
          children="Maptaphut (MAT)"
          value="Maptaphut (MAT)"
          {...getOverrideProps(overrides, "port10option65")}
        ></option>
        <option
          children="Marunda (MRD)"
          value="Marunda (MRD)"
          {...getOverrideProps(overrides, "port10option66")}
        ></option>
        <option
          children="Mawei Fuzhou (FOC)"
          value="Mawei Fuzhou (FOC)"
          {...getOverrideProps(overrides, "port10option67")}
        ></option>
        <option
          children="Muara (MUR)"
          value="Muara (MUR)"
          {...getOverrideProps(overrides, "port10option68")}
        ></option>
        <option
          children="My Tho (MUT)"
          value="My Tho (MUT)"
          {...getOverrideProps(overrides, "port10option69")}
        ></option>
        <option
          children="Nan Tong (NTG)"
          value="Nan Tong (NTG)"
          {...getOverrideProps(overrides, "port10option70")}
        ></option>
        <option
          children="Narathiwat (NAW)"
          value="Narathiwat (NAW)"
          {...getOverrideProps(overrides, "port10option71")}
        ></option>
        <option
          children="Nghi Son (NGH)"
          value="Nghi Son (NGH)"
          {...getOverrideProps(overrides, "port10option72")}
        ></option>
        <option
          children="Ningde (NDE)"
          value="Ningde (NDE)"
          {...getOverrideProps(overrides, "port10option73")}
        ></option>
        <option
          children="Nunukan (NNX)"
          value="Nunukan (NNX)"
          {...getOverrideProps(overrides, "port10option74")}
        ></option>
        <option
          children="Oknha Mong Port (OMP)"
          value="Oknha Mong Port (OMP)"
          {...getOverrideProps(overrides, "port10option75")}
        ></option>
        <option
          children="Onomichi (ONO)"
          value="Onomichi (ONO)"
          {...getOverrideProps(overrides, "port10option76")}
        ></option>
        <option
          children="Padang - Telux Buyur (TBR)"
          value="Padang - Telux Buyur (TBR)"
          {...getOverrideProps(overrides, "port10option77")}
        ></option>
        <option
          children="PAKAN Baru (PKRU)"
          value="PAKAN Baru (PKRU)"
          {...getOverrideProps(overrides, "port10option78")}
        ></option>
        <option
          children="Palembang (PLB)"
          value="Palembang (PLB)"
          {...getOverrideProps(overrides, "port10option79")}
        ></option>
        <option
          children="Panjang (PNJ)"
          value="Panjang (PNJ)"
          {...getOverrideProps(overrides, "port10option80")}
        ></option>
        <option
          children="Pasir Gudang (PAS)"
          value="Pasir Gudang (PAS)"
          {...getOverrideProps(overrides, "port10option81")}
        ></option>
        <option
          children="Patimban (PTB)"
          value="Patimban (PTB)"
          {...getOverrideProps(overrides, "port10option82")}
        ></option>
        <option
          children="Pattani (PTN)"
          value="Pattani (PTN)"
          {...getOverrideProps(overrides, "port10option83")}
        ></option>
        <option
          children="Penang (PNG)"
          value="Penang (PNG)"
          {...getOverrideProps(overrides, "port10option84")}
        ></option>
        <option
          children="Phnom Penh (PNH)"
          value="Phnom Penh (PNH)"
          {...getOverrideProps(overrides, "port10option85")}
        ></option>
        <option
          children="Phra Chulachomklao Fort (PCF)"
          value="Phra Chulachomklao Fort (PCF)"
          {...getOverrideProps(overrides, "port10option86")}
        ></option>
        <option
          children="Phuket (HKT)"
          value="Phuket (HKT)"
          {...getOverrideProps(overrides, "port10option87")}
        ></option>
        <option
          children="Phumy (PHU)"
          value="Phumy (PHU)"
          {...getOverrideProps(overrides, "port10option88")}
        ></option>
        <option
          children="Plathong Oil Rig (PATO)"
          value="Plathong Oil Rig (PATO)"
          {...getOverrideProps(overrides, "port10option89")}
        ></option>
        <option
          children="Pontianak (POT)"
          value="Pontianak (POT)"
          {...getOverrideProps(overrides, "port10option90")}
        ></option>
        <option
          children="Port Klang (PKL)"
          value="Port Klang (PKL)"
          {...getOverrideProps(overrides, "port10option91")}
        ></option>
        <option
          children="Port Moresby (PGPOM)"
          value="Port Moresby (PGPOM)"
          {...getOverrideProps(overrides, "port10option92")}
        ></option>
        <option
          children="Poso (POSO)"
          value="Poso (POSO)"
          {...getOverrideProps(overrides, "port10option93")}
        ></option>
        <option
          children="Pusan (PUS)"
          value="Pusan (PUS)"
          {...getOverrideProps(overrides, "port10option94")}
        ></option>
        <option
          children="Quinzhou (QZH)"
          value="Quinzhou (QZH)"
          {...getOverrideProps(overrides, "port10option95")}
        ></option>
        <option
          children="Quy Nhon (QNN)"
          value="Quy Nhon (QNN)"
          {...getOverrideProps(overrides, "port10option96")}
        ></option>
        <option
          children="Ranong (UNN)"
          value="Ranong (UNN)"
          {...getOverrideProps(overrides, "port10option97")}
        ></option>
        <option
          children="Rayong (IRPC)"
          value="Rayong (IRPC)"
          {...getOverrideProps(overrides, "port10option98")}
        ></option>
        <option
          children="Sampit (SMQ)"
          value="Sampit (SMQ)"
          {...getOverrideProps(overrides, "port10option99")}
        ></option>
        <option
          children="Sandakan (SAN)"
          value="Sandakan (SAN)"
          {...getOverrideProps(overrides, "port10option100")}
        ></option>
        <option
          children="Sarawak (SRW)"
          value="Sarawak (SRW)"
          {...getOverrideProps(overrides, "port10option101")}
        ></option>
        <option
          children="Sarekei (SRK)"
          value="Sarekei (SRK)"
          {...getOverrideProps(overrides, "port10option102")}
        ></option>
        <option
          children="Sattahip (SATP)"
          value="Sattahip (SATP)"
          {...getOverrideProps(overrides, "port10option103")}
        ></option>
        <option
          children="Semarang - Tanjung Emas (SRG)"
          value="Semarang - Tanjung Emas (SRG)"
          {...getOverrideProps(overrides, "port10option104")}
        ></option>
        <option
          children="Semarang (SRG)"
          value="Semarang (SRG)"
          {...getOverrideProps(overrides, "port10option105")}
        ></option>
        <option
          children="Sibu (SIB)"
          value="Sibu (SIB)"
          {...getOverrideProps(overrides, "port10option106")}
        ></option>
        <option
          children="Singapore (SG)"
          value="Singapore (SG)"
          {...getOverrideProps(overrides, "port10option107")}
        ></option>
        <option
          children="Sipitang (SIP)"
          value="Sipitang (SIP)"
          {...getOverrideProps(overrides, "port10option108")}
        ></option>
        <option
          children="Son Duong (SOD)"
          value="Son Duong (SOD)"
          {...getOverrideProps(overrides, "port10option109")}
        ></option>
        <option
          children="Songkhla (SK)"
          value="Songkhla (SK)"
          {...getOverrideProps(overrides, "port10option110")}
        ></option>
        <option
          children="Srihanoville (SIH)"
          value="Srihanoville (SIH)"
          {...getOverrideProps(overrides, "port10option111")}
        ></option>
        <option
          children="Sriracha Harbor (SRC)"
          value="Sriracha Harbor (SRC)"
          {...getOverrideProps(overrides, "port10option112")}
        ></option>
        <option
          children="Sritama Jetty (STM)"
          value="Sritama Jetty (STM)"
          {...getOverrideProps(overrides, "port10option113")}
        ></option>
        <option
          children="Steung Hav (SHV)"
          value="Steung Hav (SHV)"
          {...getOverrideProps(overrides, "port10option114")}
        ></option>
        <option
          children="Sungai Guntung (SGGT)"
          value="Sungai Guntung (SGGT)"
          {...getOverrideProps(overrides, "port10option115")}
        ></option>
        <option
          children="Surabaya (SUBY)"
          value="Surabaya (SUBY)"
          {...getOverrideProps(overrides, "port10option116")}
        ></option>
        <option
          children="Surat Thanee (SRT)"
          value="Surat Thanee (SRT)"
          {...getOverrideProps(overrides, "port10option117")}
        ></option>
        <option
          children="Tacloban (TAC)"
          value="Tacloban (TAC)"
          {...getOverrideProps(overrides, "port10option118")}
        ></option>
        <option
          children="Tagbilaran (TAG)"
          value="Tagbilaran (TAG)"
          {...getOverrideProps(overrides, "port10option119")}
        ></option>
        <option
          children="Tanjong Manis (TGM)"
          value="Tanjong Manis (TGM)"
          {...getOverrideProps(overrides, "port10option120")}
        ></option>
        <option
          children="Tanjung Batu (TJQ)"
          value="Tanjung Batu (TJQ)"
          {...getOverrideProps(overrides, "port10option121")}
        ></option>
        <option
          children="Tanjung Priok (TP)"
          value="Tanjung Priok (TP)"
          {...getOverrideProps(overrides, "port10option122")}
        ></option>
        <option
          children="Tarjun (TAR)"
          value="Tarjun (TAR)"
          {...getOverrideProps(overrides, "port10option123")}
        ></option>
        <option
          children="Tawau (TAW)"
          value="Tawau (TAW)"
          {...getOverrideProps(overrides, "port10option124")}
        ></option>
        <option
          children="Terengganu (TGG)"
          value="Terengganu (TGG)"
          {...getOverrideProps(overrides, "port10option125")}
        ></option>
        <option
          children="Tha Sala (TSL)"
          value="Tha Sala (TSL)"
          {...getOverrideProps(overrides, "port10option126")}
        ></option>
        <option
          children="Tsukumi (TSUM)"
          value="Tsukumi (TSUM)"
          {...getOverrideProps(overrides, "port10option127")}
        ></option>
        <option
          children="Vung Ang (VAG)"
          value="Vung Ang (VAG)"
          {...getOverrideProps(overrides, "port10option128")}
        ></option>
        <option
          children="Vung Tau (VUT)"
          value="Vung Tau (VUT)"
          {...getOverrideProps(overrides, "port10option129")}
        ></option>
        <option
          children="Yangon (RGN)"
          value="Yangon (RGN)"
          {...getOverrideProps(overrides, "port10option130")}
        ></option>
      </SelectField>
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(4, auto)"
        {...getOverrideProps(overrides, "RowGrid22")}
      >
        <TextField
          label="PDA Fees"
          type="number"
          step="any"
          value={port10_fees}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                currency_type,
                exchange_rate,
                diesel_rate,
                bunker_rate,
                lube_rate,
                port1,
                port1_fees,
                port1_port_call,
                port1_crane_usage,
                port1_surveying_fees,
                port2,
                port2_fees,
                port2_port_call,
                port2_crane_usage,
                port2_surveying_fees,
                port3,
                port3_fees,
                port3_port_call,
                port3_crane_usage,
                port3_surveying_fees,
                port4,
                port4_fees,
                port4_port_call,
                port4_crane_usage,
                port4_surveying_fees,
                port5,
                port5_fees,
                port5_port_call,
                port5_crane_usage,
                port5_surveying_fees,
                port6,
                port6_fees,
                port6_port_call,
                port6_crane_usage,
                port6_surveying_fees,
                port7,
                port7_fees,
                port7_port_call,
                port7_crane_usage,
                port7_surveying_fees,
                port8,
                port8_fees,
                port8_port_call,
                port8_crane_usage,
                port8_surveying_fees,
                port9,
                port9_fees,
                port9_port_call,
                port9_crane_usage,
                port9_surveying_fees,
                port10,
                port10_fees: value,
                port10_port_call,
                port10_crane_usage,
                port10_surveying_fees,
                cargo1_type,
                cargo1_quantity,
                cargo1_rate,
                cargo1_brokerage_fees,
                cargo2_type,
                cargo2_quantity,
                cargo2_rate,
                cargo2_brokerage_fees,
                cargo3_type,
                cargo3_quantity,
                cargo3_rate,
                cargo3_brokerage_fees,
                cargo4_type,
                cargo4_quantity,
                cargo4_rate,
                cargo4_brokerage_fees,
                cargo5_type,
                cargo5_quantity,
                cargo5_rate,
                cargo5_brokerage_fees,
                cargo6_type,
                cargo6_quantity,
                cargo6_rate,
                cargo6_brokerage_fees,
                voyageBonus,
                miscCosts,
              };
              const result = onChange(modelFields);
              value = result?.port10_fees ?? value;
            }
            if (errors.port10_fees?.hasError) {
              runValidationTasks("port10_fees", value);
            }
            setport10_fees(value);
          }}
          onBlur={() => runValidationTasks("port10_fees", port10_fees)}
          errorMessage={errors.port10_fees?.errorMessage}
          hasError={errors.port10_fees?.hasError}
          {...getOverrideProps(overrides, "port10_fees")}
        ></TextField>
        <TextField
          label="Port Call (Days)"
          type="number"
          step="any"
          value={port10_port_call}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                currency_type,
                exchange_rate,
                diesel_rate,
                bunker_rate,
                lube_rate,
                port1,
                port1_fees,
                port1_port_call,
                port1_crane_usage,
                port1_surveying_fees,
                port2,
                port2_fees,
                port2_port_call,
                port2_crane_usage,
                port2_surveying_fees,
                port3,
                port3_fees,
                port3_port_call,
                port3_crane_usage,
                port3_surveying_fees,
                port4,
                port4_fees,
                port4_port_call,
                port4_crane_usage,
                port4_surveying_fees,
                port5,
                port5_fees,
                port5_port_call,
                port5_crane_usage,
                port5_surveying_fees,
                port6,
                port6_fees,
                port6_port_call,
                port6_crane_usage,
                port6_surveying_fees,
                port7,
                port7_fees,
                port7_port_call,
                port7_crane_usage,
                port7_surveying_fees,
                port8,
                port8_fees,
                port8_port_call,
                port8_crane_usage,
                port8_surveying_fees,
                port9,
                port9_fees,
                port9_port_call,
                port9_crane_usage,
                port9_surveying_fees,
                port10,
                port10_fees,
                port10_port_call: value,
                port10_crane_usage,
                port10_surveying_fees,
                cargo1_type,
                cargo1_quantity,
                cargo1_rate,
                cargo1_brokerage_fees,
                cargo2_type,
                cargo2_quantity,
                cargo2_rate,
                cargo2_brokerage_fees,
                cargo3_type,
                cargo3_quantity,
                cargo3_rate,
                cargo3_brokerage_fees,
                cargo4_type,
                cargo4_quantity,
                cargo4_rate,
                cargo4_brokerage_fees,
                cargo5_type,
                cargo5_quantity,
                cargo5_rate,
                cargo5_brokerage_fees,
                cargo6_type,
                cargo6_quantity,
                cargo6_rate,
                cargo6_brokerage_fees,
                voyageBonus,
                miscCosts,
              };
              const result = onChange(modelFields);
              value = result?.port10_port_call ?? value;
            }
            if (errors.port10_port_call?.hasError) {
              runValidationTasks("port10_port_call", value);
            }
            setport10_port_call(value);
          }}
          onBlur={() => runValidationTasks("port10_port_call", port10_port_call)}
          errorMessage={errors.port10_port_call?.errorMessage}
          hasError={errors.port10_port_call?.hasError}
          {...getOverrideProps(overrides, "port10_port_call")}
        ></TextField>
        <TextField
          label="Crane Usage (Hours)"
          type="number"
          step="any"
          value={port10_crane_usage}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                currency_type,
                exchange_rate,
                diesel_rate,
                bunker_rate,
                lube_rate,
                port1,
                port1_fees,
                port1_port_call,
                port1_crane_usage,
                port1_surveying_fees,
                port2,
                port2_fees,
                port2_port_call,
                port2_crane_usage,
                port2_surveying_fees,
                port3,
                port3_fees,
                port3_port_call,
                port3_crane_usage,
                port3_surveying_fees,
                port4,
                port4_fees,
                port4_port_call,
                port4_crane_usage,
                port4_surveying_fees,
                port5,
                port5_fees,
                port5_port_call,
                port5_crane_usage,
                port5_surveying_fees,
                port6,
                port6_fees,
                port6_port_call,
                port6_crane_usage,
                port6_surveying_fees,
                port7,
                port7_fees,
                port7_port_call,
                port7_crane_usage,
                port7_surveying_fees,
                port8,
                port8_fees,
                port8_port_call,
                port8_crane_usage,
                port8_surveying_fees,
                port9,
                port9_fees,
                port9_port_call,
                port9_crane_usage,
                port9_surveying_fees,
                port10,
                port10_fees,
                port10_port_call,
                port10_crane_usage: value,
                port10_surveying_fees,
                cargo1_type,
                cargo1_quantity,
                cargo1_rate,
                cargo1_brokerage_fees,
                cargo2_type,
                cargo2_quantity,
                cargo2_rate,
                cargo2_brokerage_fees,
                cargo3_type,
                cargo3_quantity,
                cargo3_rate,
                cargo3_brokerage_fees,
                cargo4_type,
                cargo4_quantity,
                cargo4_rate,
                cargo4_brokerage_fees,
                cargo5_type,
                cargo5_quantity,
                cargo5_rate,
                cargo5_brokerage_fees,
                cargo6_type,
                cargo6_quantity,
                cargo6_rate,
                cargo6_brokerage_fees,
                voyageBonus,
                miscCosts,
              };
              const result = onChange(modelFields);
              value = result?.port10_crane_usage ?? value;
            }
            if (errors.port10_crane_usage?.hasError) {
              runValidationTasks("port10_crane_usage", value);
            }
            setport10_crane_usage(value);
          }}
          onBlur={() =>
            runValidationTasks("port10_crane_usage", port10_crane_usage)
          }
          errorMessage={errors.port10_crane_usage?.errorMessage}
          hasError={errors.port10_crane_usage?.hasError}
          {...getOverrideProps(overrides, "port10_crane_usage")}
        ></TextField>
        <TextField
          label="Surveying Fees"
          type="number"
          step="any"
          value={port10_surveying_fees}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                currency_type,
                exchange_rate,
                diesel_rate,
                bunker_rate,
                lube_rate,
                port1,
                port1_fees,
                port1_port_call,
                port1_crane_usage,
                port1_surveying_fees,
                port2,
                port2_fees,
                port2_port_call,
                port2_crane_usage,
                port2_surveying_fees,
                port3,
                port3_fees,
                port3_port_call,
                port3_crane_usage,
                port3_surveying_fees,
                port4,
                port4_fees,
                port4_port_call,
                port4_crane_usage,
                port4_surveying_fees,
                port5,
                port5_fees,
                port5_port_call,
                port5_crane_usage,
                port5_surveying_fees,
                port6,
                port6_fees,
                port6_port_call,
                port6_crane_usage,
                port6_surveying_fees,
                port7,
                port7_fees,
                port7_port_call,
                port7_crane_usage,
                port7_surveying_fees,
                port8,
                port8_fees,
                port8_port_call,
                port8_crane_usage,
                port8_surveying_fees,
                port9,
                port9_fees,
                port9_port_call,
                port9_crane_usage,
                port9_surveying_fees,
                port10,
                port10_fees,
                port10_port_call,
                port10_crane_usage,
                port10_surveying_fees: value,
                cargo1_type,
                cargo1_quantity,
                cargo1_rate,
                cargo1_brokerage_fees,
                cargo2_type,
                cargo2_quantity,
                cargo2_rate,
                cargo2_brokerage_fees,
                cargo3_type,
                cargo3_quantity,
                cargo3_rate,
                cargo3_brokerage_fees,
                cargo4_type,
                cargo4_quantity,
                cargo4_rate,
                cargo4_brokerage_fees,
                cargo5_type,
                cargo5_quantity,
                cargo5_rate,
                cargo5_brokerage_fees,
                cargo6_type,
                cargo6_quantity,
                cargo6_rate,
                cargo6_brokerage_fees,
                voyageBonus,
                miscCosts,
              };
              const result = onChange(modelFields);
              value = result?.port10_surveying_fees ?? value;
            }
            if (errors.port10_surveying_fees?.hasError) {
              runValidationTasks("port10_surveying_fees", value);
            }
            setport10_surveying_fees(value);
          }}
          onBlur={() =>
            runValidationTasks("port10_surveying_fees", port10_surveying_fees)
          }
          errorMessage={errors.port10_surveying_fees?.errorMessage}
          hasError={errors.port10_surveying_fees?.hasError}
          {...getOverrideProps(overrides, "port10_surveying_fees")}
        ></TextField>
      </Grid>

      <Divider
        orientation="horizontal"
        {...getOverrideProps(overrides, "SectionalElement2")}
      ></Divider>
      <Heading
        level={3}
        children="Cargo Information"
        {...getOverrideProps(overrides, "SectionalElement3")}
      ></Heading>
      <SelectField
        label={<span style={{ fontWeight: 'bold' }}>Cargo 1</span>}
        placeholder="Please select an option"
        value={cargo1_type}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              currency_type,
              exchange_rate,
              diesel_rate,
              bunker_rate,
              lube_rate,
              port1,
              port1_fees,
              port1_port_call,
              port1_crane_usage,
              port1_surveying_fees,
              port2,
              port2_fees,
              port2_port_call,
              port2_crane_usage,
              port2_surveying_fees,
              port3,
              port3_fees,
              port3_port_call,
              port3_crane_usage,
              port3_surveying_fees,
              port4,
              port4_fees,
              port4_port_call,
              port4_crane_usage,
              port4_surveying_fees,
              port5,
              port5_fees,
              port5_port_call,
              port5_crane_usage,
              port5_surveying_fees,
              port6,
              port6_fees,
              port6_port_call,
              port6_crane_usage,
              port6_surveying_fees,
              port7,
              port7_fees,
              port7_port_call,
              port7_crane_usage,
              port7_surveying_fees,
              port8,
              port8_fees,
              port8_port_call,
              port8_crane_usage,
              port8_surveying_fees,
              port9,
              port9_fees,
              port9_port_call,
              port9_crane_usage,
              port9_surveying_fees,
              port10,
              port10_fees,
              port10_port_call,
              port10_crane_usage,
              port10_surveying_fees,
              cargo1_type: value,
              cargo1_quantity,
              cargo1_rate,
              cargo1_brokerage_fees,
              cargo2_type,
              cargo2_quantity,
              cargo2_rate,
              cargo2_brokerage_fees,
              cargo3_type,
              cargo3_quantity,
              cargo3_rate,
              cargo3_brokerage_fees,
              cargo4_type,
              cargo4_quantity,
              cargo4_rate,
              cargo4_brokerage_fees,
              cargo5_type,
              cargo5_quantity,
              cargo5_rate,
              cargo5_brokerage_fees,
              cargo6_type,
              cargo6_quantity,
              cargo6_rate,
              cargo6_brokerage_fees,
              voyageBonus,
              miscCosts,
            };
            const result = onChange(modelFields);
            value = result?.cargo1_type ?? value;
          }
          if (errors.cargo1_type?.hasError) {
            runValidationTasks("cargo1_type", value);
          }
          setCargo1_type(value);
        }}
        onBlur={() => runValidationTasks("cargo1_type", cargo1_type)}
        errorMessage={errors.cargo1_type?.errorMessage}
        hasError={errors.cargo1_type?.hasError}
        {...getOverrideProps(overrides, "cargo1_type")}
      >
        <option
          children="NIL"
          value="NIL"
          {...getOverrideProps(overrides, "cargo1_typeoption0")}
        ></option>
        <option
          children="Barite"
          value="Barite"
          {...getOverrideProps(overrides, "cargo1_typeoption1")}
        ></option>
        <option
          children="Barley"
          value="Barley"
          {...getOverrideProps(overrides, "cargo1_typeoption2")}
        ></option>
        <option
          children="Charcoal"
          value="Charcoal"
          {...getOverrideProps(overrides, "cargo1_typeoption3")}
        ></option>
        <option
          children="Cement"
          value="Cement"
          {...getOverrideProps(overrides, "cargo1_typeoption4")}
        ></option>
        <option
          children="Cold Rolled Coil"
          value="Cold Rolled Coil"
          {...getOverrideProps(overrides, "cargo1_typeoption5")}
        ></option>
        <option
          children="Containers"
          value="Containers"
          {...getOverrideProps(overrides, "cargo1_typeoption6")}
        ></option>
        <option
          children="Dickite"
          value="Dickite"
          {...getOverrideProps(overrides, "cargo1_typeoption7")}
        ></option>
        <option
          children="Dolomite"
          value="Dolomite"
          {...getOverrideProps(overrides, "cargo1_typeoption8")}
        ></option>
        <option
          children="Feldspar"
          value="Feldspar"
          {...getOverrideProps(overrides, "cargo1_typeoption9")}
        ></option>
        <option
          children="Fertilizer"
          value="Fertilizer"
          {...getOverrideProps(overrides, "cargo1_typeoption10")}
        ></option>
        <option
          children="Hot Rolled Coil"
          value="Hot Rolled Coil"
          {...getOverrideProps(overrides, "cargo1_typeoption11")}
        ></option>
        <option
          children="Maize"
          value="Maize"
          {...getOverrideProps(overrides, "cargo1_typeoption12")}
        ></option>
        <option
          children="Palm Kernel Shell (PKS)"
          value="Palm Kernel Shell (PKS)"
          {...getOverrideProps(overrides, "cargo1_typeoption13")}
        ></option>
        <option
          children="Palm Kernel Expeller (PKE)"
          value="Palm Kernel Expeller (PKE)"
          {...getOverrideProps(overrides, "cargo1_typeoption14")}
        ></option>
        <option
          children="Plastic Resin"
          value="Plastic Resin"
          {...getOverrideProps(overrides, "cargo1_typeoption15")}
        ></option>
        <option
          children="Project Cargo"
          value="Project Cargo"
          {...getOverrideProps(overrides, "cargo1_typeoption16")}
        ></option>
        <option
          children="Rice"
          value="Rice"
          {...getOverrideProps(overrides, "cargo1_typeoption17")}
        ></option>
        <option
          children="Salt"
          value="Salt"
          {...getOverrideProps(overrides, "cargo1_typeoption18")}
        ></option>
        <option
          children="Salt and Flour"
          value="Salt and Flour"
          {...getOverrideProps(overrides, "cargo1_typeoption19")}
        ></option>
        <option
          children="Silica Sand"
          value="Silica Sand"
          {...getOverrideProps(overrides, "cargo1_typeoption20")}
        ></option>
        <option
          children="Sodium Sulphate Anhydrous"
          value="Sodium Sulphate Anhydrous"
          {...getOverrideProps(overrides, "cargo1_typeoption21")}
        ></option>
        <option
          children="Soy Bean Meal"
          value="Soy Bean Meal"
          {...getOverrideProps(overrides, "cargo1_typeoption22")}
        ></option>
        <option
          children="Steel Coil"
          value="Steel Coil"
          {...getOverrideProps(overrides, "cargo1_typeoption23")}
        ></option>
        <option
          children="Steel Product"
          value="Steel Coil"
          {...getOverrideProps(overrides, "cargo1_typeoption24")}
        ></option>
        <option
          children="Tapioca"
          value="Tapioca"
          {...getOverrideProps(overrides, "cargo1_typeoption25")}
        ></option>
        <option
          children="Tapioca (Jumbo)"
          value="Tapioca (Jumbo)"
          {...getOverrideProps(overrides, "cargo1_typeoption26")}
        ></option>
        <option
          children="Tapioca Pellet"
          value="Tapioca Pellet"
          {...getOverrideProps(overrides, "cargo1_typeoption27")}
        ></option>
        <option
          children="Timber"
          value="Timber"
          {...getOverrideProps(overrides, "cargo1_typeoption28")}
        ></option>
        <option
          children="Titimas Bleaching Earth"
          value="Titimas Bleaching Earth"
          {...getOverrideProps(overrides, "cargo1_typeoption29")}
        ></option>
        <option
          children="Urea"
          value="Urea"
          {...getOverrideProps(overrides, "cargo1_typeoption29")}
        ></option>
        <option
          children="Wheat"
          value="Wheat"
          {...getOverrideProps(overrides, "cargo1_typeoption31")}
        ></option>
        <option
          children="Wood Chips"
          value="Wood Chips"
          {...getOverrideProps(overrides, "cargo1_typeoption31")}
        ></option>
        <option
          children="Wood Pellets"
          value="Wood Pellets"
          {...getOverrideProps(overrides, "cargo1_typeoption32")}
        ></option>
      </SelectField>
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(3, auto)"
        {...getOverrideProps(overrides, "RowGrid23")}
      >
        <TextField
          label="Quantity (MT)"
          type="number"
          step="any"
          value={cargo1_quantity}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                currency_type,
                exchange_rate,
                diesel_rate,
                bunker_rate,
                lube_rate,
                port1,
                port1_fees,
                port1_port_call,
                port1_crane_usage,
                port1_surveying_fees,
                port2,
                port2_fees,
                port2_port_call,
                port2_crane_usage,
                port2_surveying_fees,
                port3,
                port3_fees,
                port3_port_call,
                port3_crane_usage,
                port3_surveying_fees,
                port4,
                port4_fees,
                port4_port_call,
                port4_crane_usage,
                port4_surveying_fees,
                port5,
                port5_fees,
                port5_port_call,
                port5_crane_usage,
                port5_surveying_fees,
                port6,
                port6_fees,
                port6_port_call,
                port6_crane_usage,
                port6_surveying_fees,
                port7,
                port7_fees,
                port7_port_call,
                port7_crane_usage,
                port7_surveying_fees,
                port8,
                port8_fees,
                port8_port_call,
                port8_crane_usage,
                port8_surveying_fees,
                port9,
                port9_fees,
                port9_port_call,
                port9_crane_usage,
                port9_surveying_fees,
                port10,
                port10_fees,
                port10_port_call,
                port10_crane_usage,
                port10_surveying_fees,
                cargo1_type,
                cargo1_quantity: value,
                cargo1_rate,
                cargo1_brokerage_fees,
                cargo2_type,
                cargo2_quantity,
                cargo2_rate,
                cargo2_brokerage_fees,
                cargo3_type,
                cargo3_quantity,
                cargo3_rate,
                cargo3_brokerage_fees,
                cargo4_type,
                cargo4_quantity,
                cargo4_rate,
                cargo4_brokerage_fees,
                cargo5_type,
                cargo5_quantity,
                cargo5_rate,
                cargo5_brokerage_fees,
                cargo6_type,
                cargo6_quantity,
                cargo6_rate,
                cargo6_brokerage_fees,
                voyageBonus,
                miscCosts,
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
          type="number"
          step="any"
          value={cargo1_rate}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                currency_type,
                exchange_rate,
                diesel_rate,
                bunker_rate,
                lube_rate,
                port1,
                port1_fees,
                port1_port_call,
                port1_crane_usage,
                port1_surveying_fees,
                port2,
                port2_fees,
                port2_port_call,
                port2_crane_usage,
                port2_surveying_fees,
                port3,
                port3_fees,
                port3_port_call,
                port3_crane_usage,
                port3_surveying_fees,
                port4,
                port4_fees,
                port4_port_call,
                port4_crane_usage,
                port4_surveying_fees,
                port5,
                port5_fees,
                port5_port_call,
                port5_crane_usage,
                port5_surveying_fees,
                port6,
                port6_fees,
                port6_port_call,
                port6_crane_usage,
                port6_surveying_fees,
                port7,
                port7_fees,
                port7_port_call,
                port7_crane_usage,
                port7_surveying_fees,
                port8,
                port8_fees,
                port8_port_call,
                port8_crane_usage,
                port8_surveying_fees,
                port9,
                port9_fees,
                port9_port_call,
                port9_crane_usage,
                port9_surveying_fees,
                port10,
                port10_fees,
                port10_port_call,
                port10_crane_usage,
                port10_surveying_fees,
                cargo1_type,
                cargo1_quantity,
                cargo1_rate: value,
                cargo1_brokerage_fees,
                cargo2_type,
                cargo2_quantity,
                cargo2_rate,
                cargo2_brokerage_fees,
                cargo3_type,
                cargo3_quantity,
                cargo3_rate,
                cargo3_brokerage_fees,
                cargo4_type,
                cargo4_quantity,
                cargo4_rate,
                cargo4_brokerage_fees,
                cargo5_type,
                cargo5_quantity,
                cargo5_rate,
                cargo5_brokerage_fees,
                cargo6_type,
                cargo6_quantity,
                cargo6_rate,
                cargo6_brokerage_fees,
                voyageBonus,
                miscCosts,
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
          label="Brokerage Fees (%)"
          type="number"
          step="any"
          value={cargo1_brokerage_fees}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                currency_type,
                exchange_rate,
                diesel_rate,
                bunker_rate,
                lube_rate,
                port1,
                port1_fees,
                port1_port_call,
                port1_crane_usage,
                port1_surveying_fees,
                port2,
                port2_fees,
                port2_port_call,
                port2_crane_usage,
                port2_surveying_fees,
                port3,
                port3_fees,
                port3_port_call,
                port3_crane_usage,
                port3_surveying_fees,
                port4,
                port4_fees,
                port4_port_call,
                port4_crane_usage,
                port4_surveying_fees,
                port5,
                port5_fees,
                port5_port_call,
                port5_crane_usage,
                port5_surveying_fees,
                port6,
                port6_fees,
                port6_port_call,
                port6_crane_usage,
                port6_surveying_fees,
                port7,
                port7_fees,
                port7_port_call,
                port7_crane_usage,
                port7_surveying_fees,
                port8,
                port8_fees,
                port8_port_call,
                port8_crane_usage,
                port8_surveying_fees,
                port9,
                port9_fees,
                port9_port_call,
                port9_crane_usage,
                port9_surveying_fees,
                port10,
                port10_fees,
                port10_port_call,
                port10_crane_usage,
                port10_surveying_fees,
                cargo1_type,
                cargo1_quantity,
                cargo1_rate,
                cargo1_brokerage_fees: value,
                cargo2_type,
                cargo2_quantity,
                cargo2_rate,
                cargo2_brokerage_fees,
                cargo3_type,
                cargo3_quantity,
                cargo3_rate,
                cargo3_brokerage_fees,
                cargo4_type,
                cargo4_quantity,
                cargo4_rate,
                cargo4_brokerage_fees,
                cargo5_type,
                cargo5_quantity,
                cargo5_rate,
                cargo5_brokerage_fees,
                cargo6_type,
                cargo6_quantity,
                cargo6_rate,
                cargo6_brokerage_fees,
                voyageBonus,
                miscCosts,
              };
              const result = onChange(modelFields);
              value = result?.cargo1_brokerage_fees ?? value;
            }
            if (errors.cargo1_brokerage_fees?.hasError) {
              runValidationTasks("cargo1_brokerage_fees", value);
            }
            setCargo1_brokerage_fees(value);
          }}
          onBlur={() =>
            runValidationTasks("cargo1_brokerage_fees", cargo1_brokerage_fees)
          }
          errorMessage={errors.cargo1_brokerage_fees?.errorMessage}
          hasError={errors.cargo1_brokerage_fees?.hasError}
          {...getOverrideProps(overrides, "cargo1_brokerage_fees")}
        ></TextField>
      </Grid>
      <SelectField
        label={<span style={{ fontWeight: 'bold' }}>Cargo 2</span>}
        placeholder="Please select an option"
        value={cargo2_type}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              currency_type,
              exchange_rate,
              diesel_rate,
              bunker_rate,
              lube_rate,
              port1,
              port1_fees,
              port1_port_call,
              port1_crane_usage,
              port1_surveying_fees,
              port2,
              port2_fees,
              port2_port_call,
              port2_crane_usage,
              port2_surveying_fees,
              port3,
              port3_fees,
              port3_port_call,
              port3_crane_usage,
              port3_surveying_fees,
              port4,
              port4_fees,
              port4_port_call,
              port4_crane_usage,
              port4_surveying_fees,
              port5,
              port5_fees,
              port5_port_call,
              port5_crane_usage,
              port5_surveying_fees,
              port6,
              port6_fees,
              port6_port_call,
              port6_crane_usage,
              port6_surveying_fees,
              port7,
              port7_fees,
              port7_port_call,
              port7_crane_usage,
              port7_surveying_fees,
              port8,
              port8_fees,
              port8_port_call,
              port8_crane_usage,
              port8_surveying_fees,
              port9,
              port9_fees,
              port9_port_call,
              port9_crane_usage,
              port9_surveying_fees,
              port10,
              port10_fees,
              port10_port_call,
              port10_crane_usage,
              port10_surveying_fees,
              cargo1_type,
              cargo1_quantity,
              cargo1_rate,
              cargo1_brokerage_fees,
              cargo2_type: value,
              cargo2_quantity,
              cargo2_rate,
              cargo2_brokerage_fees,
              cargo3_type,
              cargo3_quantity,
              cargo3_rate,
              cargo3_brokerage_fees,
              cargo4_type,
              cargo4_quantity,
              cargo4_rate,
              cargo4_brokerage_fees,
              cargo5_type,
              cargo5_quantity,
              cargo5_rate,
              cargo5_brokerage_fees,
              cargo6_type,
              cargo6_quantity,
              cargo6_rate,
              cargo6_brokerage_fees,
              voyageBonus,
              miscCosts,
            };
            const result = onChange(modelFields);
            value = result?.cargo2_type ?? value;
          }
          if (errors.cargo2_type?.hasError) {
            runValidationTasks("cargo2_type", value);
          }
          setCargo2_type(value);
        }}
        onBlur={() => runValidationTasks("cargo2_type", cargo2_type)}
        errorMessage={errors.cargo2_type?.errorMessage}
        hasError={errors.cargo2_type?.hasError}
        {...getOverrideProps(overrides, "cargo2_type")}
      >
        <option
          children="NIL"
          value="NIL"
          {...getOverrideProps(overrides, "cargo1_typeoption0")}
        ></option>
        <option
          children="Barite"
          value="Barite"
          {...getOverrideProps(overrides, "cargo1_typeoption1")}
        ></option>
        <option
          children="Barley"
          value="Barley"
          {...getOverrideProps(overrides, "cargo1_typeoption2")}
        ></option>
        <option
          children="Charcoal"
          value="Charcoal"
          {...getOverrideProps(overrides, "cargo1_typeoption3")}
        ></option>
        <option
          children="Cement"
          value="Cement"
          {...getOverrideProps(overrides, "cargo1_typeoption4")}
        ></option>
        <option
          children="Cold Rolled Coil"
          value="Cold Rolled Coil"
          {...getOverrideProps(overrides, "cargo1_typeoption5")}
        ></option>
        <option
          children="Containers"
          value="Containers"
          {...getOverrideProps(overrides, "cargo1_typeoption6")}
        ></option>
        <option
          children="Dickite"
          value="Dickite"
          {...getOverrideProps(overrides, "cargo1_typeoption7")}
        ></option>
        <option
          children="Dolomite"
          value="Dolomite"
          {...getOverrideProps(overrides, "cargo1_typeoption8")}
        ></option>
        <option
          children="Feldspar"
          value="Feldspar"
          {...getOverrideProps(overrides, "cargo1_typeoption9")}
        ></option>
        <option
          children="Fertilizer"
          value="Fertilizer"
          {...getOverrideProps(overrides, "cargo1_typeoption10")}
        ></option>
        <option
          children="Hot Rolled Coil"
          value="Hot Rolled Coil"
          {...getOverrideProps(overrides, "cargo1_typeoption11")}
        ></option>
        <option
          children="Maize"
          value="Maize"
          {...getOverrideProps(overrides, "cargo1_typeoption12")}
        ></option>
        <option
          children="Palm Kernel Shell (PKS)"
          value="Palm Kernel Shell (PKS)"
          {...getOverrideProps(overrides, "cargo1_typeoption13")}
        ></option>
        <option
          children="Palm Kernel Expeller (PKE)"
          value="Palm Kernel Expeller (PKE)"
          {...getOverrideProps(overrides, "cargo1_typeoption14")}
        ></option>
        <option
          children="Plastic Resin"
          value="Plastic Resin"
          {...getOverrideProps(overrides, "cargo1_typeoption15")}
        ></option>
        <option
          children="Project Cargo"
          value="Project Cargo"
          {...getOverrideProps(overrides, "cargo1_typeoption16")}
        ></option>
        <option
          children="Rice"
          value="Rice"
          {...getOverrideProps(overrides, "cargo1_typeoption17")}
        ></option>
        <option
          children="Salt"
          value="Salt"
          {...getOverrideProps(overrides, "cargo1_typeoption18")}
        ></option>
        <option
          children="Salt and Flour"
          value="Salt and Flour"
          {...getOverrideProps(overrides, "cargo1_typeoption19")}
        ></option>
        <option
          children="Silica Sand"
          value="Silica Sand"
          {...getOverrideProps(overrides, "cargo1_typeoption20")}
        ></option>
        <option
          children="Sodium Sulphate Anhydrous"
          value="Sodium Sulphate Anhydrous"
          {...getOverrideProps(overrides, "cargo1_typeoption21")}
        ></option>
        <option
          children="Soy Bean Meal"
          value="Soy Bean Meal"
          {...getOverrideProps(overrides, "cargo1_typeoption22")}
        ></option>
        <option
          children="Steel Coil"
          value="Steel Coil"
          {...getOverrideProps(overrides, "cargo1_typeoption23")}
        ></option>
        <option
          children="Steel Product"
          value="Steel Coil"
          {...getOverrideProps(overrides, "cargo1_typeoption24")}
        ></option>
        <option
          children="Tapioca"
          value="Tapioca"
          {...getOverrideProps(overrides, "cargo1_typeoption25")}
        ></option>
        <option
          children="Tapioca (Jumbo)"
          value="Tapioca (Jumbo)"
          {...getOverrideProps(overrides, "cargo1_typeoption26")}
        ></option>
        <option
          children="Tapioca Pellet"
          value="Tapioca Pellet"
          {...getOverrideProps(overrides, "cargo1_typeoption27")}
        ></option>
        <option
          children="Timber"
          value="Timber"
          {...getOverrideProps(overrides, "cargo1_typeoption28")}
        ></option>
        <option
          children="Titimas Bleaching Earth"
          value="Titimas Bleaching Earth"
          {...getOverrideProps(overrides, "cargo1_typeoption29")}
        ></option>
        <option
          children="Urea"
          value="Urea"
          {...getOverrideProps(overrides, "cargo1_typeoption29")}
        ></option>
        <option
          children="Wheat"
          value="Wheat"
          {...getOverrideProps(overrides, "cargo1_typeoption31")}
        ></option>
        <option
          children="Wood Chips"
          value="Wood Chips"
          {...getOverrideProps(overrides, "cargo1_typeoption31")}
        ></option>
        <option
          children="Wood Pellets"
          value="Wood Pellets"
          {...getOverrideProps(overrides, "cargo1_typeoption32")}
        ></option>
      </SelectField>
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(3, auto)"
        {...getOverrideProps(overrides, "RowGrid25")}
      >
        <TextField
          label="Quantity (MT)"
          type="number"
          step="any"
          value={cargo2_quantity}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                currency_type,
                exchange_rate,
                diesel_rate,
                bunker_rate,
                lube_rate,
                port1,
                port1_fees,
                port1_port_call,
                port1_crane_usage,
                port1_surveying_fees,
                port2,
                port2_fees,
                port2_port_call,
                port2_crane_usage,
                port2_surveying_fees,
                port3,
                port3_fees,
                port3_port_call,
                port3_crane_usage,
                port3_surveying_fees,
                port4,
                port4_fees,
                port4_port_call,
                port4_crane_usage,
                port4_surveying_fees,
                port5,
                port5_fees,
                port5_port_call,
                port5_crane_usage,
                port5_surveying_fees,
                port6,
                port6_fees,
                port6_port_call,
                port6_crane_usage,
                port6_surveying_fees,
                port7,
                port7_fees,
                port7_port_call,
                port7_crane_usage,
                port7_surveying_fees,
                port8,
                port8_fees,
                port8_port_call,
                port8_crane_usage,
                port8_surveying_fees,
                port9,
                port9_fees,
                port9_port_call,
                port9_crane_usage,
                port9_surveying_fees,
                port10,
                port10_fees,
                port10_port_call,
                port10_crane_usage,
                port10_surveying_fees,
                cargo1_type,
                cargo1_quantity,
                cargo1_rate,
                cargo1_brokerage_fees,
                cargo2_type,
                cargo2_quantity: value,
                cargo2_rate,
                cargo2_brokerage_fees,
                cargo3_type,
                cargo3_quantity,
                cargo3_rate,
                cargo3_brokerage_fees,
                cargo4_type,
                cargo4_quantity,
                cargo4_rate,
                cargo4_brokerage_fees,
                cargo5_type,
                cargo5_quantity,
                cargo5_rate,
                cargo5_brokerage_fees,
                cargo6_type,
                cargo6_quantity,
                cargo6_rate,
                cargo6_brokerage_fees,
                voyageBonus,
                miscCosts,
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
          type="number"
          step="any"
          value={cargo2_rate}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                currency_type,
                exchange_rate,
                diesel_rate,
                bunker_rate,
                lube_rate,
                port1,
                port1_fees,
                port1_port_call,
                port1_crane_usage,
                port1_surveying_fees,
                port2,
                port2_fees,
                port2_port_call,
                port2_crane_usage,
                port2_surveying_fees,
                port3,
                port3_fees,
                port3_port_call,
                port3_crane_usage,
                port3_surveying_fees,
                port4,
                port4_fees,
                port4_port_call,
                port4_crane_usage,
                port4_surveying_fees,
                port5,
                port5_fees,
                port5_port_call,
                port5_crane_usage,
                port5_surveying_fees,
                port6,
                port6_fees,
                port6_port_call,
                port6_crane_usage,
                port6_surveying_fees,
                port7,
                port7_fees,
                port7_port_call,
                port7_crane_usage,
                port7_surveying_fees,
                port8,
                port8_fees,
                port8_port_call,
                port8_crane_usage,
                port8_surveying_fees,
                port9,
                port9_fees,
                port9_port_call,
                port9_crane_usage,
                port9_surveying_fees,
                port10,
                port10_fees,
                port10_port_call,
                port10_crane_usage,
                port10_surveying_fees,
                cargo1_type,
                cargo1_quantity,
                cargo1_rate,
                cargo1_brokerage_fees,
                cargo2_type,
                cargo2_quantity,
                cargo2_rate: value,
                cargo2_brokerage_fees,
                cargo3_type,
                cargo3_quantity,
                cargo3_rate,
                cargo3_brokerage_fees,
                cargo4_type,
                cargo4_quantity,
                cargo4_rate,
                cargo4_brokerage_fees,
                cargo5_type,
                cargo5_quantity,
                cargo5_rate,
                cargo5_brokerage_fees,
                cargo6_type,
                cargo6_quantity,
                cargo6_rate,
                cargo6_brokerage_fees,
                voyageBonus,
                miscCosts,
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
          label="Brokerage Fees (%)"
          type="number"
          step="any"
          value={cargo2_brokerage_fees}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                currency_type,
                exchange_rate,
                diesel_rate,
                bunker_rate,
                lube_rate,
                port1,
                port1_fees,
                port1_port_call,
                port1_crane_usage,
                port1_surveying_fees,
                port2,
                port2_fees,
                port2_port_call,
                port2_crane_usage,
                port2_surveying_fees,
                port3,
                port3_fees,
                port3_port_call,
                port3_crane_usage,
                port3_surveying_fees,
                port4,
                port4_fees,
                port4_port_call,
                port4_crane_usage,
                port4_surveying_fees,
                port5,
                port5_fees,
                port5_port_call,
                port5_crane_usage,
                port5_surveying_fees,
                port6,
                port6_fees,
                port6_port_call,
                port6_crane_usage,
                port6_surveying_fees,
                port7,
                port7_fees,
                port7_port_call,
                port7_crane_usage,
                port7_surveying_fees,
                port8,
                port8_fees,
                port8_port_call,
                port8_crane_usage,
                port8_surveying_fees,
                port9,
                port9_fees,
                port9_port_call,
                port9_crane_usage,
                port9_surveying_fees,
                port10,
                port10_fees,
                port10_port_call,
                port10_crane_usage,
                port10_surveying_fees,
                cargo1_type,
                cargo1_quantity,
                cargo1_rate,
                cargo1_brokerage_fees,
                cargo2_type,
                cargo2_quantity,
                cargo2_rate,
                cargo2_brokerage_fees: value,
                cargo3_type,
                cargo3_quantity,
                cargo3_rate,
                cargo3_brokerage_fees,
                cargo4_type,
                cargo4_quantity,
                cargo4_rate,
                cargo4_brokerage_fees,
                cargo5_type,
                cargo5_quantity,
                cargo5_rate,
                cargo5_brokerage_fees,
                cargo6_type,
                cargo6_quantity,
                cargo6_rate,
                cargo6_brokerage_fees,
                voyageBonus,
                miscCosts,
              };
              const result = onChange(modelFields);
              value = result?.cargo2_brokerage_fees ?? value;
            }
            if (errors.cargo2_brokerage_fees?.hasError) {
              runValidationTasks("cargo2_brokerage_fees", value);
            }
            setCargo2_brokerage_fees(value);
          }}
          onBlur={() =>
            runValidationTasks("cargo2_brokerage_fees", cargo2_brokerage_fees)
          }
          errorMessage={errors.cargo2_brokerage_fees?.errorMessage}
          hasError={errors.cargo2_brokerage_fees?.hasError}
          {...getOverrideProps(overrides, "cargo2_brokerage_fees")}
        ></TextField>
      </Grid>
      <SelectField
        label={<span style={{ fontWeight: 'bold' }}>Cargo 3</span>}
        placeholder="Please select an option"
        value={cargo3_type}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              currency_type,
              exchange_rate,
              diesel_rate,
              bunker_rate,
              lube_rate,
              port1,
              port1_fees,
              port1_port_call,
              port1_crane_usage,
              port1_surveying_fees,
              port2,
              port2_fees,
              port2_port_call,
              port2_crane_usage,
              port2_surveying_fees,
              port3,
              port3_fees,
              port3_port_call,
              port3_crane_usage,
              port3_surveying_fees,
              port4,
              port4_fees,
              port4_port_call,
              port4_crane_usage,
              port4_surveying_fees,
              port5,
              port5_fees,
              port5_port_call,
              port5_crane_usage,
              port5_surveying_fees,
              port6,
              port6_fees,
              port6_port_call,
              port6_crane_usage,
              port6_surveying_fees,
              port7,
              port7_fees,
              port7_port_call,
              port7_crane_usage,
              port7_surveying_fees,
              port8,
              port8_fees,
              port8_port_call,
              port8_crane_usage,
              port8_surveying_fees,
              port9,
              port9_fees,
              port9_port_call,
              port9_crane_usage,
              port9_surveying_fees,
              port10,
              port10_fees,
              port10_port_call,
              port10_crane_usage,
              port10_surveying_fees,
              cargo1_type,
              cargo1_quantity,
              cargo1_rate,
              cargo1_brokerage_fees,
              cargo2_type,
              cargo2_quantity,
              cargo2_rate,
              cargo2_brokerage_fees,
              cargo3_type: value,
              cargo3_quantity,
              cargo3_rate,
              cargo3_brokerage_fees,
              cargo4_type,
              cargo4_quantity,
              cargo4_rate,
              cargo4_brokerage_fees,
              cargo5_type,
              cargo5_quantity,
              cargo5_rate,
              cargo5_brokerage_fees,
              cargo6_type,
              cargo6_quantity,
              cargo6_rate,
              cargo6_brokerage_fees,
              voyageBonus,
              miscCosts,
            };
            const result = onChange(modelFields);
            value = result?.cargo3_type ?? value;
          }
          if (errors.cargo3_type?.hasError) {
            runValidationTasks("cargo3_type", value);
          }
          setCargo3_type(value);
        }}
        onBlur={() => runValidationTasks("cargo3_type", cargo3_type)}
        errorMessage={errors.cargo3_type?.errorMessage}
        hasError={errors.cargo3_type?.hasError}
        {...getOverrideProps(overrides, "cargo3_type")}
      >
        <option
          children="NIL"
          value="NIL"
          {...getOverrideProps(overrides, "cargo1_typeoption0")}
        ></option>
        <option
          children="Barite"
          value="Barite"
          {...getOverrideProps(overrides, "cargo1_typeoption1")}
        ></option>
        <option
          children="Barley"
          value="Barley"
          {...getOverrideProps(overrides, "cargo1_typeoption2")}
        ></option>
        <option
          children="Charcoal"
          value="Charcoal"
          {...getOverrideProps(overrides, "cargo1_typeoption3")}
        ></option>
        <option
          children="Cement"
          value="Cement"
          {...getOverrideProps(overrides, "cargo1_typeoption4")}
        ></option>
        <option
          children="Cold Rolled Coil"
          value="Cold Rolled Coil"
          {...getOverrideProps(overrides, "cargo1_typeoption5")}
        ></option>
        <option
          children="Containers"
          value="Containers"
          {...getOverrideProps(overrides, "cargo1_typeoption6")}
        ></option>
        <option
          children="Dickite"
          value="Dickite"
          {...getOverrideProps(overrides, "cargo1_typeoption7")}
        ></option>
        <option
          children="Dolomite"
          value="Dolomite"
          {...getOverrideProps(overrides, "cargo1_typeoption8")}
        ></option>
        <option
          children="Feldspar"
          value="Feldspar"
          {...getOverrideProps(overrides, "cargo1_typeoption9")}
        ></option>
        <option
          children="Fertilizer"
          value="Fertilizer"
          {...getOverrideProps(overrides, "cargo1_typeoption10")}
        ></option>
        <option
          children="Hot Rolled Coil"
          value="Hot Rolled Coil"
          {...getOverrideProps(overrides, "cargo1_typeoption11")}
        ></option>
        <option
          children="Maize"
          value="Maize"
          {...getOverrideProps(overrides, "cargo1_typeoption12")}
        ></option>
        <option
          children="Palm Kernel Shell (PKS)"
          value="Palm Kernel Shell (PKS)"
          {...getOverrideProps(overrides, "cargo1_typeoption13")}
        ></option>
        <option
          children="Palm Kernel Expeller (PKE)"
          value="Palm Kernel Expeller (PKE)"
          {...getOverrideProps(overrides, "cargo1_typeoption14")}
        ></option>
        <option
          children="Plastic Resin"
          value="Plastic Resin"
          {...getOverrideProps(overrides, "cargo1_typeoption15")}
        ></option>
        <option
          children="Project Cargo"
          value="Project Cargo"
          {...getOverrideProps(overrides, "cargo1_typeoption16")}
        ></option>
        <option
          children="Rice"
          value="Rice"
          {...getOverrideProps(overrides, "cargo1_typeoption17")}
        ></option>
        <option
          children="Salt"
          value="Salt"
          {...getOverrideProps(overrides, "cargo1_typeoption18")}
        ></option>
        <option
          children="Salt and Flour"
          value="Salt and Flour"
          {...getOverrideProps(overrides, "cargo1_typeoption19")}
        ></option>
        <option
          children="Silica Sand"
          value="Silica Sand"
          {...getOverrideProps(overrides, "cargo1_typeoption20")}
        ></option>
        <option
          children="Sodium Sulphate Anhydrous"
          value="Sodium Sulphate Anhydrous"
          {...getOverrideProps(overrides, "cargo1_typeoption21")}
        ></option>
        <option
          children="Soy Bean Meal"
          value="Soy Bean Meal"
          {...getOverrideProps(overrides, "cargo1_typeoption22")}
        ></option>
        <option
          children="Steel Coil"
          value="Steel Coil"
          {...getOverrideProps(overrides, "cargo1_typeoption23")}
        ></option>
        <option
          children="Steel Product"
          value="Steel Coil"
          {...getOverrideProps(overrides, "cargo1_typeoption24")}
        ></option>
        <option
          children="Tapioca"
          value="Tapioca"
          {...getOverrideProps(overrides, "cargo1_typeoption25")}
        ></option>
        <option
          children="Tapioca (Jumbo)"
          value="Tapioca (Jumbo)"
          {...getOverrideProps(overrides, "cargo1_typeoption26")}
        ></option>
        <option
          children="Tapioca Pellet"
          value="Tapioca Pellet"
          {...getOverrideProps(overrides, "cargo1_typeoption27")}
        ></option>
        <option
          children="Timber"
          value="Timber"
          {...getOverrideProps(overrides, "cargo1_typeoption28")}
        ></option>
        <option
          children="Titimas Bleaching Earth"
          value="Titimas Bleaching Earth"
          {...getOverrideProps(overrides, "cargo1_typeoption29")}
        ></option>
        <option
          children="Urea"
          value="Urea"
          {...getOverrideProps(overrides, "cargo1_typeoption29")}
        ></option>
        <option
          children="Wheat"
          value="Wheat"
          {...getOverrideProps(overrides, "cargo1_typeoption31")}
        ></option>
        <option
          children="Wood Chips"
          value="Wood Chips"
          {...getOverrideProps(overrides, "cargo1_typeoption31")}
        ></option>
        <option
          children="Wood Pellets"
          value="Wood Pellets"
          {...getOverrideProps(overrides, "cargo1_typeoption32")}
        ></option>
      </SelectField>
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(3, auto)"
        {...getOverrideProps(overrides, "RowGrid27")}
      >
        <TextField
          label="Quantity (MT)"
          type="number"
          step="any"
          value={cargo3_quantity}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                currency_type,
                exchange_rate,
                diesel_rate,
                bunker_rate,
                lube_rate,
                port1,
                port1_fees,
                port1_port_call,
                port1_crane_usage,
                port1_surveying_fees,
                port2,
                port2_fees,
                port2_port_call,
                port2_crane_usage,
                port2_surveying_fees,
                port3,
                port3_fees,
                port3_port_call,
                port3_crane_usage,
                port3_surveying_fees,
                port4,
                port4_fees,
                port4_port_call,
                port4_crane_usage,
                port4_surveying_fees,
                port5,
                port5_fees,
                port5_port_call,
                port5_crane_usage,
                port5_surveying_fees,
                port6,
                port6_fees,
                port6_port_call,
                port6_crane_usage,
                port6_surveying_fees,
                port7,
                port7_fees,
                port7_port_call,
                port7_crane_usage,
                port7_surveying_fees,
                port8,
                port8_fees,
                port8_port_call,
                port8_crane_usage,
                port8_surveying_fees,
                port9,
                port9_fees,
                port9_port_call,
                port9_crane_usage,
                port9_surveying_fees,
                port10,
                port10_fees,
                port10_port_call,
                port10_crane_usage,
                port10_surveying_fees,
                cargo1_type,
                cargo1_quantity,
                cargo1_rate,
                cargo1_brokerage_fees,
                cargo2_type,
                cargo2_quantity,
                cargo2_rate,
                cargo2_brokerage_fees,
                cargo3_type,
                cargo3_quantity: value,
                cargo3_rate,
                cargo3_brokerage_fees,
                cargo4_type,
                cargo4_quantity,
                cargo4_rate,
                cargo4_brokerage_fees,
                cargo5_type,
                cargo5_quantity,
                cargo5_rate,
                cargo5_brokerage_fees,
                cargo6_type,
                cargo6_quantity,
                cargo6_rate,
                cargo6_brokerage_fees,
                voyageBonus,
                miscCosts,
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
          type="number"
          step="any"
          value={cargo3_rate}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                currency_type,
                exchange_rate,
                diesel_rate,
                bunker_rate,
                lube_rate,
                port1,
                port1_fees,
                port1_port_call,
                port1_crane_usage,
                port1_surveying_fees,
                port2,
                port2_fees,
                port2_port_call,
                port2_crane_usage,
                port2_surveying_fees,
                port3,
                port3_fees,
                port3_port_call,
                port3_crane_usage,
                port3_surveying_fees,
                port4,
                port4_fees,
                port4_port_call,
                port4_crane_usage,
                port4_surveying_fees,
                port5,
                port5_fees,
                port5_port_call,
                port5_crane_usage,
                port5_surveying_fees,
                port6,
                port6_fees,
                port6_port_call,
                port6_crane_usage,
                port6_surveying_fees,
                port7,
                port7_fees,
                port7_port_call,
                port7_crane_usage,
                port7_surveying_fees,
                port8,
                port8_fees,
                port8_port_call,
                port8_crane_usage,
                port8_surveying_fees,
                port9,
                port9_fees,
                port9_port_call,
                port9_crane_usage,
                port9_surveying_fees,
                port10,
                port10_fees,
                port10_port_call,
                port10_crane_usage,
                port10_surveying_fees,
                cargo1_type,
                cargo1_quantity,
                cargo1_rate,
                cargo1_brokerage_fees,
                cargo2_type,
                cargo2_quantity,
                cargo2_rate,
                cargo2_brokerage_fees,
                cargo3_type,
                cargo3_quantity,
                cargo3_rate: value,
                cargo3_brokerage_fees,
                cargo4_type,
                cargo4_quantity,
                cargo4_rate,
                cargo4_brokerage_fees,
                cargo5_type,
                cargo5_quantity,
                cargo5_rate,
                cargo5_brokerage_fees,
                cargo6_type,
                cargo6_quantity,
                cargo6_rate,
                cargo6_brokerage_fees,
                voyageBonus,
                miscCosts,
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
          label="Brokerage Fees (%)"
          type="number"
          step="any"
          value={cargo3_brokerage_fees}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                currency_type,
                exchange_rate,
                diesel_rate,
                bunker_rate,
                lube_rate,
                port1,
                port1_fees,
                port1_port_call,
                port1_crane_usage,
                port1_surveying_fees,
                port2,
                port2_fees,
                port2_port_call,
                port2_crane_usage,
                port2_surveying_fees,
                port3,
                port3_fees,
                port3_port_call,
                port3_crane_usage,
                port3_surveying_fees,
                port4,
                port4_fees,
                port4_port_call,
                port4_crane_usage,
                port4_surveying_fees,
                port5,
                port5_fees,
                port5_port_call,
                port5_crane_usage,
                port5_surveying_fees,
                port6,
                port6_fees,
                port6_port_call,
                port6_crane_usage,
                port6_surveying_fees,
                port7,
                port7_fees,
                port7_port_call,
                port7_crane_usage,
                port7_surveying_fees,
                port8,
                port8_fees,
                port8_port_call,
                port8_crane_usage,
                port8_surveying_fees,
                port9,
                port9_fees,
                port9_port_call,
                port9_crane_usage,
                port9_surveying_fees,
                port10,
                port10_fees,
                port10_port_call,
                port10_crane_usage,
                port10_surveying_fees,
                cargo1_type,
                cargo1_quantity,
                cargo1_rate,
                cargo1_brokerage_fees,
                cargo2_type,
                cargo2_quantity,
                cargo2_rate,
                cargo2_brokerage_fees,
                cargo3_type,
                cargo3_quantity,
                cargo3_rate,
                cargo3_brokerage_fees: value,
                cargo4_type,
                cargo4_quantity,
                cargo4_rate,
                cargo4_brokerage_fees,
                cargo5_type,
                cargo5_quantity,
                cargo5_rate,
                cargo5_brokerage_fees,
                cargo6_type,
                cargo6_quantity,
                cargo6_rate,
                cargo6_brokerage_fees,
                voyageBonus,
                miscCosts,
              };
              const result = onChange(modelFields);
              value = result?.cargo3_brokerage_fees ?? value;
            }
            if (errors.cargo3_brokerage_fees?.hasError) {
              runValidationTasks("cargo3_brokerage_fees", value);
            }
            setCargo3_brokerage_fees(value);
          }}
          onBlur={() =>
            runValidationTasks("cargo3_brokerage_fees", cargo3_brokerage_fees)
          }
          errorMessage={errors.cargo3_brokerage_fees?.errorMessage}
          hasError={errors.cargo3_brokerage_fees?.hasError}
          {...getOverrideProps(overrides, "cargo3_brokerage_fees")}
        ></TextField>
      </Grid>
      <SelectField
        label={<span style={{ fontWeight: 'bold' }}>Cargo 4</span>}
        placeholder="Please select an option"
        value={cargo4_type}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              currency_type,
              exchange_rate,
              diesel_rate,
              bunker_rate,
              lube_rate,
              port1,
              port1_fees,
              port1_port_call,
              port1_crane_usage,
              port1_surveying_fees,
              port2,
              port2_fees,
              port2_port_call,
              port2_crane_usage,
              port2_surveying_fees,
              port3,
              port3_fees,
              port3_port_call,
              port3_crane_usage,
              port3_surveying_fees,
              port4,
              port4_fees,
              port4_port_call,
              port4_crane_usage,
              port4_surveying_fees,
              port5,
              port5_fees,
              port5_port_call,
              port5_crane_usage,
              port5_surveying_fees,
              port6,
              port6_fees,
              port6_port_call,
              port6_crane_usage,
              port6_surveying_fees,
              port7,
              port7_fees,
              port7_port_call,
              port7_crane_usage,
              port7_surveying_fees,
              port8,
              port8_fees,
              port8_port_call,
              port8_crane_usage,
              port8_surveying_fees,
              port9,
              port9_fees,
              port9_port_call,
              port9_crane_usage,
              port9_surveying_fees,
              port10,
              port10_fees,
              port10_port_call,
              port10_crane_usage,
              port10_surveying_fees,
              cargo1_type,
              cargo1_quantity,
              cargo1_rate,
              cargo1_brokerage_fees,
              cargo2_type,
              cargo2_quantity,
              cargo2_rate,
              cargo2_brokerage_fees,
              cargo3_type,
              cargo3_quantity,
              cargo3_rate,
              cargo3_brokerage_fees,
              cargo4_type: value,
              cargo4_quantity,
              cargo4_rate,
              cargo4_brokerage_fees,
              cargo5_type,
              cargo5_quantity,
              cargo5_rate,
              cargo5_brokerage_fees,
              cargo6_type,
              cargo6_quantity,
              cargo6_rate,
              cargo6_brokerage_fees,
              voyageBonus,
              miscCosts,
            };
            const result = onChange(modelFields);
            value = result?.cargo4_type ?? value;
          }
          if (errors.cargo4_type?.hasError) {
            runValidationTasks("cargo4_type", value);
          }
          setCargo4_type(value);
        }}
        onBlur={() => runValidationTasks("cargo4_type", cargo4_type)}
        errorMessage={errors.cargo4_type?.errorMessage}
        hasError={errors.cargo4_type?.hasError}
        {...getOverrideProps(overrides, "cargo4_type")}
      >
        <option
          children="NIL"
          value="NIL"
          {...getOverrideProps(overrides, "cargo1_typeoption0")}
        ></option>
        <option
          children="Barite"
          value="Barite"
          {...getOverrideProps(overrides, "cargo1_typeoption1")}
        ></option>
        <option
          children="Barley"
          value="Barley"
          {...getOverrideProps(overrides, "cargo1_typeoption2")}
        ></option>
        <option
          children="Charcoal"
          value="Charcoal"
          {...getOverrideProps(overrides, "cargo1_typeoption3")}
        ></option>
        <option
          children="Cement"
          value="Cement"
          {...getOverrideProps(overrides, "cargo1_typeoption4")}
        ></option>
        <option
          children="Cold Rolled Coil"
          value="Cold Rolled Coil"
          {...getOverrideProps(overrides, "cargo1_typeoption5")}
        ></option>
        <option
          children="Containers"
          value="Containers"
          {...getOverrideProps(overrides, "cargo1_typeoption6")}
        ></option>
        <option
          children="Dickite"
          value="Dickite"
          {...getOverrideProps(overrides, "cargo1_typeoption7")}
        ></option>
        <option
          children="Dolomite"
          value="Dolomite"
          {...getOverrideProps(overrides, "cargo1_typeoption8")}
        ></option>
        <option
          children="Feldspar"
          value="Feldspar"
          {...getOverrideProps(overrides, "cargo1_typeoption9")}
        ></option>
        <option
          children="Fertilizer"
          value="Fertilizer"
          {...getOverrideProps(overrides, "cargo1_typeoption10")}
        ></option>
        <option
          children="Hot Rolled Coil"
          value="Hot Rolled Coil"
          {...getOverrideProps(overrides, "cargo1_typeoption11")}
        ></option>
        <option
          children="Maize"
          value="Maize"
          {...getOverrideProps(overrides, "cargo1_typeoption12")}
        ></option>
        <option
          children="Palm Kernel Shell (PKS)"
          value="Palm Kernel Shell (PKS)"
          {...getOverrideProps(overrides, "cargo1_typeoption13")}
        ></option>
        <option
          children="Palm Kernel Expeller (PKE)"
          value="Palm Kernel Expeller (PKE)"
          {...getOverrideProps(overrides, "cargo1_typeoption14")}
        ></option>
        <option
          children="Plastic Resin"
          value="Plastic Resin"
          {...getOverrideProps(overrides, "cargo1_typeoption15")}
        ></option>
        <option
          children="Project Cargo"
          value="Project Cargo"
          {...getOverrideProps(overrides, "cargo1_typeoption16")}
        ></option>
        <option
          children="Rice"
          value="Rice"
          {...getOverrideProps(overrides, "cargo1_typeoption17")}
        ></option>
        <option
          children="Salt"
          value="Salt"
          {...getOverrideProps(overrides, "cargo1_typeoption18")}
        ></option>
        <option
          children="Salt and Flour"
          value="Salt and Flour"
          {...getOverrideProps(overrides, "cargo1_typeoption19")}
        ></option>
        <option
          children="Silica Sand"
          value="Silica Sand"
          {...getOverrideProps(overrides, "cargo1_typeoption20")}
        ></option>
        <option
          children="Sodium Sulphate Anhydrous"
          value="Sodium Sulphate Anhydrous"
          {...getOverrideProps(overrides, "cargo1_typeoption21")}
        ></option>
        <option
          children="Soy Bean Meal"
          value="Soy Bean Meal"
          {...getOverrideProps(overrides, "cargo1_typeoption22")}
        ></option>
        <option
          children="Steel Coil"
          value="Steel Coil"
          {...getOverrideProps(overrides, "cargo1_typeoption23")}
        ></option>
        <option
          children="Steel Product"
          value="Steel Coil"
          {...getOverrideProps(overrides, "cargo1_typeoption24")}
        ></option>
        <option
          children="Tapioca"
          value="Tapioca"
          {...getOverrideProps(overrides, "cargo1_typeoption25")}
        ></option>
        <option
          children="Tapioca (Jumbo)"
          value="Tapioca (Jumbo)"
          {...getOverrideProps(overrides, "cargo1_typeoption26")}
        ></option>
        <option
          children="Tapioca Pellet"
          value="Tapioca Pellet"
          {...getOverrideProps(overrides, "cargo1_typeoption27")}
        ></option>
        <option
          children="Timber"
          value="Timber"
          {...getOverrideProps(overrides, "cargo1_typeoption28")}
        ></option>
        <option
          children="Titimas Bleaching Earth"
          value="Titimas Bleaching Earth"
          {...getOverrideProps(overrides, "cargo1_typeoption29")}
        ></option>
        <option
          children="Urea"
          value="Urea"
          {...getOverrideProps(overrides, "cargo1_typeoption29")}
        ></option>
        <option
          children="Wheat"
          value="Wheat"
          {...getOverrideProps(overrides, "cargo1_typeoption31")}
        ></option>
        <option
          children="Wood Chips"
          value="Wood Chips"
          {...getOverrideProps(overrides, "cargo1_typeoption31")}
        ></option>
        <option
          children="Wood Pellets"
          value="Wood Pellets"
          {...getOverrideProps(overrides, "cargo1_typeoption32")}
        ></option>
      </SelectField>
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(3, auto)"
        {...getOverrideProps(overrides, "RowGrid29")}
      >
        <TextField
          label="Quantity (MT)"
          type="number"
          step="any"
          value={cargo4_quantity}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                currency_type,
                exchange_rate,
                diesel_rate,
                bunker_rate,
                lube_rate,
                port1,
                port1_fees,
                port1_port_call,
                port1_crane_usage,
                port1_surveying_fees,
                port2,
                port2_fees,
                port2_port_call,
                port2_crane_usage,
                port2_surveying_fees,
                port3,
                port3_fees,
                port3_port_call,
                port3_crane_usage,
                port3_surveying_fees,
                port4,
                port4_fees,
                port4_port_call,
                port4_crane_usage,
                port4_surveying_fees,
                port5,
                port5_fees,
                port5_port_call,
                port5_crane_usage,
                port5_surveying_fees,
                port6,
                port6_fees,
                port6_port_call,
                port6_crane_usage,
                port6_surveying_fees,
                port7,
                port7_fees,
                port7_port_call,
                port7_crane_usage,
                port7_surveying_fees,
                port8,
                port8_fees,
                port8_port_call,
                port8_crane_usage,
                port8_surveying_fees,
                port9,
                port9_fees,
                port9_port_call,
                port9_crane_usage,
                port9_surveying_fees,
                port10,
                port10_fees,
                port10_port_call,
                port10_crane_usage,
                port10_surveying_fees,
                cargo1_type,
                cargo1_quantity,
                cargo1_rate,
                cargo1_brokerage_fees,
                cargo2_type,
                cargo2_quantity,
                cargo2_rate,
                cargo2_brokerage_fees,
                cargo3_type,
                cargo3_quantity,
                cargo3_rate,
                cargo3_brokerage_fees,
                cargo4_type,
                cargo4_quantity: value,
                cargo4_rate,
                cargo4_brokerage_fees,
                cargo5_type,
                cargo5_quantity,
                cargo5_rate,
                cargo5_brokerage_fees,
                cargo6_type,
                cargo6_quantity,
                cargo6_rate,
                cargo6_brokerage_fees,
                voyageBonus,
                miscCosts,
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
          type="number"
          step="any"
          value={cargo4_rate}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                currency_type,
                exchange_rate,
                diesel_rate,
                bunker_rate,
                lube_rate,
                port1,
                port1_fees,
                port1_port_call,
                port1_crane_usage,
                port1_surveying_fees,
                port2,
                port2_fees,
                port2_port_call,
                port2_crane_usage,
                port2_surveying_fees,
                port3,
                port3_fees,
                port3_port_call,
                port3_crane_usage,
                port3_surveying_fees,
                port4,
                port4_fees,
                port4_port_call,
                port4_crane_usage,
                port4_surveying_fees,
                port5,
                port5_fees,
                port5_port_call,
                port5_crane_usage,
                port5_surveying_fees,
                port6,
                port6_fees,
                port6_port_call,
                port6_crane_usage,
                port6_surveying_fees,
                port7,
                port7_fees,
                port7_port_call,
                port7_crane_usage,
                port7_surveying_fees,
                port8,
                port8_fees,
                port8_port_call,
                port8_crane_usage,
                port8_surveying_fees,
                port9,
                port9_fees,
                port9_port_call,
                port9_crane_usage,
                port9_surveying_fees,
                port10,
                port10_fees,
                port10_port_call,
                port10_crane_usage,
                port10_surveying_fees,
                cargo1_type,
                cargo1_quantity,
                cargo1_rate,
                cargo1_brokerage_fees,
                cargo2_type,
                cargo2_quantity,
                cargo2_rate,
                cargo2_brokerage_fees,
                cargo3_type,
                cargo3_quantity,
                cargo3_rate,
                cargo3_brokerage_fees,
                cargo4_type,
                cargo4_quantity,
                cargo4_rate: value,
                cargo4_brokerage_fees,
                cargo5_type,
                cargo5_quantity,
                cargo5_rate,
                cargo5_brokerage_fees,
                cargo6_type,
                cargo6_quantity,
                cargo6_rate,
                cargo6_brokerage_fees,
                voyageBonus,
                miscCosts,
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
          label="Brokerage Fees (%)"
          type="number"
          step="any"
          value={cargo4_brokerage_fees}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                currency_type,
                exchange_rate,
                diesel_rate,
                bunker_rate,
                lube_rate,
                port1,
                port1_fees,
                port1_port_call,
                port1_crane_usage,
                port1_surveying_fees,
                port2,
                port2_fees,
                port2_port_call,
                port2_crane_usage,
                port2_surveying_fees,
                port3,
                port3_fees,
                port3_port_call,
                port3_crane_usage,
                port3_surveying_fees,
                port4,
                port4_fees,
                port4_port_call,
                port4_crane_usage,
                port4_surveying_fees,
                port5,
                port5_fees,
                port5_port_call,
                port5_crane_usage,
                port5_surveying_fees,
                port6,
                port6_fees,
                port6_port_call,
                port6_crane_usage,
                port6_surveying_fees,
                port7,
                port7_fees,
                port7_port_call,
                port7_crane_usage,
                port7_surveying_fees,
                port8,
                port8_fees,
                port8_port_call,
                port8_crane_usage,
                port8_surveying_fees,
                port9,
                port9_fees,
                port9_port_call,
                port9_crane_usage,
                port9_surveying_fees,
                port10,
                port10_fees,
                port10_port_call,
                port10_crane_usage,
                port10_surveying_fees,
                cargo1_type,
                cargo1_quantity,
                cargo1_rate,
                cargo1_brokerage_fees,
                cargo2_type,
                cargo2_quantity,
                cargo2_rate,
                cargo2_brokerage_fees,
                cargo3_type,
                cargo3_quantity,
                cargo3_rate,
                cargo3_brokerage_fees,
                cargo4_type,
                cargo4_quantity,
                cargo4_rate,
                cargo4_brokerage_fees: value,
                cargo5_type,
                cargo5_quantity,
                cargo5_rate,
                cargo5_brokerage_fees,
                cargo6_type,
                cargo6_quantity,
                cargo6_rate,
                cargo6_brokerage_fees,
                voyageBonus,
                miscCosts,
              };
              const result = onChange(modelFields);
              value = result?.cargo4_brokerage_fees ?? value;
            }
            if (errors.cargo4_brokerage_fees?.hasError) {
              runValidationTasks("cargo4_brokerage_fees", value);
            }
            setCargo4_brokerage_fees(value);
          }}
          onBlur={() =>
            runValidationTasks("cargo4_brokerage_fees", cargo4_brokerage_fees)
          }
          errorMessage={errors.cargo4_brokerage_fees?.errorMessage}
          hasError={errors.cargo4_brokerage_fees?.hasError}
          {...getOverrideProps(overrides, "cargo4_brokerage_fees")}
        ></TextField>
      </Grid>
      <SelectField
        label={<span style={{ fontWeight: 'bold' }}>Cargo 5</span>}
        placeholder="Please select an option"
        value={cargo5_type}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              currency_type,
              exchange_rate,
              diesel_rate,
              bunker_rate,
              lube_rate,
              port1,
              port1_fees,
              port1_port_call,
              port1_crane_usage,
              port1_surveying_fees,
              port2,
              port2_fees,
              port2_port_call,
              port2_crane_usage,
              port2_surveying_fees,
              port3,
              port3_fees,
              port3_port_call,
              port3_crane_usage,
              port3_surveying_fees,
              port4,
              port4_fees,
              port4_port_call,
              port4_crane_usage,
              port4_surveying_fees,
              port5,
              port5_fees,
              port5_port_call,
              port5_crane_usage,
              port5_surveying_fees,
              port6,
              port6_fees,
              port6_port_call,
              port6_crane_usage,
              port6_surveying_fees,
              port7,
              port7_fees,
              port7_port_call,
              port7_crane_usage,
              port7_surveying_fees,
              port8,
              port8_fees,
              port8_port_call,
              port8_crane_usage,
              port8_surveying_fees,
              port9,
              port9_fees,
              port9_port_call,
              port9_crane_usage,
              port9_surveying_fees,
              port10,
              port10_fees,
              port10_port_call,
              port10_crane_usage,
              port10_surveying_fees,
              cargo1_type,
              cargo1_quantity,
              cargo1_rate,
              cargo1_brokerage_fees,
              cargo2_type,
              cargo2_quantity,
              cargo2_rate,
              cargo2_brokerage_fees,
              cargo3_type,
              cargo3_quantity,
              cargo3_rate,
              cargo3_brokerage_fees,
              cargo4_type,
              cargo4_quantity,
              cargo4_rate,
              cargo4_brokerage_fees,
              cargo5_type: value,
              cargo5_quantity,
              cargo5_rate,
              cargo5_brokerage_fees,
              cargo6_type,
              cargo6_quantity,
              cargo6_rate,
              cargo6_brokerage_fees,
              voyageBonus,
              miscCosts,
            };
            const result = onChange(modelFields);
            value = result?.cargo5_type ?? value;
          }
          if (errors.cargo5_type?.hasError) {
            runValidationTasks("cargo5_type", value);
          }
          setCargo5_type(value);
        }}
        onBlur={() => runValidationTasks("cargo5_type", cargo5_type)}
        errorMessage={errors.cargo5_type?.errorMessage}
        hasError={errors.cargo5_type?.hasError}
        {...getOverrideProps(overrides, "cargo5_type")}
      >
        <option
          children="NIL"
          value="NIL"
          {...getOverrideProps(overrides, "cargo1_typeoption0")}
        ></option>
        <option
          children="Barite"
          value="Barite"
          {...getOverrideProps(overrides, "cargo1_typeoption1")}
        ></option>
        <option
          children="Barley"
          value="Barley"
          {...getOverrideProps(overrides, "cargo1_typeoption2")}
        ></option>
        <option
          children="Charcoal"
          value="Charcoal"
          {...getOverrideProps(overrides, "cargo1_typeoption3")}
        ></option>
        <option
          children="Cement"
          value="Cement"
          {...getOverrideProps(overrides, "cargo1_typeoption4")}
        ></option>
        <option
          children="Cold Rolled Coil"
          value="Cold Rolled Coil"
          {...getOverrideProps(overrides, "cargo1_typeoption5")}
        ></option>
        <option
          children="Containers"
          value="Containers"
          {...getOverrideProps(overrides, "cargo1_typeoption6")}
        ></option>
        <option
          children="Dickite"
          value="Dickite"
          {...getOverrideProps(overrides, "cargo1_typeoption7")}
        ></option>
        <option
          children="Dolomite"
          value="Dolomite"
          {...getOverrideProps(overrides, "cargo1_typeoption8")}
        ></option>
        <option
          children="Feldspar"
          value="Feldspar"
          {...getOverrideProps(overrides, "cargo1_typeoption9")}
        ></option>
        <option
          children="Fertilizer"
          value="Fertilizer"
          {...getOverrideProps(overrides, "cargo1_typeoption10")}
        ></option>
        <option
          children="Hot Rolled Coil"
          value="Hot Rolled Coil"
          {...getOverrideProps(overrides, "cargo1_typeoption11")}
        ></option>
        <option
          children="Maize"
          value="Maize"
          {...getOverrideProps(overrides, "cargo1_typeoption12")}
        ></option>
        <option
          children="Palm Kernel Shell (PKS)"
          value="Palm Kernel Shell (PKS)"
          {...getOverrideProps(overrides, "cargo1_typeoption13")}
        ></option>
        <option
          children="Palm Kernel Expeller (PKE)"
          value="Palm Kernel Expeller (PKE)"
          {...getOverrideProps(overrides, "cargo1_typeoption14")}
        ></option>
        <option
          children="Plastic Resin"
          value="Plastic Resin"
          {...getOverrideProps(overrides, "cargo1_typeoption15")}
        ></option>
        <option
          children="Project Cargo"
          value="Project Cargo"
          {...getOverrideProps(overrides, "cargo1_typeoption16")}
        ></option>
        <option
          children="Rice"
          value="Rice"
          {...getOverrideProps(overrides, "cargo1_typeoption17")}
        ></option>
        <option
          children="Salt"
          value="Salt"
          {...getOverrideProps(overrides, "cargo1_typeoption18")}
        ></option>
        <option
          children="Salt and Flour"
          value="Salt and Flour"
          {...getOverrideProps(overrides, "cargo1_typeoption19")}
        ></option>
        <option
          children="Silica Sand"
          value="Silica Sand"
          {...getOverrideProps(overrides, "cargo1_typeoption20")}
        ></option>
        <option
          children="Sodium Sulphate Anhydrous"
          value="Sodium Sulphate Anhydrous"
          {...getOverrideProps(overrides, "cargo1_typeoption21")}
        ></option>
        <option
          children="Soy Bean Meal"
          value="Soy Bean Meal"
          {...getOverrideProps(overrides, "cargo1_typeoption22")}
        ></option>
        <option
          children="Steel Coil"
          value="Steel Coil"
          {...getOverrideProps(overrides, "cargo1_typeoption23")}
        ></option>
        <option
          children="Steel Product"
          value="Steel Coil"
          {...getOverrideProps(overrides, "cargo1_typeoption24")}
        ></option>
        <option
          children="Tapioca"
          value="Tapioca"
          {...getOverrideProps(overrides, "cargo1_typeoption25")}
        ></option>
        <option
          children="Tapioca (Jumbo)"
          value="Tapioca (Jumbo)"
          {...getOverrideProps(overrides, "cargo1_typeoption26")}
        ></option>
        <option
          children="Tapioca Pellet"
          value="Tapioca Pellet"
          {...getOverrideProps(overrides, "cargo1_typeoption27")}
        ></option>
        <option
          children="Timber"
          value="Timber"
          {...getOverrideProps(overrides, "cargo1_typeoption28")}
        ></option>
        <option
          children="Titimas Bleaching Earth"
          value="Titimas Bleaching Earth"
          {...getOverrideProps(overrides, "cargo1_typeoption29")}
        ></option>
        <option
          children="Urea"
          value="Urea"
          {...getOverrideProps(overrides, "cargo1_typeoption29")}
        ></option>
        <option
          children="Wheat"
          value="Wheat"
          {...getOverrideProps(overrides, "cargo1_typeoption31")}
        ></option>
        <option
          children="Wood Chips"
          value="Wood Chips"
          {...getOverrideProps(overrides, "cargo1_typeoption31")}
        ></option>
        <option
          children="Wood Pellets"
          value="Wood Pellets"
          {...getOverrideProps(overrides, "cargo1_typeoption32")}
        ></option>
      </SelectField>
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(3, auto)"
        {...getOverrideProps(overrides, "RowGrid31")}
      >
        <TextField
          label="Quantity (MT)"
          type="number"
          step="any"
          value={cargo5_quantity}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                currency_type,
                exchange_rate,
                diesel_rate,
                bunker_rate,
                lube_rate,
                port1,
                port1_fees,
                port1_port_call,
                port1_crane_usage,
                port1_surveying_fees,
                port2,
                port2_fees,
                port2_port_call,
                port2_crane_usage,
                port2_surveying_fees,
                port3,
                port3_fees,
                port3_port_call,
                port3_crane_usage,
                port3_surveying_fees,
                port4,
                port4_fees,
                port4_port_call,
                port4_crane_usage,
                port4_surveying_fees,
                port5,
                port5_fees,
                port5_port_call,
                port5_crane_usage,
                port5_surveying_fees,
                port6,
                port6_fees,
                port6_port_call,
                port6_crane_usage,
                port6_surveying_fees,
                port7,
                port7_fees,
                port7_port_call,
                port7_crane_usage,
                port7_surveying_fees,
                port8,
                port8_fees,
                port8_port_call,
                port8_crane_usage,
                port8_surveying_fees,
                port9,
                port9_fees,
                port9_port_call,
                port9_crane_usage,
                port9_surveying_fees,
                port10,
                port10_fees,
                port10_port_call,
                port10_crane_usage,
                port10_surveying_fees,
                cargo1_type,
                cargo1_quantity,
                cargo1_rate,
                cargo1_brokerage_fees,
                cargo2_type,
                cargo2_quantity,
                cargo2_rate,
                cargo2_brokerage_fees,
                cargo3_type,
                cargo3_quantity,
                cargo3_rate,
                cargo3_brokerage_fees,
                cargo4_type,
                cargo4_quantity,
                cargo4_rate,
                cargo4_brokerage_fees,
                cargo5_type,
                cargo5_quantity: value,
                cargo5_rate,
                cargo5_brokerage_fees,
                cargo6_type,
                cargo6_quantity,
                cargo6_rate,
                cargo6_brokerage_fees,
                voyageBonus,
                miscCosts,
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
          type="number"
          step="any"
          value={cargo5_rate}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                currency_type,
                exchange_rate,
                diesel_rate,
                bunker_rate,
                lube_rate,
                port1,
                port1_fees,
                port1_port_call,
                port1_crane_usage,
                port1_surveying_fees,
                port2,
                port2_fees,
                port2_port_call,
                port2_crane_usage,
                port2_surveying_fees,
                port3,
                port3_fees,
                port3_port_call,
                port3_crane_usage,
                port3_surveying_fees,
                port4,
                port4_fees,
                port4_port_call,
                port4_crane_usage,
                port4_surveying_fees,
                port5,
                port5_fees,
                port5_port_call,
                port5_crane_usage,
                port5_surveying_fees,
                port6,
                port6_fees,
                port6_port_call,
                port6_crane_usage,
                port6_surveying_fees,
                port7,
                port7_fees,
                port7_port_call,
                port7_crane_usage,
                port7_surveying_fees,
                port8,
                port8_fees,
                port8_port_call,
                port8_crane_usage,
                port8_surveying_fees,
                port9,
                port9_fees,
                port9_port_call,
                port9_crane_usage,
                port9_surveying_fees,
                port10,
                port10_fees,
                port10_port_call,
                port10_crane_usage,
                port10_surveying_fees,
                cargo1_type,
                cargo1_quantity,
                cargo1_rate,
                cargo1_brokerage_fees,
                cargo2_type,
                cargo2_quantity,
                cargo2_rate,
                cargo2_brokerage_fees,
                cargo3_type,
                cargo3_quantity,
                cargo3_rate,
                cargo3_brokerage_fees,
                cargo4_type,
                cargo4_quantity,
                cargo4_rate,
                cargo4_brokerage_fees,
                cargo5_type,
                cargo5_quantity,
                cargo5_rate: value,
                cargo5_brokerage_fees,
                cargo6_type,
                cargo6_quantity,
                cargo6_rate,
                cargo6_brokerage_fees,
                voyageBonus,
                miscCosts,
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
          label="Brokerage Fees (%)"
          type="number"
          step="any"
          value={cargo5_brokerage_fees}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                currency_type,
                exchange_rate,
                diesel_rate,
                bunker_rate,
                lube_rate,
                port1,
                port1_fees,
                port1_port_call,
                port1_crane_usage,
                port1_surveying_fees,
                port2,
                port2_fees,
                port2_port_call,
                port2_crane_usage,
                port2_surveying_fees,
                port3,
                port3_fees,
                port3_port_call,
                port3_crane_usage,
                port3_surveying_fees,
                port4,
                port4_fees,
                port4_port_call,
                port4_crane_usage,
                port4_surveying_fees,
                port5,
                port5_fees,
                port5_port_call,
                port5_crane_usage,
                port5_surveying_fees,
                port6,
                port6_fees,
                port6_port_call,
                port6_crane_usage,
                port6_surveying_fees,
                port7,
                port7_fees,
                port7_port_call,
                port7_crane_usage,
                port7_surveying_fees,
                port8,
                port8_fees,
                port8_port_call,
                port8_crane_usage,
                port8_surveying_fees,
                port9,
                port9_fees,
                port9_port_call,
                port9_crane_usage,
                port9_surveying_fees,
                port10,
                port10_fees,
                port10_port_call,
                port10_crane_usage,
                port10_surveying_fees,
                cargo1_type,
                cargo1_quantity,
                cargo1_rate,
                cargo1_brokerage_fees,
                cargo2_type,
                cargo2_quantity,
                cargo2_rate,
                cargo2_brokerage_fees,
                cargo3_type,
                cargo3_quantity,
                cargo3_rate,
                cargo3_brokerage_fees,
                cargo4_type,
                cargo4_quantity,
                cargo4_rate,
                cargo4_brokerage_fees,
                cargo5_type,
                cargo5_quantity,
                cargo5_rate,
                cargo5_brokerage_fees: value,
                cargo6_type,
                cargo6_quantity,
                cargo6_rate,
                cargo6_brokerage_fees,
                voyageBonus,
                miscCosts,
              };
              const result = onChange(modelFields);
              value = result?.cargo5_brokerage_fees ?? value;
            }
            if (errors.cargo5_brokerage_fees?.hasError) {
              runValidationTasks("cargo5_brokerage_fees", value);
            }
            setCargo5_brokerage_fees(value);
          }}
          onBlur={() =>
            runValidationTasks("cargo5_brokerage_fees", cargo5_brokerage_fees)
          }
          errorMessage={errors.cargo5_brokerage_fees?.errorMessage}
          hasError={errors.cargo5_brokerage_fees?.hasError}
          {...getOverrideProps(overrides, "cargo5_brokerage_fees")}
        ></TextField>
      </Grid>
      <SelectField
        label={<span style={{ fontWeight: 'bold' }}>Cargo 6</span>}
        placeholder="Please select an option"
        value={cargo6_type}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              currency_type,
              exchange_rate,
              diesel_rate,
              bunker_rate,
              lube_rate,
              port1,
              port1_fees,
              port1_port_call,
              port1_crane_usage,
              port1_surveying_fees,
              port2,
              port2_fees,
              port2_port_call,
              port2_crane_usage,
              port2_surveying_fees,
              port3,
              port3_fees,
              port3_port_call,
              port3_crane_usage,
              port3_surveying_fees,
              port4,
              port4_fees,
              port4_port_call,
              port4_crane_usage,
              port4_surveying_fees,
              port5,
              port5_fees,
              port5_port_call,
              port5_crane_usage,
              port5_surveying_fees,
              port6,
              port6_fees,
              port6_port_call,
              port6_crane_usage,
              port6_surveying_fees,
              port7,
              port7_fees,
              port7_port_call,
              port7_crane_usage,
              port7_surveying_fees,
              port8,
              port8_fees,
              port8_port_call,
              port8_crane_usage,
              port8_surveying_fees,
              port9,
              port9_fees,
              port9_port_call,
              port9_crane_usage,
              port9_surveying_fees,
              port10,
              port10_fees,
              port10_port_call,
              port10_crane_usage,
              port10_surveying_fees,
              cargo1_type,
              cargo1_quantity,
              cargo1_rate,
              cargo1_brokerage_fees,
              cargo2_type,
              cargo2_quantity,
              cargo2_rate,
              cargo2_brokerage_fees,
              cargo3_type,
              cargo3_quantity,
              cargo3_rate,
              cargo3_brokerage_fees,
              cargo4_type,
              cargo4_quantity,
              cargo4_rate,
              cargo4_brokerage_fees,
              cargo5_type,
              cargo5_quantity,
              cargo5_rate,
              cargo5_brokerage_fees,
              cargo6_type: value,
              cargo6_quantity,
              cargo6_rate,
              cargo6_brokerage_fees,
              voyageBonus,
              miscCosts,
            };
            const result = onChange(modelFields);
            value = result?.cargo6_type ?? value;
          }
          if (errors.cargo6_type?.hasError) {
            runValidationTasks("cargo6_type", value);
          }
          setCargo6_type(value);
        }}
        onBlur={() => runValidationTasks("cargo6_type", cargo6_type)}
        errorMessage={errors.cargo6_type?.errorMessage}
        hasError={errors.cargo6_type?.hasError}
        {...getOverrideProps(overrides, "cargo6_type")}
      >
        <option
          children="NIL"
          value="NIL"
          {...getOverrideProps(overrides, "cargo1_typeoption0")}
        ></option>
        <option
          children="Barite"
          value="Barite"
          {...getOverrideProps(overrides, "cargo1_typeoption1")}
        ></option>
        <option
          children="Barley"
          value="Barley"
          {...getOverrideProps(overrides, "cargo1_typeoption2")}
        ></option>
        <option
          children="Charcoal"
          value="Charcoal"
          {...getOverrideProps(overrides, "cargo1_typeoption3")}
        ></option>
        <option
          children="Cement"
          value="Cement"
          {...getOverrideProps(overrides, "cargo1_typeoption4")}
        ></option>
        <option
          children="Cold Rolled Coil"
          value="Cold Rolled Coil"
          {...getOverrideProps(overrides, "cargo1_typeoption5")}
        ></option>
        <option
          children="Containers"
          value="Containers"
          {...getOverrideProps(overrides, "cargo1_typeoption6")}
        ></option>
        <option
          children="Dickite"
          value="Dickite"
          {...getOverrideProps(overrides, "cargo1_typeoption7")}
        ></option>
        <option
          children="Dolomite"
          value="Dolomite"
          {...getOverrideProps(overrides, "cargo1_typeoption8")}
        ></option>
        <option
          children="Feldspar"
          value="Feldspar"
          {...getOverrideProps(overrides, "cargo1_typeoption9")}
        ></option>
        <option
          children="Fertilizer"
          value="Fertilizer"
          {...getOverrideProps(overrides, "cargo1_typeoption10")}
        ></option>
        <option
          children="Hot Rolled Coil"
          value="Hot Rolled Coil"
          {...getOverrideProps(overrides, "cargo1_typeoption11")}
        ></option>
        <option
          children="Maize"
          value="Maize"
          {...getOverrideProps(overrides, "cargo1_typeoption12")}
        ></option>
        <option
          children="Palm Kernel Shell (PKS)"
          value="Palm Kernel Shell (PKS)"
          {...getOverrideProps(overrides, "cargo1_typeoption13")}
        ></option>
        <option
          children="Palm Kernel Expeller (PKE)"
          value="Palm Kernel Expeller (PKE)"
          {...getOverrideProps(overrides, "cargo1_typeoption14")}
        ></option>
        <option
          children="Plastic Resin"
          value="Plastic Resin"
          {...getOverrideProps(overrides, "cargo1_typeoption15")}
        ></option>
        <option
          children="Project Cargo"
          value="Project Cargo"
          {...getOverrideProps(overrides, "cargo1_typeoption16")}
        ></option>
        <option
          children="Rice"
          value="Rice"
          {...getOverrideProps(overrides, "cargo1_typeoption17")}
        ></option>
        <option
          children="Salt"
          value="Salt"
          {...getOverrideProps(overrides, "cargo1_typeoption18")}
        ></option>
        <option
          children="Salt and Flour"
          value="Salt and Flour"
          {...getOverrideProps(overrides, "cargo1_typeoption19")}
        ></option>
        <option
          children="Silica Sand"
          value="Silica Sand"
          {...getOverrideProps(overrides, "cargo1_typeoption20")}
        ></option>
        <option
          children="Sodium Sulphate Anhydrous"
          value="Sodium Sulphate Anhydrous"
          {...getOverrideProps(overrides, "cargo1_typeoption21")}
        ></option>
        <option
          children="Soy Bean Meal"
          value="Soy Bean Meal"
          {...getOverrideProps(overrides, "cargo1_typeoption22")}
        ></option>
        <option
          children="Steel Coil"
          value="Steel Coil"
          {...getOverrideProps(overrides, "cargo1_typeoption23")}
        ></option>
        <option
          children="Steel Product"
          value="Steel Coil"
          {...getOverrideProps(overrides, "cargo1_typeoption24")}
        ></option>
        <option
          children="Tapioca"
          value="Tapioca"
          {...getOverrideProps(overrides, "cargo1_typeoption25")}
        ></option>
        <option
          children="Tapioca (Jumbo)"
          value="Tapioca (Jumbo)"
          {...getOverrideProps(overrides, "cargo1_typeoption26")}
        ></option>
        <option
          children="Tapioca Pellet"
          value="Tapioca Pellet"
          {...getOverrideProps(overrides, "cargo1_typeoption27")}
        ></option>
        <option
          children="Timber"
          value="Timber"
          {...getOverrideProps(overrides, "cargo1_typeoption28")}
        ></option>
        <option
          children="Titimas Bleaching Earth"
          value="Titimas Bleaching Earth"
          {...getOverrideProps(overrides, "cargo1_typeoption29")}
        ></option>
        <option
          children="Urea"
          value="Urea"
          {...getOverrideProps(overrides, "cargo1_typeoption29")}
        ></option>
        <option
          children="Wheat"
          value="Wheat"
          {...getOverrideProps(overrides, "cargo1_typeoption31")}
        ></option>
        <option
          children="Wood Chips"
          value="Wood Chips"
          {...getOverrideProps(overrides, "cargo1_typeoption31")}
        ></option>
        <option
          children="Wood Pellets"
          value="Wood Pellets"
          {...getOverrideProps(overrides, "cargo1_typeoption32")}
        ></option>
      </SelectField>
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(3, auto)"
        {...getOverrideProps(overrides, "RowGrid33")}
      >
        <TextField
          label="Quantity (MT)"
          type="number"
          step="any"
          value={cargo6_quantity}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                currency_type,
                exchange_rate,
                diesel_rate,
                bunker_rate,
                lube_rate,
                port1,
                port1_fees,
                port1_port_call,
                port1_crane_usage,
                port1_surveying_fees,
                port2,
                port2_fees,
                port2_port_call,
                port2_crane_usage,
                port2_surveying_fees,
                port3,
                port3_fees,
                port3_port_call,
                port3_crane_usage,
                port3_surveying_fees,
                port4,
                port4_fees,
                port4_port_call,
                port4_crane_usage,
                port4_surveying_fees,
                port5,
                port5_fees,
                port5_port_call,
                port5_crane_usage,
                port5_surveying_fees,
                port6,
                port6_fees,
                port6_port_call,
                port6_crane_usage,
                port6_surveying_fees,
                port7,
                port7_fees,
                port7_port_call,
                port7_crane_usage,
                port7_surveying_fees,
                port8,
                port8_fees,
                port8_port_call,
                port8_crane_usage,
                port8_surveying_fees,
                port9,
                port9_fees,
                port9_port_call,
                port9_crane_usage,
                port9_surveying_fees,
                port10,
                port10_fees,
                port10_port_call,
                port10_crane_usage,
                port10_surveying_fees,
                cargo1_type,
                cargo1_quantity,
                cargo1_rate,
                cargo1_brokerage_fees,
                cargo2_type,
                cargo2_quantity,
                cargo2_rate,
                cargo2_brokerage_fees,
                cargo3_type,
                cargo3_quantity,
                cargo3_rate,
                cargo3_brokerage_fees,
                cargo4_type,
                cargo4_quantity,
                cargo4_rate,
                cargo4_brokerage_fees,
                cargo5_type,
                cargo5_quantity,
                cargo5_rate,
                cargo5_brokerage_fees,
                cargo6_type,
                cargo6_quantity: value,
                cargo6_rate,
                cargo6_brokerage_fees,
                voyageBonus,
                miscCosts,
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
          type="number"
          step="any"
          value={cargo6_rate}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                currency_type,
                exchange_rate,
                diesel_rate,
                bunker_rate,
                lube_rate,
                port1,
                port1_fees,
                port1_port_call,
                port1_crane_usage,
                port1_surveying_fees,
                port2,
                port2_fees,
                port2_port_call,
                port2_crane_usage,
                port2_surveying_fees,
                port3,
                port3_fees,
                port3_port_call,
                port3_crane_usage,
                port3_surveying_fees,
                port4,
                port4_fees,
                port4_port_call,
                port4_crane_usage,
                port4_surveying_fees,
                port5,
                port5_fees,
                port5_port_call,
                port5_crane_usage,
                port5_surveying_fees,
                port6,
                port6_fees,
                port6_port_call,
                port6_crane_usage,
                port6_surveying_fees,
                port7,
                port7_fees,
                port7_port_call,
                port7_crane_usage,
                port7_surveying_fees,
                port8,
                port8_fees,
                port8_port_call,
                port8_crane_usage,
                port8_surveying_fees,
                port9,
                port9_fees,
                port9_port_call,
                port9_crane_usage,
                port9_surveying_fees,
                port10,
                port10_fees,
                port10_port_call,
                port10_crane_usage,
                port10_surveying_fees,
                cargo1_type,
                cargo1_quantity,
                cargo1_rate,
                cargo1_brokerage_fees,
                cargo2_type,
                cargo2_quantity,
                cargo2_rate,
                cargo2_brokerage_fees,
                cargo3_type,
                cargo3_quantity,
                cargo3_rate,
                cargo3_brokerage_fees,
                cargo4_type,
                cargo4_quantity,
                cargo4_rate,
                cargo4_brokerage_fees,
                cargo5_type,
                cargo5_quantity,
                cargo5_rate,
                cargo5_brokerage_fees,
                cargo6_type,
                cargo6_quantity,
                cargo6_rate: value,
                cargo6_brokerage_fees,
                voyageBonus,
                miscCosts,
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
          label="Brokerage Fees (%)"
          type="number"
          step="any"
          value={cargo6_brokerage_fees}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                currency_type,
                exchange_rate,
                diesel_rate,
                bunker_rate,
                lube_rate,
                port1,
                port1_fees,
                port1_port_call,
                port1_crane_usage,
                port1_surveying_fees,
                port2,
                port2_fees,
                port2_port_call,
                port2_crane_usage,
                port2_surveying_fees,
                port3,
                port3_fees,
                port3_port_call,
                port3_crane_usage,
                port3_surveying_fees,
                port4,
                port4_fees,
                port4_port_call,
                port4_crane_usage,
                port4_surveying_fees,
                port5,
                port5_fees,
                port5_port_call,
                port5_crane_usage,
                port5_surveying_fees,
                port6,
                port6_fees,
                port6_port_call,
                port6_crane_usage,
                port6_surveying_fees,
                port7,
                port7_fees,
                port7_port_call,
                port7_crane_usage,
                port7_surveying_fees,
                port8,
                port8_fees,
                port8_port_call,
                port8_crane_usage,
                port8_surveying_fees,
                port9,
                port9_fees,
                port9_port_call,
                port9_crane_usage,
                port9_surveying_fees,
                port10,
                port10_fees,
                port10_port_call,
                port10_crane_usage,
                port10_surveying_fees,
                cargo1_type,
                cargo1_quantity,
                cargo1_rate,
                cargo1_brokerage_fees,
                cargo2_type,
                cargo2_quantity,
                cargo2_rate,
                cargo2_brokerage_fees,
                cargo3_type,
                cargo3_quantity,
                cargo3_rate,
                cargo3_brokerage_fees,
                cargo4_type,
                cargo4_quantity,
                cargo4_rate,
                cargo4_brokerage_fees,
                cargo5_type,
                cargo5_quantity,
                cargo5_rate,
                cargo5_brokerage_fees,
                cargo6_type,
                cargo6_quantity,
                cargo6_rate,
                cargo6_brokerage_fees: value,
                voyageBonus,
                miscCosts,
              };
              const result = onChange(modelFields);
              value = result?.cargo6_brokerage_fees ?? value;
            }
            if (errors.cargo6_brokerage_fees?.hasError) {
              runValidationTasks("cargo6_brokerage_fees", value);
            }
            setCargo6_brokerage_fees(value);
          }}
          onBlur={() =>
            runValidationTasks("cargo6_brokerage_fees", cargo6_brokerage_fees)
          }
          errorMessage={errors.cargo6_brokerage_fees?.errorMessage}
          hasError={errors.cargo6_brokerage_fees?.hasError}
          {...getOverrideProps(overrides, "cargo6_brokerage_fees")}
        ></TextField>
      </Grid>
      <Divider
        orientation="horizontal"
        {...getOverrideProps(overrides, "SectionalElement1")}
      ></Divider>
      <Heading
        level={3}
        children="Other Expenses"
        {...getOverrideProps(overrides, "SectionalElement3")}
      ></Heading>
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(2, auto)"
        {...getOverrideProps(overrides, "RowGrid35")}
      >
        <TextField
          label="Voyage Bonus (Hatch Opening/ Hull Cleaning)"
          type="number"
          step="any"
          value={voyageBonus}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                currency_type,
                exchange_rate,
                diesel_rate,
                bunker_rate,
                lube_rate,
                port1,
                port1_fees,
                port1_port_call,
                port1_crane_usage,
                port1_surveying_fees,
                port2,
                port2_fees,
                port2_port_call,
                port2_crane_usage,
                port2_surveying_fees,
                port3,
                port3_fees,
                port3_port_call,
                port3_crane_usage,
                port3_surveying_fees,
                port4,
                port4_fees,
                port4_port_call,
                port4_crane_usage,
                port4_surveying_fees,
                port5,
                port5_fees,
                port5_port_call,
                port5_crane_usage,
                port5_surveying_fees,
                port6,
                port6_fees,
                port6_port_call,
                port6_crane_usage,
                port6_surveying_fees,
                port7,
                port7_fees,
                port7_port_call,
                port7_crane_usage,
                port7_surveying_fees,
                port8,
                port8_fees,
                port8_port_call,
                port8_crane_usage,
                port8_surveying_fees,
                port9,
                port9_fees,
                port9_port_call,
                port9_crane_usage,
                port9_surveying_fees,
                port10,
                port10_fees,
                port10_port_call,
                port10_crane_usage,
                port10_surveying_fees,
                cargo1_type,
                cargo1_quantity,
                cargo1_rate,
                cargo1_brokerage_fees,
                cargo2_type,
                cargo2_quantity,
                cargo2_rate,
                cargo2_brokerage_fees,
                cargo3_type,
                cargo3_quantity,
                cargo3_rate,
                cargo3_brokerage_fees,
                cargo4_type,
                cargo4_quantity,
                cargo4_rate,
                cargo4_brokerage_fees,
                cargo5_type,
                cargo5_quantity,
                cargo5_rate,
                cargo5_brokerage_fees,
                cargo6_type,
                cargo6_quantity,
                cargo6_rate,
                cargo6_brokerage_fees,
                voyageBonus: value,
                miscCosts,
              };
              const result = onChange(modelFields);
              value = result?.voyageBonus ?? value;
            }
            if (errors.voyageBonus?.hasError) {
              runValidationTasks("voyageBonus", value);
            }
            setVoyageBonus(value);
          }}
          onBlur={() => runValidationTasks("voyageBonus", voyageBonus)}
          errorMessage={errors.voyageBonus?.errorMessage}
          hasError={errors.voyageBonus?.hasError}
          {...getOverrideProps(overrides, "voyageBonus")}
        ></TextField>
        <TextField
          label="Miscellaneous Costs"
          type="number"
          step="any"
          value={miscCosts}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                currency_type,
                exchange_rate,
                diesel_rate,
                bunker_rate,
                lube_rate,
                port1,
                port1_fees,
                port1_port_call,
                port1_crane_usage,
                port1_surveying_fees,
                port2,
                port2_fees,
                port2_port_call,
                port2_crane_usage,
                port2_surveying_fees,
                port3,
                port3_fees,
                port3_port_call,
                port3_crane_usage,
                port3_surveying_fees,
                port4,
                port4_fees,
                port4_port_call,
                port4_crane_usage,
                port4_surveying_fees,
                port5,
                port5_fees,
                port5_port_call,
                port5_crane_usage,
                port5_surveying_fees,
                port6,
                port6_fees,
                port6_port_call,
                port6_crane_usage,
                port6_surveying_fees,
                port7,
                port7_fees,
                port7_port_call,
                port7_crane_usage,
                port7_surveying_fees,
                port8,
                port8_fees,
                port8_port_call,
                port8_crane_usage,
                port8_surveying_fees,
                port9,
                port9_fees,
                port9_port_call,
                port9_crane_usage,
                port9_surveying_fees,
                port10,
                port10_fees,
                port10_port_call,
                port10_crane_usage,
                port10_surveying_fees,
                cargo1_type,
                cargo1_quantity,
                cargo1_rate,
                cargo1_brokerage_fees,
                cargo2_type,
                cargo2_quantity,
                cargo2_rate,
                cargo2_brokerage_fees,
                cargo3_type,
                cargo3_quantity,
                cargo3_rate,
                cargo3_brokerage_fees,
                cargo4_type,
                cargo4_quantity,
                cargo4_rate,
                cargo4_brokerage_fees,
                cargo5_type,
                cargo5_quantity,
                cargo5_rate,
                cargo5_brokerage_fees,
                cargo6_type,
                cargo6_quantity,
                cargo6_rate,
                cargo6_brokerage_fees,
                voyageBonus,
                miscCosts: value,
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
