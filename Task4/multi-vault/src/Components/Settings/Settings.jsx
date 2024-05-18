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
    label: 'Українська'
    }, 
    {
    value: 'language-us',
    label: 'English - USA'
}]

const region_options = [{
  value: 'region-ua',
  label: 'Україна'
  }, 
  {
  value: 'region-us',
  label: 'USA'
}]

const [ActiveHeader, setActiveHeader] = useState(0)
const isEnglish = true
  return (
    <div className=''>
        <MainHeader />
        <div className='settings-container'>
            <SettingsHeader activeHeader = {[ActiveHeader, setActiveHeader]}/>
            {ActiveHeader == 0 ? 
            <div className='settings-elements-containers'>
                <SettingsElement 
                isActive = {false} 
                type = {"List"} 
                name = {isEnglish ? 'Display language' : 'Мова інтерфейсу'} 
                description = {isEnglish ? 'Set the language on display.' : 'Оберіть мову для відображення'} 
                options = {lang_options}/>
                <SettingsElement 
                isActive = {false} 
                type = {"List"} 
                name = {isEnglish ? 'Region' : 'Регіон'} 
                description = {isEnglish ? 'Choose your region to update format of date and time.' :
                 'Оберіть регіон для оновлення формату дати та часу'} 
                options = {region_options}/>
                <SettingsElement 
                isLogOut = {true} 
                isActive = {true} 
                type = {"Button"} 
                buttonName = {isEnglish ? "Log Out": 'Вийти'} 
                name = {isEnglish ? 'Log Out' : 'Вийти'} 
                description = {isEnglish ? 'Log out from the account': 'Вийти з акаунта'} 
                options = {[{}]}/>
          </div>
          : ActiveHeader == 1 ?  
          <div className='settings-elements-containers'>
                <SettingsElement 
                isActive = {false} 
                type = {"Button"} 
                name = {isEnglish ? 'Export account' : 'Експорт акаунту'} 
                description = {isEnglish ? 'Get your private key': 'Отримати приватний ключ'} 
                buttonName = {isEnglish ? "Export": 'Експорт'} 
                options = {lang_options} onClick={async ()=>{
                let text = wallet ? wallet : 123
                try {
                    await navigator.clipboard.writeText(text)                
                    console.log('Text copied to clipboard:', text)                
                  } catch (err) {                
                    console.error('Failed to copy text: ', text)                
                  }
            }}/>
                <SettingsElement 
                isActive = {true} 
                type = {"Bool"} 
                name = {isEnglish ? 'Hide empty tokens': 'Сховати порожні токени'} 
                description = {isEnglish ? 'Hide tokens with zero value.' : 'Сховати токени з нульової вартістю.'} 
                options = {[{}]}/>
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