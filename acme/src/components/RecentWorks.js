import scribble from './../assets/work-scribble.svg'
import coveDark from './../assets/cove-dark.png'
import coveLight from './../assets/cove-light2.png'
import macro from './../assets/macro.png'
import settings from './../assets/settings.png'
import prettyFolio from './../assets/prettyfolio-home.png'
import fit from './../assets/fit.png'
import contingency from './../assets/contingency3.png'
export default function RecentWorks(){
    const works =[
        {src: coveDark, alt: ''},
        {src: macro, alt: ''},
        {src: fit, alt: ''},
        {src: prettyFolio, alt: ''},
        {src: contingency, alt: ''},
        {src: settings, alt: ''},
        {src: coveLight, alt: ''},
    ];
    return (
        <div className="bg-background text-center text-sm md:text-base md:pt-10 px-5 text-body-text">
            <div className="text-left">
                <img className="pt-5" alt="recent-works" src={scribble}/>
            </div>
            <div className="horizontal-scroll px-0">
                <div className="scroll-content py-10">
                    {works.map((work) => (
                       <img src={work.src} alt={work.alt} className="rounded-lg"/>
                    ))}
                </div>
            </div>
        </div>
    )
}