import 'style/url!file!./../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './styles/main.scss'

import React from 'react'
import { render } from 'react-dom'
import { Router, hashHistory } from 'react-router'
import routes from './config/routes'

import ga from 'react-ga'

// GA content
let options = { debug: false }
ga.initialize('UA-65257432-2', options)

function logPageView () {
  ga.pageview(this.state.location.pathname)
}

let app = document.getElementById('app')
render(<Router history={hashHistory} routes={routes} onUpdate={logPageView} />, app)
