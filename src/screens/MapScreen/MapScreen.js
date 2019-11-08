import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Icon} from 'react-native-elements';
import MapView, {Marker} from 'react-native-maps';
import {connect} from 'react-redux';

import styles from './styles';

class MapScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude: 50.075599,
        longitude: 14.4249403,
        longitudeDelta: 0.0922,
        latitudeDelta: 0.0421,
      },
    };
  }

  componentDidMount() {
    const {layoutCash} = this.props;

    console.log(layoutCash);
  }

  handlePressPlus = () => {
    const {region} = this.state;
    const newRegion = {
      ...region,
      latitudeDelta: region.latitudeDelta * 2,
      longitudeDelta: region.longitudeDelta * 2,
    };
    this.setState({
      region: newRegion,
    });
  };

  handlePressMinus = () => {
    const {region} = this.state;
    const newRegion = {
      ...region,
      latitudeDelta: region.latitudeDelta / 2,
      longitudeDelta: region.longitudeDelta / 2,
    };
    this.setState({
      region: newRegion,
    });
  };

  render() {
    const {layoutCash} = this.props;
    return (
      <View style={styles.container}>
        <MapView region={this.state.region} style={styles.container}>
          {layoutCash.map(element => (
            <Marker coordinate={element.coordinate}>
              <View
                style={{
                  width: 30,
                  height: 30,
                  borderTopRightRadius: 15,
                  borderTopLeftRadius: 15,
                  borderBottomLeftRadius: 15,
                  backgroundColor: 'red',
                  transform: [{rotate: 0.8}],
                }}
              />
            </Marker>
          ))}
        </MapView>
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
          <View style={[styles.iconContainer, {backgroundColor: 'white'}]}>
            <Icon
              name="ios-add"
              type="ionicon"
              size={24}
              color="black"
              onPress={this.handlePressMinus}
            />
          </View>
          <View style={[styles.iconContainer, {backgroundColor: 'white'}]}>
            <Icon
              name="ios-remove"
              type="ionicon"
              size={24}
              color="black"
              onPress={() => this.handlePressPlus()}
            />
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

const mapStateToProps = state => ({
  layoutCash: state.layouts.layoutCash,
});

export default connect(
  mapStateToProps,
  null,
)(MapScreen);
