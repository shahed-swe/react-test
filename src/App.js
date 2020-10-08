import React from 'react';
import { ctxConsumer } from './index'


// import logo from './logo.svg';
import './App.css';
import Header from './components/header'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import {Footer, ShowMessage} from './components/footer';


function createAlert(){
    alert("Thank for comming here")
}


function App() {
  return (
    <div className="App">
      <Header/>
      <h1 className="text-primary">Hello</h1>
      <Footer info="first footer" take="second footer" myAlert={createAlert} />
      <ShowMessage toShow={true}/>

      <ctxConsumer>
        {(context) => {
              {context.students.map(student => {
                  return (
                      <div key={student}>
                          <h1>{student}</h1>
                      </div>
                  )
              })}
        }}
      </ctxConsumer>
    </div>
  );
}

export default App;
