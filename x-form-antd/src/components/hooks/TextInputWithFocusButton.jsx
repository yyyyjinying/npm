/* eslint-disable react/react-in-jsx-scope */
import React, { useRef, useImperativeHandle, forwardRef } from 'react';
function TextInputWithFocusButton(props, ref) {
  const inputEl = useRef(null);
  const onButtonClick = () => {
    // `current` 指向已挂载到 DOM 上的文本输入元素
    inputEl.current.focus();
  };

  // 此处注意useImperativeHandle方法的的第一个参数是目标元素的ref引用
  useImperativeHandle(ref, () => ({
    // changeVal 就是暴露给父组件的方法
    changeVal: (newVal) => {},
  }));

  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}

export default forwardRef(TextInputWithFocusButton);
