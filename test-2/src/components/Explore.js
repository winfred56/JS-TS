import {Link} from "react-router-dom";
import marita from "./../assets/marita_408x480.jpg"
import ampersand from "./../assets/ampersand_412x381.jpg"
import benjamin from "./../assets/benjamin_412x381.jpg"
import ranimo from "./../assets/ranimo_412x381 (1).jpg"
import krishna from "./../assets/krishna_408x480.jpg"

export default function Explore(){
    const pictures = [
        {src: ranimo, alt: "ranimo", title: "01"},
        {src: ampersand, alt: "ampersand", title: "02"},
        {src: benjamin, alt: "benjamin", title: "03"},
    ]
    return(
        <div className="">
            <div className="grid grid-flow-row-dense gap-10 grid-cols-1 md:grid-cols-3 md:px-36">
                <div className="py-32 col-span-1">
                    <h1 className="font-Headings text-4xl md:text-7xl text-left font-semibold">Discover the beauty around the world</h1>
                    <p className="text-[#252525] font-Subtitles text-sm md:text-base text-left py-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu.</p>
                    <Link to="/"><button type="button" className="text-left bg-black text-white rounded-md px-4 py-2 hover:rotate-6">Get Started</button></Link>
                </div>
                <div className="col-span-2">
                    <div className="grid grid-flow-row-dense gap-5 grid-cols-1 md:grid-cols-2">
                        <img className="rounded-2xl w-full my-10" src={krishna} alt="" />
                        <img className="rounded-2xl w-full my-48" src={marita} alt="" />
                    </div>
                </div>
            </div>
            <div className="grid grid-flow-row-dense gap-10 pb-20 grid-cols-1 mt-0 md:grid-cols-3 md:px-36">
                {pictures.map((pic)=>(
                    <div>
                        <h1 className="md:text-5xl text-[#252525] text-left font-Headings font-medium">{pic.title}</h1>
                        <img className="rounded-2xl w-full" src={pic.src} alt={pic.alt} key={pic.alt}/>
                    </div>
                ))}
            </div>
        </div>
    )
}