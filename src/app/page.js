'use client'
import { useMotionValueEvent, useScroll,motion, useAnimate } from 'motion/react'
import Projects from '../../component/projects';
import { useEffect, useState } from 'react';
import Desc from '../../component/desc';
import Marque from '../../component/marque';
import Blog from '../../component/blog';

const roles = [
  "Software Developer",
  "Web Developer",
  "UI/UX Designer",
  "Tech Blogger"
];


export default () => {
  const [role, setRole] = useState(0);
  const { scrollY } = useScroll();
  const [roleScope,roleAnimate]=useAnimate();

  useEffect(()=>{
    roleAnimate('p',
      {
        opacity: [0.5, 1],
        translateY: [10,0],
        filter: ['blur(4px)','blur(0px)']
      },
      { duration: 0.5 }
    )
  },[role])

  useEffect(()=>{
    const interval = setInterval(() => {
      setRole((prevRole) => (prevRole + 1) % roles.length);
    }, 2000)
    return () => clearInterval(interval);
  },[])

  return (
    <>
      <div className="pt-1">
        <div className='px-5'>
        <div className='flex'>
          <h1 className={`text-lg sm:text-4xl text-primary font-bold`}>Jitendra Singh</h1>
          <div ref={roleScope} className=' text-[10px] sm:text-lg mt-auto mb-2 ml-2 rounded-sm sm:rounded-md shadow-custom  overflow-hidden'><motion.p initial={{opacity:0.5}} animate={{opacity:1}} transition={{duration:0.3}} className='text-secondary px-2'>{roles[role]}</motion.p></div>
        </div>
        <Desc/>
        </div>
        <section id="project"><Projects /></section>
        <Marque/>
        <section id="blog"><Blog/></section>
      </div>
    </>
  )
}



