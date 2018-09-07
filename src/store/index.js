import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from './reducers';

let store;

const composeEnhancers = composeWithDevTools({
  // options like actionSanitizer, stateSanitizer
});

function initStore(initialState) {
  store = createStore(reducers, initialState, composeEnhancers(applyMiddleware(thunk)));
  if (module.hot) {
    module.hot.accept('./reducers', () => {
      store.replaceReducer(reducers);
    });
  }
  return store;
}

export default initStore;
export const getStore = () => store;
