type InputErrorMessageProps = {
  message: string;
};

export default function InputErrorMessage({ message }: InputErrorMessageProps) {
  return <span className="text-red-500 italic text-left">{message}</span>;
}
