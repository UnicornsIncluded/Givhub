<<<<<<< HEAD
import update from "immutability-helper";
=======
import update from 'immutability-helper'
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6
import {
  LOGIN_USER,
  LOGOUT_USER,
  UPDATE_USER,
  UPDATE_USER_COURIER,
  GET_USER,
  GET_USERS
<<<<<<< HEAD
} from "_actions/user";
=======
} from '../actions/user'
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6

export default function user(state = {}, action) {
  switch (action.type) {
    case LOGIN_USER:
<<<<<<< HEAD
      return action.user;
    case LOGOUT_USER:
      return {};
    case UPDATE_USER:
      return update(state, { $merge: action.user });
    case UPDATE_USER_COURIER:
      return update(state, { $merge: action.user });
    case GET_USER:
      return action.user
    case GET_USERS: 
      return state.user
    default:
      return state;
=======
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
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6
  }
}
