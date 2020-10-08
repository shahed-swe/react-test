import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Route, BrowserRouter} from  'react-router-dom';

const context = React.createContext();
const ctxConsumer = context.Consumer;


const student = [
    'razib',
    'atik',
    'azad',
    'shahed',
    'sakib'
]


const routing = (
  <BrowserRouter>
    <context.Provider value={{students: student}}>
      <div>
        <Route path="/" component={App}></Route>
      </div>
    </context.Provider>
  </BrowserRouter>
)

ReactDOM.render(
  routing,document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
