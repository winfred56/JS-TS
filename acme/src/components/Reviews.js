import heart from './../assets/heart-scribble.svg'
export default function Reviews(){
    return (
        <div className="bg-background w-full text-sm md:text-base pt-10 md:pt-20 px-5 md:px-20 text-body-text">
            <div className="flex items-center justify-center">
                <h1 className="font-Headings text-white text-2xl md:text-5xl">Loved
                    <span><img className="" alt="" src={heart}/></span>
                    by industry leaders
                </h1>
            </div>
        </div>
    )
}