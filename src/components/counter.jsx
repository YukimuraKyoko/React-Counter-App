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
    handleIncrement = () => {
        console.log('Increment Clicked', this);
    }
    render() { 

        return (<React.Fragment>
            
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button onClick= {this.handleIncrement}className="btn btn-secondary btn-sm">Increment</button>
            <ul>
                {this.state.tags.map(tag => <li key={tag}>{ tag }</li>)}
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