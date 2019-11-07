import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Icon} from 'react-native-elements';
import MapView from 'react-native-maps';

import styles from './styles';

class MapScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.container}>
        <MapView
          initialRegion={{
            latitude: 50.075599,
            longitude: 14.4249403,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          style={styles.container}
        />
        <View style={styles.rightContainer}>
          <View style={styles.iconContainer}>
            <Icon
              name="crosshairs-gps"
              type="material-community"
              size={24}
              color="white"
            />
          </View>
          <View style={styles.iconContainer}>
            <Icon name="logo-buffer" type="ionicon" size={24} color="white" />
          </View>
          <View style={styles.iconContainerLayout}>
            <Icon
              name="cash"
              type="material-community"
              size={24}
              color="white"
            />
          </View>
        </View>
        <View style={styles.btnBottomContainer}>
          <Icon name="book" type="octicon" color="white" size={32} />
        </View>
      </View>
    );
  }
}

export default MapScreen;
