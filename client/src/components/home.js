import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';

import Button from './common/button';
import TextGreeting from './greeting';
import Panel from './panel';


class Home extends Component{

  constructor(props){
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout(){
    this.props.history.push({
      pathname: '/login/',
    });
  }

  render() {
    return (
      <div>
        <div id="header">
          <TextGreeting name={this.props.location.state.email}/>
        </div>
        <div className="container">
          <Panel title="Collections"/>
          <Panel title="Souvenirs"/>
          <Panel title="Profile"/>
        </div>
        <Button content="Logout" action={this.logout} variant="red" />
      </div>
    )
  }

};

export default withRouter(Home);