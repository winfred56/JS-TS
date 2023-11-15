import {retokenizeSlashAsRegex} from "sucrase/dist/types/parser/tokenizer";
import Link from "next/link";
import Image from "next/image";
import bike from "../../public/girl-bike.svg"
import tower from "../../public/tower.svg"

export default function Footer(){
    return (
            <footer className="bg-[#4a4a4a] text-white">
                <div className="main-container py-8">
                    <div className="flex flex-col md:flex-row md:justify-between">
                        <div className="mb-6 md:mb-0">
                            <h2 className="text-xl font-extrabold text-white">The Common Application</h2>
                            <ul className="list-none mt-4">
                                <li><Link href="#" className="text-white">About</Link></li>
                                <li><Link href="#" className="text-white">Contact</Link></li>
                                <li><Link href="#" className="text-white">News and updates</Link></li>
                            </ul>
                        </div>
                        <div className="mb-6 md:mb-0">
                            <h2 className="text-xl font-semibold text-white">Access and equity</h2>
                            <ul className="list-none mt-4">
                                <li><Link href="#" className="">Leadership</Link></li>
                                <li><Link href="#" className="">Become a member</Link></li>
                                <li><Link href="#" className="">Help</Link></li>
                            </ul>
                        </div>
                        <div className="mb-6 md:mb-0">
                            <h2 className="text-xl font-semibold text-white">Guiding principles</h2>
                            <ul className="list-none mt-4 text-white">
                                <li><Link href="#" className="">Next Chapter</Link></li>
                                <li><Link href="#" className="">Impact</Link></li>
                                <li><Link href="#" className="">Partners</Link></li>
                                <li><Link href="#" className="">Careers</Link></li>
                                <li><Link href="#" className="">Events</Link></li>
                            </ul>
                        </div>
                        <div className="mb-6 md:mb-0">
                            <h2 className="text-xl font-semibold text-white">Join our board</h2>
                            <ul className="list-none mt-4">
                                <li><Link href="#" className="">Reports and insights</Link></li>
                                <li><Link href="#" className="text-white">Connect with <span className={`text-[#5accc8]`}>#commonapp</span></Link></li>

                            </ul>
                        </div>
                    </div>
                </div>
                <div className={`relative w-full flex justify-between px-10 xl:px-10 2xl:px-[22rem] pt-5 lg:pt-14`}>
                    <Image src={bike} alt={``}/>
                    <Image src={tower} alt={``}/>
                </div>
                <hr className={`h-[2px] border-0 bg-[#5accc8]`}/>
                <div className={`main-container md:flex justify-between`}>
                    <ul className={`md:flex gap-10 `}>
                        <li>Terms of use</li>
                        <li>Privacy policy</li>
                        <li>Fraud policy</li>
                        <li>Application affirmation</li>
                    </ul>
                    <p className="text-gray-500 text-sm dark:text-gray-400">© 2023 The Common Application.</p>
                </div>
            </footer>
    )
}