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
                <video
                    id="video"
                    controls={true}
                    autoPlay={false}
                    muted={true}
                    poster="/home-video_optimized.png"
                    src="https://www.youtube.com/watch?v=KGywXmB_Mwo"
                    className={`flex top-0 left-0 xl:w-[36rem] object-cover`}
                >
                    Your browser does not support the video tag.
                </video>
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
