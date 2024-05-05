import React, { useState, useEffect } from 'react';
import './App.css';
import LoginPage from './Components/LoginPage/LoginPage';
import Page404 from './Components/404/404';
import PortfolioPage from './Components/PortfolioPage/PortfolioPage';
import AccountPage from './Components/AccountPage/AccountPage'
import SettingsPage from './Components/SettingsPage/SettingsPage';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            exact
            path="/accounts"
            element={ <AccountPage current = "Accounts"/> }
          />
          <Route
            exact
            path="/register"
            element={ <LoginPage isLogin = {true}/> }
          />
          <Route
            exact
            path="/login"
            element={ <LoginPage isLogin = {false}/> }
          />
          <Route
            path="/portfolio"
            element={<PortfolioPage current = "Portfolio"/> }
          />
          <Route
            path="/settings"
            element={ <SettingsPage current = "Settings"/>}
          />
          <Route
            path="*"
            element={<Page404 />}
          />
        </Routes>
      </Router>
    </>

        
    //     {/* <Send /> */}
    //     {/* <Recieve adress = "0x1233542376527547234"/> */}

  );
}

export default App;
