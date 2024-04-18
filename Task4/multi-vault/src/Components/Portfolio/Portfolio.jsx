import React from 'react'
import Chart from '../Portfolio-Chart/Chart'
import './Portfolio.css'

const Portfolio = () => {
    const data = [10, 20, 30, 40, 50, 60, 70];
  return (
    <div className='Portfolio'>

        <Chart data={data} />
    </div>
  )
}

export default Portfolio