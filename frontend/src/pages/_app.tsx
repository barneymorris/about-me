import { useLanguage } from "@/hooks/useLanguage";
import { GlobalStyle } from "@/styles/GlobalStyle";
import { printDebugInfo } from "@/utils/printDebugInfo";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./../styles/theme";
import { wrapper } from "./../store/store";
import { appWithTranslation } from "next-i18next";

function App({ Component, pageProps }: AppProps) {
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

export default wrapper.withRedux(appWithTranslation(App));
