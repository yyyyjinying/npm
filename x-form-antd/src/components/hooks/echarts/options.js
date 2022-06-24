import React from 'react';
import { renderToString } from 'react-dom/server';
export const sources = {
  xData: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  yData: [
    {
      yId: 0,
      unit: 'ml',
      unitName: '蒸发量',
      color: '#5470c6',
      xAxisIndex: 0,
      list: [
        {
          name: '渤海蒸发量',
          type: 'line', // bar
          color: 'gray',
          show: true,
          label: {
            normal: {
              show: true,
              position: 'top',
            },
          },
          data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
        },
        {
          name: '南海蒸发量',
          type: 'line', // bar
          color: 'green',
          label: {
            normal: {
              show: true,
              position: 'top',
            },
          },
          data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3].reverse(),
        },
      ],
    },
    {
      yId: 1,
      xAxisIndex: 0,
      unit: 'ml',
      unitName: '降雨量',
      color: '#91cc75',
      list: [
        {
          name: '渤海降雨量',
          type: 'line',
          color: '#91cc75',
          data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
        },
      ],
    },
    {
      yId: 2,
      xAxisIndex: 0,
      unit: '°C',
      unitName: '温度',
      color: '#fac858',
      list: [
        {
          name: '渤海温度',
          type: 'line',
          color: '#fac858',
          data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2],
        },
        {
          name: '南海温度',
          type: 'line',
          color: '#fac858',
          data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2].reverse(),
        },
      ],
    },
  ],
};

// 自定义tooltip提示框
const getTooltipFormatter = (params) => {
  console.log(params);
  const getUnitFormName = (name) => {
    for (let i = 0; i < sources.yData.length; i++) {
      const list = sources.yData[i].list;
      for (let j = 0; j < list.length; j++) {
        if (list[j].name === name) {
          return sources.yData[i].unit;
        }
      }
    }
    return '';
  };
  return renderToString(
    <ul className="tooltip-ul">
      {params.map((item, index) => {
        return (
          <li key={index} style={{ color: item.color }}>
            <span>{item.seriesName}</span>:&nbsp;
            <span>
              {item.value}
              {getUnitFormName(item.seriesName)}
            </span>
          </li>
        );
      })}
    </ul>,
  );
};

export const getOptions = (sources) => {
  const option = {
    title: {
      text: 'Stacked Line',
    },
    // 工具 编辑 下载
    toolbox: {
      feature: {
        dataView: { show: true, readOnly: false },
        restore: { show: true },
        saveAsImage: { show: true },
      },
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
      },
    },
    // 设置图例
    legend: {
      orient: 'horizontal',
      // lineStyle: {
      //   type: 'dashed',
      // },
      // icon:
      //   'path://M30.9,53.2C16.8,53.2,5.3,41.7,5.3,27.6S16.8,2,30.9,2C45,2,56.4,13.5,56.4,27.6S45,53.2,30.9,53.2z M30.9,3.5C17.6,3.5,6.8,14.4,6.8,27.6c0,13.3,10.8,24.1,24.101,24.1C44.2,51.7,55,40.9,55,27.6C54.9,14.4,44.1,3.5,30.9,3.5z M36.9,35.8c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H36c0.5,0,0.9,0.4,0.9,1V35.8z M27.8,35.8 c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H27c0.5,0,0.9,0.4,0.9,1L27.8,35.8L27.8,35.8z',
      formatter: function(name, a, b) {
        console.log(name, a, b);
        return 'l-' + name;
      },
      //   data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine'],
      data: [],
    },
    grid:[
      {
        // left: '30%',
        right: '20%',
        //   bottom: '3%',
        containLabel: true,
      },
      {
        // left: '30%',
        right: '20%',
        bottom: '3%',
        containLabel: true,
      },
    ],
    xAxis: [
      {
        type: 'category',
        axisTick: {
          alignWithLabel: true,
        },
        boundaryGap: false,
        data: [],
      },
      {
        type: 'category',
        axisTick: {
          alignWithLabel: true,
        },
        boundaryGap: false,
        data: [],
      },
    ],
    yAxis: [
      {
        yId: 0,
        type: 'value',
        name: '蒸发量',
        show: true,
        position: 'right',
        min: 0,
        max: 250,
        // splitLine: {
        //   show: true, // 是否显示
        //   lineStyle: {
        //     // color: seriesColors[0],
        //     width: 1,
        //     opacity: 0.2,
        //   },
        // },
        axisLine: {
          show: true, // 是否显示y轴
          lineStyle: {
            color: 'gray',
            // width: 1,
          },
        },
        axisLabel: {
          formatter: '{value} ml',
        },
      },
      {
        yId: 1,
        type: 'value',
        name: '降雨量',
        nameLocation: 'end',
        // nameTextStyle:
        min: 0,
        max: 250,
        position: 'right',
        offset: 80,
        axisLine: {
          show: true,
          lineStyle: {
            // color: seriesColors[1],
          },
        },
        axisLabel: {
          formatter: '{value} ml',
        },
      },
      {
        yId: 2,
        type: 'value',
        name: '温度',
        nameLocation: 'end',
        nameTextStyle: {
          fontSize: 16,
          align: 'middle',
          color: '#f00',
          padding: [0, 60, 0, 0],
          verticalAlign: 'middle', // 'middle',
        },
        min: 0,
        max: 25,
        // max: function(value) {
        //     return value.max + 20;
        //   },
        // interval: 10,
        position: 'left',
        axisLine: {
          show: true,
          lineStyle: {
            // color: seriesColors[2],
          },
        },
        axisLabel: {
          formatter: '{value} °C',
        },
      },
    ],
    // 调色盘颜色列表
    color: seriesColors,
    series: [
      //   {
      //     yAxisIndex: 0,
      //     name: '渤海蒸发量',
      //     type: 'line',
      //     stack: 'Total',
      //    data: [22, 18, 19, 34, 90, 30, 40],
      //   },
    ],
    tooltip: {
      show: true,
      trigger: 'axis',
      formatter: (params) => getTooltipFormatter(params),
    },
  };

  // 设置yAxis
  const yAxis = [];
  // 设置series
  const series = [];
  const seriesColors = [];
  const legendData = [];

  sources.yData.forEach((item) => {
    option.yAxis.forEach((yItem) => {
      if (item.yId === yItem.yId) {
        yItem.name = item.unitName + '(' + item.unit + ')';
        yItem.axisLine.lineStyle.color = item.color;
        yAxis.push(yItem);
      }
    });
    item.list &&
      item.list.forEach((lItem) => {
        legendData.push({ name: lItem.name });
        seriesColors.push(lItem.color);
        // xAxisIndex: 0,
        // yAxisIndex: 0
        series.push({ label: lItem.label, yAxisIndex: item.yId, xAxisIndex: item.xAxisIndex, name: lItem.name, type: lItem.type, data: lItem.data });
        // series.push({ stack: 'stackTag', yAxisIndex: item.yId, name: lItem.name, type: lItem.type, data: lItem.data });
      });
  });
  option.yAxis = yAxis;
  option.series = series;
  option.color = seriesColors;
  option.legend.data = legendData;
  option.xAxis[0].data = sources.xData;

  return option;
};
