import { CheckBadgeIcon } from "@heroicons/react/24/outline";
import { AxiosError } from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getLayout } from "..";
import { ICON_SIZE } from "../../../constants/sizes";
import { useSnackbarContext } from "../../../context";
import { SnackbarActionType } from "../../../context/reducers/snackbar";
import TodoState from "../../../models/enums/TodoState";
import Todo from "../../../models/Todo";
import TodoService from "../../../services/TodoService";

export default function TodoComponent() {
  const router = useRouter();
  const [todo, setTodo] = useState<Todo | null>(null);
  const [fetching, setFetching] = useState(true);
  const { dispatch } = useSnackbarContext();

  useEffect(() => {
    if (router.isReady) {
      const service = new TodoService();
      const id = router.query.id as string;

      if (!id || !Number.isSafeInteger(Number.parseInt(id))) {
        router.replace("/");
      }

      service
        .getById(Number.parseInt(id))
        .then((data) => setTodo(data!))
        .catch((err) => {
          console.log(err);
          if (err instanceof Error) {
            dispatch!({
              type: SnackbarActionType.SHOW_DEFAULT_SERVER_ERROR_SNACKBAR,
            });
          }

          if (err instanceof AxiosError) {
            dispatch!({
              type: SnackbarActionType.SHOW_SNACKBAR,
              payload: {
                show: true,
                snackbar: {
                  title: "Error",
                  description: "The ressource requested doesn't exists.",
                  error: true,
                  closable: true,
                },
              },
            });
            router.replace("/");
          }
        })
        .finally(() => setFetching(false));
    }
  }, [router]);

  return (
    <>
      <div className="my-4 flex flex-row justify-center">
        <Link href={"/"} className="text-primary-200">
          Back to home
        </Link>
      </div>
      <div className="card mx-auto w-fit p-4 flex-col m-4">
        {!!todo && (
          <>
            <h2 className="text-primary-800 text-5xl font-extrabold my-2">
              {todo.title}
            </h2>
            <p className="text-secondary-500 text-xl font-medium my-2">
              {todo.description}
            </p>
            {todo.state === TodoState.DONE && (
              <CheckBadgeIcon
                width={2 * ICON_SIZE}
                height={2 * ICON_SIZE}
                className="text-primary-500 ml-auto"
              />
            )}
          </>
        )}
      </div>
    </>
  );
}

TodoComponent.getLayout = getLayout;
