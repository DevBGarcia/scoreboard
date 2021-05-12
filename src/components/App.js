import React from 'react';
import { Provider } from './Context'; //Node will look for index.js file and find Provider
import Header from './Header.js';
import PlayerList from './PlayerList';
import Stats from './Stats.js';
import AddPlayerForm from './AddPlayerForm.js';

// Two or more components can share the same state
// App is a Class , full STATE component

/** Type Checking in REACT
 * You want to do type checking when passing down props. In many cases, if you simply don't
 * pass down a prop, a child element wont render it and it wont show up as an error.
 * 
 * check for PropTypes, TypeScript, and Flow
 */

class App extends React.Component {
  //Assining STATE to App method Model
  state = {
    players: [
      {
        name: "Guil",
        score: 0,
        id: 1
      },
      {
        name: "Treasure",
        score: 0,
        id: 2
      },
      {
        name: "Ashley",
        score: 0,
        id: 3
      },
      {
        name: "James",
        score: 0,
        id: 4
      }
    ]
  };

  //Player id counter;
  prevPlayerId = 4;

  /**
   * The map() method creates a new array populated with the results of 
   * calling a provided function on every element in the calling array.
   */

  getHighScore = () => {
    const scores = this.state.players.map(p => p.score);
    const highScore = Math.max(...scores);
    if(highScore){
      return highScore;
    }
    return null;
  }

  handleScoreChange = (index, delta) => {
    this.setState( (prevState) => ({
      score:prevState.players[index].score += delta
    }));
  }

  handleRemovePlayer = (id) => {
    this.setState( prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    });
  }

  handleAddPlayer = (name) => {
    let newPlayer = {
      name: name,
      score: 0,
      id: this.prevPlayerId += 1
    };
    this.setState( prevState => {
      return{
        players: prevState.players.concat(newPlayer)
      }
    });
  }

  render() {

    const highScore = this.getHighScore();

    return (
      <Provider value={this.state.players}>
        <div className="scoreboard">
          <Header //Assining PROPS to Header method Model
            //title="Scoreboard" 
            //players={this.state.players} No longer need to add players because of Provider/Context
          />

          <PlayerList 
            players={this.state.players} 
            changeScore={this.handleScoreChange}
            removePlayer={this.handleRemovePlayer}   
          />

          <AddPlayerForm addPlayer={this.handleAddPlayer}/>
        </div>
      </Provider>
    );
  }
}

export default App;