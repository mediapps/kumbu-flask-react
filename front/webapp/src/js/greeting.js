import React from 'react';
import Button from './button';
var $ = require('jquery');

class TextGreeting extends React.Component{
  constructor(props) {
    super(props);
    this.state = {greeting: 'Hello ' + this.props.name + "!"};
    this.getPythonHello = this.getPythonHello.bind(this);
  }

  personaliseGreeting(greeting){
    this.setState({
        greeting: greeting + ' ' + this.props.name + '!'
    });
  }

  getPythonHello(){
    var fetchUrl = window.location.href + "hello";
    console.log(fetchUrl);
    return fetch(fetchUrl)
        .then(response => response.json()) // 1
        .then(json => {                    // 2
            console.log(json);
            return this.personaliseGreeting(json.greeting)
        })
        .catch(error => {                  // 3
            console.log("oups");
        });
    // return fetch(window.location.href + "hello")
    //   .then(response => {
    //     var res = response //.json()
    //     console.log(res)
    //     return res
    // })
      // .then(data => {
      //   console.log("second " + data)
      //   return this.personaliseGreeting(data)
      // })
  }

  render(){
    return(
        <div>
            <h1>{this.state.greeting}</h1>
            <Button content="Say Hello!" action={this.getPythonHello} variant="red" />
        </div>
    );
  }
}

export default TextGreeting;
