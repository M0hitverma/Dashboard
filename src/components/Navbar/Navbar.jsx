
import React from 'react'
import './NavbarStyle.css'
import { FaSearch, FaBell  } from "react-icons/fa";
import { RiMessage2Fill } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
const Navbar = () => {
  return (
    <div className='navbar-container'>
        <div className='navbar-left'>
            <div className='navbar-left-search'>Search</div>
            <div className='navbar-left-searchicon'><FaSearch /></div>
        </div>
        <div className='navbar-right'>
          <div><FaBell /></div>
          <div><RiMessage2Fill /></div>
          <div className='navbar-right-profile'>
            <div className='navbar-right-profile-dp'></div>
            <div className='navbar-right-profile-name'>Mohit Verma</div>
            <div><IoIosArrowDown /></div>
          </div>
        </div>
      
    </div>
  )
}

export default Navbar
