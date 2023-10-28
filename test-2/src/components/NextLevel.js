import pattern from './../assets/pattern.png'
import personP from './../assets/personP.png'
import {Link} from "react-router-dom";
export default function NextLevel(){
    return (
        <div className="bg-gradient-to-bl from-[#9C2004] to-[#AB2706] p-20 h-screen">
            <div className="grid gap-10 grid-flow-row-dense grid-cols-2">
                <div className="relative">
                    <div className="rounded-full bg-[#E5B94B] w-[41rem] h-[41rem] absolute top-0"></div>
                    <img src={pattern} className="absolute" alt="" />
                    <img src={personP} className="absolute top-16 z-10" alt="" />
                    <img src={pattern} className="absolute right-52 bottom-10" alt="" />
                </div>
                <div className="">
                    <h1 className="font-Headings text-white px-32 text-4xl md:text-9xl text-left font-semibold">
                        Take your designs to the next level
                    </h1>
                    <p className="px-32 text-white font-Subtitles text-sm md:text-base text-left py-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin venenatis tempor tortor, eget vulputate neque molestie vel. Curabitur mollis diam eu velit ultricies, at dictum ante rhoncus. Morbi id efficitur ex, ac commodo metus. Nunc molestie neque id erat dictum, eget rutrum ipsum ultrices. Pellentesque eget tempor est, in convallis lacus. Faucibus in libero risus semper habitant arcu.</p>
                    <Link to="/"><button type="button" className="text-left bg-[#E5B94B] ml-32 font-medium rounded-xl mr-5 px-4 mt-8 py-2">Explore</button></Link>
                </div>
            </div>
        </div>
    );



}