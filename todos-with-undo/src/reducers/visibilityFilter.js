// define another reducer, setting it's initial state w/ default param
const visibilityFilter = (state = 'SHOW_ALL', action) => {
  // switch over action.type and update state accordingly
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}

export default visibilityFilter
