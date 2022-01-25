import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

const Styles = StyleSheet.create({
  body: {
    marginHorizontal: 10,
    padding: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoHome: {
    width: 180,
    height: 180,
    borderRadius: 90,
    borderWidth: 1,
    borderColor: '#001f3f',
  },
  inputConf: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#000',
    padding: 10,
    color: 'red',
    marginBottom: 10,
  },
  btnVideo: {
    margin: 5,
    padding: 15,
    backgroundColor: '#515bd9',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnVideoTitle: {
    color: '#fff',
  },
});

export default Styles;
