export const LOGIN_USER = 'LOGIN_USER'
export const LOGOUT_USER = 'LOGOUT_USER'
export const UPDATE_USER = 'UPDATE_USER'
export const UPDATE_USER_COURIER = 'UPDATE_USER_COURIER'
export const GET_USER = 'GET_USER'
export const GET_USERS = 'GET_USERS'
export const GET_DONORS = 'GET_DONORS'
export const GET_COURIERS = 'GET_COURIERS'

export function login(user) {
  return {
    type: LOGIN_USER,
    user
  }
}

export function logout() {
  return {
    type: LOGOUT_USER
  }
}

export function updateUser(user) {
  return {
    type: UPDATE_USER,
    user
  }
}

export function updateUserCourier(user) {
  return {
    type: UPDATE_USER_COURIER,
    user
  }
}

// export function getLinkedUser(user) {
//   return {
//     type: GET_USER,
//     user
//   };
// }

export function getDonors(users) {
  return {
    type: GET_DONORS,
    users
  }
}

export function getCouriers(users) {
  return {
    type: GET_COURIERS,
    users
  }
}
