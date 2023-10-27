import o1 from "./../assets/o1.png"
import o2 from "./../assets/o2.png"
import {Link} from "react-router-dom";
import {BsFillSunFill, BsFillStarFill, BsEyeFill, BsGlobe2} from 'react-icons/bs';

export default function Order(){
    const works = [
        {icon: <BsFillSunFill />, description: "Lorem ipsu dolor amet. Faucibus in habitant."},
        {icon: <BsFillStarFill />, description: "Lorem ipsu dolor amet. Faucibus in habitant."},
        {icon: <BsEyeFill />, description: "Lorem ipsu dolor amet. Faucibus ri habitant eget."},
        {icon: <BsGlobe2 />, description: "Lorem ipsu dolor amet. Faucibus in libero risus arcu eget."},
    ]
    return (
        <div className="my-10 mx-20 grid grid-flow-row-dense grid-cols-1 md:grid-cols-2">
            <div className="">
                <img src={o2} className="" alt=""/>
                <h1 className="font-serif text-4xl md:text-8xl text-left font-medium pt-10">THE eWatch with the newest microchip technology</h1>
                <p className="font-Subtitles text-sm font-medium md:text-base text-[#333333] text-left pt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu eget. Et integer facilisi eget diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu eget. Et integer facilisi eget diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu eget. Et integer facilisi eget diam.</p>
                <Link to="/inspiration"><button type="button" className="text-left bg-black text-white rounded-lg mr-5 px-4 mt-5 py-2">Order now</button></Link>
                <Link to="/inspiration"><button type="button" className="text-left bg-transparent text-black border border-black rounded-lg px-4 py-2">Explore more</button></Link>
                <div className="mt-10 border border-black rounded-3xl flex gap-5">
                    {works.map((work)=>(
                        <div className="p-5 w-full text-lg">
                            {work.icon}
                            <p className="font-Subtitles font-medium text-sm md:text-base text-[#252525] pt-2 text-left">{work.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            <img src={o1} className="hidden md:block md:absolute right-20 h-fit" alt=""/>
        </div>
    )
}