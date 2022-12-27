/* eslint-disable react/jsx-props-no-spreading */
import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";
import Head from "next/head";

import defaultSEOConfig from "../../next-seo.config";
import { Chakra } from "lib/components/Chakra";
import Layout from "lib/layout";
import "lib/styles/globals.css";
//@ts_ignore
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const propertyId = "63aa6bc7c2f1ac1e202a3ff1";
  const widgetId = "1gl8ra1k2";
  return (
    <Chakra>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
        />
      </Head>
      <DefaultSeo {...defaultSEOConfig} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <TawkMessengerReact propertyId={propertyId} widgetId={widgetId} />
    </Chakra>
  );
};

export default MyApp;
