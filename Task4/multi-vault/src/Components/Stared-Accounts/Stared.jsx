import React from 'react'
import './Stared.css'
import NoStared from '../No-Starred/NoStared'
import StaredElement from '../Stared-Element/StaredElement'

function getCuttedAdress(str){
  let result = str.substring(0, 19)+ "..."
  return result
}

const Stared = () => {

  const isEnglish = true
  const selectList = [
    {'image': "Static/ETH.png", "title": "Ethereum", 'adress':"0x4f19b886C5Cc4ac9Ca32596D2bBCf760928703B8"},
    {'image': "Static/ETH.png", "title": "Ethereum", 'adress':"0x8E655ab5872fF06b4125d98b40f76acFE09Ed822"},

  ]

  return (
    <div className = "stared">
        <div className='stared-header'>
            <h2 className='stared-h2'>{isEnglish ? "STARRED ACCOUNTS" : "ОБРАНІ АКАУНТИ"}</h2>
        </div>
        {selectList.length == 0 ? <NoStared/>
        :
        selectList.map((account, index)=>{
          return <StaredElement key = {index} imageSrc = {account.image} title = {account.title} description={getCuttedAdress(account.adress)}/>
        })}
    </div>
  )
}

export default Stared