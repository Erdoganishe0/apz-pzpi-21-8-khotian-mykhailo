import React from 'react'
import './Send.css'

const Send = (props) => {
  return (
    <div className = {props.isActive ? 'send-container': 'send-container hidden' }>

        <div className = 'send-header'>
            Send
        </div>

        <div className = 'send-adress-input' id = "send-adress">
            <input className='send-input' id = "send-input-adress" placeholder = 'Adress...'></input>
        </div>

        <div className = 'send-amount-input'>
            <div className='amount-container'>
                Amount:
            </div>
            <div className = 'send-adress-input' id = "send-amount">
                <input className='send-input' id = "send-input-amount" placeholder = 'Amount...'></input>
                ETH
            </div>
        </div>

        <div className= 'send-buttons'>
            <div className='send-button' id = "cancel-button">
                Cancel
            </div>
            <div className='send-button' id = "confirm-button">
                Confirm
            </div>
        </div>
    </div>
  )
}

export default Send