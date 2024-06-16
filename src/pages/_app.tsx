import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";

import Layout from "@/components/Layout/Layout";
import ErrorBoundary from "@/components/ErrorBoundary/ErrorBoundary";

import HeroList from "@/container/HeroList/HeroList";

import { GlobalStyle } from "@/styles/globals.style";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <GlobalStyle />
      <Layout>
        <HeroList />
        <Component {...pageProps} />
        <Toaster
          toastOptions={{
            success: {
              duration: 1000,
            },
          }}
        />
      </Layout>
    </ErrorBoundary>
  );
}
