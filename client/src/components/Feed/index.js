import React from 'react';
import { Card, Button, CardGroup, Container, Row, Col, Image } from 'react-bootstrap';
import photoOne from '../../assets/images/James Hall/JamesHall_1.jpg'
import photoTwo from '../../assets/images/James Hall/JamesHall_2.jpg'
import '../../App.css';
// import '../../index.css';


const Feed = () => {
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col md={4}>
                        <h4>Username</h4>
                        <Image fluid src={photoOne} />
                        <span>Title</span>
                        <span>Price</span>
                        <Button>Like</Button>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <h4>Username</h4>
                        <Image fluid src={photoOne} />
                        <span>Title</span>
                        <span>Price</span>
                        <Button>Like</Button>
                    </Col>
                </Row>
            </Container>
        <CardGroup className='card-columns'>
            <Card>
                <Card.Title >User Name 1</Card.Title>
                <Card.Img src={photoOne} />
                <Card.Body>
                    <Card.Text className='text-left'>Title</Card.Text>
                    <Card.Text className='text-right'>Price</Card.Text>
                    <Button>Like</Button>
                </Card.Body>
            </Card>
            <Card>
                <Card.Title>User Name 2</Card.Title>
                <Card.Img src={photoTwo} />
                <Card.Body>
                    <span className='text-left'>Span</span>
                    <Card.Text className='text-left'>Title</Card.Text>
                    <Card.Text className='text-right'>Price</Card.Text>
                    <Button>Like</Button>
                </Card.Body>
            </Card>
            <Card>
                <Card.Title>User Name 3</Card.Title>
                <Card.Img src={photoOne} />
                <Card.Body>
                    <Card.Text className='text-left'>Title</Card.Text>
                    <Card.Text className='text-right'>Price</Card.Text>
                    <Button>Like</Button>
                </Card.Body>
            </Card>
            <Card>
                <Card.Title>User Name 3</Card.Title>
                <Card.Img src={photoOne} />
                <Card.Body>
                    <Card.Text className='text-left'>Title</Card.Text>
                    <Card.Text className='text-right'>Price</Card.Text>
                    <Button>Like</Button>
                </Card.Body>
            </Card>
            
        </CardGroup>
        </div>
    )
}

export default Feed;