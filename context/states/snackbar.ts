export type SnackbarState = {
  show?: boolean;
  snackbar: {
    title: string;
    description: string;
    startIcon?: any;
    endIcon?: any;
    closable?: boolean;
    error?: boolean;
  } | null;
};
