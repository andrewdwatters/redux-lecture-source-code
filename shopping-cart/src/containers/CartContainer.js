import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux' // import connect so we can subscribe Components to the redux store
import { checkout } from '../actions/index.js' // import one of our action creator functions
import { getTotal, getCartProducts } from '../reducers/index.js' // import two functions from our combined reducer
import Cart from '../components/Cart'

const CartContainer = ({ products, total, checkout }) => ( // destrux from props
  // render the Cart component passing it props
  <Cart
    products={products}
    total={total}
    onCheckoutClicked={() => checkout(products)} />
)

CartContainer.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired
  })).isRequired,
  total: PropTypes.string,
  checkout: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  // map getCartProducts and getTotal functions to the props of this component
  products: getCartProducts(state), 
  total: getTotal(state)
})

// wrap the component in the connect HOC, passing mapStateToProps and the checkout function as arguments 
export default connect(
  mapStateToProps,
  { checkout }
)(CartContainer)
