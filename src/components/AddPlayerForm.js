import React from 'react';

// When users text into a state field, they change the state of the text field.
// This is why you cannot define a default value
// We need to build a controlled form component. Form element controlled by react

/** Creating a Controlled Component
 * - Initialize state for the value of the input
 * - Listen for changes on the input to detect when value is updated
 * - Create an event handler that updates the value state
 */

class AddPlayerForm extends React.Component{
 
    state = {
        value: ' '
    };
    //Handle Value change will receive a DOM event. Normalized event done by React
    handleValueChange = (e) => {
        this.setState({value: e.target.value});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addPlayer(this.state.value);
        this.setState({value: ' '});
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    type="text" 
                    onChange = {this.handleValueChange}
                    value= {this.state.value}
                    placeholder="Enter a player's name"
                ></input>
                <input 
                    type="submit" 
                    value="Add player"
                ></input>
            </form>
        )
    }
}

export default AddPlayerForm;