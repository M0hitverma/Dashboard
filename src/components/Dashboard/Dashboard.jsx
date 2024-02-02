
import React from 'react'
import './DashboardStyle.css'
import Image from 'next/image';
import { MdDashboard, MdPersonAddAlt1 } from "react-icons/md";
import { GrFormSchedule } from "react-icons/gr";
import { BsPersonSquare } from "react-icons/bs";
import { TbCirclesFilled } from "react-icons/tb";
import { IoMdSettings } from "react-icons/io";
import { BiSupport } from "react-icons/bi";
import logo from '@/assets/logo.png'
import Navbar from '../Navbar/Navbar';
import { DashboardInfo } from '../DashboardInfo/DashboardInfo';
export const Dashboard = () => {
  return (
    <div className='main-div'>
     
     <div className='left-div'>
        <div className='left-title'>
              <div className='flex flex-row gap-2  items-center justify-center'>
                <div className='left-title-icon'><Image src={logo} alt="Image" /></div>
                <h1 className='left-title-text'>Vasitum</h1>
              </div>
        </div>

        <div className='left-mainmenu'>
            <h1> MAIN MENU</h1>
            <ul className='left-mainmenu-list-continer'>
                <li>
                    <div className='left-mainmenu-icon'><MdDashboard /></div>
                    <div className='left-mainmenu-text'>Dashboard</div>
                </li>
                <li>
                    <div className='left-mainmenu-icon'><MdPersonAddAlt1 /></div>
                    <div className='left-mainmenu-text'>Recuritment</div>
                </li>
                <li>
                    <div className='left-mainmenu-icon'><GrFormSchedule /></div>
                    <div className='left-mainmenu-text'>Schedule</div>
                </li>
                <li>
                    <div className='left-mainmenu-icon'><BsPersonSquare /></div>
                    <div className='left-mainmenu-text'>Employe</div>
                </li>
                <li>
                    <div className='left-mainmenu-icon'><TbCirclesFilled /></div>
                    <div className='left-mainmenu-text'>Department</div>
                </li>
            </ul>

        </div>

        <div className='left-mainmenu'>
         <h1>OTHER</h1>
            <ul className='left-mainmenu-list-continer'>
                <li>
                    <div className='left-mainmenu-icon'><BiSupport /></div>
                    <div className='left-mainmenu-text'>Support</div>
                </li>
                <li>
                    <div className='left-mainmenu-icon'><IoMdSettings /></div>
                    <div className='left-mainmenu-text'>Setting</div>
                </li>
                </ul>

        </div>

     </div>

     <div className='right-div'>

        <div className='navbar-div'>
            <Navbar/>
        </div>
        <div className='right-div-bottom'></div>
      <DashboardInfo/>
     </div>


    </div>
  )
}
