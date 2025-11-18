'use client'
import Image from "next/image";
import { useParams } from "next/navigation"
import blog from "../../../../component/blog";

const blogs = [
    {
        title: "React Development",
        src:"/react.webp",
        desc: "Tips and best practices for building applications with React.",
        topics: [
            {
                question: "How to learn React effectively?",
                answer: "React is a popular JavaScript library for building user interfaces. To learn React, start with the official documentation, follow tutorials, and build small projects to practice your skills. Begin with understanding components, props, and state management. Then move on to hooks, context API, and advanced concepts like code splitting and performance optimization. Practice by building real-world applications and contributing to open-source projects."
            },
            {
                question: "When should I use class components vs functional components?",
                answer: "Functional components with hooks are the modern recommended approach for most use cases. Class components are still supported but are generally used for legacy code. Choose functional components for simpler syntax, easier state and effect management, and better compatibility with newer React features."
            },
            {
                question: "How do hooks like useState and useEffect work?",
                answer: "useState lets you add local state to functional components; it returns the state value and a setter. useEffect runs side-effects (like fetching data or subscribing) after render; you can control when it runs by providing a dependency array. Clean up effects by returning a function from useEffect."
            },
            {
                question: "What are best practices for performance optimization in React?",
                answer: "Optimize by avoiding unnecessary re-renders (useMemo, useCallback, React.memo), code-splitting with dynamic imports, lazy loading components, and minimizing expensive operations in render. Profile with React DevTools and optimize heavy computations outside of render."
            }
        ]
    },
    {
        title: "Next.js Framework",
        src:"/next.jpg",
        desc: "A comprehensive guide to building server-rendered React applications with Next.js.",
        topics: [
            {
                question: "What is Next.js and its key features?",
                answer: "Next.js is a React framework that enables server-side rendering and static site generation. It simplifies the development of React applications by providing built-in features like routing, API routes, and optimized performance. Next.js offers features like automatic code splitting, image optimization, internationalization, and incremental static regeneration. It's widely used for building production-ready applications and is supported by Vercel with excellent documentation and community resources."
            },
            {
                question: "When should I use getStaticProps vs getServerSideProps?",
                answer: "Use getStaticProps for pages that can be generated at build time (static content) to get faster responses and caching. Use getServerSideProps when data must be fresh on every request (e.g., user-specific content or frequently-changing data)."
            },
            {
                question: "How does Next.js routing work with dynamic routes?",
                answer: "Next.js uses the file system for routing. Dynamic routes use bracket syntax (e.g., pages/posts/[id].js). You can fetch params via getStaticPaths/getStaticProps or via useRouter/useParams on the client to handle dynamic content."
            },
            {
                question: "What are API routes in Next.js and when to use them?",
                answer: "API routes let you create serverless endpoints inside the Next.js app (under pages/api or app/api). Use them for server-side logic like authentication, form handling, or proxying requests without setting up a separate backend."
            }
        ]
    },
    {
        title: "Animation with Framer Motion",
        src:"/motion.png",
        desc: "Learn how to create stunning animations in React applications using Framer Motion.",
        topics: [
            {
                question: "What is Framer Motion and how does it work?",
                answer: "Framer Motion is a powerful animation library for React that allows developers to create smooth and interactive animations with ease. It provides a simple API for animating components, gestures, and layout transitions. The library supports complex animations including drag-and-drop, pan gestures, and variants for orchestrating multiple animations. It also handles animation between different components and routes, making it perfect for creating engaging user experiences with minimal code."
            },
            {
                question: "What are motion variants and how to use them?",
                answer: "Variants are named animation states you define once and reuse across components. They let you coordinate animations for multiple elements by switching the variant prop. Define an object with states (e.g., hidden, visible) and pass it to motion components to animate predictably."
            },
            {
                question: "How do I animate layout changes smoothly?",
                answer: "Use the layout prop or the AnimatePresence component. layout enables automatic layout animations when the component's position or size changes. AnimatePresence handles enter/exit animations for conditionally rendered components."
            },
            {
                question: "How to optimize performance with Framer Motion?",
                answer: "Keep animations simple, prefer transforms over layout-thrashing styles, use will-change sparingly or GPU-accelerated properties, and limit the number of simultaneous animated elements. Use reduced motion preferences to respect user settings."
            }
        ]
    },
    {
        title: "DevOps Practices",
        src:"/cicd.avif",
        desc: "An introduction to DevOps principles and best practices for modern software development.",
        topics: [
            {
                question: "What is CI/CD and why is it important?",
                answer: "CI/CD stands for Continuous Integration and Continuous Deployment. It is a set of practices that automate the process of integrating code changes, testing, and deploying applications to production, ensuring faster and more reliable software delivery. CI involves automatically building and testing code changes when developers push updates, while CD automates the deployment process. Popular tools include Jenkins, GitHub Actions, and GitLab CI. This approach reduces manual errors, improves code quality, and speeds up the development lifecycle."
            },
            {
                question: "What is infrastructure as code (IaC)?",
                answer: "IaC is the practice of defining and managing infrastructure using machine-readable configuration files rather than manual processes. Tools like Terraform, CloudFormation, and Pulumi enable versioning, testing, and automation of infrastructure provisioning."
            },
            {
                question: "How do monitoring and observability differ?",
                answer: "Monitoring collects metrics and alerts on known issues, while observability provides deeper insight into system behavior through logs, traces, and metrics to help you understand unknown failures. Observability enables faster root cause analysis and proactive improvements."
            },
            {
                question: "What are common strategies for deployments?",
                answer: "Common deployment strategies include blue-green, canary, and rolling deployments. Blue-green switches traffic between two identical environments, canary releases expose changes to a subset of users, and rolling deployments update instances gradually to minimize downtime and risk."
            }
        ]
    }
]



export default ()=>{
    const {id}=useParams();
    return (
        <>
        <div className="pt-20">
            <div className="flex flex-col justify-center items-center">
                <Image className="object-center object-center rounded-lg shadow-[0_0_8px_rgba(0,0,0,0.5)] dark:shadow-[0_0_10px_rgba(255,255,255,0.5)]" src={blogs[id].src} alt="" height={500} width={600}></Image>
                <p className="text-primary text-2xl mt-4">{blogs[id].title}</p>
                <p className="text-secondary">{blogs[id].desc}</p>
            </div>
            <div className="mt-5 flex flex-col gap-y-5">
                {
                    blogs[id].topics.map((topics,index)=>{
                        return <div key={index}>
                            <div className="text-primery text-lg font-bold">{topics.question}</div>
                            <div className="text-secondary">{topics.answer}</div>
                        </div>
                    })
                }
            </div>
        </div>
        </>
    )
}