import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

const Styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
  },
});

export default Styles;
