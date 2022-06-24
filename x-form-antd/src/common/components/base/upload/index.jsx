import React, { useState } from 'react';
import { Upload, Button, message } from 'antd';
import { FetchRequest, Request } from '../../../utils';
import './style.less';
const { Dragger } = Upload;

function UploadIndex() {
  const [fileList, setFileList] = useState([
    // {
    //   uid: '1',
    //   name: 'xxx.png',
    //   status: 'done',
    //   response: 'Server Error 500', // custom error message to show
    //   url: 'http://www.baidu.com/xxx.png',
    // },
  ]);
  const props = {
    // action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange({ file, fileList }) {
      setFileList(fileList);
    },
    beforeUpload: (file) => {
      setFileList([file]);
      return false;
    },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files);
    },
    defaultFileList: fileList,
    fileList: fileList,
    showUploadList: {
      showDownloadIcon: true,
      downloadIcon: 'download',
      showRemoveIcon: true,
      removeIcon: <i>dd</i>, // <StarOutlined onClick={(e) => console.log(e, 'custom removeIcon event')} />,
    },
  };
  const mUploadHandle = async () => {
    const formData = {
      year: '2020',
    };
    fileList.forEach((item) => {
      formData.file = item;
    });
    const res = await FetchRequest.upload('aa/bb', formData);
    // debugger;
    // await Request.uplaod('aa/bb', formData);
  };

  return (
    <div className="upload-box">
      <Button onClick={mUploadHandle}>手动上传</Button>
      <Dragger {...props}>
        <p className="ant-upload-drag-icon">+</p>
        <p className="ant-upload-text">Click or drag file to this area to upload</p>
        <p className="ant-upload-hint">
          Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files
        </p>
      </Dragger>
    </div>
  );
}

export default UploadIndex;
