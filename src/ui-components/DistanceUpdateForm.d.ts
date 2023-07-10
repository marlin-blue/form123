/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Distance } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type DistanceUpdateFormInputValues = {
    port1?: string;
    port2?: string;
    port3?: string;
    port4?: string;
    port5?: string;
    port6?: string;
    cargo1?: string;
    cargo2?: string;
    cargo3?: string;
    cargo4?: string;
    cargo5?: string;
    cargo6?: string;
    miscCosts?: number;
    craneUsage?: number;
    cargo5_quanity?: number;
    cargo6_quantity?: number;
    cargo4_quantity?: number;
    cargo3_quantity?: number;
    cargo2_quantity?: number;
    cargo1_quantity?: number;
    cargo3_rate?: number;
    cargo4_rate?: number;
    cargo5_rate?: number;
    cargo6_rate?: number;
    cargo1_rate?: number;
    cargo2_rate?: number;
    portDays?: number;
    bunker_rate?: number;
    diesel_rate?: number;
};
export declare type DistanceUpdateFormValidationValues = {
    port1?: ValidationFunction<string>;
    port2?: ValidationFunction<string>;
    port3?: ValidationFunction<string>;
    port4?: ValidationFunction<string>;
    port5?: ValidationFunction<string>;
    port6?: ValidationFunction<string>;
    cargo1?: ValidationFunction<string>;
    cargo2?: ValidationFunction<string>;
    cargo3?: ValidationFunction<string>;
    cargo4?: ValidationFunction<string>;
    cargo5?: ValidationFunction<string>;
    cargo6?: ValidationFunction<string>;
    miscCosts?: ValidationFunction<number>;
    craneUsage?: ValidationFunction<number>;
    cargo5_quanity?: ValidationFunction<number>;
    cargo6_quantity?: ValidationFunction<number>;
    cargo4_quantity?: ValidationFunction<number>;
    cargo3_quantity?: ValidationFunction<number>;
    cargo2_quantity?: ValidationFunction<number>;
    cargo1_quantity?: ValidationFunction<number>;
    cargo3_rate?: ValidationFunction<number>;
    cargo4_rate?: ValidationFunction<number>;
    cargo5_rate?: ValidationFunction<number>;
    cargo6_rate?: ValidationFunction<number>;
    cargo1_rate?: ValidationFunction<number>;
    cargo2_rate?: ValidationFunction<number>;
    portDays?: ValidationFunction<number>;
    bunker_rate?: ValidationFunction<number>;
    diesel_rate?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DistanceUpdateFormOverridesProps = {
    DistanceUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    port1?: PrimitiveOverrideProps<TextFieldProps>;
    port2?: PrimitiveOverrideProps<TextFieldProps>;
    port3?: PrimitiveOverrideProps<TextFieldProps>;
    port4?: PrimitiveOverrideProps<TextFieldProps>;
    port5?: PrimitiveOverrideProps<TextFieldProps>;
    port6?: PrimitiveOverrideProps<TextFieldProps>;
    cargo1?: PrimitiveOverrideProps<TextFieldProps>;
    cargo2?: PrimitiveOverrideProps<TextFieldProps>;
    cargo3?: PrimitiveOverrideProps<TextFieldProps>;
    cargo4?: PrimitiveOverrideProps<TextFieldProps>;
    cargo5?: PrimitiveOverrideProps<TextFieldProps>;
    cargo6?: PrimitiveOverrideProps<TextFieldProps>;
    miscCosts?: PrimitiveOverrideProps<TextFieldProps>;
    craneUsage?: PrimitiveOverrideProps<TextFieldProps>;
    cargo5_quanity?: PrimitiveOverrideProps<TextFieldProps>;
    cargo6_quantity?: PrimitiveOverrideProps<TextFieldProps>;
    cargo4_quantity?: PrimitiveOverrideProps<TextFieldProps>;
    cargo3_quantity?: PrimitiveOverrideProps<TextFieldProps>;
    cargo2_quantity?: PrimitiveOverrideProps<TextFieldProps>;
    cargo1_quantity?: PrimitiveOverrideProps<TextFieldProps>;
    cargo3_rate?: PrimitiveOverrideProps<TextFieldProps>;
    cargo4_rate?: PrimitiveOverrideProps<TextFieldProps>;
    cargo5_rate?: PrimitiveOverrideProps<TextFieldProps>;
    cargo6_rate?: PrimitiveOverrideProps<TextFieldProps>;
    cargo1_rate?: PrimitiveOverrideProps<TextFieldProps>;
    cargo2_rate?: PrimitiveOverrideProps<TextFieldProps>;
    portDays?: PrimitiveOverrideProps<TextFieldProps>;
    bunker_rate?: PrimitiveOverrideProps<TextFieldProps>;
    diesel_rate?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type DistanceUpdateFormProps = React.PropsWithChildren<{
    overrides?: DistanceUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    distance?: Distance;
    onSubmit?: (fields: DistanceUpdateFormInputValues) => DistanceUpdateFormInputValues;
    onSuccess?: (fields: DistanceUpdateFormInputValues) => void;
    onError?: (fields: DistanceUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: DistanceUpdateFormInputValues) => DistanceUpdateFormInputValues;
    onValidate?: DistanceUpdateFormValidationValues;
} & React.CSSProperties>;
export default function DistanceUpdateForm(props: DistanceUpdateFormProps): React.ReactElement;
