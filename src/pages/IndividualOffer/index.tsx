import React from 'react'
import { Layout } from 'antd'
// import { IndividualStyles } from './styles'

import ImgContruction from '../../assets/construction.png'

const { Header, Content, Footer } = Layout

const IndividualOffer: React.FC = () => {
  return (
    <>
      <div className='constructionPage'>
        <img src={ImgContruction} alt='' />
        <h1>Estamos em construção :D</h1>
      </div>
    </>
  )
}

export default IndividualOffer
