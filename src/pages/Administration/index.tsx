import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import OfferModel from  '../../models/OfferModel';
import {AdministrationStyles} from './styles';


import firebase from '../../firebase';

import { Table, Tag, Space } from 'antd';

import { Input, Button, List, Avatar } from 'antd';
import Offers from '../Offers';
const { Search } = Input;





const Administration: React.FC = () =>{
  const history = useHistory();
  const [offers, setOffers] = useState<OfferModel[]>([]);
  const [search, setSearch] = useState('');
 

  
const columns = [
  {
    title: 'Board',
    dataIndex: 'board',
    key: 'id',
    render: text => <a key={'id'}>{text}</a>,
  },
  {
    title: 'Brand',
    dataIndex: 'brand',
    key: 'id',
    
  },
  {
    title: 'City',
    dataIndex: 'city',
    key: 'id',
  },
  {
    title: 'Color',
    dataIndex: 'color',
    key: 'id',
    
  },
  {
    title: 'Km',
    dataIndex: 'km',
    key: 'id',
    
  },
  {
    title: 'Model',
    dataIndex: 'model',
    key: 'id',
    
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'id',
    
  },
  {
    title: 'Year',
    dataIndex: 'year',
    key: 'id',
    
    
  },
  {
    title: 'Action',
    key: 'id',
    render: (text, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        {console.log("verrr" + record.name)}
        <button onClick={() => handleDeleteOffer('id')} type="button">Delete</button>
        
      </Space>
    ),
  },
];

async function handleDeleteOffer(id) {

  firebase.firestore().collection('offers').doc(id).delete().then(() => {
    console.log("Document successfully deleted!");
    
    setOffers(offers.filter(offer => offer.id !== id)); 
  }).catch((error) => {
    console.error("Error removing document: ", error);
  });
  
  
}


async function handleSearchOffer() {
  const ref = firebase.firestore().collection('offers').doc(search);
  ref.get().then((doc) => {

    if(doc.exists){
      setOffers(offers.filter(offer => offer.board == search)); 
      

    }else{
      alert('Offer not found');
    }
  })  
}

  
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
          year: doc.data().year,
          views: doc.data().views,
        }
      }))
    }

    fetchData()
   }, []);




    return (
      <AdministrationStyles>

        <h1>
          <Link className="link" to="/"> 
          Home
          </Link>
          /Administration</h1>
        <Search
        placeholder="Search for the sign here"
        onSearch={handleSearchOffer}
        style={{ width: 500 }}
        value={search}
        onChange={e => setSearch(e.target.value)}
        />
       
          
          <List
              className="listOffers"
              itemLayout="horizontal"
              dataSource={offers}
              renderItem={item => (
                <List.Item 
                  className="listOffersItem"
                  key={item.id}
                  actions={[<Button key="list-loadmore-edit" >edit</Button>, <Button key="list-loadmore-more" onClick={() => handleDeleteOffer(item.id)}>delete</Button>]}
                >
                
                  <List.Item.Meta
                    
                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                    title={<a href="https://ant.design">{item.brand}</a>}
                    description=
                    {<p>
                      <span><strong>Model:</strong>{item.model}</span>
          
                    </p>}
                  />
                </List.Item>
              )}
            />



          <Table columns={columns} dataSource={offers} />

          
        
        

        <Link  to="/offers/new"> 
          <Button className="button">
            Add offer
          </Button>
        </Link>

      
      
    

  
      
      </AdministrationStyles>


    );
}


export default Administration;