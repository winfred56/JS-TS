import React from "react";

// function Greet() {
//     return <h1>Hello, Today is Wednesday</h1>
// }
const Greet = ({name, heroName, children}) => {
    return (
        <div>
            <h1>Hello, Today is Wednesday. Call me {name} or {heroName}</h1>
            {children}
        </div>
    )
}
export default Greet