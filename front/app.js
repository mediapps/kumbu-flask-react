import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
// import Home from './webapp/src/js/home';
// import Login from './user/src/js/login';
// import { getBundles } from 'react-loadable/webpack'
// import stats from './react-loadable.json';
import Loading from './common/src/js/loading';
import './webapp/src/styles/hello.scss';

//const Loading = () => <div>Loading...</div>;

const Home = Loadable({
  loader: () => import('./webapp/src/js/home'),
  loading: Loading,
});

const Login = Loadable({
  loader: () => import('./user/src/js/login'),
  loading: Loading,
});

// let modules = [];

// let html = ReactDOMServer.renderToString(
//   <Loadable.Capture report={moduleName => modules.push(moduleName)}>
//     <App/>
//   </Loadable.Capture>
// );

// let bundles = getBundles(stats, modules);

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
