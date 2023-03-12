import chai, { assert } from "chai";
import { FAKE_TODO } from "../../constants/test";
import TodoState from "../../models/enums/TodoState";
import { AttributeError } from "../../models/Errors";
import Todo from "../../models/Todo";
import AbstractRepository from "../../repositories/AbstractRepository";
import LocalTodoRepository from "../../repositories/LocalTodoRepository";

describe("Testing TodoRepository methods", () => {
  const repository: AbstractRepository<Todo> = new LocalTodoRepository();

  it("getAll() should return 3 items", async () => {
    const todos: Todo[] = await repository.getAll();

    chai.expect(todos).to.be.length(3);
  });

  it("getById(1) should return 1 item", async () => {
    const todo: Todo = (await repository.getById(1))!;

    chai.expect(todo).to.have.property("id", 1);
  });

  it("getById(4) should return undefined", async () => {
    const todo: Todo | undefined = await repository.getById(4);

    chai.expect(todo).to.be.undefined;
  });

  it('save({title: "TEST"}) should return a new todo with id === 4', async () => {
    const todo: Todo = await repository.post(FAKE_TODO);

    chai.expect(todo).to.have.property("id", 4);
  });

  it("save({}) should throw AttributeError", async () => {
    try {
      await repository.post({});
      assert.fail("Title must be mandatory !");
    } catch (err: any) {
      chai.expect(err).to.be.instanceOf(AttributeError);
      chai.expect(err).to.have.property("target", "title");
    }
  });

  it("changeState(4) should update last TODO created", async () => {
    await repository.patch(4, "state", TodoState.DONE);
    const todo = await repository.getById(4);

    chai.expect(todo).to.have.property("state", TodoState.DONE);
  });

  it("getAll() should return 4 items now", async () => {
    const todos: Todo[] = await repository.getAll();

    chai.expect(todos).to.be.length(4);
  });
});
