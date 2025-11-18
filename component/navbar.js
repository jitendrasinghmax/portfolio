'use client'
import { useMotionValueEvent, useScroll ,motion, useAnimate} from "motion/react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { useDarkMode } from "../hooks/useDark"


export default ()=>{
    const navItems=[
        {
            title:"projects",
            href:"/projects"
        },
        {
            title:"blog",
            href:"#blog"
        },
        {
            title:"about",
            href:"#about"
        }
    ]
    const {scrollY}=useScroll();
    const [scope,animate]=useAnimate();
    const [navWidth, setNavWidth] = useState("");
    const {isDark}=useDarkMode();
    useMotionValueEvent(scrollY,'change',(latest)=>{
        if(latest>20){
            setWidth(true);
            animate('#nav',{
                backdropFilter: "blur(7px)",
                borderRadius:"50px",
                boxShadow:isDark?"0 0 5px rgba(255,255,255,0.5)":"0 0 5px rgba(0,0,0,0.5)",
                translateY:"10px"
                },
            {
                duration:0.2
            })
         }
        else{
            setWidth();
             animate('#nav',{
                backdropFilter: "blur(0px)",
                boxShadow:"none",
                borderRadius:"50px",
                translateY:"-0px",
                },
                {
                    duration:0.2
                }
            )
        }
    })
    const setWidth = (scroll) =>{
        if(scroll===true){
            if(window.innerWidth>1280)setNavWidth("850px")
            else if(window.innerWidth>1024)setNavWidth("730px");
            else if(window.innerWidth>768)setNavWidth("680px");
            else setNavWidth("90%")
        }
        else{
            if(window.innerWidth>1280)setNavWidth("900px")
            else if(window.innerWidth>1024)setNavWidth("800px");
            else if(window.innerWidth>768)setNavWidth("700px");
        else setNavWidth("100%")
        }
    }
    
  // Detect screen width
  useEffect(() => {
    setWidth();
    window.addEventListener("resize", setWidth);
    return () => window.removeEventListener("resize", setWidth);
  }, []);
    return (
        <>
        <div ref={scope} className={`w-full fixed left-0  md:px-10 z-10`}>
            <div style={{width:navWidth,transition: "width 0.5s "}} className="mx-auto px-10">
            <motion.div id="nav" className={`h-12 sm:h-15 px-2  flex justify-between`}>
            <Link href='/' className="my-auto "><Image className="h-10 w-10 sm:h-13 sm:w-13 rounded-full shadow" src="/Avatar.png" alt="" height={50} width={50}/></Link>
            <div className="flex gap-x-1 sm:gap-x-4 items-center text-primary text-sm sm:text-md">
                {navItems.map((item,index)=><Link key={index} href={item.href}>{item.title}</Link>)}
            </div>
            </motion.div>
            </div>
        </div>
        </>
    )
}