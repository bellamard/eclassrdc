import React from 'react';
import {View, Text, Image} from 'react-native';
import Styles from './style';

const Accueil = ({navigation}) => {
  return (
    <View style={Styles.body}>
      <View style={Styles.bodybox}>
        <Image
          source={require('../../images/logos.png')}
          style={Styles.logosHeaders}
        />
      </View>
    </View>
  );
};
export default Accueil;
