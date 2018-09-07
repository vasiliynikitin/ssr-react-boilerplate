import React from 'react';
import PropTypes from 'prop-types';

export default function HTMLPage({ children, bundles, sheets, state }) {
  return <html lang="en">
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta name="theme-color" content="#000000" />
      <link rel="manifest" href="/manifest.json" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <title>Dev page3</title>
      <style type="text/css" id="server-side-styles" dangerouslySetInnerHTML={{ __html: sheets.toString() }} />
    </head>
    <body>
      <div id="app" dangerouslySetInnerHTML={{ __html: children }} />
      <script dangerouslySetInnerHTML={{ __html: `window.__INITIAL_STATE = ${JSON.stringify(state)};` }} />
      { bundles.map(name => <script key={name} src={name} />) }
    </body>
  </html>;
}

HTMLPage.propTypes = {
  bundles: PropTypes.array.isRequired,
  sheets: PropTypes.object.isRequired,
  state: PropTypes.object.isRequired,
};
