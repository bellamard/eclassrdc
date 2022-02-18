import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  BackHandler,
  Alert,
} from 'react-native';
import square from '../../images/square-outline.png';
import check from '../../images/checkbox-outline.png';
import Styles from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const Login = ({navigation}) => {
  useEffect(() => {
    const backAction = () => {
      Alert.alert('Quitter', 'Êtes-vous sûr de vouloir quitter ?', [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        {text: 'YES', onPress: () => BackHandler.exitApp()},
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  const [UserName, setUsername] = useState('');
  const [Password, setPassword] = useState('');
  const [Remember, setRemember] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [checkMemoire, setCheckMemoire] = useState(false);
  const [checkM, setCheckM] = useState(square);

  const saveUsers = async user => {
    try {
      await AsyncStorage.setItem('user', JSON.stringify(user));
    } catch (error) {
      console.warn(error);
    }
  };

  const checkacess = () => {
    setIsLoading(true);
    const user = UserName.toLowerCase();
    const pwd = Password;
    const url = `https://my-json-server.typicode.com/bellamard/eclassrdc/user?username=${user}&password=${pwd}`;
    axios
      .get(url)
      .then(res => res.data)
      .then(data => {
        if (data.length > 0) {
          const {id, username, classUser, optionUser} = data[0];
          saveUsers({id, username, classUser, optionUser});
          setIsLoading(false);
          navigation.push('Dashboard');
        } else {
          setUsername('');
          setPassword('');
          setIsLoading(false);
          setIsError(true);
        }
      })
      .catch(err => {
        setUsername('');
        setPassword('');
        setIsError(true);
        setIsLoading(false);
        console.warn(err);
      });
  };
  const memoiryAccess = () => {
    setCheckMemoire(!checkMemoire);
    checkMemoire ? setCheckM(square) : setCheckM(check);
  };

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
          {isLoading ? (
            <ActivityIndicator size="large" color="#0000ff" />
          ) : (
            <View style={Styles.boxLogin}>
              <TextInput
                style={Styles.input}
                placeholder="Nom utilisateur"
                label={'Nom utilisateur'}
                onChangeText={setUsername}
                value={UserName}
                minLength={3}
              />
              <TextInput
                style={Styles.input}
                placeholder="Mot de passe"
                label={'Mot de passe'}
                onChangeText={setPassword}
                value={Password}
                secureTextEntry={true}
                minLength={6}
              />
              <View style={Styles.checkbox}>
                <TouchableOpacity
                  onPress={() => memoiryAccess()}
                  style={Styles.checkBoxform}>
                  <Image source={checkM} />
                  <Text style={Styles.checkBox}>Se souvenir de moi</Text>
                </TouchableOpacity>
              </View>

              <TouchableOpacity onPress={() => checkacess()}>
                <Text style={Styles.button}>SE CONNECTER</Text>
              </TouchableOpacity>
              <View>
                <Text>Vous n'avez pas de compte?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Singup')}>
                  <Text style={Styles.signe}>Créer un compte</Text>
                </TouchableOpacity>
                {isError ? (
                  <Text style={{color: 'red'}}>Erreur d'authentification</Text>
                ) : null}
              </View>
            </View>
          )}
        </View>
      </View>
    </ImageBackground>
  );
};
export default Login;
