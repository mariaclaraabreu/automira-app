import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Input, Button, List, Avatar } from 'antd'
import OfferModel from '../../models/OfferModel'
import { AdministrationStyles } from './styles'
import firebase from '../../firebase'
import BeetleImg from '../../assets/beetle.jpg'

const { Search } = Input

const Administration: React.FC = () => {
  const [offers, setOffers] = useState<OfferModel[]>([])
  const [filteredOffers, setFilteredOffers] = useState<OfferModel[]>([])

  async function handleDeleteOffer(id) {
    firebase
      .firestore()
      .collection('offers')
      .doc(id)
      .delete()
      .then(() => {
        console.log('Document successfully deleted!')

        setOffers(offers.filter((offer) => offer.id !== id))
      })
      .catch((error) => {
        console.error('Error removing document: ', error)
      })
  }

  async function handleYetImplemented() {
    alert('Ops! Sorry, but we havent implemented this functionality yet')
  }

  async function handleSearchOffer(search) {
    if (search.length === 0) {
      setFilteredOffers(offers)
    } else {
      setFilteredOffers(offers.filter((offer) => offer.brand.includes(search)))
    }
  }

  useEffect(() => {
    firebase
      .firestore()
      .collection('offers')
      .onSnapshot((snapshot) => {
        const offersList = snapshot.docs.map((doc) => {
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
        })
        setOffers(offersList)
        setFilteredOffers(offersList)
      })
  }, [])

  return (
    <AdministrationStyles>
      <h1>
        <Link className='link' to='/'>
          Home
        </Link>
        /Administration
      </h1>
      <Search
        className='search'
        placeholder='Search for the offer by car brand name. Ex: Fiat'
        onChange={function (e) {
          handleSearchOffer(e.target.value)
        }}
      />

      <List
        className='listOffers'
        itemLayout='horizontal'
        dataSource={filteredOffers}
        renderItem={(item) => (
          <List.Item
            className='listOffersItem'
            key={item.id}
            actions={[
              <Button
                className='buttonEdit'
                key='list-loadmore-edit'
                onClick={() => handleYetImplemented()}
              >
                edit
              </Button>,
              <Button
                className='button'
                key='list-loadmore-more'
                onClick={() => handleDeleteOffer(item.id)}
              >
                delete
              </Button>,
            ]}
          >
            <List.Item.Meta
              avatar={<Avatar src={BeetleImg} />}
              title={<a href='https://ant.design'>{item.brand}</a>}
              description={
                <p>
                  <span>
                    <strong>Model:</strong>
                    {item.model}
                  </span>
                </p>
              }
            />
          </List.Item>
        )}
      />

      <Link to='/offers/new'>
        <Button className='button'>Add offer</Button>
      </Link>
    </AdministrationStyles>
  )
}

export default Administration
