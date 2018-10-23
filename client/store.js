import { createStore, applyMiddleware } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';

import reducers from './src/reducers';
import { loadState } from './localStorage';

export default function configureStore() {
  const persistedState = loadState();
  const store = createStore(reducers, persistedState,
    applyMiddleware(thunk, reduxImmutableStateInvariant()));

  return store;
}
