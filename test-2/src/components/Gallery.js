import first from '../assets/1.jpg'
import second from '../assets/2.jpg'
import third from '../assets/3.jpg'
import fourth from '../assets/4.jpg'
import fifth from '../assets/5.jpg'
import sixth from '../assets/6.jpg'
import seventh from '../assets/7.jpg'
import eighth from '../assets/8.jpg'
export default function Gallery(){
    const pictures =[
        {src: first, alt: '1.jpg'},
        {src: second, alt: '2.jpg'},
        {src: third, alt: '3.jpg'},
        {src: fourth, alt: '4.jpg'},
        {src: fifth, alt: '5.jpg'},
        {src: sixth, alt: '6.jpg'},
        {src: seventh, alt: '7.jpg'},
        {src: eighth, alt: '8.jpg'},
    ]
    return (
        <div className="grid grid-flow-row-dense gap-4 grid-cols-2 md:grid-cols-4 items-center w-full px-2.5 md:px-20 pb-20">
            {pictures.map((pic)=>(
                <img src={pic.src} className="rounded-2xl w-full h-48 md:h-64 hover:rotate-2" alt={pic.alt} key={pic.src} />
            ))}
        </div>
    );
}