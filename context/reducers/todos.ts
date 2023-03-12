import TodoState from "../../models/enums/TodoState";
import Todo from "../../models/Todo";
import { State } from "../states/todos";

export enum TodoActionType {
  SET_ALL_TODO = "SET_ALL_TODO",
  TODO_CREATED = "TODO_CREATED",
  TODO_STATE_CHANGE = "TODO_STATE_CHANGE",
}

export type TodoReducerAction = {
  type: TodoActionType;
  payload: any;
};

export function todoReducer(state: State, action: TodoReducerAction) {
  switch (action.type) {
    case TodoActionType.SET_ALL_TODO: {
      return {
        data: [...action.payload],
      };
    }

    case TodoActionType.TODO_CREATED: {
      return {
        data: [action.payload, ...state.data],
      };
    }

    case TodoActionType.TODO_STATE_CHANGE: {
      const todo: Todo = action.payload;

      if (todo.state === TodoState.DONE) {
        return {
          data: [...state.data.filter((t: Todo) => t !== todo), todo],
        };
      }

      return {
        data: [todo, ...state.data.filter((t: Todo) => t !== todo)],
      };
    }
  }
}
