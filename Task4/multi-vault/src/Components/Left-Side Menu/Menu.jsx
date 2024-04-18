import React from 'react'
import Element from '../Menu-Element/Element'
import './Menu.css'

const Menu = () => {
  return (
    <div className = "menu">
        <div className='menu-header'>
            <h2 className='menu-h2'>MENU</h2>
        </div>
        
        <Element iconSrc="portfolio.png" name="Portfolio" isActive = {true}/>

        <Element iconSrc="wallet.png" name="Accounts" isActive={false} />

        <Element iconSrc="upload.png" name="Send" isActive = {false} />

        <Element iconSrc="download.png" name="Recieve" isActive = {false} />

        <Element iconSrc="settings.png" name="Settings" isActive = {false} />
        
    </div>
  )
}

export default Menu