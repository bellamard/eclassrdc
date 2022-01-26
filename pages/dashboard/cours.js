import React, {useState} from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import Styles from './style';
import CardCours from '../../componnents/cardCours';
import axios from 'axios';

const ListCourse = ({course, navigation}) => {
  return course.map((item, index) => {
    return <CardCours key={index} course={item} navigation={navigation} />;
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
      session: true,
    },
  ];
  const date = new Date().getFullYear();
  return (
    <ScrollView>
      <SafeAreaView>
        <View style={Styles.courseBody}>
          <Text>cours</Text>
          <ListCourse course={courses} navigation={navigation} />
          <Text>&copy; {date} e-classerdc</Text>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};
export default Cours;
