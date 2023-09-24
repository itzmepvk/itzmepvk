import TokyoState from "@/src/Context";
import Layout from "@/src/layout/Layout";
import PreLoader from "@/src/layout/PreLoader";
import "@/styles/globals.css";

export default function App({ Component, pageProps, children }) {
  return (
    <TokyoState>
      <PreLoader />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </TokyoState>
  );
}
