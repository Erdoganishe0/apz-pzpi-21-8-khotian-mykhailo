import React from 'react'
import Element from '../Menu-Element/Element'
import './Menu.css'

const Menu = (props) => {
  return (
    <div className = "menu">
        <div className='menu-header'>
            <h2 className='menu-h2'>MENU</h2>
        </div>
        
        <Element isHidden = {false} isLink = {true} iconSrc="portfolio.png" name="Portfolio" isActive = {props.current == "Portfolio" ? true : false}/>

        <Element isHidden = {false} isLink = {true} iconSrc="wallet.png" name="Accounts" isActive={props.current == "Accounts" ? true : false} />

        <Element isHidden = {true} isLink = {false} iconSrc="upload.png" name="Send" isActive ={props.current == "Send" ? true : false} />

        <Element isHidden = {true} isLink = {false} iconSrc="download.png" name="Recieve" isActive = {props.current == "Recieve" ? true : false} />

        <Element isHidden = {false} isLink = {true} iconSrc="settings.png" name="Settings" isActive = {props.current == "Settings" ? true : false} />
        
    </div>
  )
}

export default Menu