"use client"
import { useState } from 'react';
import Link from "next/link";

export default function VideoPlayer() {
    const [isPlaying, setIsPlaying] = useState(false);

    const playVideo = () => {
        setIsPlaying(true);
        const video = document.getElementById('video');
        if (video) {
            //video.play();
        }
    };

    return (
        <div className="relative">
            {/* Custom thumbnail with play icon */}
            <div
                onClick={playVideo}
                className="cursor-pointer flex flex-col xl:flex-row gap-10 w-full"
            >
                <div className={`relative w-full`}>
                    <video
                        id="video"
                        controls={isPlaying}
                        autoPlay={false}
                        muted={true}
                        poster="/home-video_optimized.png"
                        src="https://www.youtube.com/watch?v=KGywXmB_Mwo"
                        className={`flex top-0 left-0 xl:w-[36rem] object-cover`}
                    >
                        Your browser does not support the video tag.
                    </video>
                    {!isPlaying && (
                        <div className="absolute left-0 inset-0 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="flex items-center justify-center text-white w-14 h-14">
                                <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                            </svg>
                        </div>
                    )}
                </div>
                <div className="">
                    <h2 className={`font-extrabold text-xl md:text-5xl`}>
                        The world is ready for you.<br className={``}/>Be ready for the world.
                    </h2>
                    <p className={`mt-5`}>
                        Common App and Reach Higher have united to inspire more people to complete their education and own their future, no matter what it holds. Get valuable advice from students who have been in your shoes.
                    </p>
                    <button className="bg-[#0b6dbd] mt-10 w-full sm:w-fit md:mt-16 text-white hover:bg-opacity-60 font-semibold text-sm px-6 py-3 rounded-full">
                        <Link href={`/about/access-equity`}>learn about our access initiatives</Link>
                    </button>
                </div>
            </div>
            {/* Video element */}
            <video
                id="video"
                controls={isPlaying}
                autoPlay={isPlaying}
                muted={true}
                poster="/home-video_optimized.png"
                src="https://www.youtube.com/watch?v=KGywXmB_Mwo"
                className={`absolute top-0 left-0 xl:w-[36rem] object-cover ${isPlaying ? 'block' : 'hidden'}`}
            >
                Your browser does not support the video tag.
            </video>
        </div>
    );
}
