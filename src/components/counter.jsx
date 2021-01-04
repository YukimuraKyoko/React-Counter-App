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

    /*
    componentDidUpdate(prevProps, prevState){
        console.log('prevProps', prevProps);
        console.log('prevState', prevState);
        if(prevProps.counter.value !== this.props.counter.value){
            //Ajax call and get new data from the server
        }
    }
    */

    componentWillUnmount(){
        console.log('Counter - Unmount');
    }

    render() {
        console.log('Counter - Rendered');

        return (<React.Fragment>
            <div className="row">
                <div className="col-1">
                    <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                </div>
                <div className="col">
                <button onClick= {() => this.props.onIncrement(this.props.counter)}
                    className="btn btn-secondary btn-sm">+</button>
                    <button onClick= {() => this.props.onDecrement(this.props.counter)}
                    className="btn btn-secondary btn-sm m-2"
                    disabled ={this.props.counter.value === 0 ? "disabled" : ""}
                    >-</button>
                    <button onClick={() => this.props.onDelete(this.props.counter.id)} 
                    className="btn btn-danger btn-sm">Delete</button>
                </div>
            
            
            
            
               
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