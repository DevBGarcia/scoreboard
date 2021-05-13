import React from 'react';
import PropTypes from 'prop-types';
import {Consumer} from  './Context';
import Counter from './Counter.js';
import Icon from './Icon.js';

/* Player is a functionol, STATE-LESS component
 When a player get's updated, everything get re-rendered because,
 the prop is applied to all players
 This is why we use PURE components
 */
// const Player = (props) => {
//   console.log(props.name + "Rendered")
//     return (
//       <div className="player">
//         <span className="player-name">
//           <button className="remove-player" onClick={() => props.removePlayer(props.id)}>✖</button>
//           { props.name }
//         </span>
  
//         <Counter 
//         score={props.score} 
//         changeScore={props.changeScore}
//         id={props.id}
//         index={props.index}    
//         />
//       </div>
//     );
//   }

/**
 * Pure components run a lifecycle method behind the scenes shouldCOmponentUpdate and compares
 * previous state or props
 */
  class Player extends React.PureComponent {

    /**
     * Static functions or properties are called with the class itself, not instances.
     * Makes Prop validation available at the top of the class
     * 'isRequired' is used to make sure a parameter exists
     */
    static propTypes = {
      //changeScore: PropTypes.func,
      removePlayer: PropTypes.func,
      name: PropTypes.string.isRequired,
      score: PropTypes.number,
      id: PropTypes.number,
      index: PropTypes.number
    };

    render(){

      // Must use const declaration for class props
      const{
        name,
        id,
        score,
        index,
        //removePlayer, // remove player passed down via context
        //changeScore,
        isHighScore
      } = this.props;

      console.log(this.props.name + " Rendered");
      return (
        //You can simplify and deconstruct context data by specifying input by object notation 
        <div className="player">
          <Consumer>{ // Can place the consumer around the WHATEVER you want access to the context data 
            /*context*/({actions}) => (
              <span className="player-name">
                <button className="remove-player" onClick={() => actions.removePlayer(id)}>✖</button>
                <Icon isHighScore={isHighScore}/>
                { this.props.name }
              </span>
            )}</Consumer>

          <Counter 
            score={score} 
            //changeScore={changeScore} passed down via context
            id={id}
            index={index}    
          />
        </div>
      );
    }
  }

export default Player