import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import firebase from '../../firebase';


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

// import {Form} from 'react';


const RegisterOffer: React.FC = () =>{
  
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [price, setPrice] = useState('');
  const [year, setYear] = useState('');
  const [color, setColor] = useState('');
  const [km, setKm] = useState('');
  const [board, setBoard] = useState('');
  const [city, setCity] = useState('');

  // const [offers, setOffers] = useState([]);
  const history = useHistory();

  const normFile = (e : any) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  useEffect(() => {

   
   firebase.firestore().collection('offers').get().then(response => {
      console.log(response.docs);
      response.docs.map(item => {
        console.log(item.data());
      })

   }).catch(err => {
     console.log(err);

   })
  }, []);


  async function handleAddOffer (e){
    e.preventDefault();
    try{
      firebase.firestore().collection('offers').add({
        brand,
        model,
        price,
        year,
        color,
        km,
        board,
        city,
      });

      history.push('/administration');

    }catch (err){
      alert('Erro ao cadastrar' + err);
    }

    

  }

  async function handleDeleteOffer() {
    firebase.firestore().collection('offers').where('city', '==', 'Jaguaruana').limit(1).get().then(item =>{
      item.docs[0].ref.delete();

    }).catch(err =>{
      console.log(err);
    });
    
  }

  

  return (
    
    <RegisterStyles>
    


      <h1>Offer Register</h1>
      <Form 
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
       
      >
        <Form.Item  label="Brand">
          <Input 
            placeholder="Marca"
            value={brand}
            onChange={e => setBrand(e.target.value)}
          />
        </Form.Item>

        <Form.Item  label="Modelo">
          <Input 
            placeholder="Model"
            value={model}
            onChange={e => setModel(e.target.value)}
          />
        </Form.Item>

        <Form.Item  label="Price">
          <Input 
            placeholder="Price"
            value={price}
            onChange={e => setPrice(e.target.value)}
          />
        </Form.Item>

        <Form.Item label="Year">
          <Input 
            placeholder="Year"
            value={year}
            onChange={e => setYear(e.target.value)}
          />
        </Form.Item>
        
        <Form.Item  label="Color">
          <Input 
            placeholder="Color"
            value={color}
            onChange={e => setColor(e.target.value)}
          />
        </Form.Item>

        <Form.Item  label="Km">
          <Input 
            placeholder="Kilometers"
            value={km}
            onChange={e => setKm(e.target.value)}
          />
        </Form.Item>

        <Form.Item  label="Board">
          <Input 
            placeholder="Board"
            value={board}
            onChange={e => setBoard(e.target.value)}
          />
        </Form.Item>

        <Form.Item  label="City">
          <Input 
            placeholder="City"
            value={city}
            onChange={e => setCity(e.target.value)}
          />
        </Form.Item>

        <Form.Item label="Images">
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
            <Button onClick={handleAddOffer}>Button</Button>
        </Form.Item>

        
      </Form>

      <Button onClick={handleDeleteOffer}>Button</Button>


    </RegisterStyles>
    

    
  );

}

export default RegisterOffer;