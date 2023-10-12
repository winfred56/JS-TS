import React from 'react';
import style from "./style.js";
import { Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero } from "./components";
import Billings from "./components/Billings.jsx";


const App = () => (
    <div className="bg-primary w-full overflow-hidden">
        <div className={`${style.paddingX} ${style.flexCenter}`}>
            <div className={`${style.boxWidth}`}>
                <Navbar />
            </div>
        </div>
        <div className={`bg-primary ${style.flexStart}`}>
            <div className={`${style.boxWidth}`}>
                Erode
            </div>
        </div>
        <div className={`bg-primary ${style.paddingX} ${style.flexStart}`}>
            <div className={`${style.boxWidth}`}>
                <Stats />
                <Business />
                <Billings />
                <CardDeal />
                <Testimonials />
                <Clients />
                <CTA />
                <Footer />
            </div>
        </div>
    </div>
);

export default App