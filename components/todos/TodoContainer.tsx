import { useRef } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Todo from "../../models/Todo";
import TodoCard from "./TodoCard";

type TodoContainerProps = {
  todos: Todo[];
  changeTodoState: (todo: Todo) => void;
};

export default function TodoContainer({
  todos,
  changeTodoState,
}: TodoContainerProps) {
  return (
    <section className="w-full flex flex-row justify-center items-start p-4 flex-wrap">
      <TransitionGroup component={null}>
        {todos.map((todo, index: number) => {
          const itemRef = useRef(null);
          const delay = 500 * index;

          return (
            <CSSTransition
              nodeRef={itemRef}
              key={index}
              timeout={500 + delay}
              addEndListener={() => {}}
              classNames="fade"
            >
              <div
                className="p-2"
                ref={itemRef}
                style={{ transitionDelay: `${delay}ms` }}
              >
                <TodoCard
                  changeStateHandler={() => changeTodoState(todo)}
                  todo={todo}
                />
              </div>
            </CSSTransition>
          );
        })}
      </TransitionGroup>
    </section>
  );
}
