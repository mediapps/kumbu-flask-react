import React from 'react';

var Button = React.createClass({
  render() {
    const {
      variant,
      action,
      content
    } = this.props;

    return (
      <button className={variant} onClick={action}>
        {content}
      </button>
    )
  }
});

export default Button;
