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

  cardCourse: {
    marginTop: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.125)',
  },
  courseImage: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.125)',
  },
  titleCourse: {
    fontSize: 21,
    fontFamily: 'Poppins',
    color: '#455a64',
  },
  buttonCardCourse: {
    padding: 8,
    borderWidth: 1,
    borderColor: '#009efb',
    flexDirection: 'row',
    alignItems: 'center',
    margin: 5,
    borderRadius: 5,
  },
  buttonCardCourseTitle: {
    color: '#009efb',
  },
  titleteacher: {
    fontSize: 18,
  },
  titleClass: {
    marginVertical: 5,
    fontSize: 12,
  },
});

export default Styles;
