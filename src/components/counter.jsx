import React, { Component } from 'react';

class Counter extends Component {

    /*
    constructor(){
        super();
        //using bind we can set the value of 'this', it will return
        //a new instance of the handleIncrement function, 'this' always 
        //referencing the current object
        this.handleIncrement = this.handleIncrement.bind(this);
    }
    */
    

    styles = {
        fontSize: 10,
        fontWeight: 'bold'
    }

  

    //by changing handleIncrement() to an arrow function, we don't
    //need to create a constructor and binding 'this'



    render() {
        console.log('Counter - Rendered');

        return (<React.Fragment>
            <div>
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button onClick= {() => this.props.onIncrement(this.props.counter)}
            className="btn btn-secondary btn-sm">Increment</button>
            <button onClick={() => this.props.onDelete(this.props.counter.id)} 
            className="btn btn-danger btn-sm m-2">Delete</button>
            
            
               
            </div>
            
            </React.Fragment>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.props.counter.value === 0 ? "warning" : "primary");
        return classes;
    }

    formatCount(){
        const { value: count } = this.props.counter;
        return count === 0 ? "Zero" : count;
    }
}
 
export default Counter;