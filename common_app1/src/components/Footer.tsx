import Link from "next/link";
import Image from "next/image";
import bike from "../../public/girl-bike.svg"
import tower from "../../public/tower.svg"

export default function Footer() {
    return (
        <footer className="bg-[#4a4a4a] text-white">
            <div className="main-container py-8">
                <div className="flex flex-col md:flex-row md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <h2 className="text-xl font-extrabold text-white">The Common Application</h2>
                        <ul className="list-none mt-4">
                            <li><Link href={`/about`} className="text-white">About</Link></li>
                            <li><Link href={`/contact`} className="text-white">Contact</Link></li>
                            <li><Link href={`/blog`} className="text-white">News and updates</Link></li>
                        </ul>
                    </div>
                    <div className="mb-6 md:mb-0">
                        <h2 className="text-xl font-semibold text-white">Access and equity</h2>
                        <ul className="list-none mt-4">
                            <li><Link href={`/about/board-of-directors`} className="">Leadership</Link></li>
                            <li><Link href={`/members`} className="">Become a member</Link></li>
                            <li><Link href={`/help`} className="">Help</Link></li>
                        </ul>
                    </div>
                    <div className="mb-6 md:mb-0">
                        <h2 className="text-xl font-semibold text-white"><Link href={`/about/guiding-principles`}>Guiding principles</Link></h2>
                        <ul className="list-none mt-4 text-white">
                            <li><Link href={`/about/next-chapter`} className="">Next Chapter</Link></li>
                            <li><Link href={`/about/common-app-impact`} className="">Impact</Link></li>
                            <li><Link href={`/about/partners`} className="">Partners</Link></li>
                            <li><Link href={`/careers`} className="">Careers</Link></li>
                            <li><Link href={`/events`} className="">Events</Link></li>
                        </ul>
                    </div>
                    <div className="mb-6 md:mb-0">
                        <h2 className="text-xl font-semibold text-white">Join our board</h2>
                        <ul className="list-none mt-4">
                            <li><Link href={`/about/reports-and-insights`} className="">Reports and insights</Link></li>
                            <li>Connect with <span className={`text-[#5accc8]`}>#commonapp</span></li>
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
                <ul className={`md:flex gap-10 text-[#5accc8] font-semibold cursor-pointer`}>
                    <li><Link href={``}>Terms of use</Link></li>
                    <li><Link href={``}>Privacy policy</Link></li>
                    <li><Link href={``}>Fraud policy</Link></li>
                    <li><Link href={``}>Application affirmation</Link></li>
                </ul>
                <p className="text-gray-500 text-sm pt-5 md:pt-0 dark:text-gray-400">© 2023 The Common Application.</p>
            </div>
        </footer>
    )
}