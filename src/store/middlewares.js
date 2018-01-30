/* @flow */
import { applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import promiseMiddleware from 'redux-promise';

import history from '../history';

export default applyMiddleware(routerMiddleware(history), promiseMiddleware);
