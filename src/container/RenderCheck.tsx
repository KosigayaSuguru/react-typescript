import React, { useState } from 'react';
import { Button } from 'react-bootstrap';


export const RenderCheck: React.FC = () => {
  console.log('called RenderCheck()');

  const [test1, setTest1] = useState<any>(10);
  const [test2, setTest2] = useState<any>(100);

  const handleOnClick = (e: React.MouseEvent<HTMLInputElement>) => {
    setTest1(test1 + 1);
    setTest2(test2 + 1);
  };

  return (
    <>
      <Button onClick={handleOnClick}>テスト</Button>
      <div>{test1}</div>
      <div>{test2}</div>
    </>
  );
};
