import boltScribble from "./../assets/bolt-scribble.svg";
export default function Footer(){
    return (
        <div className="bg-background w-full text-sm md:text-base pt-10 md:pt-20 px-5 md:px-20 text-body-text">
            <div className="">
                <h1 className="flex items-center justify-center font-Headings font-semibold text-3xl md:px-64 md:text-8xl text-white">
                    Let’s get to work,
                </h1>
                <h1 className="flex items-center justify-center font-Headings font-semibold text-3xl md:px-64 md:text-8xl text-white">
                    supafast&#160;
                    <span className=""><img className="flex flex-row" src={boltScribble} alt=""/></span>
                </h1>
                <p className="lg:px-80 md:px-64 lg:pt-20 pt-10 text-body-text font-body-text text-xl md:text-2xl">Start making design a competitive advantage, and enable your business to get to that next level.</p>
                <button type="button" className="border border-white bg-transparent rounded-lg mt-10 md:mt-16 bg-white py-5 lg:p-8 px-32 lg:px-[27rem] lg:py-12 text-md lg:text-2xl font-bold text-white tracking-tight cursor-pointer hover:bg-white hover:text-black hover:scale-105 transition duration-300 ease-out">Get started today</button>
                <footer className="bg-background w-full text-sm md:text-base pt-10 md:pt-20 px-5 md:px-20 text-body-text border-t border-white/10 mt-20 lg:mt-[10rem]">
                    <div className="mx-auto max-w-8xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
                        <div className="flex justify-center space-x-6 md:order-2">
                            <a href="https://twitter.com/" className="text-white hover:text-white/50">
                                <span className="sr-only">X</span>
                                <svg fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                                    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z">
                                    </path>
                                </svg>
                            </a>
                            <a href="https://www.linkedin.com/" className="text-white hover:text-white/50">
                                <span className="sr-only">Linkedin</span>
                                <svg fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z">
                                    </path>
                                </svg>
                            </a>
                            <a href="mailto:winfred242002@gmail.com" className="text-white hover:text-white/50">
                                <span className="sr-only">Email</span>
                                <svg fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                                    <path d="M15.61 12c0 1.99-1.62 3.61-3.61 3.61-1.99 0-3.61-1.62-3.61-3.61 0-1.99 1.62-3.61 3.61-3.61 1.99 0 3.61 1.62 3.61 3.61M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12c2.424 0 4.761-.722 6.76-2.087l.034-.024-1.617-1.879-.027.017A9.494 9.494 0 0 1 12 21.54c-5.26 0-9.54-4.28-9.54-9.54 0-5.26 4.28-9.54 9.54-9.54 5.26 0 9.54 4.28 9.54 9.54a9.63 9.63 0 0 1-.225 2.05c-.301 1.239-1.169 1.618-1.82 1.568-.654-.053-1.42-.52-1.426-1.661V12A6.076 6.076 0 0 0 12 5.93 6.076 6.076 0 0 0 5.93 12 6.076 6.076 0 0 0 12 18.07a6.02 6.02 0 0 0 4.3-1.792 3.9 3.9 0 0 0 3.32 1.805c.874 0 1.74-.292 2.437-.821.719-.547 1.256-1.336 1.553-2.285.047-.154.135-.504.135-.507l.002-.013c.175-.76.253-1.52.253-2.457 0-6.617-5.383-12-12-12"></path>
                                </svg>
                            </a>
                        </div>
                        <div className="mt-8 md:order-1 md:mt-0">
                            <h1  className="mb-2 font-bold text-white font-Headings">ACME Logo SVG</h1>
                                <p className="text-left text-sm leading-5 text-white/50 my-2">A design &amp; engineering agency based in GHANA 🇬🇭</p>
                                <p className="text-left text-xs leading-5 text-white/50">© 2023 Acme</p>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    )
}