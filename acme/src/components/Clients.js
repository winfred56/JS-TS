import klassic from "./../assets/klassic.png"
import kat from "./../assets/kat.png"
import lamerta from "./../assets/lamerta.png"
import vivo from "./../assets/vivo.png"
import otuasekan from "./../assets/otuasekan.png"
import arcc from "./../assets/arcc.png"
export default function Clients(){
    const clients = [
        {src: lamerta, alt: "", width: "200", height: "00"},
        {src: klassic, alt: "", width: "200", height: "100"},
        {src: kat, alt: "", width: "200", height: "100"},
        {src: vivo, alt: "", width: "200", height: "100"},
        {src: arcc, alt: "", width: "200", height: "100"},
        {src: otuasekan, alt: "", width: "200", height: "100"},


    ]
    return (
        <div className="bg-background text-center text-sm md:text-base md:pt-10 px-5 md:px-20 text-body-text">
            <p className="font-body-text">TRUSTED BY CLIENTS FROM TOP COMPANIES</p>
            <div className="scroller">
                <ul className="tag_list scroller__inner">
                    {clients.map((client) =>(
                        <li key={client.src} className=""><img src={client.src} width={client.width} alt={client.alt} className=""/></li>
                    ))}
                </ul>
            </div>
        </div>
    )
}