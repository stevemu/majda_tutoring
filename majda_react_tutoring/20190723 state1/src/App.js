import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

  // state 

  constructor() {
    super();

    this.state = {
      age: 27,
      height: "164cm"
    }
  }

  fun() {
    
  }

  render() {
    // console.log(this.state);
    let age = this.state.age;
    let height = this.state.height;
    

    return (
      <div>
        I am Majda. I am {age}. and I am {height} cm tall

        <button
          onClick={() => {
            // console.log('clicked');
            let newAge = prompt("enter age");
            // console.log(age);

            this.setState({age: newAge})
          }}
        >enter age</button>

        <button
        onClick={() => {
          // console.log("it's working")
          let newHeight = prompt("How tall are you?")
          // console.log(newHeight)
          this.setState({height: newHeight})
        }}
        >

        Enter Height</button>
      </div>
    );
  }

}

export default App;
