import React from 'react';
import logo from '../img/cyc_logo.png';
import '../css/cody.css';

function Cody() {
  return (
    <div className="Cody">
        <div className='header'><img src={logo}  className="headimg"/></div>
        <div className='month'>
            <div>1월</div>
            <div>2월</div><br></br>
            <div>3월</div>
            <div>4월</div><br></br>
            <div>5월</div>
            <div>6월</div><br></br>
            <div>7월</div>
            <div>8월</div><br></br>
            <div>9월</div>
            <div>10월</div><br></br>
            <div>11월</div>
            <div>12월</div><br></br>
        </div>
    </div>
  );
}

export default Cody;