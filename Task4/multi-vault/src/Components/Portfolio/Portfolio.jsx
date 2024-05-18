import React, { useState, useEffect } from 'react'
import Chart from '../Portfolio-Chart/Chart'
import MainHeader from '../Header/MainHeader'
import './Portfolio.css'
import AlocationTable from '../Alocation-Table/AlocationTable'
import axios from 'axios'
import StarredHeader from '../StarredHeader/StarredHeader'

const Portfolio = (props) => {

  let isUkr = false

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
        <Chart data  = {data? data.bal :            
              [
                {"bal": '0',"time":'00:00:00'},
                {"bal": '0',"time":'00:00:01'},
                {"bal": '0',"time":'00:00:02'},
                {"bal": '0',"time":'00:00:03'},
                {"bal": '0',"time":'00:00:04'},
                {"bal": '0',"time":'00:00:05'},
                {"bal": '0',"time":'00:00:06'},
                {"bal": '0',"time":'00:00:07'},
                {"bal": '0',"time":'00:00:08'},
                {"bal": '0',"time":'00:00:09'},
                {"bal": '0',"time":'00:00:10'},
                {"bal": '0',"time":'00:00:11'},
              ] 
          } isUkr = {isUkr}
           ethValue = {data? data.values.ethValue : 3000} 
           usdc  = {data? data.values.usdc*1.0012 : 0}
           usdt = {data? data.values.usdt*0.9998 : 0}/>
        <AlocationTable data = {data? data.values:
            {"eth":0,"usdt":0,"usdc":0,"ignite":0,"ethValue":0}

        }/>
    </div>
  )
}

export default Portfolio