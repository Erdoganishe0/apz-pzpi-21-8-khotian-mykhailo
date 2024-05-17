import React, { useState, useEffect } from 'react'
import Chart from '../Portfolio-Chart/Chart'
import MainHeader from '../Header/MainHeader'
import './Portfolio.css'
import AlocationTable from '../Alocation-Table/AlocationTable'
import axios from 'axios'
import StarredHeader from '../StarredHeader/StarredHeader'

const Portfolio = (props) => {

//   const fetchData = async (url) => {
//         const response = await axios.get(url)
//         return response 
// }

  const [data, setData] = useState(null)

//   useEffect(() => {
//     const getData = async () => {
//         try {
//             const priceData = await fetchData('/api/wallet');
//             setData(priceData);
//         } catch (error) {
//             console.error(error);
//         }
//     };
//     getData();

// }, []);

useEffect(() => {

  const fetchData = async () => {

    try {

      const response = await axios.get('/api/wallet');

      const data = response.data;

      setData(data);

      console.log(data);

    } catch (error) {

      console.log(error);

    }

  };

  fetchData();

}, []);


  // let pdata = data? data.data? data.data.eth : data : NONE;

  return (
    <div className='Portfolio'>
        {props.isMain ? <MainHeader /> : <StarredHeader/>}
        <Chart/>
        <AlocationTable data = {data? data: {"eth":0,"usdt":0,"usdc":0,"ignite":0,"ethValue":0}}/>
    </div>
  )
}

export default Portfolio