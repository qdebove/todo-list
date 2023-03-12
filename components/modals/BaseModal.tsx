import XMarkIcon from "@heroicons/react/24/outline/XMarkIcon";
import useClickOutside from "../../lib/useClickOutside";
import Button from "../buttons/Button";

export type BaseModalProps = {
  closeHandler: () => void;
  mainIcon?: any;
  title: string;
  bottomButtons: any;
  children: any;
};

export default function BaseModal({
  bottomButtons,
  closeHandler,
  title,
  mainIcon,
  children,
}: BaseModalProps) {
  const { ref } = useClickOutside({
    clickedOutsideCallback: closeHandler,
  });

  return (
    <div className="overflow-y-auto overflow-x-hidden fixed top-0 bottom-0 right-0 left-0 z-50 md:inset-0 md:h-full bg-primary-100/40">
      <div className="w-full h-full relative flex flex-col justify-center items-center">
        <div ref={ref} className="p-4 w-full max-w-md h-full md:h-auto">
          <div className="bg-white rounded-lg shadow flex flex-col items-center">
            <div className="ml-auto">
              <Button
                small
                onClickHandler={closeHandler}
                color="primary"
                label=""
                startIcon={<XMarkIcon className="w-4 h-4 text-tertiary-300" />}
              />
            </div>
            <div className="flex flex-col justify-center items-center">
              {mainIcon}
              <h3 className="text-lg font-normal text-primary-500">{title}</h3>
              {children}
              <div className="flex flex-row justify-center items-center">
                {bottomButtons}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
