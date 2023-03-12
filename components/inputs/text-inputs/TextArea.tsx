import { ChangeEvent } from "react";
import InputContainer from "../../containers/InputContainer";
import InputErrorMessage from "../InputErrorMessage";
import InputLabel from "../InputLabel";

type TextAreaProps = {
  onValueChange: (value: string) => any;
  for_label: string;
  label: string;
  value: string;
  rows?: number;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  readonly?: boolean;
  errorMessage?: string;
};

export default function TextArea({
  for_label,
  label,
  onValueChange,
  value,
  disabled,
  errorMessage,
  placeholder,
  readonly,
  required,
  rows,
}: TextAreaProps) {
  const onChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    onValueChange(event.currentTarget.value);
  };

  return (
    <InputContainer>
      <InputLabel
        for_label={for_label}
        errorMessage={errorMessage}
        label={label}
        required={required}
      />
      <textarea
        onChange={!!onValueChange ? onChange : undefined}
        className={`outline-none bg-gray-50 border ${
          (!!errorMessage && "border-red-500") ||
          "border-gray-300 focus:ring-secondary-400 focus:border-secondary-400"
        } text-primary-300 rounded-lg w-full p-2.5`}
        required={required}
        disabled={disabled}
        name={for_label}
        id={for_label}
        rows={rows}
        value={value}
        placeholder={placeholder}
        readOnly={readonly}
      ></textarea>
      {!!errorMessage && <InputErrorMessage message={errorMessage} />}
    </InputContainer>
  );
}
