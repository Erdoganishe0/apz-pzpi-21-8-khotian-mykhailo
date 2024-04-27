import React from 'react'
import Chart from '../Portfolio-Chart/Chart'
import MainHeader from '../Header/MainHeader'
import './Portfolio.css'
import AlocationTable from '../Alocation-Table/AlocationTable'


const Portfolio = () => {
  return (
    <div className='Portfolio'>
        <MainHeader />
        <Chart />
        <AlocationTable />
    </div>
  )
}

export default Portfolio