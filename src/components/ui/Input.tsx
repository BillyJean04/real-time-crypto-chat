"use client";

import InputBase, { InputBaseProps } from "@mui/material/InputBase";

import { FC } from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface InputProps {
    id: string;
    type?: string;
    required?: boolean;
    register: UseFormRegister<FieldValues>;
    errors: FieldErrors;
}

const Input: FC<InputBaseProps & InputProps> = ({
    id,
    type,
    required,
    register,
    errors,
    ...props
}) => {
    return (
        <InputBase
            id={id}
            type={type}
            autoComplete={id}
            {...register(id, { required })}
            {...props}
        />
    );
};

export default Input;
