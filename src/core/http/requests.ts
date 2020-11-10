import axios from 'axios';
import config from '@/core/config';
import Cookies from 'universal-cookie';

function Post(url: string, body: object): Promise<any> {
  const cookies = new Cookies();
  const jwt = cookies.get('session_id');

  return new Promise((resolve, reject) => {
    axios
      .post(`${config('ServiceURI')}${url}`, body, {
        headers: {
          authorization: `BEARER ${jwt}`,
        },
      })
      .then(res => {
        resolve(res);
      })
      .catch(e => {
        const { response } = e;
        reject(response);
      });
  });
}

function Get(url: string): Promise<any> {
  const cookies = new Cookies();
  const jwt = cookies.get('session_id');

  return new Promise((resolve, reject) => {
    axios
      .get(`${config('ServiceURI')}${url}`, {
        headers: {
          authorization: `BEARER ${jwt}`,
        },
      })
      .then(res => {
        resolve(res);
      })
      .catch(e => {
        const { response } = e;
        reject(response);
      });
  });
}

function GetJWTHeader(): Record<string, any> {
  const cookies = new Cookies();
  const jwt = cookies.get('session_id');
  return {
    headers: {
      authorization: `BEARER ${jwt}`,
    },
  };
}

export { Post, Get, GetJWTHeader };
