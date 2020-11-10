import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

import { ServerStyleSheet } from 'styled-components';

const Tags = (): Array<any> => [
  <meta key="1" charSet="utf-8" />,
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" key="3" />,
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1"
    key="4"
  />,
  <meta name="msapplication-TileColor" content="#2b2b2b" key="5" />,
  <meta
    name="msapplication-TileImage"
    content="/favicons/mstile-144x144.png"
    key="6"
  />,
  <meta name="theme-color" content="#2b2b2b" key="7" />,
  <link
    rel="apple-touch-icon-precomposed"
    sizes="152x152"
    href="/favicons/apple-touch-icon-152x152.png"
    key="8"
  />,
  <link
    rel="apple-touch-icon-precomposed"
    sizes="144x144"
    href="/favicons/apple-touch-icon-144x144.png"
    key="9"
  />,
  <link
    rel="apple-touch-icon-precomposed"
    sizes="120x120"
    href="/favicons/apple-touch-icon-120x120.png"
    key="10"
  />,
  <link
    rel="apple-touch-icon-precomposed"
    sizes="114x114"
    href="/favicons/apple-touch-icon-114x114.png"
    key="11"
  />,
  <link
    rel="apple-touch-icon-precomposed"
    sizes="76x76"
    href="/favicons/apple-touch-icon-76x76.png"
    key="12"
  />,
  <link
    rel="apple-touch-icon-precomposed"
    sizes="72x72"
    href="/favicons/apple-touch-icon-72x72.png"
    key="13"
  />,
  <link
    rel="apple-touch-icon-precomposed"
    sizes="57x57"
    href="/favicons/apple-touch-icon-57x57.png"
    key="14"
  />,
  <link
    rel="apple-touch-icon-precomposed"
    sizes="60x60"
    href="/favicons/apple-touch-icon-60x60.png"
    key="15"
  />,
  <link
    rel="apple-touch-icon"
    sizes="180x180"
    href="/favicons/apple-touch-icon-180x180.png"
    key="16"
  />,
  <link
    rel="mask-icon"
    href="/favicons/safari-pinned-tab.svg"
    color="#00a9d9"
    key="17"
  />,
  <link
    rel="icon"
    type="image/png"
    href="/favicons/favicon-196x196.png"
    sizes="196x196"
    key="18"
  />,
  <link
    rel="icon"
    type="image/png"
    href="/favicons/favicon-128.png"
    sizes="128x128"
    key="19"
  />,
  <link
    rel="icon"
    type="image/png"
    href="/favicons/favicon-96x96.png"
    sizes="96x96"
    key="20"
  />,
  <link
    rel="icon"
    type="image/png"
    href="/favicons/favicon-32x32.png"
    sizes="32x32"
    key="21"
  />,
  <link rel="icon" sizes="16x16 32x32" href="/favicon.ico" key="22" />,
  <meta name="msapplication-TileColor" content="#2b2b2b" key="23" />,
  <meta
    name="msapplication-TileImage"
    content="/favicons/mstile-144x144.png"
    key="24"
  />,
  <meta
    key="25"
    name="msapplication-square70x70logo"
    content="/favicons/mstile-70x70.png"
  />,
  <meta
    name="msapplication-square150x150logo"
    content="/favicons/mstile-150x150.png"
    key="26"
  />,
  <meta
    name="msapplication-wide310x150logo"
    content="/favicons/mstile-310x150.png"
    key="27"
  />,
  <meta
    name="msapplication-square310x310logo"
    content="/favicons/mstile-310x310.png"
    key="28"
  />,
  <link rel="manifest" href="/favicons/manifest.json" key="29" />,
  <link
    key="2"
    href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;1,400;1,500&display=swap"
    rel="stylesheet"
  />,
];

class EnhancedDocument extends Document {
  static async getInitialProps(ctx): Promise<any> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
        enhanceApp: App => props => sheet.collectStyles(<App {...props} />), // eslint-disable-line
      }); // eslint-disable-line

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render(): any {
    return (
      <Html lang="en">
        <Head>
          {Tags()}
          {this.props.styles}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default EnhancedDocument;
