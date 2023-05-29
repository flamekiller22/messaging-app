"use client";

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface MessageInputProps {
  id: string;
  type?: string;
  required?:  boolean;
  placeholder?: string;
  register: UseFormRegister<FieldValues>,
  errors: FieldErrors
}

const MessageInput: React.FC<MessageInputProps> = ({
  id,
  type,
  required,
  placeholder,
  register,
  errors
}) => {
  return (
    <div className="relative w-full">
      <input
        id={id}
        type={type}
        autoComplete="off"
        {...register(id, { required })}
        placeholder={placeholder}
        className="
          text-black
          dark:text-gray-100
          font-light
          px-4
          py-2
          bg-neutral-100
          dark:bg-gray-600
          w-full
          rounded-full
          focus:outline-none
        "
      />
    </div>
  )
}

export default MessageInput