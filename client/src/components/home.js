import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Button from './common/button';
import TextGreeting from './greeting';
import Panel from './panel';


class Home extends Component {

  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout() {
    console.log(this.props.history);
    this.props.history.push({
      pathname: '/login/',
    });
  }

  render() {
    console.log('hello');
    console.log(this.props.email === '');
    if (this.props.email === '') {
      console.log('hhhhhhelllo');
      this.logout();
    }
    return (
      <div>
        <div id="header">
          <TextGreeting name={this.props.email} />
        </div>
        <div className="container">
          <Panel title="Collections" />
          <Panel title="Souvenirs" />
          <Panel title="Profile" />
        </div>
        <Button content="Logout" action={this.logout} variant="red" />
      </div>
    );
  }

}

const mapStateToProps = ({ auth }) => {
    const {
        email,
    } = auth;

    return {
        email
    };
};

export default withRouter(connect(mapStateToProps, {})(Home));
