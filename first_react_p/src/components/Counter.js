import {Component} from "react";

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter:0
        }
    }
    IncrementCounter()  {
        return this.setState({counter:this.state.counter+1})
    }
    DecrementCounter() {
        if(this.state.counter > 0){
            return this.setState({counter:this.state.counter-1})
        }
    }
    render() {
        return(<div>
            <h2>You clicked te button {this.state.counter} times</h2>
            <button onClick={()=>this.IncrementCounter()}>Increase me</button>
            <button onClick={()=>this.DecrementCounter()}>Reduce me</button>
        </div>)
    }
}
export default Counter