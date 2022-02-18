import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Styles from './style';

const CardId = ({Name, MyClasse}) => {
  return (
    <View style={Styles.cardId}>
      <Image source={require('../images/user.jpg')} style={Styles.Idimage} />
      <Text>{Name}</Text>
      <Text style={Styles.myClass}>{MyClasse}</Text>
      <TouchableOpacity onPress={() => {}} style={Styles.buttonCard}>
        <Text style={Styles.buttonCardTitle}>Mot de Passe</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}} style={Styles.buttonCard}>
        <Text style={Styles.buttonCardTitle}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};
export default CardId;
