import {useEffect, useRef} from "react";
import {motion, useInView} from 'framer-motion'
import {type} from "@testing-library/user-event/dist/type";


export default function Animations(){
    const text1 = "Testing Animations"
    const ref = useRef(null)
    const isInView = useInView(ref, {amount:0.8, once:true})
    const defaultsAnimation = {
        hidden: {
            opacity: 0,
            y: 10
        },
        visible: {
            opacity: 1,
            y: 0,
            transition:{duration:1}
        }
    }
    return(
        <section className="text-white">
            <h1 className="text-7xl">
                <span className="sr-only">{text1}</span>
                <motion.span ref={ref} initial="hidden" animate={isInView ? "visible" : "hidden"} transition={{staggerChildren:0.1}} aria-hidden className="">
                    {text1.split(" ").map((word) => (
                        <span className="inline-block">
                            {word.split("").map((letter) => (<motion.span className="inline-block"
                                                                          variants={defaultsAnimation}>{letter}</motion.span>))}
                            <span className="">&nbsp;</span>
                        </span>
                    ))}

                </motion.span>
            </h1>
        </section>
    )
}

