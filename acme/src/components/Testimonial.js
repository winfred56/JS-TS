import harshPic from './../assets/harsh-profile.png'
export default function Testimonial() {
    return (
        <div className="bg-background text-center text-sm md:px-48 md:text-base md:pt-28 px-5 text-body-text">
            <div className="text-center flex flex-col items-center justify-center">
                <h1 className="font-bold font-Headings text-white md:text-5xl">“I've worked with Supafast on two
                    different projects, and they're phenomenal. The name matches the performance, they're incredibly
                    fast!”</h1>
            </div>
            <div className="flex flex-row items-center justify-center pt-10 md:pt-28 space-x-3">
                <img src={harshPic} alt="" className="flex flex-col justify-center items-start space-y-1 rounded-full"/>
                    <div className="flex flex-col items-start justify-center space-y-1">
                        <h4 className="text-white text-sm lg:text-lg font-Headings font-semibold">Harsh Patel</h4>
                        <p className="text-[#B2AEAE] text-xs font-body-text lg:text-sm">Founder at Macro</p>
                    </div>
            </div>

        </div>
    )
}
