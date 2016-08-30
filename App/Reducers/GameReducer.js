import Types from '../Actions/Types'
import Immutable from 'seamless-immutable'
import { createReducer } from 'reduxsauce'

export const INITIAL_STATE = Immutable({
  playerX: 0,
  playerY: 0,
})

const setPlayer = (state, action) =>
  state.set('playerX', action.x)
       .set('playerY', action.y)


// map our types to our handlers
const ACTION_HANDLERS = {
  [Types.SET_PLAYER]: setPlayer,
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS)
