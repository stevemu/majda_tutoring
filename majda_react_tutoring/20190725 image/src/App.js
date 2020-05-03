import React from 'react';
import cooperBlack from './images/mini-cooper-black.jpg';
import cooperYellow from './images/mini-cooper-yellow.jpg';
import { thisExpression } from '@babel/types';


class App extends React.Component {

  constructor() {
    super();

    this.state = {
      showFav: true,
      showLeastFav: true
    }
  }

  render() {
    return (
      <div>
        <button
          onClick={() => {
            let currentShowFav = this.state.showFav;
            this.setState({ showFav: !currentShowFav });
          }}
        >{this.state.showFav ? "hide" : "show"}</button>
        {this.state.showFav && <img src={cooperBlack} />}



        <button
          onClick={() => {
            let currentShowFav1 = this.state.showLeastFav;
            this.setState({ showLeastFav: !currentShowFav1 })
          }}
        >{this.state.showLeastFav ? "Hide  Least Fav" : "Show Least Fav"}</button>
        {this.state.showLeastFav && <img src={cooperYellow} />}
      </div>
    );
  }

}

export default App;
