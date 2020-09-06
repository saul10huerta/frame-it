import React from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import photoOne from '../assets/images/James Hall/JamesHall_1.jpg';
// import photoTwo from '../assets/images/James Hall/JamesHall_2.jpg';

// import { useParams } from 'react-router-dom';
import Auth from '../utils/auth';
import ItemForm from '../components/ItemForm';

import { useQuery, useMutation } from '@apollo/react-hooks';
import { QUERY_ME } from '../utils/queries';
import { REMOVE_ITEM } from '../utils/mutations';



const Profile = () => {


    // const { username: userParam } = useParams();
    const { loading, data } = useQuery(QUERY_ME);
    const [removeItem, { error }] = useMutation(REMOVE_ITEM);

    const user = data?.me || {};


    // function to delete item
    const handleDeleteItem = async (_id) => {
        const token = Auth.loggedIn() ? Auth.getToken() : null;
   
    

        if(!token) {
            return false;
        }

        try {
            const { data } = await removeItem({
                variables: { _id }
                
            });
            if(error) {
                throw new Error('something went wrong');
            }
        } catch (err) {
            console.err(err);
            console.log('remove item error')
        }
    };

    if(loading) {
        return <h2>LOADING...</h2>
    }
    
    return (
        <div>
            {user.items.length
            ? `Viewing ${user.username}'s ${user.items.length === 1 ? 'item' : 'items'}:`
            : "You have no items."}
            <ItemForm />
            <Container fluid>
                <Row>
                {user.items.map((item) => {

                return (
                    <Col md={4}>
                        <Image fluid src={photoOne} />
                        <p className='m-3 font-size:{1rem}'>{item.title}</p>
                        <span>{item.status}</span>
                        <span>Quantity: {item.quantity}</span>
                        <div className='d-flex justify-content-around m-3'>
                            <span>${item.price}</span>
                            <Button className='btn-danger' onClick={() => handleDeleteItem(item._id)}>
                                Delete
                            </Button>
                            
                        </div>
                    </Col>
                );
                })}
                </Row>
            </Container>
        </div>
    )
}

export default Profile;