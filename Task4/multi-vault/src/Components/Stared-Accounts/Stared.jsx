import React from 'react'
import './Stared.css'
import NoStared from '../No-Starred/NoStared'
import StaredElement from '../Stared-Element/StaredElement'

function getCuttedAdress(str){
  let result = str.substring(0, 19)+ "..."
  return result
}

const Stared = () => {
  return (
    <div className = "stared">
        <div className='stared-header'>
            <h2 className='stared-h2'>STARRED ACCOUNTS</h2>
        </div>
        {/* <NoStared/> */}
        <StaredElement imageSrc="Static/ETH.png" title="Ethereum" description={getCuttedAdress("0x4f19b886C5Cc4ac9Ca32596D2bBCf760928703B8")}/>
        <StaredElement imageSrc="Static/ETH.png" title="Ethereum" description={getCuttedAdress("0x8E655ab5872fF06b4125d98b40f76acFE09Ed822")}/>
        <StaredElement imageSrc="Static/ETH.png" title="Ethereum" description={getCuttedAdress("0x9365F009C0258089CB2e4B129074Ad2D80EeC132")}/>
    </div>
  )
}

export default Stared