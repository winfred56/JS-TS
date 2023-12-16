import diamond from './../assets/diamond-scribble.svg'
import bolt from './../assets/bolt-scribble-hero.svg'
import emoji from './../assets/emoji.svg'
import {useEffect} from "react";
import {motion} from 'framer-motion'

export default function Hero(){
    useEffect(() => {
        const handleKeyPress = (event) => {
            // Check if the pressed key is the letter 'A' (you can replace 'A' with any letter)
            if (event.key === 'b' || event.key === 'B') {
                // Perform your desired functionality here
                alert('You pressed the letter B!');
            }
        };

        // Attach the event listener when the component mounts
        document.addEventListener('keydown', handleKeyPress);

        // Clean up the event listener when the component unmounts
        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        };
    }, []);
    return (
        <div

            className="bg-background text-center pt-10 px-5 md:px-20 text-body-text">
            <div className="flex items-center justify-center gap-1 md:gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="text-white/50 w-3"><path fillRule="evenodd" d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z" clipRule="evenodd"></path></svg>
                <span className="font-body-text text-sm">DESIGN + ENGINEERING</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="text-white/50 w-3"><path fillRule="evenodd" d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z" clipRule="evenodd"></path></svg>
            </div>
            <div className="relative flex flex-row items-center text-center mt-5 mb-10 md:mb-20 justify-center space-x-2">
                <h1 className="text-white font-Headings font-semibold md:px-44 text-4xl md:text-7xl">We build top
                    <motion.span initial={{opacity:0, scale:0.5}} animate={{opacity:1, scale:1}} transition={{duration:1, ease:"easeInOut", delay:0.5}} className="inline-block px-2"><img width="50" height="300" loading="eager" decoding="async" className="w-[20px] lg:w-[32px] xl:w-[30px]" alt="" src={diamond}/></motion.span>
                    notch websites that help your brand grow ultrafast
                    <motion.span initial={{opacity:0, scale:0.5}} animate={{opacity:1, scale:1}} transition={{duration:1, ease:"easeInOut", delay:1}} className="inline-block px-2"><img width="50" height="300" loading="eager" decoding="async" className="w-[20px] h-[20px] lg:w-[40px] lg:h-[40px] xl:w-[32px] xl:h-[32px]" alt="" src={bolt}/></motion.span>
                </h1>
            </div>
            <div className="text-body-text text-sm md:text-2xl font-body-text">
                <p>No meetings. No hiring. No headaches.</p>
                <p>Just conversion-optimized websites.</p>
            </div>
            <div className="py-10 relative">
                <button type="button" className="rounded-lg bg-white p-3.5 lg:p-4 px-10 lg:px-16 text-md lg:text-lg font-bold text-black tracking-tight cursor-pointer hover:scale-105 transition duration-300 ease-out">Get started today</button>
                <img src={emoji} alt="emoji" width="250" height="300" className="md:absolute mt-8 md:mt-0 right-48 bottom-0 w-[180px] lg:w-[200px] xl:w-[250px]"/>
            </div>
        </div>
    )
}