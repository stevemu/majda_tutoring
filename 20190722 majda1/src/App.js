import React from 'react';

class Person extends React.Component {
  render() {
    let {name, birthday} = this.props;

    return <ul>
      <li>Name: {name}</li>
      <li>Birthday: {birthday}</li>
    </ul>
  }
}

class App extends React.Component {

  render() {

    let data = [
      {
        name: "Majda",
        birthday: "July 17, 1992"
      },
      {
        name: "Gloria",
        birthday: "Aug 17, 1994"
      },
      {
        name: "Qi",
        birthday: "July 11, 1988"
      }
    ];

    return (
      <div>
        persons:
        {data.map((person) => {
          return <Person key={person.name} name={person.name} birthday={person.birthday} />
        })}
      </div>
    );
  }

}

export default App;
