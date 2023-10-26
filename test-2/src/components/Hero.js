import {Link} from 'react-router-dom'
export default function Hero(){
    return (
        <div className="py-20 md:px-[650px] md:py-50">
            <h1 className="font-Headings text-4xl md:text-6xl font-semibold">Discover the beauty around the world</h1>
            <p className="font-Subtitles text-sm md:text-base py-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu eget. Et integer facilisi eget diam.</p>
            <Link to="/explore"><button type="button" className="bg-black text-white rounded-md px-4 py-2 hover:rotate-6">Explore</button></Link>
        </div>
    )
}