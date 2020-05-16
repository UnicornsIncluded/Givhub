import {combineReducers} from 'redux'
import {connectRouter} from 'connected-react-router'

import {reducer as alerts} from 'react-notification-system-redux'
import user from './user'
import userCart from './userCart'
import donors from './donor'
import couriers from './courier'
import linkedUser from './linkedUser'
import orderStatus from './orderStatus'

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
