import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

const Styles = StyleSheet.create({
  container: {
    width: width,
    height: height / 10,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#333333',
  },
  menu: {
    width: 90,
    height: 90,
  },
  titleTab: {
    color: '#607d8b',
  },
  table: {
    margin: 5,
    paddingVertical: 5,
    justifyContent: 'center',
  },
  buttonTab: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Styles;
