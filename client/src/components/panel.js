import React, { PureComponent } from 'react';

class Panel extends PureComponent {
  render() {
    return (
      <div className="panel">
        <h2>{this.props.title}</h2>
      </div>
    );
  }
}

export default Panel;
