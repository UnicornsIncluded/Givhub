export const ORDER_STATUS_UPDATED = 'ORDER_STATUS_UPDATED'

export function linkedUserUpdated(orderStatus) {
<<<<<<< HEAD
    return {
      type: ORDER_STATUS_UPDATED,
      orderStatus
    };
  }
=======
  return {
    type: ORDER_STATUS_UPDATED,
    orderStatus
  }
}
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6

/**
 * REDUCER
 */
export default function orderStatus(state = [], action) {
  switch (action.type) {
    case ORDER_STATUS_UPDATED:
      return action.orderStatus
    default:
      return state
  }
<<<<<<< HEAD
}
=======
}
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6
