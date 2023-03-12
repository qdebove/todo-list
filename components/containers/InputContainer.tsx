type InputContainerProps = {
  children: any;
};

export default function InputContainer({ children }: InputContainerProps) {
  return <div className="flex flex-col text-sm w-full p-4">{children}</div>;
}
