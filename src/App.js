import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/header'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Footer from './components/footer'

function App() {
  return (
    <div className="App">
      <Header/>
      <h1 className="text-primary">Hello</h1>
      <Footer info="first footer" take="second footer" />
    </div>
  );
}

export default App;
