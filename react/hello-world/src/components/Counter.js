import React, {Component} from "react";

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    IncrementCounter() {
        this.setState((prevState) => ({
            count: prevState.count+1
        }))
    }

    IncrementByFive() {
        this.IncrementCounter()
        this.IncrementCounter()
        this.IncrementCounter()
        this.IncrementCounter()
        this.IncrementCounter()
    }

    render() {
        return (
            <div>
                <h2>
                    You have pressed this button {this.state.count} times
                </h2>
                <button onClick={() => this.IncrementByFive()}>Click me</button>
            </div>
        )
    }
}

export default Counter