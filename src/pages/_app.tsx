import type { AppProps } from "next/app";
import { Header } from "../components/Header";
import { EquipsProvider } from "../hooks/useEquips";
import "../styles/global.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <EquipsProvider>
      <Header />
      <Component {...pageProps} />
    </EquipsProvider>
  );
}

export default MyApp;
