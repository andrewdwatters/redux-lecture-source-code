import { combineReducers } from 'redux' // import/destrux combineReducers

// import each of the reducers to be componed
import cart, * as fromCart from './cart'
import products, * as fromProducts from './products'

// combine our cart and products reducers and set the result to the default export
export default combineReducers({
  cart,
  products
})

// bring in the helper functions from cart/products
const getAddedIds = state => fromCart.getAddedIds(state.cart)
const getQuantity = (state, id) => fromCart.getQuantity(state.cart, id)
const getProduct = (state, id) => fromProducts.getProduct(state.products, id)


// export two amore functions to get the user's total and to get all cart products
export const getTotal = state =>
  getAddedIds(state)
    .reduce((total, id) =>
      total + getProduct(state, id).price * getQuantity(state, id),
      0
    )
    .toFixed(2)

export const getCartProducts = state =>
  getAddedIds(state).map(id => ({
    ...getProduct(state, id),
    quantity: getQuantity(state, id)
  }))
