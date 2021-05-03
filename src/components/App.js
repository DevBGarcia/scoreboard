import React from 'react';
import Header from './Header.js';
import Player from './Player.js';
import Stats from './Stats.js';

//Two or more components can share the same state
// App is a Class , full STATE component
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

  render() {
    return (
      <div className="scoreboard">
        <Header //Assining PROPS to Header method Model
          title="Scoreboard" 
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
          />
        )}
      </div>
    );
  }
}

export default App;
