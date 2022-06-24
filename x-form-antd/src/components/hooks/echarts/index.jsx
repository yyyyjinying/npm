import React, { useEffect } from 'react';
import * as echarts from 'echarts';

import { getOptions, sources } from './options';
import './style';

function EmpCharts() {
  useEffect(() => {
    echarts.init(document.getElementById('demo01')).setOption(getOptions(sources));
  }, []);
  return <div id="demo01" style={{ width: 900, height: 600 }}></div>;
}

export { EmpCharts };
