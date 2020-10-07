import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

function App() {
  return (
    <div className="App">
      <Header/>
      <h1 className="text-primary">Hello</h1>
    </div>
  );
}

export default App;
