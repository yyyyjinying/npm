/* eslint-disable react/prop-types */
import React from 'react';
import './style.less';
function NoData(props) {
  return (
    <div className="no-data">
      <img src="" alt="" className="no-img" />
      <span className="no-title">{props.emptyTitle || '暂无数据'}</span>
    </div>
  );
}
export default NoData;
