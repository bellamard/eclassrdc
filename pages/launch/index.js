import React from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import Styles from './style';

const Launch = ({navigation}) => {
  return (
    <ImageBackground
      source={require('../../images/bglaunch.jpeg')}
      style={Styles.backgroundImage}>
      <View style={Styles.container}>
        <View style={Styles.layer}>
          <Image
            source={require('../../images/logos.png')}
            style={Styles.logo}
          />
          <View>
            <Text style={Styles.title}>Bienvenue</Text>
            <Text style={Styles.description}>
              Meilleure plateforme pour l'enseignement en ligne.
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={Styles.button}>Se connecter</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};
export default Launch;
