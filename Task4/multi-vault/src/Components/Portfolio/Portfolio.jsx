import React from 'react'
import Chart from '../Portfolio-Chart/Chart'
import MainHeader from '../Header/MainHeader'
import './Portfolio.css'
import AlocationTable from '../Alocation-Table/AlocationTable'
import axios from 'axios'

const Portfolio = () => {

  const fetchData = async (data) => {
    try {
        const response = await axios.get('api/user')
        //console.log(response)
    } catch (error) {
        
        alert(error)
    }

}

  fetchData()

  return (
    <div className='Portfolio'>
        <MainHeader />
        <Chart />
        <AlocationTable />
    </div>
  )
}

export default Portfolio