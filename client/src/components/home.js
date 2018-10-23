import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Button from './common/button';
import TextGreeting from './greeting';
import Panel from './panel';
import {
  logout,
} from '../actions';


class Home extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout = () => {
    this.props.logout();
    this.props.history.push({ pathname: '/login/' });
  };

  render() {
    if (this.props.email === '') {
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

export default withRouter(connect(mapStateToProps, {
  logout
})(Home));
