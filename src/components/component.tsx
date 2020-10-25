import { AxiosRequestConfig } from 'axios';
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { request } from 'util/request';

type Props = {
  foo: string;
}

export const MyComponent: React.FC<Props> = (props) => {
  const [data, setData] = useState<any>(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {

      const config: AxiosRequestConfig = {
        method: 'get',
        params: { 'hoge': 'moge', },
        headers: {
        }
      };

      if (data === null && isLoading) {

        /* chromeに"CORS unblock"を入れること */

        // 正常系
        const res = await request('https://www.google.com', config,)
          .then(res => { setData(res.data); setLoading(false); })
          .catch(err => { setLoading(false); throw err; }); // 処理を中断させるためにthrowする

        // エラーハンドラデフォルト版（アラートのダイアログが出る）
        // const res = await request('https://www.google.com/aaa', config,)
        //   .then(res => { setData(res.data); setLoading(false); })
        //   .catch(err => { setLoading(false); throw err; }); // 処理を中断させるためにthrowする

        // エラーハンドラを自分で指定する版（メッセージとしてaxiosのエラーメッセージを表示）
        // const res = await request('https://www.google.com/aaa', config, (err: any) => { setData(err.message); throw err; })
        //   .then(res => { setData(res.data); setLoading(false); })
        //   .catch(err => { setLoading(false); throw err; }); // 処理を中断させるためにthrowする

        console.log('uuuuuuuuuuuuu');
        console.log(res);
      }
    })();
  });

  const reloadButton = isLoading
    ? <span onClick={(e: React.MouseEvent<HTMLButtonElement>) => { }} style={{ color: 'gray' }}>reload</span>
    : <span onClick={(e: React.MouseEvent<HTMLButtonElement>) => { setLoading(true); setData(null); }}>reload</span>;

  return (
    <>
      <Button variant="danger">僕ドラえもん</Button>
      {reloadButton}
      <span>{isLoading ? 'Loading' : 'Loaded'}</span>
      <span>{`props.foo=${props.foo}`}</span>
      <br />
      <span>{data}</span>
    </>
  );
};