import LocalDb from "../db/LocalDb";
import TodoState from "../models/enums/TodoState";
import Todo from "../models/Todo";
import AbstractTodoRepository from "./AbstractTodoRepository";

export default class LocalTodoRepository extends AbstractTodoRepository {
  constructor() {
    super(new LocalDb());
  }

  public override async getAll(): Promise<Todo[]> {
    const todos: Todo[] = await super.getAll();

    return todos.sort(this._orderTodo);
  }

  private _orderTodo(todo1: Todo, todo2: Todo): number {
    if (todo1.state === TodoState.DONE) {
      if (todo2.state === TodoState.DONE) {
        return todo1.id > todo2.id ? -1 : 1;
      }

      return 1;
    }

    return todo2.state === TodoState.DONE ? -1 : 1;
  }
}
