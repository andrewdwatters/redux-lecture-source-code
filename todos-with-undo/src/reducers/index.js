import { combineReducers } from 'redux' // import and destrux from redux
import todos from './todos'
import visibilityFilter from './visibilityFilter'

// in this app we have two reducers, one for todos and one for the visibilityFilter
// here we pass them into combinereducers(), effectively creating one reducer function
const todoApp = combineReducers({
  todos,
  visibilityFilter
})

export default todoApp // export our combined reducer
