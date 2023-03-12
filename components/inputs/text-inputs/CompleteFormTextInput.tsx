import InputContainer from "../../containers/InputContainer";
import InputErrorMessage from "../InputErrorMessage";
import InputLabel from "../InputLabel";
import BaseTextInput, { BaseTextInputProps } from "./BaseTextInputs";

type CompleteFormTextInputProps = BaseTextInputProps & {
  label: string;
  errorMessage?: string;
};

export default function CompleteFormTextInput({
  onValueChange,
  for_label,
  label,
  value,
  type,
  placeholder,
  readonly,
  disabled,
  required,
  errorMessage,
}: CompleteFormTextInputProps) {
  return (
    <InputContainer>
      <InputLabel
        for_label={for_label}
        errorMessage={errorMessage}
        label={label}
        required={required}
      />
      <BaseTextInput
        for_label={for_label}
        onValueChange={onValueChange}
        type={type}
        value={value}
        disabled={disabled}
        isError={!!errorMessage}
        placeholder={placeholder}
        readonly={readonly}
        required={required}
      />
      {!!errorMessage && <InputErrorMessage message={errorMessage} />}
    </InputContainer>
  );
}
