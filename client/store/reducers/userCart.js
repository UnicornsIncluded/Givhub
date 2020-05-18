import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_CART = 'GET_CART'
// const REMOVE_ITEM = 'REMOVE_ITEM'

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

// const removeItem = item => ({
//   type: GET_CART,
//   item
// })

/**
 * THUNK CREATORS
 */
export const fetchCart = username => async dispatch => {
  try {
    const res = await axios.get(`/api/users/${username}/cart`)
    dispatch(getCart(res.data))
  } catch (err) {
    console.error(err)
  }
}

export const addToCart = (newCartItem, username) => async dispatch => {
  try {
    const updateObj = {
      newCartItem
    }
    await axios.put(`/api/users/${username}/cart`, newCartItem)
    const {data} = await axios.get(`/api/users/${username}/cart`)
    dispatch(getCart(data))
  } catch (error) {
    console.error(error)
  }
}

export const removeFromCart = (username, item) => async dispatch => {
  try {
    await axios.delete(`/api/users/${username}/cart`, {data: item})
    const {data} = await axios.get(`/api/users/${username}/cart`)
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
