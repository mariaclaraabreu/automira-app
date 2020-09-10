import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Table, Space, Input, Button, List, Avatar } from 'antd'
import OfferModel from '../../models/OfferModel'
import { AdministrationStyles } from './styles'
import firebase from '../../firebase'
import BeetleImg from '../../assets/beetle.jpg'

const { Search } = Input

const Administration: React.FC = () => {
  const [offers, setOffers] = useState<OfferModel[]>([])
  const [search, setSearch] = useState('')

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

  async function handleSearchOffer() {
    const ref = firebase.firestore().collection('offers').doc(search)
    ref.get().then((doc) => {
      if (doc) {
        setOffers(offers.filter((offer) => offer.brand == search))
      } else {
        alert('Offer not found')
      }
    })
  }

  useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore()
      const data = await db.collection('offers').get()
      setOffers(
        data.docs.map((doc) => {
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
      )
    }

    fetchData()
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
        placeholder='Search for the offer by car brand name. Ex: Fiat'
        onSearch={handleSearchOffer}
        style={{ width: 500 }}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <List
        className='listOffers'
        itemLayout='horizontal'
        dataSource={offers}
        renderItem={(item) => (
          <List.Item
            className='listOffersItem'
            key={item.id}
            actions={[
              <Button
                key='list-loadmore-edit'
                onClick={() => handleYetImplemented()}
              >
                edit
              </Button>,
              <Button
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
