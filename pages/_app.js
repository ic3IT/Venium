'use client'
import Head from "next/head";
import "../styles/globals.css";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Venium</title>
        <meta charset="utf-8" />
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Venium: Innovative Community Ecosystem on Scroll zkEVM" />
        
        <meta property="og:title" content="Venium: Innovative Community Ecosystem on Scroll zkEVM" />
        <meta property="og:description" content="Venium: Innovative Community Ecosystem on Scroll zkEVM - Dive in and experience innovation at its finest." />
        <meta property="og:image" content="https://i.imgur.com/grPbAkO.png" />
        <meta property="og:url" content="https://venium.io" />

        <meta name="twitter:card" content="summary_large_image "/>
        <meta name="twitter:title" content="Venium: Innovative Community Ecosystem on Scroll zkEVM"/>
        <meta name="twitter:description" content="Venium: Innovative Community Ecosystem on Scroll zkEVM - Dive in and experience innovation at its finest."/>
        <meta name="twitter:image" content="https://i.imgur.com/grPbAkO.png"/>

        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
