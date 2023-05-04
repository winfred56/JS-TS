import React, {Component} from "react";

class Message extends Component{
    constructor(props) {
        super(props);
        this.state = {
            message: 'Welcome to Music Festival'
        }
    }
    changeMessage(){
        this.setState({
            message: 'Thank you for Subscribing to Music Festival'
        })
    }

    render() {
        return(
            <div>
                <h2>{this.state.message}</h2>
                <button onClick={()=>{this.changeMessage()}}>Subscribe</button>
            </div>
        )
    }
}
export default Message