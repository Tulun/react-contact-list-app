// These two packages are required for React to work
import React from 'react';
import ReactDOM from 'react-dom';
global.jQuery = require('jquery');
require('bootstrap')

// This package allows us to create URL routes
import { Router, Route } from 'react-router';

// This package gets rid of ugly url bars
import { createHistory } from 'history';


import App from './components/App.jsx';

var routes = (
  <Router history={createHistory()} >
    <Route path="/" component={App} />
  </Router>
)

ReactDOM.render(routes, document.querySelector('#main'))