import { NextApiRequest, NextApiResponse } from "next";
import {
  BAD_REQUEST,
  CREATED,
  INTERNAL_SERVER_ERROR,
  METHOD_NOT_ALLOWED,
  OK,
} from "../../../../constants/http-codes";
import { DEFAULT_SERVER_ERROR } from "../../../../constants/messages";
import { AttributeError, ServerError } from "../../../../models/Errors";
import Todo from "../../../../models/Todo";
import TodoRepositoryProvider from "../../../../providers/TodoRepositoryProvider";
import AbstractTodoRepository from "../../../../repositories/AbstractTodoRepository";
import TodoRepository from "../../../../repositories/LocalTodoRepository";

const todoRepository: AbstractTodoRepository =
  TodoRepositoryProvider.getRepository();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "GET": {
      const todoRepository: TodoRepository = new TodoRepository();

      try {
        const allTodos: Todo[] = await todoRepository.getAll();

        return res.status(OK).json(allTodos);
      } catch (err) {
        console.log(err);
        return res
          .status(INTERNAL_SERVER_ERROR)
          .send(new ServerError(DEFAULT_SERVER_ERROR));
      }
    }

    case "POST": {
      try {
        const todoData = req.body;

        const newTodo: Todo = await post(todoData);

        return res.status(CREATED).json(newTodo);
      } catch (err: any) {
        if (err instanceof AttributeError) {
          return res.status(BAD_REQUEST).json(err);
        }
        console.log(err);
        return res.status(INTERNAL_SERVER_ERROR).end();
      }
    }

    default: {
      return res.status(METHOD_NOT_ALLOWED).end();
    }
  }
}

async function post(data: Partial<Todo>): Promise<Todo> {
  return todoRepository.post(data);
}
