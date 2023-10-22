import {Component} from "react";

class Message extends Component {
    render() {
        return <h1>Class component Message: {this.props.messagecontent}</h1>
    }
}

export default Message