import TextGreeting from './greeting';
import Panel from './panel';
import React from 'react';
import ReactDOM from 'react-dom';
import '../sass/hello.scss';

var App = React.createClass({
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

});

ReactDOM.render(
  <App />, document.getElementById('main')
);
