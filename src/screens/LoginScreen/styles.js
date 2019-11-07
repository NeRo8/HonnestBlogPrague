import {StyleSheet} from 'react-native';

import {fonts} from '../../constants';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  logoContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    width: '90%',
    height: '50%',
  },
  image: {
    flex: 1,
    width: null,
    height: null,
  },
  btnTitle: {
    fontFamily: fonts.shortStack,
  },
  btnStyle: {
    height: 50,
    backgroundColor: '#324376',
  },
  btnContainer: {
    marginVertical: 5,
  },
  mainContainer: {
    flex: 1,
    paddingHorizontal: 15,
  },
});
