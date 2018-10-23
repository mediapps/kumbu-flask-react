import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import {
    emailChanged,
    passwordChanged
} from '../../actions';

class Login extends Component {

  handleEmailChange = (event) => {
    this.props.emailChanged(event.target.value);
  }

  handlePasswordChange = (event) => {
    this.props.passwordChanged(event.target.value);
  }

  login = (event) => {
    event.preventDefault();
    this.props.history.push({
      pathname: '/'
    });
  }

  render() {
    return (<div>
        <form onSubmit={this.login}>
          <label htmlFor='emailInput'>
            Email <input
              type="email" value={this.props.email}
              id='emailInput' onChange={this.handleEmailChange}
            />
          </label>
          <label htmlFor='passwordInput'>
            Password <input
              type="password" value={this.props.password}
              id='passwordInput' onChange={this.handlePasswordChange}
            />
          </label>
          <input type="submit" value="Login!" />
        </form>
    </div>);
  }

}


const mapStateToProps = ({ auth }) => {
    const {
        email,
        password
    } = auth;

    return {
        email,
        password
    };
};


export default withRouter(connect(mapStateToProps, {
    emailChanged, passwordChanged
})(Login));
