
import {
  Navbar,
  Competance,
  Experience,
 About,
  Info,
  Projet, Footer ,Contact,Formations
} from './components';
export default function App() {
  return (
  <div className="all  bg-gradient-to-b from-sky-100 via-sky-300 to-sky-100  ">
    <div className="Navbar ">
  <Navbar />

</div>
    <div  >
  <div className='mb-72 pt-20 '><Info  /> </div> 
  <div className='mb-24 '><  Competance /></div>
  <div className='mb-24'> <About /> </div>

 <div className='mb-24 '> <  Projet  /></div>
  <Contact/>

    </div>
    <div  >
< Footer />
    </div>
  </div>

  )
}