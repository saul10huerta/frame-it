import React, { useEffect } from 'react';
import { Button, Container, Row, Col, Image } from 'react-bootstrap';
import { QUERY_ITEMS } from "../../utils/queries";
import { useStoreContext } from '../../utils/GlobalState';
import { useQuery } from '@apollo/react-hooks';
import { UPDATE_ITEMS } from '../../utils/actions';
import { idbPromise } from "../../utils/helpers";

const Feed = (props) => {
    const [state, dispatch] = useStoreContext();
    const { loading, data } = useQuery(QUERY_ITEMS);
    
    
    useEffect(() => {
        if(data) {
          dispatch({
            type: UPDATE_ITEMS,
            items: data.items
          });
      
          data.items.forEach((item) => {
            idbPromise('items', 'put', item);
          });
          // add else if to check if `loading` is undefined in `useQuery()` Hook
        } else if (!loading) {
          // since we're offline, get all of the data from the `products` store
          idbPromise('items', 'get').then((items) => {
            // use retrieved data to set global state for offline browsing
            dispatch({
              type: UPDATE_ITEMS,
              items: items
            });
          });
        }
      }, [data, loading, dispatch]);
    
    return (
        <div>
            <Container fluid>
                <Row>
                {state.items.map(item => (
                    <Col md={4}>
                        <h4 className='m-3'>{item.uusername}</h4>
                        <Image fluid src={item.image} />
                        <p className='m-3 font-size:{1rem}'>Title</p>
                        <div className='d-flex justify-content-around m-3'>
                            <span>{item.prize}</span>
                            <Button className='likeButton'>Like</Button>
                            <Button className='likeButton'>Buy</Button>
                        </div>
                    </Col>
                ))}
                </Row>
            </Container>
        </div>
    )
}

export default Feed;