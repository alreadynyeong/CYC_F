import React from 'react';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import logo from '../img/cyc_logo.png';
import '../css/closetList.css';

function ClosetList() {
  return (
    <div className="ClosetList">
        <div className='header'><Link to="/" ><img src={logo}  className="headimg"/></Link></div>
        <div className='add'>
            <input className='write'></input>
            <input type='submit' id='addBtn' name=''></input>
        </div><br></br><br></br><br></br>
        <div className='list'>
            <div className='content'>
                베이지 트렌치코트
                <div className='del'>...</div>
            </div><br></br>
            <div className='content'>
                검정색 후리스
                <div className='del'>...</div>
            </div><br></br>
            <div className='content'>
                베이지 트렌치코트
                <div className='del'>...</div>
            </div><br></br>
            <div className='content'>
                검정색 후리스
                <div className='del'>...</div>
            </div><br></br>
            <div className='content'>
                베이지 트렌치코트
                <div className='del'>...</div>
            </div><br></br>
            <div className='content'>
                검정색 후리스
                <div className='del'>...</div>
            </div><br></br>
            <div className='content'>
                베이지 트렌치코트
                <div className='del'>...</div>
            </div><br></br>
            <div className='content'>
                검정색 후리스
                <div className='del'>...</div>
            </div><br></br>
            <div className='content'>
                체크무늬 겨울 코트
                <div className='del'>...</div>
            </div>
        </div>
    </div>
  );
}

export default ClosetList;
