import {Link} from "react-router-dom";

export default function ExpressFeel(){
    const info = [
        {num: '01', summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.', src: 'https://images.unsplash.com/photo-1506543730435-e2c1d4553a84?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Title', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus'},
        {num: '02', summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.', src: 'https://images.unsplash.com/photo-1522152246188-e857196992da?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Title', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus'},
        {num: '03', summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.', src: 'https://images.unsplash.com/photo-1542728928-0011f81446e5?auto=format&fit=crop&q=80&w=1935&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Title', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus'},
        {num: '04', summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.', src: 'https://images.unsplash.com/photo-1567418514277-a28f5e9913c2?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Title', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus'},

    ]
    return (
        <div className="m-20">
            <h1 className="font-Headings text-4xl text-left md:text-8xl font-semibold">
                Design is the way how
            </h1>
            <h1 className="font-Headings text-4xl text-left md:text-8xl font-semibold">
                you express the feelings
            </h1>
            <Link to="/nextLevel"><button type="button" className="text-left bg-black text-white rounded-lg mr-5 px-4 mt-8 py-2">Order now</button></Link>

            <div className="grid grid-flow-row-dense gap-4 mt-20 grid-cols-1 md:grid-cols-4">
                {info.map((i) => (
                    <div key={i.title}>
                        <div className="text-opacity-50 text-[#252525] font-Headings text-4xl text-left font-semibold pt-10">
                            {i.num}
                        </div>
                        <p className="font-Subtitles text-sm md:text-base text-[#252525] text-opacity-80 text-left">
                            {i.summary}
                        </p>
                        <div className="bg-gradient-to-b rounded-2xl from-transparent via-transparent to-[#252525] bg-cover bg-center h-[27rem] flex flex-col justify-end relative">
                            <img
                                src={i.src}
                                className="rounded-2xl w-full h-full object-cover absolute mix-blend-overlay"
                                alt={i.title}
                            />
                            <h1 className="font-Headings text-4xl text-black p-4 text-left font-semibold pt-10">
                                {i.title}
                            </h1>
                            <p className="font-Subtitles text-sm md:text-base p-4 text-black text-left">
                                {i.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

}