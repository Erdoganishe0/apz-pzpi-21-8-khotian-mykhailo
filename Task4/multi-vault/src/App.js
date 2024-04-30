import React, { useState, useEffect } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import Left from './Components/Left-Column/Left';
import Portfolio from './Components/Portfolio/Portfolio';
import Acounts from './Components/Acounts/Acounts';
import Settings from './Components/Settings/Settings';
import Send from './Components/Send/Send';
import Recieve from './Components/Recieve/Recieve';
import LoginPage from './Components/LoginPage/LoginPage';
import Page404 from './Components/404/404';

function App() {

  const [data, setData] = useState({});

  useEffect(() => {
    fetchData();
  }, []);


  const fetchData = async () => {
    try {
      const response = await axios.get('/index');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="App">
      {/* <div className='menu-container'>
        <Left/>
      </div>
      <div className='main-container'>
        <Portfolio/>
        <Acounts />
        <Settings />
        <Send />
        <Recieve adress = "0x1233542376527547234"/>
      </div> */}
      {/* <LoginPage isLogin = {true} p = {data.message}/> */}
      <Page404/>
    </div>
  );
}

export default App;
