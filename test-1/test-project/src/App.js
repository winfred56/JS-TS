import './App.css';
import Navbar from './components/Navbar.js';
import Hero from "./components/Hero";
import About from "./components/about";

function App() {
    return (
        <div className="App">
            <Navbar/>
            <Hero/>
            <About />
        </div>
    );
}

export default App;
