import Link from "next/link"
import desc from "./desc"
import Tag from "./tag"
import { useAnimate, motion } from "motion/react"
import { useState } from "react"

const blogs = [
    {
        title: "How to learn React",
        desc: "A beginner's guide to getting started with React development"
    },
    {
        title: "nextjs",
        desc: "Understanding the basics of Next.js framework"
    },
    {
        title: "framer motion",
        desc: "Create smooth animations with Framer Motion library"
    },
    {
        title: "CI/CD",
        desc: "Introduction to Continuous Integration and Deployment"
    }
]

export default () => {
    const [onHover, setOnHover] = useState(false)
    const [scope, animate] = useAnimate();

    return (
        <>
            <div className="shadow-inner p-5">
                <div className="mt-3">
                    <Tag text="Blog Posts" />
                </div>
                <div ref={scope} className="shadow-inner-left-right p-5 flex flex-col gap-y-5">
                    {
                        blogs.map((item, index) => {
                            const startAnimation = () => {
                                animate(`#container-${index}`,
                                    { translateX: 10 },
                                    { duration: 0.2 }
                                )
                            }
                            const stopAnimation = () => {
                                animate(`#container-${index}`,
                                    { translateX: 0 },
                                    { duration: 0.2 }
                                )
                            }
                            return <motion.div key={index} onMouseEnter={startAnimation} onMouseLeave={stopAnimation} className="flex justify-between">
                                <Link href={`/blog/${index}`}>
                                    <motion.div id={`container-${index}`} className="text-primary text-lg font-extrabold ">{item.title}</motion.div>
                                    <div className="text-secondary">{item.desc}</div>
                                </Link>
                                <div className="text-secondary mt-auto">26 jan 2025</div>
                            </motion.div>
                        })
                    }
                </div>
            </div>
        </>
    )
}