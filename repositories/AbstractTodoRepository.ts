import Todo from "../models/Todo";
import AbstractRepository from "./AbstractRepository";

export default abstract class AbstractTodoRepository extends AbstractRepository<Todo> {}
