import { useEffect } from "react";
import { useSnackbarContext } from "../../context";
import { SnackbarActionType } from "../../context/reducers/snackbar";
import BaseSnackbar from "./BaseSnackbar";
import BottomSnackbarWrapper from "./BottomSnackbarWrapper";

export default function AppSnackbar() {
  const { state, dispatch } = useSnackbarContext();

  const handleClose = () =>
    dispatch!({
      type: SnackbarActionType.HIDE_SNACKBAR,
      payload: { snackbar: null, show: false },
    });

  useEffect(() => {
    const timer = setTimeout(handleClose, 5000);

    return () => clearTimeout(timer);
  }, [state!.show]);

  return (
    (!state!.show && <></>) || (
      <BottomSnackbarWrapper>
        <BaseSnackbar
          title={state!.snackbar!.title}
          description={state!.snackbar!.description}
          startIcon={state!.snackbar?.startIcon}
          endIcon={state!.snackbar?.endIcon}
          closable={state!.snackbar?.closable}
          handleClose={handleClose}
          isError={!!state!.snackbar?.error}
        />
      </BottomSnackbarWrapper>
    )
  );
}
