import React from 'react'
import './AlocationTable.css'
import AlocationElement from '../AlocationElement/AlocationElement'

const AlocationTable = () => {
  return (
    <div className='alocation-table-container'>
        <div className='alocation-table-header'>Asset allocation</div>

        <div className='alocation-table'>
            <div className='alocation-table-row alocaion-table-first'>
                <div className='allocation-table-div-20'>Asset</div>
                <div className='allocation-table-div-20'>Price</div>
                <div className='allocation-table-div-40'>Allocation</div>
                <div className='allocation-table-div-10'>Amount</div>
                <div className='allocation-table-div-10'>Value</div>
            </div>
            <div className='alocation-table-row'>
                <AlocationElement iconSrc="ETH.png" name="Ethrerium" price = {127.70} amount = {3} totalAmount = {500.0} value = {383.10} color = {"lightblue"}/>
            </div>
            <div className='alocation-table-row'>
                <AlocationElement iconSrc="ETH.png" name="Ethrerium Classic" price = {12.50} amount = {80} totalAmount = {500.0} value = {100.0} color = {"green"}/>
            </div>
            <div className='alocation-table-row'>
                <AlocationElement iconSrc="ETH.png" name="Ethrerium Preasantly" price = {1.69} amount = {10} totalAmount = {500.0} value = {16.90} color = {"red"}/>
            </div>
        </div>
    </div>
  )
}

export default AlocationTable