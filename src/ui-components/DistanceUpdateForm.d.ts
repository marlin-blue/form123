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
    sourcePort?: string;
    destinationPort?: string;
    distance?: string;
};
export declare type DistanceUpdateFormValidationValues = {
    sourcePort?: ValidationFunction<string>;
    destinationPort?: ValidationFunction<string>;
    distance?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DistanceUpdateFormOverridesProps = {
    DistanceUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    sourcePort?: PrimitiveOverrideProps<TextFieldProps>;
    destinationPort?: PrimitiveOverrideProps<TextFieldProps>;
    distance?: PrimitiveOverrideProps<TextFieldProps>;
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
