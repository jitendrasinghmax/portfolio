'use client'

import Image from "next/image";
import { motion, useAnimate } from "motion/react"
import Tag from "./tag";
import Link from "next/link";

export default () => {
    const projects = [
        {
            title: "Vercel",
            src: "/vercel.png",
            description: "A platform for deploying modern web applications with ease, featuring serverless functions and global edge network."
        },
        {
            title: "Loveable",
            src: "/loveable.png",
            description: "A social platform built to share and connect through short posts and stories, focusing on clean UI and smooth interactions."
        },
        {
            title: "Udemy",
            src: "/udemy.png",
            description: "An online learning platform clone that allows users to browse, purchase, and enroll in various courses."
        }
    ];

    const variants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.1
            }
        }
    }

    return (
        <>
            <div className="p-5 mt-5 shadow-inner">
                <Tag text="I love building things"/>
                <motion.div variants={variants} initial="hidden" animate="visible" className="grid sm:grid-cols-2 xl:grid-cols-3 gap-2 ">
                    {
                        projects.map(({ title, src, description }, index) => {
                            return <Link  href={`/projects#${index}`}><Card key={index} title={title} src={src} description={description} /></Link>
                        })
                    }
                </motion.div>
            </div>
        </>
    )
}


const Card = ({ title, src, description }) => {
    const [scope, animate] = useAnimate();
    const startAnimation = () => {
        animate('#imgContainer',
            { scale: 1.1 },
            { duration: 0.2 }
        )
        animate(".headding",
            { translateX: 20 },
            { duration: 0.2 }
        )
    }
    const stopAnimation = () => {
        animate('#imgContainer',
            { scale: 1 },
            { duration: 0.2 }
        )
        animate(".headding",
            { translateX: 0 },
            { duration: 0.2 }
        )
    }
    const variants={
        hidden:{opacity:0,translateY:10,filter:"blur(10px)", borderWidth: 1, borderColor: "rgba(255,255,255,0)"},
        visible:{opacity:1,translateY:0,filter:"blur(0px)"}
    }
    return (
        <>
            <motion.div ref={scope}
                variants={variants}
                onMouseEnter={startAnimation}
                onMouseLeave={stopAnimation}
                whileHover={{ borderWidth: 1, borderColor: "rgba(255,255,255,0.2)" }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="rounded-md md:px-5">
                <motion.div id="imgContainer" className=""><Image className="h-full w-full rounded-lg" src={src} alt="" height={200} width={200} /></motion.div>
                <div className="headding text-primary mt-3">{title}</div>
                <div className="headding text-secondary ">{description}</div>
            </motion.div>
        </>
    )
}