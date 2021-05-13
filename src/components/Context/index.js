import React from 'react';

/** React.createContext()
 *  Sets up a context and returns an object with a Provider and a Consumer. 
 *  Provider and consumer are two main components of the Context API
 */

const ScoreBoardContext = React.createContext();

/**
 * This is a higher order component. 
 * HOC is a technique in React for reusing component logic. A HOC takes an existing component 
 * and returns a new component. 
 */
export class Provider extends React.Component { 
    
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

    render(){
        return(
            <ScoreBoardContext.Provider value={{
                players: this.state.players,
                actions: {
                  changeScore: this.handleScoreChange,
                  addPlayer: this.handleAddPlayer,
                  removePlayer: this.handleRemovePlayer
                }
            }}>
                {this.props.children} 
            </ScoreBoardContext.Provider> 
            /**
             * Children is a special REACT prop that lets you pass components as data to other components.
             */
        );
    }
}

export const Consumer = ScoreBoardContext.Consumer;

