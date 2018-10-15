import { createStore, applyMiddleware } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';

import reducers from './src/reducers';

export default function configureStore() {
  const store = createStore(reducers, applyMiddleware(thunk, reduxImmutableStateInvariant()));

  return store;
}
