import React from 'react'
import { ActionCreators as UndoActionCreators } from 'redux-undo' // import from redux-undo
import { connect } from 'react-redux' // import and dextrux connect from react-redux

let UndoRedo = ({ canUndo, canRedo, onUndo, onRedo }) => (
  <p>
    <button onClick={onUndo} disabled={!canUndo}>
      Undo
    </button>
    <button onClick={onRedo} disabled={!canRedo}>
      Redo
    </button>
  </p>
)

// here we map the past and future arrays (given to us by redux-undo) to the props of this Component
// https://www.npmjs.com/package/redux-undo
const mapStateToProps = (state) => ({
  canUndo: state.todos.past.length > 0,
  canRedo: state.todos.future.length > 0
})

const mapDispatchToProps = ({
  // here we map UndoActionCreators (given to us by redux-undo) to this component's props as onUndo and onRedo
  onUndo: UndoActionCreators.undo,
  onRedo: UndoActionCreators.redo
})

UndoRedo = connect(
  mapStateToProps, // this maps (copies) the redux state to the props of this Component
  mapDispatchToProps // this maps (copies) the dispatch method to the props of this Component
)(UndoRedo) // we pass UndoRedo, wrap our UndoRedo Component in the connect HOC

export default UndoRedo
