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
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  logoItem: {
    width: 70,
    height: 70,
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

  flatlist: {
    height: height - 170,

    flexDirection: 'column-reverse',
  },
  container: {
    flexDirection: 'column',
    flex: 1,
    paddingHorizontal: 10,
  },
  boxMessage: {flex: 5},
  boxNametchat: {
    flex: 0.5,
    justifyContent: 'center',
  },
  boxInput: {
    flex: 1,
  },
  cardMessage: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  boxItemMessage: {
    backgroundColor: 'white',
    flex: 3,
    padding: 10,
    marginHorizontal: 5,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#e3e3e3',
  },
  sendingMessageIcon: {
    width: 30,
    height: 30,
    alignItems: 'center',
  },
});

export default Styles;
