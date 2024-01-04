import React from 'react'
import {
  zakaria2,pngegg4,dev
} from "../assets"
import { useState } from 'react'
const Info = () => {

  const [toggle, settoggle] = useState(false);

  return (
    <div id='Home' >

      <div className='flex flex-col-reverse md:flex-row lg:max-w-8xl lg:mx-auto animation-zakaria '>

        <div className='mb-0  my-36 max-md:my-2'>
          <p className=' text-7xl	text-sky-500  text-center font-serif max-sm:text-5xl' >      Hello , I am Chagri Zakaria
          </p>
          <p className='  text-4xl	 p-2 text-center font-serif max-sm:text-3xl'>Developpeur Web Full Stack</p>

          <div className=' mt-6 flex justify-center mr-3 '>
            <ul> 
              <dl  className=' font-serif  text-xl'>Follow Me :</dl>
            <li  className='flex justify-center'>
          <a href="https://github.com/Chagrizakaria/" target="_blank"><svg class="w-[37px] h-[37px] mx-4 text-sky-500 dark:text-white hover:text-black " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd" />
          </svg></a>
          {/* <a href="https://www.facebook.com/zakaria.chagri.7/" target="_blank"><svg class="w-[37px] mx-4 h-[37px] text-sky-500 dark:text-white hover:text-black  " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
            <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd" />
          </svg></a> */}

          <a href="https://www.linkedin.com/in/zakaria-chagri-405aa8279/" target="_blank">    <svg class="w-[37px] mx-4 h-[37px] text-sky-500 dark:text-white hover:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 15">
            <path fill-rule="evenodd" d="M7.979 5v1.586a3.5 3.5 0 0 1 3.082-1.574C14.3 5.012 15 7.03 15 9.655V15h-3v-4.738c0-1.13-.229-2.584-1.995-2.584-1.713 0-2.005 1.23-2.005 2.5V15H5.009V5h2.97ZM3 2.487a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" clip-rule="evenodd" />
            <path d="M3 5.012H0V15h3V5.012Z" />
          </svg></a>
        </li>

      
            </ul>



    

      </div>
      <div className=' flex align-center justify-center' >
      <img  src={toggle ? pngegg4:dev} alt="" onClick={()=>settoggle(!toggle)}  className='cursor-pointer w-64 absolute max-lg:w-52 max-sm:w-52' />

      </div>

        </div >
        <div className='img-mask mask-2 mt-8 max-sm:mt-2'>
          <img src={zakaria2} alt="" className=' w-7/12	mx-auto	 cursor-pointer  delay-150 hover:-translate-y-1 hover:scale-110  duration-150 max-md:w-4/12 ' />
        </div>
{/*     
        <div className='flex align-items  space-x-4 '>

     

      

        </div> */}

      </div>


    </div>


  )
}
export default Info