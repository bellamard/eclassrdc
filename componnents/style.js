import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

const Styles = StyleSheet.create({
  container: {
    width: width,
    height: height / 10,
    flex: 1,
    flexDirection: 'row',
  },
  menu: {
    width: 90,
    height: 90,
  },
});

export default Styles;
