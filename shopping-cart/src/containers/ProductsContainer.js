import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux' // bring in connect so we can subscribe to the redux store
import { addToCart } from '../actions' // bring in an action creator function
import { getVisibleProducts } from '../reducers/products' // bring in a helper function
import ProductItem from '../components/ProductItem'
import ProductsList from '../components/ProductsList'


// define our ProductsContainer Component passing products and addToCard as destructured props
const ProductsContainer = ({ products, addToCart }) => (

  <ProductsList title="Products">
    {/* map over the Array of products and render a child ProductItem Component for each with the appropriate props */}
    {products.map(product =>
      <ProductItem
        key={product.id}
        product={product}
        onAddToCartClicked={() => addToCart(product.id)} />
    )}
  </ProductsList>
)

ProductsContainer.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inventory: PropTypes.number.isRequired
  })).isRequired,
  addToCart: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  // map the visible products to a prop called "products" on this Component
  products: getVisibleProducts(state.products)
})

// connect our Component to the redux store (listen for updates by wrapping it in the connect HOC), passing mapStateToProps and the addToCart action creator as arguments
export default connect(
  mapStateToProps,
  { addToCart }
)(ProductsContainer)
