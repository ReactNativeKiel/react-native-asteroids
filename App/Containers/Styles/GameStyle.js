import { StyleSheet } from 'react-native'
import { Colors, Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,

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
