import {GET_COURIERS} from '_actions/user'

export default function couriers(state = {}, action) {
  switch (action.type) {
    case GET_COURIERS:
      return action.users
    default:
      return state
  }
}
