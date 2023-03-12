import { SnackbarState } from "../states/snackbar";

export enum SnackbarActionType {
  SHOW_SNACKBAR = "SHOW_SNACKBAR",
  SHOW_DEFAULT_SERVER_ERROR_SNACKBAR = "SHOW_DEFAULT_ERROR_SNACKBAR",
  HIDE_SNACKBAR = "HIDE_SNACKBAR",
}

export type SnackbarReducerAction = {
  type: SnackbarActionType;
  payload?: SnackbarState;
};

export function snackbarReducer(
  state: SnackbarState,
  action: SnackbarReducerAction
): SnackbarState {
  switch (action.type) {
    case SnackbarActionType.SHOW_SNACKBAR: {
      return {
        ...state,
        snackbar: { ...action.payload!.snackbar! },
        show: true,
      };
    }

    case SnackbarActionType.SHOW_DEFAULT_SERVER_ERROR_SNACKBAR: {
      return {
        ...state,
        show: true,
        snackbar: {
          title: "Error",
          description: "Server errror is occurred. Please try later.",
          closable: true,
          error: true,
        },
      };
    }

    case SnackbarActionType.HIDE_SNACKBAR: {
      return {
        ...state,
        snackbar: null,
        show: false,
      };
    }
  }
}
