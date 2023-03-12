import TodoState from "./enums/TodoState";

export default interface Todo {
  id: number;
  title: string;
  description?: string;
  state: TodoState;
}
