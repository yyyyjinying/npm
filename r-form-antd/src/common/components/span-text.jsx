import React from 'react';
import Input from './base/input';
import Select from './base/select';
import Basetextarea from './base-textarea';
import Radio from './radio';
import * as utils from '../../../common/utils';
const ele = (props) => {
  let value = props.width ? utils.getEllipsisValueByWidth(props.children, props.width - 20) : props.children;
  let className = props.className ? 'span_text' + props.className : 'span_text';
  return (
    <span
      className={className}
      onClick={() => {
        props.onClick && props.onClick();
      }}
    >
      {value}
    </span>
  );
};

const SpanText = (props) => {
  let dom = null;
  const displayType = (props.curColumn && props.curColumn.displayType) || null;
  switch (displayType) {
    case 'text':
      dom = <Input {...props} />;
      break;
    case 'select':
      dom = <Select {...props} />;
      break;
    case 'baseTextarea':
      dom = <Basetextarea {...props} />;
      break;
    case 'radio':
      dom = <Radio {...props} />;
      break;
    default:
      dom = ele(props);
      break;
  }
  return dom;
};

export default SpanText;
