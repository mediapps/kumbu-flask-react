import React, {PureComponent} from 'react';

class Button extends PureComponent{
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
}

export default Button;
