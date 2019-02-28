import { connect } from 'react-redux' // import connect HOC from react-redux
import { setVisibilityFilter } from '../actions' // import one of our action creators
import Link from '../components/Link'

// here we take in the redux state and ownProps (from Link) and set our visibility based 
// on the value of state.visibilityFilter (held in our Redux Store's State)
const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter
})

// here we take in the dispatch mathod and ownProps (from Link) and listen for a click event
// we call dispatch(), passing in the return value from out action creator, imported above
const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch(setVisibilityFilter(ownProps.filter))
  }
})

const FilterLink = connect(
  mapStateToProps, // just like it sounds, this maps (copies) the redux state to the props of this component
  mapDispatchToProps // this maps (copies) the dispatch method to the props of this component
)(Link) // we pass Link, wrap our Link Component in the connect HOC

export default FilterLink
