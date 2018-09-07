/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, global-require */
import express from 'express';
import cookieParser from 'cookie-parser';

import serverRendering from './serverRendering';

function createRouter(bundles) {
  const router = express.Router();

  router.use('/ping', (req, res) => res.status(200).send('pong'));
  router.use(cookieParser());

  router.use((req, res, next) => {
    serverRendering(bundles)(req, res, next);
  });

  // router.use(serverErrors);
  // res.status(err.code).sendFile(path.join(__dirname, `${prefix}500.html`));

  return router;
}


export default createRouter;
