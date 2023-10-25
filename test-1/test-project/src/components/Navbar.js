import { RiCloseFill, RiMenuLine } from "react-icons/ri";
import { useState } from "react";

export default function Navbar() {
    let navigation = [
        { name: "Home", href: "#" },
        { name: "About", href: "#" },
        { name: "Careers", href: "#" },
        { name: "FAQs", href: "#" },
        { name: "Support", href: "#" },
        { name: "Blog", href: "#" }
    ];

    const [openMenu, menuController] = useState(false);

    return (
        <header className="sticky top-0 bg-black backdrop-blur-md">
            <nav className="flex px-10 py-2 md:px-20">
                <h1 className="text-3xl text-white">Logo</h1>
                <ul className="hidden md:flex flex-1 gap-10 justify-end items-center">
                    {navigation.map((navItem) => (
                        <li key={navItem.name} className="text-base text-white hover:text-blue-700">
                            <a href={navItem.href}>{navItem.name}</a>
                        </li>
                    ))}
                </ul>
                <button
                    onClick={() => menuController(!openMenu)}
                    className="md:hidden object-contain text-2xl flex flex-1 gap-10 justify-end items-center text-white hover:text-blue relative"
                >
                    {openMenu ? <RiCloseFill /> : <RiMenuLine />}
                </button>
                <div
                    className={`${
                        openMenu
                            ? "flex absolute top-16 right-20 md:static md:top-0 rounded-2xl border border-black justify-items-end bg-white w-2/4"
                            : "hidden"
                    } md:hidden`}
                >
                    <ul>
                        {navigation.map((navItem) => (
                            <li key={navItem.name} className="text-base text-black hover:text-blue text-left pl-4 py-2">
                                <a href={navItem.href}>{navItem.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </header>
    );
}
