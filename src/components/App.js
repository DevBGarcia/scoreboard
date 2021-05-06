import React from 'react';
import Header from './Header.js';
import Player from './Player.js';
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
      <div className="scoreboard">
        <Header //Assining PROPS to Header method Model
          //title="Scoreboard" 
          players={this.state.players}
        />

        {this.state.players.map( (player, index) =>
          <Player //Assining PROPS to Player method Model
            name={player.name}
            id={player.id}
            key={player.id.toString()}
            index={index} 
            removePlayer={this.handleRemovePlayer}
            score={player.score}
            changeScore={this.handleScoreChange}
            isHighScore={highScore === player.score}  //Checks if player has high score        
          />
        )}
        <AddPlayerForm addPlayer={this.handleAddPlayer}/>
      </div>
    );
  }
}

export default App;