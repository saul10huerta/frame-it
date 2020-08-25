import React from 'react';
import { Button, Container, Row, Col, Image } from 'react-bootstrap';
import photoOne from '../../assets/images/James Hall/JamesHall_1.jpg'
import photoTwo from '../../assets/images/James Hall/JamesHall_2.jpg'
import '../../App.css';


const Feed = () => {
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col md={4}>
                        <h4 className='m-3'>Username</h4>
                        <Image fluid src={photoOne} />
                        <p className='m-3 font-size:{1rem}'>Title</p>
                        <div className='d-flex justify-content-around m-3'>
                            <span>Price</span>
                            <Button className='likeButton'>Like</Button>
                        </div>
                    </Col>
                    <Col md={4}>
                        <h4 className='m-3'>Username</h4>
                        <Image fluid src={photoTwo} />
                        <p className='m-3'>Title</p>
                        <div className='d-flex justify-content-around m-3'>
                            <span>Price</span>
                            <Button className='likeButton'>Like</Button>
                        </div>
                    </Col>
                    <Col md={4}>
                        <h4 className='m-3'>Username</h4>
                        <Image fluid src={photoOne} />
                        <p className='m-3'>Title</p>
                        <div className='d-flex justify-content-around m-3'>
                            <span>Price</span>
                            <Button className='likeButton'>Like</Button>
                        </div>
                    </Col>
                    <Col md={4}>
                        <h4 className='m-3'>Username</h4>
                        <Image fluid src={photoOne} />
                        <p className='m-3'>Title</p>
                        <div className='d-flex justify-content-around m-3'>
                            <span>Price</span>
                            <Button className='likeButton'>Like</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Feed;