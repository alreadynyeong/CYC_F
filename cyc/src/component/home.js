import React from 'react';
import logo from '../img/cyc_logo.png';

import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import '../css/App.css';

function Home() {
  return (
    <div className="App">
      <div className='logo'><img src={logo}  className="logoimg"/></div>
      <div className='select'>
        <div className='home_color'><Link to="color">Color</Link></div>
        <div className='home_cody'><Link to="cody">Cody</Link></div>
        <div className='home_closet'><Link to="closet">Closet</Link></div>
      </div>
    </div>
  );
}

export default Home;
