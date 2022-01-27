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
  body: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#17a2b8',
    margin: 10,
  },
  row: {
    flexDirection: 'row',
    paddingVertical: 5,
    backgroundColor: '#f2f4f8',
    paddingHorizontal: 5,
  },
  rowid: {
    flexDirection: 'row',
    paddingVertical: 5,
    paddingHorizontal: 5,
  },
  title: {
    flex: 1,
    fontWeight: 'bold',
    color: '#000',
  },
  title2: {
    flex: 2,
    color: '#666868',
    paddingLeft: 2,
  },
  boxTitle: {
    borderWidth: 0.25,
    borderColor: '#6c757d',
  },
});

export default Styles;
