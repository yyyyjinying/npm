import React from 'react';
import { Icon, Select, Tooltip } from 'antd';
import './style.less';

class ESelect extends React.Compoent {
  render() {
    let { curColumn, record, options, keyToName, style, text, width, props } = this.props;
    const disabled = (props && props.disabled) || false;
    const allowClear = (props && props.allowClear) || true;

    width = width || 140;
    style = style || {};

    const getTip = () => {
      let visible = curColumn.toolTip.visible || false;

      if (visible && record.rule) {
        const rule = record.rule.find((item) => item.dataIndex === curColumn.dataIndex);
        if (rule) {
          return (
            <Tooltip>
              <Icon className="base-icon-error" type="exclamation-circle"></Icon>
            </Tooltip>
          );
        }
        return null;
      }
    };

    return (
      <React.Fragment>
        <Select
          className="base-select"
          allowClear={allowClear}
          onSearch={(value) => this.props.onSearch && this.porps.onSearch(value)}
          onSelect={(value, itemOption) => this.props.onSelect && this.porps.onSelect(value, itemOption)}
          onChange={(value, itemOption) => {
            const itemOptions = itemOption && itemOption.props;
            this.props.onChange && this.porps.onChange(value, itemOptions);
          }}
          style={{ width, ...style }}
          defaultValue={text}
          disabled={disabled}
        >
          {options &&
            options.map((itemOptions, index) => {
              return (
                <Select.Option key={index} value={itemOptions[keyToName.value]}>
                  {itemOptions[keyToName.name]}
                </Select.Option>
              );
            })}
        </Select>
        {getTip()}
      </React.Fragment>
    );
  }
}

export default ESelect;
