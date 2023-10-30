import klassic from "./../assets/klassic.png"
import kat from "./../assets/kath.png"
import lamerta from "./../assets/lamerta.png"
import vivo from "./../assets/vivo.png"
import otuasekan from "./../assets/otuasekan.png"
import arcc from "./../assets/arcc.png"
import effiduase from "./../assets/effiduase.png"
import aboafo from "./../assets/aboafo.png"

export default function Clients() {
    const clients = [
        {src: lamerta, alt: "", width: "200", height: "00"},
        {src: klassic, alt: "", width: "200", height: "100"},
        {src: kat, alt: "", width: "200", height: "100"},
        {src: vivo, alt: "", width: "200", height: "100"},
        {src: arcc, alt: "", width: "200", height: "100"},
        {src: otuasekan, alt: "", width: "200", height: "100"},
        {src: effiduase, alt: "", width: "200", height: "100"},
        {src: aboafo, alt: "", width: "200", height: "100"},

    ]
    return (
        <div className="bg-background text-center text-sm md:text-base md:pt-10 px-5 md:px-20 text-body-text">
            <p className="font-body-text">TRUSTED BY CLIENTS FROM TOP COMPANIES</p>
            <div className="container mx-auto flex flex-wrap justify-center items-center my-5">
                <div className="carousel-container-clients carousel-fade-clients">
                    <div className="carousel-clients space-x-16">
                        <ul className="content flex gap-4">
                            {clients.map((client) =>(
                                <li key={client.src} className=""><img src={client.src} width={client.width} height={client.height} alt={client.alt} className=""/></li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
)
}
