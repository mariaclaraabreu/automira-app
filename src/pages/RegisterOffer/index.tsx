import React, { useState } from 'react';
import { RegisterStyles } from './styles';

import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
  Upload,
} from 'antd';

import { UploadOutlined, InboxOutlined } from '@ant-design/icons';


const normFile = (e : any) => {
  console.log('Upload event:', e);
  if (Array.isArray(e)) {
    return e;
  }
  return e && e.fileList;
};

const RegisterOffer: React.FC = () =>{
  return (
  
    <RegisterStyles>
    
    
      <h1>Offer Register</h1>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        
       
      >
      
        <Form.Item  label="Marca">
          <Input />
        </Form.Item>

        <Form.Item  label="Modelo">
          <Input />
        </Form.Item>

        <Form.Item  label="Preço">
          <Input />
        </Form.Item>

        <Form.Item name="year-picker" label="Year">
          <DatePicker picker="year" />
        </Form.Item>
        
        <Form.Item  label="Cor">
          <Input />
        </Form.Item>

        <Form.Item  label="Km">
          <Input />
        </Form.Item>

        <Form.Item  label="Placa">
          <Input />
        </Form.Item>

        <Form.Item  label="Cidade">
          <Input />
        </Form.Item>

        

      <Form.Item label="Dragger">
        <Form.Item name="dragger" valuePropName="fileList" getValueFromEvent={normFile} noStyle>
          <Upload.Dragger name="files" action="/upload.do">
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">Click or drag file to this area to upload</p>
            <p className="ant-upload-hint">Support for a single or bulk upload.</p>
          </Upload.Dragger>
        </Form.Item>
      </Form.Item>


        
      <Form.Item label="">
          <Button>Button</Button>
        </Form.Item>
      </Form>

    </RegisterStyles>
    

    
  );

}

export default RegisterOffer;