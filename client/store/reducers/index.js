import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import { reducer as alerts } from 'react-notification-system-redux';
import user from './user';
import todos from './todos';
import userCart from './userCart';
import donors from './donor'
import couriers from './courier'
import linkedUser from './linkedUser'

const createRootReducer = history => combineReducers({
  router: connectRouter(history),
  alerts,
  user,
  todos,
  userCart,
  donors,
  couriers,
  linkedUser
});

export default createRootReducer;
