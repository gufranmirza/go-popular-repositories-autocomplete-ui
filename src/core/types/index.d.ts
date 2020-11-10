import { NextPageContext } from 'next';
import { IncomingMessage } from 'http';

declare global {
  interface Window {
    __CLIENT_CONFIG__: any;
  }
}

export interface CookieMessage extends IncomingMessage {
  cookies: { [name: string]: string };
}

export interface CookiesPageContext extends NextPageContext {
  req: CookieMessage | undefined;
}
