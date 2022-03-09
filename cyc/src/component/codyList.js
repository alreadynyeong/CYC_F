import React from 'react';
import logo from '../img/cyc_logo.png';
import '../css/codyList.css';

function ClosetList() {
  return (
    <div className="CodyList">
        <div className='header'><img src={logo}  className="headimg"/></div>
        <div className='add'>
            <input className='write'></input>
            <input type='submit' id='addBtn' name=''></input>
        </div><br></br><br></br><br></br>
        <div className='list'>
            <div className='content'>
                베이지 트렌치코트
                <div className='del'>...</div>
            </div><br></br>
        </div>
    </div>
  );
}

export default ClosetList;
