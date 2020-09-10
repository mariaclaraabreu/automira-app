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



const RegisterOffer: React.FC = () =>{
  
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [price, setPrice] = useState('');
  const [year, setYear] = useState('');
  const [color, setColor] = useState('');
  const [km, setKm] = useState('');
  const [board, setBoard] = useState('');
  const [city, setCity] = useState('');
  const [image, setImage] = useState([]);


  const history = useHistory();

  const antNormFile = (e : any) => {
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

  // async function handleFileChange (e){
  //   for (let i = 0; i < e.target.files.length; i++) {
  //     const newFile = e.target.files[i];
      
  //  // add an "id" property to each File object
  //     setImage(prevState => [...prevState, newFile]);
  //   }
  // };

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
        image,
      });

      history.push('/administration');

    }catch (err){
      alert('Erro ao cadastrar' + err);
    }

      // firebase.storage().ref().child(`your/file/path/${image.name}`)
      //   .put(image);
      // console.log(image);
    




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
            placeholder="Ex: Fiat"
            value={brand}
            onChange={e => setBrand(e.target.value)}
          />
        </Form.Item>

        <Form.Item  label="Modelo">
          <Input 
            placeholder="Ex: Fusca"
            value={model}
            onChange={e => setModel(e.target.value)}
          />
        </Form.Item>

        <Form.Item  label="Price">
          <Input 
            placeholder="In reais"
            value={price}
            onChange={e => setPrice(e.target.value)}
          />
        </Form.Item>

        <Form.Item label="Year">
          <Input 
            placeholder="Ex: 2005"
            value={year}
            onChange={e => setYear(e.target.value)}
          />
        </Form.Item>
        
        <Form.Item  label="Color">
          <Input 
            placeholder="Ex: White"
            value={color}
            onChange={e => setColor(e.target.value)}
          />
        </Form.Item>

        <Form.Item  label="Km">
          <Input 
            placeholder="Ex: 2.000"
            value={km}
            onChange={e => setKm(e.target.value)}
          />
        </Form.Item>

        <Form.Item  label="Board">
          <Input 
            placeholder="Ex: POI1236"
            value={board}
            onChange={e => setBoard(e.target.value)}
          />
        </Form.Item>

        <Form.Item  label="City">
          <Input 
            placeholder="Ex: Jaguaruana"
            value={city}
            onChange={e => setCity(e.target.value)}
          />
        </Form.Item>

        {/* <Form.Item label="Images">
          <Form.Item name="dragger" valuePropName="fileList" getValueFromEvent={AntNormFile} noStyle>
            <Upload.Dragger 
              name="files" 
              action="/upload.do"
              
              onChange={e => setImage(e.fileList.map(image => {
                return image.name ?? "";
              }))}  
            >
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">Click or drag file to this area to upload</p>
              <p className="ant-upload-hint">Support for a single or bulk upload.</p>
            </Upload.Dragger>
          </Form.Item>
        </Form.Item> */}
        
        <Form.Item label="">
            <Button className="button" onClick={handleAddOffer}>Register Offer</Button>
        </Form.Item>

      {/* <input  type="file" multiple onChange={handleFileChange}></input> */}
        
      </Form>

    

    </RegisterStyles>
    

    
  );

}

export default RegisterOffer;