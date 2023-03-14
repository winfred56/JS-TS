// import React from "react"

function NavFunction(){
    return (
        <nav>
        <h1>Hello</h1>
        <div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
    </nav>
    )
}

const Nav = (
    <nav>
        <h1>Hello</h1>
        <div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Contact</li>
            </ul>
        </div>
    </nav>
);

ReactDOM.render(Nav, document.getElementById("root"))