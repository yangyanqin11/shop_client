import React, { Component } from 'react'
import { View, Text, StatusBar, Dimensions, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import Nav from './src/pages/nav/Nav'

export default class App extends Component {

  render() {
    return (
      <NavigationContainer>
        <StatusBar
          backgroundColor="#f8f8f9"
          barStyle="dark-content"
          translucent={true}
          animated={true}>
        </StatusBar>
        <Nav />
      </NavigationContainer>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})