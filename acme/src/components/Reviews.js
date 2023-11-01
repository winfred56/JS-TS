import heart from './../assets/heart-scribble.svg'
import nilan from './../assets/nilan.png'
export default function Reviews(){
    const topReviews = [
        {review: 'Supafast has incredible designers and engineers. If you need modern, jaw-dropping websites, they\'re the go-to people.', src: nilan, fullName: 'David Wolfenden', position: 'Founder at Cove'},
        {review: 'Supafasaw-dropping websites, they\'re the go-to people.', src: nilan, fullName: 'David Wolfenden', position: 'Founder at Cove'},
        {review: 'Supafast has incredible designers and engineers. If you need modern, jaw-dropping websites, they\'re the go-to people.', src: nilan, fullName: 'David Wolfenden', position: 'Founder at Cove'},
        {review: 'Supafast has incredible designers and engineers. If you need modern, jaw-dropping websites, they\'re the go-to people.', src: nilan, fullName: 'David Wolfenden', position: 'Founder at Cove'},
    ]
    // return (
    //     <div className="bg-background w-full text-sm pt-16 md:pt-36 md:text-base px-5 md:px-20 text-body-text">
    //         <div className="flex flex-row items-center justify-center">
    //             <h1 className="flex flex-row font-Headings pb-10 md:pb-32 font-medium text-white text-2xl md:text-6xl">Loved&#160;
    //                 <span><img className="flex flex-row" alt="" src={heart}/></span>
    //                 &#160;by industry leaders
    //             </h1>
    //         </div>
    //         <div className="container mx-auto flex flex-wrap justify-center items-center py-5">
    //             <div className="carousel-container-clients carousel-fade-clients">
    //                 <div className="carousel-clients space-x-16">
    //                     <ul className="content flex gap-4">
    //                         {topReviews.map((review)=>(
    //                             <li className="border w-full rounded-lg p-10 border-white/10">
    //                                 <p className="text-body-text text-xl md:text-2xl text-left font-body-text">
    //                                     {review.review}                                    </p>
    //                                 <div className="flex flex-row gap-5 items-center justify-start pt-10 md:pt-20">
    //                                     <img className="rounded-full" src={review.src} alt=""/>
    //                                     <div className="flex flex-col items-start justify-center space-y-1">
    //                                         <span className="text-white text-sm lg:text-lg font-Headings">{review.fullName}</span>
    //                                         <span className="text-[#B2AEAE] text-xs font-body-text lg:text-sm">{review.position}</span>
    //                                     </div>
    //                                 </div>
    //                             </li>
    //                         ))}
    //                     </ul>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // )
    return (
        <div className="bg-background w-full text-sm pt-16 md:pt-36 md:text-base px-5 md:px-20 text-body-text">
            <div className="flex flex-row items-center justify-center">
                <h1 className="flex flex-row font-Headings pb-10 md:pb-32 font-medium text-white text-2xl md:text-6xl">Loved&#160;
                    <span><img className="flex flex-row" alt="" src={heart}/></span>
                    &#160;by industry leaders
                </h1>
            </div>

        </div>
    )
}