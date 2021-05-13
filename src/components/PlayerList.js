import React from 'react';
import PropTypes from 'prop-types';
import {Consumer} from './Context';
import Player from './Player';

const PlayerList = () => { //Props no longer needed because parent isn't passing down any anymore
  //You can simplify and deconstruct context data by specifying input by object notation 
  return (
    <Consumer> 
      { (/*context*/{players}) => (
        <React.Fragment>
          {players.map( (player, index) =>
            <Player 
              {...player}
              key={player.id.toString()} 
              index={index}
              //changeScore={props.changeScore} //Passed down via actions context
              //removePlayer={props.removePlayer} //Passed down via context           
            />
          )}
        </React.Fragment> 
    )}</Consumer>
  );
}

PlayerList.propTypes = {
  //changeScore: PropTypes.func.isRequired,
  //removePlayer: PropTypes.func.isRequired //Neither of these are now being passed down via PROPS
};

export default PlayerList;