import m1 from  "./../assets/m1.jpg";
import m2 from "./../assets/m2.jpg";
import m3 from "./../assets/m3.jpg";
import {Link} from "react-router-dom";
export default function Practice(){
    const projects = [
        {src: m1, alt: "m1", title: "01", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu eget. Et integer facilisi eget."},
        {src: m2, alt: "m2", title: "02", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu eget. Et integer facilisi eget."},
        {src: m3, alt: "m3", title: "03", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu eget. Et integer facilisi eget."},
    ];
    return (
        <div className="align-middle m-20">
            <h1 className="font-Headings text-4xl md:text-8xl text-left font-semibold lg:pr-[60rem]">Projects and practice</h1>
            <br /><br />
            <Link to="/order"><button type="button" className="text-left bg-black text-white rounded-md px-4 py-2 hover:rotate-6">See more</button></Link>
            <div className="grid grid-flow-row-dense grid-cols-1 md:grid-cols-3 gap-10 pt-20 w-full">
                {projects.map((proj)=>(
                    <div className="w-full">
                        <h1 key={proj.src} className="text-opacity-50 text-[#252525] font-Headings text-4xl text-left font-semibold">{proj.title}</h1>
                        <p key={proj.src} className="pt-5 font-Subtitles text-sm md:text-base text-[#252525] text-opacity-80 text-left">{proj.description}</p>
                        <img src={proj.src} alt={proj.alt} key={proj.src} className="w-full pt-5"/>
                    </div>
                ))}
            </div>
        </div>
    )
}