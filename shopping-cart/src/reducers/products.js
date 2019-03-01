import { combineReducers } from 'redux'
// import action type variables
import { RECEIVE_PRODUCTS, ADD_TO_CART } from '../constants/ActionTypes'


// define a reducer which takes in state and an action 
const products = (state, action) => {
  // switches over the action's type and updates state accordingly
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        inventory: state.inventory - 1
      }
    default:
      return state
  }
}

// define another reducer which takes in state and an action
const byId = (state = {}, action) => {
  switch (action.type) {
    // switches over the action's type and updates state accordingly
    case RECEIVE_PRODUCTS:
      return {
        ...state,
        ...action.products.reduce((obj, product) => {
          obj[product.id] = product
          return obj
        }, {})
      }
    default:
      const { productId } = action
      if (productId) {
        return {
          ...state,
          [productId]: products(state[productId], action)
        }
      }
      return state
  }
}

// define another reducer which takes in state and an action
const visibleIds = (state = [], action) => {
  // switches over the action's type and updates state accordingly
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return action.products.map(product => product.id)
    default:
      return state
  }
}

// we combine the byID and visibleId reducers into one
export default combineReducers({
  byId,
  visibleIds
})

// export two more helper functions
export const getProduct = (state, id) =>
  state.byId[id]

export const getVisibleProducts = state =>
  state.visibleIds.map(id => getProduct(state, id))
