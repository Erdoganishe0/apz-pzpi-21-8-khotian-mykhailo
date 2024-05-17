import React, { useState } from 'react';
import './SettingsElement.css'
const SettingsElement = (props) => {

const options = props.options
const [isActive, setisActive] = useState(props.isActive)


const buttonClick = () => {

    setisActive(!isActive);

  };

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
        {props.type == "List" ? <div className='settings-element-list'>
        <select>
            {options.map((option, index) => (
                <option key={index} value={option.value}>{option.label}</option>
            ))}
        </select>
        </div>
         : 
         props.type == "Bool" ?
         <div className = {'settings-element-tab'} onClick={buttonClick}>
            <div className = {isActive ?  'settings-element-tab-full settings-element-tab-full-active':'settings-element-tab-full'}>
            </div>
            <div className = {isActive ? 'settings-element-tab-non-full settings-element-tab-non-full-active' 
            :
             'settings-element-tab-non-full'}>
            </div>
        </div>
        :
        <div className = {'settings-element-button'}>
                {props.isLogOut ?
                <button className='settings-button' onClick={props.onClick}>
                    <a href='/logout'>
                        {props.buttonName}
                    </a>
                </button>
                :
                <button className='settings-button' onClick={props.onClick}>
                    {props.buttonName}
                </button>
                }
        </div>
        } 
    </div>
  )
}

export default SettingsElement