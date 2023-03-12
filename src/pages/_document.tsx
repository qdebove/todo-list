import { Head, Html, Main, NextScript } from "next/document";
import { UBUNTU_FONT } from "../../constants/fonts";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className={`${UBUNTU_FONT.variable} bg-slate-50`}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
