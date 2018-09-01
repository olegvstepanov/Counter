import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Counter extends React.Component {

   

    render () {
        return <div> Hello! </div>;
        

    }
}

ReactDOM.render(<Counter />, document.getElementById('app'));
