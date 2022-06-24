import React, { useImperativeHandle, forwardRef } from 'react';
import { Table } from 'antd';

function BaseTable(props: any, ref: any) {
  const [source, setSource] = React.useState<any[]>(props.source);

  const getColumns: (columns: any[]) => any[] = (columns: any[]) => {
    return columns.map((item: any) => {
      if (typeof item.render === 'function') {
        return item;
      }

      if (typeof item.renderElement === 'function') {
        item.render = (text: any, record: any, index: number) => {
          return item.renderElement({ text, curColumn: { ...item, record }, index }, (value: any) => {
            setSource((s: any[]) => {
              return s.map((itemRecord: any, idx: number) => {
                if (idx === index) {
                  return { ...itemRecord, [item.dataIndex]: value };
                }
                return itemRecord;
              });
            });
          });
        };
        return item;
      }
      return item;
    });
  };

  useImperativeHandle(ref, () => ({
    getSource: () => source,
  }));

  return <Table columns={getColumns(props.columns)} dataSource={source} />;
}

export default forwardRef(BaseTable);
