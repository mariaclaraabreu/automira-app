import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import OfferModel from  '../../models/OfferModel';




import firebase from '../../firebase';

import { Table, Tag, Space } from 'antd';

import { Input, Button, List, Avatar } from 'antd';
const { Search } = Input;




const columns = [
  {
    title: 'Board',
    dataIndex: 'board',
    key: 'board',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Brand',
    dataIndex: 'brand',
    key: 'brand',
  },
  {
    title: 'City',
    dataIndex: 'city',
    key: 'city',
  },
  {
    title: 'Color',
    dataIndex: 'color',
    key: 'color',
    
  },
  {
    title: 'Km',
    dataIndex: 'km',
    key: 'km',
    
  },
  {
    title: 'Model',
    dataIndex: 'model',
    key: 'model',
    
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
    
  },
  {
    title: 'Year',
    dataIndex: 'year',
    key: 'year',
    
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];





const Administration: React.FC = () =>{
  const history = useHistory();
  const [offers, setOffers] = useState<OfferModel[]>([]);

  const { Column, ColumnGroup } = Table;

  useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore()
      const data = await db.collection('offers').get()
      setOffers(data.docs.map(doc => {
        return {
          id: doc.id,
          board: doc.data().board,
          brand: doc.data().brand,
          city: doc.data().city,
          color: doc.data().color,
          km: doc.data().km,
          model: doc.data().model,
          price: doc.data().price,
          year: doc.data().year
        }
      }))
    }

    fetchData();

    
 
  
   }, []);


    return (
      <>

        <h1>Administration</h1>
        <Search
        placeholder="Enter offer"
        onSearch={value => console.log(value)}
        style={{ width: 500 }}
        />
        <div className="listOffers">
          




          <Table columns={columns} dataSource={offers} />

          
        </div>
        <Button type="primary">
          Add offer
        </Button>
      </>


    );
}


export default Administration;