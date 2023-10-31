import servicesScribble from './../assets/services-scribble.svg'
import firebase from '../assets/firebase.png'
import figma from './../assets/figma.png'
import next from './../assets/nextjs.png'
import tailwind from './../assets/tailwind.png'
import vercel from './../assets/vercel.png'
import wordpress from '../assets/wordPress.png'
import flutter from './../assets/flutter.png'
export default function Services() {
    const tools = [
        {src: figma, alt: ''},
        {src: next, alt: ''},
        {src: vercel, alt: ''},
        {src: firebase, alt: ''},
        {src: tailwind, alt: ''},
        {src: flutter, alt: ''},
        {src: wordpress, alt: ''},
    ]
    return (
        <div className="bg-background w-full text-sm md:text-base pt-10 px-5 md:px-20 text-body-text">
            <div className="flex flex-col w-full md:flex-row items-center text-center justify-center pt-[5rem] md:pt-[10rem] space-y-6 lg:space-y-0">
                <div className=" w-full flex flex-col">
		            <ul className="services text-[1.5rem] md:text-4xl md:items-start md:text-left">
                        <li>UI/UX Design</li>
                        <li>Branding &amp; Logo</li>
                        <li>Responsive Web Design</li>
                        <li>Frontend Development</li>
                        <li>SEO &amp; Digital Marketing</li>
                        <li>Deployment &amp; Hosting</li>
                        <li>CMS Integration</li>
                        <li>Tools integration</li>
		            </ul>
                </div>
            <div className="w-full">
                <h2 className="md:w-[400px] xl:w-[600px] text-white font-Headings text-3xl md:text-6xl ">You name it, we ship it
                    <span className="relative">&nbsp;supafast
			            <img alt="logo" loading="eager" width="300" height="100" decoding="async" data-nimg="1" className="absolute right-0 top-[-5px] xl:top-[-10px]" src={servicesScribble} />
		            </span>
                </h2>
            </div>
            <div className="flex w-full flex-col">
		        <ul className="services text-[1.5rem] md:text-4xl md:items-end md:text-right">
			            <li>AI</li>
                        <li>Web3</li>
                        <li>Health</li>
                        <li>Startup</li>
                        <li>Portfolio</li>
                        <li>Business</li>
                        <li>Ecommerce</li>
                        <li>Landing Page</li>
                        <li>Multi page Website</li>
		            </ul>
            </div>
        </div>
            <div className="items-center pt-10 md:pt-20 md:text-lg justify-center">
                <h2 className="font-Headings text-body-text ">TOOLS</h2>
                <div className="py-5">
                    <ul className="flex flex-row gap-8 items-center justify-center">
                        {tools.map((tool)=>(
                            <li className=""><img className="white-logo" src={tool.src} alt={tool.alt}/></li>
                        ))}

                    </ul>
                </div>
            </div>
        </div>
    )
}