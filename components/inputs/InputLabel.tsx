import RequiredField from "../RequiredField";

type InputLabelProps = {
  for_label: string;
  label: string;
  errorMessage?: string;
  required?: boolean;
};

export default function InputLabel({
  for_label,
  label,
  errorMessage,
  required,
}: InputLabelProps) {
  return (
    <label
      htmlFor={for_label}
      className={`text-left mb-1 font-bold ${
        (!!errorMessage && "text-red-500") || "text-primary-300"
      } relative`}
    >
      {label} {required && <RequiredField />}
    </label>
  );
}
