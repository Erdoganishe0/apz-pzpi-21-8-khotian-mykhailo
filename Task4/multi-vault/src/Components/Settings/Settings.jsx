import React from 'react'
import './Settings.css'
import MainHeader from '../Header/MainHeader'
import SettingsHeader from '../Settings-Header/SettingsHeader'
import SettingsElement from '../Settings-element/SettingsElement'
const Settings = () => {

const lang_options = [{
    value: 'language-ua',
    label: 'Ukrainian - Ukrainian'
    }, 
    {
    value: 'language-us',
    label: 'English - USA'
}]

  return (
    <div className=''>
        <MainHeader />
        <div className='settings-container'>
            <SettingsHeader />
            <div className='settings-elements-containers'>
                <SettingsElement isActive = {false} isList = {true} name = {'Display language'} description = {'Set the language on display.'} options = {lang_options}/>
                <SettingsElement isActive = {true} isList = {false} name = {'Display language'} description = {'Set the language on display.'} options = {[{}]}/>
            </div>
        </div>
    </div>
  )
}

export default Settings