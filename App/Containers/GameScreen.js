import React, { Component, PropTypes } from 'react'
import {
  Animated,
  Image,
  PanResponder,
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

class GameScreen extends Component {

  constructor(props) {
    super(props);

    this.state = {};
  }

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

  componentDidMount() {
    const {
      buildAsteroid,
    } = this.props;

    buildAsteroid();
    this.setInterval(() => {
      buildAsteroid();
    }, 1000);
  }

  componentWillReceiveProps({ asteroids, removeAsteroid }) {
    const animations = Object.keys(this.state).map(x => parseInt(x, 10));
    console.log(asteroids.map(x => x.id));
    asteroids.forEach(asteroid => {
      if (animations.includes(asteroid.id)) {
        return; // already initialized
      }

      const newAnimation = new Animated.ValueXY();
      this.setState({
        [asteroid.id]: newAnimation,
      });

      Animated.timing(
        newAnimation,
        {
          toValue: {
            x: asteroid.endx,
            y: asteroid.endy,
          },
          duration: 10000,
        }
      ).start(function() {
        removeAsteroid(asteroid.id);
        this.setState({
          [asteroid.id]: undefined,
        });
      }.bind(this));
    });
  }

  render () {
    const {
      asteroids,
      playerX,
      playerY,
    } = this.props;

    return (
      <View style={styles.fullScreen} {...this._panResponder.panHandlers}>
        <View style={[styles.player, {
          left: playerX,
          top: playerY - 130,
        }]} />
        {Boolean(asteroids.length) && asteroids.map(asteroid => (
          <Animated.View key={`asteroid-${asteroid.id}`} style={[
            styles.asteroid,
            {
              transform: this.state[asteroid.id].getTranslateTransform(),
              top: asteroid.y,
              left: asteroid.x,
              position: 'absolute',
            }
          ]} />
        ))}
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
  removeAsteroid: Actions.removeAsteroid,
  setPlayerLocation: Actions.setPlayerLocation,
};

export default connect(mapStateToProps, mapDispatchToProps)(GameScreen)
