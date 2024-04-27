import React from 'react'
import './Acount.css'

const Acount = (props) => {
  return (
    <div className='account-container'>
        <div className='acount-header-line'>
            <img class = "acount-icon" src = {`Static/Acounts/${props.src}`}></img>
            <h3 class = "acount-name">{props.name}</h3>
        </div>
        <div className='acounts-description'>
            <p>{props.description}</p>
        </div>
    </div>
  )
}

export default Acount