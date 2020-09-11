import React from 'react'
import { Link } from 'react-router-dom'
import { Layout, Menu } from 'antd'

import { HomeStyles } from './styles'

const { Header, Content, Footer } = Layout

const Home: React.FC = () => {
  return (
    <Layout>
      <Header className='header'>
        <div className='logo' />
        <Menu mode='horizontal'>
          <Menu.Item key='1'>
            <Link to='/offers' />
            Offers
          </Menu.Item>
          <Menu.Item key='2'>
            <Link to='/administration' />
            Administration
          </Menu.Item>
        </Menu>
      </Header>

      <Content />

      <Footer style={{ textAlign: 'center' }}>
        ©2020 Created with love by Maria Clara &#10083;
      </Footer>
    </Layout>
  )
}

export default Home
