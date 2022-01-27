import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Styles from './style';
import Book from '../images/book.png';
import Icon from 'react-native-vector-icons/FontAwesome';
const MyIcon = icone => <Icon name="eye" size={30} color="#009efb" />;
const MyVideo = icone => <Icon name="video-camera" size={30} color="#fff" />;
const CardCours = ({course, conference, myCourse}) => {
  const {name, myClass, teacher, session} = course;

  return (
    <View style={Styles.cardCourse}>
      <Image source={Book} style={Styles.courseImage} />
      <Text style={Styles.titleCourse}>{name}</Text>
      <Text style={Styles.titleClass}>{myClass}</Text>
      <Text style={Styles.titleteacher}>{teacher}</Text>

      <View style={Styles.boxButtonCourse}>
        <TouchableOpacity onPress={myCourse} style={Styles.buttonCardCourse}>
          <MyIcon />
          <Text style={Styles.buttonCardCourseTitle}>Ouvrir</Text>
        </TouchableOpacity>
        {session ? (
          <TouchableOpacity onPress={conference} style={Styles.buttonCardVideo}>
            <MyVideo />
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
};
export default CardCours;
