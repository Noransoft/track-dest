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
  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      },
    };
  }

  onRegionChange(region) {
    console.log(" - about to set state to : " + JSON.stringify(region));
    this.setState({ region })
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log("Current position is " + JSON.stringify(position))

        this.onRegionChange({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.1
        });
      },

      (error) => console.log(JSON.stringify(error)),
      {enableHighAccuracy: true, timeout: 10000, maximumAge: 1000}
    );

    this.watchID = navigator.geolocation.watchPosition((position) => {
      console.log("Found this location " + JSON.stringify(position));
      this.onRegionChange({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.1
      });
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Track Dest!
        </Text>
        <Text style={styles.welcome}>
          This is a test
        </Text>
        <MapView
          style={styles.map}
          region={this.state.region}
          onRegionChange={this.onRegionChange}/>
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
  }
});

AppRegistry.registerComponent('trackDest', () => trackDest);
