import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Layout } from "../components/layout";
import { DataProvider } from "../context/DataProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="font-['Quicksand']">
      <Layout>
        {/* <DataProvider> */}
        <Component {...pageProps} />
        {/* </DataProvider> */}
      </Layout>
    </div>
  );
}
