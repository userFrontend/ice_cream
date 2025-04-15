import React from 'react'
import './Loader.scss'

const Loader = ({click}) => {
  return (
    <div className='loader' onClick={() => click(true)}>
      <div className="content">
        <img src="images/logo.png" alt="logo" />
      </div>
    </div>
  )
}

export default Loader
