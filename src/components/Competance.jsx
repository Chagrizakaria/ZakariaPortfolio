import React from 'react'
import { frontend,backend ,autre } from '../constants';
import {html,
  css ,
  javascript,
  react,
  bootstrap,
  php ,
  laravel,
   mysql ,
  mongodb,
  figma ,
   python,
  startuml ,
  trello } from "../assets"
 const Competance = () => {
  return (
    <div id='Competance' className='Competance flex flex-col' >
 <h1 className=' title mt-16 bg-sky-300 w-auto px-2 rounded-lg mx-auto text-center text-sky-500 font-bold'>Competance</h1>
  {/* <img src={competance } alt="" className='Comp' />     */}
  <div className=' flex flex-row justify-center  pb-20 '>
<div className='flex flex-col ml-24 mr-24 max-lg:mr-12 mt-12 max-lg:mt-4 max-sm:mx-2 grid justify-items-center '>
<h1 className='Comptitle h-10 w-36 mb-6  bg-gradient-to-r from-sky-200 via-sky-100 to-sky-200 xl:text-lg	max-lg:w-28 max-md:w-24 max-md:text-md  max-sm:w-16 max-sm:text-sm font-bold '>frontend</h1>

{
    frontend.map(function(a,key){
      return(
<div className='skill bg-sky-100 cursor-pointer mb-4 delay-150 hover:-translate-y-1 hover:scale-110  duration-150 '>
<img key={key} src={a.img} alt="" className='  h-16 max-lg:h-12 max-sm:h-8 max-sm:w-10' /> 

</div>)
      

    })
  }

<div>
  
</div>


</div>
<div className='flex flex-col mr-24 max-lg:mr-12 mt-12  max-lg:mt-4 max-sm:mx-2 grid justify-items-center'>
<h1 className='Comptitle h-10 w-36 mb-6 bg-gradient-to-r from-sky-200 via-sky-100 to-sky-200 xl:text-lg	max-lg:w-28 max-md:w-24 max-md:text-md max-sm:w-16 max-sm:text-sm  font-bold '>backend</h1>
{
    backend.map(function(a,key){
      return(
<div className='skill bg-sky-100 mb-4 cursor-pointer  delay-150 hover:-translate-y-1 hover:scale-110  duration-150 '>
<img key={key} src={a.img} alt=""  className=' w-18 h-14 max-lg:h-10 max-lg:w-12 max-sm:h-8 max-sm:w-10' /> 

</div>)
      

    })
  }
</div>
<div className='flex flex-col mr-24 max-lg:mr-12 mt-12 max-lg:mt-4 max-sm:mx-2 grid justify-items-center'>

<h1 className='Comptitle h-10 w-36  mb-6 bg-gradient-to-r from-sky-200 via-sky-100 to-sky-200 xl:text-lg	 max-lg:w-28 max-md:w-24 max-md:text-md  max-sm:w-16 max-sm:text-sm  font-bold '>autre</h1>
{
    autre.map(function(a,key){
      return(
<div className='skill bg-sky-100 cursor-pointer mb-4 delay-150 hover:-translate-y-1 hover:scale-110  duration-150 '>
<img key={key} src={a.img} alt=""  className='  w-24 max-lg:h-10 max-lg:w-12 max-sm:h-8 max-sm:w-10'/> 

</div> )
      

    })
  }

</div>
  </div>

    </div>
  )
}
 export default  Competance