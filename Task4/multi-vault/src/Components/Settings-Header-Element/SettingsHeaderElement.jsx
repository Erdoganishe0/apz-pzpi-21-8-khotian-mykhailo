import React from 'react'
import './SettingsHeaderElement.css'

const SettingsHeaderElement = (props) => {
  return (
    <div className={props.isActive ? 'settings-header-element settings-header-element-active' : 'settings-header-element'}>
        {props.name}
    </div>
  )
}

export default SettingsHeaderElement