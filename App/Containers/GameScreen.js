import React, {PropTypes} from 'react'
import {
  PanResponder,
  Image,
  ScrollView,
  Text,
  View,
} from 'react-native'
import { connect } from 'react-redux'

import TimerMixin from 'react-timer-mixin';
import reactMixin from 'react-mixin';
import { Actions as NavigationActions } from 'react-native-router-flux'

import Actions from '../Actions/Creators';

// Styles
import styles from './Styles/GameStyle'

class GameScreen extends React.Component {

   componentWillMount() {
    const {
      setPlayerLocation,
    } = this.props;

    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => {
        return true
      },
      onStartShouldSetPanResponderCapture: (evt, gestureState) => {
        return true
      },
      onMoveShouldSetPanResponder: (evt, gestureState) => {
        return true
      },
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => {
        return true
      },
      onPanResponderMove: (evt, gestureState) => {
        setPlayerLocation(gestureState);
      },
    });
  }

  render () {
    const {
      playerX,
      playerY,
    } = this.props;

    return (
      <View style={styles.mainContainer} {...this._panResponder.panHandlers}>
        <View style={[styles.player, {
          left: playerX,
          top: playerY - 130,
        }]} />
      </View>
    )
  }
}

reactMixin(GameScreen.prototype, TimerMixin);

GameScreen.propTypes = {
}

const mapStateToProps = (state) => {
  return {
    asteroids: state.game.asteroids,
    playerX: state.game.playerX,
    playerY: state.game.playerY,
  }
}

const mapDispatchToProps = {
  buildAsteroid: Actions.buildAsteroid,
  moveAsteroids: Actions.moveAsteroids,
  setPlayerLocation: Actions.setPlayerLocation,
};

export default connect(mapStateToProps, mapDispatchToProps)(GameScreen)
