import { navLinks } from '../constants';
import { pngegg4, Frame2, zakariasvg, dev, menu, close } from '../assets';
import { useState } from 'react'
import CV from '../assets/data/CVProfessionalZAKARIA.pdf';
const Navbar = () => {
  const [toggle, settoggle] = useState(false);

  return (
    <div className='navbar-portfolio bg-sky-100 pt-5 pb-5 pr-5 pl-5'>
      <div className='flex justify-between '>
        <ul>       <li>

          <a className="bg-black text-white hover:bg-sky-500 hover:text-black rounded-md py-2 px-3" href={`#${navLinks[0].id}`}>{navLinks[0].title}</a>
        </li> </ul>
        <ul className=" listnavbar  flex flex-shrink-0 items-end justify-center ml-auto">


          <li className="ml-auto">
            {navLinks.slice(1).map((nav, index) => (
              <a onClick={() => settoggle(!toggle)}  className="text-black hover:bg-white-700 hover:text-sky-500 rounded-md   px-5  font-medium" href={`#${nav.id}`} key={index}>{nav.title}</a>
            ))}
          </li>



        </ul>
        <div className="listnavbarphone  ml-auto">



          <a ><img className='w-8 cursor-pointer' src={toggle ? close : menu} alt="" onClick={() => settoggle(!toggle)} /></a>
          <div className="menuSM sidebar w-full  flex justify-center items-center bg-gradient-to-b from-sky-100 via-sky-300 to-sky-100 " style={{ display: toggle ? "flex" : "none" }}>
            <ul className=" ">
  
              <li className="ml-auto flex flex-col ">
                {navLinks.slice(1).map((nav, index) => (
                  <a onClick={() => settoggle(!toggle)}  className="text-black hover:bg-white-700 hover:text-sky-500 rounded-md text-3xl   px-5 my-2 font-medium" href={`#${nav.id}`} key={index}>{nav.title}  </a>
                ))}
              </li>
            </ul>
          </div>

        </div>


        <div >
        </div>



      </div>
    </div>
  )
}
export default Navbar
