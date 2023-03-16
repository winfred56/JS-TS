import React, {Component} from "react";

class Counter extends Component {
    state = {
        count: 0,
        imageUrl: 'https://picsum.photos/200',
        tags: ['tag1', 'tag2', 'tag3']
    }
    styles = {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'blue'
    }

    listCheck() {
        if (this.state.tags.length === 0) {
            return (<h3>There are zero List items</h3>);
        } else {
            return (this.state.tags.map(tag => <li key={tag}>{tag}</li>));
        }
    }

    render() {
        return (
            /// using React.Fragment to prevent numerous <div>s
            <React.Fragment>
                <img src={this.state.imageUrl} alt={'Random image'}/>
                <span style={this.styles} className="badge badge-warning m-2">Hello {this.formatCount()}</span>
                <button className="btn btn-secondary">Increase</button>
                <div>{this.listCheck()}</div>
            </React.Fragment>
        );
    }

    formatCount() {
        /// Destructure this.state.count to avoid repetition
        const {count} = this.state.count;
        /// return String "Zero" if value is 0 else return the value
        return count === 0 ? 'zero' : count;
    }
}

export default Counter;