// reducer where we take in state and an action, default param sets initialState
export default (state = 0, action) => {
  // switch over action.type and return the appropriately updated state
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}
