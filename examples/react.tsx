import React, { Component } from 'react';

interface State {
    count: number;
}

export default class Counter extends Component<{}, State> {
    constructor() {
        super();
        this.state = { count: 0 };
    }

    increment = () => {
        this.setState(prevState => {
            count: prevState.count + 1;
        });
    };

    decrement = () => {
        this.setState(prevState => {
            count: prevState.count - 1;
        });
    };

    render() {
        return (
            <div>
                <h1
                    style={{
                        color: '#f00',
                        fontSize: 24,
                    }}
                >
                    {this.state.count}
                </h1>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
            </div>
        );
    }
}
