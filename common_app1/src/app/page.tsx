import Image from "next/image";
import Navbar from "@/components/Navbar";
import scope from "../../public/scope.svg"
import SearchFilters from "@/components/SearchFilters";
import VideoPlayer from "@/components/VideoPlayer";

export default function Home() {
  return (
    <main className="font-body-text">
        <header className={`hero-bg h-[22rem] sm:h-[35rem] xl:h-fit text-white font-body-text relative w-full px-10 md:px-20 xl:px-10 2xl:px-80 py-5 lg:py-11 `}>
            <Navbar />
            <div className={`hidden xl:block`}>
                <h1 className="text-7xl font-bold pt-36">
                    Your future <br/> starts here
                </h1>
                <p className="hidden xl:block pt-10 text-2xl font-medium">
                    Apply to college for the first time or transfer to <br/>
                    complete your degree. Navigate your entire college <br/>
                    application journey with Common App.
                </p>
                <button className="bg-white transition duration-300 ease-in-out mt-10 mb-52 text-black hover:bg-opacity-60 font-semibold px-6 py-3 rounded-full">
                    start your application
                </button>
            </div>
        </header>
        {/*Mobile*/}
        <div className="xl:hidden w-full px-10 xl:px-10 md:px-20 2xl:px-80 text-black">
            <h1 className="text-3xl font-bold pt-8">
                Your future <br/> starts here
            </h1>
            <p className="xl:hidden block pt-5 text-black font-medium">
                Apply to college for the first time or transfer to
                complete your degree. Navigate your entire college
                application journey with Common App.
            </p>
            <button className="bg-[#0b6dbd] mt-5 mb-16 text-white hover:bg-opacity-60 font-semibold px-6 py-3 rounded-full">
                start your application
            </button>
        </div>
        <div className={`relative xl:mb-[36rem]`}>
            <div className="bg-[#5acccc] px-10 xl:absolute -bottom-[28rem] xl:px-32 md:px-20 2xl:px-36 pt-10 xl:mx-10 2xl:mx-80">
                <h2 className="font-extrabold w-full xl:flex xl:gap-10 text-2xl sm:pt-5 sm:text-3xl md:text-4xl lg:text-4xl">
                    Explore more than 1,000 colleges on Common App
                    <span className="hidden xl:flex">
                    <Image src={scope} className={`w-full`} alt={`telescope`}/>
                </span>
                </h2>
                <SearchFilters/>
            </div>
        </div>
        <div className={`px-10 text-black bg-[#f3f3f3] w-full py-20 xl:px-10 md:px-20 2xl:px-80`}>
            <VideoPlayer/>
        </div>

    </main>
  )
}
