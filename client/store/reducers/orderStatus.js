export const ORDER_STATUS_UPDATED = 'ORDER_STATUS_UPDATED'

export function linkedUserUpdated(orderStatus) {
    return {
      type: ORDER_STATUS_UPDATED,
      orderStatus
    };
  }

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
}