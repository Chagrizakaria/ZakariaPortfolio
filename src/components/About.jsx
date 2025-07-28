import React from 'react'
import {
    aboutimg
} from "../assets"
import CV from '../assets/data/CvZakaria.pdf';

const About = () => {
    return (
        <div id='About'className='grid place-content-center '>
                        <h1 className=' title flex justify-center  text-center text-sky-500 font-bold'>About </h1>
<div className=' img-mask mask-3  flex flex-col md:flex-row  md:max-w-4/12 lg:max-w-8/12 lg:mx-auto  '>
<img src={aboutimg} className=" w-6/12 max-md:w-full max-md:mx-auto " alt="" />
<div className='rtl'>
<div className=' respon-about-div text-center flex-col justify-center rounded-full bg-gray-800 items-center  p-16 max-sm:p-4 m-12 max-md:rounded-lg '>
    <p className='respon-about-p text-2xl text-white  font-serif mb-12'>
        Je suis un développeur full stack passionné, spécialisé dans la création de sites web avec React et Laravel. Récemment diplômé en développement digital, j'allie créativité et expertise technique pour concevoir des solutions innovantes et intuitives. Mon engagement envers l'excellence transparaît dans chaque ligne de code que j'écris.
    </p>
         <a className=' p-2 rounded-lg  bg-sky-200 text-black hover:bg-sky-500 hover:text-white  max-sm:text-sm' href={CV} download="CHAGRI.pdf" > Telecharger mon CV </a>
        
</div>
</div>



</div>
        
        </div>
    )
}

export default About 