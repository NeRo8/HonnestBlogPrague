import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  btnBottomContainer: {
    position: 'absolute',
    bottom: 35,
    right: 15,
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: '#586BA4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightContainer: {
    position: 'absolute',
    width: 50,
    right: 15,
    top: 25,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginVertical: 5,
    backgroundColor: '#586BA4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainerLayout: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginVertical: 5,
    backgroundColor: '#F76C5E',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
