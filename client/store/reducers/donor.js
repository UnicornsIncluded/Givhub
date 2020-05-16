import {GET_DONORS} from '_actions/user'

export default function donors(state = {}, action) {
  switch (action.type) {
    case GET_DONORS:
      return action.users
    default:
      return state
  }
}
