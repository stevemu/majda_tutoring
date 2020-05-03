import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      name: 'majda',
      favPet: 'bb',
      age: 21
    }
  }

  render() {

    // console.log('render');
    let { name, favPet, age } = this.state;

    return (
      <div>
        <input
          onChange={(e) => {
            let val = e.target.value;
            // console.log(val);
            this.setState({ name: val });
          }}
          value={this.state.name}
        /><br />
        <input
          onChange={(e) => {
            let val = e.target.value;
            // console.log(val);
            this.setState({ favPet: val });
          }}
          value={this.state.favPet}
        />
        <br />

        <input
        onChange = {(e) => {
          let val = e.target.value;
          // console.log(val);
          this.setState({age: val});
        }}
        value = {this.state.age}
        
        />
        <br />
        <div>
          {name} is walking on the forest, with her {favPet}.
          They are getting ready for their breakfast for {age}th birthday.
        </div>
      </div>
    );
  }

}

export default App;
