import { INTERNAL_SERVER_ERROR } from "../../constants/http-codes";
import { useSnackbarContext, useTodoContext } from "../../context";
import { SnackbarActionType } from "../../context/reducers/snackbar";
import { TodoActionType } from "../../context/reducers/todos";
import useErrors from "../../lib/useErrors";
import useModelCreation from "../../lib/useModelCreation";
import Todo from "../../models/Todo";
import TodoService from "../../services/TodoService";
import CompleteFormTextInput from "../inputs/text-inputs/CompleteFormTextInput";
import TextArea from "../inputs/text-inputs/TextArea";
import TodoCreationModal from "../modals/TodoCreationModal";

type TodoCreationProps = {
  handleCloseModal: () => void;
};

export default function TodoCreation({ handleCloseModal }: TodoCreationProps) {
  const { handleChange, inputValues, resetModel } = useModelCreation<Todo>({});
  const { errors, setFieldErrors } = useErrors<Todo>();
  const { dispatch } = useTodoContext();
  const snackbarContext = useSnackbarContext();

  const createHandler = async () => {
    const service = new TodoService();

    try {
      const todo: Todo = await service.createNew({ ...inputValues });
      dispatch!({ type: TodoActionType.TODO_CREATED, payload: todo });
      snackbarContext.dispatch!({
        type: SnackbarActionType.SHOW_SNACKBAR,
        payload: {
          snackbar: {
            title: "Created !",
            description: "A new todo was created successfully !",
            closable: true,
            error: false,
          },
          show: true,
        },
      });
      handleClose();
    } catch (err: any) {
      console.log(err);
      if (err?.response?.data["target"]) {
        const { target, message } = err?.response?.data;
        setFieldErrors([{ field: target, message }]);
      }

      if (err?.response?.status === INTERNAL_SERVER_ERROR) {
        snackbarContext.dispatch!({
          type: SnackbarActionType.SHOW_DEFAULT_SERVER_ERROR_SNACKBAR,
        });
      }
    }
  };

  const handleClose = () => {
    resetModel({});
    setFieldErrors([]);
    handleCloseModal();
  };

  const handleInputChange = (attribute: keyof Todo) => (value: any) =>
    handleChange(attribute, value);

  return (
    <TodoCreationModal closeHandler={handleClose} createHandle={createHandler}>
      <CompleteFormTextInput
        for_label={"title"}
        value={inputValues.title ?? ""}
        type={"text"}
        label={"Title"}
        placeholder="Clean code"
        errorMessage={errors.title}
        required
        onValueChange={handleInputChange("title")}
      />

      <TextArea
        value={inputValues.description ?? ""}
        for_label="description"
        label="Description"
        placeholder="Make tests...."
        onValueChange={handleInputChange("description")}
        rows={5}
      />
    </TodoCreationModal>
  );
}
