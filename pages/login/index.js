import React, {useState} from 'react';
import {View, Text, Image, ImageBackground, TextInput} from 'react-native';
import Styles from './style';

const Login = ({navigation}) => {
  const [UserName, setUsername] = useState('');
  const [Password, setPassword] = useState('');
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
          <View style={Styles.boxLogin}>
            <Text style={Styles.title}>Login</Text>
            <TextInput
              style={Styles.input}
              placeholder="Nom utilisateur"
              label={'Nom utilisateur'}
              onChange={setUsername}
              value={UserName}
            />
            <TextInput
              style={Styles.input}
              placeholder="Mot de passe"
              label={'Mot de passe'}
              onChange={setPassword}
              value={Password}
              secureTextEntry={true}
            />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};
export default Login;
