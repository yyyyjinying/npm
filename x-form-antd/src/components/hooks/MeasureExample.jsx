/* eslint-disable react/react-in-jsx-scope */
import React, { useCallback, useRef, useState } from 'react';
import { useWindowSize } from './useWindowSize';
import TextInputWithFocusButton from './TextInputWithFocusButton';
function MeasureExample() {
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);

  const refChild = useRef(null);

  // 获取指定元素的长宽高
  const measuredRef = useCallback((node) => {
    if (node !== null) {
      setHeight(node.getBoundingClientRect().height);
      setWidth(node.getBoundingClientRect().width);
    }
  }, []);

  const windowSize = useWindowSize();

  const onClick = () => {
    console.log(refChild);
  };

  return (
    <>
      <h1 ref={measuredRef}>Hello, world</h1>
      <h2>
        <button onClick={onClick}>获取ref</button>
        The above header is {Math.round(height)}px tal,width: {width}px;
      </h2>
      <h4>
        width:{windowSize.width} -height: {windowSize.height}
      </h4>
      <TextInputWithFocusButton ref={refChild} />
    </>
  );
}

export default MeasureExample;
