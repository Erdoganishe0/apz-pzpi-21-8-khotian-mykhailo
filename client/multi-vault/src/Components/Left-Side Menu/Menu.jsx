import React from 'react'
import Element from '../Menu-Element/Element'
import './Menu.css'

const Menu = () => {
  return (
    <table class = "menu-table">
        <th>
            <td>
                MENU
            </td>
        </th>
        <tr>
            <td>
                <Element iconSrc="portfolio.png" name="Portfolio" isActive = {true}/>
            </td>
        </tr>
        <tr>
            <td>
                <Element iconSrc="wallet.png" name="Accounts" isActive={false} />
            </td>
        </tr>
        <tr>
            <td>
                <Element iconSrc="upload.png" name="Send" isActive = {false} />
            </td>
        </tr>
        <tr>
            <td>
                <Element iconSrc="download.png" name="Recieve" isActive = {false} />
            </td>
        </tr>
        <tr>
            <td>
                <Element iconSrc="settings.png" name="Settings" isActive = {false} />
            </td>
        </tr>

    </table>
  )
}

export default Menu