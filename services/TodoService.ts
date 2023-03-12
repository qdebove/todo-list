import axios from "axios";
import {
  CHANGE_TODO_STATE_URL,
  GET_ALL_TODOS_URL,
  GET_TODO_BY_ID_URL,
  POST_TODO_URL,
} from "../constants/urls";
import Todo from "../models/Todo";

export default class TodoService {
  public async getAll(): Promise<Todo[]> {
    const { data } = await axios.get<Todo[]>(GET_ALL_TODOS_URL);

    return data;
  }

  public async getById(id: number): Promise<Todo | undefined> {
    const { data } = await axios.get<Todo | undefined>(GET_TODO_BY_ID_URL(id));

    return data;
  }

  public async createNew(todo: Partial<Todo>): Promise<Todo> {
    const { data } = await axios.post<Todo>(POST_TODO_URL, todo);

    return data;
  }

  public async changeState(id: number): Promise<void> {
    await axios.patch<void>(CHANGE_TODO_STATE_URL(id));
  }
}
