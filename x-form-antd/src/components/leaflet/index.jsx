import React from 'react';
import L from 'leaflet';
import './style.less';

class Map extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // this.demo01();
    this.demo02();
  }
  demo02() {
    // baseMaps
    const streetsMap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      // const streetsMap = L.tileLayer('./common/imgs/01.png', {
      // 版权说明
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">yyyyjinying</a> contributors',
    });
    // var streetsMap = L.tileLayer.chinaProvider('GaoDe.Normal.Map', {
    //   maxZoom: 18,
    //   minZoom: 5,
    // });

    const layer01 = L.marker([51.5, -0.09])
      .bindTooltip('layer01')
      .openTooltip();
    const layer02 = L.marker([51.5, -0.08]).bindTooltip('layer02');
    const layer03 = L.marker([51.5, -0.07]).bindTooltip('layer03');

    const lGroup01 = L.layerGroup([layer01, layer02, layer03]);

    var map = L.map('mapid', {
      /**
       * 地图状态选项
       */
      crs: L.CRS.EPSG3857, // 参考坐标系
      center: [51.505, -0.09], // 地图的初始地理中心
      maxZoom: 18, // 地图的最大缩放级别
      minZoom: 12, // 地图的最小缩放级别
      zoom: 13, // 初始地图缩放级别
      attributionControl: true, // 归因控件
      /**
       * 交互选项
       */
      trackResize: true, // 浏览器窗口调整大小是否更新
      /**
       * 控制选项
       */
      zoomControl: true, // 是否显示缩放控件
      /**
       *
       */
      layers: [streetsMap], // 初始化图层数组
      // layers: [streetsMap, lGroup01],
    });

    // addOverlayMaps
    // map.addLayer(streetsMap);
    // map.addLayer(lGroup01);
    lGroup01.addLayer(streetsMap).addTo(map);
    /**
     * map.addLayer 将给定图层添加到地图
     * map.removeLayer 从地图中删除给定的图层。
     * map.hasLayer
     * eachLayer 图层迭代器
     */

    var baseMaps = {
      "<span style='color: red'>StreetsMap</span>": streetsMap,
    };

    var overlayMaps = {
      LGroup01: lGroup01,
    };

    // 图层控件
    L.control.layers(baseMaps, overlayMaps).addTo(map);
    //
    map.addEventListener('click', (e) => {
      console.log('map', e);
      /**
       * 删除指定图层
       * map.removeLayer(streetsMap);
       * map.removeLayer(layer02);
       *  */
      // map.removeLayer(streetsMap);
      // 51.505, -0.09
      // 绘制圆形叠加层
      const lCircle = L.circle([51.505, -0.09], { radius: 600 });
      lCircle.addTo(map);
      map.addEventListener('add', (e) => {
        console.log('add', e);
      });
      // setTimeout(() => {
      //   map.removeLayer(streetsMap);
      // }, 3000);
      // const aa = map.getLayer(layer01);
      // console.log(aa);
    });
    // map.addEventListener('baselayerchange', (e) => {
    //   console.log('baselayerchange', e);
    // });
  }
  demo01() {
    // var map = L.map('mapid').setView([51.505, -0.09], 13);
    var map = L.map('mapid', {
      /**
       * 地图状态选项
       */
      crs: L.CRS.EPSG3857, // 参考坐标系
      center: [51.505, -0.09], // 地图的初始地理中心
      maxZoom: 18, // 地图的最大缩放级别
      minZoom: 12, // 地图的最小缩放级别
      zoom: 13, // 初始地图缩放级别
      attributionControl: false, // 归因控件
      /**
       * 交互选项
       */
      trackResize: true, // 浏览器窗口调整大小是否更新
      /**
       * 控制选项
       */
      zoomControl: false, // 是否显示缩放控件
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    lGroup01.addTo(map);

    // const myIcon = L.icon({
    //   iconUrl: 'my-icon.png',
    //   iconSize: [38, 95],
    //   iconAnchor: [22, 94],
    //   popupAnchor: [-3, -76],
    //   shadowUrl: 'my-icon-shadow.png',
    //   shadowSize: [68, 95],
    //   shadowAnchor: [22, 94],
    // });
    var myIcon = L.divIcon({
      className: 'my-div-icon',
      html: '<span>a</span>',
      tooltipAnchor: [10, 0], // 工具提示将“打开”的点的坐标，相对于图标锚点。
      popupAnchor: [0, -10], // 弹出窗口将“打开”的点的坐标，相对于图标锚点。
    });

    const layer = L.marker([51.5, -0.09], {
      icon: myIcon,
      title: 'zhao', // 标记悬停提示文本
      zIndexOffset: 100, // 设置标记的层叠值
      opacity: 1, // 标记的透明度
      riseOnHover: false, // 如果true，则当您将鼠标悬停在标记上时，标记将位于其他标记之上。
    }).addTo(map);

    layer.bindTooltip('my tooltip text').openTooltip();
    layer.bindPopup('A pretty CSS3 popup.<br> Easily customizable.').openPopup();

    const layer02 = L.marker([51.5, -0.08], {
      icon: myIcon,
      title: 'zhao', // 标记悬停提示文本
      zIndexOffset: 100, // 设置标记的层叠值
      opacity: 1, // 标记的透明度
      riseOnHover: false, // 如果true，则当您将鼠标悬停在标记上时，标记将位于其他标记之上。
    });
    console.log(layer02);

    layer02.addEventListener('click', (e) => {
      console.log('layer02-click', e);
    });
    layer02.addTo(map);

    L.control.scale().addTo(map);
    // var fx = new L.PosAnimation();
    // fx.run('mapid', [300, 500], 0.5);

    /**
     * 事件
     */
    map.on('click', (e) => {
      console.log('map-click', e);
    });

    var bol = map.hasLayer(layer);
    console.log(bol);

    const tooltip = L.tooltip({
      direction: 'bottom',
    }).setContent('<p>单独叠加的ToolTip</p>');
    map.eachLayer(function(layer) {
      layer.openTooltip(tooltip);
      //   layer.bindPopup('Hello');
      //   console.log('--', layer);
    });
    // layer.addTo(map);
    // 删除图层
    // setTimeout(() => {
    //   layer.remove();
    // }, 10000);

    // var popup = L.popup()
    //   .setLatLng([51.5, -0.08])
    //   .setContent('<p>Hello world!<br />This is a nice popup.</p>')
    //   .openOn(map);

    // L.tooltip();
    //   .setLatLng([51.5, -0.08])
    //   .setContent('<p>Hello world!<br />This is a nice popup.</p>')
    //   .openOn(map);
  }

  render() {
    return (
      <div>
        <div id="mapid"></div>
        <div
          onClick={() => {
            alert('YES  Dispaly');
          }}
        >
          {/* {createPortal(<HelloFromPortal />, document.getElementById('mapid'))} */}
        </div>
      </div>
    );
  }
}

export default Map;
