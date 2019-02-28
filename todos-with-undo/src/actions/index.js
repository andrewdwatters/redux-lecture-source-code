let nextTodoId = 0

// we export the functions which are "action creators" 
// each returns an action which has a type and some additional properties (payload)
export const addTodo = (text) => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})

export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id
})

// *** ACTION CREATORS ARE SIMPLY FUNCTIONS WHICH RETURN ACTIONS