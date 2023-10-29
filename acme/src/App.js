import './App.css';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Clients from "./components/Clients";

function App() {
    return (
        <div className="App">
            <Navbar/>
            <Hero/>
            <Clients/>
        </div>
    );
}

export default App;
