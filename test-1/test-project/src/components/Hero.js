import person from '../assets/person.png'
import person2 from '../assets/person-2.png'
export default function Hero() {
    return(
        <div className="px-20 md:pt-20 grid grid-flow-row-dense grid-cols-1 md:grid-cols-2 bg-black">
            <div className="">
                <p className="text-sm pt-24 text-white text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <h2 className="pt-2 pb-7 text-6xl text-white font-medium font-mono text-left">Hi, I am Winfred. This is my favorite work</h2>
                <p className="text-white text-left font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu luctus diam. Nulla facilisi. Curabitur vel vulputate mi, in vulputate lectus. Ut euismod fringilla erat vitae condimentum. Donec elementum ante eu ligula faucibus blandit. Praesent molestie, leo non semper viverra, purus nisl semper nibh, vel sollicitudin tellus erat placerat quam. Vestibulum eget commodo ligula.</p>
                <div className="text-left py-5"><button type="button" className="rounded-full px-4 py-2 bg-orange-500">Say hello</button>
                </div>
            </div>
            <div className="justify-items-center">
                <img src={person} className="items-center" alt="person" />
                <img src={person2} className="hidden md:flex absolute right-0 top-20 z-[1]" alt="person" />
            </div>
        </div>
    )
}