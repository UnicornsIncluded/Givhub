export const LINKED_USER_UPDATED = 'LINKED_USER_UPDATED'

export function linkedUserUpdated(user) {
  return {
    type: LINKED_USER_UPDATED,
    user
  }
}

/**
 * REDUCER
 */
export default function linkedUser(state = [], action) {
  switch (action.type) {
    case LINKED_USER_UPDATED:
      return action.user
    default:
      return state
  }
}
