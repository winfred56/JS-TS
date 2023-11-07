"use client";
import {useState} from "react";
import Link from "next/link";

export default function NavMenu() {
    const [hoveredItemIndex, setHoveredItemIndex] = useState<null | number>(null);
    const [displayInputField, setDisplayInputField] = useState<boolean>(false)
    const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false)
    const NavMenuItems = [
        {
            navName: "Plan for college",
            navNameLink: "/plan",
            subMenu: [
                {subNavName: "Why college matters", subMenuLink: "/plan/why-college-matters"},
                {subNavName: "Paying for college", subMenuLink: "/plan/paying-for-college"},
                {subNavName: "Your path to college", subMenuLink: "/plan/your-path-to-college"},
                {subNavName: "Family resources", subMenuLink: "/plan/for-families"},
            ],
        },
        {
            navName: "Apply to college",
            navNameLink: "/apply",
            subMenu: [
                {subNavName: "First-year application guide", subMenuLink: "/apply/first-year-students"},
                {subNavName: "First-year essay prompts", subMenuLink: "/apply/essay-prompts"},
                {subNavName: "Transfer application guide", subMenuLink: "/apply/transfer-students"},
                {subNavName: "Download mobile app", subMenuLink: "/mobile"},
            ],
        },
        {
            navName: "Support your students",
            navNameLink: "/counselors-and-recommenders",
            subMenu: [
                {subNavName: "Recommender system", subMenuLink: "/counselors-and-recommenders/recommender-system"},
                {subNavName: "Common App Ready toolkit", subMenuLink: "/counselors-and-recommenders/recommender-guide"},
                {subNavName: "Recommender guide", subMenuLink: "/counselors-and-recommenders/recommender-guide"},
                {subNavName: "Transfer advisors", subMenuLink: "/transfer-counselors-and-advisors"},
                {subNavName: "News and updates", subMenuLink: "/blog"},
            ],
        },
    ];

    return (
        <div className="lg:w-full">
            <ul className="w-full items-center justify-center hidden font-body-text text-white lg:flex">
                <div className="flex items-center justify-center gap-5 w-full">
                    {displayInputField ? (
                        <div className="transition text-black ease-in-out duration-300 w-full flex items-center">
                            <input
                                name="search"
                                className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none block w-full rounded-full sm:text-lg"
                                type="text"
                                placeholder="Search"
                            />
                            <svg
                                onClick={() => setDisplayInputField(false)}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-8 h-8 text-white cursor-pointer ml-2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </div>
                    ) : (
                        <>
                            <li className="relative max-w-fit flex items-center justify-center nav-item font-bold text-xl cursor-pointer pb-1 text-white">
                                FIND A COLLEGE
                            </li>
                            {NavMenuItems.map((item, index) => (
                                <li
                                    key={index}
                                    onMouseEnter={() => setHoveredItemIndex(index)}
                                    onMouseLeave={() => setHoveredItemIndex(null)}
                                    className="relative max-w-fit cursor-pointer pb-1 group font-medium flex items-center"
                                >
                                    <Link href={item.navNameLink}>{item.navName}</Link>
                                    <span className={`text-${hoveredItemIndex === index ? "[#3B89D7]" : "white"}`}>
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4 ml-2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </span>
                                    <div className={`${hoveredItemIndex === index ? "block" : "hidden"} font-normal absolute top-10 bg-black bg-opacity-70 border-t-2 border-t-[#3B89D7] w-[400px] text-left py-5 px-10 mt-1`}>
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
                                <svg
                                    onClick={() => setDisplayInputField(true)}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-8 h-8 text-white cursor-pointer"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                                    />
                                </svg>
                            </div>
                        </>
                    )}
                </div>
                <div className="min-w-max justify-end font-body-text hidden lg:flex flex-row gap-2">
                    <button className="bg-white text-black hover:bg-opacity-60 font-semibold px-6 py-3 rounded-full">Sign in</button>
                    <button className="font-semibold bg-black bg-opacity-70 hover:bg-opacity-40 text-white px-6 py-3 rounded-full">create an account</button>
                </div>
            </ul>
            <div className="lg:hidden flex">
                <div className="relative">
                    <svg
                        onClick={()=>setShowMobileMenu(prevState => !prevState)}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className={`text-white w-6 h-6 cursor-pointer ${showMobileMenu ? 'hidden' : ''}`}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </div>
                <div className={`${showMobileMenu ? 'block' : 'hidden'} bg-gradient-to-b from-[#4fb7da] to-[#1577c8] lg:hidden w-full left-0 absolute top-0`}>
                    <svg
                        onClick={()=>setShowMobileMenu(prevState => !prevState)}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className={`text-white w-6 h-6 cursor-pointer absolute right-10 top-2 ${showMobileMenu ? '' : 'hidden'}`}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <ul>
                        <li className={``}>Test</li>
                        <li className={``}>Test</li>
                        <li className={``}>Test</li>
                        <li className={``}>Test</li>
                        <li className={``}>Test</li>
                        <li className={``}>Test</li>
                        <li className={``}>Test</li>
                        <li className={``}>Test</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
