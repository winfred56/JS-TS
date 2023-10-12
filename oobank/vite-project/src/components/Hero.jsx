import React from 'react';
import style from "../style.js";
import {discount, robot} from "../assets"
import GetStarted from "./GetStarted.jsx";

const Hero = () => (
    <section id="home" className={`flex md:flex-row flex-col ${style.paddingY}`}>
        <div className={`flex-1 ${style.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
            <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
                <img src={discount} alt="discount" className="w-[32px]"/>
                <p className={`${style.paragraph} ml-2`}>
                    <span className="text-white">20%</span> Discount For {" "}
                    <span className="text-white">1 Month</span> Account
                </p>
            </div>

            <div className="flex flex-row justify-between items-center w-full">
                <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
                    The Next <br className="sm:block hidden"/>{" "}
                    <span
                    className="text-gradient capitalize">generation</span>
                    {" "} </h1>
                <div className="ss:flex hidden md:mr-4 mr-0">
                    <GetStarted />
                </div>
            </div>
            <h1 className="font-poppins font-semibold ss:text-[68px] w-full text-[52px] text-white ss:leading-[100px] leading-[75px]">
            Payment Method
            </h1>
            <p className={`${style.paragraph} max-w-[470px] mt-5`}>Lorem ipsum, consectetur adipiscing elit. Vivamus id mattis ligula. Suspendisse potenti. In hac platea dictumst. Ut eget nibh ipsum. In ac elit vitae tellus ultrices facilisis. Curabitur sed vestibulum ex. Donec tincidunt leo diam, ut auctor augue dignissim ac. Vivamus et orci in nulla auctor blandit.</p>
        </div>
        <div className={`flex flex-1 ${style.flexCenter} md:my-0 my-10 relative`}>
            <img className="w-[100%] h-[100%] relative z-[5]" src={robot} alt="robot"/>
            <div className="absolute z-[1] w-[80%] h-[80%]  rounded-full bottom-40 white__gradient"></div>
            <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient"></div>
            <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient"></div>
        </div>
        <div className={`ss:hidden ${style.flexCenter}`}><GetStarted /></div>

    </section>
);

export default Hero