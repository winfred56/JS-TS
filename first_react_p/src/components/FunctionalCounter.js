import {useState} from "react";

function FunctionalCounter(){
    const [counter, setCounter] = useState(0)
    const increment = () =>{
        setCounter(counter+1)
    }
    const decrement = () =>{
        if(counter>0){
            setCounter(counter-1)
        }
    }
    return(
        <div>
            <h1>Counter:{counter}</h1>
            <button onClick={increment}> Increase count</button>
            <button onClick={decrement}> Decrease count</button>
        </div>
    )
}
export default FunctionalCounter