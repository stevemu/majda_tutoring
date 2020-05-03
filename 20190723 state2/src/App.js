import React from 'react';
import logo from './logo.svg';
import './App.css';


class App extends React.Component {
  
  constructor(){
    super();

    this.state = {
      name: "Hind",
      age: 6,
      favoritFood: "chocolate"
    }
  }
  
  render(){

    let name = this.state.name;
    let age = this.state.age;
    let favoriteFood = this.state.favoritFood
    // console.log(this.state)

    return (
      <div>
        I am {name}, I am {age} and my favorite food is {favoriteFood}

        <button
        onClick = {() => {
          // console.log("Done")
          let newName = prompt("enter your name")
          // console.log(newName)
          this.setState({name: newName});
        }}
        >

        Enter Name</button>

        <button
        onClick={() => {
          // console.log("Done")
          let newAge = prompt("enter age")
          // console.log(newAge)
          this.setState({age: newAge});
          
        }}
        >

        Enter Age</button>

        <button
        onClick= {() => {
          // console.log("done")
          let newFood = prompt("enter your favorite food")
          // console.log(newFood)
          this.setState({favoritFood: newFood});

        }}
        >

        Enter Favorit Food</button>
      </div>
    );
  }
  
}

export default App;
