import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import Loading from './src/components/common/loading';
import './src/styles/hello.scss';

const Home = Loadable({
  loader: () => import('./src/components/home'),
  loading: Loading,
});

const Login = Loadable({
  loader: () => import('./src/components/auth/login'),
  loading: Loading,
});


const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/login" component={Login}/>
    </Switch>
  </Router>
);

ReactDOM.render(
  <App />, document.getElementById('main')
);
