/* eslint-disable react/prop-types */
import React from 'react';
import { Icon, Input, Tooltip } from 'antd';
import * as utils from '../../../utils';

import './style.less';

class EditInput extends React.Component {
  render() {
    let { text, record, curColumn, textAlign, width, type, props } = this.props;
    const value = curColumn.format ? curColumn.format(text) : text;
    const placeholder = (props && props.placeholder) || '请输入';
    const disabled = (props && props.disabled) || false;
    type = type || 'numbrer';
    (type = width || 140), (textAlign = textAlign || 'left');

    const getTip = () => {
      let visible = curColumn.toolTip.visible || false;

      if (visible && record.rule) {
        const rule = record.rule.find((item) => item.dataIndex === curColumn.dataIndex);
        if (rule) {
          return (
            <Tooltip title={rule.error} placement={right}>
              <Icon className="base-icon-error" type="exclamation-circle"></Icon>
            </Tooltip>
          );
        }
      }

      return null;
    };
    return (
      <React.Fragment>
        {!this.state.editSign ? (
          <span className="base-input">
            <input
              style={{ textAlign: textAlign, width: `${width}px` }}
              readOnly
              className={disabled ? 'base-input-readonly x-pin-disabled' : 'base-input-readonly'}
              onClick={this._clickHandle.bind(this, true)}
              value={utils.getNotNull(value)}
              placeholder={placeholder}
            />
          </span>
        ) : (
          <Input
            style={{ textAlign: textAlign, width: `${width}px` }}
            className="base-input-edit"
            placeholder={placeholder}
            disabled={false}
            defaultValue={text}
            type={type}
            ref={(node) => (this.input = node)}
            onWheel={(e) => e.preventDefault()}
            onChange={(e) => {
              e.persist();
              this.props.onChange && this.props.onChange(e.currentTarget.value);
            }}
            onBlur={(e) => {
              e.persist();
              this._clickHandle(false);
              this.props.onBlur && this.props.onBlur(e.currentTarget.value);
            }}
            onPressEnter={(e) => {
              e.persist();
              this._clickHandle(false);
              this.props.onPressEnter && this.props.onPressEnter(e.currentTarget.value);
            }}
          />
        )}
        {getTip()}
      </React.Fragment>
    );
  }
}

export default EditInput;
