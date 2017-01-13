/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import MapView from 'react-native-maps';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class trackDest extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Track Dest!
        </Text>
        <Text style={styles.welcome}>
        This is a test
        </Text>
        <MapView style={styles.map} initialRegion={{
            latitude: 19.0760,
            longitude: 72.8777,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        height: 400,
        width: 400,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
         },
});

AppRegistry.registerComponent('trackDest', () => trackDest);
