import Types from '../Actions/Types'
import Immutable from 'seamless-immutable'
import { createReducer } from 'reduxsauce'

export const INITIAL_STATE = Immutable({
  asteroids: [],
  playerX: 0,
  playerY: 0,
})

const setPlayer = (state, action) =>
  state.set('playerX', action.x)
       .set('playerY', action.y)


const buildAsteroid = (state, action) =>
  state.set('asteroids', state.asteroids.concat(action))

const moveAsteroids = (state, action) =>
  state.set('asteroids', state.asteroids.map(asteroid =>
    asteroid.set('x', asteroid.x + asteroid.vx)
            .set('y', asteroid.y + asteroid.vy)
  ))

// map our types to our handlers
const ACTION_HANDLERS = {
  [Types.BUILD_ASTEROID]: buildAsteroid,
  [Types.MOVE_ASTEROIDS]: moveAsteroids,
  [Types.SET_PLAYER]: setPlayer,
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS)
