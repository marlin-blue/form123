/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Distance } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type DistanceUpdateFormInputValues = {
    sourcePort?: string;
    destinationPort?: string;
    port1?: string;
    port2?: string;
    port3?: string;
    port4?: string;
    port5?: string;
    port6?: string;
    cost?: number;
};
export declare type DistanceUpdateFormValidationValues = {
    sourcePort?: ValidationFunction<string>;
    destinationPort?: ValidationFunction<string>;
    port1?: ValidationFunction<string>;
    port2?: ValidationFunction<string>;
    port3?: ValidationFunction<string>;
    port4?: ValidationFunction<string>;
    port5?: ValidationFunction<string>;
    port6?: ValidationFunction<string>;
    cost?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DistanceUpdateFormOverridesProps = {
    DistanceUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    sourcePort?: PrimitiveOverrideProps<SelectFieldProps>;
    destinationPort?: PrimitiveOverrideProps<SelectFieldProps>;
    port1?: PrimitiveOverrideProps<TextFieldProps>;
    port2?: PrimitiveOverrideProps<TextFieldProps>;
    port3?: PrimitiveOverrideProps<TextFieldProps>;
    port4?: PrimitiveOverrideProps<TextFieldProps>;
    port5?: PrimitiveOverrideProps<TextFieldProps>;
    port6?: PrimitiveOverrideProps<TextFieldProps>;
    cost?: PrimitiveOverrideProps<TextFieldProps>;
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
