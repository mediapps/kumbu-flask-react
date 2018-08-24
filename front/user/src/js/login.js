import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';

import Button from '../../../common/src/js/button';
import LoginForm from './loginForm';

class Login extends Component{

  constructor(props){
    super(props);
    this.login = this.login.bind(this);
  }

  login(){
    this.props.history.push({
      pathname: '/',
      state: { email: "tibo" }
    });
  }

  render() {
    return (
      <div>
        <LoginForm action={this.login}/>
      </div>
    )
  }

}

export default withRouter(Login);