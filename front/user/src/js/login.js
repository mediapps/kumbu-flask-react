import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Link, withRouter } from 'react-router-dom';

import Button from '../../../common/src/js/button';


class Login extends Component{

  constructor(props){
    super(props);
    this.login = this.login.bind(this);
  }

  login(){
    this.props.history.push("/");
  }

  render() {
    return (
      <div>
        <label>email</label><input type="email" />
        <label>password</label><input type="password" />
        <Link to='/'>Home</Link>
        <Button content="Login!" action={this.login} variant="green" />
      </div>
    )
  }

}

export default withRouter(Login);