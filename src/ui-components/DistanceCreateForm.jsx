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
    port1: "",
    port2: "",
    port3: "",
    port4: "",
    port5: "",
    port6: "",
    cost: "",
  };
  const [port1, setPort1] = React.useState(initialValues.port1);
  const [port2, setPort2] = React.useState(initialValues.port2);
  const [port3, setPort3] = React.useState(initialValues.port3);
  const [port4, setPort4] = React.useState(initialValues.port4);
  const [port5, setPort5] = React.useState(initialValues.port5);
  const [port6, setPort6] = React.useState(initialValues.port6);
  const [cost, setCost] = React.useState(initialValues.cost);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setPort1(initialValues.port1);
    setPort2(initialValues.port2);
    setPort3(initialValues.port3);
    setPort4(initialValues.port4);
    setPort5(initialValues.port5);
    setPort6(initialValues.port6);
    setCost(initialValues.cost);
    setErrors({});
  };
  const validations = {
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
          const modelFieldsToSave = {};
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
      <SelectField
        label="Port 1"
        placeholder="Please select an option"
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
          children="BA"
          value="BA"
          {...getOverrideProps(overrides, "port1option3")}
        ></option>
        <option
          children="Bahodopi (BHDP)"
          value="Bahodopi (BHDP)"
          {...getOverrideProps(overrides, "port1option4")}
        ></option>
        <option
          children="Balikpapan (BPN)"
          value="Balikpapan (BPN)"
          {...getOverrideProps(overrides, "port1option5")}
        ></option>
        <option
          children="Bang Sapan (BS)"
          value="Bang Sapan (BS)"
          {...getOverrideProps(overrides, "port1option6")}
        ></option>
        <option
          children="Bangkok (BK)"
          value="Bangkok (BK)"
          {...getOverrideProps(overrides, "port1option7")}
        ></option>
        <option
          children="Bangpakong (BAK)"
          value="Bangpakong (BAK)"
          {...getOverrideProps(overrides, "port1option8")}
        ></option>
        <option
          children="Banyuwangi - Tanjung Wangi (BJU)"
          value="Banyuwangi - Tanjung Wangi (BJU)"
          {...getOverrideProps(overrides, "port1option9")}
        ></option>
        <option
          children="Batam (BAT)"
          value="Batam (BAT)"
          {...getOverrideProps(overrides, "port1option10")}
        ></option>
        <option
          children="Beihai (BHY)"
          value="Beihai (BHY)"
          {...getOverrideProps(overrides, "port1option11")}
        ></option>
        <option
          children="Belawan (BRW)"
          value="Belawan (BRW)"
          {...getOverrideProps(overrides, "port1option12")}
        ></option>
        <option
          children="Benoa (Bali) (BAO)"
          value="Benoa (Bali) (BAO)"
          {...getOverrideProps(overrides, "port1option13")}
        ></option>
        <option
          children="Bintan (BTN)"
          value="Bintan (BTN)"
          {...getOverrideProps(overrides, "port1option14")}
        ></option>
        <option
          children="Bintulu (BIN)"
          value="Bintulu (BIN)"
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
          children="CX"
          value="CX"
          {...getOverrideProps(overrides, "port1option28")}
        ></option>
        <option
          children="Danang (DAD)"
          value="Danang (DAD)"
          {...getOverrideProps(overrides, "port1option29")}
        ></option>
        <option
          children="Davao (Sasa Wharf) (DVO)"
          value="Davao (Sasa Wharf) (DVO)"
          {...getOverrideProps(overrides, "port1option30")}
        ></option>
        <option
          children="Dhaka (DKA)"
          value="Dhaka (DKA)"
          {...getOverrideProps(overrides, "port1option31")}
        ></option>
        <option
          children="Dumai (DMI)"
          value="Dumai (DMI)"
          {...getOverrideProps(overrides, "port1option32")}
        ></option>
        <option
          children="Dung Quat (DQT)"
          value="Dung Quat (DQT)"
          {...getOverrideProps(overrides, "port1option33")}
        ></option>
        <option
          children="Fangcheng (FAN)"
          value="Fangcheng (FAN)"
          {...getOverrideProps(overrides, "port1option34")}
        ></option>
        <option
          children="Futong (FTG)"
          value="Futong (FTG)"
          {...getOverrideProps(overrides, "port1option35")}
        ></option>
        <option
          children="Godau port  (GDP)"
          value="Godau port  (GDP)"
          {...getOverrideProps(overrides, "port1option36")}
        ></option>
        <option
          children="GRN"
          value="GRN"
          {...getOverrideProps(overrides, "port1option37")}
        ></option>
        <option
          children="Haiphong (HPH)"
          value="Haiphong (HPH)"
          {...getOverrideProps(overrides, "port1option38")}
        ></option>
        <option
          children="Halong Bay (HLG)"
          value="Halong Bay (HLG)"
          {...getOverrideProps(overrides, "port1option39")}
        ></option>
        <option
          children="HO CHI MINH (HCM)"
          value="HO CHI MINH (HCM)"
          {...getOverrideProps(overrides, "port1option40")}
        ></option>
        <option
          children="Hon Gai (HON)"
          value="Hon Gai (HON)"
          {...getOverrideProps(overrides, "port1option41")}
        ></option>
        <option
          children="Hong Kong (HKG)"
          value="Hong Kong (HKG)"
          {...getOverrideProps(overrides, "port1option42")}
        ></option>
        <option
          children="Jakarta (JAK)"
          value="Jakarta (JAK)"
          {...getOverrideProps(overrides, "port1option43")}
        ></option>
        <option
          children="Jambi (JBI)"
          value="Jambi (JBI)"
          {...getOverrideProps(overrides, "port1option44")}
        ></option>
        <option
          children="K.K. Kota Kinabalu (KK)"
          value="K.K. Kota Kinabalu (KK)"
          {...getOverrideProps(overrides, "port1option45")}
        ></option>
        <option
          children="Kampot (KMP)"
          value="Kampot (KMP)"
          {...getOverrideProps(overrides, "port1option46")}
        ></option>
        <option
          children="Kantang (KTG)"
          value="Kantang (KTG)"
          {...getOverrideProps(overrides, "port1option47")}
        ></option>
        <option
          children="Kedah (KKH)"
          value="Kedah (KKH)"
          {...getOverrideProps(overrides, "port1option48")}
        ></option>
        <option
          children="Kelantan (KLT)"
          value="Kelantan (KLT)"
          {...getOverrideProps(overrides, "port1option49")}
        ></option>
        <option
          children="KEM "
          value="KEM "
          {...getOverrideProps(overrides, "port1option50")}
        ></option>
        <option
          children="Kemaman (KMN)"
          value="Kemaman (KMN)"
          {...getOverrideProps(overrides, "port1option51")}
        ></option>
        <option
          children="Khanom (KHM)"
          value="Khanom (KHM)"
          {...getOverrideProps(overrides, "port1option52")}
        ></option>
        <option
          children="Ko Sichang (KSI)"
          value="Ko Sichang (KSI)"
          {...getOverrideProps(overrides, "port1option53")}
        ></option>
        <option
          children="Kolkata (CCU)"
          value="Kolkata (CCU)"
          {...getOverrideProps(overrides, "port1option54")}
        ></option>
        <option
          children="Kor Samui (KSM)"
          value="Kor Samui (KSM)"
          {...getOverrideProps(overrides, "port1option55")}
        ></option>
        <option
          children="Kuantan (KT)"
          value="Kuantan (KT)"
          {...getOverrideProps(overrides, "port1option56")}
        ></option>
        <option
          children="Kuching (KUC)"
          value="Kuching (KUC)"
          {...getOverrideProps(overrides, "port1option57")}
        ></option>
        <option
          children="KUM"
          value="KUM"
          {...getOverrideProps(overrides, "port1option58")}
        ></option>
        <option
          children="Labuan (LBN)"
          value="Labuan (LBN)"
          {...getOverrideProps(overrides, "port1option59")}
        ></option>
        <option
          children="Laem Chabang (LCB)"
          value="Laem Chabang (LCB)"
          {...getOverrideProps(overrides, "port1option60")}
        ></option>
        <option
          children="Lahad Datu (LDU)"
          value="Lahad Datu (LDU)"
          {...getOverrideProps(overrides, "port1option61")}
        ></option>
        <option
          children="Lhokseumawe (LHOK)"
          value="Lhokseumawe (LHOK)"
          {...getOverrideProps(overrides, "port1option62")}
        ></option>
        <option
          children="Lumut (LUM)"
          value="Lumut (LUM)"
          {...getOverrideProps(overrides, "port1option63")}
        ></option>
        <option
          children="Maeklong (Firesun) (MKG)"
          value="Maeklong (Firesun) (MKG)"
          {...getOverrideProps(overrides, "port1option64")}
        ></option>
        <option
          children="Makassar (MAK)"
          value="Makassar (MAK)"
          {...getOverrideProps(overrides, "port1option65")}
        ></option>
        <option
          children="Malacca (MAL)"
          value="Malacca (MAL)"
          {...getOverrideProps(overrides, "port1option66")}
        ></option>
        <option
          children="Manila Habour (MNL)"
          value="Manila Habour (MNL)"
          {...getOverrideProps(overrides, "port1option67")}
        ></option>
        <option
          children="MAP"
          value="MAP"
          {...getOverrideProps(overrides, "port1option68")}
        ></option>
        <option
          children="MAP "
          value="MAP "
          {...getOverrideProps(overrides, "port1option69")}
        ></option>
        <option
          children="Maptaphut (MAT)"
          value="Maptaphut (MAT)"
          {...getOverrideProps(overrides, "port1option70")}
        ></option>
        <option
          children="Marunda (MRD)"
          value="Marunda (MRD)"
          {...getOverrideProps(overrides, "port1option71")}
        ></option>
        <option
          children="Mawei Fuzhou (FOC)"
          value="Mawei Fuzhou (FOC)"
          {...getOverrideProps(overrides, "port1option72")}
        ></option>
        <option
          children="Muara (MUR)"
          value="Muara (MUR)"
          {...getOverrideProps(overrides, "port1option73")}
        ></option>
        <option
          children="My Tho (MUT)"
          value="My Tho (MUT)"
          {...getOverrideProps(overrides, "port1option74")}
        ></option>
        <option
          children="Nan Tong (NTG)"
          value="Nan Tong (NTG)"
          {...getOverrideProps(overrides, "port1option75")}
        ></option>
        <option
          children="Narathiwat (NAW)"
          value="Narathiwat (NAW)"
          {...getOverrideProps(overrides, "port1option76")}
        ></option>
        <option
          children="Nghi Son (NGH)"
          value="Nghi Son (NGH)"
          {...getOverrideProps(overrides, "port1option77")}
        ></option>
        <option
          children="Ningde (NDE)"
          value="Ningde (NDE)"
          {...getOverrideProps(overrides, "port1option78")}
        ></option>
        <option
          children="Nunukan (NNX)"
          value="Nunukan (NNX)"
          {...getOverrideProps(overrides, "port1option79")}
        ></option>
        <option
          children="Oknha Mong Port (OMP)"
          value="Oknha Mong Port (OMP)"
          {...getOverrideProps(overrides, "port1option80")}
        ></option>
        <option
          children="Onomichi (ONO)"
          value="Onomichi (ONO)"
          {...getOverrideProps(overrides, "port1option81")}
        ></option>
        <option
          children="Padang - Telux Buyur (TBR)"
          value="Padang - Telux Buyur (TBR)"
          {...getOverrideProps(overrides, "port1option82")}
        ></option>
        <option
          children="PAKAN Baru (PKRU)"
          value="PAKAN Baru (PKRU)"
          {...getOverrideProps(overrides, "port1option83")}
        ></option>
        <option
          children="Palembang (PLB)"
          value="Palembang (PLB)"
          {...getOverrideProps(overrides, "port1option84")}
        ></option>
        <option
          children="Panjang (PNJ)"
          value="Panjang (PNJ)"
          {...getOverrideProps(overrides, "port1option85")}
        ></option>
        <option
          children="Pasir Gudang (PAS)"
          value="Pasir Gudang (PAS)"
          {...getOverrideProps(overrides, "port1option86")}
        ></option>
        <option
          children="Pattani (PTN)"
          value="Pattani (PTN)"
          {...getOverrideProps(overrides, "port1option87")}
        ></option>
        <option
          children="Penang (PNG)"
          value="Penang (PNG)"
          {...getOverrideProps(overrides, "port1option88")}
        ></option>
        <option
          children="Phnom Penh (PNH)"
          value="Phnom Penh (PNH)"
          {...getOverrideProps(overrides, "port1option89")}
        ></option>
        <option
          children="Phra Chulachomklao Fort (PCF)"
          value="Phra Chulachomklao Fort (PCF)"
          {...getOverrideProps(overrides, "port1option90")}
        ></option>
        <option
          children="Phuket (HKT)"
          value="Phuket (HKT)"
          {...getOverrideProps(overrides, "port1option91")}
        ></option>
        <option
          children="Phumy (PHU)"
          value="Phumy (PHU)"
          {...getOverrideProps(overrides, "port1option92")}
        ></option>
        <option
          children="Plathong Oil Rig (PATO)"
          value="Plathong Oil Rig (PATO)"
          {...getOverrideProps(overrides, "port1option93")}
        ></option>
        <option
          children="Pontianak (POT)"
          value="Pontianak (POT)"
          {...getOverrideProps(overrides, "port1option94")}
        ></option>
        <option
          children="Port Klang (PKL)"
          value="Port Klang (PKL)"
          {...getOverrideProps(overrides, "port1option95")}
        ></option>
        <option
          children="Port Moresby (PGPOM)"
          value="Port Moresby (PGPOM)"
          {...getOverrideProps(overrides, "port1option96")}
        ></option>
        <option
          children="Poso (POSO)"
          value="Poso (POSO)"
          {...getOverrideProps(overrides, "port1option97")}
        ></option>
        <option
          children="Pusan (PUS)"
          value="Pusan (PUS)"
          {...getOverrideProps(overrides, "port1option98")}
        ></option>
        <option
          children="Quy Nhon (QNN)"
          value="Quy Nhon (QNN)"
          {...getOverrideProps(overrides, "port1option99")}
        ></option>
        <option
          children="Ranong (UNN)"
          value="Ranong (UNN)"
          {...getOverrideProps(overrides, "port1option100")}
        ></option>
        <option
          children="Rayong (IRPC)"
          value="Rayong (IRPC)"
          {...getOverrideProps(overrides, "port1option101")}
        ></option>
        <option
          children="Sampit (SMQ)"
          value="Sampit (SMQ)"
          {...getOverrideProps(overrides, "port1option102")}
        ></option>
        <option
          children="Sandakan (SAN)"
          value="Sandakan (SAN)"
          {...getOverrideProps(overrides, "port1option103")}
        ></option>
        <option
          children="Sarawak (SRW)"
          value="Sarawak (SRW)"
          {...getOverrideProps(overrides, "port1option104")}
        ></option>
        <option
          children="Sarekei (SRK)"
          value="Sarekei (SRK)"
          {...getOverrideProps(overrides, "port1option105")}
        ></option>
        <option
          children="Sattahip (SATP)"
          value="Sattahip (SATP)"
          {...getOverrideProps(overrides, "port1option106")}
        ></option>
        <option
          children="Semarang - Tanjung Emas (SRG)"
          value="Semarang - Tanjung Emas (SRG)"
          {...getOverrideProps(overrides, "port1option107")}
        ></option>
        <option
          children="Sibu (SIB)"
          value="Sibu (SIB)"
          {...getOverrideProps(overrides, "port1option108")}
        ></option>
        <option
          children="Singapore (SG)"
          value="Singapore (SG)"
          {...getOverrideProps(overrides, "port1option109")}
        ></option>
        <option
          children="Sipitang (SIP)"
          value="Sipitang (SIP)"
          {...getOverrideProps(overrides, "port1option110")}
        ></option>
        <option
          children="Son Duong (SOD)"
          value="Son Duong (SOD)"
          {...getOverrideProps(overrides, "port1option111")}
        ></option>
        <option
          children="Songkhla (SK)"
          value="Songkhla (SK)"
          {...getOverrideProps(overrides, "port1option112")}
        ></option>
        <option
          children="Srihanoville (SIH)"
          value="Srihanoville (SIH)"
          {...getOverrideProps(overrides, "port1option113")}
        ></option>
        <option
          children="Sriracha Harbor (SRC)"
          value="Sriracha Harbor (SRC)"
          {...getOverrideProps(overrides, "port1option114")}
        ></option>
        <option
          children="Sritama Jetty (STM)"
          value="Sritama Jetty (STM)"
          {...getOverrideProps(overrides, "port1option115")}
        ></option>
        <option
          children="Steung Hav (SHV)"
          value="Steung Hav (SHV)"
          {...getOverrideProps(overrides, "port1option116")}
        ></option>
        <option
          children="Sungai Guntung (SGGT)"
          value="Sungai Guntung (SGGT)"
          {...getOverrideProps(overrides, "port1option117")}
        ></option>
        <option
          children="Surabaya (SUBY)"
          value="Surabaya (SUBY)"
          {...getOverrideProps(overrides, "port1option118")}
        ></option>
        <option
          children="Surat Thanee (SRT)"
          value="Surat Thanee (SRT)"
          {...getOverrideProps(overrides, "port1option119")}
        ></option>
        <option
          children="Tacloban (TAC)"
          value="Tacloban (TAC)"
          {...getOverrideProps(overrides, "port1option120")}
        ></option>
        <option
          children="Tagbilaran (TAG)"
          value="Tagbilaran (TAG)"
          {...getOverrideProps(overrides, "port1option121")}
        ></option>
        <option
          children="Tanjong Manis (TGM)"
          value="Tanjong Manis (TGM)"
          {...getOverrideProps(overrides, "port1option122")}
        ></option>
        <option
          children="Tanjung Batu (TJQ)"
          value="Tanjung Batu (TJQ)"
          {...getOverrideProps(overrides, "port1option123")}
        ></option>
        <option
          children="Tanjung Priok (TP)"
          value="Tanjung Priok (TP)"
          {...getOverrideProps(overrides, "port1option124")}
        ></option>
        <option
          children="Tarjun (TAR)"
          value="Tarjun (TAR)"
          {...getOverrideProps(overrides, "port1option125")}
        ></option>
        <option
          children="Tawau (TAW)"
          value="Tawau (TAW)"
          {...getOverrideProps(overrides, "port1option126")}
        ></option>
        <option
          children="Terengganu (TGG)"
          value="Terengganu (TGG)"
          {...getOverrideProps(overrides, "port1option127")}
        ></option>
        <option
          children="Tha Sala (TSL)"
          value="Tha Sala (TSL)"
          {...getOverrideProps(overrides, "port1option128")}
        ></option>
        <option
          children="TJM"
          value="TJM"
          {...getOverrideProps(overrides, "port1option129")}
        ></option>
        <option
          children="Tsukumi (TSUM)"
          value="Tsukumi (TSUM)"
          {...getOverrideProps(overrides, "port1option130")}
        ></option>
        <option
          children="Vung Ang (VAG)"
          value="Vung Ang (VAG)"
          {...getOverrideProps(overrides, "port1option131")}
        ></option>
        <option
          children="Vung Tau (VUT)"
          value="Vung Tau (VUT)"
          {...getOverrideProps(overrides, "port1option132")}
        ></option>
        <option
          children="Yangon (RGN)"
          value="Yangon (RGN)"
          {...getOverrideProps(overrides, "port1option133")}
        ></option>
      </SelectField>
      <SelectField
        label="Port 2"
        placeholder="Please select an option"
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
          children="BA"
          value="BA"
          {...getOverrideProps(overrides, "port2option3")}
        ></option>
        <option
          children="Bahodopi (BHDP)"
          value="Bahodopi (BHDP)"
          {...getOverrideProps(overrides, "port2option4")}
        ></option>
        <option
          children="Balikpapan (BPN)"
          value="Balikpapan (BPN)"
          {...getOverrideProps(overrides, "port2option5")}
        ></option>
        <option
          children="Bang Sapan (BS)"
          value="Bang Sapan (BS)"
          {...getOverrideProps(overrides, "port2option6")}
        ></option>
        <option
          children="Bangkok (BK)"
          value="Bangkok (BK)"
          {...getOverrideProps(overrides, "port2option7")}
        ></option>
        <option
          children="Bangpakong (BAK)"
          value="Bangpakong (BAK)"
          {...getOverrideProps(overrides, "port2option8")}
        ></option>
        <option
          children="Banyuwangi - Tanjung Wangi (BJU)"
          value="Banyuwangi - Tanjung Wangi (BJU)"
          {...getOverrideProps(overrides, "port2option9")}
        ></option>
        <option
          children="Batam (BAT)"
          value="Batam (BAT)"
          {...getOverrideProps(overrides, "port2option10")}
        ></option>
        <option
          children="Beihai (BHY)"
          value="Beihai (BHY)"
          {...getOverrideProps(overrides, "port2option11")}
        ></option>
        <option
          children="Belawan (BRW)"
          value="Belawan (BRW)"
          {...getOverrideProps(overrides, "port2option12")}
        ></option>
        <option
          children="Benoa (Bali) (BAO)"
          value="Benoa (Bali) (BAO)"
          {...getOverrideProps(overrides, "port2option13")}
        ></option>
        <option
          children="Bintan (BTN)"
          value="Bintan (BTN)"
          {...getOverrideProps(overrides, "port2option14")}
        ></option>
        <option
          children="Bintulu (BIN)"
          value="Bintulu (BIN)"
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
          children="CX"
          value="CX"
          {...getOverrideProps(overrides, "port2option28")}
        ></option>
        <option
          children="Danang (DAD)"
          value="Danang (DAD)"
          {...getOverrideProps(overrides, "port2option29")}
        ></option>
        <option
          children="Davao (Sasa Wharf) (DVO)"
          value="Davao (Sasa Wharf) (DVO)"
          {...getOverrideProps(overrides, "port2option30")}
        ></option>
        <option
          children="Dhaka (DKA)"
          value="Dhaka (DKA)"
          {...getOverrideProps(overrides, "port2option31")}
        ></option>
        <option
          children="Dumai (DMI)"
          value="Dumai (DMI)"
          {...getOverrideProps(overrides, "port2option32")}
        ></option>
        <option
          children="Dung Quat (DQT)"
          value="Dung Quat (DQT)"
          {...getOverrideProps(overrides, "port2option33")}
        ></option>
        <option
          children="Fangcheng (FAN)"
          value="Fangcheng (FAN)"
          {...getOverrideProps(overrides, "port2option34")}
        ></option>
        <option
          children="Futong (FTG)"
          value="Futong (FTG)"
          {...getOverrideProps(overrides, "port2option35")}
        ></option>
        <option
          children="Godau port  (GDP)"
          value="Godau port  (GDP)"
          {...getOverrideProps(overrides, "port2option36")}
        ></option>
        <option
          children="GRN"
          value="GRN"
          {...getOverrideProps(overrides, "port2option37")}
        ></option>
        <option
          children="Haiphong (HPH)"
          value="Haiphong (HPH)"
          {...getOverrideProps(overrides, "port2option38")}
        ></option>
        <option
          children="Halong Bay (HLG)"
          value="Halong Bay (HLG)"
          {...getOverrideProps(overrides, "port2option39")}
        ></option>
        <option
          children="HO CHI MINH (HCM)"
          value="HO CHI MINH (HCM)"
          {...getOverrideProps(overrides, "port2option40")}
        ></option>
        <option
          children="Hon Gai (HON)"
          value="Hon Gai (HON)"
          {...getOverrideProps(overrides, "port2option41")}
        ></option>
        <option
          children="Hong Kong (HKG)"
          value="Hong Kong (HKG)"
          {...getOverrideProps(overrides, "port2option42")}
        ></option>
        <option
          children="Jakarta (JAK)"
          value="Jakarta (JAK)"
          {...getOverrideProps(overrides, "port2option43")}
        ></option>
        <option
          children="Jambi (JBI)"
          value="Jambi (JBI)"
          {...getOverrideProps(overrides, "port2option44")}
        ></option>
        <option
          children="K.K. Kota Kinabalu (KK)"
          value="K.K. Kota Kinabalu (KK)"
          {...getOverrideProps(overrides, "port2option45")}
        ></option>
        <option
          children="Kampot (KMP)"
          value="Kampot (KMP)"
          {...getOverrideProps(overrides, "port2option46")}
        ></option>
        <option
          children="Kantang (KTG)"
          value="Kantang (KTG)"
          {...getOverrideProps(overrides, "port2option47")}
        ></option>
        <option
          children="Kedah (KKH)"
          value="Kedah (KKH)"
          {...getOverrideProps(overrides, "port2option48")}
        ></option>
        <option
          children="Kelantan (KLT)"
          value="Kelantan (KLT)"
          {...getOverrideProps(overrides, "port2option49")}
        ></option>
        <option
          children="KEM "
          value="KEM "
          {...getOverrideProps(overrides, "port2option50")}
        ></option>
        <option
          children="Kemaman (KMN)"
          value="Kemaman (KMN)"
          {...getOverrideProps(overrides, "port2option51")}
        ></option>
        <option
          children="Khanom (KHM)"
          value="Khanom (KHM)"
          {...getOverrideProps(overrides, "port2option52")}
        ></option>
        <option
          children="Ko Sichang (KSI)"
          value="Ko Sichang (KSI)"
          {...getOverrideProps(overrides, "port2option53")}
        ></option>
        <option
          children="Kolkata (CCU)"
          value="Kolkata (CCU)"
          {...getOverrideProps(overrides, "port2option54")}
        ></option>
        <option
          children="Kor Samui (KSM)"
          value="Kor Samui (KSM)"
          {...getOverrideProps(overrides, "port2option55")}
        ></option>
        <option
          children="Kuantan (KT)"
          value="Kuantan (KT)"
          {...getOverrideProps(overrides, "port2option56")}
        ></option>
        <option
          children="Kuching (KUC)"
          value="Kuching (KUC)"
          {...getOverrideProps(overrides, "port2option57")}
        ></option>
        <option
          children="KUM"
          value="KUM"
          {...getOverrideProps(overrides, "port2option58")}
        ></option>
        <option
          children="Labuan (LBN)"
          value="Labuan (LBN)"
          {...getOverrideProps(overrides, "port2option59")}
        ></option>
        <option
          children="Laem Chabang (LCB)"
          value="Laem Chabang (LCB)"
          {...getOverrideProps(overrides, "port2option60")}
        ></option>
        <option
          children="Lahad Datu (LDU)"
          value="Lahad Datu (LDU)"
          {...getOverrideProps(overrides, "port2option61")}
        ></option>
        <option
          children="Lhokseumawe (LHOK)"
          value="Lhokseumawe (LHOK)"
          {...getOverrideProps(overrides, "port2option62")}
        ></option>
        <option
          children="Lumut (LUM)"
          value="Lumut (LUM)"
          {...getOverrideProps(overrides, "port2option63")}
        ></option>
        <option
          children="Maeklong (Firesun) (MKG)"
          value="Maeklong (Firesun) (MKG)"
          {...getOverrideProps(overrides, "port2option64")}
        ></option>
        <option
          children="Makassar (MAK)"
          value="Makassar (MAK)"
          {...getOverrideProps(overrides, "port2option65")}
        ></option>
        <option
          children="Malacca (MAL)"
          value="Malacca (MAL)"
          {...getOverrideProps(overrides, "port2option66")}
        ></option>
        <option
          children="Manila Habour (MNL)"
          value="Manila Habour (MNL)"
          {...getOverrideProps(overrides, "port2option67")}
        ></option>
        <option
          children="MAP"
          value="MAP"
          {...getOverrideProps(overrides, "port2option68")}
        ></option>
        <option
          children="MAP "
          value="MAP "
          {...getOverrideProps(overrides, "port2option69")}
        ></option>
        <option
          children="Maptaphut (MAT)"
          value="Maptaphut (MAT)"
          {...getOverrideProps(overrides, "port2option70")}
        ></option>
        <option
          children="Marunda (MRD)"
          value="Marunda (MRD)"
          {...getOverrideProps(overrides, "port2option71")}
        ></option>
        <option
          children="Mawei Fuzhou (FOC)"
          value="Mawei Fuzhou (FOC)"
          {...getOverrideProps(overrides, "port2option72")}
        ></option>
        <option
          children="Muara (MUR)"
          value="Muara (MUR)"
          {...getOverrideProps(overrides, "port2option73")}
        ></option>
        <option
          children="My Tho (MUT)"
          value="My Tho (MUT)"
          {...getOverrideProps(overrides, "port2option74")}
        ></option>
        <option
          children="Nan Tong (NTG)"
          value="Nan Tong (NTG)"
          {...getOverrideProps(overrides, "port2option75")}
        ></option>
        <option
          children="Narathiwat (NAW)"
          value="Narathiwat (NAW)"
          {...getOverrideProps(overrides, "port2option76")}
        ></option>
        <option
          children="Nghi Son (NGH)"
          value="Nghi Son (NGH)"
          {...getOverrideProps(overrides, "port2option77")}
        ></option>
        <option
          children="Ningde (NDE)"
          value="Ningde (NDE)"
          {...getOverrideProps(overrides, "port2option78")}
        ></option>
        <option
          children="Nunukan (NNX)"
          value="Nunukan (NNX)"
          {...getOverrideProps(overrides, "port2option79")}
        ></option>
        <option
          children="Oknha Mong Port (OMP)"
          value="Oknha Mong Port (OMP)"
          {...getOverrideProps(overrides, "port2option80")}
        ></option>
        <option
          children="Onomichi (ONO)"
          value="Onomichi (ONO)"
          {...getOverrideProps(overrides, "port2option81")}
        ></option>
        <option
          children="Padang - Telux Buyur (TBR)"
          value="Padang - Telux Buyur (TBR)"
          {...getOverrideProps(overrides, "port2option82")}
        ></option>
        <option
          children="PAKAN Baru (PKRU)"
          value="PAKAN Baru (PKRU)"
          {...getOverrideProps(overrides, "port2option83")}
        ></option>
        <option
          children="Palembang (PLB)"
          value="Palembang (PLB)"
          {...getOverrideProps(overrides, "port2option84")}
        ></option>
        <option
          children="Panjang (PNJ)"
          value="Panjang (PNJ)"
          {...getOverrideProps(overrides, "port2option85")}
        ></option>
        <option
          children="Pasir Gudang (PAS)"
          value="Pasir Gudang (PAS)"
          {...getOverrideProps(overrides, "port2option86")}
        ></option>
        <option
          children="Pattani (PTN)"
          value="Pattani (PTN)"
          {...getOverrideProps(overrides, "port2option87")}
        ></option>
        <option
          children="Penang (PNG)"
          value="Penang (PNG)"
          {...getOverrideProps(overrides, "port2option88")}
        ></option>
        <option
          children="Phnom Penh (PNH)"
          value="Phnom Penh (PNH)"
          {...getOverrideProps(overrides, "port2option89")}
        ></option>
        <option
          children="Phra Chulachomklao Fort (PCF)"
          value="Phra Chulachomklao Fort (PCF)"
          {...getOverrideProps(overrides, "port2option90")}
        ></option>
        <option
          children="Phuket (HKT)"
          value="Phuket (HKT)"
          {...getOverrideProps(overrides, "port2option91")}
        ></option>
        <option
          children="Phumy (PHU)"
          value="Phumy (PHU)"
          {...getOverrideProps(overrides, "port2option92")}
        ></option>
        <option
          children="Plathong Oil Rig (PATO)"
          value="Plathong Oil Rig (PATO)"
          {...getOverrideProps(overrides, "port2option93")}
        ></option>
        <option
          children="Pontianak (POT)"
          value="Pontianak (POT)"
          {...getOverrideProps(overrides, "port2option94")}
        ></option>
        <option
          children="Port Klang (PKL)"
          value="Port Klang (PKL)"
          {...getOverrideProps(overrides, "port2option95")}
        ></option>
        <option
          children="Port Moresby (PGPOM)"
          value="Port Moresby (PGPOM)"
          {...getOverrideProps(overrides, "port2option96")}
        ></option>
        <option
          children="Poso (POSO)"
          value="Poso (POSO)"
          {...getOverrideProps(overrides, "port2option97")}
        ></option>
        <option
          children="Pusan (PUS)"
          value="Pusan (PUS)"
          {...getOverrideProps(overrides, "port2option98")}
        ></option>
        <option
          children="Quy Nhon (QNN)"
          value="Quy Nhon (QNN)"
          {...getOverrideProps(overrides, "port2option99")}
        ></option>
        <option
          children="Ranong (UNN)"
          value="Ranong (UNN)"
          {...getOverrideProps(overrides, "port2option100")}
        ></option>
        <option
          children="Rayong (IRPC)"
          value="Rayong (IRPC)"
          {...getOverrideProps(overrides, "port2option101")}
        ></option>
        <option
          children="Sampit (SMQ)"
          value="Sampit (SMQ)"
          {...getOverrideProps(overrides, "port2option102")}
        ></option>
        <option
          children="Sandakan (SAN)"
          value="Sandakan (SAN)"
          {...getOverrideProps(overrides, "port2option103")}
        ></option>
        <option
          children="Sarawak (SRW)"
          value="Sarawak (SRW)"
          {...getOverrideProps(overrides, "port2option104")}
        ></option>
        <option
          children="Sarekei (SRK)"
          value="Sarekei (SRK)"
          {...getOverrideProps(overrides, "port2option105")}
        ></option>
        <option
          children="Sattahip (SATP)"
          value="Sattahip (SATP)"
          {...getOverrideProps(overrides, "port2option106")}
        ></option>
        <option
          children="Semarang - Tanjung Emas (SRG)"
          value="Semarang - Tanjung Emas (SRG)"
          {...getOverrideProps(overrides, "port2option107")}
        ></option>
        <option
          children="Sibu (SIB)"
          value="Sibu (SIB)"
          {...getOverrideProps(overrides, "port2option108")}
        ></option>
        <option
          children="Singapore (SG)"
          value="Singapore (SG)"
          {...getOverrideProps(overrides, "port2option109")}
        ></option>
        <option
          children="Sipitang (SIP)"
          value="Sipitang (SIP)"
          {...getOverrideProps(overrides, "port2option110")}
        ></option>
        <option
          children="Son Duong (SOD)"
          value="Son Duong (SOD)"
          {...getOverrideProps(overrides, "port2option111")}
        ></option>
        <option
          children="Songkhla (SK)"
          value="Songkhla (SK)"
          {...getOverrideProps(overrides, "port2option112")}
        ></option>
        <option
          children="Srihanoville (SIH)"
          value="Srihanoville (SIH)"
          {...getOverrideProps(overrides, "port2option113")}
        ></option>
        <option
          children="Sriracha Harbor (SRC)"
          value="Sriracha Harbor (SRC)"
          {...getOverrideProps(overrides, "port2option114")}
        ></option>
        <option
          children="Sritama Jetty (STM)"
          value="Sritama Jetty (STM)"
          {...getOverrideProps(overrides, "port2option115")}
        ></option>
        <option
          children="Steung Hav (SHV)"
          value="Steung Hav (SHV)"
          {...getOverrideProps(overrides, "port2option116")}
        ></option>
        <option
          children="Sungai Guntung (SGGT)"
          value="Sungai Guntung (SGGT)"
          {...getOverrideProps(overrides, "port2option117")}
        ></option>
        <option
          children="Surabaya (SUBY)"
          value="Surabaya (SUBY)"
          {...getOverrideProps(overrides, "port2option118")}
        ></option>
        <option
          children="Surat Thanee (SRT)"
          value="Surat Thanee (SRT)"
          {...getOverrideProps(overrides, "port2option119")}
        ></option>
        <option
          children="Tacloban (TAC)"
          value="Tacloban (TAC)"
          {...getOverrideProps(overrides, "port2option120")}
        ></option>
        <option
          children="Tagbilaran (TAG)"
          value="Tagbilaran (TAG)"
          {...getOverrideProps(overrides, "port2option121")}
        ></option>
        <option
          children="Tanjong Manis (TGM)"
          value="Tanjong Manis (TGM)"
          {...getOverrideProps(overrides, "port2option122")}
        ></option>
        <option
          children="Tanjung Batu (TJQ)"
          value="Tanjung Batu (TJQ)"
          {...getOverrideProps(overrides, "port2option123")}
        ></option>
        <option
          children="Tanjung Priok (TP)"
          value="Tanjung Priok (TP)"
          {...getOverrideProps(overrides, "port2option124")}
        ></option>
        <option
          children="Tarjun (TAR)"
          value="Tarjun (TAR)"
          {...getOverrideProps(overrides, "port2option125")}
        ></option>
        <option
          children="Tawau (TAW)"
          value="Tawau (TAW)"
          {...getOverrideProps(overrides, "port2option126")}
        ></option>
        <option
          children="Terengganu (TGG)"
          value="Terengganu (TGG)"
          {...getOverrideProps(overrides, "port2option127")}
        ></option>
        <option
          children="Tha Sala (TSL)"
          value="Tha Sala (TSL)"
          {...getOverrideProps(overrides, "port2option128")}
        ></option>
        <option
          children="TJM"
          value="TJM"
          {...getOverrideProps(overrides, "port2option129")}
        ></option>
        <option
          children="Tsukumi (TSUM)"
          value="Tsukumi (TSUM)"
          {...getOverrideProps(overrides, "port2option130")}
        ></option>
        <option
          children="Vung Ang (VAG)"
          value="Vung Ang (VAG)"
          {...getOverrideProps(overrides, "port2option131")}
        ></option>
        <option
          children="Vung Tau (VUT)"
          value="Vung Tau (VUT)"
          {...getOverrideProps(overrides, "port2option132")}
        ></option>
        <option
          children="Yangon (RGN)"
          value="Yangon (RGN)"
          {...getOverrideProps(overrides, "port2option133")}
        ></option>
      </SelectField>
      <SelectField
        label="Port 3"
        placeholder="Please select an option"
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
          children="BA"
          value="BA"
          {...getOverrideProps(overrides, "port3option3")}
        ></option>
        <option
          children="Bahodopi (BHDP)"
          value="Bahodopi (BHDP)"
          {...getOverrideProps(overrides, "port3option4")}
        ></option>
        <option
          children="Balikpapan (BPN)"
          value="Balikpapan (BPN)"
          {...getOverrideProps(overrides, "port3option5")}
        ></option>
        <option
          children="Bang Sapan (BS)"
          value="Bang Sapan (BS)"
          {...getOverrideProps(overrides, "port3option6")}
        ></option>
        <option
          children="Bangkok (BK)"
          value="Bangkok (BK)"
          {...getOverrideProps(overrides, "port3option7")}
        ></option>
        <option
          children="Bangpakong (BAK)"
          value="Bangpakong (BAK)"
          {...getOverrideProps(overrides, "port3option8")}
        ></option>
        <option
          children="Banyuwangi - Tanjung Wangi (BJU)"
          value="Banyuwangi - Tanjung Wangi (BJU)"
          {...getOverrideProps(overrides, "port3option9")}
        ></option>
        <option
          children="Batam (BAT)"
          value="Batam (BAT)"
          {...getOverrideProps(overrides, "port3option10")}
        ></option>
        <option
          children="Beihai (BHY)"
          value="Beihai (BHY)"
          {...getOverrideProps(overrides, "port3option11")}
        ></option>
        <option
          children="Belawan (BRW)"
          value="Belawan (BRW)"
          {...getOverrideProps(overrides, "port3option12")}
        ></option>
        <option
          children="Benoa (Bali) (BAO)"
          value="Benoa (Bali) (BAO)"
          {...getOverrideProps(overrides, "port3option13")}
        ></option>
        <option
          children="Bintan (BTN)"
          value="Bintan (BTN)"
          {...getOverrideProps(overrides, "port3option14")}
        ></option>
        <option
          children="Bintulu (BIN)"
          value="Bintulu (BIN)"
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
          children="CX"
          value="CX"
          {...getOverrideProps(overrides, "port3option28")}
        ></option>
        <option
          children="Danang (DAD)"
          value="Danang (DAD)"
          {...getOverrideProps(overrides, "port3option29")}
        ></option>
        <option
          children="Davao (Sasa Wharf) (DVO)"
          value="Davao (Sasa Wharf) (DVO)"
          {...getOverrideProps(overrides, "port3option30")}
        ></option>
        <option
          children="Dhaka (DKA)"
          value="Dhaka (DKA)"
          {...getOverrideProps(overrides, "port3option31")}
        ></option>
        <option
          children="Dumai (DMI)"
          value="Dumai (DMI)"
          {...getOverrideProps(overrides, "port3option32")}
        ></option>
        <option
          children="Dung Quat (DQT)"
          value="Dung Quat (DQT)"
          {...getOverrideProps(overrides, "port3option33")}
        ></option>
        <option
          children="Fangcheng (FAN)"
          value="Fangcheng (FAN)"
          {...getOverrideProps(overrides, "port3option34")}
        ></option>
        <option
          children="Futong (FTG)"
          value="Futong (FTG)"
          {...getOverrideProps(overrides, "port3option35")}
        ></option>
        <option
          children="Godau port  (GDP)"
          value="Godau port  (GDP)"
          {...getOverrideProps(overrides, "port3option36")}
        ></option>
        <option
          children="GRN"
          value="GRN"
          {...getOverrideProps(overrides, "port3option37")}
        ></option>
        <option
          children="Haiphong (HPH)"
          value="Haiphong (HPH)"
          {...getOverrideProps(overrides, "port3option38")}
        ></option>
        <option
          children="Halong Bay (HLG)"
          value="Halong Bay (HLG)"
          {...getOverrideProps(overrides, "port3option39")}
        ></option>
        <option
          children="HO CHI MINH (HCM)"
          value="HO CHI MINH (HCM)"
          {...getOverrideProps(overrides, "port3option40")}
        ></option>
        <option
          children="Hon Gai (HON)"
          value="Hon Gai (HON)"
          {...getOverrideProps(overrides, "port3option41")}
        ></option>
        <option
          children="Hong Kong (HKG)"
          value="Hong Kong (HKG)"
          {...getOverrideProps(overrides, "port3option42")}
        ></option>
        <option
          children="Jakarta (JAK)"
          value="Jakarta (JAK)"
          {...getOverrideProps(overrides, "port3option43")}
        ></option>
        <option
          children="Jambi (JBI)"
          value="Jambi (JBI)"
          {...getOverrideProps(overrides, "port3option44")}
        ></option>
        <option
          children="K.K. Kota Kinabalu (KK)"
          value="K.K. Kota Kinabalu (KK)"
          {...getOverrideProps(overrides, "port3option45")}
        ></option>
        <option
          children="Kampot (KMP)"
          value="Kampot (KMP)"
          {...getOverrideProps(overrides, "port3option46")}
        ></option>
        <option
          children="Kantang (KTG)"
          value="Kantang (KTG)"
          {...getOverrideProps(overrides, "port3option47")}
        ></option>
        <option
          children="Kedah (KKH)"
          value="Kedah (KKH)"
          {...getOverrideProps(overrides, "port3option48")}
        ></option>
        <option
          children="Kelantan (KLT)"
          value="Kelantan (KLT)"
          {...getOverrideProps(overrides, "port3option49")}
        ></option>
        <option
          children="KEM "
          value="KEM "
          {...getOverrideProps(overrides, "port3option50")}
        ></option>
        <option
          children="Kemaman (KMN)"
          value="Kemaman (KMN)"
          {...getOverrideProps(overrides, "port3option51")}
        ></option>
        <option
          children="Khanom (KHM)"
          value="Khanom (KHM)"
          {...getOverrideProps(overrides, "port3option52")}
        ></option>
        <option
          children="Ko Sichang (KSI)"
          value="Ko Sichang (KSI)"
          {...getOverrideProps(overrides, "port3option53")}
        ></option>
        <option
          children="Kolkata (CCU)"
          value="Kolkata (CCU)"
          {...getOverrideProps(overrides, "port3option54")}
        ></option>
        <option
          children="Kor Samui (KSM)"
          value="Kor Samui (KSM)"
          {...getOverrideProps(overrides, "port3option55")}
        ></option>
        <option
          children="Kuantan (KT)"
          value="Kuantan (KT)"
          {...getOverrideProps(overrides, "port3option56")}
        ></option>
        <option
          children="Kuching (KUC)"
          value="Kuching (KUC)"
          {...getOverrideProps(overrides, "port3option57")}
        ></option>
        <option
          children="KUM"
          value="KUM"
          {...getOverrideProps(overrides, "port3option58")}
        ></option>
        <option
          children="Labuan (LBN)"
          value="Labuan (LBN)"
          {...getOverrideProps(overrides, "port3option59")}
        ></option>
        <option
          children="Laem Chabang (LCB)"
          value="Laem Chabang (LCB)"
          {...getOverrideProps(overrides, "port3option60")}
        ></option>
        <option
          children="Lahad Datu (LDU)"
          value="Lahad Datu (LDU)"
          {...getOverrideProps(overrides, "port3option61")}
        ></option>
        <option
          children="Lhokseumawe (LHOK)"
          value="Lhokseumawe (LHOK)"
          {...getOverrideProps(overrides, "port3option62")}
        ></option>
        <option
          children="Lumut (LUM)"
          value="Lumut (LUM)"
          {...getOverrideProps(overrides, "port3option63")}
        ></option>
        <option
          children="Maeklong (Firesun) (MKG)"
          value="Maeklong (Firesun) (MKG)"
          {...getOverrideProps(overrides, "port3option64")}
        ></option>
        <option
          children="Makassar (MAK)"
          value="Makassar (MAK)"
          {...getOverrideProps(overrides, "port3option65")}
        ></option>
        <option
          children="Malacca (MAL)"
          value="Malacca (MAL)"
          {...getOverrideProps(overrides, "port3option66")}
        ></option>
        <option
          children="Manila Habour (MNL)"
          value="Manila Habour (MNL)"
          {...getOverrideProps(overrides, "port3option67")}
        ></option>
        <option
          children="MAP"
          value="MAP"
          {...getOverrideProps(overrides, "port3option68")}
        ></option>
        <option
          children="MAP "
          value="MAP "
          {...getOverrideProps(overrides, "port3option69")}
        ></option>
        <option
          children="Maptaphut (MAT)"
          value="Maptaphut (MAT)"
          {...getOverrideProps(overrides, "port3option70")}
        ></option>
        <option
          children="Marunda (MRD)"
          value="Marunda (MRD)"
          {...getOverrideProps(overrides, "port3option71")}
        ></option>
        <option
          children="Mawei Fuzhou (FOC)"
          value="Mawei Fuzhou (FOC)"
          {...getOverrideProps(overrides, "port3option72")}
        ></option>
        <option
          children="Muara (MUR)"
          value="Muara (MUR)"
          {...getOverrideProps(overrides, "port3option73")}
        ></option>
        <option
          children="My Tho (MUT)"
          value="My Tho (MUT)"
          {...getOverrideProps(overrides, "port3option74")}
        ></option>
        <option
          children="Nan Tong (NTG)"
          value="Nan Tong (NTG)"
          {...getOverrideProps(overrides, "port3option75")}
        ></option>
        <option
          children="Narathiwat (NAW)"
          value="Narathiwat (NAW)"
          {...getOverrideProps(overrides, "port3option76")}
        ></option>
        <option
          children="Nghi Son (NGH)"
          value="Nghi Son (NGH)"
          {...getOverrideProps(overrides, "port3option77")}
        ></option>
        <option
          children="Ningde (NDE)"
          value="Ningde (NDE)"
          {...getOverrideProps(overrides, "port3option78")}
        ></option>
        <option
          children="Nunukan (NNX)"
          value="Nunukan (NNX)"
          {...getOverrideProps(overrides, "port3option79")}
        ></option>
        <option
          children="Oknha Mong Port (OMP)"
          value="Oknha Mong Port (OMP)"
          {...getOverrideProps(overrides, "port3option80")}
        ></option>
        <option
          children="Onomichi (ONO)"
          value="Onomichi (ONO)"
          {...getOverrideProps(overrides, "port3option81")}
        ></option>
        <option
          children="Padang - Telux Buyur (TBR)"
          value="Padang - Telux Buyur (TBR)"
          {...getOverrideProps(overrides, "port3option82")}
        ></option>
        <option
          children="PAKAN Baru (PKRU)"
          value="PAKAN Baru (PKRU)"
          {...getOverrideProps(overrides, "port3option83")}
        ></option>
        <option
          children="Palembang (PLB)"
          value="Palembang (PLB)"
          {...getOverrideProps(overrides, "port3option84")}
        ></option>
        <option
          children="Panjang (PNJ)"
          value="Panjang (PNJ)"
          {...getOverrideProps(overrides, "port3option85")}
        ></option>
        <option
          children="Pasir Gudang (PAS)"
          value="Pasir Gudang (PAS)"
          {...getOverrideProps(overrides, "port3option86")}
        ></option>
        <option
          children="Pattani (PTN)"
          value="Pattani (PTN)"
          {...getOverrideProps(overrides, "port3option87")}
        ></option>
        <option
          children="Penang (PNG)"
          value="Penang (PNG)"
          {...getOverrideProps(overrides, "port3option88")}
        ></option>
        <option
          children="Phnom Penh (PNH)"
          value="Phnom Penh (PNH)"
          {...getOverrideProps(overrides, "port3option89")}
        ></option>
        <option
          children="Phra Chulachomklao Fort (PCF)"
          value="Phra Chulachomklao Fort (PCF)"
          {...getOverrideProps(overrides, "port3option90")}
        ></option>
        <option
          children="Phuket (HKT)"
          value="Phuket (HKT)"
          {...getOverrideProps(overrides, "port3option91")}
        ></option>
        <option
          children="Phumy (PHU)"
          value="Phumy (PHU)"
          {...getOverrideProps(overrides, "port3option92")}
        ></option>
        <option
          children="Plathong Oil Rig (PATO)"
          value="Plathong Oil Rig (PATO)"
          {...getOverrideProps(overrides, "port3option93")}
        ></option>
        <option
          children="Pontianak (POT)"
          value="Pontianak (POT)"
          {...getOverrideProps(overrides, "port3option94")}
        ></option>
        <option
          children="Port Klang (PKL)"
          value="Port Klang (PKL)"
          {...getOverrideProps(overrides, "port3option95")}
        ></option>
        <option
          children="Port Moresby (PGPOM)"
          value="Port Moresby (PGPOM)"
          {...getOverrideProps(overrides, "port3option96")}
        ></option>
        <option
          children="Poso (POSO)"
          value="Poso (POSO)"
          {...getOverrideProps(overrides, "port3option97")}
        ></option>
        <option
          children="Pusan (PUS)"
          value="Pusan (PUS)"
          {...getOverrideProps(overrides, "port3option98")}
        ></option>
        <option
          children="Quy Nhon (QNN)"
          value="Quy Nhon (QNN)"
          {...getOverrideProps(overrides, "port3option99")}
        ></option>
        <option
          children="Ranong (UNN)"
          value="Ranong (UNN)"
          {...getOverrideProps(overrides, "port3option100")}
        ></option>
        <option
          children="Rayong (IRPC)"
          value="Rayong (IRPC)"
          {...getOverrideProps(overrides, "port3option101")}
        ></option>
        <option
          children="Sampit (SMQ)"
          value="Sampit (SMQ)"
          {...getOverrideProps(overrides, "port3option102")}
        ></option>
        <option
          children="Sandakan (SAN)"
          value="Sandakan (SAN)"
          {...getOverrideProps(overrides, "port3option103")}
        ></option>
        <option
          children="Sarawak (SRW)"
          value="Sarawak (SRW)"
          {...getOverrideProps(overrides, "port3option104")}
        ></option>
        <option
          children="Sarekei (SRK)"
          value="Sarekei (SRK)"
          {...getOverrideProps(overrides, "port3option105")}
        ></option>
        <option
          children="Sattahip (SATP)"
          value="Sattahip (SATP)"
          {...getOverrideProps(overrides, "port3option106")}
        ></option>
        <option
          children="Semarang - Tanjung Emas (SRG)"
          value="Semarang - Tanjung Emas (SRG)"
          {...getOverrideProps(overrides, "port3option107")}
        ></option>
        <option
          children="Sibu (SIB)"
          value="Sibu (SIB)"
          {...getOverrideProps(overrides, "port3option108")}
        ></option>
        <option
          children="Singapore (SG)"
          value="Singapore (SG)"
          {...getOverrideProps(overrides, "port3option109")}
        ></option>
        <option
          children="Sipitang (SIP)"
          value="Sipitang (SIP)"
          {...getOverrideProps(overrides, "port3option110")}
        ></option>
        <option
          children="Son Duong (SOD)"
          value="Son Duong (SOD)"
          {...getOverrideProps(overrides, "port3option111")}
        ></option>
        <option
          children="Songkhla (SK)"
          value="Songkhla (SK)"
          {...getOverrideProps(overrides, "port3option112")}
        ></option>
        <option
          children="Srihanoville (SIH)"
          value="Srihanoville (SIH)"
          {...getOverrideProps(overrides, "port3option113")}
        ></option>
        <option
          children="Sriracha Harbor (SRC)"
          value="Sriracha Harbor (SRC)"
          {...getOverrideProps(overrides, "port3option114")}
        ></option>
        <option
          children="Sritama Jetty (STM)"
          value="Sritama Jetty (STM)"
          {...getOverrideProps(overrides, "port3option115")}
        ></option>
        <option
          children="Steung Hav (SHV)"
          value="Steung Hav (SHV)"
          {...getOverrideProps(overrides, "port3option116")}
        ></option>
        <option
          children="Sungai Guntung (SGGT)"
          value="Sungai Guntung (SGGT)"
          {...getOverrideProps(overrides, "port3option117")}
        ></option>
        <option
          children="Surabaya (SUBY)"
          value="Surabaya (SUBY)"
          {...getOverrideProps(overrides, "port3option118")}
        ></option>
        <option
          children="Surat Thanee (SRT)"
          value="Surat Thanee (SRT)"
          {...getOverrideProps(overrides, "port3option119")}
        ></option>
        <option
          children="Tacloban (TAC)"
          value="Tacloban (TAC)"
          {...getOverrideProps(overrides, "port3option120")}
        ></option>
        <option
          children="Tagbilaran (TAG)"
          value="Tagbilaran (TAG)"
          {...getOverrideProps(overrides, "port3option121")}
        ></option>
        <option
          children="Tanjong Manis (TGM)"
          value="Tanjong Manis (TGM)"
          {...getOverrideProps(overrides, "port3option122")}
        ></option>
        <option
          children="Tanjung Batu (TJQ)"
          value="Tanjung Batu (TJQ)"
          {...getOverrideProps(overrides, "port3option123")}
        ></option>
        <option
          children="Tanjung Priok (TP)"
          value="Tanjung Priok (TP)"
          {...getOverrideProps(overrides, "port3option124")}
        ></option>
        <option
          children="Tarjun (TAR)"
          value="Tarjun (TAR)"
          {...getOverrideProps(overrides, "port3option125")}
        ></option>
        <option
          children="Tawau (TAW)"
          value="Tawau (TAW)"
          {...getOverrideProps(overrides, "port3option126")}
        ></option>
        <option
          children="Terengganu (TGG)"
          value="Terengganu (TGG)"
          {...getOverrideProps(overrides, "port3option127")}
        ></option>
        <option
          children="Tha Sala (TSL)"
          value="Tha Sala (TSL)"
          {...getOverrideProps(overrides, "port3option128")}
        ></option>
        <option
          children="TJM"
          value="TJM"
          {...getOverrideProps(overrides, "port3option129")}
        ></option>
        <option
          children="Tsukumi (TSUM)"
          value="Tsukumi (TSUM)"
          {...getOverrideProps(overrides, "port3option130")}
        ></option>
        <option
          children="Vung Ang (VAG)"
          value="Vung Ang (VAG)"
          {...getOverrideProps(overrides, "port3option131")}
        ></option>
        <option
          children="Vung Tau (VUT)"
          value="Vung Tau (VUT)"
          {...getOverrideProps(overrides, "port3option132")}
        ></option>
        <option
          children="Yangon (RGN)"
          value="Yangon (RGN)"
          {...getOverrideProps(overrides, "port3option133")}
        ></option>
      </SelectField>
      <SelectField
        label="Port 4"
        placeholder="Please select an option"
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
          children="BA"
          value="BA"
          {...getOverrideProps(overrides, "port4option3")}
        ></option>
        <option
          children="Bahodopi (BHDP)"
          value="Bahodopi (BHDP)"
          {...getOverrideProps(overrides, "port4option4")}
        ></option>
        <option
          children="Balikpapan (BPN)"
          value="Balikpapan (BPN)"
          {...getOverrideProps(overrides, "port4option5")}
        ></option>
        <option
          children="Bang Sapan (BS)"
          value="Bang Sapan (BS)"
          {...getOverrideProps(overrides, "port4option6")}
        ></option>
        <option
          children="Bangkok (BK)"
          value="Bangkok (BK)"
          {...getOverrideProps(overrides, "port4option7")}
        ></option>
        <option
          children="Bangpakong (BAK)"
          value="Bangpakong (BAK)"
          {...getOverrideProps(overrides, "port4option8")}
        ></option>
        <option
          children="Banyuwangi - Tanjung Wangi (BJU)"
          value="Banyuwangi - Tanjung Wangi (BJU)"
          {...getOverrideProps(overrides, "port4option9")}
        ></option>
        <option
          children="Batam (BAT)"
          value="Batam (BAT)"
          {...getOverrideProps(overrides, "port4option10")}
        ></option>
        <option
          children="Beihai (BHY)"
          value="Beihai (BHY)"
          {...getOverrideProps(overrides, "port4option11")}
        ></option>
        <option
          children="Belawan (BRW)"
          value="Belawan (BRW)"
          {...getOverrideProps(overrides, "port4option12")}
        ></option>
        <option
          children="Benoa (Bali) (BAO)"
          value="Benoa (Bali) (BAO)"
          {...getOverrideProps(overrides, "port4option13")}
        ></option>
        <option
          children="Bintan (BTN)"
          value="Bintan (BTN)"
          {...getOverrideProps(overrides, "port4option14")}
        ></option>
        <option
          children="Bintulu (BIN)"
          value="Bintulu (BIN)"
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
          children="CX"
          value="CX"
          {...getOverrideProps(overrides, "port4option28")}
        ></option>
        <option
          children="Danang (DAD)"
          value="Danang (DAD)"
          {...getOverrideProps(overrides, "port4option29")}
        ></option>
        <option
          children="Davao (Sasa Wharf) (DVO)"
          value="Davao (Sasa Wharf) (DVO)"
          {...getOverrideProps(overrides, "port4option30")}
        ></option>
        <option
          children="Dhaka (DKA)"
          value="Dhaka (DKA)"
          {...getOverrideProps(overrides, "port4option31")}
        ></option>
        <option
          children="Dumai (DMI)"
          value="Dumai (DMI)"
          {...getOverrideProps(overrides, "port4option32")}
        ></option>
        <option
          children="Dung Quat (DQT)"
          value="Dung Quat (DQT)"
          {...getOverrideProps(overrides, "port4option33")}
        ></option>
        <option
          children="Fangcheng (FAN)"
          value="Fangcheng (FAN)"
          {...getOverrideProps(overrides, "port4option34")}
        ></option>
        <option
          children="Futong (FTG)"
          value="Futong (FTG)"
          {...getOverrideProps(overrides, "port4option35")}
        ></option>
        <option
          children="Godau port  (GDP)"
          value="Godau port  (GDP)"
          {...getOverrideProps(overrides, "port4option36")}
        ></option>
        <option
          children="GRN"
          value="GRN"
          {...getOverrideProps(overrides, "port4option37")}
        ></option>
        <option
          children="Haiphong (HPH)"
          value="Haiphong (HPH)"
          {...getOverrideProps(overrides, "port4option38")}
        ></option>
        <option
          children="Halong Bay (HLG)"
          value="Halong Bay (HLG)"
          {...getOverrideProps(overrides, "port4option39")}
        ></option>
        <option
          children="HO CHI MINH (HCM)"
          value="HO CHI MINH (HCM)"
          {...getOverrideProps(overrides, "port4option40")}
        ></option>
        <option
          children="Hon Gai (HON)"
          value="Hon Gai (HON)"
          {...getOverrideProps(overrides, "port4option41")}
        ></option>
        <option
          children="Hong Kong (HKG)"
          value="Hong Kong (HKG)"
          {...getOverrideProps(overrides, "port4option42")}
        ></option>
        <option
          children="Jakarta (JAK)"
          value="Jakarta (JAK)"
          {...getOverrideProps(overrides, "port4option43")}
        ></option>
        <option
          children="Jambi (JBI)"
          value="Jambi (JBI)"
          {...getOverrideProps(overrides, "port4option44")}
        ></option>
        <option
          children="K.K. Kota Kinabalu (KK)"
          value="K.K. Kota Kinabalu (KK)"
          {...getOverrideProps(overrides, "port4option45")}
        ></option>
        <option
          children="Kampot (KMP)"
          value="Kampot (KMP)"
          {...getOverrideProps(overrides, "port4option46")}
        ></option>
        <option
          children="Kantang (KTG)"
          value="Kantang (KTG)"
          {...getOverrideProps(overrides, "port4option47")}
        ></option>
        <option
          children="Kedah (KKH)"
          value="Kedah (KKH)"
          {...getOverrideProps(overrides, "port4option48")}
        ></option>
        <option
          children="Kelantan (KLT)"
          value="Kelantan (KLT)"
          {...getOverrideProps(overrides, "port4option49")}
        ></option>
        <option
          children="KEM "
          value="KEM "
          {...getOverrideProps(overrides, "port4option50")}
        ></option>
        <option
          children="Kemaman (KMN)"
          value="Kemaman (KMN)"
          {...getOverrideProps(overrides, "port4option51")}
        ></option>
        <option
          children="Khanom (KHM)"
          value="Khanom (KHM)"
          {...getOverrideProps(overrides, "port4option52")}
        ></option>
        <option
          children="Ko Sichang (KSI)"
          value="Ko Sichang (KSI)"
          {...getOverrideProps(overrides, "port4option53")}
        ></option>
        <option
          children="Kolkata (CCU)"
          value="Kolkata (CCU)"
          {...getOverrideProps(overrides, "port4option54")}
        ></option>
        <option
          children="Kor Samui (KSM)"
          value="Kor Samui (KSM)"
          {...getOverrideProps(overrides, "port4option55")}
        ></option>
        <option
          children="Kuantan (KT)"
          value="Kuantan (KT)"
          {...getOverrideProps(overrides, "port4option56")}
        ></option>
        <option
          children="Kuching (KUC)"
          value="Kuching (KUC)"
          {...getOverrideProps(overrides, "port4option57")}
        ></option>
        <option
          children="KUM"
          value="KUM"
          {...getOverrideProps(overrides, "port4option58")}
        ></option>
        <option
          children="Labuan (LBN)"
          value="Labuan (LBN)"
          {...getOverrideProps(overrides, "port4option59")}
        ></option>
        <option
          children="Laem Chabang (LCB)"
          value="Laem Chabang (LCB)"
          {...getOverrideProps(overrides, "port4option60")}
        ></option>
        <option
          children="Lahad Datu (LDU)"
          value="Lahad Datu (LDU)"
          {...getOverrideProps(overrides, "port4option61")}
        ></option>
        <option
          children="Lhokseumawe (LHOK)"
          value="Lhokseumawe (LHOK)"
          {...getOverrideProps(overrides, "port4option62")}
        ></option>
        <option
          children="Lumut (LUM)"
          value="Lumut (LUM)"
          {...getOverrideProps(overrides, "port4option63")}
        ></option>
        <option
          children="Maeklong (Firesun) (MKG)"
          value="Maeklong (Firesun) (MKG)"
          {...getOverrideProps(overrides, "port4option64")}
        ></option>
        <option
          children="Makassar (MAK)"
          value="Makassar (MAK)"
          {...getOverrideProps(overrides, "port4option65")}
        ></option>
        <option
          children="Malacca (MAL)"
          value="Malacca (MAL)"
          {...getOverrideProps(overrides, "port4option66")}
        ></option>
        <option
          children="Manila Habour (MNL)"
          value="Manila Habour (MNL)"
          {...getOverrideProps(overrides, "port4option67")}
        ></option>
        <option
          children="MAP"
          value="MAP"
          {...getOverrideProps(overrides, "port4option68")}
        ></option>
        <option
          children="MAP "
          value="MAP "
          {...getOverrideProps(overrides, "port4option69")}
        ></option>
        <option
          children="Maptaphut (MAT)"
          value="Maptaphut (MAT)"
          {...getOverrideProps(overrides, "port4option70")}
        ></option>
        <option
          children="Marunda (MRD)"
          value="Marunda (MRD)"
          {...getOverrideProps(overrides, "port4option71")}
        ></option>
        <option
          children="Mawei Fuzhou (FOC)"
          value="Mawei Fuzhou (FOC)"
          {...getOverrideProps(overrides, "port4option72")}
        ></option>
        <option
          children="Muara (MUR)"
          value="Muara (MUR)"
          {...getOverrideProps(overrides, "port4option73")}
        ></option>
        <option
          children="My Tho (MUT)"
          value="My Tho (MUT)"
          {...getOverrideProps(overrides, "port4option74")}
        ></option>
        <option
          children="Nan Tong (NTG)"
          value="Nan Tong (NTG)"
          {...getOverrideProps(overrides, "port4option75")}
        ></option>
        <option
          children="Narathiwat (NAW)"
          value="Narathiwat (NAW)"
          {...getOverrideProps(overrides, "port4option76")}
        ></option>
        <option
          children="Nghi Son (NGH)"
          value="Nghi Son (NGH)"
          {...getOverrideProps(overrides, "port4option77")}
        ></option>
        <option
          children="Ningde (NDE)"
          value="Ningde (NDE)"
          {...getOverrideProps(overrides, "port4option78")}
        ></option>
        <option
          children="Nunukan (NNX)"
          value="Nunukan (NNX)"
          {...getOverrideProps(overrides, "port4option79")}
        ></option>
        <option
          children="Oknha Mong Port (OMP)"
          value="Oknha Mong Port (OMP)"
          {...getOverrideProps(overrides, "port4option80")}
        ></option>
        <option
          children="Onomichi (ONO)"
          value="Onomichi (ONO)"
          {...getOverrideProps(overrides, "port4option81")}
        ></option>
        <option
          children="Padang - Telux Buyur (TBR)"
          value="Padang - Telux Buyur (TBR)"
          {...getOverrideProps(overrides, "port4option82")}
        ></option>
        <option
          children="PAKAN Baru (PKRU)"
          value="PAKAN Baru (PKRU)"
          {...getOverrideProps(overrides, "port4option83")}
        ></option>
        <option
          children="Palembang (PLB)"
          value="Palembang (PLB)"
          {...getOverrideProps(overrides, "port4option84")}
        ></option>
        <option
          children="Panjang (PNJ)"
          value="Panjang (PNJ)"
          {...getOverrideProps(overrides, "port4option85")}
        ></option>
        <option
          children="Pasir Gudang (PAS)"
          value="Pasir Gudang (PAS)"
          {...getOverrideProps(overrides, "port4option86")}
        ></option>
        <option
          children="Pattani (PTN)"
          value="Pattani (PTN)"
          {...getOverrideProps(overrides, "port4option87")}
        ></option>
        <option
          children="Penang (PNG)"
          value="Penang (PNG)"
          {...getOverrideProps(overrides, "port4option88")}
        ></option>
        <option
          children="Phnom Penh (PNH)"
          value="Phnom Penh (PNH)"
          {...getOverrideProps(overrides, "port4option89")}
        ></option>
        <option
          children="Phra Chulachomklao Fort (PCF)"
          value="Phra Chulachomklao Fort (PCF)"
          {...getOverrideProps(overrides, "port4option90")}
        ></option>
        <option
          children="Phuket (HKT)"
          value="Phuket (HKT)"
          {...getOverrideProps(overrides, "port4option91")}
        ></option>
        <option
          children="Phumy (PHU)"
          value="Phumy (PHU)"
          {...getOverrideProps(overrides, "port4option92")}
        ></option>
        <option
          children="Plathong Oil Rig (PATO)"
          value="Plathong Oil Rig (PATO)"
          {...getOverrideProps(overrides, "port4option93")}
        ></option>
        <option
          children="Pontianak (POT)"
          value="Pontianak (POT)"
          {...getOverrideProps(overrides, "port4option94")}
        ></option>
        <option
          children="Port Klang (PKL)"
          value="Port Klang (PKL)"
          {...getOverrideProps(overrides, "port4option95")}
        ></option>
        <option
          children="Port Moresby (PGPOM)"
          value="Port Moresby (PGPOM)"
          {...getOverrideProps(overrides, "port4option96")}
        ></option>
        <option
          children="Poso (POSO)"
          value="Poso (POSO)"
          {...getOverrideProps(overrides, "port4option97")}
        ></option>
        <option
          children="Pusan (PUS)"
          value="Pusan (PUS)"
          {...getOverrideProps(overrides, "port4option98")}
        ></option>
        <option
          children="Quy Nhon (QNN)"
          value="Quy Nhon (QNN)"
          {...getOverrideProps(overrides, "port4option99")}
        ></option>
        <option
          children="Ranong (UNN)"
          value="Ranong (UNN)"
          {...getOverrideProps(overrides, "port4option100")}
        ></option>
        <option
          children="Rayong (IRPC)"
          value="Rayong (IRPC)"
          {...getOverrideProps(overrides, "port4option101")}
        ></option>
        <option
          children="Sampit (SMQ)"
          value="Sampit (SMQ)"
          {...getOverrideProps(overrides, "port4option102")}
        ></option>
        <option
          children="Sandakan (SAN)"
          value="Sandakan (SAN)"
          {...getOverrideProps(overrides, "port4option103")}
        ></option>
        <option
          children="Sarawak (SRW)"
          value="Sarawak (SRW)"
          {...getOverrideProps(overrides, "port4option104")}
        ></option>
        <option
          children="Sarekei (SRK)"
          value="Sarekei (SRK)"
          {...getOverrideProps(overrides, "port4option105")}
        ></option>
        <option
          children="Sattahip (SATP)"
          value="Sattahip (SATP)"
          {...getOverrideProps(overrides, "port4option106")}
        ></option>
        <option
          children="Semarang - Tanjung Emas (SRG)"
          value="Semarang - Tanjung Emas (SRG)"
          {...getOverrideProps(overrides, "port4option107")}
        ></option>
        <option
          children="Sibu (SIB)"
          value="Sibu (SIB)"
          {...getOverrideProps(overrides, "port4option108")}
        ></option>
        <option
          children="Singapore (SG)"
          value="Singapore (SG)"
          {...getOverrideProps(overrides, "port4option109")}
        ></option>
        <option
          children="Sipitang (SIP)"
          value="Sipitang (SIP)"
          {...getOverrideProps(overrides, "port4option110")}
        ></option>
        <option
          children="Son Duong (SOD)"
          value="Son Duong (SOD)"
          {...getOverrideProps(overrides, "port4option111")}
        ></option>
        <option
          children="Songkhla (SK)"
          value="Songkhla (SK)"
          {...getOverrideProps(overrides, "port4option112")}
        ></option>
        <option
          children="Srihanoville (SIH)"
          value="Srihanoville (SIH)"
          {...getOverrideProps(overrides, "port4option113")}
        ></option>
        <option
          children="Sriracha Harbor (SRC)"
          value="Sriracha Harbor (SRC)"
          {...getOverrideProps(overrides, "port4option114")}
        ></option>
        <option
          children="Sritama Jetty (STM)"
          value="Sritama Jetty (STM)"
          {...getOverrideProps(overrides, "port4option115")}
        ></option>
        <option
          children="Steung Hav (SHV)"
          value="Steung Hav (SHV)"
          {...getOverrideProps(overrides, "port4option116")}
        ></option>
        <option
          children="Sungai Guntung (SGGT)"
          value="Sungai Guntung (SGGT)"
          {...getOverrideProps(overrides, "port4option117")}
        ></option>
        <option
          children="Surabaya (SUBY)"
          value="Surabaya (SUBY)"
          {...getOverrideProps(overrides, "port4option118")}
        ></option>
        <option
          children="Surat Thanee (SRT)"
          value="Surat Thanee (SRT)"
          {...getOverrideProps(overrides, "port4option119")}
        ></option>
        <option
          children="Tacloban (TAC)"
          value="Tacloban (TAC)"
          {...getOverrideProps(overrides, "port4option120")}
        ></option>
        <option
          children="Tagbilaran (TAG)"
          value="Tagbilaran (TAG)"
          {...getOverrideProps(overrides, "port4option121")}
        ></option>
        <option
          children="Tanjong Manis (TGM)"
          value="Tanjong Manis (TGM)"
          {...getOverrideProps(overrides, "port4option122")}
        ></option>
        <option
          children="Tanjung Batu (TJQ)"
          value="Tanjung Batu (TJQ)"
          {...getOverrideProps(overrides, "port4option123")}
        ></option>
        <option
          children="Tanjung Priok (TP)"
          value="Tanjung Priok (TP)"
          {...getOverrideProps(overrides, "port4option124")}
        ></option>
        <option
          children="Tarjun (TAR)"
          value="Tarjun (TAR)"
          {...getOverrideProps(overrides, "port4option125")}
        ></option>
        <option
          children="Tawau (TAW)"
          value="Tawau (TAW)"
          {...getOverrideProps(overrides, "port4option126")}
        ></option>
        <option
          children="Terengganu (TGG)"
          value="Terengganu (TGG)"
          {...getOverrideProps(overrides, "port4option127")}
        ></option>
        <option
          children="Tha Sala (TSL)"
          value="Tha Sala (TSL)"
          {...getOverrideProps(overrides, "port4option128")}
        ></option>
        <option
          children="TJM"
          value="TJM"
          {...getOverrideProps(overrides, "port4option129")}
        ></option>
        <option
          children="Tsukumi (TSUM)"
          value="Tsukumi (TSUM)"
          {...getOverrideProps(overrides, "port4option130")}
        ></option>
        <option
          children="Vung Ang (VAG)"
          value="Vung Ang (VAG)"
          {...getOverrideProps(overrides, "port4option131")}
        ></option>
        <option
          children="Vung Tau (VUT)"
          value="Vung Tau (VUT)"
          {...getOverrideProps(overrides, "port4option132")}
        ></option>
        <option
          children="Yangon (RGN)"
          value="Yangon (RGN)"
          {...getOverrideProps(overrides, "port4option133")}
        ></option>
      </SelectField>
      <SelectField
        label="Port 5"
        placeholder="Please select an option"
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
          children="BA"
          value="BA"
          {...getOverrideProps(overrides, "port5option3")}
        ></option>
        <option
          children="Bahodopi (BHDP)"
          value="Bahodopi (BHDP)"
          {...getOverrideProps(overrides, "port5option4")}
        ></option>
        <option
          children="Balikpapan (BPN)"
          value="Balikpapan (BPN)"
          {...getOverrideProps(overrides, "port5option5")}
        ></option>
        <option
          children="Bang Sapan (BS)"
          value="Bang Sapan (BS)"
          {...getOverrideProps(overrides, "port5option6")}
        ></option>
        <option
          children="Bangkok (BK)"
          value="Bangkok (BK)"
          {...getOverrideProps(overrides, "port5option7")}
        ></option>
        <option
          children="Bangpakong (BAK)"
          value="Bangpakong (BAK)"
          {...getOverrideProps(overrides, "port5option8")}
        ></option>
        <option
          children="Banyuwangi - Tanjung Wangi (BJU)"
          value="Banyuwangi - Tanjung Wangi (BJU)"
          {...getOverrideProps(overrides, "port5option9")}
        ></option>
        <option
          children="Batam (BAT)"
          value="Batam (BAT)"
          {...getOverrideProps(overrides, "port5option10")}
        ></option>
        <option
          children="Beihai (BHY)"
          value="Beihai (BHY)"
          {...getOverrideProps(overrides, "port5option11")}
        ></option>
        <option
          children="Belawan (BRW)"
          value="Belawan (BRW)"
          {...getOverrideProps(overrides, "port5option12")}
        ></option>
        <option
          children="Benoa (Bali) (BAO)"
          value="Benoa (Bali) (BAO)"
          {...getOverrideProps(overrides, "port5option13")}
        ></option>
        <option
          children="Bintan (BTN)"
          value="Bintan (BTN)"
          {...getOverrideProps(overrides, "port5option14")}
        ></option>
        <option
          children="Bintulu (BIN)"
          value="Bintulu (BIN)"
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
          children="CX"
          value="CX"
          {...getOverrideProps(overrides, "port5option28")}
        ></option>
        <option
          children="Danang (DAD)"
          value="Danang (DAD)"
          {...getOverrideProps(overrides, "port5option29")}
        ></option>
        <option
          children="Davao (Sasa Wharf) (DVO)"
          value="Davao (Sasa Wharf) (DVO)"
          {...getOverrideProps(overrides, "port5option30")}
        ></option>
        <option
          children="Dhaka (DKA)"
          value="Dhaka (DKA)"
          {...getOverrideProps(overrides, "port5option31")}
        ></option>
        <option
          children="Dumai (DMI)"
          value="Dumai (DMI)"
          {...getOverrideProps(overrides, "port5option32")}
        ></option>
        <option
          children="Dung Quat (DQT)"
          value="Dung Quat (DQT)"
          {...getOverrideProps(overrides, "port5option33")}
        ></option>
        <option
          children="Fangcheng (FAN)"
          value="Fangcheng (FAN)"
          {...getOverrideProps(overrides, "port5option34")}
        ></option>
        <option
          children="Futong (FTG)"
          value="Futong (FTG)"
          {...getOverrideProps(overrides, "port5option35")}
        ></option>
        <option
          children="Godau port  (GDP)"
          value="Godau port  (GDP)"
          {...getOverrideProps(overrides, "port5option36")}
        ></option>
        <option
          children="GRN"
          value="GRN"
          {...getOverrideProps(overrides, "port5option37")}
        ></option>
        <option
          children="Haiphong (HPH)"
          value="Haiphong (HPH)"
          {...getOverrideProps(overrides, "port5option38")}
        ></option>
        <option
          children="Halong Bay (HLG)"
          value="Halong Bay (HLG)"
          {...getOverrideProps(overrides, "port5option39")}
        ></option>
        <option
          children="HO CHI MINH (HCM)"
          value="HO CHI MINH (HCM)"
          {...getOverrideProps(overrides, "port5option40")}
        ></option>
        <option
          children="Hon Gai (HON)"
          value="Hon Gai (HON)"
          {...getOverrideProps(overrides, "port5option41")}
        ></option>
        <option
          children="Hong Kong (HKG)"
          value="Hong Kong (HKG)"
          {...getOverrideProps(overrides, "port5option42")}
        ></option>
        <option
          children="Jakarta (JAK)"
          value="Jakarta (JAK)"
          {...getOverrideProps(overrides, "port5option43")}
        ></option>
        <option
          children="Jambi (JBI)"
          value="Jambi (JBI)"
          {...getOverrideProps(overrides, "port5option44")}
        ></option>
        <option
          children="K.K. Kota Kinabalu (KK)"
          value="K.K. Kota Kinabalu (KK)"
          {...getOverrideProps(overrides, "port5option45")}
        ></option>
        <option
          children="Kampot (KMP)"
          value="Kampot (KMP)"
          {...getOverrideProps(overrides, "port5option46")}
        ></option>
        <option
          children="Kantang (KTG)"
          value="Kantang (KTG)"
          {...getOverrideProps(overrides, "port5option47")}
        ></option>
        <option
          children="Kedah (KKH)"
          value="Kedah (KKH)"
          {...getOverrideProps(overrides, "port5option48")}
        ></option>
        <option
          children="Kelantan (KLT)"
          value="Kelantan (KLT)"
          {...getOverrideProps(overrides, "port5option49")}
        ></option>
        <option
          children="KEM "
          value="KEM "
          {...getOverrideProps(overrides, "port5option50")}
        ></option>
        <option
          children="Kemaman (KMN)"
          value="Kemaman (KMN)"
          {...getOverrideProps(overrides, "port5option51")}
        ></option>
        <option
          children="Khanom (KHM)"
          value="Khanom (KHM)"
          {...getOverrideProps(overrides, "port5option52")}
        ></option>
        <option
          children="Ko Sichang (KSI)"
          value="Ko Sichang (KSI)"
          {...getOverrideProps(overrides, "port5option53")}
        ></option>
        <option
          children="Kolkata (CCU)"
          value="Kolkata (CCU)"
          {...getOverrideProps(overrides, "port5option54")}
        ></option>
        <option
          children="Kor Samui (KSM)"
          value="Kor Samui (KSM)"
          {...getOverrideProps(overrides, "port5option55")}
        ></option>
        <option
          children="Kuantan (KT)"
          value="Kuantan (KT)"
          {...getOverrideProps(overrides, "port5option56")}
        ></option>
        <option
          children="Kuching (KUC)"
          value="Kuching (KUC)"
          {...getOverrideProps(overrides, "port5option57")}
        ></option>
        <option
          children="KUM"
          value="KUM"
          {...getOverrideProps(overrides, "port5option58")}
        ></option>
        <option
          children="Labuan (LBN)"
          value="Labuan (LBN)"
          {...getOverrideProps(overrides, "port5option59")}
        ></option>
        <option
          children="Laem Chabang (LCB)"
          value="Laem Chabang (LCB)"
          {...getOverrideProps(overrides, "port5option60")}
        ></option>
        <option
          children="Lahad Datu (LDU)"
          value="Lahad Datu (LDU)"
          {...getOverrideProps(overrides, "port5option61")}
        ></option>
        <option
          children="Lhokseumawe (LHOK)"
          value="Lhokseumawe (LHOK)"
          {...getOverrideProps(overrides, "port5option62")}
        ></option>
        <option
          children="Lumut (LUM)"
          value="Lumut (LUM)"
          {...getOverrideProps(overrides, "port5option63")}
        ></option>
        <option
          children="Maeklong (Firesun) (MKG)"
          value="Maeklong (Firesun) (MKG)"
          {...getOverrideProps(overrides, "port5option64")}
        ></option>
        <option
          children="Makassar (MAK)"
          value="Makassar (MAK)"
          {...getOverrideProps(overrides, "port5option65")}
        ></option>
        <option
          children="Malacca (MAL)"
          value="Malacca (MAL)"
          {...getOverrideProps(overrides, "port5option66")}
        ></option>
        <option
          children="Manila Habour (MNL)"
          value="Manila Habour (MNL)"
          {...getOverrideProps(overrides, "port5option67")}
        ></option>
        <option
          children="MAP"
          value="MAP"
          {...getOverrideProps(overrides, "port5option68")}
        ></option>
        <option
          children="MAP "
          value="MAP "
          {...getOverrideProps(overrides, "port5option69")}
        ></option>
        <option
          children="Maptaphut (MAT)"
          value="Maptaphut (MAT)"
          {...getOverrideProps(overrides, "port5option70")}
        ></option>
        <option
          children="Marunda (MRD)"
          value="Marunda (MRD)"
          {...getOverrideProps(overrides, "port5option71")}
        ></option>
        <option
          children="Mawei Fuzhou (FOC)"
          value="Mawei Fuzhou (FOC)"
          {...getOverrideProps(overrides, "port5option72")}
        ></option>
        <option
          children="Muara (MUR)"
          value="Muara (MUR)"
          {...getOverrideProps(overrides, "port5option73")}
        ></option>
        <option
          children="My Tho (MUT)"
          value="My Tho (MUT)"
          {...getOverrideProps(overrides, "port5option74")}
        ></option>
        <option
          children="Nan Tong (NTG)"
          value="Nan Tong (NTG)"
          {...getOverrideProps(overrides, "port5option75")}
        ></option>
        <option
          children="Narathiwat (NAW)"
          value="Narathiwat (NAW)"
          {...getOverrideProps(overrides, "port5option76")}
        ></option>
        <option
          children="Nghi Son (NGH)"
          value="Nghi Son (NGH)"
          {...getOverrideProps(overrides, "port5option77")}
        ></option>
        <option
          children="Ningde (NDE)"
          value="Ningde (NDE)"
          {...getOverrideProps(overrides, "port5option78")}
        ></option>
        <option
          children="Nunukan (NNX)"
          value="Nunukan (NNX)"
          {...getOverrideProps(overrides, "port5option79")}
        ></option>
        <option
          children="Oknha Mong Port (OMP)"
          value="Oknha Mong Port (OMP)"
          {...getOverrideProps(overrides, "port5option80")}
        ></option>
        <option
          children="Onomichi (ONO)"
          value="Onomichi (ONO)"
          {...getOverrideProps(overrides, "port5option81")}
        ></option>
        <option
          children="Padang - Telux Buyur (TBR)"
          value="Padang - Telux Buyur (TBR)"
          {...getOverrideProps(overrides, "port5option82")}
        ></option>
        <option
          children="PAKAN Baru (PKRU)"
          value="PAKAN Baru (PKRU)"
          {...getOverrideProps(overrides, "port5option83")}
        ></option>
        <option
          children="Palembang (PLB)"
          value="Palembang (PLB)"
          {...getOverrideProps(overrides, "port5option84")}
        ></option>
        <option
          children="Panjang (PNJ)"
          value="Panjang (PNJ)"
          {...getOverrideProps(overrides, "port5option85")}
        ></option>
        <option
          children="Pasir Gudang (PAS)"
          value="Pasir Gudang (PAS)"
          {...getOverrideProps(overrides, "port5option86")}
        ></option>
        <option
          children="Pattani (PTN)"
          value="Pattani (PTN)"
          {...getOverrideProps(overrides, "port5option87")}
        ></option>
        <option
          children="Penang (PNG)"
          value="Penang (PNG)"
          {...getOverrideProps(overrides, "port5option88")}
        ></option>
        <option
          children="Phnom Penh (PNH)"
          value="Phnom Penh (PNH)"
          {...getOverrideProps(overrides, "port5option89")}
        ></option>
        <option
          children="Phra Chulachomklao Fort (PCF)"
          value="Phra Chulachomklao Fort (PCF)"
          {...getOverrideProps(overrides, "port5option90")}
        ></option>
        <option
          children="Phuket (HKT)"
          value="Phuket (HKT)"
          {...getOverrideProps(overrides, "port5option91")}
        ></option>
        <option
          children="Phumy (PHU)"
          value="Phumy (PHU)"
          {...getOverrideProps(overrides, "port5option92")}
        ></option>
        <option
          children="Plathong Oil Rig (PATO)"
          value="Plathong Oil Rig (PATO)"
          {...getOverrideProps(overrides, "port5option93")}
        ></option>
        <option
          children="Pontianak (POT)"
          value="Pontianak (POT)"
          {...getOverrideProps(overrides, "port5option94")}
        ></option>
        <option
          children="Port Klang (PKL)"
          value="Port Klang (PKL)"
          {...getOverrideProps(overrides, "port5option95")}
        ></option>
        <option
          children="Port Moresby (PGPOM)"
          value="Port Moresby (PGPOM)"
          {...getOverrideProps(overrides, "port5option96")}
        ></option>
        <option
          children="Poso (POSO)"
          value="Poso (POSO)"
          {...getOverrideProps(overrides, "port5option97")}
        ></option>
        <option
          children="Pusan (PUS)"
          value="Pusan (PUS)"
          {...getOverrideProps(overrides, "port5option98")}
        ></option>
        <option
          children="Quy Nhon (QNN)"
          value="Quy Nhon (QNN)"
          {...getOverrideProps(overrides, "port5option99")}
        ></option>
        <option
          children="Ranong (UNN)"
          value="Ranong (UNN)"
          {...getOverrideProps(overrides, "port5option100")}
        ></option>
        <option
          children="Rayong (IRPC)"
          value="Rayong (IRPC)"
          {...getOverrideProps(overrides, "port5option101")}
        ></option>
        <option
          children="Sampit (SMQ)"
          value="Sampit (SMQ)"
          {...getOverrideProps(overrides, "port5option102")}
        ></option>
        <option
          children="Sandakan (SAN)"
          value="Sandakan (SAN)"
          {...getOverrideProps(overrides, "port5option103")}
        ></option>
        <option
          children="Sarawak (SRW)"
          value="Sarawak (SRW)"
          {...getOverrideProps(overrides, "port5option104")}
        ></option>
        <option
          children="Sarekei (SRK)"
          value="Sarekei (SRK)"
          {...getOverrideProps(overrides, "port5option105")}
        ></option>
        <option
          children="Sattahip (SATP)"
          value="Sattahip (SATP)"
          {...getOverrideProps(overrides, "port5option106")}
        ></option>
        <option
          children="Semarang - Tanjung Emas (SRG)"
          value="Semarang - Tanjung Emas (SRG)"
          {...getOverrideProps(overrides, "port5option107")}
        ></option>
        <option
          children="Sibu (SIB)"
          value="Sibu (SIB)"
          {...getOverrideProps(overrides, "port5option108")}
        ></option>
        <option
          children="Singapore (SG)"
          value="Singapore (SG)"
          {...getOverrideProps(overrides, "port5option109")}
        ></option>
        <option
          children="Sipitang (SIP)"
          value="Sipitang (SIP)"
          {...getOverrideProps(overrides, "port5option110")}
        ></option>
        <option
          children="Son Duong (SOD)"
          value="Son Duong (SOD)"
          {...getOverrideProps(overrides, "port5option111")}
        ></option>
        <option
          children="Songkhla (SK)"
          value="Songkhla (SK)"
          {...getOverrideProps(overrides, "port5option112")}
        ></option>
        <option
          children="Srihanoville (SIH)"
          value="Srihanoville (SIH)"
          {...getOverrideProps(overrides, "port5option113")}
        ></option>
        <option
          children="Sriracha Harbor (SRC)"
          value="Sriracha Harbor (SRC)"
          {...getOverrideProps(overrides, "port5option114")}
        ></option>
        <option
          children="Sritama Jetty (STM)"
          value="Sritama Jetty (STM)"
          {...getOverrideProps(overrides, "port5option115")}
        ></option>
        <option
          children="Steung Hav (SHV)"
          value="Steung Hav (SHV)"
          {...getOverrideProps(overrides, "port5option116")}
        ></option>
        <option
          children="Sungai Guntung (SGGT)"
          value="Sungai Guntung (SGGT)"
          {...getOverrideProps(overrides, "port5option117")}
        ></option>
        <option
          children="Surabaya (SUBY)"
          value="Surabaya (SUBY)"
          {...getOverrideProps(overrides, "port5option118")}
        ></option>
        <option
          children="Surat Thanee (SRT)"
          value="Surat Thanee (SRT)"
          {...getOverrideProps(overrides, "port5option119")}
        ></option>
        <option
          children="Tacloban (TAC)"
          value="Tacloban (TAC)"
          {...getOverrideProps(overrides, "port5option120")}
        ></option>
        <option
          children="Tagbilaran (TAG)"
          value="Tagbilaran (TAG)"
          {...getOverrideProps(overrides, "port5option121")}
        ></option>
        <option
          children="Tanjong Manis (TGM)"
          value="Tanjong Manis (TGM)"
          {...getOverrideProps(overrides, "port5option122")}
        ></option>
        <option
          children="Tanjung Batu (TJQ)"
          value="Tanjung Batu (TJQ)"
          {...getOverrideProps(overrides, "port5option123")}
        ></option>
        <option
          children="Tanjung Priok (TP)"
          value="Tanjung Priok (TP)"
          {...getOverrideProps(overrides, "port5option124")}
        ></option>
        <option
          children="Tarjun (TAR)"
          value="Tarjun (TAR)"
          {...getOverrideProps(overrides, "port5option125")}
        ></option>
        <option
          children="Tawau (TAW)"
          value="Tawau (TAW)"
          {...getOverrideProps(overrides, "port5option126")}
        ></option>
        <option
          children="Terengganu (TGG)"
          value="Terengganu (TGG)"
          {...getOverrideProps(overrides, "port5option127")}
        ></option>
        <option
          children="Tha Sala (TSL)"
          value="Tha Sala (TSL)"
          {...getOverrideProps(overrides, "port5option128")}
        ></option>
        <option
          children="TJM"
          value="TJM"
          {...getOverrideProps(overrides, "port5option129")}
        ></option>
        <option
          children="Tsukumi (TSUM)"
          value="Tsukumi (TSUM)"
          {...getOverrideProps(overrides, "port5option130")}
        ></option>
        <option
          children="Vung Ang (VAG)"
          value="Vung Ang (VAG)"
          {...getOverrideProps(overrides, "port5option131")}
        ></option>
        <option
          children="Vung Tau (VUT)"
          value="Vung Tau (VUT)"
          {...getOverrideProps(overrides, "port5option132")}
        ></option>
        <option
          children="Yangon (RGN)"
          value="Yangon (RGN)"
          {...getOverrideProps(overrides, "port5option133")}
        ></option>
      </SelectField>
      <SelectField
        label="Port 6"
        placeholder="Please select an option"
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
          children="BA"
          value="BA"
          {...getOverrideProps(overrides, "port6option3")}
        ></option>
        <option
          children="Bahodopi (BHDP)"
          value="Bahodopi (BHDP)"
          {...getOverrideProps(overrides, "port6option4")}
        ></option>
        <option
          children="Balikpapan (BPN)"
          value="Balikpapan (BPN)"
          {...getOverrideProps(overrides, "port6option5")}
        ></option>
        <option
          children="Bang Sapan (BS)"
          value="Bang Sapan (BS)"
          {...getOverrideProps(overrides, "port6option6")}
        ></option>
        <option
          children="Bangkok (BK)"
          value="Bangkok (BK)"
          {...getOverrideProps(overrides, "port6option7")}
        ></option>
        <option
          children="Bangpakong (BAK)"
          value="Bangpakong (BAK)"
          {...getOverrideProps(overrides, "port6option8")}
        ></option>
        <option
          children="Banyuwangi - Tanjung Wangi (BJU)"
          value="Banyuwangi - Tanjung Wangi (BJU)"
          {...getOverrideProps(overrides, "port6option9")}
        ></option>
        <option
          children="Batam (BAT)"
          value="Batam (BAT)"
          {...getOverrideProps(overrides, "port6option10")}
        ></option>
        <option
          children="Beihai (BHY)"
          value="Beihai (BHY)"
          {...getOverrideProps(overrides, "port6option11")}
        ></option>
        <option
          children="Belawan (BRW)"
          value="Belawan (BRW)"
          {...getOverrideProps(overrides, "port6option12")}
        ></option>
        <option
          children="Benoa (Bali) (BAO)"
          value="Benoa (Bali) (BAO)"
          {...getOverrideProps(overrides, "port6option13")}
        ></option>
        <option
          children="Bintan (BTN)"
          value="Bintan (BTN)"
          {...getOverrideProps(overrides, "port6option14")}
        ></option>
        <option
          children="Bintulu (BIN)"
          value="Bintulu (BIN)"
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
          children="CX"
          value="CX"
          {...getOverrideProps(overrides, "port6option28")}
        ></option>
        <option
          children="Danang (DAD)"
          value="Danang (DAD)"
          {...getOverrideProps(overrides, "port6option29")}
        ></option>
        <option
          children="Davao (Sasa Wharf) (DVO)"
          value="Davao (Sasa Wharf) (DVO)"
          {...getOverrideProps(overrides, "port6option30")}
        ></option>
        <option
          children="Dhaka (DKA)"
          value="Dhaka (DKA)"
          {...getOverrideProps(overrides, "port6option31")}
        ></option>
        <option
          children="Dumai (DMI)"
          value="Dumai (DMI)"
          {...getOverrideProps(overrides, "port6option32")}
        ></option>
        <option
          children="Dung Quat (DQT)"
          value="Dung Quat (DQT)"
          {...getOverrideProps(overrides, "port6option33")}
        ></option>
        <option
          children="Fangcheng (FAN)"
          value="Fangcheng (FAN)"
          {...getOverrideProps(overrides, "port6option34")}
        ></option>
        <option
          children="Futong (FTG)"
          value="Futong (FTG)"
          {...getOverrideProps(overrides, "port6option35")}
        ></option>
        <option
          children="Godau port  (GDP)"
          value="Godau port  (GDP)"
          {...getOverrideProps(overrides, "port6option36")}
        ></option>
        <option
          children="GRN"
          value="GRN"
          {...getOverrideProps(overrides, "port6option37")}
        ></option>
        <option
          children="Haiphong (HPH)"
          value="Haiphong (HPH)"
          {...getOverrideProps(overrides, "port6option38")}
        ></option>
        <option
          children="Halong Bay (HLG)"
          value="Halong Bay (HLG)"
          {...getOverrideProps(overrides, "port6option39")}
        ></option>
        <option
          children="HO CHI MINH (HCM)"
          value="HO CHI MINH (HCM)"
          {...getOverrideProps(overrides, "port6option40")}
        ></option>
        <option
          children="Hon Gai (HON)"
          value="Hon Gai (HON)"
          {...getOverrideProps(overrides, "port6option41")}
        ></option>
        <option
          children="Hong Kong (HKG)"
          value="Hong Kong (HKG)"
          {...getOverrideProps(overrides, "port6option42")}
        ></option>
        <option
          children="Jakarta (JAK)"
          value="Jakarta (JAK)"
          {...getOverrideProps(overrides, "port6option43")}
        ></option>
        <option
          children="Jambi (JBI)"
          value="Jambi (JBI)"
          {...getOverrideProps(overrides, "port6option44")}
        ></option>
        <option
          children="K.K. Kota Kinabalu (KK)"
          value="K.K. Kota Kinabalu (KK)"
          {...getOverrideProps(overrides, "port6option45")}
        ></option>
        <option
          children="Kampot (KMP)"
          value="Kampot (KMP)"
          {...getOverrideProps(overrides, "port6option46")}
        ></option>
        <option
          children="Kantang (KTG)"
          value="Kantang (KTG)"
          {...getOverrideProps(overrides, "port6option47")}
        ></option>
        <option
          children="Kedah (KKH)"
          value="Kedah (KKH)"
          {...getOverrideProps(overrides, "port6option48")}
        ></option>
        <option
          children="Kelantan (KLT)"
          value="Kelantan (KLT)"
          {...getOverrideProps(overrides, "port6option49")}
        ></option>
        <option
          children="KEM "
          value="KEM "
          {...getOverrideProps(overrides, "port6option50")}
        ></option>
        <option
          children="Kemaman (KMN)"
          value="Kemaman (KMN)"
          {...getOverrideProps(overrides, "port6option51")}
        ></option>
        <option
          children="Khanom (KHM)"
          value="Khanom (KHM)"
          {...getOverrideProps(overrides, "port6option52")}
        ></option>
        <option
          children="Ko Sichang (KSI)"
          value="Ko Sichang (KSI)"
          {...getOverrideProps(overrides, "port6option53")}
        ></option>
        <option
          children="Kolkata (CCU)"
          value="Kolkata (CCU)"
          {...getOverrideProps(overrides, "port6option54")}
        ></option>
        <option
          children="Kor Samui (KSM)"
          value="Kor Samui (KSM)"
          {...getOverrideProps(overrides, "port6option55")}
        ></option>
        <option
          children="Kuantan (KT)"
          value="Kuantan (KT)"
          {...getOverrideProps(overrides, "port6option56")}
        ></option>
        <option
          children="Kuching (KUC)"
          value="Kuching (KUC)"
          {...getOverrideProps(overrides, "port6option57")}
        ></option>
        <option
          children="KUM"
          value="KUM"
          {...getOverrideProps(overrides, "port6option58")}
        ></option>
        <option
          children="Labuan (LBN)"
          value="Labuan (LBN)"
          {...getOverrideProps(overrides, "port6option59")}
        ></option>
        <option
          children="Laem Chabang (LCB)"
          value="Laem Chabang (LCB)"
          {...getOverrideProps(overrides, "port6option60")}
        ></option>
        <option
          children="Lahad Datu (LDU)"
          value="Lahad Datu (LDU)"
          {...getOverrideProps(overrides, "port6option61")}
        ></option>
        <option
          children="Lhokseumawe (LHOK)"
          value="Lhokseumawe (LHOK)"
          {...getOverrideProps(overrides, "port6option62")}
        ></option>
        <option
          children="Lumut (LUM)"
          value="Lumut (LUM)"
          {...getOverrideProps(overrides, "port6option63")}
        ></option>
        <option
          children="Maeklong (Firesun) (MKG)"
          value="Maeklong (Firesun) (MKG)"
          {...getOverrideProps(overrides, "port6option64")}
        ></option>
        <option
          children="Makassar (MAK)"
          value="Makassar (MAK)"
          {...getOverrideProps(overrides, "port6option65")}
        ></option>
        <option
          children="Malacca (MAL)"
          value="Malacca (MAL)"
          {...getOverrideProps(overrides, "port6option66")}
        ></option>
        <option
          children="Manila Habour (MNL)"
          value="Manila Habour (MNL)"
          {...getOverrideProps(overrides, "port6option67")}
        ></option>
        <option
          children="MAP"
          value="MAP"
          {...getOverrideProps(overrides, "port6option68")}
        ></option>
        <option
          children="MAP "
          value="MAP "
          {...getOverrideProps(overrides, "port6option69")}
        ></option>
        <option
          children="Maptaphut (MAT)"
          value="Maptaphut (MAT)"
          {...getOverrideProps(overrides, "port6option70")}
        ></option>
        <option
          children="Marunda (MRD)"
          value="Marunda (MRD)"
          {...getOverrideProps(overrides, "port6option71")}
        ></option>
        <option
          children="Mawei Fuzhou (FOC)"
          value="Mawei Fuzhou (FOC)"
          {...getOverrideProps(overrides, "port6option72")}
        ></option>
        <option
          children="Muara (MUR)"
          value="Muara (MUR)"
          {...getOverrideProps(overrides, "port6option73")}
        ></option>
        <option
          children="My Tho (MUT)"
          value="My Tho (MUT)"
          {...getOverrideProps(overrides, "port6option74")}
        ></option>
        <option
          children="Nan Tong (NTG)"
          value="Nan Tong (NTG)"
          {...getOverrideProps(overrides, "port6option75")}
        ></option>
        <option
          children="Narathiwat (NAW)"
          value="Narathiwat (NAW)"
          {...getOverrideProps(overrides, "port6option76")}
        ></option>
        <option
          children="Nghi Son (NGH)"
          value="Nghi Son (NGH)"
          {...getOverrideProps(overrides, "port6option77")}
        ></option>
        <option
          children="Ningde (NDE)"
          value="Ningde (NDE)"
          {...getOverrideProps(overrides, "port6option78")}
        ></option>
        <option
          children="Nunukan (NNX)"
          value="Nunukan (NNX)"
          {...getOverrideProps(overrides, "port6option79")}
        ></option>
        <option
          children="Oknha Mong Port (OMP)"
          value="Oknha Mong Port (OMP)"
          {...getOverrideProps(overrides, "port6option80")}
        ></option>
        <option
          children="Onomichi (ONO)"
          value="Onomichi (ONO)"
          {...getOverrideProps(overrides, "port6option81")}
        ></option>
        <option
          children="Padang - Telux Buyur (TBR)"
          value="Padang - Telux Buyur (TBR)"
          {...getOverrideProps(overrides, "port6option82")}
        ></option>
        <option
          children="PAKAN Baru (PKRU)"
          value="PAKAN Baru (PKRU)"
          {...getOverrideProps(overrides, "port6option83")}
        ></option>
        <option
          children="Palembang (PLB)"
          value="Palembang (PLB)"
          {...getOverrideProps(overrides, "port6option84")}
        ></option>
        <option
          children="Panjang (PNJ)"
          value="Panjang (PNJ)"
          {...getOverrideProps(overrides, "port6option85")}
        ></option>
        <option
          children="Pasir Gudang (PAS)"
          value="Pasir Gudang (PAS)"
          {...getOverrideProps(overrides, "port6option86")}
        ></option>
        <option
          children="Pattani (PTN)"
          value="Pattani (PTN)"
          {...getOverrideProps(overrides, "port6option87")}
        ></option>
        <option
          children="Penang (PNG)"
          value="Penang (PNG)"
          {...getOverrideProps(overrides, "port6option88")}
        ></option>
        <option
          children="Phnom Penh (PNH)"
          value="Phnom Penh (PNH)"
          {...getOverrideProps(overrides, "port6option89")}
        ></option>
        <option
          children="Phra Chulachomklao Fort (PCF)"
          value="Phra Chulachomklao Fort (PCF)"
          {...getOverrideProps(overrides, "port6option90")}
        ></option>
        <option
          children="Phuket (HKT)"
          value="Phuket (HKT)"
          {...getOverrideProps(overrides, "port6option91")}
        ></option>
        <option
          children="Phumy (PHU)"
          value="Phumy (PHU)"
          {...getOverrideProps(overrides, "port6option92")}
        ></option>
        <option
          children="Plathong Oil Rig (PATO)"
          value="Plathong Oil Rig (PATO)"
          {...getOverrideProps(overrides, "port6option93")}
        ></option>
        <option
          children="Pontianak (POT)"
          value="Pontianak (POT)"
          {...getOverrideProps(overrides, "port6option94")}
        ></option>
        <option
          children="Port Klang (PKL)"
          value="Port Klang (PKL)"
          {...getOverrideProps(overrides, "port6option95")}
        ></option>
        <option
          children="Port Moresby (PGPOM)"
          value="Port Moresby (PGPOM)"
          {...getOverrideProps(overrides, "port6option96")}
        ></option>
        <option
          children="Poso (POSO)"
          value="Poso (POSO)"
          {...getOverrideProps(overrides, "port6option97")}
        ></option>
        <option
          children="Pusan (PUS)"
          value="Pusan (PUS)"
          {...getOverrideProps(overrides, "port6option98")}
        ></option>
        <option
          children="Quy Nhon (QNN)"
          value="Quy Nhon (QNN)"
          {...getOverrideProps(overrides, "port6option99")}
        ></option>
        <option
          children="Ranong (UNN)"
          value="Ranong (UNN)"
          {...getOverrideProps(overrides, "port6option100")}
        ></option>
        <option
          children="Rayong (IRPC)"
          value="Rayong (IRPC)"
          {...getOverrideProps(overrides, "port6option101")}
        ></option>
        <option
          children="Sampit (SMQ)"
          value="Sampit (SMQ)"
          {...getOverrideProps(overrides, "port6option102")}
        ></option>
        <option
          children="Sandakan (SAN)"
          value="Sandakan (SAN)"
          {...getOverrideProps(overrides, "port6option103")}
        ></option>
        <option
          children="Sarawak (SRW)"
          value="Sarawak (SRW)"
          {...getOverrideProps(overrides, "port6option104")}
        ></option>
        <option
          children="Sarekei (SRK)"
          value="Sarekei (SRK)"
          {...getOverrideProps(overrides, "port6option105")}
        ></option>
        <option
          children="Sattahip (SATP)"
          value="Sattahip (SATP)"
          {...getOverrideProps(overrides, "port6option106")}
        ></option>
        <option
          children="Semarang - Tanjung Emas (SRG)"
          value="Semarang - Tanjung Emas (SRG)"
          {...getOverrideProps(overrides, "port6option107")}
        ></option>
        <option
          children="Sibu (SIB)"
          value="Sibu (SIB)"
          {...getOverrideProps(overrides, "port6option108")}
        ></option>
        <option
          children="Singapore (SG)"
          value="Singapore (SG)"
          {...getOverrideProps(overrides, "port6option109")}
        ></option>
        <option
          children="Sipitang (SIP)"
          value="Sipitang (SIP)"
          {...getOverrideProps(overrides, "port6option110")}
        ></option>
        <option
          children="Son Duong (SOD)"
          value="Son Duong (SOD)"
          {...getOverrideProps(overrides, "port6option111")}
        ></option>
        <option
          children="Songkhla (SK)"
          value="Songkhla (SK)"
          {...getOverrideProps(overrides, "port6option112")}
        ></option>
        <option
          children="Srihanoville (SIH)"
          value="Srihanoville (SIH)"
          {...getOverrideProps(overrides, "port6option113")}
        ></option>
        <option
          children="Sriracha Harbor (SRC)"
          value="Sriracha Harbor (SRC)"
          {...getOverrideProps(overrides, "port6option114")}
        ></option>
        <option
          children="Sritama Jetty (STM)"
          value="Sritama Jetty (STM)"
          {...getOverrideProps(overrides, "port6option115")}
        ></option>
        <option
          children="Steung Hav (SHV)"
          value="Steung Hav (SHV)"
          {...getOverrideProps(overrides, "port6option116")}
        ></option>
        <option
          children="Sungai Guntung (SGGT)"
          value="Sungai Guntung (SGGT)"
          {...getOverrideProps(overrides, "port6option117")}
        ></option>
        <option
          children="Surabaya (SUBY)"
          value="Surabaya (SUBY)"
          {...getOverrideProps(overrides, "port6option118")}
        ></option>
        <option
          children="Surat Thanee (SRT)"
          value="Surat Thanee (SRT)"
          {...getOverrideProps(overrides, "port6option119")}
        ></option>
        <option
          children="Tacloban (TAC)"
          value="Tacloban (TAC)"
          {...getOverrideProps(overrides, "port6option120")}
        ></option>
        <option
          children="Tagbilaran (TAG)"
          value="Tagbilaran (TAG)"
          {...getOverrideProps(overrides, "port6option121")}
        ></option>
        <option
          children="Tanjong Manis (TGM)"
          value="Tanjong Manis (TGM)"
          {...getOverrideProps(overrides, "port6option122")}
        ></option>
        <option
          children="Tanjung Batu (TJQ)"
          value="Tanjung Batu (TJQ)"
          {...getOverrideProps(overrides, "port6option123")}
        ></option>
        <option
          children="Tanjung Priok (TP)"
          value="Tanjung Priok (TP)"
          {...getOverrideProps(overrides, "port6option124")}
        ></option>
        <option
          children="Tarjun (TAR)"
          value="Tarjun (TAR)"
          {...getOverrideProps(overrides, "port6option125")}
        ></option>
        <option
          children="Tawau (TAW)"
          value="Tawau (TAW)"
          {...getOverrideProps(overrides, "port6option126")}
        ></option>
        <option
          children="Terengganu (TGG)"
          value="Terengganu (TGG)"
          {...getOverrideProps(overrides, "port6option127")}
        ></option>
        <option
          children="Tha Sala (TSL)"
          value="Tha Sala (TSL)"
          {...getOverrideProps(overrides, "port6option128")}
        ></option>
        <option
          children="TJM"
          value="TJM"
          {...getOverrideProps(overrides, "port6option129")}
        ></option>
        <option
          children="Tsukumi (TSUM)"
          value="Tsukumi (TSUM)"
          {...getOverrideProps(overrides, "port6option130")}
        ></option>
        <option
          children="Vung Ang (VAG)"
          value="Vung Ang (VAG)"
          {...getOverrideProps(overrides, "port6option131")}
        ></option>
        <option
          children="Vung Tau (VUT)"
          value="Vung Tau (VUT)"
          {...getOverrideProps(overrides, "port6option132")}
        ></option>
        <option
          children="Yangon (RGN)"
          value="Yangon (RGN)"
          {...getOverrideProps(overrides, "port6option133")}
        ></option>
      </SelectField>
      <TextField
        label="Cost"
        type="number"
        step="any"
        value={cost}
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
