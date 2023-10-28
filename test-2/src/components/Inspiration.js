import rsz_1inside from './../assets/rsz_1inside.jpg';
import {Link} from "react-router-dom";
import React, { useState, useEffect } from 'react';

export default function Inspiration(){
    const [seconds, setSeconds] = useState(60);

    useEffect(() => {
        // Exit the useEffect when the timer reaches 0
        if (seconds === 0) return;

        const timer = setInterval(() => {
            setSeconds((prevSeconds) => prevSeconds - 1);
        }, 1000);

        // Clean up the timer when the component unmounts
        return () => clearInterval(timer);
    }, [seconds]);
    return (
        <div className="items-center">
            <div className="grid grid-flow-row-dense grid-cols-1 md:grid-cols-2">
                <img className="w-full" src={rsz_1inside} alt="" />
                <div className="w-full flex flex-col justify-center py-20 md:px-20">
                    <h1 className="font-Headings text-4xl text-left md:text-8xl font-semibold">
                        Exploration and inspirational
                    </h1>
                    <p className="font-Subtitles text-sm md:text-base py-4 text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu eget. Et integer facilisi eget diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu eget. Et integer facilisi eget diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu eget. Et integer facilisi eget diam.</p>
                    <Link to="/practice"><button type="button" className="bg-black text-white rounded-md px-4 py-2 hover:rotate-6">Explore</button></Link>
                    <div className="pt-20">
                        <h1 className="text-opacity-50 text-[#252525] font-Headings text-4xl text-left font-semibold">01</h1>
                        <p className="font-Subtitles text-sm md:text-base text-[#252525] text-opacity-80 text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu eget. Et integer facilisi eget diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu eget. Et integer facilisi eget diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu eget. Et integer facilisi eget diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu eget. Et integer facilisi eget.</p>
                    </div>
                    <div className="py-10">
                        <h1 className="text-opacity-50 text-[#252525] font-Headings text-4xl text-left font-semibold">02</h1>
                        <p className="font-Subtitles text-sm md:text-base text-[#252525] text-opacity-80 text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu eget. Et integer facilisi eget diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu eget. Et integer facilisi eget diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu eget. Et integer facilisi eget diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu eget. Et integer facilisi eget.</p>
                    </div>
                    <div className="py-10">
                        <h1 className="text-opacity-50 text-[#252525] font-Headings text-4xl text-left font-semibold">03</h1>
                        <p className="font-Subtitles text-sm md:text-base text-[#252525] text-opacity-80 text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu eget. Et integer facilisi eget diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu eget. Et integer facilisi eget diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu eget. Et integer facilisi eget diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu eget. Et integer facilisi eget.</p>
                    </div>
                </div>
            </div>
        </div>
    );

}
// &#160;&#160;&#160;&#160;&#160;