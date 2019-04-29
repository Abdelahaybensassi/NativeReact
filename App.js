/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Login from './Component/Login/Login'
import Contacts from './Component/Contacts/Contacts'
import Detail from './Component/Contacts/Detail/Detail'
import Keyboard from './Component/Keyboard/Keyboard'
import { Router, Scene } from 'react-native-router-flux';
export default class App extends React.Component {
  render() {
    return (
      <Router>
      <Scene key="root">
        <Scene key="Login"
          component={Login}
          title="Login"
          hideNavBar={true}
          initial
        />
        <Scene
          key="contact"
          component={Contacts}
          hideNavBar={true}
          title="Contacts"
        />
        <Scene
        key="detail"
        component={Detail}
        hideNavBar={true}
        title="Detail"
      />
      <Scene
      key="Keyboard"
      component={Keyboard}
      hideNavBar={true}
      title="Keyboard"
    />
      </Scene>
    </Router>
    );
  }
}

