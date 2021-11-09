export const COLUMN_TYPE = {
  selectDownUpType: 'selectDownUpType',
  checkboxType: 'checkboxType',
  timeRangeType: 'timeRangeType',
  timeType: 'timeType',
  monthType: 'monthType',
  numberType: 'numberType',
  inputType: 'inputType',
  textAreaType: 'textAreaType',
  selectType: 'selectType',
  treaSelectType: 'treaSelectType',
  eleType: 'eleType',
  cascaderType: 'cascaderType',
  autoCompleteType: 'autoCompleteType',
  hiddenType: 'hiddenType',
};
export declare interface Irowitem {
  title: string;
  dataIndex: string;
  props?: any;
  decorator?: any;
  type:
    | 'hiddenType'
    | 'selectDownUpType'
    | 'checkboxType'
    | 'timeRangeType'
    | 'timeType'
    | 'monthType'
    | 'numberType'
    | 'inputType'
    | 'textAreaType'
    | 'selectType'
    | 'treaSelectType'
    | 'eleType'
    | 'cascaderType'
    | 'autoCompleteType';
  ele?: (item?: Irowitem, getFieldDecorator?: any) => JSX.Element;
  options?: any[];
  keyToName?: { value: string | number; name: string | number };
  visible?: boolean;
  span?: string | number | undefined;
  className?: string;
  disabled?: boolean;
  keyName?: string;
  trigger?: any;
  downUpOption?: any;
  onCurTrigger?: any;
  startChildren?: (item?: Irowitem, getFieldDecorator?: any) => JSX.Element;
  endChildren?: (item?: Irowitem, getFieldDecorator?: any) => JSX.Element;
  children?: (item?: Irowitem, getFieldDecorator?: any) => JSX.Element;
}
export declare interface Icolumns {
  form: any;
  columns: Irowitem[];
}

export interface Iprops extends Icolumns {
  autoComplete?: string;
  className?: string;
  params?: any;
  onSubmit?: () => void;
  onValuesChange?: (props?: any, changedValues?: any, allValues?: any) => void;
  mapPropsToFields?: (props?: any) => void;
  onFieldsChange?: (props: any, fields: any, allFields: any) => void;
}
