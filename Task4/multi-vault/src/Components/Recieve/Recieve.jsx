import React from 'react'
import './Recieve.css'

const Recieve = (props) => {
  return (
    <div className='recieve-container'>
        <div className='recieve-header'>
            Recieve asset on wallet
        </div>
        <div className='recieve-qr'>
            <img src = "./static/qr.png"></img>
        </div>
        <div className='recieve-adress'>
            {props.adress}
        </div>
        <div className='copy-buttons'>
            <div className='copy-button'>Copy adress
            </div>
        </div>
    </div>
  )
}

export default Recieve