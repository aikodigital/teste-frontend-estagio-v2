import type { AppProps } from "next/app";
import { EquipsProvider } from "../hooks/useEquips";
import "../styles/global.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <EquipsProvider>
      <Component {...pageProps} />
    </EquipsProvider>
  );
}

export default MyApp;
