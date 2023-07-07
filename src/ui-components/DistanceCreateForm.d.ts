/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type DistanceCreateFormInputValues = {
    sourcePort?: string;
    destinationPort?: string;
};
export declare type DistanceCreateFormValidationValues = {
    sourcePort?: ValidationFunction<string>;
    destinationPort?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DistanceCreateFormOverridesProps = {
    DistanceCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    sourcePort?: PrimitiveOverrideProps<SelectFieldProps>;
    destinationPort?: PrimitiveOverrideProps<SelectFieldProps>;
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
