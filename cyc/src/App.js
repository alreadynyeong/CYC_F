import React from 'react';
import logo from './cyc_logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='logo'> <img src={logo} className="App-logo" alt="logo" /></div>
      <div className='select'>
        <div className='color'>COLOR</div>
        <div className='closet'>CLOSET</div>
        <div className='cody'>CODY</div>
      </div>
    </div>
  );
}

export default App;
