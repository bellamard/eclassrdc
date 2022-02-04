import React from 'react';
import {View, Text, Image} from 'react-native';
import Styles from './style';
import CardId from '../../componnents/cardId';

const Accueil = ({navigation, user}) => {
  return (
    <View style={Styles.body}>
      <View style={Styles.bodyBox}>
        <Image
          source={require('../../images/logos.png')}
          style={Styles.logoHome}
        />
      </View>
      <CardId
        Name={user.name}
        MyClasse={user.classe + ', Option:' + user.option}
      />
    </View>
  );
};
export default Accueil;
