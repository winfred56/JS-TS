import './App.css';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Clients from "./components/Clients";
import RecentWorks from "./components/RecentWorks";

function App() {
    return (
        <div className="App">
            <Navbar/>
            <Hero/>
            <Clients/>
            <RecentWorks />
        </div>
    );
}

export default App;
