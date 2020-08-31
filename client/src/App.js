import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

//import Header from './components/Header';
import NoMatch from './pages/NoMatch';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
//import Profile from './pages/Profile';
import Nav from "./components/Nav";
import { StoreProvider } from "./utils/GlobalState";
//import OrderHistory from "./pages/OrderHistory";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


const client = new ApolloClient({
  request: (operation) => {
    const token = localStorage.getItem('id_token')
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    })
  },
  uri: '/graphql',
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <StoreProvider>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route component={NoMatch} />
          </Switch>
          </StoreProvider>
        </div>
      </Router>
    </ApolloProvider>

  );
}

export default App;
