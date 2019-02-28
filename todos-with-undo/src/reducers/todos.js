import undoable, { includeAction } from 'redux-undo'

// reducer takes in current state and an action
const todo = (state, action) => {
  // switch over action.type and update state accordingly
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      }
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state
      }

      return {
        ...state,
        completed: !state.completed
      }
    default:
      return state
  }
}

// another reducer for todos, setting initial state to an empty
const todos = (state = [], action) => {
  // switch over action.type and update state accordingly
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ]
    case 'TOGGLE_TODO':
      return state.map(t =>
        todo(t, action)
      )
    default:
      return state
  }
}
// wrap our todos state (Array) in undoable (brought in from above) and pass our filter object 
const undoableTodos = undoable(todos, { filter: includeAction(['ADD_TODO', 'TOGGLE_TODO']) })

export default undoableTodos // export the "undoable" todos
