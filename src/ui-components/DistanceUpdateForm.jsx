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
  SelectField,
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
    sourcePort: "",
    destinationPort: "",
    port1: "",
    port2: "",
    port3: "",
    port4: "",
    port5: "",
    port6: "",
    cost: "",
  };
  const [sourcePort, setSourcePort] = React.useState(initialValues.sourcePort);
  const [destinationPort, setDestinationPort] = React.useState(
    initialValues.destinationPort
  );
  const [port1, setPort1] = React.useState(initialValues.port1);
  const [port2, setPort2] = React.useState(initialValues.port2);
  const [port3, setPort3] = React.useState(initialValues.port3);
  const [port4, setPort4] = React.useState(initialValues.port4);
  const [port5, setPort5] = React.useState(initialValues.port5);
  const [port6, setPort6] = React.useState(initialValues.port6);
  const [cost, setCost] = React.useState(initialValues.cost);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = distanceRecord
      ? { ...initialValues, ...distanceRecord }
      : initialValues;
    setSourcePort(cleanValues.sourcePort);
    setDestinationPort(cleanValues.destinationPort);
    setPort1(cleanValues.port1);
    setPort2(cleanValues.port2);
    setPort3(cleanValues.port3);
    setPort4(cleanValues.port4);
    setPort5(cleanValues.port5);
    setPort6(cleanValues.port6);
    setCost(cleanValues.cost);
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
    sourcePort: [],
    destinationPort: [],
    port1: [],
    port2: [],
    port3: [],
    port4: [],
    port5: [],
    port6: [],
    cost: [],
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
          port1,
          port2,
          port3,
          port4,
          port5,
          port6,
          cost,
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
            cost: modelFields.cost,
          };
          await DataStore.save(
            Distance.copyOf(distanceRecord, (updated) => {
              Object.assign(updated, modelFieldsToSave);
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
      <SelectField
        label="Label"
        placeholder="Please select an option"
        value={sourcePort}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              sourcePort: value,
              destinationPort,
              port1,
              port2,
              port3,
              port4,
              port5,
              port6,
              cost,
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
      >
        <option
          children="Ayutthaya - Bangpain (AB)"
          value="Ayutthaya - Bangpain (AB)"
          {...getOverrideProps(overrides, "sourcePortoption0")}
        ></option>
        <option
          children="Ayutthaya - Nakorn Luang (ANL)"
          value="Ayutthaya - Nakorn Luang (ANL)"
          {...getOverrideProps(overrides, "sourcePortoption1")}
        ></option>
        <option
          children="BA"
          value="BA"
          {...getOverrideProps(overrides, "sourcePortoption2")}
        ></option>
        <option
          children="Bahodopi (BHDP)"
          value="Bahodopi (BHDP)"
          {...getOverrideProps(overrides, "sourcePortoption3")}
        ></option>
        <option
          children="Balikpapan (BPN)"
          value="Balikpapan (BPN)"
          {...getOverrideProps(overrides, "sourcePortoption4")}
        ></option>
        <option
          children="Bang Sapan (BS)"
          value="Bang Sapan (BS)"
          {...getOverrideProps(overrides, "sourcePortoption5")}
        ></option>
        <option
          children="Bangkok (BK)"
          value="Bangkok (BK)"
          {...getOverrideProps(overrides, "sourcePortoption6")}
        ></option>
        <option
          children="Bangpakong (BAK)"
          value="Bangpakong (BAK)"
          {...getOverrideProps(overrides, "sourcePortoption7")}
        ></option>
        <option
          children="Banyuwangi - Tanjung Wangi (BJU)"
          value="Banyuwangi - Tanjung Wangi (BJU)"
          {...getOverrideProps(overrides, "sourcePortoption8")}
        ></option>
        <option
          children="Batam (BAT)"
          value="Batam (BAT)"
          {...getOverrideProps(overrides, "sourcePortoption9")}
        ></option>
        <option
          children="Beihai (BHY)"
          value="Beihai (BHY)"
          {...getOverrideProps(overrides, "sourcePortoption10")}
        ></option>
        <option
          children="Belawan (BRW)"
          value="Belawan (BRW)"
          {...getOverrideProps(overrides, "sourcePortoption11")}
        ></option>
        <option
          children="Benoa (Bali) (BAO)"
          value="Benoa (Bali) (BAO)"
          {...getOverrideProps(overrides, "sourcePortoption12")}
        ></option>
        <option
          children="Bintan (BTN)"
          value="Bintan (BTN)"
          {...getOverrideProps(overrides, "sourcePortoption13")}
        ></option>
        <option
          children="Bintulu (BIN)"
          value="Bintulu (BIN)"
          {...getOverrideProps(overrides, "sourcePortoption14")}
        ></option>
        <option
          children="Bontang (BXT)"
          value="Bontang (BXT)"
          {...getOverrideProps(overrides, "sourcePortoption15")}
        ></option>
        <option
          children="Bourbon (BOUR)"
          value="Bourbon (BOUR)"
          {...getOverrideProps(overrides, "sourcePortoption16")}
        ></option>
        <option
          children="Brunei (BRU)"
          value="Brunei (BRU)"
          {...getOverrideProps(overrides, "sourcePortoption17")}
        ></option>
        <option
          children="Cai Lan (CLN)"
          value="Cai Lan (CLN)"
          {...getOverrideProps(overrides, "sourcePortoption18")}
        ></option>
        <option
          children="Cam Pha (CPH)"
          value="Cam Pha (CPH)"
          {...getOverrideProps(overrides, "sourcePortoption19")}
        ></option>
        <option
          children="Can Tho (VCA)"
          value="Can Tho (VCA)"
          {...getOverrideProps(overrides, "sourcePortoption20")}
        ></option>
        <option
          children="Cat Lai (CLI)"
          value="Cat Lai (CLI)"
          {...getOverrideProps(overrides, "sourcePortoption21")}
        ></option>
        <option
          children="Cayagan de Oro City (Macabalan wharf) (CDO)"
          value="Cayagan de Oro City (Macabalan wharf) (CDO)"
          {...getOverrideProps(overrides, "sourcePortoption22")}
        ></option>
        <option
          children="Century Harbour (MHI)"
          value="Century Harbour (MHI)"
          {...getOverrideProps(overrides, "sourcePortoption23")}
        ></option>
        <option
          children="Chantaburi LaemSing (CLS)"
          value="Chantaburi LaemSing (CLS)"
          {...getOverrideProps(overrides, "sourcePortoption24")}
        ></option>
        <option
          children="Chittagong (CTG)"
          value="Chittagong (CTG)"
          {...getOverrideProps(overrides, "sourcePortoption25")}
        ></option>
        <option
          children="Cigading (CIG)"
          value="Cigading (CIG)"
          {...getOverrideProps(overrides, "sourcePortoption26")}
        ></option>
        <option
          children="Danang (DAD)"
          value="Danang (DAD)"
          {...getOverrideProps(overrides, "sourcePortoption27")}
        ></option>
        <option
          children="Davao (Sasa Wharf) (DVO)"
          value="Davao (Sasa Wharf) (DVO)"
          {...getOverrideProps(overrides, "sourcePortoption28")}
        ></option>
        <option
          children="Dhaka (DKA)"
          value="Dhaka (DKA)"
          {...getOverrideProps(overrides, "sourcePortoption29")}
        ></option>
        <option
          children="Dumai (DMI)"
          value="Dumai (DMI)"
          {...getOverrideProps(overrides, "sourcePortoption30")}
        ></option>
        <option
          children="Dung Quat (DQT)"
          value="Dung Quat (DQT)"
          {...getOverrideProps(overrides, "sourcePortoption31")}
        ></option>
        <option
          children="Fangcheng (FAN)"
          value="Fangcheng (FAN)"
          {...getOverrideProps(overrides, "sourcePortoption32")}
        ></option>
        <option
          children="Futong (FTG)"
          value="Futong (FTG)"
          {...getOverrideProps(overrides, "sourcePortoption33")}
        ></option>
        <option
          children="Godau port  (GDP)"
          value="Godau port  (GDP)"
          {...getOverrideProps(overrides, "sourcePortoption34")}
        ></option>
        <option
          children="Grand Total"
          value="Grand Total"
          {...getOverrideProps(overrides, "sourcePortoption35")}
        ></option>
        <option
          children="GRN"
          value="GRN"
          {...getOverrideProps(overrides, "sourcePortoption36")}
        ></option>
        <option
          children="Haiphong (HPH)"
          value="Haiphong (HPH)"
          {...getOverrideProps(overrides, "sourcePortoption37")}
        ></option>
        <option
          children="Halong Bay (HLG)"
          value="Halong Bay (HLG)"
          {...getOverrideProps(overrides, "sourcePortoption38")}
        ></option>
        <option
          children="HO CHI MINH (HCM)"
          value="HO CHI MINH (HCM)"
          {...getOverrideProps(overrides, "sourcePortoption39")}
        ></option>
        <option
          children="Hon Gai (HON)"
          value="Hon Gai (HON)"
          {...getOverrideProps(overrides, "sourcePortoption40")}
        ></option>
        <option
          children="Hong Kong (HKG)"
          value="Hong Kong (HKG)"
          {...getOverrideProps(overrides, "sourcePortoption41")}
        ></option>
        <option
          children="Jakarta (JAK)"
          value="Jakarta (JAK)"
          {...getOverrideProps(overrides, "sourcePortoption42")}
        ></option>
        <option
          children="Jambi (JBI)"
          value="Jambi (JBI)"
          {...getOverrideProps(overrides, "sourcePortoption43")}
        ></option>
        <option
          children="K.K. Kota Kinabalu (KK)"
          value="K.K. Kota Kinabalu (KK)"
          {...getOverrideProps(overrides, "sourcePortoption44")}
        ></option>
        <option
          children="Kampot (KMP)"
          value="Kampot (KMP)"
          {...getOverrideProps(overrides, "sourcePortoption45")}
        ></option>
        <option
          children="Kantang (KTG)"
          value="Kantang (KTG)"
          {...getOverrideProps(overrides, "sourcePortoption46")}
        ></option>
        <option
          children="Kedah (KKH)"
          value="Kedah (KKH)"
          {...getOverrideProps(overrides, "sourcePortoption47")}
        ></option>
        <option
          children="Kelantan (KLT)"
          value="Kelantan (KLT)"
          {...getOverrideProps(overrides, "sourcePortoption48")}
        ></option>
        <option
          children="KEM "
          value="KEM "
          {...getOverrideProps(overrides, "sourcePortoption49")}
        ></option>
        <option
          children="Kemaman (KMN)"
          value="Kemaman (KMN)"
          {...getOverrideProps(overrides, "sourcePortoption50")}
        ></option>
        <option
          children="Khanom (KHM)"
          value="Khanom (KHM)"
          {...getOverrideProps(overrides, "sourcePortoption51")}
        ></option>
        <option
          children="Ko Sichang (KSI)"
          value="Ko Sichang (KSI)"
          {...getOverrideProps(overrides, "sourcePortoption52")}
        ></option>
        <option
          children="Kolkata (CCU)"
          value="Kolkata (CCU)"
          {...getOverrideProps(overrides, "sourcePortoption53")}
        ></option>
        <option
          children="Kor Samui (KSM)"
          value="Kor Samui (KSM)"
          {...getOverrideProps(overrides, "sourcePortoption54")}
        ></option>
        <option
          children="Kuantan (KT)"
          value="Kuantan (KT)"
          {...getOverrideProps(overrides, "sourcePortoption55")}
        ></option>
        <option
          children="Kuching (KUC)"
          value="Kuching (KUC)"
          {...getOverrideProps(overrides, "sourcePortoption56")}
        ></option>
        <option
          children="KUM"
          value="KUM"
          {...getOverrideProps(overrides, "sourcePortoption57")}
        ></option>
        <option
          children="Labuan (LBN)"
          value="Labuan (LBN)"
          {...getOverrideProps(overrides, "sourcePortoption58")}
        ></option>
        <option
          children="Laem Chabang (LCB)"
          value="Laem Chabang (LCB)"
          {...getOverrideProps(overrides, "sourcePortoption59")}
        ></option>
        <option
          children="Lahad Datu (LDU)"
          value="Lahad Datu (LDU)"
          {...getOverrideProps(overrides, "sourcePortoption60")}
        ></option>
        <option
          children="Lhokseumawe (LHOK)"
          value="Lhokseumawe (LHOK)"
          {...getOverrideProps(overrides, "sourcePortoption61")}
        ></option>
        <option
          children="Lumut (LUM)"
          value="Lumut (LUM)"
          {...getOverrideProps(overrides, "sourcePortoption62")}
        ></option>
        <option
          children="Maeklong (Firesun) (MKG)"
          value="Maeklong (Firesun) (MKG)"
          {...getOverrideProps(overrides, "sourcePortoption63")}
        ></option>
        <option
          children="Makassar (MAK)"
          value="Makassar (MAK)"
          {...getOverrideProps(overrides, "sourcePortoption64")}
        ></option>
        <option
          children="Malacca (MAL)"
          value="Malacca (MAL)"
          {...getOverrideProps(overrides, "sourcePortoption65")}
        ></option>
        <option
          children="Manila Habour (MNL)"
          value="Manila Habour (MNL)"
          {...getOverrideProps(overrides, "sourcePortoption66")}
        ></option>
        <option
          children="MAP"
          value="MAP"
          {...getOverrideProps(overrides, "sourcePortoption67")}
        ></option>
        <option
          children="Maptaphut (MAT)"
          value="Maptaphut (MAT)"
          {...getOverrideProps(overrides, "sourcePortoption68")}
        ></option>
        <option
          children="Marunda (MRD)"
          value="Marunda (MRD)"
          {...getOverrideProps(overrides, "sourcePortoption69")}
        ></option>
        <option
          children="Mawei Fuzhou (FOC)"
          value="Mawei Fuzhou (FOC)"
          {...getOverrideProps(overrides, "sourcePortoption70")}
        ></option>
        <option
          children="Muara (MUR)"
          value="Muara (MUR)"
          {...getOverrideProps(overrides, "sourcePortoption71")}
        ></option>
        <option
          children="My Tho (MUT)"
          value="My Tho (MUT)"
          {...getOverrideProps(overrides, "sourcePortoption72")}
        ></option>
        <option
          children="Nan Tong (NTG)"
          value="Nan Tong (NTG)"
          {...getOverrideProps(overrides, "sourcePortoption73")}
        ></option>
        <option
          children="Narathiwat (NAW)"
          value="Narathiwat (NAW)"
          {...getOverrideProps(overrides, "sourcePortoption74")}
        ></option>
        <option
          children="Nghi Son (NGH)"
          value="Nghi Son (NGH)"
          {...getOverrideProps(overrides, "sourcePortoption75")}
        ></option>
        <option
          children="Ningde (NDE)"
          value="Ningde (NDE)"
          {...getOverrideProps(overrides, "sourcePortoption76")}
        ></option>
        <option
          children="Nunukan (NNX)"
          value="Nunukan (NNX)"
          {...getOverrideProps(overrides, "sourcePortoption77")}
        ></option>
        <option
          children="Oknha Mong Port (OMP)"
          value="Oknha Mong Port (OMP)"
          {...getOverrideProps(overrides, "sourcePortoption78")}
        ></option>
        <option
          children="Onomichi (ONO)"
          value="Onomichi (ONO)"
          {...getOverrideProps(overrides, "sourcePortoption79")}
        ></option>
        <option
          children="Padang - Telux Buyur (TBR)"
          value="Padang - Telux Buyur (TBR)"
          {...getOverrideProps(overrides, "sourcePortoption80")}
        ></option>
        <option
          children="PAKAN Baru (PKRU)"
          value="PAKAN Baru (PKRU)"
          {...getOverrideProps(overrides, "sourcePortoption81")}
        ></option>
        <option
          children="Palembang (PLB)"
          value="Palembang (PLB)"
          {...getOverrideProps(overrides, "sourcePortoption82")}
        ></option>
        <option
          children="Panjang (PNJ)"
          value="Panjang (PNJ)"
          {...getOverrideProps(overrides, "sourcePortoption83")}
        ></option>
        <option
          children="Pasir Gudang (PAS)"
          value="Pasir Gudang (PAS)"
          {...getOverrideProps(overrides, "sourcePortoption84")}
        ></option>
        <option
          children="Pattani (PTN)"
          value="Pattani (PTN)"
          {...getOverrideProps(overrides, "sourcePortoption85")}
        ></option>
        <option
          children="Penang (PNG)"
          value="Penang (PNG)"
          {...getOverrideProps(overrides, "sourcePortoption86")}
        ></option>
        <option
          children="Phnom Penh (PNH)"
          value="Phnom Penh (PNH)"
          {...getOverrideProps(overrides, "sourcePortoption87")}
        ></option>
        <option
          children="Phra Chulachomklao Fort (PCF)"
          value="Phra Chulachomklao Fort (PCF)"
          {...getOverrideProps(overrides, "sourcePortoption88")}
        ></option>
        <option
          children="Phuket (HKT)"
          value="Phuket (HKT)"
          {...getOverrideProps(overrides, "sourcePortoption89")}
        ></option>
        <option
          children="Phumy (PHU)"
          value="Phumy (PHU)"
          {...getOverrideProps(overrides, "sourcePortoption90")}
        ></option>
        <option
          children="Plathong Oil Rig (PATO)"
          value="Plathong Oil Rig (PATO)"
          {...getOverrideProps(overrides, "sourcePortoption91")}
        ></option>
        <option
          children="Pontianak (POT)"
          value="Pontianak (POT)"
          {...getOverrideProps(overrides, "sourcePortoption92")}
        ></option>
        <option
          children="Port Klang (PKL)"
          value="Port Klang (PKL)"
          {...getOverrideProps(overrides, "sourcePortoption93")}
        ></option>
        <option
          children="Port Moresby (PGPOM)"
          value="Port Moresby (PGPOM)"
          {...getOverrideProps(overrides, "sourcePortoption94")}
        ></option>
        <option
          children="Poso (POSO)"
          value="Poso (POSO)"
          {...getOverrideProps(overrides, "sourcePortoption95")}
        ></option>
        <option
          children="Pusan (PUS)"
          value="Pusan (PUS)"
          {...getOverrideProps(overrides, "sourcePortoption96")}
        ></option>
        <option
          children="Quy Nhon (QNN)"
          value="Quy Nhon (QNN)"
          {...getOverrideProps(overrides, "sourcePortoption97")}
        ></option>
        <option
          children="Ranong (UNN)"
          value="Ranong (UNN)"
          {...getOverrideProps(overrides, "sourcePortoption98")}
        ></option>
        <option
          children="Rayong (IRPC)"
          value="Rayong (IRPC)"
          {...getOverrideProps(overrides, "sourcePortoption99")}
        ></option>
        <option
          children="Sampit (SMQ)"
          value="Sampit (SMQ)"
          {...getOverrideProps(overrides, "sourcePortoption100")}
        ></option>
        <option
          children="Sandakan (SAN)"
          value="Sandakan (SAN)"
          {...getOverrideProps(overrides, "sourcePortoption101")}
        ></option>
        <option
          children="Sarawak (SRW)"
          value="Sarawak (SRW)"
          {...getOverrideProps(overrides, "sourcePortoption102")}
        ></option>
        <option
          children="Sarekei (SRK)"
          value="Sarekei (SRK)"
          {...getOverrideProps(overrides, "sourcePortoption103")}
        ></option>
        <option
          children="Sattahip (SATP)"
          value="Sattahip (SATP)"
          {...getOverrideProps(overrides, "sourcePortoption104")}
        ></option>
        <option
          children="Semarang - Tanjung Emas (SRG)"
          value="Semarang - Tanjung Emas (SRG)"
          {...getOverrideProps(overrides, "sourcePortoption105")}
        ></option>
        <option
          children="Sibu (SIB)"
          value="Sibu (SIB)"
          {...getOverrideProps(overrides, "sourcePortoption106")}
        ></option>
        <option
          children="Singapore (SG)"
          value="Singapore (SG)"
          {...getOverrideProps(overrides, "sourcePortoption107")}
        ></option>
        <option
          children="Sipitang (SIP)"
          value="Sipitang (SIP)"
          {...getOverrideProps(overrides, "sourcePortoption108")}
        ></option>
        <option
          children="Son Duong (SOD)"
          value="Son Duong (SOD)"
          {...getOverrideProps(overrides, "sourcePortoption109")}
        ></option>
        <option
          children="Songkhla (SK)"
          value="Songkhla (SK)"
          {...getOverrideProps(overrides, "sourcePortoption110")}
        ></option>
        <option
          children="Srihanoville (SIH)"
          value="Srihanoville (SIH)"
          {...getOverrideProps(overrides, "sourcePortoption111")}
        ></option>
        <option
          children="Sriracha Harbor (SRC)"
          value="Sriracha Harbor (SRC)"
          {...getOverrideProps(overrides, "sourcePortoption112")}
        ></option>
        <option
          children="Sritama Jetty (STM)"
          value="Sritama Jetty (STM)"
          {...getOverrideProps(overrides, "sourcePortoption113")}
        ></option>
        <option
          children="Steung Hav (SHV)"
          value="Steung Hav (SHV)"
          {...getOverrideProps(overrides, "sourcePortoption114")}
        ></option>
        <option
          children="Sungai Guntung (SGGT)"
          value="Sungai Guntung (SGGT)"
          {...getOverrideProps(overrides, "sourcePortoption115")}
        ></option>
        <option
          children="Surabaya (SUBY)"
          value="Surabaya (SUBY)"
          {...getOverrideProps(overrides, "sourcePortoption116")}
        ></option>
        <option
          children="Surat Thanee (SRT)"
          value="Surat Thanee (SRT)"
          {...getOverrideProps(overrides, "sourcePortoption117")}
        ></option>
        <option
          children="Tacloban (TAC)"
          value="Tacloban (TAC)"
          {...getOverrideProps(overrides, "sourcePortoption118")}
        ></option>
        <option
          children="Tagbilaran (TAG)"
          value="Tagbilaran (TAG)"
          {...getOverrideProps(overrides, "sourcePortoption119")}
        ></option>
        <option
          children="Tanjong Manis (TGM)"
          value="Tanjong Manis (TGM)"
          {...getOverrideProps(overrides, "sourcePortoption120")}
        ></option>
        <option
          children="Tanjung Batu (TJQ)"
          value="Tanjung Batu (TJQ)"
          {...getOverrideProps(overrides, "sourcePortoption121")}
        ></option>
        <option
          children="Tanjung Priok (TP)"
          value="Tanjung Priok (TP)"
          {...getOverrideProps(overrides, "sourcePortoption122")}
        ></option>
        <option
          children="Tarjun (TAR)"
          value="Tarjun (TAR)"
          {...getOverrideProps(overrides, "sourcePortoption123")}
        ></option>
        <option
          children="Tawau (TAW)"
          value="Tawau (TAW)"
          {...getOverrideProps(overrides, "sourcePortoption124")}
        ></option>
        <option
          children="Terengganu (TGG)"
          value="Terengganu (TGG)"
          {...getOverrideProps(overrides, "sourcePortoption125")}
        ></option>
        <option
          children="Tha Sala (TSL)"
          value="Tha Sala (TSL)"
          {...getOverrideProps(overrides, "sourcePortoption126")}
        ></option>
        <option
          children="TJM"
          value="TJM"
          {...getOverrideProps(overrides, "sourcePortoption127")}
        ></option>
        <option
          children="Tsukumi (TSUM)"
          value="Tsukumi (TSUM)"
          {...getOverrideProps(overrides, "sourcePortoption128")}
        ></option>
        <option
          children="Vung Ang (VAG)"
          value="Vung Ang (VAG)"
          {...getOverrideProps(overrides, "sourcePortoption129")}
        ></option>
        <option
          children="Vung Tau (VUT)"
          value="Vung Tau (VUT)"
          {...getOverrideProps(overrides, "sourcePortoption130")}
        ></option>
        <option
          children="Yangon (RGN)"
          value="Yangon (RGN)"
          {...getOverrideProps(overrides, "sourcePortoption131")}
        ></option>
      </SelectField>
      <SelectField
        label="Label"
        placeholder="Please select an option"
        value={destinationPort}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              sourcePort,
              destinationPort: value,
              port1,
              port2,
              port3,
              port4,
              port5,
              port6,
              cost,
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
      >
        <option
          children="Ayutthaya - Bangpain (AB)"
          value="Ayutthaya - Bangpain (AB)"
          {...getOverrideProps(overrides, "destinationPortoption0")}
        ></option>
        <option
          children="Ayutthaya - Nakorn Luang (ANL)"
          value="Ayutthaya - Nakorn Luang (ANL)"
          {...getOverrideProps(overrides, "destinationPortoption1")}
        ></option>
        <option
          children="BA"
          value="BA"
          {...getOverrideProps(overrides, "destinationPortoption2")}
        ></option>
        <option
          children="Bahodopi (BHDP)"
          value="Bahodopi (BHDP)"
          {...getOverrideProps(overrides, "destinationPortoption3")}
        ></option>
        <option
          children="Balikpapan (BPN)"
          value="Balikpapan (BPN)"
          {...getOverrideProps(overrides, "destinationPortoption4")}
        ></option>
        <option
          children="Bang Sapan (BS)"
          value="Bang Sapan (BS)"
          {...getOverrideProps(overrides, "destinationPortoption5")}
        ></option>
        <option
          children="Bangkok (BK)"
          value="Bangkok (BK)"
          {...getOverrideProps(overrides, "destinationPortoption6")}
        ></option>
        <option
          children="Bangpakong (BAK)"
          value="Bangpakong (BAK)"
          {...getOverrideProps(overrides, "destinationPortoption7")}
        ></option>
        <option
          children="Banyuwangi - Tanjung Wangi (BJU)"
          value="Banyuwangi - Tanjung Wangi (BJU)"
          {...getOverrideProps(overrides, "destinationPortoption8")}
        ></option>
        <option
          children="Batam (BAT)"
          value="Batam (BAT)"
          {...getOverrideProps(overrides, "destinationPortoption9")}
        ></option>
        <option
          children="Beihai (BHY)"
          value="Beihai (BHY)"
          {...getOverrideProps(overrides, "destinationPortoption10")}
        ></option>
        <option
          children="Belawan (BRW)"
          value="Belawan (BRW)"
          {...getOverrideProps(overrides, "destinationPortoption11")}
        ></option>
        <option
          children="Benoa (Bali) (BAO)"
          value="Benoa (Bali) (BAO)"
          {...getOverrideProps(overrides, "destinationPortoption12")}
        ></option>
        <option
          children="Bintan (BTN)"
          value="Bintan (BTN)"
          {...getOverrideProps(overrides, "destinationPortoption13")}
        ></option>
        <option
          children="Bintulu (BIN)"
          value="Bintulu (BIN)"
          {...getOverrideProps(overrides, "destinationPortoption14")}
        ></option>
        <option
          children="Bontang (BXT)"
          value="Bontang (BXT)"
          {...getOverrideProps(overrides, "destinationPortoption15")}
        ></option>
        <option
          children="Bourbon (BOUR)"
          value="Bourbon (BOUR)"
          {...getOverrideProps(overrides, "destinationPortoption16")}
        ></option>
        <option
          children="Brunei (BRU)"
          value="Brunei (BRU)"
          {...getOverrideProps(overrides, "destinationPortoption17")}
        ></option>
        <option
          children="Cai Lan (CLN)"
          value="Cai Lan (CLN)"
          {...getOverrideProps(overrides, "destinationPortoption18")}
        ></option>
        <option
          children="Cam Pha (CPH)"
          value="Cam Pha (CPH)"
          {...getOverrideProps(overrides, "destinationPortoption19")}
        ></option>
        <option
          children="Can Tho (VCA)"
          value="Can Tho (VCA)"
          {...getOverrideProps(overrides, "destinationPortoption20")}
        ></option>
        <option
          children="Cat Lai (CLI)"
          value="Cat Lai (CLI)"
          {...getOverrideProps(overrides, "destinationPortoption21")}
        ></option>
        <option
          children="Cayagan de Oro City (Macabalan wharf) (CDO)"
          value="Cayagan de Oro City (Macabalan wharf) (CDO)"
          {...getOverrideProps(overrides, "destinationPortoption22")}
        ></option>
        <option
          children="Century Harbour (MHI)"
          value="Century Harbour (MHI)"
          {...getOverrideProps(overrides, "destinationPortoption23")}
        ></option>
        <option
          children="Chantaburi LaemSing (CLS)"
          value="Chantaburi LaemSing (CLS)"
          {...getOverrideProps(overrides, "destinationPortoption24")}
        ></option>
        <option
          children="Chittagong (CTG)"
          value="Chittagong (CTG)"
          {...getOverrideProps(overrides, "destinationPortoption25")}
        ></option>
        <option
          children="Cigading (CIG)"
          value="Cigading (CIG)"
          {...getOverrideProps(overrides, "destinationPortoption26")}
        ></option>
        <option
          children="Danang (DAD)"
          value="Danang (DAD)"
          {...getOverrideProps(overrides, "destinationPortoption27")}
        ></option>
        <option
          children="Davao (Sasa Wharf) (DVO)"
          value="Davao (Sasa Wharf) (DVO)"
          {...getOverrideProps(overrides, "destinationPortoption28")}
        ></option>
        <option
          children="Dhaka (DKA)"
          value="Dhaka (DKA)"
          {...getOverrideProps(overrides, "destinationPortoption29")}
        ></option>
        <option
          children="Dumai (DMI)"
          value="Dumai (DMI)"
          {...getOverrideProps(overrides, "destinationPortoption30")}
        ></option>
        <option
          children="Dung Quat (DQT)"
          value="Dung Quat (DQT)"
          {...getOverrideProps(overrides, "destinationPortoption31")}
        ></option>
        <option
          children="Fangcheng (FAN)"
          value="Fangcheng (FAN)"
          {...getOverrideProps(overrides, "destinationPortoption32")}
        ></option>
        <option
          children="Futong (FTG)"
          value="Futong (FTG)"
          {...getOverrideProps(overrides, "destinationPortoption33")}
        ></option>
        <option
          children="Godau port  (GDP)"
          value="Godau port  (GDP)"
          {...getOverrideProps(overrides, "destinationPortoption34")}
        ></option>
        <option
          children="Grand Total"
          value="Grand Total"
          {...getOverrideProps(overrides, "destinationPortoption35")}
        ></option>
        <option
          children="GRN"
          value="GRN"
          {...getOverrideProps(overrides, "destinationPortoption36")}
        ></option>
        <option
          children="Haiphong (HPH)"
          value="Haiphong (HPH)"
          {...getOverrideProps(overrides, "destinationPortoption37")}
        ></option>
        <option
          children="Halong Bay (HLG)"
          value="Halong Bay (HLG)"
          {...getOverrideProps(overrides, "destinationPortoption38")}
        ></option>
        <option
          children="HO CHI MINH (HCM)"
          value="HO CHI MINH (HCM)"
          {...getOverrideProps(overrides, "destinationPortoption39")}
        ></option>
        <option
          children="Hon Gai (HON)"
          value="Hon Gai (HON)"
          {...getOverrideProps(overrides, "destinationPortoption40")}
        ></option>
        <option
          children="Hong Kong (HKG)"
          value="Hong Kong (HKG)"
          {...getOverrideProps(overrides, "destinationPortoption41")}
        ></option>
        <option
          children="Jakarta (JAK)"
          value="Jakarta (JAK)"
          {...getOverrideProps(overrides, "destinationPortoption42")}
        ></option>
        <option
          children="Jambi (JBI)"
          value="Jambi (JBI)"
          {...getOverrideProps(overrides, "destinationPortoption43")}
        ></option>
        <option
          children="K.K. Kota Kinabalu (KK)"
          value="K.K. Kota Kinabalu (KK)"
          {...getOverrideProps(overrides, "destinationPortoption44")}
        ></option>
        <option
          children="Kampot (KMP)"
          value="Kampot (KMP)"
          {...getOverrideProps(overrides, "destinationPortoption45")}
        ></option>
        <option
          children="Kantang (KTG)"
          value="Kantang (KTG)"
          {...getOverrideProps(overrides, "destinationPortoption46")}
        ></option>
        <option
          children="Kedah (KKH)"
          value="Kedah (KKH)"
          {...getOverrideProps(overrides, "destinationPortoption47")}
        ></option>
        <option
          children="Kelantan (KLT)"
          value="Kelantan (KLT)"
          {...getOverrideProps(overrides, "destinationPortoption48")}
        ></option>
        <option
          children="KEM "
          value="KEM "
          {...getOverrideProps(overrides, "destinationPortoption49")}
        ></option>
        <option
          children="Kemaman (KMN)"
          value="Kemaman (KMN)"
          {...getOverrideProps(overrides, "destinationPortoption50")}
        ></option>
        <option
          children="Khanom (KHM)"
          value="Khanom (KHM)"
          {...getOverrideProps(overrides, "destinationPortoption51")}
        ></option>
        <option
          children="Ko Sichang (KSI)"
          value="Ko Sichang (KSI)"
          {...getOverrideProps(overrides, "destinationPortoption52")}
        ></option>
        <option
          children="Kolkata (CCU)"
          value="Kolkata (CCU)"
          {...getOverrideProps(overrides, "destinationPortoption53")}
        ></option>
        <option
          children="Kor Samui (KSM)"
          value="Kor Samui (KSM)"
          {...getOverrideProps(overrides, "destinationPortoption54")}
        ></option>
        <option
          children="Kuantan (KT)"
          value="Kuantan (KT)"
          {...getOverrideProps(overrides, "destinationPortoption55")}
        ></option>
        <option
          children="Kuching (KUC)"
          value="Kuching (KUC)"
          {...getOverrideProps(overrides, "destinationPortoption56")}
        ></option>
        <option
          children="KUM"
          value="KUM"
          {...getOverrideProps(overrides, "destinationPortoption57")}
        ></option>
        <option
          children="Labuan (LBN)"
          value="Labuan (LBN)"
          {...getOverrideProps(overrides, "destinationPortoption58")}
        ></option>
        <option
          children="Laem Chabang (LCB)"
          value="Laem Chabang (LCB)"
          {...getOverrideProps(overrides, "destinationPortoption59")}
        ></option>
        <option
          children="Lahad Datu (LDU)"
          value="Lahad Datu (LDU)"
          {...getOverrideProps(overrides, "destinationPortoption60")}
        ></option>
        <option
          children="Lhokseumawe (LHOK)"
          value="Lhokseumawe (LHOK)"
          {...getOverrideProps(overrides, "destinationPortoption61")}
        ></option>
        <option
          children="Lumut (LUM)"
          value="Lumut (LUM)"
          {...getOverrideProps(overrides, "destinationPortoption62")}
        ></option>
        <option
          children="Maeklong (Firesun) (MKG)"
          value="Maeklong (Firesun) (MKG)"
          {...getOverrideProps(overrides, "destinationPortoption63")}
        ></option>
        <option
          children="Makassar (MAK)"
          value="Makassar (MAK)"
          {...getOverrideProps(overrides, "destinationPortoption64")}
        ></option>
        <option
          children="Malacca (MAL)"
          value="Malacca (MAL)"
          {...getOverrideProps(overrides, "destinationPortoption65")}
        ></option>
        <option
          children="Manila Habour (MNL)"
          value="Manila Habour (MNL)"
          {...getOverrideProps(overrides, "destinationPortoption66")}
        ></option>
        <option
          children="MAP"
          value="MAP"
          {...getOverrideProps(overrides, "destinationPortoption67")}
        ></option>
        <option
          children="Maptaphut (MAT)"
          value="Maptaphut (MAT)"
          {...getOverrideProps(overrides, "destinationPortoption68")}
        ></option>
        <option
          children="Marunda (MRD)"
          value="Marunda (MRD)"
          {...getOverrideProps(overrides, "destinationPortoption69")}
        ></option>
        <option
          children="Mawei Fuzhou (FOC)"
          value="Mawei Fuzhou (FOC)"
          {...getOverrideProps(overrides, "destinationPortoption70")}
        ></option>
        <option
          children="Muara (MUR)"
          value="Muara (MUR)"
          {...getOverrideProps(overrides, "destinationPortoption71")}
        ></option>
        <option
          children="My Tho (MUT)"
          value="My Tho (MUT)"
          {...getOverrideProps(overrides, "destinationPortoption72")}
        ></option>
        <option
          children="Nan Tong (NTG)"
          value="Nan Tong (NTG)"
          {...getOverrideProps(overrides, "destinationPortoption73")}
        ></option>
        <option
          children="Narathiwat (NAW)"
          value="Narathiwat (NAW)"
          {...getOverrideProps(overrides, "destinationPortoption74")}
        ></option>
        <option
          children="Nghi Son (NGH)"
          value="Nghi Son (NGH)"
          {...getOverrideProps(overrides, "destinationPortoption75")}
        ></option>
        <option
          children="Ningde (NDE)"
          value="Ningde (NDE)"
          {...getOverrideProps(overrides, "destinationPortoption76")}
        ></option>
        <option
          children="Nunukan (NNX)"
          value="Nunukan (NNX)"
          {...getOverrideProps(overrides, "destinationPortoption77")}
        ></option>
        <option
          children="Oknha Mong Port (OMP)"
          value="Oknha Mong Port (OMP)"
          {...getOverrideProps(overrides, "destinationPortoption78")}
        ></option>
        <option
          children="Onomichi (ONO)"
          value="Onomichi (ONO)"
          {...getOverrideProps(overrides, "destinationPortoption79")}
        ></option>
        <option
          children="Padang - Telux Buyur (TBR)"
          value="Padang - Telux Buyur (TBR)"
          {...getOverrideProps(overrides, "destinationPortoption80")}
        ></option>
        <option
          children="PAKAN Baru (PKRU)"
          value="PAKAN Baru (PKRU)"
          {...getOverrideProps(overrides, "destinationPortoption81")}
        ></option>
        <option
          children="Palembang (PLB)"
          value="Palembang (PLB)"
          {...getOverrideProps(overrides, "destinationPortoption82")}
        ></option>
        <option
          children="Panjang (PNJ)"
          value="Panjang (PNJ)"
          {...getOverrideProps(overrides, "destinationPortoption83")}
        ></option>
        <option
          children="Pasir Gudang (PAS)"
          value="Pasir Gudang (PAS)"
          {...getOverrideProps(overrides, "destinationPortoption84")}
        ></option>
        <option
          children="Pattani (PTN)"
          value="Pattani (PTN)"
          {...getOverrideProps(overrides, "destinationPortoption85")}
        ></option>
        <option
          children="Penang (PNG)"
          value="Penang (PNG)"
          {...getOverrideProps(overrides, "destinationPortoption86")}
        ></option>
        <option
          children="Phnom Penh (PNH)"
          value="Phnom Penh (PNH)"
          {...getOverrideProps(overrides, "destinationPortoption87")}
        ></option>
        <option
          children="Phra Chulachomklao Fort (PCF)"
          value="Phra Chulachomklao Fort (PCF)"
          {...getOverrideProps(overrides, "destinationPortoption88")}
        ></option>
        <option
          children="Phuket (HKT)"
          value="Phuket (HKT)"
          {...getOverrideProps(overrides, "destinationPortoption89")}
        ></option>
        <option
          children="Phumy (PHU)"
          value="Phumy (PHU)"
          {...getOverrideProps(overrides, "destinationPortoption90")}
        ></option>
        <option
          children="Plathong Oil Rig (PATO)"
          value="Plathong Oil Rig (PATO)"
          {...getOverrideProps(overrides, "destinationPortoption91")}
        ></option>
        <option
          children="Pontianak (POT)"
          value="Pontianak (POT)"
          {...getOverrideProps(overrides, "destinationPortoption92")}
        ></option>
        <option
          children="Port Klang (PKL)"
          value="Port Klang (PKL)"
          {...getOverrideProps(overrides, "destinationPortoption93")}
        ></option>
        <option
          children="Port Moresby (PGPOM)"
          value="Port Moresby (PGPOM)"
          {...getOverrideProps(overrides, "destinationPortoption94")}
        ></option>
        <option
          children="Poso (POSO)"
          value="Poso (POSO)"
          {...getOverrideProps(overrides, "destinationPortoption95")}
        ></option>
        <option
          children="Pusan (PUS)"
          value="Pusan (PUS)"
          {...getOverrideProps(overrides, "destinationPortoption96")}
        ></option>
        <option
          children="Quy Nhon (QNN)"
          value="Quy Nhon (QNN)"
          {...getOverrideProps(overrides, "destinationPortoption97")}
        ></option>
        <option
          children="Ranong (UNN)"
          value="Ranong (UNN)"
          {...getOverrideProps(overrides, "destinationPortoption98")}
        ></option>
        <option
          children="Rayong (IRPC)"
          value="Rayong (IRPC)"
          {...getOverrideProps(overrides, "destinationPortoption99")}
        ></option>
        <option
          children="Sampit (SMQ)"
          value="Sampit (SMQ)"
          {...getOverrideProps(overrides, "destinationPortoption100")}
        ></option>
        <option
          children="Sandakan (SAN)"
          value="Sandakan (SAN)"
          {...getOverrideProps(overrides, "destinationPortoption101")}
        ></option>
        <option
          children="Sarawak (SRW)"
          value="Sarawak (SRW)"
          {...getOverrideProps(overrides, "destinationPortoption102")}
        ></option>
        <option
          children="Sarekei (SRK)"
          value="Sarekei (SRK)"
          {...getOverrideProps(overrides, "destinationPortoption103")}
        ></option>
        <option
          children="Sattahip (SATP)"
          value="Sattahip (SATP)"
          {...getOverrideProps(overrides, "destinationPortoption104")}
        ></option>
        <option
          children="Semarang - Tanjung Emas (SRG)"
          value="Semarang - Tanjung Emas (SRG)"
          {...getOverrideProps(overrides, "destinationPortoption105")}
        ></option>
        <option
          children="Sibu (SIB)"
          value="Sibu (SIB)"
          {...getOverrideProps(overrides, "destinationPortoption106")}
        ></option>
        <option
          children="Singapore (SG)"
          value="Singapore (SG)"
          {...getOverrideProps(overrides, "destinationPortoption107")}
        ></option>
        <option
          children="Sipitang (SIP)"
          value="Sipitang (SIP)"
          {...getOverrideProps(overrides, "destinationPortoption108")}
        ></option>
        <option
          children="Son Duong (SOD)"
          value="Son Duong (SOD)"
          {...getOverrideProps(overrides, "destinationPortoption109")}
        ></option>
        <option
          children="Songkhla (SK)"
          value="Songkhla (SK)"
          {...getOverrideProps(overrides, "destinationPortoption110")}
        ></option>
        <option
          children="Srihanoville (SIH)"
          value="Srihanoville (SIH)"
          {...getOverrideProps(overrides, "destinationPortoption111")}
        ></option>
        <option
          children="Sriracha Harbor (SRC)"
          value="Sriracha Harbor (SRC)"
          {...getOverrideProps(overrides, "destinationPortoption112")}
        ></option>
        <option
          children="Sritama Jetty (STM)"
          value="Sritama Jetty (STM)"
          {...getOverrideProps(overrides, "destinationPortoption113")}
        ></option>
        <option
          children="Steung Hav (SHV)"
          value="Steung Hav (SHV)"
          {...getOverrideProps(overrides, "destinationPortoption114")}
        ></option>
        <option
          children="Sungai Guntung (SGGT)"
          value="Sungai Guntung (SGGT)"
          {...getOverrideProps(overrides, "destinationPortoption115")}
        ></option>
        <option
          children="Surabaya (SUBY)"
          value="Surabaya (SUBY)"
          {...getOverrideProps(overrides, "destinationPortoption116")}
        ></option>
        <option
          children="Surat Thanee (SRT)"
          value="Surat Thanee (SRT)"
          {...getOverrideProps(overrides, "destinationPortoption117")}
        ></option>
        <option
          children="Tacloban (TAC)"
          value="Tacloban (TAC)"
          {...getOverrideProps(overrides, "destinationPortoption118")}
        ></option>
        <option
          children="Tagbilaran (TAG)"
          value="Tagbilaran (TAG)"
          {...getOverrideProps(overrides, "destinationPortoption119")}
        ></option>
        <option
          children="Tanjong Manis (TGM)"
          value="Tanjong Manis (TGM)"
          {...getOverrideProps(overrides, "destinationPortoption120")}
        ></option>
        <option
          children="Tanjung Batu (TJQ)"
          value="Tanjung Batu (TJQ)"
          {...getOverrideProps(overrides, "destinationPortoption121")}
        ></option>
        <option
          children="Tanjung Priok (TP)"
          value="Tanjung Priok (TP)"
          {...getOverrideProps(overrides, "destinationPortoption122")}
        ></option>
        <option
          children="Tarjun (TAR)"
          value="Tarjun (TAR)"
          {...getOverrideProps(overrides, "destinationPortoption123")}
        ></option>
        <option
          children="Tawau (TAW)"
          value="Tawau (TAW)"
          {...getOverrideProps(overrides, "destinationPortoption124")}
        ></option>
        <option
          children="Terengganu (TGG)"
          value="Terengganu (TGG)"
          {...getOverrideProps(overrides, "destinationPortoption125")}
        ></option>
        <option
          children="Tha Sala (TSL)"
          value="Tha Sala (TSL)"
          {...getOverrideProps(overrides, "destinationPortoption126")}
        ></option>
        <option
          children="TJM"
          value="TJM"
          {...getOverrideProps(overrides, "destinationPortoption127")}
        ></option>
        <option
          children="Tsukumi (TSUM)"
          value="Tsukumi (TSUM)"
          {...getOverrideProps(overrides, "destinationPortoption128")}
        ></option>
        <option
          children="Vung Ang (VAG)"
          value="Vung Ang (VAG)"
          {...getOverrideProps(overrides, "destinationPortoption129")}
        ></option>
        <option
          children="Vung Tau (VUT)"
          value="Vung Tau (VUT)"
          {...getOverrideProps(overrides, "destinationPortoption130")}
        ></option>
        <option
          children="Yangon (RGN)"
          value="Yangon (RGN)"
          {...getOverrideProps(overrides, "destinationPortoption131")}
        ></option>
      </SelectField>
      <TextField
        label="Port1"
        isRequired={false}
        isReadOnly={false}
        value={port1}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              sourcePort,
              destinationPort,
              port1: value,
              port2,
              port3,
              port4,
              port5,
              port6,
              cost,
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
              sourcePort,
              destinationPort,
              port1,
              port2: value,
              port3,
              port4,
              port5,
              port6,
              cost,
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
              sourcePort,
              destinationPort,
              port1,
              port2,
              port3: value,
              port4,
              port5,
              port6,
              cost,
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
              sourcePort,
              destinationPort,
              port1,
              port2,
              port3,
              port4: value,
              port5,
              port6,
              cost,
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
              sourcePort,
              destinationPort,
              port1,
              port2,
              port3,
              port4,
              port5: value,
              port6,
              cost,
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
              sourcePort,
              destinationPort,
              port1,
              port2,
              port3,
              port4,
              port5,
              port6: value,
              cost,
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
        label="Cost"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={cost}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              sourcePort,
              destinationPort,
              port1,
              port2,
              port3,
              port4,
              port5,
              port6,
              cost: value,
            };
            const result = onChange(modelFields);
            value = result?.cost ?? value;
          }
          if (errors.cost?.hasError) {
            runValidationTasks("cost", value);
          }
          setCost(value);
        }}
        onBlur={() => runValidationTasks("cost", cost)}
        errorMessage={errors.cost?.errorMessage}
        hasError={errors.cost?.hasError}
        {...getOverrideProps(overrides, "cost")}
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
