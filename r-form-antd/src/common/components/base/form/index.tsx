
import React from 'react';
import { Form } from 'antd';
import FormItem from './form-item';
import {Iprops} from "./type";
class AForm extends React.Component<Iprops, any> {
  constructor(props: Iprops) {
    super(props);
  }

  onSubmit(e:any){
    e.preventDefault && e.preventDefault();
    this.props.onSubmit();
  }  
  render() {
    return (
      <Form onSubmit={this.onSubmit.bind(this)} className={this.props.className} layout="inline" autoComplete={this.props.autoComplete || "off"}>
        <FormItem form={this.props.form} columns={this.props.columns} />
      </Form>
    );
  }
}

export default Form.create<Iprops>({
  mapPropsToFields: (props: any) =>{
    if(props.mapPropsToFields && !props.params){
      return props.mapPropsToFields(props);
    }
    const fieldValue:any = {};
    for(const key in props.params){
      fieldValue[key] = Form.createFormField({
        value: props.params[key]
      })
      return fieldValue;
    }
  },
  onValuesChange: (props: any, changedValues: any, allValues: any) => props.onValuesChange && props.onValuesChange(changedValues, allValues),
  onFieldsChange: (props: any, fields: any, allFields: any) => props.onFieldsChange && props.onFieldsChange(props, fields, allFields)
})(AForm);
