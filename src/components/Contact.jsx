import React from 'react'
import {watsp,gmail} from "../assets"

 const Contact = () => {

  return (
    <div  id='contact' className='contact flex flex-col ' >

{/* <img src={contact} alt="" className='cont' /> */}

<h1 className='  title mt-16 bg-sky-300 w-auto px-2 rounded-lg mx-auto text-center text-sky-500 font-bold'>Contact</h1>
<div className=''>
<div className='flex items-center justify-between  bg-green-400 w-72 h-10 rounded mx-auto my-4'>
  <a href="https://wa.me/+212655605085" className='flex items-center text-white'>
    <img src={watsp} alt="" className='mx-2 w-11' />
    <span className=''>+212655605085</span>
  </a>
</div>

<div className='flex items-center justify-between bg-red-400 w-72 h-10 rounded mx-auto'>
  <a href="mailto:chagri.zakaria98@gmail.com" className='flex items-center  text-white'>
    <img src={gmail} alt="" className='mx-2 w-11' />
    <span>chagri.zakaria98@gmail.com</span>
  </a>
</div>
</div>


<div className='formulaire '>
  
<form action="https://formsubmit.co/zikochagr@gmail.com" method="POST" className='flex flex-col mt-8 mb-24 ' >

  <table >
    <tr>
      <td>
 
      <input type="text" name="name" required placeholder=' name'  className='block bg-sky-200 rounded-md mb-6 border-0 px-3 w-96 py-1.5 text-sky-600  shadow-sm  ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2  focus:ring-inset focus:ring-sky-200 sm:text-sm sm:leading-6 max-sm:w-72 mx-auto'/>
      </td>
      </tr>
      <tr>
      <td>
      <input type="email"  name="email" required placeholder=' email' className='block bg-sky-200 rounded-md mb-6 border-0 px-3 w-96 py-1.5 text-sky-600  shadow-sm  ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2  focus:ring-inset focus:ring-sky-200 sm:text-sm sm:leading-6 max-sm:w-72 mx-auto'/>

      </td>
      </tr>
      <tr>
        <td>
        <input type="text"  name='subject'required placeholder='subject'  className='block bg-sky-200 rounded-md mb-6 border-0 px-3 w-96 py-1.5 text-sky-600  shadow-sm  ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2  focus:ring-inset focus:ring-sky-200 sm:text-sm sm:leading-6  max-sm:w-72 mx-auto'/>

        </td>
      </tr>
  <tr>
    <td>
    <textarea  id="" cols="30" rows="10" name="message" required placeholder='message' className="block w-full mb-6 bg-sky-200  rounded-md border-0 px-3  py-1.5 text-sky-600  shadow-sm  ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2  focus:ring-inset focus:ring-sky-200  mx-auto sm:text-sm sm:leading-6 max-sm:w-72"></textarea>

    </td>
  </tr>
   
  <tr>
    <td className='flex justify-center mb-4'>
      
      <button type="submit"  className='text-white bg-sky-400 rounded-md w-24 py-1.5 hover:bg-sky-200 hover:text-black' > envoyez</button>
      <input type="hidden" name="_captcha" value="false"></input>
    </td>
  </tr>
  </table>
</form>

</div>

    </div>
  )
}
export default Contact