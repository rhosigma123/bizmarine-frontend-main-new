import React, { ReactElement } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UseFormRegister, RegisterOptions } from "react-hook-form";

interface InputFieldProps {
  name: string;
  value?: string;
  labelName?: string;
  helpText?: string;
  inputType: string;
  required?: boolean;
  disabled?: boolean;
  placeholder?: string;
  icon?: ReactElement;
  className?: string;
  validationRules?: RegisterOptions;
  error?: string;
  register?: UseFormRegister<any>;
  onClick?: React.MouseEventHandler<HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  id?: string;
  list?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  name,
  value,
  labelName,
  helpText,
  inputType,
  required,
  disabled,
  placeholder,
  className,
  validationRules,
  error,
  register,
  icon,
  onClick,
  onFocus,
  onBlur,
  id,
  list,
}) => {
  return (
    <div className={`${className} flex flex-col gap-2 relative`}>
      {/* Label */}
      {labelName && (
        <Label
          htmlFor={id || name}
          className="text-md text-primary font-medium flex items-center gap-2"
        >
          {icon && <span className="text-2xl">{icon}</span>}
          {labelName}
          {required && <span className="text-red-500"> *</span>}
        </Label>
      )}

      <Input
        {...(register ? register(name, validationRules) : {})}
        type={inputType}
        name={name}
        id={id || name}
        placeholder={placeholder}
        defaultValue={value}
        required={required}
        disabled={disabled}
        autoComplete="on"
        onClick={onClick}
        onFocus={onFocus}
        onBlur={onBlur}
        list={list}
        className={`border-2 rounded-lg px-3 h-12 placeholder:text-[0.95rem] 
          ${
            error
              ? "border-red-500 focus:border-red-500"
              : "border-gray-200 focus:border-primary"
          } 
          focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition-all duration-200`}
      />

      {helpText && <p className="text-xs text-gray-500">{helpText}</p>}
      {error && <span className="text-xs text-red-500">{error}</span>}
    </div>
  );
};

export default InputField;
