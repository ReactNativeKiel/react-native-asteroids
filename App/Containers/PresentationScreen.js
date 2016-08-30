import React, {PropTypes} from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import { Images } from '../Themes'
import { connect } from 'react-redux'
import RoundedButton from '../Components/RoundedButton'
import { Actions as NavigationActions } from 'react-native-router-flux'

// Styles
import styles from './Styles/PresentationScreenStyle'

class PresentationScreen extends React.Component {
  render () {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>
          <RoundedButton onPress={this.props.game}>
            Start Game
          </RoundedButton>
        </ScrollView>
      </View>
    )
  }
}

PresentationScreen.propTypes = {
  game: PropTypes.func,
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    game: NavigationActions.game,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PresentationScreen)
