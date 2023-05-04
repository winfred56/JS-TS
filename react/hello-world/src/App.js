import './App.css';
import Greet from "./components/greet";
import Welcome from "./components/Welcome";
import Message from "./components/Message";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
        {/*<Greet name={'Winfred'} heroName={'Mega mind'}>*/}
        {/*    <p>This is a paragraph tag inside the custom greet tag </p>*/}
        {/*</Greet>*/}
        {/*<Greet name={'Adu'}>*/}
        {/*    <button type="button">Click me</button>*/}
        {/*</Greet>*/}
        {/*<Greet name={'Acheampong'}/>*/}
        {/*<Welcome name={'Winfred'} heroName={'Mega mind'}/>*/}
        {/*<Welcome name={'Kwame'} heroName={'Killer'}/>*/}
        <Counter></Counter>
    </div>
  );
}

export default App;
