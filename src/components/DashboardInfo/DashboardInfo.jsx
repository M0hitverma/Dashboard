
import React from 'react'
import './DashboardInfoStyle.css'
import { IoIosArrowDown } from "react-icons/io";
import { BsPinAngleFill } from "react-icons/bs";
import { HiDotsHorizontal } from "react-icons/hi";
export const DashboardInfo = () => {
  return (
    <div className='dashboardinfo-div'>
    <div className='dashboardinfo-heading'>Dashboard</div>

    <div className="dashboard" >  
    
      <div className='dashboard-left'>

        <div className='dashboard-left-top'>
           <div className='top-card'>
            <p>Available Position</p>
            <p className=' text-3xl'>24</p>
            <p className='text-xs  text-orange-600'>4 Urgent needed</p>
           </div>
           <div className='top-card'>
           <p>Jop Open</p>
            <p className=' text-3xl'>10</p>
            <p className='text-xs  text-blue-600' >4 Active hiring</p>
           </div>
           <div className='top-card'>
           <p>New Employee</p>
            <p className=' text-3xl'>24</p>
            <p className='text-xs  text-pink-600' >4 Department</p>
           </div>
        </div>
        <div className='dashboard-left-middle'> 
           
           <div className='middle-card'>
           <p>Available Position</p>
            <p className=' text-4xl'>216</p>
            <p className='text-xs font-light '>120 Men <br/>96 Women </p>
           </div>

           <div className='middle-card'>
           <p>Talent request</p>
            <p className=' text-4xl'>16</p>
            <p className='text-xs font-light'>1 Men <br/> 10 Women</p>
           </div>
            
        </div>
        <div className='dashboard-left-bottom'>

        <div className='dashboard-left-bottom-heading'>
            <p className=' font-semibold'>Announcement</p> 
            <div className='dashboard-left-bottom-heading2'>
                <p>Today, 2 Feb 2024</p>
            <IoIosArrowDown />
            </div>
         </div>
       
        <div className='dashboard-left-bottom-card' >

          <div>
            <h1 className='text-sm'>Outing Schedule for every department</h1>
            <p className='text-xs'>5 monts ago</p>
          </div>

           <div className='flex flex-row gap-5 p-3 text-lg'>
        <BsPinAngleFill />
        <HiDotsHorizontal />
           </div>

        </div>

        <div className='dashboard-left-bottom-card' >

          <div>
            <h1 className='text-sm'>Outing Schedule for every department</h1>
            <p className='text-xs'>5 monts ago</p>
          </div>

        <div className='flex flex-row gap-5 p-3 text-lg'>
        <BsPinAngleFill />
        <HiDotsHorizontal />
        </div>

        </div>

        <div className='dashboard-left-bottom-card' >

          <div>
            <h1 className='text-sm'>Outing Schedule for every department</h1>
            <p className='text-xs'>5 monts ago</p>
          </div>

           <div className='flex flex-row gap-5 p-3 text-lg'>
        <BsPinAngleFill />
        <HiDotsHorizontal />
           </div>

        </div>
        <div className='announcement'>
        See all Accouncement
      </div>
        </div>
 
      </div>


      <div className='dashboard-right'>

       <div className='dashboard-right-top'>
         <h1>Recently Activity</h1>
         <div>
            <p>10.40 AM, Fri 10 Sept 2021</p>
            <p>You Posted a New Job</p>
            <p>Kindly check the requirements and terms of work and make sure every thing is right.</p>

         </div>
         <div>
          <h1>Today, You makes 12 Activity</h1>
          <button type="button">See All Activity</button>
         </div>
       </div>

       <div className='dashboard-right-bottom'>
        

        <div className='dashboard-left-bottom-heading'>
            <p className=' font-semibold'>Upcoming Schedule</p> 
            <div className='dashboard-left-bottom-heading2'>
                <p>Today, 2 Feb 2024</p>
            <IoIosArrowDown />
            </div>
         </div>
        <>
        <div className=' w-[90%] opacity-55'>Priority</div>
        <div className='dashboard-left-bottom-card' >

          <div className='flex flex-col gap-1'>
            <h1 className='text-sm'>Review candidate application</h1>
            <p className='text-xs font-light'>Today-11.30 AM</p>
          </div>

           <div className='flex flex-row gap-5 p-3 text-lg'>
        <HiDotsHorizontal />
           </div>

        </div>
        </>
        <>
        <div className=' w-[90%] opacity-55'>other</div>
        <div className='dashboard-left-bottom-card' >
          
          <div className='flex flex-col gap-1'>
            <h1 className='text-sm'>Interview with candidates</h1>
            <p className='text-xs font-light'>Today-10.30 AM</p>
          </div>

        <div className='flex flex-row gap-5 p-3 text-lg'>

        <HiDotsHorizontal />
        </div>

        </div>
        </>

        <div className='dashboard-left-bottom-card' >

          <div className='flex flex-col gap-1'>
            <h1 className='text-sm'>Short meeting with product designer from IT Department</h1>
            <p className='text-xs  font-light'>Today-9.50 AM</p>
          </div>

           <div className='flex flex-row gap-5 p-3 text-lg'>

        <HiDotsHorizontal />
           </div>

        </div>
        <div className='announcement'>
        Create a New Schedule
      </div>
        </div>
  
      
      </div>

      </div> 
    </div>
  )
}
