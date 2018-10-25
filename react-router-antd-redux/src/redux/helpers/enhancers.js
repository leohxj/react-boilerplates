import { compose } from 'redux';

import middlewares from './middlewares';

const DEVELOPMENT_MODE = process.env.NODE_ENV !== 'production';

function getComposeEnhancers() {
  return typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;
}

function createEnhancer() {
  if (DEVELOPMENT_MODE) {
    const composeEnhancers = getComposeEnhancers();
    return composeEnhancers(middlewares);
  }
  return middlewares;
}

export default createEnhancer();
