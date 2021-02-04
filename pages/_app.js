import Head from "next/head";
import React from "react";
import App from "next/app";
import "../styles/main.scss";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <div>
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <script
            defer
            src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"
          ></script>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Staatliches"
          />
          <title>CDA Demo App - TODOs</title>
        </Head>
        <Component {...pageProps} />
      </div>
    );
  }
}

export default MyApp;
