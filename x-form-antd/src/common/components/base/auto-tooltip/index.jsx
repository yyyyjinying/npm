import React from 'react';
import { Tooltip } from 'antd';
import './style.less';
import SpanText from '../span-text';

const AuntoTooltip = (text, record, index, curColumn) => {
  let placement = curColumn.toolTip && curColumn.toolTip.placement;

  let title = curColumn.toolTip && curColumn.toolTip.title;
  placement = placement || 'bottom';

  if (!curColumn.displayType) {
    text = curColumn.format ? curColumn.format(text) : text;
  }

  title = title || text;

  let element = <SpanText>{text}</SpanText>;

  if (typeof curColumn.renderElement === 'function') {
    element = curColumn.renderElement({ ...{ text, curColumn, record, index } });
  }
  if (!curColumn.displayType && curColumn.toolTip && curColumn.toolTip.visible) {
    element = (
      <Tooltip key={index} {...{ placement, title }} overlayStyle={{ maxHeight: 360, overflow: 'auto' }}>
        <span>{element}</span>
      </Tooltip>
    );
  } else {
    element = <span>{element}</span>;
  }
  return element;
};

export default AuntoTooltip;
