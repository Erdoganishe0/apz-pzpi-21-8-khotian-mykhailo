import React, { useState } from 'react';
import './SettingsHeader.css'
import SettingsHeaderElement from '../Settings-Header-Element/SettingsHeaderElement'



const SettingsHeader = (props) => {
  const [ActiveHeader, setActiveHeader] = props.activeHeader
  return (
    <div className='settings-header-container'>
        <SettingsHeaderElement name = {'General'} isActive = {ActiveHeader == 0 ? true : false}  onClick = {() => setActiveHeader(0)} />
        <SettingsHeaderElement name = {'Accounts'} isActive = {ActiveHeader == 1 ? true : false}  onClick = {() => setActiveHeader(1)} />
        <SettingsHeaderElement name = {'About'} isActive = {ActiveHeader == 2 ? true : false}  onClick = {() => setActiveHeader(2)} />
        <SettingsHeaderElement name = {'Help'} isActive = {ActiveHeader == 3 ? true : false}  onClick = {() => setActiveHeader(3)} />
    </div>
  )
}

export default SettingsHeader