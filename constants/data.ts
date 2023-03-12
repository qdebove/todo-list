import TodoState from "../models/enums/TodoState";
import Todo from "../models/Todo";

export const INITIALS_TODOS: Todo[] = [
  {
    id: 1,
    title: "Hello world",
    description: "Lorem ipsum...",
    state: TodoState.TO_DO,
  },
  {
    id: 2,
    title: "Letter to Santa",
    description: "Sim doloris...",
    state: TodoState.TO_DO,
  },
  {
    id: 3,
    title: "Tidy up my desk",
    state: TodoState.DONE,
  },
];
