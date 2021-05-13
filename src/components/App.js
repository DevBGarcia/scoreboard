import React from 'react';
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

  

  render() {


    return (

      <div className="scoreboard">
        <Header //Assining PROPS to Header method Model
          //title="Scoreboard" 
          //players={this.state.players} No longer need to add players because of Provider/Context
        />

        <PlayerList 
          //players={this.state.players}  //None of these are used anymore because of the higher-order context
          //changeScore={this.handleScoreChange}
          //removePlayer={this.handleRemovePlayer}   
        />

        <AddPlayerForm /*addPlayer={this.handleAddPlayer}*//>
      </div>
    );
  }
}

export default App;