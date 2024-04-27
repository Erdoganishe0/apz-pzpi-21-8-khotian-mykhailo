import React from 'react'
import './SettingsHeader.css'
import SettingsHeaderElement from '../Settings-Header-Element/SettingsHeaderElement'

const SettingsHeader = () => {
  return (
    <div className='settings-header-container'>
        <SettingsHeaderElement name = {'General'} isActive = {true}/>
        <SettingsHeaderElement name = {'Accounts'} isActive = {false}/>
        <SettingsHeaderElement name = {'About'} isActive = {false}/>
        <SettingsHeaderElement name = {'Help'} isActive = {false}/>
    </div>
  )
}

export default SettingsHeader