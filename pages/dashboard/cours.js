import React, {useState} from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import Styles from './style';
import CardCours from '../../componnents/cardCours';
import axios from 'axios';

const ListCourse = ({course}) => {
  return course.map((item, index) => {
    return <CardCours key={index} course={item} />;
  });
};

const Cours = ({navigation}) => {
  const courses = [
    {
      id: 1,
      name: 'Mathématiques',
      teacher: 'Mr. Smith',
      myClass: '3eme Scientifique',
    },
    {
      id: 2,
      name: 'Physique',
      teacher: 'Mr. Smith',
      myClass: '3eme Scientifique',
    },
    {
      id: 3,
      name: 'Chimie',
      teacher: 'Mr. Smith',
      myClass: '3eme Scientifique',
    },
  ];
  return (
    <ScrollView>
      <View style={Styles.courseBody}>
        <Text>cours</Text>
        <ListCourse course={courses} />
      </View>
      <Text></Text>
    </ScrollView>
  );
};
export default Cours;
