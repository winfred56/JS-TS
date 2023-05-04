import React from "react";

// function Greet() {
//     return <h1>Hello, Today is Wednesday</h1>
// }
const Greet = (props) => {
    console.log(props)
    return (
        <div>
            <h1>Hello, Today is Wednesday. Call me {props.name} or {props.heroName}</h1>
            {props.children}
        </div>
    )
}
export default Greet