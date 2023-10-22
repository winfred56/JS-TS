import {Component} from "react";

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter:0
        }
    }
    IncrementCounter = (counter) => {
        return this.setState({counter:counter+1})
    }
    render() {
        return(<div>
            <h2>You clicked te button {this.state.counter} times</h2>
            <button onClick={()=>this.IncrementCounter(this.state.counter)}>Click me</button>
        </div>)
    }
}
export default Counter