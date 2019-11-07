import React, {Component} from 'react';
import {View, Text, Image, StatusBar} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Button, Input} from 'react-native-elements';

import {images} from '../../constants';

import styles from './styles';

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibleInputContainer: false,
    };
  }

  handlePressLoginAdmin = () => {
    this.setState({
      visibleInputContainer: !this.state.visibleInputContainer,
    });
  };

  handlePressLoginAsTourist = () => {
    this.props.navigation.navigate('Map');
  };

  render() {
    return (
      <LinearGradient colors={['#F77C5E', '#F5DD90']} style={styles.container}>
        <View style={styles.mainContainer}>
          <StatusBar backgroundColor="transparent" translucent />
          <View style={styles.logoContainer}>
            <View style={styles.imageContainer}>
              <Image
                source={images.LOGO}
                style={styles.image}
                resizeMode="contain"
              />
            </View>
          </View>
          <View style={styles.container}>
            <Button
              title="Log in as tourist"
              titleStyle={styles.btnTitle}
              buttonStyle={styles.btnStyle}
              containerStyle={styles.btnContainer}
              onPress={this.handlePressLoginAsTourist}
            />
            {this.state.visibleInputContainer ? (
              <View>
                <Input
                  placeholder="Username"
                  placeholderTextColor="#324376"
                  inputStyle={{color: '#324376'}}
                  containerStyle={{paddingHorizontal: 0}}
                />
                <Input
                  placeholder="Password"
                  placeholderTextColor="#324376"
                  inputStyle={{color: '#324376'}}
                  containerStyle={{paddingHorizontal: 0}}
                />
              </View>
            ) : null}
            <Button
              title="Log in as an admin"
              titleStyle={[styles.btnTitle, {color: '#324376'}]}
              buttonStyle={[styles.btnStyle, {backgroundColor: '#E5E5E5'}]}
              containerStyle={styles.btnContainer}
              onPress={this.handlePressLoginAdmin}
            />
          </View>
        </View>
      </LinearGradient>
    );
  }
}

export default LoginScreen;
