import { ChangeEvent } from "react";

export type InputType = "text" | "date" | "number" | "password" | "email";

export type BaseTextInputProps = {
  onValueChange: (value?: string) => any;
  for_label: string;
  value: string | number;
  type: InputType;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  readonly?: boolean;
  isError?: boolean;
};

export default function BaseTextInput({
  onValueChange,
  for_label,
  value,
  type,
  placeholder,
  readonly,
  disabled,
  required,
  isError,
}: BaseTextInputProps) {
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    onValueChange(event.currentTarget.value);
  };

  return (
    <input
      onChange={!!onValueChange ? onChange : undefined}
      name={for_label}
      type={type}
      id={for_label}
      className={`outline-none bg-gray-50 border ${
        (!!isError && "border-red-500") ||
        "border-gray-300 focus:ring-secondary-400 focus:border-secondary-400"
      } text-primary-300 rounded-lg w-full p-2.5`}
      placeholder={placeholder}
      required={required}
      readOnly={readonly}
      disabled={disabled}
      value={value}
    ></input>
  );
}
