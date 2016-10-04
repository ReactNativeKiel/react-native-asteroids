import Types from '../Actions/Types'
import Immutable from 'seamless-immutable'
import { createReducer } from 'reduxsauce'

import {
  Dimensions,
} from 'react-native';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export const INITIAL_STATE = Immutable({
  asteroids: [],
  playerX: 200,
  playerY: 200,
})

const setPlayer = (state, action) =>
  state.set('playerX', action.x)
       .set('playerY', action.y)


const buildAsteroid = (state, action) =>
  state.set('asteroids', state.asteroids.concat(action))

const removeAsteroid = (state, action) =>
  state.set('asteroids', state.asteroids.filter(asteroid => asteroid.id !== action.id))

// map our types to our handlers
const ACTION_HANDLERS = {
  [Types.BUILD_ASTEROID]: buildAsteroid,
  [Types.REMOVE_ASTEROID]: removeAsteroid,
  [Types.SET_PLAYER]: setPlayer,
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS)
