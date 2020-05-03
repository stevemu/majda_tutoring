import React from 'react';
import * as firebase from 'firebase/app';
import 'firebase/firestore';

class App extends React.Component {

  constructor() {
    super();



  }

  async componentDidMount() {
    var firebaseConfig = {
      apiKey: "AIzaSyDTrEE4NU2oGnbJ6JWvUxplMSqbitGNAMg",
      authDomain: "fir-test-de0d8.firebaseapp.com",
      databaseURL: "https://fir-test-de0d8.firebaseio.com",
      projectId: "fir-test-de0d8",
      storageBucket: "",
      messagingSenderId: "13099639264",
      appId: "1:13099639264:web:377f48cb9baef94e"
    };

    firebase.initializeApp(firebaseConfig);
    let db = firebase.firestore();

    try {
      let people = await db.collection('people').get();
      people.forEach(s => {
        console.log(s.data());
      })

    } catch (error) {
      console.log(error);
    }

  
  }

  render() {
    return (
      <div>
        aaa
      </div>
    );

  }

}

export default App;
