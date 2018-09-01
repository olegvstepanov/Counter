import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Counter extends React.Component {

    constructor (props) {
        super(props);
        this.state = 0;
        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
        this.reset = this.reset.bind(this)
    }

    increment () {

    }

    decrement () {

    }

    reset () {

    }

    render () {
        return <div> Hello! </div>;
        

    }
}

ReactDOM.render(<Counter />, document.getElementById('app'));
