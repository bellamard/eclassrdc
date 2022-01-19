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
    padding: 20,
    borderRadius: 5,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#009efb',
    textAlign: 'center',
  },
  description: {
    textAlign: 'center',
    fontSize: 24,
  },
  button: {
    marginTop: 20,
    width: '100%',
    height: 50,
    backgroundColor: '#009efb',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 28,
    fontWeight: 'bold',
    borderRadius: 5,
    color: '#fff',
  },
});
export default Styles;
