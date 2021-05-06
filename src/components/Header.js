import React from 'react';
import PropTypes from 'prop-types';

import Stats from './Stats.js';
import Stopwatch from './Stopwatch.js';

// Can define objects of props within the component constructor!
const Header = (props) => {
  // This will extract props into an array to make code cleaner
  const { 
    players, title 
  } = props; 
    return (
      <header>
        <Stats players = {players}/>
        <h1>{ title }</h1>
        <Stopwatch/>
      </header>
    );
  }

  /**
   * This will validate the types of the props coming in. This will provide helpful warnings!
   * 
   */  
Header.propTypes = {
  players: PropTypes.array,
  title: PropTypes.string
}

/**
 * Default props will force the title to have a value if one doesn't exist
 */
Header.defaultProps = {
  title: 'Scoreboaaardd!'
};

export default Header