import React from 'react'
import { useState, useEffect } from 'react'
import './Recieve.css'
import axios from 'axios'

const Recieve = (props) => {

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


  return (
    <div className= {props.isActive ? 'recieve-container': 'recieve-container hidden'}>
        <div className='recieve-header'>
            Recieve asset on wallet
        </div>
        <div className='recieve-qr'>
        </div>
        <div className='recieve-adress'>
            {wallet}
        </div>
        <div className='copy-buttons'>
            <div className='copy-button'>Copy adress
            </div>
        </div>
    </div>
  )
}

export default Recieve