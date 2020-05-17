<<<<<<< HEAD
export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';
export const UPDATE_USER = 'UPDATE_USER';
export const UPDATE_USER_COURIER = 'UPDATE_USER_COURIER';
export const GET_USER = 'GET_USER';
export const GET_USERS = 'GET_USERS';
export const GET_DONORS = 'GET_DONORS';
export const GET_COURIERS = 'GET_COURIERS';

=======
export const LOGIN_USER = 'LOGIN_USER'
export const LOGOUT_USER = 'LOGOUT_USER'
export const UPDATE_USER = 'UPDATE_USER'
export const UPDATE_USER_COURIER = 'UPDATE_USER_COURIER'
export const GET_USER = 'GET_USER'
export const GET_USERS = 'GET_USERS'
export const GET_DONORS = 'GET_DONORS'
export const GET_COURIERS = 'GET_COURIERS'
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6

export function login(user) {
  return {
    type: LOGIN_USER,
<<<<<<< HEAD
    user,
  };
=======
    user
  }
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6
}

export function logout() {
  return {
<<<<<<< HEAD
    type: LOGOUT_USER,
  };
=======
    type: LOGOUT_USER
  }
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6
}

export function updateUser(user) {
  return {
    type: UPDATE_USER,
<<<<<<< HEAD
    user,
  };
=======
    user
  }
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6
}

export function updateUserCourier(user) {
  return {
    type: UPDATE_USER_COURIER,
<<<<<<< HEAD
    user,
  };
=======
    user
  }
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6
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
<<<<<<< HEAD
  };
=======
  }
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6
}

export function getCouriers(users) {
  return {
    type: GET_COURIERS,
    users
<<<<<<< HEAD
  };
}
=======
  }
}
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6
