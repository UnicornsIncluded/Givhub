<<<<<<< HEAD
import {
  GET_DONORS
} from "_actions/user";
=======
import {GET_DONORS} from '../actions/user'
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6

export default function donors(state = {}, action) {
  switch (action.type) {
    case GET_DONORS:
<<<<<<< HEAD
      return action.users;
    default:
      return state;
=======
      return action.users
    default:
      return state
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6
  }
}
