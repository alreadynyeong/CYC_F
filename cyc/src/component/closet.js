import React from 'react';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import logo from '../img/cyc_logo.png';
import '../css/closet.css';

function Closet() {
  return (
    <div className="Closet">
        <div className='header'><Link to="/" ><img src={logo}  className="headimg"/></Link></div>
        <div className='cate'>
            <div className='outer'>아우터</div><br></br><br></br>
            <div className='top'>상의</div><br></br><br></br>
            <div className='bottom'>하의</div><br></br><br></br>
            <div className='onepiece'>원피스</div><br></br><br></br>
            <div className='shoes'>신발</div><br></br><br></br>
            <div className='acc'>악세서리</div>
        </div>
    </div>
  );
}

export default Closet;
