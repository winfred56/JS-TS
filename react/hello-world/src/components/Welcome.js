import React, {Component} from 'react'

class Welcome extends Component {
    render() {
        return <h3>Welcome, {this.props.name}/{this.props.heroName}</h3>
    }
}
export default Welcome