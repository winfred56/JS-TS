import servicesScribble from './../assets/services-scribble.svg'
export default function Services() {
    return (
        <div className="bg-background w-full text-sm md:text-base pt-10 px-5 md:px-20 text-body-text">
            <div className="flex flex-col w-full md:flex-row items-center text-center justify-center lg:pt-[10rem] space-y-6 lg:space-y-0">
                <div className=" w-full flex flex-col">
		            <ul className="services md:items-start md:text-left">
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
		        <ul className="services md:items-end md:text-right">
			            <li>AI</li>
                        <li>Web3</li>
                        <li>Health</li>
                        <li>Startup</li>
                        <li>Portfolio</li>
                        <li>Business</li>
                        <li>Ecommerce</li>
                        <li>Landing Page</li>
                        <li>Multipage Website</li>
		            </ul>
            </div>
        </div>
        </div>
    )
}