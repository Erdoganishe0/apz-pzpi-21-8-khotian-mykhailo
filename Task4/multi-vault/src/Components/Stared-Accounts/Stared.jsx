import React, {useState, useEffect} from 'react'
import './Stared.css'
import NoStared from '../No-Starred/NoStared'
import StaredElement from '../Stared-Element/StaredElement'
import axios from 'axios'

function getCuttedAdress(str){
  let result = str.substring(0, 19)+ "..."
  return result
}

const Stared = (props) => {
  const fetchUserSettings = async () => {
    try {    
        const response = await axios.get('api/user')
        return response.data.settings    
    } catch (error) {    
        console.error(error)    
    }    
}
const [isEnglish, setIsEnglish] = useState(null)
useEffect(() => {
    const fetchWallet = async () => {
        try {
            const settingsData = await fetchUserSettings()
            setIsEnglish(settingsData.isEngLanguage)
        } catch (error) {
            console.error(error);
        }
    };
    fetchWallet();

}, []);

  const fetchUser = async () => {
    try {    
        const response = await axios.get('api/user')
        return response.data.staredAccounts 
    } catch (error) {    
        console.error(error)    
    }    
  }
  const [stared, setStared] = useState(null)

  useEffect(() => {
    const fetchWallet = async () => {
        try {
            const staredData = await fetchUser()
            console.log("-----------------------------staredData")
            console.log(staredData)
            setStared(staredData)
            

        } catch (error) {
            console.error(error);
        }
    };
    fetchWallet();

}, []);
  console.log("--------------------stared-----------")
  console.log(stared)

  // const selectList = [
  //   {'image': "Static/ETH.png", "title": "Ethereum", 'adress':"0x4f19b886C5Cc4ac9Ca32596D2bBCf760928703B8"},
  //   {'image': "Static/ETH.png", "title": "Ethereum", 'adress':"0x8E655ab5872fF06b4125d98b40f76acFE09Ed822"},
  // ]

  return (
    <div className = "stared">
        <div className='stared-header'>
            <h2 className='stared-h2'>{isEnglish ? "STARRED ACCOUNTS" : "ОБРАНІ АКАУНТИ"}</h2>
        </div>
        {stared ? stared.length == 0 ? <NoStared/>  
        :
        stared.map((item, index)=>{
          return <StaredElement key = {index} imageSrc = {"Static/ETH.png"} title = {"Ethereum"} description={getCuttedAdress(item)} user = {item}/>
        }) : <></>}
    </div>
  )
}

export default Stared