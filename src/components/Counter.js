import React from 'react';
import {Consumer} from './Context';
import PropTypes from 'prop-types';

const Counter = (props) => {
  
    return (
        //You can simplify and deconstruct context data by specifying input by object notation
        <Consumer>{
            (/*context*/{actions}) => (
                <div className="counter">
                    <button className="counter-action decrement" onClick={() => actions.changeScore(props.index,-1)}> - </button>
                    <span className="counter-score">{ props.score }</span>
                    <button className="counter-action increment" onClick={()=> actions.changeScore(props.index,1)}> + </button>
                </div>
            )}
        </Consumer>
    );
  }

  /**
   * This will validate the types of the props coming in. This will provide helpful warnings!
   * 
   */

  Counter.propTypes = {
      index: PropTypes.number,
      score: PropTypes.number
      //changeScore: PropTypes.func
  }

export default Counter;