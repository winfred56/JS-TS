import {useState} from "react";

export default function ConditionalComponent() {
    const [display, setDisplay] = useState(false)
    const alterState = () => setDisplay(!display);
    if(display){
        return (
            <div>
                <h1>Display is currently set to True.</h1>
                <button onClick={alterState}>Click me</button>
            </div>
        )
    }
    else {
        return (
            <div>
                <h1>Display is now set to False.</h1>
                <button onClick={alterState}>Click me</button>
            </div>
        )
    }
}