import { StyleSheet } from 'react-native'
import { Colors, Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
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
