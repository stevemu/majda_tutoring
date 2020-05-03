import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// class Header extends Component {
//   render() {
//     return (
//       <nav>
//         <ul>
//           <li>Home</li>
//           <li>Contact</li>
//         </ul>
//       </nav>
//     );
//   }
// }

class Nav extends Component {
  render() {
    return (
      <header>
        <div>My guest book</div>
        <div>Home</div>
        <div>Login</div>
      </header>
    )

  }
}

class Form extends Component {
  render() {
    return (
      <div>
        <input placeholder="name" />
        <input placeholder="comment " />
        <button>Submit</button>
      </div>
    );
  }
}

class Comment extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <div>{this.props.name}</div>
        <div>{this.props.comment}</div>
      </div>
    )
  }
}

class CommentCollection extends Component {
  render() {
    return (
      <div>
        <Comment name="Majda" comment="i love the site" />
        <Comment name="Qi" comment="i love the site, too" />
        <Comment name="Steve" comment="i love the site, too, too" />
  
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Form />
        <CommentCollection />
      </div>
    );
  }
}

export default App;
