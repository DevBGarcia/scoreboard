import React from 'react';

/** React.createContext()
 *  Sets up a context and returns an object with a Provider and a Consumer. 
 *  Provider and consumer are two main components of the Context API
 */

const ScoreBoardContext = React.createContext();

export const Provider = ScoreBoardContext.Provider;
export const Consumer = ScoreBoardContext.Consumer;

