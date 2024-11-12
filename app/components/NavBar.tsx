import React from 'react'
import Image from 'next/image'
import logo from '@/public/Logo.png'
const NavBar = () => {
  return (
    <div className=' bg-[#043873] w-[1920px]  h-[92px]  py-[16px] px-[220px] flex justify-between items-center '>
      <div id="logocant" className='w-[191px] h-[34px] '>
      <Image src={logo} alt='logo' />
       </div>
      <div id='frame' className=' w-[737.5px] h-[60px] flex justify-between items-center'>
          <div id='nav-menu' className=' w-[549px] h-[23px]  '>
            <ul className='flex flex-row justify-between  text-[#FFFFFF] leading-[23px] '
            style={{fontFamily: "DM Sans" , fontSize:18, fontWeight:500}}>
              <li>Product</li>
              <li>Solution</li>
              <li>Resources</li>
              <li>Pricing</li>
            </ul>
          </div>
         <div> 
         <div id='btn' className=' w-[126px] h-[60px] '> 
          <button className='bg-[#FFE492] text-[#043873] rounded-lg py-[16px] px-[40px] gap-[10px]'>login</button>
         </div> 

          </div>
        </div>
    </div>
  )
}

export default NavBar
