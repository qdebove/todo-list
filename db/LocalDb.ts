import { INITIALS_TODOS } from "../constants/data";
import TodoState from "../models/enums/TodoState";
import { AttributeError } from "../models/Errors";
import Todo from "../models/Todo";
import AbstractDB from "./AbstractDB";

export default class LocalDb extends AbstractDB<Todo> {
  static MOCKED_TODO_DATABASE: Todo[] = [...INITIALS_TODOS];

  override async getAll(): Promise<Todo[]> {
    return [...LocalDb.MOCKED_TODO_DATABASE];
  }

  override async getOneById(idWanted: number): Promise<Todo | undefined> {
    return LocalDb.MOCKED_TODO_DATABASE.find(({ id }) => idWanted === id);
  }

  override async insertOne({
    title,
    description,
  }: Partial<Todo>): Promise<Todo> {
    if (!title) {
      throw new AttributeError("title", "Please fill the title.");
    }

    const newTodo: Todo = {
      id: LocalDb.MOCKED_TODO_DATABASE.length + 1,
      state: TodoState.TO_DO,
      title,
      description,
    };

    LocalDb.MOCKED_TODO_DATABASE.unshift(newTodo);

    return newTodo;
  }
  // TODO use patch 204
  override async updateOne<S extends keyof Todo>(
    idWanted: number,
    attribute: S,
    value: Todo[S]
  ): Promise<void> {
    const todo: Todo | undefined = await this.getOneById(idWanted);

    if (todo !== undefined) {
      todo[attribute] = value;
    }
  }

  override async resetDatabase(): Promise<void> {
    while (LocalDb.MOCKED_TODO_DATABASE.length) {
      LocalDb.MOCKED_TODO_DATABASE.pop();
    }
    LocalDb.MOCKED_TODO_DATABASE.push(...INITIALS_TODOS);
  }
}
