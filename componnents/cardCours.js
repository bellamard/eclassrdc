import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Styles from './style';
import Book from '../images/book.png';

const CardCours = ({navigation, course}) => {
  const {name, myClass, teacher} = course;
  return (
    <View style={Styles.cardCourse}>
      <Image source={Book} style={Styles.courseImage} />
      <Text style={Styles.titleCourse}>{name}</Text>
      <Text style={Styles.titleClass}>{myClass}</Text>
      <Text style={Styles.titleteacher}>{teacher}</Text>
      <TouchableOpacity onPress={() => {}} style={Styles.buttonCardCourse}>
        <Text style={Styles.buttonCardCourseTitle}>Ouvrir</Text>
      </TouchableOpacity>
    </View>
  );
};
export default CardCours;
