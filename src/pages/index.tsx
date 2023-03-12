import { AxiosError } from "axios";
import { useRouter } from "next/router";
import { ReactElement, useEffect, useState } from "react";
import CreateFabButton from "../../components/buttons/CreateFabButton";
import Header from "../../components/Header";
import NavBar from "../../components/NavBar";
import TodoContainer from "../../components/todos/TodoContainer";
import TodoCreation from "../../components/todos/TodoCreation";
import { useSnackbarContext, useTodoContext } from "../../context";
import { SnackbarActionType } from "../../context/reducers/snackbar";
import { TodoActionType } from "../../context/reducers/todos";
import TodoState from "../../models/enums/TodoState";
import Todo from "../../models/Todo";
import TodoService from "../../services/TodoService";

export default function Home() {
  const { state, dispatch } = useTodoContext();
  const snackbarContext = useSnackbarContext();
  const router = useRouter();
  const [showCreationModal, setShowCreationModal] = useState(false);

  const handleStateChange = async (todo: Todo) => {
    try {
      const service: TodoService = new TodoService();
      await service.changeState(todo.id);
      todo.state =
        todo.state === TodoState.DONE ? TodoState.TO_DO : TodoState.DONE;
      dispatch!({ type: TodoActionType.TODO_STATE_CHANGE, payload: todo });
    } catch (err: any) {
      console.log(err);
      if (err instanceof Error) {
        snackbarContext.dispatch!({
          type: SnackbarActionType.SHOW_DEFAULT_SERVER_ERROR_SNACKBAR,
        });
      }

      if (err instanceof AxiosError) {
        snackbarContext.dispatch!({
          type: SnackbarActionType.SHOW_SNACKBAR,
          payload: {
            show: true,
            snackbar: {
              title: "Error",
              description: "An error occurred while updating todo.",
              error: true,
              closable: true,
            },
          },
        });
      }
    }
  };

  const handleNavigate = (todo: Todo) => {
    router.push(`/todo/${todo.id}`);
  };

  const handleShowModal = () => setShowCreationModal(true);
  const handleHideModal = () => setShowCreationModal(false);

  useEffect(() => {
    const service: TodoService = new TodoService();
    service
      .getAll()
      .then((data: Todo[]) =>
        dispatch!({ type: TodoActionType.SET_ALL_TODO, payload: data })
      )
      .catch((err) => {
        console.log(err);
        snackbarContext.dispatch!({
          type: SnackbarActionType.SHOW_DEFAULT_SERVER_ERROR_SNACKBAR,
        });
      });
  }, []);

  return (
    <>
      <TodoContainer
        handleNavigate={handleNavigate}
        todos={state!.data}
        changeTodoState={handleStateChange}
      />
      <CreateFabButton color="primary" handleCreate={handleShowModal} />
      {showCreationModal && <TodoCreation handleCloseModal={handleHideModal} />}
    </>
  );
}

export const getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <Header />
      <main>
        <NavBar />
        {page}
      </main>
    </>
  );
};

Home.getLayout = getLayout;
