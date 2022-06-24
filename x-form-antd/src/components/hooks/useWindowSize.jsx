import { useState, useEffect } from 'react';
function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const updateSize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };
  // 副作用函数 组件渲染后执行
  useEffect(() => {
    document.addEventListener('resize', updateSize);
    return () => {
      // 组件卸载后清除事件
      document.removeEventListener('resize', updateSize);
    };
  }, []);

  return windowSize;
}

export { useWindowSize };
