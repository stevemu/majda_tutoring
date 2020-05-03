import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  render(){
      
        let data = [
          {
            animalName: "Dog",
            numOfLegs: "4"
          },
          {
            animalName: "Cat",
            numOfLegs: "4"
          },
          {
            animalName: "Chiken",
            numOfLegs: "2"
          },
        ];
        return(
          <div>
            Animals:
            {data.map((animal) => {
              return <Animal key={animal.animalName} name={animal.animalName} numOfLegs={animal.numOfLegs} />
            })}

          </div>
        );
  }
  
}

class Animal extends React.Component {
  render(){
    let {name, numOfLegs} = this.props;
    return <ul>
      <li>Animal:{name} </li>
      <li>Number of Legs:{numOfLegs} </li>
    </ul>

  
  }
}

export default App;
