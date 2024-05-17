import React, {useState} from 'react'
import './Send.css'

const Send = (props) => {

    const [IsHidden, setIsHidden] = props.isActive

  return (
    <div className = {IsHidden ? 'send-container hidden': 'send-container' }>

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
                <p className='send-input-eth'>ETH</p>     
            </div>
        </div>

        <div className= 'send-buttons'>
            <div className='send-button' id = "cancel-button" onClick={()=>{setIsHidden(true)}}>
                Cancel
            </div>
            <div className='send-button' id = "confirm-button" onClick={()=>{
                const adress = document.getElementById('send-input-adress').value
                const amount = document.getElementById('send-input-amount').value
                console.log(adress, amount)
            }}>
                Confirm
            </div>
        </div>
    </div>
  )
}

export default Send