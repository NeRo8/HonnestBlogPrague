import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import LoginScreen from '../screens/LoginScreen';
import MapScreen from '../screens/MapScreen';

const AppNavigation = createStackNavigator({
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      header: null,
    },
  },
  Map: {
    screen: MapScreen,
    navigationOptions: {
      header: null,
    },
  },
});

export default createAppContainer(AppNavigation);
