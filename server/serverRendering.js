import React from 'react';
import { renderToStaticMarkup, renderToString } from 'react-dom/server';
import { JssProvider, SheetsRegistry } from 'react-jss';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router';
import HTMLPage from './HTMLPage';
import App from '../src/components/App/App';
import initStore from '../src/store';
import { getProfile } from '../src/user/actions';

function escapeHTML(s) { 
  return s.replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function renderPage({ store, url, bundles }) {
  const ctx = {};
  let redirect = false;
  let content = '';
  const sheets = new SheetsRegistry();
  const app = renderToString(
    <Provider store={store}>
      <JssProvider registry={sheets}>
        <StaticRouter
          context={ctx}
          location={url}
        >
          <App />
        </StaticRouter>
      </JssProvider>
    </Provider>
  );

  redirect = ctx.url;
  if (!ctx.url) {
    const html = renderToStaticMarkup(
      <HTMLPage
        bundles={bundles}
        sheets={sheets}
        state={store.getState()}
      >
        { app }
      </HTMLPage>
    );
    content = `<!DOCTYPE html>${html}`;
  }

  return { redirect, content };
}

export default (bundles) => (req, res) => {
  const store = initStore();

  store.dispatch(getProfile())
    .then(() => renderPage({ store, url: req.url, bundles }))

    .then(({ content, redirect }) => {
      if (redirect) {
        res.redirect(301, redirect);
      } else {
        res.status(200).send(content);
      }
    })
    .catch((e) => {
      if (e && e.message && e.stack) {
        e = escapeHTML(`${e.message}\n\n${e.stack}`);
      }
      res.status(500).send(`<pre>${e}</pre>`);
    });
};
