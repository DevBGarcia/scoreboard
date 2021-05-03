import React from 'react';
import Counter from './Counter.js';

// Player is a functionol, STATE-LESS component
const Player = (props) => {
    return (
      <div className="player">
        <span className="player-name">
          <button className="remove-player" onClick={() => props.removePlayer(props.id)}>✖</button>
          { props.name }
        </span>
  
        <Counter 
        score={props.score} 
        changeScore={props.changeScore}
        id={props.id}
        index={props.index}    
        />
      </div>
    );
  }

export default Player