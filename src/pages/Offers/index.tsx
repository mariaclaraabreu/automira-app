import React from 'react';

import { Card, Row, Col } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined, EyeOutlined } from '@ant-design/icons';

import { OffersStyles, InfosOffers } from './styles';
import BeetleImg from '../../assets/beetle.jpg';

const { Meta } = Card;

const Offers: React.FC = () =>{
    return (
        <OffersStyles>
            <h1>Offers car</h1>




            <h1>teste</h1>
            <Row justify="space-around">
                <Col className="col" flex="1 1 200px">
                    <a href="">
                        <Card className="card"
                            
                            cover={
                            <img alt="example" src={BeetleImg}/>
                            }
                            
                        >

                            <InfosOffers>
                                <h2>Beetle</h2>
                                <p>
                                    <span><strong>Marca:</strong>Fiat</span>
                                    
                                </p>

                                <p>
                                <span><strong>Preço:</strong>R$ 5,000,00</span>
                                <span><strong>Ano:</strong>2005</span>  
                                </p>
                                <div><EyeOutlined title="views" /> views: 2</div>
                                

                            </InfosOffers>
                            
                            
                            
                            
                            
                        </Card>
                    </a>
                    
                </Col>

                <Col className="col" flex="1 1 200px">
                    <a href="">
                        <Card className="card"
                            
                            cover={
                            <img alt="example" src={BeetleImg}/>
                            }
                            
                        >

                            <InfosOffers>
                                <h2>Beetle</h2>
                                <p>
                                    <span><strong>Marca:</strong>Fiat</span>
                                    
                                </p>

                                <p>
                                <span><strong>Preço:</strong>R$ 5,000,00</span>
                                <span><strong>Ano:</strong>2005</span>  
                                </p>
                                <div><EyeOutlined title="views" /> views: 2</div>
                                

                            </InfosOffers>
                            
                            
                            
                            
                            
                        </Card>
                    </a>
                </Col>

                <Col className="col" flex="1 1 200px">
                    <a href="">
                        <Card className="card"
                            
                            cover={
                            <img alt="example" src={BeetleImg}/>
                            }
                            
                        >

                            <InfosOffers>
                                <h2>Beetle</h2>
                                <p>
                                    <span><strong>Marca:</strong>Fiat</span>
                                    
                                </p>

                                <p>
                                <span><strong>Preço:</strong>R$ 5,000,00</span>
                                <span><strong>Ano:</strong>2005</span>  
                                </p>
                                <div><EyeOutlined title="views" /> views: 2</div>
                                

                            </InfosOffers>
                            
                            
                            
                            
                            
                        </Card>
                    </a>
                </Col>
                <Col className="col" flex="1 1 200px">
                    <a href="">
                        <Card className="card"
                            
                            cover={
                            <img alt="example" src={BeetleImg}/>
                            }
                            
                        >

                            <InfosOffers>
                                <h2>Beetle</h2>
                                <p>
                                    <span><strong>Marca:</strong>Fiat</span>
                                    
                                </p>

                                <p>
                                <span><strong>Preço:</strong>R$ 5,000,00</span>
                                <span><strong>Ano:</strong>2005</span>  
                                </p>
                                <div><EyeOutlined title="views" /> views: 2</div>
                                

                            </InfosOffers>
                            
                            
                            
                            
                            
                        </Card>
                    </a>
                </Col>
            </Row>




            
        </OffersStyles>
        
    
    );
}


export default Offers;