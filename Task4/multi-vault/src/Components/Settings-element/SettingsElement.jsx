import React from 'react'
import './SettingsElement.css'
const SettingsElement = (props) => {

const options = props.options

  return (
    <div className='settings-element-container'>
        <div className='settings-element-text'>
            <p className='settings-element-name'>
                {props.name}
            </p>
            <p className='settings-element-description'>
                {props.description}
            </p>
        </div>
        {props.isList ? <div className='settings-element-list'>
        <select>
            {options.map((option, index) => (
                <option key={index} value={option.value}>{option.label}</option>
            ))}
        </select>
        </div>
         : 
         <div className = {'settings-element-tab'}>
            <div className = {props.isActive ?  'settings-element-tab-full settings-element-tab-full-active':'settings-element-tab-full'}>
            </div>
            <div className = {props.isActive ? 'settings-element-tab-non-full settings-element-tab-non-full-active' 
            :
             'settings-element-tab-non-full'}>
            </div>
        </div>
        } 
    </div>
  )
}

export default SettingsElement