import {GET_FOODBANK} from '../actions/foodbank'

export default function foodBank(state = {}, action) {
  switch (action.type) {
    case GET_FOODBANK:
      return action.foodbank
    default:
      return state
  }
}
