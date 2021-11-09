/* eslint-disable react/prop-types */
import React from 'react';
import { Dropdown, Menu } from 'antd';
import './style.less';

class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  static defaultProps = {
    children: null,
    trigger: ['click'],
    keyName: 'title',
    disabled: false,
    onCurTrigger: () => {},
    downUpOption: [{ value: 13, title: 'aa', children: [{ value: 14, title: 'bb' }] }],
  };

  onCurTrigger(record) {
    this.props.onCurTrigger(record);
  }

  _getItemMenu(list = []) {
    return list.map((item) => {
      if (Array.isArray(item.children) && item.children.length > 0) {
        return (
          <Menu.SubMenu key={item.key} title={this._getItem(item)}>
            {this._getItemMenu(item.children)}
          </Menu.SubMenu>
        );
      }
    });
  }

  _getItem(item) {
    return <span>{item[this.props.keyName]}</span>;
  }

  render() {
    return (
      <Dropdown
        trigger={this.props.trigger}
        disabled={this.props.disabled}
        getPopupContainer={(triggerNode) => triggerNode.parentNode}
        className="z-downup-menu"
        overlay={() => <Menu>{this._getItemMenu(this.props.downUpOption)}</Menu>}
      >
        {this.props.children}
      </Dropdown>
    );
  }
}

export default Index;
