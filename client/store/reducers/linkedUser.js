export const LINKED_USER_UPDATED = 'LINKED_USER_UPDATED'

export function linkedUserUpdated(user) {
<<<<<<< HEAD
    return {
      type: LINKED_USER_UPDATED,
      user
    };
  }
=======
  return {
    type: LINKED_USER_UPDATED,
    user
  }
}
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6

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
<<<<<<< HEAD
}
=======
}
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6
