import type { AppProps } from "next/app";

import Layout from "@/components/Layout/Layout";

import HeroList from "@/container/HeroList/HeroList";

import { GlobalStyle } from "@/styles/globals.style";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <HeroList />
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
