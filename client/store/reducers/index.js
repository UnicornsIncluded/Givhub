<<<<<<< HEAD
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import { reducer as alerts } from 'react-notification-system-redux';
import user from './user';
import todos from './todos';
import userCart from './userCart';
=======
import {combineReducers} from 'redux'
import {connectRouter} from 'connected-react-router'

import {reducer as alerts} from 'react-notification-system-redux'
import user from './user'
import userCart from './userCart'
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6
import donors from './donor'
import couriers from './courier'
import linkedUser from './linkedUser'
import orderStatus from './orderStatus'

<<<<<<< HEAD
const createRootReducer = history => combineReducers({
  router: connectRouter(history),
  alerts,
  user,
  todos,
  userCart,
  donors,
  couriers,
  linkedUser,
  orderStatus
});

export default createRootReducer;
=======
const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    alerts,
    user,
    userCart,
    donors,
    couriers,
    linkedUser,
    orderStatus
  })

export default createRootReducer
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6
