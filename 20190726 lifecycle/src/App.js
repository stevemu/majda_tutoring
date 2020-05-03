import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      people: []
    }

  }

  async componentDidMount() {

    let res = await fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'GET', // GET/POST/DELETE/PUT
      headers: {
        'Content-Type': 'application/json'
      }
    });

    let people = await res.json();
    this.setState({ people });
  }

  render() {

    if (this.state.people.length == 0) {
      return <div>no people yet</div>
    }

    return (
      <div>
        {this.state.people.map((person) => {
          return <div key={person.id}>{person.name} - {person.email}</div>
        })}
      </div>
    );
  }

}

export default App;
