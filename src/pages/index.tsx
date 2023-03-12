import { useEffect } from "react";
import Header from "../../components/Header";
import NavBar from "../../components/NavBar";
import TodoContainer from "../../components/todos/TodoContainer";
import { useTodoContext } from "../../context";
import { TodoActionType } from "../../context/reducers/todos";
import TodoState from "../../models/enums/TodoState";
import Todo from "../../models/Todo";
import TodoService from "../../services/TodoService";

export default function Home() {
  const { state, dispatch } = useTodoContext();

  const handleStateChange = async (todo: Todo) => {
    const service: TodoService = new TodoService();
    await service.changeState(todo.id);
    todo.state =
      todo.state === TodoState.DONE ? TodoState.TO_DO : TodoState.DONE;
    dispatch!({ type: TodoActionType.TODO_STATE_CHANGE, payload: todo });
  };

  useEffect(() => {
    const service: TodoService = new TodoService();
    service
      .getAll()
      .then((data: Todo[]) =>
        dispatch!({ type: TodoActionType.SET_ALL_TODO, payload: data })
      );
  }, []);

  return (
    <>
      <Header />
      <main>
        <NavBar />
        <TodoContainer
          todos={state!.data}
          changeTodoState={handleStateChange}
        />
      </main>
    </>
  );
}
