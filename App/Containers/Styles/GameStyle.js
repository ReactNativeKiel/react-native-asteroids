import { StyleSheet } from 'react-native'
import { Colors, Metrics, ApplicationStyles } from '../../Themes/'

import {
  Dimensions,
} from 'react-native';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export default StyleSheet.create({
  ...ApplicationStyles.screen,

  fullScreen: {
    position: 'relative',
    height: height - Metrics.navBarHeight,
    width,
  },

  asteroid: {
    backgroundColor: 'black',
    borderRadius: 25,
    height: 50,
    width: 50,
  },


  player: {
    backgroundColor: 'transparent',
    borderBottomColor: 'red',
    borderBottomWidth: 25,
    borderLeftColor: 'transparent',
    borderLeftWidth: 12.5,
    borderRightColor: 'transparent',
    borderRightWidth: 12.5,
    borderStyle: 'solid',
    height: 0,
    width: 0,
  },
})
