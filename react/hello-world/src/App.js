import './App.css';
import Greet from "./components/greet";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div className="App">
        <Greet name={'Winfred'} heroName={'Mega mind'}>
            <p>This is a paragraph tag inside the custom greet tag </p>
        </Greet>
        <Greet name={'Adu'}>
            <button type="button">Click me</button>
        </Greet>
        <Greet name={'Acheampong'}/>
        <Welcome name={'Winfred'} heroName={'Mega mind'}/>
        <Welcome name={'Kwame'} heroName={'Killer'}/>
    </div>
  );
}

export default App;
