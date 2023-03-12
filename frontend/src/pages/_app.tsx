import { useLanguage } from "@/hooks/useGetLanguage";
import { GlobalStyle } from "@/styles/GlobalStyle";
import { printDebugInfo } from "@/utils/printDebugInfo";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./../styles/theme";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    printDebugInfo();
  }, []);

  useLanguage();

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
