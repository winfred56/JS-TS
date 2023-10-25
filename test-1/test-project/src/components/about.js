import mozammad from '../assets/mozammad.jpg'
import {FiFacebook, FiInstagram, FiLinkedin} from 'react-icons/fi'
import {RiTwitterXLine, RiFileCodeLine} from 'react-icons/ri'
import {MdOutlineDesignServices, MdOutlineLocalFireDepartment} from 'react-icons/md'

export default function About() {
    const socials = [
        {icon: <FiFacebook/>, href: '#'},
        {icon: <FiInstagram/>, href: '#'},
        {icon: <FiLinkedin/>, href: '#'},
        {icon: <RiTwitterXLine/>, href: '#'},
    ]
    const works = [
        {icon: <MdOutlineDesignServices/>, title: 'Design', moreInfo: 'Cras mollis orci id lacus congue, pharetra molestie nibh posuere. Aliquam nec cursus turpis. Praesent egestas molestie felis, in venenatis libero luctus sed. Duis posuere, urna ac maximus ultrices, sem arcu fermentum magna, sit amet blandit ante dui non est. Duis vel erat eget ante lacinia condimentum quis ut sapien.'},
        {icon: <RiFileCodeLine/>, title: 'Code', moreInfo: 'Cras mollis orci id lacus congue, pharetra molestie nibh posuere. Aliquam nec cursus turpis. Praesent egestas molestie felis, in venenatis libero luctus sed. Duis posuere, urna ac maximus ultrices, sem arcu fermentum magna, sit amet blandit ante dui non est. Duis vel erat eget ante lacinia condimentum quis ut sapien.'},
        {icon: <MdOutlineLocalFireDepartment/>, title: 'Production', moreInfo: 'Cras mollis orci id lacus congue, pharetra molestie nibh posuere. Aliquam nec cursus turpis. Praesent egestas molestie felis, in venenatis libero luctus sed. Duis posuere, urna ac maximus ultrices, sem arcu fermentum magna, sit amet blandit ante dui non est. Duis vel erat eget ante lacinia condimentum quis ut sapien.'},
    ]
    return (
        <div className="px-20 md:pt-20 bg-[#0F0F0F] text-white">
            <div className="grid grid-flow-row-dense grid-cols-1 md:grid-cols-2">
                <img src={mozammad} className="h-[40rem] pb-10" alt="codin"/>
                <div className="">
                    <p className="pt-2 pb-7 text-7xl text-white font-medium font-mono text-left">Hi there I am Winfred.</p>
                    <p className="font-light text-left">Nullam vel rhoncus nisi. Phasellus ut eleifend sem, id
                        condimentum ante. Nunc id velit vel felis convallis efficitur. Nullam consectetur dui a lectus
                        luctus pellentesque. Integer finibus est sit amet lectus mattis, in sollicitudin eros
                        scelerisque. Mauris ut interdum odio. Morbi sollicitudin enim egestas metus pretium, at
                        condimentum arcu mattis. Proin efficitur metus nec magna aliquam, id finibus purus porttitor.
                        Integer et porttitor massa. Phasellus magna lectus, ultrices quis dignissim a, eleifend quis
                        tortor. Nunc cursus pellentesque lorem non ultricies. Integer suscipit, ligula sed facilisis
                        finibus, magna sapien dictum urna, et sodales diam nibh ut metus.</p>
                    <p className="font-light text-left mt-10 bg-[#161E32] p-4 border-l-4 border-orange-400">
                        Nam pharetra libero eget congue molestie. Mauris maximus laoreet libero. In a aliquet ante. Nam
                        diam tortor, pharetra et dolor vitae, hendrerit sodales tellus. Vestibulum tempor sollicitudin
                        mauris, venenatis ultrices ex venenatis id. Morbi libero nunc, elementum non mauris at, vehicula
                        interdum leo. Fusce tincidunt porttitor arcu quis aliquam. Morbi eu scelerisque tellus.
                        Suspendisse a ex convallis, dapibus urna sed, pellentesque nulla. Morbi purus mauris, faucibus
                        eget consectetur eget, placerat non sapien. Nulla posuere, tellus auctor efficitur dapibus,
                        purus tortor scelerisque eros, non cursus arcu dolor sed tellus. Morbi in arcu sed odio pharetra
                        tincidunt. Aliquam scelerisque a lacus interdum tristique. Vivamus scelerisque neque sit amet
                        sem imperdiet blandit. Curabitur enim ligula, facilisis sit amet augue sed, dictum iaculis
                        tortor.
                    </p>
                    <div className="text-left py-5 block md:flex gap-20 items-center">
                        <button type="button" className="rounded-full px-4 py-2 bg-orange-500 hover:bg-orange-700">
                            Download CV
                        </button>
                        <ul className="flex gap-2 md:gap-5">
                            {socials.map((social) => (
                                <a href={social.href} key={social.icon}
                                   className="p-4 hover:rounded-full hover:bg-transparent hover:border hover:border-orange-500">
                                    {social.icon}
                                </a>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="grid grid-flow-row-dense grid-cols-1 py-20 md:grid-cols-3">
                {works.map((workItem, i) =>(
                    <div className="backdrop-blur-2xl border border-orange-950 mr-4 mt-4 rounded-2xl hover:border hover:border-b-8 hover:border-orange-400">
                        <div className="flex gap-10 text-white p-4 m-4">
                            <div className="bg-orange-400 w-fit h-fit md:text-2xl p-4 rounded-full lg:text-3xl">
                                {workItem.icon}
                            </div>
                            <div className="items-center">
                                <h1 className="text-2xl items-center font-medium font-mono text-left md:text-3xl">{workItem.title}</h1>
                                <p className="font-light text-left">{workItem.moreInfo}</p>
                            </div>
                        </div>
                    </div>
                ))}
                {/*<div className="backdrop-blur-2xl border border-orange-950 mr-4 rounded-2xl">*/}
                {/*    <div className="flex gap-10 text-white p-4 m-4">*/}
                {/*        <div className="bg-orange-400 w-fit h-fit md:text-2xl p-4 rounded-full lg:text-3xl">*/}
                {/*            <MdOutlineDesignServices/>*/}
                {/*        </div>*/}
                {/*        <div className="items-center">*/}
                {/*            <h1 className="text-2xl items-center font-medium font-mono text-left md:text-3xl">Design</h1>*/}
                {/*            <p className="font-light text-left">Cras mollis orci id lacus congue, pharetra molestie nibh posuere. Aliquam nec cursus turpis. Praesent egestas molestie felis, in venenatis libero luctus sed. Duis posuere, urna ac maximus ultrices, sem arcu fermentum magna, sit amet blandit ante dui non est. Duis vel erat eget ante lacinia condimentum quis ut sapien.</p>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<div className="backdrop-blur-2xl border border-orange-950 rounded-2xl">*/}
                {/*    <div className="flex gap-10 text-white p-4 m-4">*/}
                {/*        <div className="bg-orange-400 w-fit h-fit md:text-2xl p-4 rounded-full lg:text-3xl">*/}
                {/*            <MdOutlineDesignServices/>*/}
                {/*        </div>*/}
                {/*        <div className="items-center">*/}
                {/*            <h1 className="text-2xl items-center font-medium font-mono text-left md:text-3xl">Design</h1>*/}
                {/*            <p className="font-light text-left">Cras mollis orci id lacus congue, pharetra molestie nibh posuere. Aliquam nec cursus turpis. Praesent egestas molestie felis, in venenatis libero luctus sed. Duis posuere, urna ac maximus ultrices, sem arcu fermentum magna, sit amet blandit ante dui non est. Duis vel erat eget ante lacinia condimentum quis ut sapien.</p>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<div className="backdrop-blur-2xl border border-orange-950 ml-4 rounded-2xl">*/}
                {/*    <div className="flex gap-10 text-white p-4 m-4">*/}
                {/*        <div className="bg-orange-400 w-fit h-fit md:text-2xl p-4 rounded-full lg:text-3xl">*/}
                {/*            <MdOutlineDesignServices/>*/}
                {/*        </div>*/}
                {/*        <div className="items-center">*/}
                {/*            <h1 className="text-2xl items-center font-medium font-mono text-left md:text-3xl">Design</h1>*/}
                {/*            <p className="font-light text-left">Cras mollis orci id lacus congue, pharetra molestie nibh posuere. Aliquam nec cursus turpis. Praesent egestas molestie felis, in venenatis libero luctus sed. Duis posuere, urna ac maximus ultrices, sem arcu fermentum magna, sit amet blandit ante dui non est. Duis vel erat eget ante lacinia condimentum quis ut sapien.</p>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        </div>
    )
}