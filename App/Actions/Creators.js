import Types from './Types'
import {
  Dimensions,
} from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

function calculateEndpoint(x, y, vx, vy) {
  // x + a * vx = 0 || x + a * vx = deviceWidth
  const leftBorder = (-x) / vx;
  const rightBorder = (deviceWidth - x) / vx;

  // y + a * vy = deviceHeight
  const bottomBorder = (deviceHeight - y) / vy;

  const getPoint = a => ({
    x: x + a * vx,
    y: y + a * vy,
  });

  const leftBorderAbs = leftBorder < 0 ? Infinity : leftBorder;
  const rightBorderAbs = rightBorder < 0 ? Infinity : rightBorder;
  const bottomBorderAbs = bottomBorder < 0 ? Infinity : bottomBorder;

  if (leftBorderAbs <= rightBorderAbs && leftBorderAbs <= bottomBorderAbs) {
    // left border hit
    return getPoint(leftBorderAbs);
  }

  if (rightBorderAbs <= leftBorderAbs && rightBorderAbs <= bottomBorderAbs) {
    // right border hit
    return getPoint(rightBorderAbs);
  }

  if (bottomBorderAbs <= leftBorderAbs && bottomBorderAbs <= rightBorderAbs) {
    // left border hit
    return getPoint(bottomBorderAbs);
  }

  throw "This should not happen";
}

const setPlayerLocation = (gesture) => ({
  type: Types.SET_PLAYER,
  x: gesture.x0 + gesture.dx,
  y: gesture.y0 + gesture.dy,
})

let index = 1;
const buildAsteroid = () => {
  const x = Math.random() * deviceWidth;
  const y = 0;
  const vx = Math.random() * 10 - 5;
  const vy = Math.random() * 30;
  const endPoint = calculateEndpoint(x, y, vx, vy);

  return {
    endx: endPoint.x,
    endy: endPoint.y,
    id: index++,
    type: Types.BUILD_ASTEROID,
    vx,
    vy,
    x,
    y,
  };
}

const removeAsteroid = id => ({
  id,
  type: Types.REMOVE_ASTEROID,
});

/**
 Makes available all the action creators we've created.
 */
export default {
  buildAsteroid,
  removeAsteroid,
  setPlayerLocation,
}
