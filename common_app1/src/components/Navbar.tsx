"use client"
import Image from "next/image";
import commonAppLogo from "../../public/common-app-logo.svg";
import commonAppLogo2 from "../../public/common-app-logo 2.svg";
import {NavMenuItems} from "@/res/NavLinks";
import Link from "next/link";
import {useEffect, useState} from "react";

export default function Navbar(){
    const [hoveredItemIndex, setHoveredItemIndex] = useState<null | number>(null);
    const [displayInputField, setDisplayInputField] = useState<boolean>(false)
    const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false)
    const [navbarBackground, setNavbarBackground] = useState<string>('transparent');

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const isTop = scrollTop < 50; // You can adjust the value for when the navbar should become transparent

            setNavbarBackground(isTop ? 'transparent' : 'white');
        };

        // Attach the event listener
        window.addEventListener('scroll', handleScroll);

        // Remove the event listener when the component unmounts
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <nav className="w-full fixed top-0 z-10">
            <div className={`flex items-center justify-between py-5 lg:py-8 px-10 md:px-20 xl:px-10 2xl:px-80`} style={{ background: navbarBackground }}>
                <Link href={``}>
                    {navbarBackground===`transparent`? <Image src={commonAppLogo} alt={`commonAppLogo`} className={`sm:w-[80px] w-[100px] md:w-[170px]`} /> : <Image src={commonAppLogo2} alt={`commonAppLogo`} className={`sm:w-[80px] w-[100px] md:w-[170px]`} />}
                </Link>
                <div className="lg:w-full font-body-text">
                    <ul className={`w-full items-center justify-center hidden font-body-text ${navbarBackground===`transparent` ? `text-white`:`text-black`} xl:flex`}>
                        <div className="flex items-center justify-center gap-5 w-full">
                            {displayInputField ? (

                                /// Search Input Field
                                <div className="transition text-black ease-in-out duration-300 w-full flex items-center">
                                    <input name="search"
                                           className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none block w-full rounded-full sm:text-lg"
                                           type="text" placeholder="Search"/>
                                    <svg onClick={() => setDisplayInputField(false)} xmlns="http://www.w3.org/2000/svg"
                                         fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                                         className="w-8 h-8 text-white cursor-pointer ml-2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                                    </svg>
                                </div>
                            ) : (
                                /// Nav Items
                                <>
                                    <li className={`${navbarBackground===`transparent` ? `text-white` : `text-black`}relative max-w-fit flex items-center justify-center nav-item font-bold text-xl cursor-pointer pb-1`}>
                                        <Link href={`/explore`}>FIND A COLLEGE</Link>
                                    </li>
                                    {NavMenuItems.map((item, index) => (
                                        <li
                                            key={index}
                                            onMouseEnter={() => setHoveredItemIndex(index)}
                                            onMouseLeave={() => setHoveredItemIndex(null)}
                                            className="relative max-w-fit cursor-pointer pb-1 group font-medium flex items-center">
                                            <Link href={item.navNameLink}>{item.navName}</Link>
                                            <span className={`${hoveredItemIndex === index ? "text-[#3B89D7]" : navbarBackground===`transparent`? "text-white": "text-black"}`}>
                                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                   strokeWidth={1.5} stroke="currentColor" className={`${navbarBackground===`transparent`?`text-white`:`text-black`}w-4 h-4 ml-2`}>
                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"/>
                                              </svg>
                                            </span>
                                            <div
                                                className={`${hoveredItemIndex === index ? "block" : "hidden"} font-normal absolute top-10 bg-black bg-opacity-70 border-t-2 border-t-[#3B89D7] w-[400px] text-left py-5 px-10 mt-1`}>
                                                {item.subMenu.map((submenu, subIndex) => (
                                                    <ul className="text-white" key={subIndex}>
                                                        <li className="py-1 cursor-pointer hover:underline hover:underline-offset-1">
                                                            <Link href={submenu.subMenuLink}>{submenu.subNavName}</Link>
                                                        </li>
                                                    </ul>
                                                ))}
                                            </div>
                                        </li>
                                    ))}
                                    <div className="flex justify-center items-center">
                                        <svg onClick={() => setDisplayInputField(true)} xmlns="http://www.w3.org/2000/svg"
                                             fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                                             className="w-8 h-8 text-white cursor-pointer">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/>
                                        </svg>
                                    </div>
                                </>
                            )}
                        </div>
                        <div className="min-w-max justify-end font-body-text hidden xl:flex flex-row gap-2">
                            <button
                                className={`${navbarBackground===`transparent` ? `bg-white text-black` : `bg-black text-white`} transition duration-300 ease-in-out text-black hover:bg-opacity-60 font-semibold px-6 py-3 rounded-full`}>Sign in
                            </button>
                            <button
                                className={`${navbarBackground===`transparent` ? `bg-black bg-opacity-70 hover:bg-opacity-40 text-white` : `border-2 border-black bg-white`}font-semibold px-6 py-3 rounded-full`}>
                                create an account
                            </button>
                        </div>
                    </ul>
                    <div className="xl:hidden flex">
                        <div className="relative">
                            <svg onClick={() => setShowMobileMenu(prevState => !prevState)} xmlns="http://www.w3.org/2000/svg"
                                 fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                                 className={`${navbarBackground===`transparent`? `text-white` : `text-black`} w-6 h-6 cursor-pointer ${showMobileMenu ? 'hidden' : ''}`}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
                            </svg>
                        </div>

                        {/*Mobile Menu*/}
                        <div
                            className={`${showMobileMenu ? 'block' : 'hidden'} bg-gradient-to-b from-[#4fb7da] to-[#1577c8] px-4 w-full pt-5 left-0 xl:hidden absolute top-0`}>
                            <Image src={commonAppLogo} alt={`commonAppLogo`} className={`sm:w-[80px] w-[100px] md:w-[170px]`}/>
                            <svg onClick={() => setShowMobileMenu(prevState => !prevState)} xmlns="http://www.w3.org/2000/svg"
                                 fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                                 className={`text-white w-6 h-6 cursor-pointer absolute mt-5 right-10 top-2 ${showMobileMenu ? '' : 'hidden'}`}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                            </svg>
                            <input name="search"
                                   className="mt-4 py-2 px-3 bg-transparent border-2 text-white placeholder:text-white shadow-sm border-white placeholder-slate-400 focus:outline-none block w-full rounded-full sm:text-lg"
                                   type="text" placeholder="Search"/>
                            <ul className="text-white">
                                <li className="font-bold text-lg cursor-pointer py-2">FIND A COLLEGE</li>
                                {NavMenuItems.map((menuItem, index) => (
                                    <div key={index} className={`text-base font-medium relative py-1 text-left`}>
                                        <li className={`flex items-center`}><Link href={menuItem.navNameLink}>{menuItem.navName}</Link>
                                            <span onClick={() => {
                                                hoveredItemIndex === null ? setHoveredItemIndex(index) : setHoveredItemIndex(null);
                                            }} className={`text-${hoveredItemIndex === index ? "[#3B89D7]" : "white"}`}>
                                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                               strokeWidth={1.5} stroke="currentColor"
                                               className="w-3 h-3 ml-2 items-center relative">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"/>
                                          </svg>
                                    </span>
                                        </li>
                                        <div
                                            className={`${hoveredItemIndex === index ? "block" : "hidden"} h-fit top-0 left-0`}>
                                            {menuItem.subMenu.map((submenu, subIndex) => (
                                                <ul className="pl-5 text-slate-300" key={subIndex}>
                                                    <li className="py-1 cursor-pointer hover:underline hover:underline-offset-1">
                                                        <Link href={submenu.subMenuLink}>{submenu.subNavName}</Link>
                                                    </li>
                                                </ul>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </ul>
                            <div className="block w-full py-36">
                                <button className="bg-white text-black hover:bg-opacity-60 w-full font-semibold my-4 px-6 py-3 rounded-full">Log in</button>
                                <button className="font-semibold bg-black w-full bg-opacity-70 hover:bg-opacity-40 text-white px-6 py-3 rounded-full">Create an Account</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}