import { connect } from 'react-redux' // import and destrux connect from react-redux
import { toggleTodo } from '../actions' // import one of our action creators
import TodoList from '../components/TodoList'

// 
const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = (state) => ({
  // we map the result of calling getVisibleTodos with our Redux Store State and the visibility filter onto this Component's props as todos
  todos: getVisibleTodos(state.todos.present, state.visibilityFilter)
})

const mapDispatchToProps = ({
  onTodoClick: toggleTodo
})

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList) // here we wrap TodoList in connect, passing mapStateToProps and mapDispatchToProps so it can listen for state updates w/ subscribe() and dispatch actions to the store to update the Redux state

export default VisibleTodoList
