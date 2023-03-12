import Todo from "../../models/Todo";
import TodoCard from "./TodoCard";

type TodoContainerProps = {
  todos: Todo[];
  changeTodoState: (todo: Todo) => void;
  handleNavigate: (todo: Todo) => void;
};

export default function TodoContainer({
  todos,
  changeTodoState,
  handleNavigate,
}: TodoContainerProps) {
  return (
    <section className="w-full flex flex-row justify-center items-start p-4 flex-wrap">
      {todos.map((todo: Todo, index: number) => (
        <div className="p-2" key={index}>
          <TodoCard
            handleNavigate={() => handleNavigate(todo)}
            changeStateHandler={() => changeTodoState(todo)}
            todo={todo}
          />
        </div>
      ))}
    </section>
  );
}
