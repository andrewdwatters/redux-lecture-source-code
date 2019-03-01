import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux' // import and destrux createStore and applyMiddleware from redux
import { Provider } from 'react-redux' // bring in Provider to wrap our top level Component
import { createLogger } from 'redux-logger' // import/destrux createLogger from the redux-logger npm package (this is our middleware)
import thunk from 'redux-thunk' // import thunk from the redux-thunk npm package (creates our middleware)
import reducer from './reducers'
import { getAllProducts } from './actions'
import App from './containers/App'


// we define thunk as one of our middlewares
const middleware = [thunk];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger()); // if not in a production envrironment, we add createLogger as a second middleware
}

// we create our redux store, passing in our reducer as the first argument
// we pass the .applyMiddleware() method as our second argument and pass it all of our middleware
const store = createStore(
  reducer,
  applyMiddleware(...middleware)
)

// we immediately dispatch an action to the store by passing the return value of getAllProducts (which will be an action w/ a type and payload)
store.dispatch(getAllProducts())

render(
  // We wrap our App in the Provider HOC, passing it store via props equal to our store defined on line 20
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
