import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Counter extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            counter: 0
        };
        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
        this.reset = this.reset.bind(this)
    }


    increment () {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    decrement () {
        this.setState({
            counter: this.state.counter - 1
        })
    }

    reset () {
        this.setState({
            counter: 0
        })
    }

    render () {
        return (
            <div>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
                <button onClick={this.reset}>Reset</button>
                <p>Value is: {this.state.counter}</p>
            </div>
        );     

    }

}

ReactDOM.render(<Counter />, document.getElementById('app'));
