import {useState} from "react";

export default function ConditionalComponent() {
    const [display, setDisplay] = useState(false)
    const alterState = () => setDisplay(!display);
    let outputDisplay;
    if(display){
        outputDisplay = <h1>Display is currently set to True.</h1>
    }
    else {
        outputDisplay = <h1>Display is now set to False.</h1>
    }
    return(
        <div>
            {outputDisplay}
            <button onClick={alterState}>Click me</button>
        </div>
    )
}