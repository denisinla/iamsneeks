import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'
import App from '../components/App'
import NotFound from '../components/NotFound'
import Home from '../components/Home'

export default (
  <Router>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='*' component={NotFound} />
    </Route>
  </Router>
)
