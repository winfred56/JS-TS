import Image from "next/image";
import Navbar from "@/components/Navbar";
import scope from "../../public/scope.svg"
import para_cloud from "../../public/para&cloud.svg"
import para from "../../public/para.svg"
import SearchFilters from "@/components/SearchFilters";
import VideoPlayer from "@/components/VideoPlayer";
import Link from "next/link";
import React from "react";
import {planYourFuture} from "@/res/PlanYourFuture";

export default function Home() {
    return (
        <main className="font-body-text">
            <header
                className={`hero-bg h-[22rem] sm:h-[35rem] xl:h-fit text-white font-body-text relative `}>
                <Navbar/>
                <div className={`hidden xl:block  w-full px-10 md:px-20 xl:px-10 2xl:px-80`}>
                    <h1 className="text-7xl font-bold pt-36">
                        Your future <br/> starts here
                    </h1>
                    <p className="hidden xl:block pt-10 text-2xl font-medium">
                        Apply to college for the first time or transfer to <br/>
                        complete your degree. Navigate your entire college <br/>
                        application journey with Common App.
                    </p>
                    <button
                        className="bg-white transition duration-300 ease-in-out mt-10 mb-52 text-black hover:bg-opacity-60 font-semibold px-6 py-3 rounded-full">
                        start your application
                    </button>
                </div>
            </header>
            {/*Mobile*/}
            <div className="xl:hidden w-full px-10 xl:px-10 md:px-20 2xl:px-80 text-black">
                <h1 className="text-3xl font-bold pt-8">
                    Your future <br/> starts here
                </h1>
                <p className="xl:hidden block pt-5 text-black font-medium">
                    Apply to college for the first time or transfer to
                    complete your degree. Navigate your entire college
                    application journey with Common App.
                </p>
                <button
                    className="bg-[#0b6dbd] mt-5 mb-16 text-white hover:bg-opacity-60 font-semibold px-6 py-3 rounded-full">
                    start your application
                </button>
            </div>
            <div className={`relative xl:mb-[36rem]`}>
                <div
                    className="bg-[#5acccc] px-10 xl:absolute -bottom-[28rem] xl:px-32 md:px-20 2xl:px-36 pt-10 xl:mx-10 2xl:mx-80">
                    <h2 className="font-extrabold w-full xl:flex xl:gap-10 text-2xl sm:pt-5 sm:text-3xl md:text-4xl lg:text-4xl">
                        Explore more than 1,000 colleges on Common App
                        <span className="hidden xl:flex">
                    <Image src={scope} className={`w-full`} alt={`telescope`}/>
                </span>
                    </h2>
                    <SearchFilters/>
                </div>
            </div>
            <div className={`px-10 text-black bg-[#f3f3f3] w-full py-20 md:py-48 xl:px-10 md:px-20 2xl:px-80`}>
                <VideoPlayer/>
            </div>
            <div
                className="bg-gradient-to-r from-[#2a77c6] to-[#5dc5df] w-full px-10  py-20 md:py-24 xl:px-10 md:px-20 2xl:px-80">

                <div className={`flex w-full flex-row items-center justify-between`}>
                    <h2 className="text-3xl text-white md:text-7xl font-body-text font-extrabold">
                        Plan your <br className={`md:hidden`}/>future
                    </h2>
                    <Image className={`hidden md:flex`} src={para_cloud} alt={`pic`}/>
                    <Image className={`flex flex-row md:hidden`} src={para} alt={`pic`}/>
                </div>
                <p className={`pt-5 text-white md:text-xl font-medium`}>
                    Get connected with everything you need to apply to <br/>
                    college, research financial aid and scholarships, and get <br className={`hidden md:block`}/>
                    advice from counselors, advisors and mentors.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-10 md:pt-16">
                {planYourFuture.map((plan) =>(
                    <div key={plan.title} className="bg-white w-full mb-5 p-5 md:p-10 ">
                        <Image src={plan.icon} alt={plan.title}/>
                        <div className="w-60 md:w-44 lg:w-64">
                            <h3 className="pt-5 hover:underline underline-offset-1 md:text-lg font-extrabold text-sm">
                                {plan.title}
                            </h3>
                                <hr className={`w-8 my-2 md:w-12 h-[5px] bg-black`}/>
                                <p className={`py-5`}>
                                    {plan.description}
                                </p>
                                <div className="flex items-center">
                                    <p className={`font-extrabold md:text-xs lg:text-base hover:underline underline-offset-1`}>
                                        <Link href={plan.linkAddress}>{plan.linkText}</Link>
                                    </p>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="items-center flex w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                    </svg>
                                </div>

                        </div>
                    </div>
                    ))}
                </div>
                {/*<div className="flex-row flex gap-4 pt-10 md:pt-16">*/}

                {/*    <div className="bg-white w-full p-10">*/}
                {/*        <Image src={icon_direction} alt={`icon`} />*/}
                {/*        <div className="w-56">*/}
                {/*            <h3 className="pt-5 hover:underline underline-offset-1 md:text-xl font-extrabold text-sm">*/}
                {/*                WHY COLLEGE <br className={`md:hidden`}/>MATTERS*/}
                {/*            </h3>*/}
                {/*            <hr className={`w-8 my-2 md:w-12 h-[5px] bg-black`}/>*/}
                {/*            <p className={`py-5`}>*/}
                {/*                College is worth it. Your future is worth it. You are worth it.*/}
                {/*            </p>*/}
                {/*            <div className="flex items-center">*/}
                {/*                <p className={`font-extrabold hover:underline underline-offset-1`}>*/}
                {/*                    <Link href={``}>Learn why college matters</Link>*/}
                {/*                </p>*/}
                {/*                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="items-center flex w-4 h-4">*/}
                {/*                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />*/}
                {/*                </svg>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>

        </main>
    )
}
