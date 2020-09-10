import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import firebase from '../../firebase';
import OfferModel from  '../../models/OfferModel';

import { Card, Row, Col, Modal, Button } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined, EyeOutlined } from '@ant-design/icons';

import { OffersStyles, InfosOffers } from './styles';
import BeetleImg from '../../assets/beetle.jpg';

const { Meta } = Card;




const Offers: React.FC = () =>{

    const [offers, setOffers] = useState<OfferModel[]>([]);
    const [view, setViews] = useState();

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

    async function handleAddViews(id){

        
        var newView;
        
        const ref = firebase.firestore().collection('offers').doc(id);
        ref.get().then((doc) => {

            if(doc.exists){
            newView = offers.map(offer  => {
                if(offer.id == id){
                    return offer.views;
                }
            })

            newView++;
            

            }
        }) 

       





        // .then(result => {
        //     res.status
        // })
        
        
    }


    async function handleUpdate (id){
        

    } 
        

       

    return (
        <OffersStyles>
            <h1>
                <Link to="/">Home</Link>
                /Offers car
            </h1>




            <Row justify="space-around">
                {offers.map(item => (
                    <Col key={item.id} className="col" flex="1 1 200px">
                        <a onClick={() => handleAddViews(item.id)}>
                            <Card className="card"
                                
                                cover={
                                <img alt="example" src={BeetleImg}/>
                                }
                                
                            >

                                <InfosOffers>
                                    <h2>{item.model}</h2>
                                    <p>
                                        <span><strong>Brand:</strong>{item.brand}</span>
                                        
                                    </p>

                                    <p>
                                        <span><strong>Price:</strong>R$ {item.price}</span>
                                        <span><strong>Year:</strong>{item.year}</span>  
                                    </p>
                                    <div className="views">
                                        <EyeOutlined title="views" /> 
                                        <span>views: {item.views}</span>
                                    </div>
                                    

                                </InfosOffers>
                                
                                
                                
                                
                                
                            </Card>
                        </a>
                        
                    </Col>

                ))}
                
            </Row>




            
        </OffersStyles>
        
    
    );
}


export default Offers;