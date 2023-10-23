import {Component} from "react";

export default class Form extends Component {
    state = {
        firstName:""
    };
    formController = (event)=>{
        this.setState({
            firstName:event.target.value
        })
    }
    render() {
        return (
            <form>
                <input type="text" value={this.state.firstName} placeholder="Firstname" onChange={this.formController}/>
            </form>
        )
    }
}