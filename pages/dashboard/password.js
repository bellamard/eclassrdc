import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, Image, TouchableOpacity} from 'react-native';
import save from '../../images/content-save.png';
import cancel from '../../images/close-thick.png';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Styles from './style';
import axios from 'axios';

const Password = ({navigation}) => {
  const [userInfos, setUserInfos] = useState({});
  const [Password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  useEffect(() => {
    const getData = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('user');

        return jsonValue != null ? setUserInfos(JSON.parse(jsonValue)) : null;
      } catch (e) {
        // error reading value
        console.warn(e);
      }
    };
    getData();
  }, []);

  const changePassword = () => {};

  return (
    <View style={Styles.body}>
      <View>
        <Text>{userInfos.username}</Text>
        <View>
          <Text>Mot de passe</Text>
          <TextInput
            style={Styles.Input}
            value={Password}
            onChangeText={setPassword}
            placeholder=" entrer mot de passe"
          />
          <Text>Mot de passe de confirmation</Text>
          <TextInput
            style={Styles.Input}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            placeholder="Confirmer le mot de passe"
          />
        </View>
        <View style={Styles.boxButton}>
          <TouchableOpacity onPress={() => {}} style={Styles.buttonSendIcon}>
            <Image source={save} />
            <Text style={Styles.buttonComposeTitle}>Enregistrer</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={Styles.buttonCancelIcon}>
            <Image source={cancel} />
            <Text style={Styles.buttonComposeTitle}>Annuler</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Password;
