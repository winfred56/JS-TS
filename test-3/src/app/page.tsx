import Image from 'next/image'
import Image_right from './../../public/Image-right.png'
import Image_left from './../../public/Image left.png'

export default function Home() {
    const information: Array<any> = [
        {num: '5.8', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu eget.'},
        {num: '99+', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu eget.'},
        {num: '110k', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu eget.'},

    ]
  return (
    <main className="flex min-h-screen text-[#363830] justify-between flex-col md:px-36">
      <div className="relative items-center justify-center md:pt-20 max-w-[754px]">
        <h1 className="text-8xl font-extrabold">Interior design</h1>
          <p className="md:pt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu eget. Et integer facilisi eget.  Faucibus in libero risus semper habitant arcu eget. Et integer facilisi eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper</p>
          <button type="button" className="md:mt-4 rounded-3xl px-4 py-2 text-white bg-[#363830]">Explore</button>
      </div>
        <Image src={Image_right} alt="" className="absolute right-36 -z-10 top-0"/>
        <div className="flex flex-row justify-end pb-20">
            <div className="rounded-full p-16 flex flex-row gap-4 w-[950px] bg-gradient-to-br from-white via-30% to-60%">
                {information.map((info)=>(
                    <div key={info.num} className="">
                        <h2 className="pb-2 border-b-2 border-[#363830] w-fit">{info.num}</h2>
                        <p className="">{info.desc}</p>
                    </div>
                ))}
            </div>
        </div>
        <Image src={Image_left} alt="" className="absolute left-36 -z-10 bottom-0"/>


    </main>
  )
}
