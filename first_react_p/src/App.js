import './App.css';
import Profile from "./components/Profile";
// import Hello from "./components/Hello";
import Message from "./components/Message";

function App() {
  return (
    <div className="App">
      {/*<Hello />*/}
        <Message messagecontent="class component props" />
        <Profile name="Winfred" lastname="Adu-Aceampon">
            <h4>Winfred is enjoying react</h4>
        </Profile>
    </div>
  );
}

export default App;
