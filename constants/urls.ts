import { BASE_URL } from "./environment";

export const GET_ALL_TODOS_URL = `${BASE_URL}/api/todos`;
export const GET_TODO_BY_ID_URL = (id: number) => `${GET_ALL_TODOS_URL}/${id}`;
export const POST_TODO_URL = GET_ALL_TODOS_URL;
export const CHANGE_TODO_STATE_URL = GET_TODO_BY_ID_URL;
