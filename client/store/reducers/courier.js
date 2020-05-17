<<<<<<< HEAD
import {
    GET_COURIERS
  } from "_actions/user";
  
  export default function couriers(state = {}, action) {
    switch (action.type) {
      case GET_COURIERS:
        return action.users;
      default:
        return state;
    }
  }
=======
import {GET_COURIERS} from '../actions/user'

export default function couriers(state = {}, action) {
  switch (action.type) {
    case GET_COURIERS:
      return action.users
    default:
      return state
  }
}
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6
