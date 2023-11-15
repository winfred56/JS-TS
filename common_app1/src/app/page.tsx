import Image from "next/image";
import Navbar from "@/components/Navbar";
import scope from "../../public/scope.svg"
import para_cloud from "../../public/para&cloud.svg"
import book from "../../public/icon-book-sun.svg"
import para from "../../public/para.svg"
import institution from "../../public/icon-institution.svg"
import owl from "../../public/icon-owl.svg"
import young from "../../public/young-man-military-student_0.jpg"
import create_account from "../../public/create-an-account.png"
import city_person from "../../public/city-year-street-with-person-in-jacket.jpg"
import asian from "../../public/asian-student-woman.jpg"
import SearchFilters from "@/components/SearchFilters";
import VideoPlayer from "@/components/VideoPlayer";
import Link from "next/link";
import React from "react";
import {planYourFuture} from "@/res/PlanYourFuture";
import Footer from "@/components/Footer";

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
            <div className={`px-10 text-black bg-[#f3f3f3] w-full py-20 md:py-36 xl:px-10 md:px-20 2xl:px-80`}>
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
                                <Link  href={plan.linkAddress}>{plan.title}</Link>
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
            </div>

            <div className="md:mx-auto flex my-10 md:my-20 mx-10 items-center justify-center">
                <div className="bg-gradient-to-r from-[#84d79c] via-[#c4e271] to-[#27c7db] p-3">
                    <div className="w-full  p-5 md:p-10  bg-white">
                        <div className={`flex items-start justify-center gap-5 lg:gap-16 xl:gap-48 md:flex-row flex-col-reverse`}>
                            <h1 className="text-xl md:text-4xl font-extrabold text-black">
                                Your complete college<br/>
                                application guide
                                <span>
                                    <hr className={`w-8 mt-5 md:w-12 h-[5px] bg-black`}/>
                                </span>
                            </h1>
                            <Image src={book} alt={`book icon`}/>
                        </div>
                        <p className={`py-5 font-medium w-fit md:w-96`}>
                            It’s go time — and we’ll be with you every step of the way.
                            Here’s where you’ll find what you need to take that next step towards a brighter future.
                        </p>
                        <div className={`mt-5 md:my-10 flex flex-col md:flex-row gap-4`}>
                            <button type="button" className={`bg-black text-sm md:text-base text-white transition duration-300 ease-in-out hover:bg-opacity-60 font-semibold px-6 py-3 rounded-full`}>
                                <Link href={`/apply/first-year-students`}>First-year student guide</Link>
                            </button>
                            <button type="button" className={`bg-black text-sm md:text-base  text-white transition duration-300 ease-in-out hover:bg-opacity-60 font-semibold px-6 py-3 rounded-full`}>
                                <Link href={`/apply/transfer-students`}>Transfer student guide</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/*Blog*/}
            <div className={`text-black bg-[#f3f3f3] main-container`}>
                <h2 className={`text-black font-extrabold text-xl md:text-6xl`}>Blog</h2>
                <div className={`md:flex flex-row gap-4`}>
                    <div className={`py-5 md:py-10 relative flex flex-col justify-between`}>
                        <div className={`bg-white h-96 md:h-[26rem] w-52 md:w-64 lg:w-fit`}>
                            <Image src={young} className={`w-full object-cover`} height={250} alt={``}/>
                            <h3 className={`p-5 font-bold w-40 md:w-52 lg:w-80 md:text-lg hover:underline underline-offset-1`}>Common App announces partnership with DOD MilGears </h3>
                            <p className={`p-5 absolute bottom-5 md:bottom-10 text-gray-500`}>November 03, 2023</p>
                        </div>
                    </div>
                    <div className={`py-5 md:py-10 relative flex flex-col justify-between`}>
                        <div className={`bg-white h-96 md:h-[26rem] w-52 md:w-fit`}>
                            <Image src={asian} className={`w-full object-cover`} height={250} alt={``}/>
                            <h3 className={`p-5 font-bold w-40 md:w-80 md:text-lg hover:underline underline-offset-1`}>Direct admissions program with 70 colleges and universities</h3>
                            <p className={`p-5 absolute bottom-5 md:bottom-10 text-gray-500`}>November 03, 2023</p>
                        </div>
                    </div>
                    <div className={`py-5 relative md:py-10 flex flex-col justify-between`}>
                        <div className={`bg-white w-52 h-96 md:h-[26rem] md:w-fit`}>
                            <Image src={city_person} className={`object-cover`} height={250} alt={``}/>
                            <h3 className={`p-5 font-bold w-40 md:w-80 md:text-lg hover:underline underline-offset-1`}>You can now apply to City Year on the Common App</h3>
                            <p className={`p-5 absolute bottom-5 md:bottom-10 text-gray-500`}>October 25, 2023</p>
                        </div>
                    </div>
                </div>
                <div className={`flex items-center justify-center py-5`}>
                    <button type="button" className={`bg-[#0B6DBD] text-sm md:text-base text-white transition duration-300 ease-in-out hover:bg-opacity-60 font-semibold px-6 py-3 rounded-full`}>
                        <Link href={`/blog`}>Transfer student guide</Link>
                    </button>
                </div>
            </div>
            <div className={`main-container flex flex-col gap-4 md:w-fit md:mx-auto lg:flex-row`}>
                <div className={`bg-gradient-to-r from-[#84d79c] via-[#c4e271] to-[#27c7db] lg:h-96 p-4`}>
                    <div className={`bg-white lg:h-[22rem] p-4`}>
                        <div className={`flex flex-col-reverse lg:flex-row lg:justify-between`}>
                            <h1 className="text-lg md:text-xl lg:text-xl font-extrabold text-black">
                                For counselors and <br className={`hidden lg:block`}/>
                                recommenders
                                <span>
                                    <hr className={`w-8 mt-5 md:w-12 h-[5px] bg-black`}/>
                                </span>
                            </h1>
                            <Image src={owl} width={50} alt={`owl icon`}/>
                        </div>
                        <p className={`py-10 font-medium w-fit md:w-96`}>
                            Thanks to you, your students aren’t alone. We’re here to make sure you’re not either.
                        </p>
                        <button type="button" className={`bg-black mt-5 lg:mt-10 text-xs md:text-base text-white transition duration-300 ease-in-out hover:bg-opacity-60 font-semibold px-6 py-3 rounded-full`}>
                            <Link href={`/counselors-and-recommenders`}>Access counselor resources</Link>
                        </button>
                    </div>
                </div>
                <div className={`bg-gradient-to-r from-[#1474c8] via-10% to-[#56d2e0] lg:h-96 p-4`}>
                    <div className={`bg-white lg:h-[22rem] p-4`}>
                        <div className={`flex flex-col-reverse lg:flex-row lg:justify-between`}>
                            <h1 className="text-lg md:text-xl font-extrabold text-black">
                                For member institutions
                                <span>
                                    <hr className={`w-8 mt-5 md:w-12 h-[5px] bg-black`}/>
                                </span>
                            </h1>
                            <Image src={institution} width={50} alt={`owl icon`}/>
                        </div>
                        <p className={`py-10 font-medium w-fit md:w-96`}>
                            We strive for access, equity, and integrity in the college admission process. Your membership makes it all possible.
                        </p>
                        <button type="button" className={`bg-black text-xs md:text-base mt-5 lg:mt-10 text-white transition duration-300 ease-in-out hover:bg-opacity-60 font-semibold px-6 py-3 rounded-full`}>
                            <Link href={`/members`}>Access member resources</Link>
                        </button>
                    </div>
                </div>
            </div>
            <div className="text-white bg-[#f3f3f3] main-container">
                <h2 className={`text-black font-extrabold text-xl md:text-6xl`}>Events and webinars</h2>
            </div>
            <div className="text-white main-container">
                <div className={`bg-gradient-to-r from-[#2a77c6] to-[#5dc5df] flex-col md:flex-row gap-4 md:gap-10 lg:gap-20 items-center flex p-4`}>
                    <Image src={create_account} height={300} alt={`pic`} />
                    <div className={``}>
                        <h2 className={`text-xl md:text-3xl xl:text-6xl font-extrabold`}>Have a question?</h2>
                        <button type="button" className={`bg-white text-xs w-full md:w-fit md:text-base mt-5 lg:mt-10 text-black transition duration-300 ease-in-out hover:bg-opacity-60 font-semibold px-6 py-3 rounded-full`}>
                            <Link href={`/help`}>Contact our support team</Link>
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    )
}
