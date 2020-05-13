export const CURRENT_SOCKET = 'CURRENT_SOCKET'

export function getCurrentSocket(socketId) {
    return {
      type: CURRENT_SOCKET,
      socketId
    };
  }

/**
 * REDUCER
 */
export default function currentSocket(state = [], action) {
  switch (action.type) {
    case CURRENT_SOCKET:
      return action.socketId
    default:
      return state
  }
}

