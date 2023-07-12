/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { CheckboxFieldProps, DividerProps, GridProps, HeadingProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type DistanceCreateFormInputValues = {
    Field4?: string;
    vessel_ht1?: boolean;
    vessel_hn5?: boolean;
    vessel_hn7?: boolean;
    vessel_hn9?: boolean;
    vessel_hn10?: boolean;
    vessel_ht20?: boolean;
    vessel_ht21?: boolean;
    port1?: string;
    port1_fees?: string;
    port1_port_call?: string;
    port1_crane_usage?: string;
    port2?: string;
    port2_fees?: string;
    port2_port_call?: string;
    port2_crane_usage?: string;
    port3?: string;
    port3_fees?: string;
    port3_port_call?: string;
    port3_crane_usage?: string;
    port4?: string;
    port4_fees?: string;
    port4_port_call?: string;
    port4_crane_usage?: string;
    port5?: string;
    port5_fees?: string;
    port6?: string;
    port6_fees?: string;
    cargo1?: string;
    cargo1_quantity?: number;
    cargo1_rate?: number;
    cargo2?: string;
    cargo2_quantity?: number;
    cargo2_rate?: number;
    cargo3?: string;
    cargo3_quantity?: number;
    cargo3_rate?: number;
    cargo4?: string;
    cargo4_quantity?: number;
    cargo4_rate?: number;
    cargo5?: string;
    cargo5_quantity?: string;
    cargo5_rate?: number;
    cargo6?: string;
    cargo6_quantity?: number;
    cargo6_rate?: number;
    bunker_rate?: number;
    diesel_rate?: number;
    lube_rate?: string;
    surveying_fees?: string;
    Field0?: string;
    miscCosts?: number;
    craneUsage?: number;
    portDays?: number;
};
export declare type DistanceCreateFormValidationValues = {
    Field4?: ValidationFunction<string>;
    vessel_ht1?: ValidationFunction<boolean>;
    vessel_hn5?: ValidationFunction<boolean>;
    vessel_hn7?: ValidationFunction<boolean>;
    vessel_hn9?: ValidationFunction<boolean>;
    vessel_hn10?: ValidationFunction<boolean>;
    vessel_ht20?: ValidationFunction<boolean>;
    vessel_ht21?: ValidationFunction<boolean>;
    port1?: ValidationFunction<string>;
    port1_fees?: ValidationFunction<string>;
    port1_port_call?: ValidationFunction<string>;
    port1_crane_usage?: ValidationFunction<string>;
    port2?: ValidationFunction<string>;
    port2_fees?: ValidationFunction<string>;
    port2_port_call?: ValidationFunction<string>;
    port2_crane_usage?: ValidationFunction<string>;
    port3?: ValidationFunction<string>;
    port3_fees?: ValidationFunction<string>;
    port3_port_call?: ValidationFunction<string>;
    port3_crane_usage?: ValidationFunction<string>;
    port4?: ValidationFunction<string>;
    port4_fees?: ValidationFunction<string>;
    port4_port_call?: ValidationFunction<string>;
    port4_crane_usage?: ValidationFunction<string>;
    port5?: ValidationFunction<string>;
    port5_fees?: ValidationFunction<string>;
    port6?: ValidationFunction<string>;
    port6_fees?: ValidationFunction<string>;
    cargo1?: ValidationFunction<string>;
    cargo1_quantity?: ValidationFunction<number>;
    cargo1_rate?: ValidationFunction<number>;
    cargo2?: ValidationFunction<string>;
    cargo2_quantity?: ValidationFunction<number>;
    cargo2_rate?: ValidationFunction<number>;
    cargo3?: ValidationFunction<string>;
    cargo3_quantity?: ValidationFunction<number>;
    cargo3_rate?: ValidationFunction<number>;
    cargo4?: ValidationFunction<string>;
    cargo4_quantity?: ValidationFunction<number>;
    cargo4_rate?: ValidationFunction<number>;
    cargo5?: ValidationFunction<string>;
    cargo5_quantity?: ValidationFunction<string>;
    cargo5_rate?: ValidationFunction<number>;
    cargo6?: ValidationFunction<string>;
    cargo6_quantity?: ValidationFunction<number>;
    cargo6_rate?: ValidationFunction<number>;
    bunker_rate?: ValidationFunction<number>;
    diesel_rate?: ValidationFunction<number>;
    lube_rate?: ValidationFunction<string>;
    surveying_fees?: ValidationFunction<string>;
    Field0?: ValidationFunction<string>;
    miscCosts?: ValidationFunction<number>;
    craneUsage?: ValidationFunction<number>;
    portDays?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DistanceCreateFormOverridesProps = {
    DistanceCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    SectionalElement8?: PrimitiveOverrideProps<HeadingProps>;
    Field4?: PrimitiveOverrideProps<SelectFieldProps>;
    SectionalElement15?: PrimitiveOverrideProps<HeadingProps>;
    vessel_ht1?: PrimitiveOverrideProps<CheckboxFieldProps>;
    vessel_hn5?: PrimitiveOverrideProps<CheckboxFieldProps>;
    vessel_hn7?: PrimitiveOverrideProps<CheckboxFieldProps>;
    vessel_hn9?: PrimitiveOverrideProps<CheckboxFieldProps>;
    vessel_hn10?: PrimitiveOverrideProps<CheckboxFieldProps>;
    vessel_ht20?: PrimitiveOverrideProps<CheckboxFieldProps>;
    vessel_ht21?: PrimitiveOverrideProps<CheckboxFieldProps>;
    SectionalElement16?: PrimitiveOverrideProps<DividerProps>;
    SectionalElement9?: PrimitiveOverrideProps<HeadingProps>;
    RowGrid12?: PrimitiveOverrideProps<GridProps>;
    port1?: PrimitiveOverrideProps<SelectFieldProps>;
    port1_fees?: PrimitiveOverrideProps<TextFieldProps>;
    RowGrid13?: PrimitiveOverrideProps<GridProps>;
    port1_port_call?: PrimitiveOverrideProps<TextFieldProps>;
    port1_crane_usage?: PrimitiveOverrideProps<TextFieldProps>;
    SectionalElement10?: PrimitiveOverrideProps<HeadingProps>;
    RowGrid15?: PrimitiveOverrideProps<GridProps>;
    port2?: PrimitiveOverrideProps<SelectFieldProps>;
    port2_fees?: PrimitiveOverrideProps<TextFieldProps>;
    RowGrid16?: PrimitiveOverrideProps<GridProps>;
    port2_port_call?: PrimitiveOverrideProps<TextFieldProps>;
    port2_crane_usage?: PrimitiveOverrideProps<TextFieldProps>;
    SectionalElement11?: PrimitiveOverrideProps<HeadingProps>;
    RowGrid18?: PrimitiveOverrideProps<GridProps>;
    port3?: PrimitiveOverrideProps<SelectFieldProps>;
    port3_fees?: PrimitiveOverrideProps<TextFieldProps>;
    RowGrid19?: PrimitiveOverrideProps<GridProps>;
    port3_port_call?: PrimitiveOverrideProps<TextFieldProps>;
    port3_crane_usage?: PrimitiveOverrideProps<TextFieldProps>;
    SectionalElement12?: PrimitiveOverrideProps<HeadingProps>;
    RowGrid21?: PrimitiveOverrideProps<GridProps>;
    port4?: PrimitiveOverrideProps<SelectFieldProps>;
    port4_fees?: PrimitiveOverrideProps<TextFieldProps>;
    RowGrid22?: PrimitiveOverrideProps<GridProps>;
    port4_port_call?: PrimitiveOverrideProps<TextFieldProps>;
    port4_crane_usage?: PrimitiveOverrideProps<TextFieldProps>;
    SectionalElement13?: PrimitiveOverrideProps<HeadingProps>;
    RowGrid24?: PrimitiveOverrideProps<GridProps>;
    port5?: PrimitiveOverrideProps<SelectFieldProps>;
    port5_fees?: PrimitiveOverrideProps<TextFieldProps>;
    SectionalElement14?: PrimitiveOverrideProps<HeadingProps>;
    RowGrid26?: PrimitiveOverrideProps<GridProps>;
    port6?: PrimitiveOverrideProps<SelectFieldProps>;
    port6_fees?: PrimitiveOverrideProps<TextFieldProps>;
    SectionalElement1?: PrimitiveOverrideProps<DividerProps>;
    SectionalElement0?: PrimitiveOverrideProps<HeadingProps>;
    RowGrid29?: PrimitiveOverrideProps<GridProps>;
    cargo1?: PrimitiveOverrideProps<SelectFieldProps>;
    cargo1_quantity?: PrimitiveOverrideProps<TextFieldProps>;
    cargo1_rate?: PrimitiveOverrideProps<TextFieldProps>;
    SectionalElement2?: PrimitiveOverrideProps<HeadingProps>;
    RowGrid31?: PrimitiveOverrideProps<GridProps>;
    cargo2?: PrimitiveOverrideProps<SelectFieldProps>;
    cargo2_quantity?: PrimitiveOverrideProps<TextFieldProps>;
    cargo2_rate?: PrimitiveOverrideProps<TextFieldProps>;
    SectionalElement3?: PrimitiveOverrideProps<HeadingProps>;
    RowGrid33?: PrimitiveOverrideProps<GridProps>;
    cargo3?: PrimitiveOverrideProps<SelectFieldProps>;
    cargo3_quantity?: PrimitiveOverrideProps<TextFieldProps>;
    cargo3_rate?: PrimitiveOverrideProps<TextFieldProps>;
    SectionalElement4?: PrimitiveOverrideProps<HeadingProps>;
    RowGrid35?: PrimitiveOverrideProps<GridProps>;
    cargo4?: PrimitiveOverrideProps<SelectFieldProps>;
    cargo4_quantity?: PrimitiveOverrideProps<TextFieldProps>;
    cargo4_rate?: PrimitiveOverrideProps<TextFieldProps>;
    SectionalElement5?: PrimitiveOverrideProps<HeadingProps>;
    RowGrid37?: PrimitiveOverrideProps<GridProps>;
    cargo5?: PrimitiveOverrideProps<SelectFieldProps>;
    cargo5_quantity?: PrimitiveOverrideProps<TextFieldProps>;
    cargo5_rate?: PrimitiveOverrideProps<TextFieldProps>;
    SectionalElement6?: PrimitiveOverrideProps<HeadingProps>;
    RowGrid39?: PrimitiveOverrideProps<GridProps>;
    cargo6?: PrimitiveOverrideProps<SelectFieldProps>;
    cargo6_quantity?: PrimitiveOverrideProps<TextFieldProps>;
    cargo6_rate?: PrimitiveOverrideProps<TextFieldProps>;
    SectionalElement7?: PrimitiveOverrideProps<DividerProps>;
    RowGrid41?: PrimitiveOverrideProps<GridProps>;
    bunker_rate?: PrimitiveOverrideProps<TextFieldProps>;
    diesel_rate?: PrimitiveOverrideProps<TextFieldProps>;
    lube_rate?: PrimitiveOverrideProps<TextFieldProps>;
    RowGrid42?: PrimitiveOverrideProps<GridProps>;
    surveying_fees?: PrimitiveOverrideProps<TextFieldProps>;
    Field0?: PrimitiveOverrideProps<TextFieldProps>;
    miscCosts?: PrimitiveOverrideProps<TextFieldProps>;
    RowGrid43?: PrimitiveOverrideProps<GridProps>;
    craneUsage?: PrimitiveOverrideProps<TextFieldProps>;
    portDays?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type DistanceCreateFormProps = React.PropsWithChildren<{
    overrides?: DistanceCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: DistanceCreateFormInputValues) => DistanceCreateFormInputValues;
    onSuccess?: (fields: DistanceCreateFormInputValues) => void;
    onError?: (fields: DistanceCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: DistanceCreateFormInputValues) => DistanceCreateFormInputValues;
    onValidate?: DistanceCreateFormValidationValues;
} & React.CSSProperties>;
export default function DistanceCreateForm(props: DistanceCreateFormProps): React.ReactElement;
