import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Button from '../../../common/src/js/button';


class Login extends Component{

  render() {
    return (
      <div>
        <label>email</label><input type="email" />
        <label>password</label><input type="password" />
        <Button content="Login!" action={this.login} variant="green" />
      </div>
    )
  }

}

export default Login;