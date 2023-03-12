import { ColorableElement } from "../../constants/types";

type FabButtonProps = ColorableElement & {
  icon: any;
  onClickHandler: () => any;
  small?: boolean;
};

export default function FabButton({
  onClickHandler,
  color,
  icon,
  disabled,
  small,
}: FabButtonProps) {
  return (
    <button
      className={`text-white ${small ? "p-2" : "p-4"} ${
        (disabled && "bg-gray-400 cursor-not-allowed") || `bg-${color}`
      } rounded-full`}
      disabled={disabled}
      onClickCapture={onClickHandler}
    >
      {icon}
    </button>
  );
}
