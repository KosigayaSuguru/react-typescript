import Axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

export const request = async (url: string, config: AxiosRequestConfig, errorHandler?: any) => {

  // エラーハンドラの設定（指定されている場合はそちらを使う）
  const _errorHandler = errorHandler
    ? errorHandler    // 指定されたエラーハンドラ
    : (err: any) => { // デフォルトのエラーハンドラ
      if (err.status !== 200) {
        alert(err.message);
        throw err;
      }
    };

  // APIコール
  const res = await Axios(url, config,)
    .catch(_errorHandler);
  return res as AxiosResponse<any>;
};