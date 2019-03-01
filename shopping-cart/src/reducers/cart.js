// import action type variables
import {
  ADD_TO_CART,
  CHECKOUT_REQUEST,
  CHECKOUT_FAILURE
} from '../constants/ActionTypes'

// establish our initial State
const initialState = {
  addedIds: [],
  quantityById: {}
}

// define a reducer function which takes in state (initialState.addedIds as default param) and an action
const addedIds = (state = initialState.addedIds, action) => {
  switch (action.type) {
    case ADD_TO_CART:
    if (state.indexOf(action.productId) !== -1) {
      return state
    }
    return [ ...state, action.productId ]
    default:
    return state
  }
}

// define a reducer function which takes in state (initialState.quantityById as default param) and an action
const quantityById = (state = initialState.quantityById, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const { productId } = action
      return { ...state,
        [productId]: (state[productId] || 0) + 1
      }
    default:
      return state
  }
}

// export two helper functions which will return the quantity and addedIds 
export const getQuantity = (state, productId) =>
  state.quantityById[productId] || 0

export const getAddedIds = state => state.addedIds


// here we define another reducer which again takes in state (default param initialState) and an action and switches over the action.type
const cart = (state = initialState, action) => {
  switch (action.type) {
    case CHECKOUT_REQUEST:
      return initialState
    case CHECKOUT_FAILURE:
      return action.cart
    default:
      return {
        addedIds: addedIds(state.addedIds, action),
        quantityById: quantityById(state.quantityById, action)
      }
  }
}

export default cart
