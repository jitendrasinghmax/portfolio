import {motion, stagger} from 'motion/react';
import { secondary } from '../lib/fonts';

const desc="Hello! I'm Jane, a conversion-focused copywriter specializing in landing pages and sales emails for B2B tech brands. My campaigns have helped startups increase email open rates by up to 40% and boost lead generation year-on-year. I focus on turning complex concepts into engaging, results-driven content. Feel free to reach out if you're interested in elevating your content!";

export default ()=>{
    const variants={
        hidden:{},
        visible:{
            transition:{
                staggerChildren:0.010
            }
        }
    }
    const childVeriants={
        hidden:{scale:1,opacity:0,translateY:10,filter:"blur(10px)",display:"none"},
        visible:{opacity:1,translateY:0,filter:"blur(0px)",display:"block"}
    }

    return <motion.div variants={variants} initial="hidden" animate="visible" className='flex flex-wrap pt-5'>{desc.split(' ').map((item,index)=><motion.span key={index} 
                                                                                                 variants={childVeriants}
                                                                                                 
                                                                                                 whileHover={{scale:1.1}} 
                                                                                                
                                                                                                 transition={{duration:0.2}} 
                                                                                                 className={`${secondary.className} text-secondary text-sm sm:text-lg`}>{item}&nbsp;</motion.span>)}</motion.div>
}