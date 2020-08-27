import React from 'react';
<<<<<<< HEAD
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
=======
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
>>>>>>> russell

import './App.css';

import Header from './components/Header';
<<<<<<< HEAD
import Feed from './components/Feed'
=======
//import Feed from './components/Feed'
>>>>>>> russell

import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';

<<<<<<< HEAD
=======

>>>>>>> russell
const client = new ApolloClient({
  request: operation => {
    const token = localStorage.getItem('id_token');

    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    });
  },
<<<<<<< HEAD
  uri: '/graphql'
=======
  uri: 'http://localhost:3001/graphql'
>>>>>>> russell
});

function App() {
  return (
    <div className="App">
      <ApolloProvider client={client}>
      <Router>
        <Header />
        {/* <Feed /> */}

        <div>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/signup' component={Signup} />
            <Route exact path='/profile' component={Profile} />
          </Switch>
        </div>
      </Router>
      </ApolloProvider>
    </div>
  );
}

export default App;
