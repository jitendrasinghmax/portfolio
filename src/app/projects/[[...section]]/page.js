'use client'

import projectData from "../../../../component/projectData"
import {According} from "../../../../component/According"
import Image from "next/image"


export default ()=>{
    return (
        <>
        <div className="px-5 my-7">
            {
                projectData.map((project,index1)=>{
                    return <section key={crypto.randomUUID()} id={index1}><div key={index1} className="">
                                {project.src&&<Image src={project.src} alt="" height={200} width={400} className="w-full sm:h-[300px] sm:w-[500px] mx-auto rounded-md shadow-[0_0_5px_rgb(0,0,0,0.5)]"/>}
                                <div className="mt-7">
                                    <div className="text-primary">{project.title}</div>
                                    <div></div>
                                </div>
                                <div className="text-secondary">{project.description}</div>
                                {
                                    project.items&&project.items.map((item,index2)=>{
                                        return <According key={index1+" "+index2} data={item}/>
                                    })
                                }
                           </div></section>
                })
            }
        </div>
        </>
    )
}