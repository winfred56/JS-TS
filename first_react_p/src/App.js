import './App.css';
import Profile from "./components/Profile";
// import Hello from "./components/Hello";
// import Message from "./components/Message";
import Counter from "./components/Counter";
import Resume from "./components/Resume";
import FunctionalCounter from "./components/FunctionalCounter";

function App() {
  return (
    <div className="App">
      {/*<Hello/>*/}
        <Profile name="Nana" lastName="Kwame"/>
        <Counter />
        <Resume name="Winfred"/>
        <FunctionalCounter />
    </div>
  );
}

export default App;
