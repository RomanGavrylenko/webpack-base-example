import React, { Component } from "react";

import './app.scss';

class App extends Component {

    state = {
        time: 10
    }

    start = () => {
        this.interval = setInterval(this.tick, 1000);
    }

    stop = () => {
        clearInterval(this.interval)
    }

    tick = () => {
        this.setState(({time})=> {
            return {
                time: time-1,
            }
        }, ()=>{
            if(this.state.time<=0){
                this.stop();
            }
        }) 
    }

    go = () => {
        this.start()
    }

    render() {
        return (
            <div>
                <h1>My React App!</h1>
                <button onClick={this.go}>
                    Go
                </button>
                <div>Осталось {this.state.time}</div>
                <input type='text' placeholder='some place'/>
            </div>
        );
    }
}

export default App;