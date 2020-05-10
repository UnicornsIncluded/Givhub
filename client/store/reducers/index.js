import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import { reducer as alerts } from 'react-notification-system-redux';
import user from './user';
import todos from './todos';
import userCart from './userCart';

const createRootReducer = history => combineReducers({
  router: connectRouter(history),
  alerts,
  user,
  todos,
  userCart
});

export default createRootReducer;
