import React from 'react';
import { Link } from 'react-router-dom';

import { Layout, Menu } from 'antd';



const { Header, Content, Footer } = Layout;


const Home: React.FC = () =>{
    return (
      <Layout>
        <Header className="header">
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" >
            <Menu.Item key="1">
              <Link to="/offers"></Link>
              Offers
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/administration"></Link>
              Administration
            </Menu.Item>
            
      
          </Menu>

        </Header>

        <Content>

        </Content>

        <Footer style={{ textAlign: 'center' }}>©2020 Created by Maria Clara &#10083;</Footer>

      </Layout>
    
        
        
      
      
    );
    
}


export default Home;