import React from 'react';

import { Layout, Menu } from 'antd';

import './styles.css';

const { Header, Content, Footer } = Layout;


const Home: React.FC = () =>{
    return (
      <Layout>
        <Header className="header">
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="1">Offers</Menu.Item>
            <Menu.Item key="2">Administration</Menu.Item>
      
          </Menu>

        </Header>

        <Content>

        </Content>

        <Footer style={{ textAlign: 'center' }}>©2020 Created by Maria Clara &#10083;</Footer>

      </Layout>
    
        
        
      
      
    );
    
}


export default Home;