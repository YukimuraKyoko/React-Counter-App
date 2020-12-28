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
    state = {
        count: 0,
        //imageUrl: 'https://picsum.photos/200'
        tags: ['tag1', 'tag2', 'tag3']
    };

    styles = {
        fontSize: 10,
        fontWeight: 'bold'
    }

  

    //by changing handleIncrement() to an arrow function, we don't
    //need to create a constructor and binding 'this'
    handleIncrement = product => {
        console.log(product);
        //this.state.count++; //this won't work
        this.setState({count: this.state.count + 1})
    }


    render() { 

        return (<React.Fragment>
            <ul>
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button onClick= {() => this.handleIncrement({id:1})}
            className="btn btn-secondary btn-sm">Increment</button>
            
            
               
            </ul>
            
            </React.Fragment>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0 ? "warning" : "primary");
        return classes;
    }

    formatCount(){
        const { count } = this.state;
        return count === 0 ? "Zero" : count;
    }
}
 
export default Counter;