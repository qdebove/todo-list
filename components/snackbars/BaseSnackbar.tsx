import XMarkIcon from "@heroicons/react/24/outline/XMarkIcon";
import Button from "../buttons/Button";

type BaseSnackbarProps = {
  title: string;
  description: string;
  startIcon?: any;
  endIcon?: any;
  closable?: boolean;
  handleClose: () => void;
  isError: boolean;
};

export default function BaseSnackbar({
  title,
  description,
  startIcon,
  endIcon,
  closable,
  handleClose,
  isError = false,
}: BaseSnackbarProps) {
  return (
    <div
      className={`flex flex-row w-full ${
        isError ? "bg-tertiary-500" : "bg-primary-500"
      } rounded px-2 py-1 items-center text-white`}
    >
      {startIcon}
      <div className="flex flex-col items-start w-full px-4">
        <h2 className="font-bold">{title}</h2>
        <p>{description}</p>
      </div>
      {endIcon}
      {closable && (
        <Button
          small
          label=""
          onClickHandler={handleClose}
          color={isError ? "tertiary" : "primary"}
          endIcon={<XMarkIcon className="w-4 h-4 text-secondary-500" />}
        />
      )}
    </div>
  );
}
