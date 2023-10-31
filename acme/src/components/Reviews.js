import heart from './../assets/heart-scribble.svg'
export default function Reviews(){
    return (
        <div className="bg-background w-full text-sm md:text-base pt-10 md:pt-20 px-5 md:px-20 text-body-text">
            <div className="flex flex-row items-center justify-center">
                <h1 className="flex flex-row font-Headings font-medium text-white text-2xl md:text-6xl">Loved&#160;
                    <span><img className="flex flex-row" alt="" src={heart}/></span>
                    &#160;by industry leaders
                </h1>
            </div>
        </div>
    )
}