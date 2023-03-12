import { createContext, Dispatch, useContext, useReducer } from "react";
import { todoReducer, TodoReducerAction } from "./reducers/todos";
import { State } from "./states/todos";

const initialTodoState: State = {
  data: [],
};

const TodoContext = createContext<{
  state: State | null;
  dispatch: Dispatch<TodoReducerAction> | null;
}>({ state: null, dispatch: null });
const combineReducers =
  (...reducers: any) =>
  (state: any, action: any) => {
    for (let i = 0; i < reducers.length; i++) {
      state = reducers[i](state, action);
    }
    return state;
  };

const TodoProvider = (data: any) => {
  const [state, dispatch] = useReducer(
    combineReducers(todoReducer),
    initialTodoState
  );
  const value = { state, dispatch };

  return (
    <TodoContext.Provider value={value}>{data.children}</TodoContext.Provider>
  );
};

const useTodoContext = () => useContext(TodoContext);

export { useTodoContext, TodoProvider };
