import React, { useState, useEffect  } from 'react';
import './Settings.css'
import MainHeader from '../Header/MainHeader'
import SettingsHeader from '../Settings-Header/SettingsHeader'
import SettingsElement from '../Settings-element/SettingsElement'
import axios from 'axios'

const Settings = () => {

  const fetchUserWallet = async () => {
    try {    
        const response = await axios.get('api/user')
        console.log(response.data.wallet)    
        return response.data.wallet    
    } catch (error) {    
        console.error(error)    
    }    
}


const [wallet, setWallet] = useState(null);

useEffect(() => {
    const fetchWallet = async () => {
        try {
            const walletData = await fetchUserWallet();
            setWallet(walletData);
        } catch (error) {
            console.error(error);
        }
    };
    fetchWallet();

}, []);

const lang_options = [{
    value: 'language-ua',
    label: 'Ukrainian - Ukrainian'
    }, 
    {
    value: 'language-us',
    label: 'English - USA'
}]

const region_options = [{
  value: 'region-ua',
  label: 'Ukraine'
  }, 
  {
  value: 'region-us',
  label: 'USA'
}]

const [ActiveHeader, setActiveHeader] = useState(0)

  return (
    <div className=''>
        <MainHeader />
        <div className='settings-container'>
            <SettingsHeader activeHeader = {[ActiveHeader, setActiveHeader]}/>
            {ActiveHeader == 0 ? 
            <div className='settings-elements-containers'>
                <SettingsElement isActive = {false} type = {"List"} name = {'Display language'} description = {'Set the language on display.'} options = {lang_options}/>
                <SettingsElement isActive = {false} type = {"List"} name = {'Region'} description = {'Choose your region to update format of date and time.'} options = {region_options}/>
                <SettingsElement isLogOut = {true} isActive = {true} type = {"Button"} buttonName = {"Log Out"} name = {'Log Out'} description = {'Log out from the account'} options = {[{}]}/>
          </div>
          : ActiveHeader == 1 ?  
          <div className='settings-elements-containers'>
                <SettingsElement isActive = {false} type = {"Button"} name = {'Export account'} description = {'Get your private key'} buttonName = {"Export"} options = {lang_options} onClick={async ()=>{
                let text = wallet ? wallet : 123
                try {
                    await navigator.clipboard.writeText(text)                
                    console.log('Text copied to clipboard:', text)                
                  } catch (err) {                
                    console.error('Failed to copy text: ', text)                
                  }
            }}/>
                <SettingsElement isActive = {true} type = {"Bool"} name = {'Hide empty tokens'} description = {'Hide tokens with zero value.'} options = {[{}]}/>
          </div>: 
          ActiveHeader == 2 ?  
          <div className='settings-elements-containers'>
                <SettingsElement isActive = {false} type = {"List"} name = {'2 language'} description = {'Set the language on display.'} options = {lang_options}/>
                <SettingsElement isActive = {true} type = {"List"} name = {'2 language'} description = {'Set the language on display.'} options = {[{}]}/>
          </div> :
          <div className='settings-elements-containers'>
                <SettingsElement isActive = {false} type = {"List"} name = {'3 language'} description = {'Set the language on display.'} options = {lang_options}/>
                <SettingsElement isActive = {true} type = {"List"} name = {'3 language'} description = {'Set the language on display.'} options = {[{}]}/>
          </div>
          }
        </div>
    </div>
  )
}

export default Settings