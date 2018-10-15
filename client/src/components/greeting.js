import React, { Component } from 'react';
import Button from './common/button';

class TextGreeting extends Component {
    constructor(props) {
    super(props);
    this.state = { greeting: `Hello ${this.props.name}!` };
    this.getPythonHello = this.getPythonHello.bind(this);
    }

    getPythonHello() {
    const fetchUrl = `${window.location.href}hello`;
    return fetch(fetchUrl)
        .then(response => response.json()) // 1
        .then(json => {                    // 2
            return this.personaliseGreeting(json.greeting);
        })
        .catch(error => {                  // 3
            console.log('oups');
            console.log(error);
        });
    }

    personaliseGreeting(greeting) {
        this.setState({
            greeting: `${greeting} ${this.props.name}!`
        });
    }

    render() {
    return (
        <div>
            <h1>{this.state.greeting}</h1>
            <Button content='Say Hello!' action={this.getPythonHello} variant='red' />
        </div>
    );
    }
}

export default TextGreeting;
