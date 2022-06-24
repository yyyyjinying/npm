import React from 'react';
import BaseTable from '@common/components/table/base-table';
import { Input, Select, Tag, Button } from 'antd';
const { Option } = Select;

function TableIndex() {
  const baseTableRef: any = React.useRef(null);
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      renderElement: ({ text, curColumn, index }: any, setValue: any) => (
        <Input
          key={index}
          placeholder="input with clear icon"
          onChange={(e) => {
            e.persist();
            setValue(e.target.value);
          }}
          defaultValue={text}
        />
      ),
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      renderElement: ({ text, curColumn, index }: any) => {
        return (
          <Button
            key={index}
            onClick={() => {
              const data: any = baseTableRef.current.getSource();
              console.log(data);
            }}
          >
            {text}
          </Button>
        );
      },
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
      renderElement: ({ text, curColumn, index }: any, setValue: any) => {
        return (
          <Select
            key={index}
            defaultValue={text}
            style={{ width: 120 }}
            onChange={(value: any, o: any) => {
              const key: any = o.props.value;
              const name: any = o.props.children;
              setValue(key);
            }}
          >
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="Yiminghe">yiminghe</Option>
          </Select>
        );
      },
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: (tags: any) => (
        <>
          {tags.map((tag: any) => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (text: any, record: any) => (
        <>
          <a>Invite{record.name}</a>
        </>
      ),
    },
  ];

  const source: any = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ];
  return <BaseTable ref={baseTableRef} columns={columns} source={source} />;
}

export default TableIndex;
