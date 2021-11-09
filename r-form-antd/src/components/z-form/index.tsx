import React from 'react';
import Form from '@common/components/base/form';
import {Button} from "antd";
class ZForm extends React.Component<any, any> {
  constructor(props:any) {
    super(props);
    this.state = {
      params: {
        id: 1,
        num: 123,
        select: 1
      },
    };
  }
  onValuesChange(field: any,fields:any) {
    // 字段联动
    if("num" in field){
      this.setParams({...fields, select:2});
    }
  }

  _getFieldValues():any{
    let res = {ok: false, params: {}};
    /* eslint-disable react/no-string-refs */
    (this.refs.formRef as any).validateFields((error:any, valueFields:any) => {
      if(!error){
        res = {ok:true, params: valueFields};
      }
    })
    return res;
  }

  onSubmit(){
    const res:any = this._getFieldValues();
    if(!res.ok) return;
    // handle
    console.log(res.params);
    console.log(this.state.params);
  }

  setParams(params = {}){
    this.setState({
      params: {...this.state.params,...params}
    })
  }

  render() {
    
    return (
      <div>
        <Form
          ref="formRef"
          // className="z-form"
          onValuesChange={this.onValuesChange.bind(this)}
          onSubmit={this.onSubmit.bind(this)}
          columns={[
            {
              title: 'id',
              dataIndex: 'id',
              type: "hiddenType",
              visible: true,
              decorator: {
                initialValue: this.state.params.id,
              },
            },
            {
              title: '国航编码',
              dataIndex: 'num',
              type:"inputType",
              visible: true,
              props: {
                allowClear: true,
                disabled: false,
                placeholder: '请输入',
              },
              decorator: {
                initialValue: this.state.params.num,
                rules: [{ required: true, message: '请输入国航编码' }],
              },
            },
            {
              title: 'select选项',
              dataIndex: 'select',
              type: "selectType",
              visible: true,
              keyToName: { name: 'name', value: 'value' },
              options: [
                { name: 'zz', value: 1 },
                { name: 'aa', value: 2 },
                { name: 'bb', value: 3 },
              ],
              props: {
                allowClear: true,
                disabled: false,
                placeholder: '请输入',
              },
              decorator: {
                initialValue: this.state.params.select,
                rules: [{ required: true, message: '请输入国航编码' }],
              },
            },
            {
              title: 'btn',
              dataIndex: 'btn',
              className:"btn",
              type: "eleType",
              visible: true, // 是否使用
              ele:() => {
                return <Button onClick={this.onSubmit.bind(this)}>查询</Button>
              }
            },
          ]}
          />
      </div>
    );
  }
}

export default ZForm;
