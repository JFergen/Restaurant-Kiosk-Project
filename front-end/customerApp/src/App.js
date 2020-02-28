import React, {Component} from 'react';
import { View, ImageBackground, Button } from 'react-native';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import Background from './assets/background.jpeg';
import MainContainer from './components/main_container/main_container';

export default class App extends Component {
  render() {
    return (
      <View style = {{ height: '100%', width: '100%' }}>
        <ImageBackground
          source = {Background}
          style = {{ height: '100%', width: '100%' }}
        >
          <AppContainer/>
        </ImageBackground>
      </View>
    )
  }
}

// Navigation
const rootNavigator = createSwitchNavigator({
  Menu: MainContainer,
  //Login: Login,
  //Pay: PayScreen
},
{ initialRouteName: 'Menu' },
{ headerMode: 'none' })

const AppContainer = createAppContainer(rootNavigator);