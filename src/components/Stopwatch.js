import React from 'react';

class Stopwatch extends React.Component{
    
    state = {
        isRunning : false,
        elapsedTime: 0,
        previousTime: 0
    }

    //Life Cycle HOOKS
    //Careful with mount functions, make sure to stop things like setInterval to avoid leaks
    //Use this lifeCycle method to fetch data from an API!
    //Use this when a component is inserted into the DOM!
    componentDidMount(){
        console.log('The stop watch mounted!');
        this.intervalID = setInterval(()=> this.tick(),100);
    }

    //Function called when component is unmounted and taken off
    componentWillUnmount(){
        clearInterval();
    }

    /** Component Lifecycle
     * Every component instance follows a cycle: it's mounted onto the DOM, it's updated
     * with changes in data, and it's unmounted from the DOM.
     */

    /** React Lifecycle Methods
     * Built-in methods that get called at each point in the life cycle.
     * Hooks that run code at key times in a component's life cycle
     * Give you the ability to control what happends when a component mounts, updates, 
     * and unmounts.
     * componentDidMount()
     */
    tick = () => {
        if(this.state.isRunning){
            console.log('ticking...');
            const now = Date.now();
            this.setState(prevState => ({
                previousTime: now,
                elapsedTime: prevState.elapsedTime + (now - prevState.previousTime)
            }));
        }
    }

    handleStopwatch = () => {
        this.setState( prevState => ({
            isRunning : !prevState.isRunning
        }));

        if(!this.state.isRunning){
            console.log('starting...');
            this.setState({previousTime: Date.now()});
        }else{
            console.log('stopping...');
        }
    }

    handleReset = () => {
        console.log('Reset pressed...');
        this.setState({
            elapsedTime: 0
        });
    }


    render (){

        let seconds = Math.floor(this.state.elapsedTime/1000)

        let startOrStop = this.state.isRunning ? 'Stop' : 'Start';

        return(
            <div className="stopwatch">
                <h2>Stopwatch</h2>
                <span className="stopwatch-time">{seconds}</span>
                <button onClick={this.handleStopwatch}>{startOrStop}</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        );
    };
}

export default Stopwatch;