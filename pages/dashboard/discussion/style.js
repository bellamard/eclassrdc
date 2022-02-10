import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

const Styles = StyleSheet.create({
  body: {
    padding: 10,
    backgroundColor: 'green',
  },
  input: {
    marginVertical: 20,
    borderWidth: 1,
    paddingHorizontal: 15,
    borderRadius: 50,
  },
  boxItem: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  logoUser: {
    width: 90,
    height: 90,
    borderRadius: 50,
  },
  boxtitle: {
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 20,
  },
});

export default Styles;
