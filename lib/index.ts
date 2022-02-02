import Debug from 'debug';
import Axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import * as qs from 'qs';
import Error from '@kim5257app/js-error';

const debug = Debug('cnslink-adapt-router');

const rmsServer = {
  hostname: '1.215.228.83',
  protocol: 'http',
  port: 48080,
};

function urlFormat(param: {
  hostname: string,
  protocol: string,
  port: number,
}): string {
  return `${param.protocol}://${param.hostname}:${param.port}`
}

function checkRouter(items: string[]): Promise<AxiosResponse<any>> {
  const body = { ssid: `'${items.join('\',\'')}'` };

  const req: AxiosRequestConfig = {
    url: `${urlFormat(rmsServer)}/rms_router/checkSSID`,
    method: 'post',
    timeout: 3000,
    headers: {
      'Content-Type': 'application/x-www-urlencoded',
    },
    data: qs.stringify(body),
  };

  const beginTime = new Date().getTime();

  return Axios(req).then((response) => (response)).catch((error) => {
    throw Error.make(error);
  }).finally(() => {
    const current = new Date().getTime();
    debug(`Response Time(${req.url}):`, current - beginTime);
  });
}

function setDataLimit(args: {
  model: string,
  serial: string,
  limit: number,
}): Promise<AxiosResponse<any>> {
  const req: AxiosRequestConfig = {
    url: `${urlFormat(rmsServer)}/rms_router/doDataLimit`,
    method: 'post',
    timeout: 3000,
    headers: {
      'Content-Type': 'application/x-www-urlencoded',
    },
    data: qs.stringify(args),
  };

  const beginTime = new Date().getTime();

  return Axios(req).then((response) => (response)).catch((error) => {
    throw Error.make(error);
  }).finally(() => {
    const current = new Date().getTime();
    debug(`Response Time(${req.url}):`, current - beginTime);
  });
}

function rebootRouter(args: {
  model: string,
  serial: string
}): Promise<AxiosResponse> {
  const req: AxiosRequestConfig = {
    url: `${urlFormat(rmsServer)}/rms_router/doReboot`,
    method: 'post',
    timeout: 3000,
    headers: {
      'Content-Type': 'application/x-www-urlencoded',
    },
    data: qs.stringify(args),
  };

  const beginTime = new Date().getTime();

  return Axios(req).then((response) => (response)).catch((error) => {
    throw Error.make(error);
  }).finally(() => {
    const current = new Date().getTime();
    debug(`Response Time(${req.url}):`, current - beginTime);
  });
}

export default {
  checkRouter,
  setDataLimit,
  rebootRouter,
}
