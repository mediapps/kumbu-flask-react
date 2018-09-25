import React, {Component} from 'react';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';

import Button from '../common/button';

import {
    emailChanged,
    passwordChanged
} from '../../actions';

class Login extends Component{

  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: ''
    }

    this.login = this.login.bind(this);
    // this.handleEmailChange = this.handleEmailChange.bind(this);
    // this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handleEmailChange(event) {
    console.log(event.target.value);
    //this.setState({email: event.target.value});
    this.props.emailChanged(text);
  }

  handlePasswordChange(event) {
    //this.setState({password: event.target.value});
    this.props.passwordChanged(text);
  }

  login(){
    this.props.history.push({
      pathname: '/',
      state: { email: this.state.email }
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.login}>
          <label>Email <input type="email" value={this.state.email} onChange={this.handleEmailChange}/></label>
          <label>Password <input type="password" value={this.state.password} onChange={this.handlePasswordChange}/></label>
          <input type="submit" value="Login!" />
        </form>
      </div>
    )
  }

}


const mapStateToProps = ({ auth }) => {
    const {
        email,
        emailEdited,
        password,
        passwordEdited,
    } = auth;

    return {
        email,
        emailEdited,
        password,
        passwordEdited,
        isConnected
    };
};


export default withRouter(connect(mapStateToProps, {
    emailChanged, passwordChanged, loginUser
})(Login));