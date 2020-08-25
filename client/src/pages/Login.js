import React, { useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
// import { useMutation } from '@apollo/react-hooks';
// import { LOGIN_USER } from '../utils/mutations';
// import Auth from '../utils/auth';


const Login = () => {
//   const [formState, setFormState] = useState({ email: '', password: '' });

//   const[login, { error }] = useMutation(LOGIN_USER);

  // update state based on form input changes
//   const handleChange = (event) => {
//     const { name, value } = event.target;

//     setFormState({
//       ...formState,
//       [name]: value,
//     });
//   };

//   // submit form
//   const handleFormSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       const { data } = await login({
//         variables: { ...formState }
//       });
//       Auth.login(data.login.token);
//       console.log(data);
//     } catch (e) {
//       console.error(e);
//     }
//     // clear form values
//     setFormState({
//       email: '',
//       password: '',
//     });
//   };    
    return (
        <main>
            <Card className='loginForm' md>
                <Card.Header>Login</Card.Header>
                <Card.Body>
                    <Form>
                        <Form.Group controlId='formLoginEmail'>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type='email' placeholder='Your email' id='email' name='email' />
                        </Form.Group>
                        <Form.Group controlId='formLoginPassword'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type='password' placeholder='*******' id='password' name='password' />
                        </Form.Group>
                        <Button className='submitButton' type='Submit'>
                            Submit
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </main>
    )
}

export default Login;