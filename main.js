import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router'


import Hello from './hello.jsx';

var routes = (
  <Router >
    <Route path="/" component={Hello} />
  </Router>
)

ReactDOM.render(routes, document.querySelector('#main'))