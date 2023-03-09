import axios, { AxiosRequestConfig, Method } from 'axios';

export const fetcher = <T>(url: string, type: Method, data?: object): Promise<T> => {
  const config: AxiosRequestConfig<object> = {
    method: type,
    url: url,
    responseType: 'json',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    data: data,
    params: data,
  };

  return axios(config)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err.message ?? 'APIリクエスト中にエラーが発生しました';
    });
};
