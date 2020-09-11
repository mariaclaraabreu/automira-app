import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Form, Input, Button } from 'antd'
import firebase from '../../firebase'
import { RegisterStyles } from './styles'

const RegisterOffer: React.FC = () => {
  const [brand, setBrand] = useState('')
  const [model, setModel] = useState('')
  const [price, setPrice] = useState('')
  const [year, setYear] = useState('')
  const [color, setColor] = useState('')
  const [km, setKm] = useState('')
  const [board, setBoard] = useState('')
  const [city, setCity] = useState('')
  const [image, setImage] = useState([])

  const history = useHistory()

  const antNormFile = (e: any) => {
    console.log('Upload event:', e)
    if (Array.isArray(e)) {
      return e
    }
    return e && e.fileList
  }

  useEffect(() => {
    firebase
      .firestore()
      .collection('offers')
      .get()
      .then((response) => {
        console.log(response.docs)
        response.docs.map((item) => {
          console.log(item.data())
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  async function handleAddOffer(e) {
    e.preventDefault()
    try {
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
        views: 0,
      })

      history.push('/administration')
    } catch (err) {
      alert(`Erro ao cadastrar${err}`)
    }
  }

  async function handleDeleteOffer() {
    firebase
      .firestore()
      .collection('offers')
      .where('city', '==', 'Jaguaruana')
      .limit(1)
      .get()
      .then((item) => {
        item.docs[0].ref.delete()
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <RegisterStyles>
      <h1>Offer Register</h1>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout='horizontal'
      >
        <Form.Item label='Brand'>
          <Input
            placeholder='Ex: Fiat'
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          />
        </Form.Item>

        <Form.Item label='Modelo'>
          <Input
            placeholder='Ex: Fusca'
            value={model}
            onChange={(e) => setModel(e.target.value)}
          />
        </Form.Item>

        <Form.Item label='Price'>
          <Input
            placeholder='In reais'
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </Form.Item>

        <Form.Item label='Year'>
          <Input
            placeholder='Ex: 2005'
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
        </Form.Item>

        <Form.Item label='Color'>
          <Input
            placeholder='Ex: White'
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </Form.Item>

        <Form.Item label='Km'>
          <Input
            placeholder='Ex: 2.000'
            value={km}
            onChange={(e) => setKm(e.target.value)}
          />
        </Form.Item>

        <Form.Item label='Board'>
          <Input
            placeholder='Ex: POI1236'
            value={board}
            onChange={(e) => setBoard(e.target.value)}
          />
        </Form.Item>

        <Form.Item label='City'>
          <Input
            placeholder='Ex: Jaguaruana'
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </Form.Item>

        <Form.Item label=''>
          <Button className='button' onClick={handleAddOffer}>
            Register Offer
          </Button>
        </Form.Item>
      </Form>
    </RegisterStyles>
  )
}

export default RegisterOffer
