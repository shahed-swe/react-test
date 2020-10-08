import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/header'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import {Footer, ShowMessage} from './components/footer';
import styled from 'styled-components';
import Numbers from './components/numbers'

// here are all of those function that we need here

function createAlert(){
    alert("Thank for comming here")
}

const Paragraph = styled.p`
  font-size: 20px;
  color: blue;
`;

function App() {
  return (
    <div className="App" variant="dark">
      <Header/>
      <h1 variant="success">Hello</h1>
      <Footer info="first footer" take="second footer" myAlert={createAlert} />
      <ShowMessage toShow={true}/>
      <h1 className="text-success">Hello</h1>
      <form method="POST">
        <Paragraph>New Style</Paragraph>
      </form>
      <Numbers/>
    </div>
  );
}

export default App;
