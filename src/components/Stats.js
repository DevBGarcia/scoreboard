import React from 'react';
import { Consumer } from './Context';

    const Stats = () => {

    /** Render Prop
     * A technique for sharing code between React Components using a prop whose value 
     * is a funcion.
     * This is also called 'Function as a child'
     */

    return(
        <Consumer>
            { context => {
                const totalPoints = context.reduce( (total, player) => {
                    return total + player.score;
                }, 0);
                return (
                    <table className="stats">
                        <tbody>
                            <tr>
                            <td>Players:</td>
                            <td>{context.length}</td>
                            </tr>
                            <tr>
                            <td>Total Points:</td>
                            <td>0</td>
                            </tr>
                        </tbody>
                    </table>
                );
            }}
        </Consumer>

    );
}

export default Stats;