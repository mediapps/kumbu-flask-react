import React, {Component} from 'react';

class LoginForm extends Component{

  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: ''
    }

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handleEmailChange(event) {
    this.setState({email: event.target.value});
  }

  handlePasswordChange(event) {
    this.setState({password: event.target.value});
  }

  render() {
    const {
      action
    } = this.props;
    return (
      <form onSubmit={action}>
          <label>Email <input type="email" value={this.state.email} onChange={this.handleEmailChange}/></label>
          <label>Password <input type="password" value={this.state.password} onChange={this.handlePasswordChange}/></label>
          <input type="submit" value="Login!" />
      </form>
    );
  }
}

export default LoginForm;
