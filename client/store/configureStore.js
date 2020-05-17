<<<<<<< HEAD
import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import createRootReducer from './reducers';

export default function configureStore(history, initialState = {}) {
  const middlewares = [routerMiddleware(history), thunk];

  if (process.env.NODE_ENV === 'development') {
    const logger = createLogger({ collapsed: true, diff: true });
    middlewares.push(logger);
=======
import {createStore, applyMiddleware} from 'redux'
import {routerMiddleware} from 'connected-react-router'
import {createLogger} from 'redux-logger'
import thunk from 'redux-thunk'
import createRootReducer from './reducers'

export default function configureStore(history, initialState = {}) {
  const middlewares = [routerMiddleware(history), thunk]

  if (process.env.NODE_ENV === 'development') {
    const logger = createLogger({collapsed: true, diff: true})
    middlewares.push(logger)
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6
  }

  return createStore(
    createRootReducer(history),
    initialState,
<<<<<<< HEAD
    applyMiddleware(...middlewares),
  );
=======
    applyMiddleware(...middlewares)
  )
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6
}
