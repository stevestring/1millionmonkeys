import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Investor from './Investor';
import { Route,  BrowserRouter as Router } from 'react-router-dom'

const routing = (
  <Router>
        <div>
            <Route exact path="/" render={App}/>
            <Route path="/index.html" render={App}/>             
            <Route path="/Investor/:user" render={(props) => <Investor user={props.match.params.user}/>} />
        </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'))