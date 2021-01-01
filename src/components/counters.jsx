import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    
    render() { 
        const {onReset, counters, onDelete, onIncrement} = this.props;

        return ( <div>
            <button 
            onClick={onReset}
            className="btn btn-primary btn-sm m-2">Reset</button>
            {counters.map(counter => (
                //everything in the "Counter" tag is a "prop" except 'key'
            <Counter 
            key={counter.id} 
            onDelete={onDelete}
            onIncrement={onIncrement}
            counter={counter}
            >
            </Counter>
            ))}
        </div> );
    }

    
}
 
export default Counters;