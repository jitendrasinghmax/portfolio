'use client'
import { useState } from "react"
import { motion } from "motion/react"
export const According = ({ data }) => {
    const [show, setShow] = useState(false);
    return (
        <>
            <div className="w-full my-2">
                <div className="ml-5">
                    <div className="text-primary text-lg cursor-pointer flex justify-between" onClick={() => setShow((prev) => !prev)}>
                        <div className="flex"><div className="h-[1px] w-2 dark:bg-white bg-gray-600 mt-3"></div><div>{data.title}</div></div>
                        {data.items && <div style={{transform:show?"rotate(-45deg)":"rotate(45deg)"}} className="w-3 h-3 border-b-2 border-r-2 dark:border-b-amber-50 border-b-gray-600 dark:border-r-amber-50 border-r-gray-600 transition-all duration-300"></div>}
                    </div>
                    {
                       show&& <motion.div 
                            initial={{ height: 0, opacity: 0 ,filter:"blur(10px)"}}
                            animate={{ height: "auto", opacity: 1,filter:"blur(0px)" }}
                            transition={{ duration: 0.3 }}
                            style={{ overflow: "hidden" }}>
                            {data.description && <div className="ml-3 text-secondary flex">{data.description}</div>}
                            {
                                data.items && data.items.map((item, index) => {
                                    return <According key={index} data={item} />
                                })
                            }
                        </motion.div>
                    }
                </div>
            </div>
        </>
    )
}