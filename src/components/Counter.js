import React from 'react';
import PropTypes from 'prop-types';

const Counter = (props) => {
  
    return (
        <div className="counter">
            <button className="counter-action decrement" onClick={() => props.changeScore(props.index,-1)}> - </button>
            <span className="counter-score">{ props.score }</span>
            <button className="counter-action increment" onClick={()=> props.changeScore(props.index,1)}> + </button>
        </div>
    );
  }

  /**
   * This will validate the types of the props coming in. This will provide helpful warnings!
   * 
   */

  Counter.propTypes = {
      index: PropTypes.number,
      score: PropTypes.number,
      changeScore: PropTypes.func
  }

export default Counter;