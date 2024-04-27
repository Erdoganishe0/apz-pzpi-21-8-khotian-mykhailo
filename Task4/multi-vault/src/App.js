import logo from './logo.svg';
import './App.css';
import Left from './Components/Left-Column/Left';
import Portfolio from './Components/Portfolio/Portfolio';
import Acounts from './Components/Acounts/Acounts';
import Settings from './Components/Settings/Settings';
import Send from './Components/Send/Send';
import Recieve from './Components/Recieve/Recieve';
import LoginPage from './Components/LoginPage/LoginPage';

function App() {
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
      <LoginPage isLogin = {true}/>
    </div>
  );
}

export default App;
