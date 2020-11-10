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

export interface Repository {
  id: number;
  full_name: string;
  name: string;
  watchers: number;
  forks: number;
  language: string;
  html_url: string;
  description: string;
}
