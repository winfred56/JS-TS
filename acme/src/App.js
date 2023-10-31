import './App.css';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Clients from "./components/Clients";
import RecentWorks from "./components/RecentWorks";
import Precess from "./components/Process";
import Testimonial from "./components/Testimonial";
import Services from "./components/Services";
import Reviews from "./components/Reviews";

function App() {
    return (
        <div className="App">
            <Navbar/>
            <Hero/>
            <Clients/>
            <RecentWorks />
            <Precess />
            <Testimonial />
            <Services />
            <Reviews />
        </div>
    );
}

export default App;
