import React from 'react'
import { useState, useEffect } from 'react'
import './Recieve.css'
import axios from 'axios'
import { QRCode } from 'react-qrcode-logo';


const Recieve = (props) => {

    const isEnglish = true

    const fetchUserWallet = async () => {
        try {    
            const response = await axios.get('api/user')
            console.log(response.data.wallet)    
            return response.data.wallet    
        } catch (error) {    
            console.error(error)    
        }    
    }
    

    const [wallet, setWallet] = useState(null)

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


  return (
    <div className= {props.isActive ? 'recieve-container': 'recieve-container hidden'}>
        <div className='recieve-header'>
            {isEnglish ? "Recieve asset on wallet" : "Отримати токени на гаманець"}
        </div>
        <div className='recieve-qr'>
            <QRCode value = {wallet ? wallet : 123} logoImage = "/Static/ETH.png" logoPadding="2"/>
        </div>
        <div className='recieve-adress'>
            {wallet}
        </div>
        <div className='copy-buttons'>
            <div className='copy-button' onClick={async ()=>{
                try {
                    await navigator.clipboard.writeText(wallet)                          
                  } catch (err) {                
                    alert(isEnglish ? "Failed to copy text":"Помилка при копіюванні адреси")                
                  }
            }}>{isEnglish ? "Copy adress" : "Копіювати адресу"}
            </div>
        </div>
    </div>
  )
}

export default Recieve