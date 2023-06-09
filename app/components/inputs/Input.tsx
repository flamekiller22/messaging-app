"use client";

import clsx from "clsx";
import { useEffect } from "react";
import {
  FieldErrors,
  FieldValues,
  UseFormRegister,
  Validate
} from "react-hook-form";

interface InputProps {
  label: string;
  id: string;
  type?: string;
  required?: boolean;
  validate?: Validate<any, FieldValues>;
  register: UseFormRegister<FieldValues>,
  minLength?: number,
  maxLength?: number,
  pattern?: RegExp,
  errors: FieldErrors,
  disabled?: boolean;
}

const Input: React.FC<InputProps> = ({
  label,
  id,
  type,
  required,
  validate,
  register,
  minLength,
  maxLength,
  pattern,
  errors,
  disabled
}) => {
  return (
    <div>
      <label 
        className="
          block
          text-sm
          font-medium
          leading-6
          text-gray-900
          dark:text-gray-100
        "
        htmlFor={id}
      >
        {label}
      </label>
      <div className="mt-2">
        <input
          id={id}
          type={type}
          autoComplete={id}
          disabled={disabled}
          {...register(id, { required, validate, minLength, maxLength, pattern })}
          className={clsx(`
            form-input
            block
            w-full
            rounded-md
            border-0
            py-1.5
            dark:text-gray-100
            dark:bg-gray-800
            shadow-sm
            ring-1
            ring-inset
            ring-gray-300
            dark:ring-gray-600
            placeholder:text-gray-400
            focus:ring-2
            focus:ring-inset
            focus:ring-sky-600
            sm:text-sm
            sm:leading-6
          `,
          errors[id] && "focus:ring-rose-500",
          errors[id] && "ring-rose-300",
          disabled && "opacity-50 cursor-default"
        )}
        />
        {errors[id] && (
          <span role="alert" className="flex items-center font-medium tracking-wide text-rose-500 text-xs mt-1 ml-1">
            {errors[id]?.type === 'required' && 'This is a required field.'}
            {errors[id]?.type === 'pattern' && 'Invalid email address.'}
            {errors[id]?.type === 'minLength' && `Minimum length required is ${minLength}.`}
            {errors[id]?.type === 'maxLength' && `Maximum length allowed is ${maxLength}.`}
            {errors[id]?.type === 'validate' && 'The passwords do not match.'}
          </span>
        )}
      </div>
    </div>
  );
}

export default Input;
