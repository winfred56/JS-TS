import {Component} from "react";
import * as events from "events";

export default class Form extends Component {
    state = {
        firstName:""
    };
    formController = (event)=>{
        this.setState({
            firstName:event.target.value
        })
    }
    submitController = (event)=>{
        event.preventDefault()
        console.log({fname: this.state.firstName})
    }
    render() {
        return (
            <form onSubmit={this.submitController}>
                <input type="text" value={this.state.firstName} placeholder="Firstname" onChange={this.formController}/>
                <button type="submit">Save</button>
            </form>
        )
    }
}