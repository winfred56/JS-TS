import Image from "next/image";
import commonAppLogo from "../../public/common-app-logo.svg";
import {useState} from "react";
import NavMenu from "@/components/NavMenu";
import NavCTAButtons from "@/components/NavCTAButtons";

export default function Navbar(){

    return (
        <nav className={`mx-auto flex flex-row items-center`}>
            <Image src={commonAppLogo} alt={`commonAppLogo`} className={`w-[100px] md:w-[170px]`} />
            <NavMenu />

            <NavCTAButtons  />

        </nav>
    )
}