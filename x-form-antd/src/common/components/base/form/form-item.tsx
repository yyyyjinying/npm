// /// <reference path="./item.d.ts"/>
import React from 'react';
import {Icolumns, Irowitem, COLUMN_TYPE} from "./type";
import {
  Row,
  Col,
  Select,
  TreeSelect,
  Form,
  Checkbox,
  Cascader,
  Input,
  DatePicker,
  AutoComplete,
  InputNumber,
} from 'antd';
import SelectDownUp from '../selectDownUp';
import './style.less';

const getInitialValue = (initialValue: any) => {
  if (initialValue === undefined || initialValue === null) return undefined;
  return initialValue;
};

const FromItem = (itemProps: Icolumns) => {
  const { getFieldDecorator } = itemProps.form;
  const domType = (item: Irowitem) => {
    const { dataIndex, props, decorator } = item;
    if (decorator) decorator.initialValue = getInitialValue(decorator.initialValue);

    const domObj = {
      [COLUMN_TYPE.eleType]: () => item.ele && item.ele(item, getFieldDecorator),
      [COLUMN_TYPE.autoCompleteType]: () =>
        getFieldDecorator(
          dataIndex,
          decorator,
        )(<AutoComplete {...{ ...props, getPopupContainer: (triggerNode) => triggerNode.parentNode }} />),
      [COLUMN_TYPE.numberType]: () => getFieldDecorator(dataIndex, decorator)(<InputNumber {...props} />),
      [COLUMN_TYPE.textAreaType]: () => getFieldDecorator(dataIndex, decorator)(<Input.TextArea {...props} />),
      [COLUMN_TYPE.checkboxType]: () => getFieldDecorator(dataIndex, decorator)(<Checkbox {...props} />),
      [COLUMN_TYPE.inputType]: () => getFieldDecorator(dataIndex, decorator)(<Input {...props} />),
      [COLUMN_TYPE.timeRangeType]: () =>
        getFieldDecorator(dataIndex, decorator)(<DatePicker.RangePicker {...props} />),
      [COLUMN_TYPE.monthType]: () => getFieldDecorator(dataIndex, decorator)(<DatePicker.MonthPicker {...props} />),
      [COLUMN_TYPE.timeType]: () => getFieldDecorator(dataIndex, decorator)(<DatePicker {...props} />),
      [COLUMN_TYPE.selectType]: () => getFieldDecorator(
        dataIndex,
        decorator,
      )(
        <Select {...props}>
          {item.options &&
            item.options.map((itemOption: any, idx: number) => {
              if (!item.keyToName) throw "selectType类型字段，必须设置keyToName属性值";
              return (
                <Select.Option key={idx} value={itemOption[item.keyToName.value]}>
                  {itemOption[item.keyToName.name]}
                </Select.Option>
              );
            })}
        </Select>,
      ),
      [COLUMN_TYPE.treaSelectType]: () =>getFieldDecorator(dataIndex, decorator)(<TreeSelect {...props} />),
      [COLUMN_TYPE.selectDownUpType]: () =>getFieldDecorator(dataIndex, decorator)(<Input {...props} />),
      [COLUMN_TYPE.cascaderType]: () =>getFieldDecorator(
        dataIndex,
        decorator,
      )(<Cascader {...{ ...props, getPopupContainer: (triggerNode) => triggerNode.parentNode }} />),
    };
    return domObj[item.type]();
  };

  return (
    <Row className="formItem" gutter={24}>
      {itemProps.columns.map((item:any, index:number) => {
        if(item.visible && item.type === COLUMN_TYPE.hiddenType){
          const {dataIndex, props, decorator} = item;
          return (
            <Form.Item key={index} className="hidden">
              {getFieldDecorator(dataIndex, decorator)(<Input {...props} />)}
            </Form.Item>
          )
        }
        return (
          item.visible && (
            <Col span={item.span || 8} key={index}>
              {item.type === COLUMN_TYPE.eleType ? (
                <div className={`ant-form-item item${item.className ? ' ' + item.className : ''}`}>{domType(item)}</div>
              ) : item.type === COLUMN_TYPE.selectDownUpType ? (
                <Form.Item className={`item${item.className ? ' ' + item.className : ''}`} label={item.title}>
                  <SelectDownUp
                    disabled={item.disabled}
                    keyName={item.keyName}
                    trigger={item.trigger}
                    downUpOption={item.downUpOption}
                    onCurTrigger={item.onCurTrigger}
                  >
                    {domType(item)}
                  </SelectDownUp>
                </Form.Item>
              ) : (
                <Form.Item className={`item${item.className ? ' ' + item.className : ''}`} label={item.title}>
                  {item.startChildren && item.startChildren(item, getFieldDecorator)}
                  {domType(item)}
                  {item.endChildren && item.endChildren(item, getFieldDecorator)}
                  {item.children && item.children(item, getFieldDecorator)}
                </Form.Item>
              )}
            </Col>
          )
        );
      })}
    </Row>
  );
};

export default FromItem;
