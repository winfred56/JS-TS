import Image from "next/image";
import hero_image from "../../public/home_page_hero_optimized.jpg";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="font-body-text">
        <header className={`hero-bg bg-cover font-body-text relative`}>
            <Navbar />
        </header>

    </main>
  )
}
