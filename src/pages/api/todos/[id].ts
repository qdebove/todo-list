import { NextApiRequest, NextApiResponse } from "next";
import {
  BAD_REQUEST,
  INTERNAL_SERVER_ERROR,
  METHOD_NOT_ALLOWED,
  NOT_FOUND,
  OK,
} from "../../../../constants/http-codes";
import TodoState from "../../../../models/enums/TodoState";
import Todo from "../../../../models/Todo";
import TodoRepositoryProvider from "../../../../providers/TodoRepositoryProvider";
import AbstractTodoRepository from "../../../../repositories/AbstractTodoRepository";
import { verifyId } from "../../../../utils/api";

const todoRepository: AbstractTodoRepository =
  TodoRepositoryProvider.getRepository();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const method: string | undefined = req.method;

  switch (method) {
    case "GET": {
      try {
        const { id } = req.query;

        if (!verifyId(id)) {
          return res.status(BAD_REQUEST).end();
        }

        const todo = await getById(Number(id));

        if (!todo) {
          return res.status(NOT_FOUND).end();
        }

        return res.status(OK).json(todo);
      } catch (err) {
        console.log(err);
        return res.status(INTERNAL_SERVER_ERROR).end();
      }
    }

    case "PATCH": {
      try {
        const { id } = req.query;

        if (!verifyId(id)) {
          return res.status(BAD_REQUEST).end();
        }

        await patch(Number(id));

        return res.status(OK).end();
      } catch (err) {
        console.log(err);
        return res.status(INTERNAL_SERVER_ERROR).end();
      }
    }

    default: {
      return res.status(METHOD_NOT_ALLOWED).end();
    }
  }
}

async function getById(id: number): Promise<Todo | undefined> {
  return todoRepository.getById(id);
}

async function patch(id: number) {
  return todoRepository.patch<"state">(id, "state", TodoState.DONE);
}
