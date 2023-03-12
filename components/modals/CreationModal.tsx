import { DocumentPlusIcon } from "@heroicons/react/24/outline";
import { ICON_SIZE } from "../../constants/sizes";
import Button from "../buttons/Button";
import BaseModal from "./BaseModal";

type CreationModalProps = {
  title: string;
  closeHandler: () => void;
  createHandle: () => void;
  children: any;
};

export default function CreationModal({
  closeHandler,
  createHandle,
  title,
  children,
}: CreationModalProps) {
  return (
    <BaseModal
      bottomButtons={
        <>
          <Button
            color="primary"
            label="Create"
            onClickHandler={createHandle}
          />
          <Button
            color="tertiary"
            label="Cancel"
            onClickHandler={closeHandler}
          />
        </>
      }
      title={title}
      mainIcon={
        <DocumentPlusIcon
          width={ICON_SIZE}
          height={ICON_SIZE}
          className="text-primary-300"
        />
      }
      closeHandler={closeHandler}
    >
      {children}
    </BaseModal>
  );
}
