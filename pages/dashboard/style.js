import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

const Styles = StyleSheet.create({
  container: {
    width: width,
    height: height / 10,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#333333',
  },
  menu: {
    width: 90,
    height: 90,
  },
  titleTab: {
    color: '#607d8b',
  },
  table: {
    margin: 5,
    paddingVertical: 5,
    justifyContent: 'center',
  },
  buttonTab: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    shadowColor: '#000',
    borderBottomWidth: 0.5,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3.84,
    elevation: 2,
  },
  headerbox: {
    alignItems: 'center',
    flexDirection: 'row',
    padding: 5,
  },
  userHeaders: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: 'white',
    marginLeft: 5,
  },
  logosHeaders: {
    width: 40,
    height: 50,
  },
  body: {
    marginHorizontal: 10,
    padding: 25,
  },
  courseBody: {
    paddingHorizontal: 20,
    marginBottom: 100,
  },
  bodyBox: {
    width: '100%',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.125)',
  },
  logoHome: {
    width: 180,
    height: 220,
  },
  logoProfil: {
    marginVertical: 10,
    width: 120,
    height: 120,
  },
  itemProf: {
    width: 100,
    paddingVertical: 10,
    borderBottomWidth: 1,
  },
  itemProfEmail: {
    paddingLeft: 5,
    fontSize: 10,
    paddingVertical: 5,
    borderBottomWidth: 1,
    width: 150,
  },
});

export default Styles;
