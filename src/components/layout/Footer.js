import React from 'react'

const Footer = (props) => {
  return (
    <footer>
      <p className='text-center'>Site by
        <a href='https://reactiveventur.es' target='_blank'> {props.name} </a>
      </p>
    </footer>
  )
}
export default Footer
