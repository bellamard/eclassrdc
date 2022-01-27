import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, ScrollView, SafeAreaView} from 'react-native';
import Styles from './style';
const Lecons = ({navigation, lesson}) => {
  const {id, name, teacher, myClass} = lesson;
  const [contenu, setContenu] = useState(['']);
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={Styles.body}>
          <View style={Styles.boxTitle}>
            <View style={Styles.row}>
              <Text style={Styles.title}>Cours </Text>
              <Text style={Styles.title2}>{name}</Text>
            </View>
            <View style={Styles.rowid}>
              <Text style={Styles.title}>Classe </Text>
              <Text style={Styles.title2}>{myClass}</Text>
            </View>
            <View style={Styles.row}>
              <Text style={Styles.title}>Option </Text>
              <Text style={Styles.title2}>{teacher}</Text>
            </View>
            <View style={Styles.rowid}>
              <Text style={Styles.title}>Section </Text>
              <Text style={Styles.title2}>{id}</Text>
            </View>
          </View>
        </View>
        <View>
          <Text></Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Lecons;
