import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

const Styles = StyleSheet.create({
  body: {
    padding: 10,
  },
  input: {
    marginVertical: 20,
    borderWidth: 1,
    paddingHorizontal: 15,
    borderRadius: 50,
    borderColor: '#e3e3e3',
  },
  boxItem: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#e3e3e3',
    marginVertical: 5,
    backgroundColor: '#fff',
  },
  logoUser: {
    width: 90,
    height: 90,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#e3e3e3',
  },
  boxtitle: {
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 20,
    color: 'black',
  },
});

export default Styles;
