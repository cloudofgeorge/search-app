import axios, { AxiosInstance, AxiosRequestConfig, CancelTokenSource } from 'axios';

export type ApiRequestConfig = AxiosRequestConfig;
export type ApiCancelToken = CancelTokenSource;

export class Api {
  http: AxiosInstance;

  constructor() {
    this.http = axios.create({
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json;charset=UTF-8',
      },
    });
  }

  public abortController = () => new AbortController();

  post = <Response = unknown, Data extends {} = {}>(url: string, data: Data, config?: ApiRequestConfig) =>
    this.doRequest<Response>(url, {
      method: 'POST',
      data,
      headers: config?.headers,
      ...config,
    });

  put = <Response = unknown, Data extends {} = {}>(url: string, data: Data, config?: ApiRequestConfig) =>
    this.doRequest<Response>(url, {
      method: 'PUT',
      data,
      headers: {
        ...config?.headers,
        Accept: 'application/json',
        'Content-Type': 'application/json;charset=UTF-8',
      },
      ...config,
    });

  get = <Response = unknown, Data extends {} = {}>(url: string, data?: Data, config?: ApiRequestConfig) => {
    let resultUrl = url;

    if (data) {
      const params = new URLSearchParams(data).toString();
      resultUrl = `${url}?${params}`;
    }

    return this.doRequest<Response>(resultUrl, { method: 'GET', ...config });
  };

  private doRequest<Response = unknown>(url: string, init: ApiRequestConfig) {
    const resultUrl = /^\/\//.test(url as string) ? `https:${url}` : url;

    return this.http
      .request<Response>({
        url: resultUrl,
        ...init,
      })
      .then(response => (response.status === 200 ? response.data : Promise.reject(response)))
      .catch(error => {
        if (error.status >= 500) {
          throw new Error(error);
        }

        return Promise.reject(error.response);
      });
  }
}

export const api = new Api();
