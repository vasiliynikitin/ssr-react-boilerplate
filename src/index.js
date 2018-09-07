/* eslint-disable no-underscore-dangle */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import App from './components/App/App';
import initStore from './store';

const store = initStore(window.__INITIAL_STATE);

ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.querySelector('#app'),
  () => {
    const ssStyles = document.getElementById('server-side-styles');
    if (ssStyles) {
      ssStyles.remove();
    }
  }
);

delete window.__INITIAL_STATE;

registerServiceWorker();

// TODO: process.env.CLIENT_VERSION

if (module.hot) {
  module.hot.accept();
}
