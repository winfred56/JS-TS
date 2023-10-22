import './App.css';
import Profile from "./components/Profile";
// import Hello from "./components/Hello";
// import Message from "./components/Message";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      {/*<Hello/>*/}
        <Profile name="Nana" lastName="Kwame"/>
        <Counter />
    </div>
  );
}

export default App;
