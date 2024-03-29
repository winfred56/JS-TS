import {motion, useMotionValueEvent, useScroll} from "framer-motion";
import {useEffect, useState} from "react";
export default function Navbar (){
    const {scrollY} = useScroll()
    const [hiddenNavbar, sethiddenNavbar] = useState(false)
    useMotionValueEvent(scrollY, "change", (latest) => {
        const prevScrollY = scrollY.getPrevious()
        if(latest > prevScrollY && latest > 250){
            sethiddenNavbar(true)
        }else {
            sethiddenNavbar(false)
        }
    })

    return (
        <motion.header variants={{
            visible: { y: 0},
            hidden: { y: "-100%"}
        }} animate={hiddenNavbar ? `hidden` : `visible`} transition={{duration:.5, ease:"easeInOut"}} className="bg-background sticky top-0 z-10 px-20 align-middle">
            <nav className="grid grid-flow-row-dense grid-cols-1 md:grid-cols-3 w-full">
                <div className="hidden md:block">
                    <ul className="flex gap-2 p-10 text-white text-xl font-body-text font-medium">
                        <li className="hover:bg-[#303030] rounded-lg p-4"><a href="#">How it Works</a></li>
                        <li className="hover:bg-[#303030] rounded-lg p-4"><a href="#">Pricing</a></li>
                        <li className="hover:bg-[#303030] rounded-lg p-4"><a href="#">FAQ</a></li>
                    </ul>
                </div>
                <div className="text-3xl font-bold text-white mt-5 md:mt-0 flex items-center font-Headings justify-center">
                   ACME Logo SVG
                </div>
                <div className="hidden md:flex text-white items-center justify-end">
                    <p className="border font-body-text text-xl border-[#343434] rounded-lg bg-[#181818] p-4">Press&#160;&#160;<span className="text-xl py-2 px-4 rounded-lg bg-[#303030]">B</span>&#160;&#160;to book a call</p>
                </div>
            </nav>
        </motion.header>
    )
}