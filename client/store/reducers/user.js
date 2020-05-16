import update from 'immutability-helper'
import {
  LOGIN_USER,
  LOGOUT_USER,
  UPDATE_USER,
  UPDATE_USER_COURIER,
  GET_USER,
  GET_USERS
} from '../actions/user'

export default function user(state = {}, action) {
  switch (action.type) {
    case LOGIN_USER:
      return action.user
    case LOGOUT_USER:
      return {}
    case UPDATE_USER:
      return update(state, {$merge: action.user})
    case UPDATE_USER_COURIER:
      return update(state, {$merge: action.user})
    case GET_USER:
      return action.user
    case GET_USERS:
      return state.user
    default:
      return state
  }
}
