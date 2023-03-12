import { CheckIcon, LinkIcon } from "@heroicons/react/24/outline";
import { ICON_SIZE } from "../../constants/sizes";
import TodoState from "../../models/enums/TodoState";
import Todo from "../../models/Todo";

type TodoCardProps = {
  todo: Todo;
  changeStateHandler: () => void;
  handleNavigate: () => void;
};

export default function TodoCard({
  todo,
  changeStateHandler,
  handleNavigate,
}: TodoCardProps) {
  return (
    <div
      className={`${
        todo.state === TodoState.DONE ? "bg-slate-200" : "bg-white"
      } card flex-row justify-around items-center`}
    >
      <h3
        className={`${
          todo.state === TodoState.DONE && "line-through"
        } text-secondary-500 text-xl p-4`}
      >
        {todo.title}
      </h3>
      <LinkIcon
        onClick={handleNavigate}
        width={ICON_SIZE}
        height={ICON_SIZE}
        className="text-secondary-400 m-2 hover:text-secondary-200 cursor-pointer"
      />
      {todo.state === TodoState.TO_DO && (
        <CheckIcon
          onClick={changeStateHandler}
          width={ICON_SIZE}
          height={ICON_SIZE}
          className="text-primary-800 m-2 hover:text-primary-200 cursor-pointer"
        />
      )}
    </div>
  );
}
