/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type DistanceCreateFormInputValues = {
    port1?: string;
    port2?: string;
    port3?: string;
    port4?: string;
    port5?: string;
    port6?: string;
    cost?: number;
};
export declare type DistanceCreateFormValidationValues = {
    port1?: ValidationFunction<string>;
    port2?: ValidationFunction<string>;
    port3?: ValidationFunction<string>;
    port4?: ValidationFunction<string>;
    port5?: ValidationFunction<string>;
    port6?: ValidationFunction<string>;
    cost?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DistanceCreateFormOverridesProps = {
    DistanceCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    port1?: PrimitiveOverrideProps<SelectFieldProps>;
    port2?: PrimitiveOverrideProps<SelectFieldProps>;
    port3?: PrimitiveOverrideProps<SelectFieldProps>;
    port4?: PrimitiveOverrideProps<SelectFieldProps>;
    port5?: PrimitiveOverrideProps<SelectFieldProps>;
    port6?: PrimitiveOverrideProps<SelectFieldProps>;
    cost?: PrimitiveOverrideProps<TextFieldProps>;
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
