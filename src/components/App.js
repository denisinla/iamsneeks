import React from 'react'
import Home from './Home'
import Footer from './layout/Footer'

const App = (props) => {
  return (
    <div className='container'>
      {props.children || <Home />}
      <Footer name='ReactiveVentur.es' />
    </div>
  )
}
export default App
