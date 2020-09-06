import React from 'react';
import { Button, Container, Row, Col, Image } from 'react-bootstrap';
import photoOne from '../../assets/images/James Hall/JamesHall_1.jpg'
// import photoTwo from '../../assets/images/James Hall/JamesHall_2.jpg'
import { QUERY_ITEMS } from '../../utils/queries';
import { useQuery } from '@apollo/react-hooks'


const Feed = () => {

  const { loading, data } = useQuery(QUERY_ITEMS);
  const items = data?.items
  console.log(items)


  if(loading) {
    return <h2>LOADING...</h2>
  }


  return (
    <Container fluid>
        <Row>
        {items.map((item) => {
          return (
            <Col md={4}>
                <h4 className='m-3'>Username</h4>
                <Image fluid src={photoOne} />
                <p className='m-3 font-size:{1rem}'>{item.title}</p>
                <span>Quantity: {item.quantity}</span>
                <span> | {item.status}</span>
                <div className='d-flex justify-content-around m-3'>
                    <span>${item.price}</span>
                    <Button className='likeButton'>Like</Button>
                    <Button className='likeButton'>Buy</Button>
                </div>
            </Col>
          )
        })}
        </Row>
    </Container>
  )
}

export default Feed;