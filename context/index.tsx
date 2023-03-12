import { createContext, Dispatch, useContext, useReducer } from "react";
import { snackbarReducer, SnackbarReducerAction } from "./reducers/snackbar";
import { todoReducer, TodoReducerAction } from "./reducers/todos";
import { SnackbarState } from "./states/snackbar";
import { State } from "./states/todos";

const initialTodoState: State = {
  data: [],
};

const initialSnackbarState: SnackbarState = {
  show: false,
  snackbar: {
    title: "",
    description: "",
  },
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

const SnackbarContext = createContext<{
  state: SnackbarState | null;
  dispatch: Dispatch<SnackbarReducerAction> | null;
}>({ state: null, dispatch: null });

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

const SnackbarProvider = (data: any) => {
  const [state, dispatch] = useReducer(snackbarReducer, initialSnackbarState);
  const value = { state, dispatch };

  return (
    <SnackbarContext.Provider value={value}>
      {data.children}
    </SnackbarContext.Provider>
  );
};

const useTodoContext = () => useContext(TodoContext);
const useSnackbarContext = () => {
  return useContext(SnackbarContext);
};

export { useTodoContext, TodoProvider, useSnackbarContext, SnackbarProvider };
