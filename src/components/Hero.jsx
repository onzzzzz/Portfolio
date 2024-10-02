import { motion } from 'framer-motion';

import { styles } from '../styles';

import { ComputersCanvas, EarthCanvas } from './canvas';


// import { useRef } from 'react';
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(useGSAP,ScrollTrigger);



const Hero = () => {

  

  

  return (
    <section
    
    className="relative w-full h-screen  mx-auto "
    >
      <div className={`${styles.paddingX}   absolute inset-0 top-[120px] max-w-7x1 mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#AEFD71]'/>
          <div className='w-1 sm:h-80 h-40 bg-[#AEFD71]'/>
        </div>
        <div >
          <h1 className={`${styles.heroHeadText} text-secondary box2`}>
            Hi, I'm <span className='text-[#AEFD71] '>Nina Tche </span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-secondary`}>
            I develop React and <br  className='sm:block hidden'/> Three.js Web applications.
          </p>
        </div>
       
      </div>

      
      <div className="flex justify-center items-center h-screen w-screen z-99">
        
          {/* <EarthCanvas /> */}
        
      </div>
      
      
    </section>
  )
}

export default Hero