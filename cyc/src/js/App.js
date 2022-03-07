import React from 'react';
import logo from '../img/cyc_logo.png';
// import './App.css';
import '../css/App.css';

function App() {
  return (
    <div className="App">
      <div className='logo'><img src={logo}  className="logoimg"/></div>
      <div className='select'>
        <div className='color'>COLOR</div>
        <div className='cody'>CODY</div>
        <div className='closet'>CLOSET</div>
      </div>
    </div>
  );
}

export default App;
