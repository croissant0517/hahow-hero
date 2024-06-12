import type { AppProps } from "next/app";

import HeroList from "@/container/HeroList/HeroList";

import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <HeroList />
      <Component {...pageProps} />
    </>
  );
}
