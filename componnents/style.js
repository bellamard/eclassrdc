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
  cardId: {
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.125)',
  },
  Idimage: {
    width: 80,
    height: 80,
    borderRadius: 50,
    top: -40,
    borderColor: 'rgba(0, 0, 0, 0.125)',
  },
  buttonCard: {
    margin: 5,
    padding: 15,
    backgroundColor: '#515bd9',
    borderRadius: 25,
  },
  buttonCardTitle: {
    color: 'white',
  },
});

export default Styles;
