import React from 'react'
import {MyProject} from '../constants';
import {projet} from "../assets"
const Projet = () => {
  function redirectToNewPage() {
    // Remplacez "URL_DE_LA_PAGE" par l'URL de la page vers laquelle vous souhaitez rediriger

}
  return (
    <div id='Projet'>
       {/* <img src={projet} alt="" className='Proj ' /> */}
       <h1 className=' title   text-center text-sky-500 font-bold'>Projet</h1>

      <div className='grid gap-4 grid-cols-2 max-sm:grid-cols-1 bg-repeat-y bg-center  '>
{
 MyProject.map((proj,index)=>(
   <div key={index} className=' grid justify-items-center  bg-sky-200   space-y-5 p-5  '>
   <h1 className='projtitle bg-gradient-to-r from-sky-200 via-sky-100 to-sky-200 font-bold  font-bold h-11	 w-72 max-sm:w-48 '>{proj.title}</h1>
   <img src={proj.image} onClick={()=> window.location.href =proj.url}  className=" h-60  max-lg:h-48 max-lg:w-80  cursor-pointer hover:scale-110 duration-300  w-4/6 rounded-lg   " alt="" />
    <div className='flex space-x-4 items-center'>
    <ul className='xl:w-96  max-md:w-70 max-md:h-full max-sm:w-full  text-center rounded-lg bg-gradient-to-r from-sky-400 via-sky-300 to-sky-400 font-bold  to-sky-200 px-6 py-4 '>
  {proj.content.map((ct,index)=> (
    <li key={index} className='list-disc '>{ct}</li>
    
  ))}
  <li className='flex justify-center  mt-2'>
{proj.teck.map((t)=><img src={t} className='h-16 max-lg:h-12 max-sm:h-10 mx-2 cursor-pointer  delay-150 hover:-translate-y-1 hover:scale-110  duration-150 ' alt="" />)}</li>
</ul>
    </div>


    <hr/>


 </div>
 
  ))
}
      </div>

      </div>
  )
}
export  default Projet
// ------------------------------------------------------
// import React from 'react'
// import {MyProject} from '../constants';
// import {projet} from "../assets"
// const Projet = () => {
//   return (
//     <div id='Projet'>
//        <img src={projet} alt="" className='Proj ' />
//       <div className='Projet  bg-repeat-y bg-center  '>
// {
//  MyProject.map((proj,index)=>( <div key={index} className='flex flex-wrap items-center justify-between  space-y-5 p-5 '>
//    <h1 className='projtitle bg-gradient-to-r from-orange-500 via-orange-200 to-orange-500 font-bold h-11	 w-72 '>{proj.title}</h1>
//     <img src={proj.image}  className=" cursor-pointer hover:scale-110 duration-300 h-60 w-2/6 rounded-lg   " alt="" />
//     <div className='flex space-x-4 items-center'>
//     <ul className='w-96 text-center rounded-lg bg-gradient-to-r from-orange-300 via-orange-100 to-orange-300 px-6 py-4'>
//   {proj.content.map((ct,index)=> (
//     <li key={index} className='list-disc '>{ct}</li>
//   ))}
// </ul>
   
//     <img className='h-20	w-20  delay-150 hover:-translate-y-1 hover:scale-110  duration-150' src={proj.pourcentage} alt="" />
//     </div>

//     <hr/>
//  </div>
 
//   ))
// }
//       </div>

//       </div>
//   )
// }
// export  default Projet