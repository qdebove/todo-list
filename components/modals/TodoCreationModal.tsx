import CreationModal from "./CreationModal";

type TodoCreationModalProps = {
  createHandle: () => void;
  closeHandler: () => void;
  children: any;
};

export default function TodoCreationModal({
  createHandle,
  closeHandler,
  children,
}: TodoCreationModalProps) {
  return (
    <CreationModal
      title="Create a new TODO"
      createHandle={createHandle}
      closeHandler={closeHandler}
    >
      {children}
    </CreationModal>
  );
}
