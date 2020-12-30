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
            <button 
            onClick={this.handleReset}
            className="btn btn-primary btn-sm m-2">Reset</button>
            {this.state.counters.map(counter => (
                //everything in the "Counter" tag is a "prop" except 'key'
            <Counter 
            key={counter.id} 
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            counter={counter}
            >
            </Counter>
            ))}
        </div> );
    }

    handleDelete = (counterId) =>{
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({counters});
    }

    handleReset = () =>{
        const counters = this.state.counters.map(c => {
            c.value = 0;
            return c;
        });
        this.setState({counters});
    }

    handleIncrement = counter =>{
        //counters = new Array[] of this.state.counters
        const counters = [...this.state.counters];

        //current counter increment button is "counter, so index is that button"
        const index = counters.indexOf(counter);
        console.log(counter);

        //cloned current index's counter
        counters[index] = { ...counter }

        //increment it by 1
        counters[index].value++;

        //replace the main state's counter with our new counter.
        this.setState({counters});
    }
}
 
export default Counters;