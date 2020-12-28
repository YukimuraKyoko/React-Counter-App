import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    state = { 
        counters: [
            { id: 1, value: 4},
            { id: 2, value: 0},
            { id: 3, value: 0},
            { id: 4, value: 0},
        ]
     };
    render() { 
        return ( <div>
            {this.state.counters.map(counter => (
                //everything in the "Counter" tag is a "prop" except 'key'
            <Counter key={counter.id} 
            value={counter.value} 
            id={counter.id}
            onDelete={this.handleDelete}>
                <h4>Counter #{counter.id}</h4>

            </Counter>
            ))}
        </div> );
    }

    handleDelete = () =>{
        console.log('Event Handler Called');
    }
}
 
export default Counters;