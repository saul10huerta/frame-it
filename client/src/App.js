import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

import Header from './components/Header';
import Feed from './components/Feed'

function App() {
  return (
    <div className="App">
      <Header />
      <Feed />
    </div>
  );
}

export default App;
