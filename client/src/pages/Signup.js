import React, { useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';

import { useMutation } from '@apollo/react-hooks';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';

const Signup = () => {
  const [formState, setFormState] = useState({ username: '', email: '', password: '' });
  const [addUser, { error }] = useMutation(ADD_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // use try/catch isntead of promises to handle errors
    try { 
      // execute addUser mutation and pass in variable data from form
      const { data } = await addUser({
        variables: { ...formState }
      });
      Auth.login(data.addUser.token);
    //   console.log(data);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main>
        <Card className='loginForm'>
            <Card.Header>Signup</Card.Header>
            <Card.Body>
                <Form onSubmit={handleFormSubmit}>
                    <Form.Group>
                        <Form.Label >User Name</Form.Label>
                        <Form.Control type='input' placeholder='Your user name' id='userName' name='userName' />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label >First Name</Form.Label>
                        <Form.Control type='input' placeholder='Your first name' id='firstName' name='firstName' />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label >Last Name</Form.Label>
                        <Form.Control type='input' placeholder='Your last name' id='lastName' name='lastName' />
                    </Form.Group>
                    <Form.Group >
                        <Form.Label >Email</Form.Label>
                        <Form.Control type='email' placeholder='Your email' id='email' name='email' />
                    </Form.Group>
                    <Form.Group >
                        <Form.Label>Password</Form.Label>
                        <Form.Control type='password' placeholder='*******' id='password' name='password' />
                    </Form.Group>
                    <Button className='submitButton' type='Submit'>
                        Submit
                    </Button>
                </Form>
            </Card.Body>
        </Card>
        {/* {error && <div>Sign up failed</div>} */}
    </main>
  );
};

export default Signup;
