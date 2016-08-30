import Types from './Types'
import {
  Dimensions,
} from 'react-native';

const setPlayerLocation = (gesture) => ({
  type: Types.SET_PLAYER,
  x: gesture.x0 + gesture.dx,
  y: gesture.y0 + gesture.dy,
})

const buildAsteroid = () => ({
  type: Types.BUILD_ASTEROID,
  x: Math.random() * Dimensions.get('window').width,
  y: 0,
  vx: Math.random() * 10 - 5,
  vy: Math.random() * 30,
})

const moveAsteroids = () => ({
  type: Types.MOVE_ASTEROIDS
})

/**
 Makes available all the action creators we've created.
 */
export default {
  setPlayerLocation,
  buildAsteroid,
  moveAsteroids,
}
