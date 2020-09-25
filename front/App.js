import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { AsyncStorage, StyleSheet, Text, View } from 'react-native';
import { Router, Scene, Stack } from 'react-native-router-flux';
import { connect, Provider } from 'react-redux'
import store from './src/redux/store';

/**
 * Components
 */
import LoadingScene from './src/scenes/LoadingScene';
import OnboardingScene from './src/scenes/OnboardingScene';
import SignupScene from './src/scenes/SignupScene';
import SigninScene from './src/scenes/SigninScene';
import ForgotpasswordScene from './src/scenes/ForgotpasswordScene';
import Setlocation from './src/scenes/SetlocationScene';
import Alert from './src/layout/Alert';
import ChooseScene from './src/scenes/ChooseScene';

export default function App() {

  if (store.getState().user == '') {
    return (
      <Provider store={store}>
        <Router>
            <Scene key="root">
              <Scene key="loading" component={LoadingScene} initial={true} hideNavBar={true}></Scene>
              <Scene key="forgot" component={ForgotpasswordScene}  hideNavBar={true}></Scene>
              <Scene key="setlocation" component={Setlocation}  hideNavBar={true}></Scene>
              <Scene key="signin" component={SigninScene}  hideNavBar={true}></Scene>
              <Scene key="signup" component={SignupScene}  hideNavBar={true}></Scene>
              <Scene key="onboarding" component={OnboardingScene} hideNavBar={true}></Scene>
            </Scene>
        </Router>
      </Provider>
    );
  }
  else {
    return (
      <Provider store={store}>
        <Router>
              <Scene key="root">
                <Scene key="loading" component={LoadingScene} hideNavBar={true}></Scene>
                <Scene key="setlocation" component={Setlocation} initial={true} hideNavBar={true}></Scene>
                <Scene key="choosescene" component={ChooseScene} title="Choisir"></Scene>
              </Scene>
        </Router>
      </Provider>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
