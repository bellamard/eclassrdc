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
  buttonCompose: {
    backgroundColor: '#fc4b6c',
    marginHorizontal: 5,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonComposeTitle: {
    color: 'white',
  },
  buttonMsg: {
    backgroundColor: '#F1F1F1',
    marginHorizontal: 5,
    padding: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  bodyDash: {
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: 'rgba(0, 0, 0, 0.125)',
  },
  Input: {
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.125)',
    borderRadius: 2,
  },
  boxButton: {
    flexDirection: 'row',
  },

  buttonSend: {
    marginVertical: 5,
    padding: 10,
    backgroundColor: '#26c6da',
    borderRadius: 3,
  },
  buttonCancel: {
    marginVertical: 5,
    padding: 10,
    backgroundColor: '#232a37',
    marginStart: 2,
    borderRadius: 3,
  },
  buttonDrow: {
    padding: 12,
    borderEndWidth: 1,
    borderEndColor: 'rgba(0, 0, 0, 0.125)',
  },
  boxMenu: {
    width: width,
    flexDirection: 'row',
    borderRadius: 5,
    flexWrap: 'wrap',
  },
  boxMenuItem: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.125)',
    borderRadius: 5,
    marginEnd: 5,
    marginTop: 5,
  },
  messageListBox: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.125)',
    padding: 5,
  },
  boxItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.125)',
    paddingVertical: 5,
  },
  imageItem: {
    width: 10,
    height: 10,
    resizeMode: 'contain',
  },
  colorBlue: {
    backgroundColor: '#26c6da',
    width: 10,
    height: 5,
    borderRadius: 5,
  },
  boxSujet: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleSujet: {
    paddingHorizontal: 5,
    color: '#607d8b',
  },
  titleRecipient: {
    fontWeight: 'bold',
    width: 80,
  },
  logoUser: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderRadius: 25,
    borderColor: 'rgba(0, 0, 0, 0.125)',
    marginEnd: 5,
  },
  listenBox: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'rgba(0, 0, 0, 0.125)',
    padding: 5,
    margin: 5,
  },
  titleSujetItem: {
    fontSize: 24,
    color: '#607d8b',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.125)',
  },
  boxSujetItem: {
    marginVertical: 5,
    flexDirection: 'row',
  },
});

export default Styles;
