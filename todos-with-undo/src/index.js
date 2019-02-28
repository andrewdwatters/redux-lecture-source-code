import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux' // import and destructure Provider from react-redux
import App from './components/App'
import reducer from './reducers/index.js'

// create our redux store, passing in our reducer
const store = createStore(reducer)

render(
  // The <Provider /> HOC makes the Redux store available to any nested components that have been wrapped in the connect() function.
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
