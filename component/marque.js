import Marquee from "react-fast-marquee";
import { secondary } from "../lib/fonts";
import Image from "next/image";
import { useState } from "react";
import Tag from "./tag";

const reviews=[
    {
        name:"john",
        desc:"Great to work with, delivered on time.",
        src:"/review1.jpg"
    },
    {
        name:"doe",
        desc:"Highly professional and skilled developer.",
        src:"/review2.jpg"
    },
    {
        name:"smith",
        desc:"Exceeded our expectations in every way.",
        src:"/review3.webp"
    },
    {
        name:"jane",
        desc:"Creative solutions and excellent communication.",
        src:"/review4.jpg"
    },
    {
        name:"alice",
        desc:"Reliable and efficient, would hire again.",
        src:"/review5.webp"
    }
]

export default ()=>{
    return (
        <>
            <div className="w-full flex flex-col shadow-inner px-2 pt-2 pb-5">
                <div className="px-3"><Tag text="What clients say about me"/></div>
                <div className="w-full h-full mt-5 relative">
                                    <div
                                    className="w-full h-full z-5 absolute 
                                    bg-gradient-to-r
                                  dark:from-[rgb(61,60,60)] from-white from-[5%]
                                    via-transparent via-[50%]
                                 dark:to-[rgb(61,60,60)] to-white to-[95%]"></div>
                <Marquee speed={50}  className="w-full ">
                    {reviews.map((review,index)=>{
                        const {name,desc,src}=review;
                        return <Card name={name} desc={desc} src={src}/>
                    })}
                </Marquee>
                </div>
            </div>
        </>
    )
}

const Card=({name,desc,src})=>{
    return <div className="w-50 p-2 m-2 rounded-md shadow-custom flex flex-col">
        <div className="text-primary">{name}</div>
        <div className={`${secondary.className} text-secondary`}>{desc}</div>
        <div className=""><Image className="w-10 h-10 rounded-full object-cover object-center" src={src} alt="" height={50} width={50}/></div>
    </div>
}