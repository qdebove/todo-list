import styled from "@emotion/styled";
import TodoState from "../../models/enums/TodoState";
import Todo from "../../models/Todo";

type TodoCardProps = {
  todo: Todo;
};

const Card = styled.div<{ todo: Todo }>``;

export default function TodoCard({ todo }: TodoCardProps) {
  return (
    <div
      className={`${
        todo.state === TodoState.DONE ? "bg-slate-200" : "bg-white"
      }  rounded-lg border border-primary-100 shadow-md shadow-primary-200 relative h-full flex flex-row justify-around items-center`}
    >
      <p
        className={`${
          todo.state === TodoState.DONE && "line-through"
        } text-secondary-500 text-xl p-4`}
      >
        {todo.title}
      </p>
    </div>
  );
}
