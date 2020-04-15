import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Investor from './Investor';
import { Route,  BrowserRouter as Router } from 'react-router-dom'

import ReactGA from 'react-ga';


import { createBrowserHistory } from 'history';

const trackingId = "UA-163702166-1"; // Replace with your Google Analytics tracking ID
ReactGA.initialize(trackingId);


const history = createBrowserHistory();

// Initialize google analytics page view tracking
history.listen(location => {
  ReactGA.set({ page: location.pathname }); // Update the user's current page
  ReactGA.pageview(location.pathname); // Record a pageview for the given page
});


const routing = (
  <Router>
        <div>
            <Route exact path="/" component={App}/>
            <Route path="/index.html" component={App}/>           
            <Route path="/Investor/:user" render={(props) => <Investor user={props.match.params.user}/>} />
        </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'))