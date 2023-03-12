import { ColorableElement } from "../../constants/types";

export type ButtonProps = ColorableElement & {
  label: string;
  startIcon?: any;
  endIcon?: any;
  small?: boolean;
};

export type ClickableButtonProps = ButtonProps & {
  onClickHandler: () => void;
};

export default function Button({
  label,
  onClickHandler,
  color,
  disabled,
  startIcon,
  endIcon,
  small,
}: ClickableButtonProps) {
  const onClick = () => onClickHandler();

  return (
    <button
      className={`flex flex-row ${
        startIcon || endIcon ? "justify-between" : "justify-center"
      } items-center text-white ${small ? "p-2 m-2" : "p-4 m-4"} ${
        (disabled && "bg-gray-400 cursor-not-allowed") || `bg-${color}`
      } rounded`}
      disabled={disabled}
      onClickCapture={onClick}
    >
      {startIcon}
      {label}
      {endIcon}
    </button>
  );
}
