import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

// import Loadable from 'react-loadable';
// import Loading from './src/components/common/loading';

import Home from './src/components/home';
import Login from './src/components/auth/login';
import configureStore from './store';
import { saveState } from './localStorage';
import './src/styles/hello.scss';

// const Home = Loadable({
//   loader: () => import('./src/components/home'),
//   loading: Loading,
// });

// const Login = Loadable({
//   loader: () => import('./src/components/auth/login'),
//   loading: Loading
// });

const store = configureStore();

store.subscribe(() => {
  saveState(store.getState());
});

const App = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
  </Provider>
);

ReactDOM.render(
  <App />, document.getElementById('main')
);
