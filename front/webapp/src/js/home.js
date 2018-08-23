import React, {Component} from 'react';
import TextGreeting from './greeting';
import Panel from './panel';
import ReactDOM from 'react-dom';
import '../styles/hello.scss';

class Home extends Component{
  render() {
    return (
      <div>
        <div id="header">
          <TextGreeting name="Diane"/>
        </div>
        <div className="container">
          <Panel title="Collections"/>
          <Panel title="Souvenirs"/>
          <Panel title="Profile"/>
        </div>
      </div>
    )
  }

};

export default Home;