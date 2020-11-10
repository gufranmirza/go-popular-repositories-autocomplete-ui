import React, { ReactElement } from 'react';
import App, { AppInitialProps } from 'next/app';
import Cookies from 'universal-cookie';
import '@/core/theme/antd.less';
import '@/core/theme/base';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import axios from 'axios';
import config from '@/core/config';

import { CookieMessage } from '@/core/types/index.d';
import { AuthProvider } from '@/core/components/Providers/AuthProvider';

const GlobalStyle = createGlobalStyle``;
const theme = {};

type AppProps = {
  authenticated: boolean;
};

class MyApp extends App<AppProps> {
  render(): ReactElement {
    const { Component, pageProps, authenticated } = this.props;
    return (
      <div>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <AuthProvider authenticated={authenticated}>
            <Component {...pageProps} />
          </AuthProvider>
        </ThemeProvider>
      </div>
    );
  }
}

MyApp.getInitialProps = async (
  appContext,
): Promise<AppInitialProps & AppProps> => {
  let authenticated = false;
  const request = appContext.ctx.req as CookieMessage;
  if (request) {
    const cookies = new Cookies(request.headers.cookie || '');
    request.cookies = cookies.getAll() || {};

    // Make API Call to validate Token
    await axios
      .post(
        `${config('ServiceURI')}/validate`,
        {
          Token: request.cookies.session,
        },
        {
          headers: {
            Authorization: `BEARER ${request.cookies.session_id}`,
          },
        },
      )
      .then(res => {
        const { status } = res;
        if (status === 200) {
          authenticated = true;
        }
      })
      .catch(err => {
        const { response } = err;
        authenticated = false;
        if (response !== undefined && response.status === 401) {
          cookies.remove('session_id', { path: '/' });
          request.cookies.session_id = undefined; // eslint-disable-line
        }
      });
  }

  // Call the page's `getInitialProps` and fill `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps, authenticated };
};

export default MyApp;
