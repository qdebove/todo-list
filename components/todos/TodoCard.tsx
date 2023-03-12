import { CheckIcon, XMarkIcon } from "@heroicons/react/24/outline";
import TodoState from "../../models/enums/TodoState";
import Todo from "../../models/Todo";

type TodoCardProps = {
  todo: Todo;
  changeStateHandler: () => void;
};

export default function TodoCard({ todo, changeStateHandler }: TodoCardProps) {
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
      {(todo.state === TodoState.TO_DO && (
        <CheckIcon
          onClick={changeStateHandler}
          width={32}
          height={32}
          className="text-primary-800 m-2 hover:text-primary-200 cursor-pointer"
        />
      )) || (
        <XMarkIcon
          onClick={changeStateHandler}
          width={32}
          height={32}
          className="text-tertiary-800 m-2 hover:text-tertiary-200 cursor-pointer"
        />
      )}
    </div>
  );
}
