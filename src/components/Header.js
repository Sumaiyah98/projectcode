import React, { useState, useEffect } from 'react'
import { Link, Navigate } from 'react-router-dom'
export default function Header() {

  const mystyle = {
        width: '100px',
        height: '100px',
      };
  
  return (
    <div className='flex flex-row w-full px-5 py-3 font-bold bg-[#8AA79C] text-white'>
        <div className='flex-initial w-2/6'>
          <div style={mystyle}><img src={require('./logo2.png')} /></div>
        </div>
        <div className='flex-1 flex-col'>
          <div className='m-2 mb-7'>
            <span className='text-2xl font-bold text-black'>Office Appointment Booking System</span>
          </div>
          <div className='flex items-between'>
            <div className='flex-1 hover:underline'><Link to={"/MakeAppointment"}>Booking online</Link></div>
            <div className='flex-1 hover:underline'><Link to = {"/FaqScreen"}>FAQs</Link></div>
            <div className='flex-1 hover:underline'><Link to={"/"}> About us</Link></div>
            <div className='flex-1 hover:underline'><Link to={"/"}> Customer Service</Link></div>
            {localStorage.getItem("currorg")?<div className='flex-1 hover:underline'><Link to = {"/org/chat"}>Message</Link></div>:null}
            
          </div>
        </div>
    </div>
  )
}

