import React, { Component } from 'react';
import NavBar from './components/navbar'
import './App.css';
import Counters from './components/counters';

class App extends Component {

  state = { 
    counters: [
        { id: 1, value: 4},
        { id: 2, value: 0},
        { id: 3, value: 0},
        { id: 4, value: 0},
    ]
 };

 constructor(){
   super();
   console.log('App - Constructor');

   //this.props can only be accessed if it's passed in constructor(props) and super(props)
   //this.state = this.props.something; //This is how to set the state directly
   //this.setState(); //This won't work, because this method can only be called when component is called and placed in the DOM.
 }

 componentDidMount(){
   console.log('App - Mounted');
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

  //replace the main state's counter with our new
  this.setState({counters});
}

handleDelete = (counterId) =>{
  const counters = this.state.counters.filter(c => c.id !== counterId);
  this.setState({counters});
}

  render() { 
    console.log('App - Rendered');

    return (
      <React.Fragment>
      <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length}></NavBar>
        <main className="container">
          <Counters 
          counters={this.state.counters}
          onReset={this.handleReset}
          onIncrement={this.handleIncrement}
          onDelete={this.handleDelete}
            ></Counters>
        </main>
        </React.Fragment>
      
      
    );
  }
}
 
export default App;
