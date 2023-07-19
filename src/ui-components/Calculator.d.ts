/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { DividerProps, GridProps, HeadingProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CalculatorInputValues = {
    currency_type?: string;
    exchange_rate?: string;
    diesel_rate?: string;
    bunker_rate?: string;
    lube_rate?: string;
    port1?: string;
    port1_fees?: string;
    port1_port_call?: string;
    port1_crane_usage?: string;
    port1_surveying_fees?: string;
    port2?: string;
    port2_fees?: string;
    port2_port_call?: string;
    port2_crane_usage?: string;
    port2_surveying_fees?: string;
    port3?: string;
    port3_fees?: string;
    port3_port_call?: string;
    port3_crane_usage?: string;
    port3_surveying_fees?: string;
    port4?: string;
    port4_fees?: string;
    port4_port_call?: string;
    port4_crane_usage?: string;
    port4_surveying_fees?: string;
    port5?: string;
    port5_fees?: string;
    port5_port_call?: string;
    port5_crane_usage?: string;
    port5_surveying_fees?: string;
    port6?: string;
    port6_fees?: string;
    port6_port_call?: string;
    port6_crane_usage?: string;
    port6_surveying_fees?: string;
    cargo1_type?: string;
    cargo1_quantity?: string;
    cargo1_rate?: string;
    cargo1_brokerage_fees?: string;
    cargo2_type?: string;
    cargo2_quantity?: string;
    cargo2_rate?: string;
    cargo2_brokerage_fees?: string;
    cargo3_type?: string;
    cargo3_quantity?: string;
    cargo3_rate?: string;
    cargo3_brokerage_fees?: string;
    cargo4_type?: string;
    cargo4_quantity?: string;
    cargo4_rate?: string;
    cargo4_brokerage_fees?: string;
    cargo5_type?: string;
    cargo5_quantity?: string;
    cargo5_rate?: string;
    cargo5_brokerage_fees?: string;
    cargo6_type?: string;
    cargo6_quantity?: string;
    cargo6_rate?: string;
    cargo6_brokerage_fees?: string;
    voyageBonus?: string;
    miscCosts?: string;
};
export declare type CalculatorValidationValues = {
    currency_type?: ValidationFunction<string>;
    exchange_rate?: ValidationFunction<string>;
    diesel_rate?: ValidationFunction<string>;
    bunker_rate?: ValidationFunction<string>;
    lube_rate?: ValidationFunction<string>;
    port1?: ValidationFunction<string>;
    port1_fees?: ValidationFunction<string>;
    port1_port_call?: ValidationFunction<string>;
    port1_crane_usage?: ValidationFunction<string>;
    port1_surveying_fees?: ValidationFunction<string>;
    port2?: ValidationFunction<string>;
    port2_fees?: ValidationFunction<string>;
    port2_port_call?: ValidationFunction<string>;
    port2_crane_usage?: ValidationFunction<string>;
    port2_surveying_fees?: ValidationFunction<string>;
    port3?: ValidationFunction<string>;
    port3_fees?: ValidationFunction<string>;
    port3_port_call?: ValidationFunction<string>;
    port3_crane_usage?: ValidationFunction<string>;
    port3_surveying_fees?: ValidationFunction<string>;
    port4?: ValidationFunction<string>;
    port4_fees?: ValidationFunction<string>;
    port4_port_call?: ValidationFunction<string>;
    port4_crane_usage?: ValidationFunction<string>;
    port4_surveying_fees?: ValidationFunction<string>;
    port5?: ValidationFunction<string>;
    port5_fees?: ValidationFunction<string>;
    port5_port_call?: ValidationFunction<string>;
    port5_crane_usage?: ValidationFunction<string>;
    port5_surveying_fees?: ValidationFunction<string>;
    port6?: ValidationFunction<string>;
    port6_fees?: ValidationFunction<string>;
    port6_port_call?: ValidationFunction<string>;
    port6_crane_usage?: ValidationFunction<string>;
    port6_surveying_fees?: ValidationFunction<string>;
    cargo1_type?: ValidationFunction<string>;
    cargo1_quantity?: ValidationFunction<string>;
    cargo1_rate?: ValidationFunction<string>;
    cargo1_brokerage_fees?: ValidationFunction<string>;
    cargo2_type?: ValidationFunction<string>;
    cargo2_quantity?: ValidationFunction<string>;
    cargo2_rate?: ValidationFunction<string>;
    cargo2_brokerage_fees?: ValidationFunction<string>;
    cargo3_type?: ValidationFunction<string>;
    cargo3_quantity?: ValidationFunction<string>;
    cargo3_rate?: ValidationFunction<string>;
    cargo3_brokerage_fees?: ValidationFunction<string>;
    cargo4_type?: ValidationFunction<string>;
    cargo4_quantity?: ValidationFunction<string>;
    cargo4_rate?: ValidationFunction<string>;
    cargo4_brokerage_fees?: ValidationFunction<string>;
    cargo5_type?: ValidationFunction<string>;
    cargo5_quantity?: ValidationFunction<string>;
    cargo5_rate?: ValidationFunction<string>;
    cargo5_brokerage_fees?: ValidationFunction<string>;
    cargo6_type?: ValidationFunction<string>;
    cargo6_quantity?: ValidationFunction<string>;
    cargo6_rate?: ValidationFunction<string>;
    cargo6_brokerage_fees?: ValidationFunction<string>;
    voyageBonus?: ValidationFunction<string>;
    miscCosts?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CalculatorOverridesProps = {
    CalculatorGrid?: PrimitiveOverrideProps<GridProps>;
    SectionalElement3?: PrimitiveOverrideProps<HeadingProps>;
    currency_type?: PrimitiveOverrideProps<SelectFieldProps>;
    exchange_rate?: PrimitiveOverrideProps<TextFieldProps>;
    RowGrid2?: PrimitiveOverrideProps<GridProps>;
    diesel_rate?: PrimitiveOverrideProps<TextFieldProps>;
    bunker_rate?: PrimitiveOverrideProps<TextFieldProps>;
    lube_rate?: PrimitiveOverrideProps<TextFieldProps>;
    SectionalElement0?: PrimitiveOverrideProps<DividerProps>;
    port1?: PrimitiveOverrideProps<SelectFieldProps>;
    RowGrid5?: PrimitiveOverrideProps<GridProps>;
    port1_fees?: PrimitiveOverrideProps<TextFieldProps>;
    port1_port_call?: PrimitiveOverrideProps<TextFieldProps>;
    port1_crane_usage?: PrimitiveOverrideProps<TextFieldProps>;
    port1_surveying_fees?: PrimitiveOverrideProps<TextFieldProps>;
    port2?: PrimitiveOverrideProps<SelectFieldProps>;
    RowGrid7?: PrimitiveOverrideProps<GridProps>;
    port2_fees?: PrimitiveOverrideProps<TextFieldProps>;
    port2_port_call?: PrimitiveOverrideProps<TextFieldProps>;
    port2_crane_usage?: PrimitiveOverrideProps<TextFieldProps>;
    port2_surveying_fees?: PrimitiveOverrideProps<TextFieldProps>;
    port3?: PrimitiveOverrideProps<SelectFieldProps>;
    RowGrid9?: PrimitiveOverrideProps<GridProps>;
    port3_fees?: PrimitiveOverrideProps<TextFieldProps>;
    port3_port_call?: PrimitiveOverrideProps<TextFieldProps>;
    port3_crane_usage?: PrimitiveOverrideProps<TextFieldProps>;
    port3_surveying_fees?: PrimitiveOverrideProps<TextFieldProps>;
    port4?: PrimitiveOverrideProps<SelectFieldProps>;
    RowGrid11?: PrimitiveOverrideProps<GridProps>;
    port4_fees?: PrimitiveOverrideProps<TextFieldProps>;
    port4_port_call?: PrimitiveOverrideProps<TextFieldProps>;
    port4_crane_usage?: PrimitiveOverrideProps<TextFieldProps>;
    port4_surveying_fees?: PrimitiveOverrideProps<TextFieldProps>;
    port5?: PrimitiveOverrideProps<SelectFieldProps>;
    RowGrid13?: PrimitiveOverrideProps<GridProps>;
    port5_fees?: PrimitiveOverrideProps<TextFieldProps>;
    port5_port_call?: PrimitiveOverrideProps<TextFieldProps>;
    port5_crane_usage?: PrimitiveOverrideProps<TextFieldProps>;
    port5_surveying_fees?: PrimitiveOverrideProps<TextFieldProps>;
    port6?: PrimitiveOverrideProps<SelectFieldProps>;
    RowGrid15?: PrimitiveOverrideProps<GridProps>;
    port6_fees?: PrimitiveOverrideProps<TextFieldProps>;
    port6_port_call?: PrimitiveOverrideProps<TextFieldProps>;
    port6_crane_usage?: PrimitiveOverrideProps<TextFieldProps>;
    port6_surveying_fees?: PrimitiveOverrideProps<TextFieldProps>;
    SectionalElement2?: PrimitiveOverrideProps<DividerProps>;
    cargo1_type?: PrimitiveOverrideProps<SelectFieldProps>;
    RowGrid18?: PrimitiveOverrideProps<GridProps>;
    cargo1_quantity?: PrimitiveOverrideProps<TextFieldProps>;
    cargo1_rate?: PrimitiveOverrideProps<TextFieldProps>;
    cargo1_brokerage_fees?: PrimitiveOverrideProps<TextFieldProps>;
    cargo2_type?: PrimitiveOverrideProps<SelectFieldProps>;
    RowGrid20?: PrimitiveOverrideProps<GridProps>;
    cargo2_quantity?: PrimitiveOverrideProps<TextFieldProps>;
    cargo2_rate?: PrimitiveOverrideProps<TextFieldProps>;
    cargo2_brokerage_fees?: PrimitiveOverrideProps<TextFieldProps>;
    cargo3_type?: PrimitiveOverrideProps<SelectFieldProps>;
    RowGrid22?: PrimitiveOverrideProps<GridProps>;
    cargo3_quantity?: PrimitiveOverrideProps<TextFieldProps>;
    cargo3_rate?: PrimitiveOverrideProps<TextFieldProps>;
    cargo3_brokerage_fees?: PrimitiveOverrideProps<TextFieldProps>;
    cargo4_type?: PrimitiveOverrideProps<SelectFieldProps>;
    RowGrid24?: PrimitiveOverrideProps<GridProps>;
    cargo4_quantity?: PrimitiveOverrideProps<TextFieldProps>;
    cargo4_rate?: PrimitiveOverrideProps<TextFieldProps>;
    cargo4_brokerage_fees?: PrimitiveOverrideProps<TextFieldProps>;
    cargo5_type?: PrimitiveOverrideProps<SelectFieldProps>;
    RowGrid26?: PrimitiveOverrideProps<GridProps>;
    cargo5_quantity?: PrimitiveOverrideProps<TextFieldProps>;
    cargo5_rate?: PrimitiveOverrideProps<TextFieldProps>;
    cargo5_brokerage_fees?: PrimitiveOverrideProps<TextFieldProps>;
    cargo6_type?: PrimitiveOverrideProps<SelectFieldProps>;
    RowGrid28?: PrimitiveOverrideProps<GridProps>;
    cargo6_quantity?: PrimitiveOverrideProps<TextFieldProps>;
    cargo6_rate?: PrimitiveOverrideProps<TextFieldProps>;
    cargo6_brokerage_fees?: PrimitiveOverrideProps<TextFieldProps>;
    SectionalElement1?: PrimitiveOverrideProps<DividerProps>;
    RowGrid30?: PrimitiveOverrideProps<GridProps>;
    voyageBonus?: PrimitiveOverrideProps<TextFieldProps>;
    miscCosts?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CalculatorProps = React.PropsWithChildren<{
    overrides?: CalculatorOverridesProps | undefined | null;
} & {
    onSubmit: (fields: CalculatorInputValues) => void;
    onChange?: (fields: CalculatorInputValues) => CalculatorInputValues;
    onValidate?: CalculatorValidationValues;
} & React.CSSProperties>;
export default function Calculator(props: CalculatorProps): React.ReactElement;
