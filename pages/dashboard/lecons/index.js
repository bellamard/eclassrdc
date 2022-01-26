import React from 'react';
import {View, Text, TextInput, ScrollView, SafeAreaView} from 'react-native';
import Styles from './style';
const Lecons = ({navigation}) => {
  return (
    <ScrollView>
      <View style={Styles.container}>
        <Text>Lecons</Text>
      </View>
    </ScrollView>
  );
};

export default Lecons;
