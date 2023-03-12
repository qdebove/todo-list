import "@/styles/globals.css";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";
import AppSnackbar from "../../components/snackbars/AppSnackbar";
import { SnackbarProvider, TodoProvider } from "../../context";

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <SnackbarProvider>
      <TodoProvider>
        {getLayout(<Component {...pageProps} />)}
        <AppSnackbar />
      </TodoProvider>
    </SnackbarProvider>
  );
}
