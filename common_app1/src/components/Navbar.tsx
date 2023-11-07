"use client"
import Image from "next/image";
import commonAppLogo from "../../public/common-app-logo.svg";
import NavMenu from "@/components/NavMenu";
// import NavCTAButtons from "@/components/NavCTAButtons";

export default function Navbar(){
    return (
        <nav onScroll={()=>console.log("Winfred it is scrolling")} className={`w-full px-10 lg:px-80 lg:py-10 flex items-center justify-between`}>
            <Image src={commonAppLogo} alt={`commonAppLogo`} className={`sm:w-[80px] w-[100px] md:w-[170px]`} />
            <NavMenu />
        </nav>
    )
}