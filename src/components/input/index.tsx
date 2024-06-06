import React from "react";
import { classNames } from "../../utils/helper";

interface InputProps {
  containerClass?: string;
  label?: string;
  name: string;
  value: string | number;
  id: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  isRequired?: boolean;
  error?: string;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  type:
    | "text"
    | "number"
    | "email"
    | "password"
    | "checkbox"
    | "radio"
    | "date"
    | "file";
  placeholder?: string;
}

const Input = ({
  containerClass,
  label,
  name,
  value,
  id,
  onChange,
  className,
  isRequired,
  error,
  onBlur,
  type,
  placeholder,
  ...props
}: InputProps) => {
  return (
    <div className={classNames("w-full", containerClass)}>
      {label ? (
        <div className="flex items-center justify-start gap-1">
          {isRequired ? (
            <span className="text-error font-medium text-[16px]">*</span>
          ) : null}
          <label className="text-charcoal font-jostMedium text-[16px]">
            {label}
          </label>
        </div>
      ) : null}
      <input
        className={classNames(
          "bg-white w-full border-2 py-2 px-2 border-black outline-none rounded-sm !leading-none",
          className,
          error ? "!border-red-600" : "border-black"
        )}
        {...props}
        {...{ name, value, id, onChange, onBlur, type, placeholder }}
      />
    </div>
  );
};

export default Input;
