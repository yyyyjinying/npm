import React, { useState, useEffect } from 'react';
function Counter() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      // 挂载执行一次count=0，渲染执行都是0+1
      //   setCount(count+ 1)；错误❌
      // 函数式更新：该函数将接收先前的 state，并返回一个更新后的值
      setCount((c) => c + 1);
    }, 2000);
    return () => {
      clearInterval(id);
    };
  }, []);

  return <h1>{count}</h1>;
}

export default Counter;
