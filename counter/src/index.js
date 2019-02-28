import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux' // import and destructure createStore from the redux npm package
import Counter from './components/Counter'
import reducer from './reducers/index.js'

// create our redux store and pass in our reducer
const store = createStore(reducer)
const rootEl = document.getElementById('root')

const render = () => ReactDOM.render(

  // use ReactDOM.render to render Counter into the rootEl
  <Counter

    // set the value to the value of the state in our redux store
    value={store.getState()}

    // dispatch actions to the store with a type property
    onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
    onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
  />,
  rootEl
)

render() // initial render

// listen for updates and fire the render() callback when they happen
store.subscribe(render)
