import React from 'react';
import { Button, Container, Row, Col, Image } from 'react-bootstrap';
import photoOne from '../../assets/images/James Hall/JamesHall_1.jpg'
import photoTwo from '../../assets/images/James Hall/JamesHall_2.jpg'
import photoThree from '../../assets/images/James Hall/JamesHall_3.jpg'
import photoFour from '../../assets/images/James Hall/JamesHall_4.jpg'
import photoFive from '../../assets/images/James Hall/JamesHall_5.jpg'
// import '../../App.css';


const Feed = () => {
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col md={4}>
                        <h4 className='m-3'>JamesHall</h4>
                        <Image fluid src={photoOne} />
                        <p className='m-3 font-size:{1rem}'>Black-White Flower</p>
                        <div className='d-flex justify-content-around m-3'>
                            <span>$75</span>
                            <Button className='likeButton'>Like</Button>
                            <Button className='likeButton'>Buy</Button>
                        </div>
                    </Col>
                    <Col md={4}>
                        <h4 className='m-3'>JamesHall</h4>
                        <Image fluid src={photoTwo} />
                        <p className='m-3'>Succulent</p>
                        <div className='d-flex justify-content-around m-3'>
                            <span>$55</span>
                            <Button className='likeButton'>Like</Button>
                            <Button className='likeButton'>Buy</Button>
                        </div>
                    </Col>
                    <Col md={4}>
                        <h4 className='m-3'>JamesHall</h4>
                        <Image fluid src={photoThree} />
                        <p className='m-3'>Skeleton</p>
                        <div className='d-flex justify-content-around m-3'>
                            <span>$99</span>
                            <Button className='likeButton'>Like</Button>
                            <Button className='likeButton'>Buy</Button>
                        </div>
                    </Col>
                    <Col md={4}>
                        <h4 className='m-3'>JamesHall</h4>
                        <Image fluid src={photoFour} />
                        <p className='m-3'>Orange Flower</p>
                        <div className='d-flex justify-content-around m-3'>
                            <span>$29</span>
                            <Button className='likeButton'>Like</Button>
                            <Button className='likeButton'>Buy</Button>
                        </div>
                    </Col>
                    <Col md={4}>
                        <h4 className='m-3'>JamesHall</h4>
                        <Image fluid src={photoFive} />
                        <p className='m-3'>Red Flower</p>
                        <div className='d-flex justify-content-around m-3'>
                            <span>$29</span>
                            <Button className='likeButton'>Like</Button>
                            <Button className='likeButton'>Buy</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Feed;