import React from 'react'
import { connect } from 'react-redux' // import and destrux connect from react-redux, giving us access to the redux store
import { addTodo } from '../actions' // import our action creator

// import and destrux dispatch from props (given to us by Provider and connect())
let AddTodo = ({ dispatch }) => {

  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        // if text we use .dispatch() and pass in the return value from our action creator imported above
        dispatch(addTodo(input.value))
        input.value = ''
      }}>
        <input ref={node => {
          input = node
        }} />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}


AddTodo = connect()(AddTodo) // here we wrap our AddTodo Component in the connect HOC, giving it access to the redux store
export default AddTodo
