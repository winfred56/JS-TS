import randomScribble from "./../assets/random-scribble.svg"
import smileEmoji from "./../assets/smile-scribble.svg";
import one from "./../assets/1.svg"
import arrow from "./../assets/arrow-scribble.svg"
import two from "./../assets/2.svg"
import three from "./../assets/3.svg"
import {useRef} from "react"
import {motion, useScroll, useTransform} from "framer-motion";

export default function Precess() {
    const ref = useRef(null)
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1.5"],
        amount: {once: true}
    })
    const scaleProgress = useTransform(scrollYProgress, [0,1], [0.9,1])
    return (
        <motion.div ref={ref} style={{
            opacity: scrollYProgress,
            scale: scaleProgress,
        }}
             className="bg-background text-center text-sm md:text-base pt-10 md:pt-20 px-5 text-body-text">
            <div className="rounded-lg mx:5 md:mx-20 bg-gradient-to-b from-[#191919] to-[#131313]">
                <p className="font-body-text text-body-text py-5 md:py-10">HOW IT WORKS</p>
                <div className="flex flex-row items-center text-center justify-center space-x-5">
                    <h2 className="font-bold font-Headings text-white text-2xl md:text-7xl relative">
                        Supafast,
                        <span className="">&#160;Supaeasy</span>
                        <img alt="scribble" loading="eager" width="280" height="50" decoding="async" data-nimg="1" className="absolute right-0 z-10 w-[100px] lg:w-[160px] xl:w-[280px]" src={randomScribble} />
                    </h2>
                    <img alt="scribble" loading="eager" width="50" height="50" decoding="async" data-nimg="1" className="w-[30px] lg:w-[50px] hidden md:flex" src={smileEmoji} />
                </div>
                <div className="pt-10 lg:pt-20 flex flex-col pb-20 space-y-16 lg:space-y-0 lg:flex-row items-center justify-center space-x-0">
                    <div className="relative flex flex-col items-center w-full">
                        <img className="" alt="" src={one} />
                        <div className="absolute bottom-[-40px] flex flex-col items-center space-y-2 justify-center p-2">
                            <span className="text-white font-Headings font-medium text-2xl md:text-5xl ">Design</span>
                            <span className="">Submit as many requests as you want. Get your first design concept in 24 hours.</span>
                        </div>
                    </div>
                    <img className="rotate-90 md:rotate-0 md:mx-20" src={arrow} alt=""/>
                    <div className="relative flex flex-col items-center w-full">
                        <img className="" alt="" src={two} />
                        <div className="absolute bottom-[-40px] flex flex-col items-center space-y-2 justify-center p-2">
                            <span className="text-white font-Headings font-medium text-2xl md:text-5xl ">Develop</span>
                            <span className="">Your dedicated design engineer will bring your design to life using the latest technologies.</span>
                        </div>
                    </div>
                    <img className="rotate-90 md:rotate-0 md:mx-20" src={arrow} alt=""/>
                    <div className="relative flex flex-col items-center w-full">
                        <img className="" alt="" src={three} />
                        <div className="absolute bottom-[-40px] flex flex-col items-center space-y-2 justify-center p-2">
                            <span className="text-white font-Headings font-medium text-2xl md:text-5xl ">Product</span>
                            <span className="">Once approved, we launch your project and watch your vision come to life.</span>
                        </div>
                    </div>
                </div>
                <button type="button" className="rounded-lg bg-white p-3.5 lg:p-4 px-10 lg:px-16 text-md lg:text-lg font-bold text-black tracking-tight cursor-pointer hover:scale-105 transition duration-300 ease-out my-10 md:my-20">Get started today</button>

            </div>
        </motion.div>
    )
}

