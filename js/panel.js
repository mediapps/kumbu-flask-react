import React from 'react';

var Panel = React.createClass({
  render() {
    return (
      <div className="panel">
        <h2>{this.props.title}</h2>
      </div>
    );
  }
});

export default Panel;
