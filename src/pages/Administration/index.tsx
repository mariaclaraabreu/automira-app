import React, { useState, useEffect } from 'react';

import firebase from '../../firebase';


import { Input, Button, List, Avatar } from 'antd';
const { Search } = Input;

const data = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
];



const Administration: React.FC = () =>{
    
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


    return (
      <>
        <h1>Administration</h1>
        <Search
        placeholder="Enter offer"
        onSearch={value => console.log(value)}
        style={{ width: 500 }}
        />
        <div className="listOffers">
          <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={item => (
              <List.Item 
                actions={[<a key="list-loadmore-edit">edit</a>, <a key="list-loadmore-more">delete</a>]}
              >
                <List.Item.Meta
                  avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                  title={<a href="https://ant.design">{item.title}</a>}
                  description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                />
              </List.Item>
            )}
          />
          
        </div>
        <Button type="primary">
          Add offer
        </Button>
      </>


    );
}


export default Administration;