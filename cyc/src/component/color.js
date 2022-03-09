import React from 'react';
import logo from '../img/cyc_logo.png';
import '../css/color.css';

function Color() {
  return (
    <div className="Color">
        <div className='header'><img src={logo}  className="headimg"/></div>
        <div className='choice'>
            <div style={{backgroundColor: "red"}}></div>
            <div style={{backgroundColor: "white"}}></div><br></br>
            <div style={{backgroundColor: "gray"}}></div>
            <div style={{backgroundColor: "yellow"}}></div><br></br>
            <div style={{backgroundColor: "blue"}}></div>
            <div style={{backgroundColor: "green"}}></div><br></br>
            <div style={{backgroundColor: "black"}}></div>
            <div style={{backgroundColor: "purple"}}></div><br></br>
            
        </div>
    </div>
  );
}

export default Color;