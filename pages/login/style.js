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
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  logo: {
    width: 210,
    height: 240,
  },
  layer: {
    width: width - 40,
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 40,
    padding: 40,
    borderRadius: 5,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#009efb',
    textAlign: 'center',
  },
  input: {
    padding: 5,
    color: 'black',
    borderBottomWidth: 1,
    margin: 5,
    borderRadius: 5,
    width: '100%',
  },
  boxLogin: {
    width: '100%',
  },
});
export default Styles;
