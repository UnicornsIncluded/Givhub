import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_CART = 'GET_CART'

/**
 * INITIAL STATE
 */
// const defaultCars = {}

/**
 * ACTION CREATORS
 */
const getCart = cart => ({
  type: GET_CART,
  cart
})

/**
 * THUNK CREATORS
 */
export const fetchCart = (username) => async dispatch => {
  try {
    const res = await axios.get(`/api/users/${username}/cart`)
    dispatch(getCart(res.data))
  } catch (err) {
    console.error(err)
  }
}

export const addToCart = (newCartItem, userId, username) => async dispatch => {
  try {
    const updateObj = {
      newCartItem,
      userId
    }
    await axios.put(`/api/users/${username}/cart/${userId}`, newCartItem)
    const {data} = await axios.get(`/api/users/${username}/cart`)
    dispatch(getCart(data))
  } catch (error) {
    console.error(error)
  }
}

export const removeFromCart = cartItemId => async dispatch => {
  try {
    await axios.delete(`/api/cart/${cartItemId}`)
    const {data} = await axios.get(`/api/${userId}/cart`)
    dispatch(getCart(data))
  } catch (error) {
    console.error(error)
  }
}

/**
 * REDUCER
 */
export default function userCart(state = [], action) {
  switch (action.type) {
    case GET_CART:
      return action.cart
    default:
      return state
  }
}

