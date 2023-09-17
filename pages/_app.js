'use client'
import Head from "next/head";
import "../styles/globals.css";
import AnimatedCursor from "react-animated-cursor"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Dripping Dinos</title>
        <meta name="description" content="Dripping Dinos" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
