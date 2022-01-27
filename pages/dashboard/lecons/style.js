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
  BoxContenu: {
    marginHorizontal: 5,
    borderTopWidth: 0.5,
    padding: 10,
  },
  boxTitleContenu: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  TitleContenu: {
    fontSize: 20,
    paddingBottom: 5,
  },
  boxPrint: {
    flexDirection: 'row',
  },
  boxPrintExcel: {
    borderWidth: 0.5,
    padding: 10,
    margin: 2,
    borderTopLeftRadius: 3,
    borderBottomLeftRadius: 3,
  },
  boxPrintPDF: {
    borderWidth: 0.5,
    padding: 10,
    margin: 2,
    borderRadius: 3,
  },
  boxResearch: {
    borderBottomWidth: 0.5,
    borderColor: '#767676',
    width: '100%',
  },
  boxItem: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    padding: 5,
    borderRadius: 2,
    borderWidth: 0.3,
    borderColor: '#E1DFDF',
  },
  boxItemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  boxItemButton: {
    marginVertical: 5,
    marginHorizontal: 5,
    padding: 5,
    borderRadius: 5,
    backgroundColor: '#1584c5',
    flexDirection: 'row',
    alignItems: 'center',
  },
  boxItemButtonTitle: {
    fontSize: 14,
    color: '#fff',
    marginLeft: 5,
  },
  safe: {
    marginBottom: 100,
  },
  boxButton: {
    flexDirection: 'column',
  },
});

export default Styles;
