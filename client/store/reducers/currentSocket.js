export const CURRENT_SOCKET = 'CURRENT_SOCKET'

export function getCurrentSocket(socketId) {
<<<<<<< HEAD
    return {
      type: CURRENT_SOCKET,
      socketId
    };
  }
=======
  return {
    type: CURRENT_SOCKET,
    socketId
  }
}
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6

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
<<<<<<< HEAD

=======
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6
