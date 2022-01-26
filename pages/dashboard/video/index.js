import React, {useState, useEffect} from 'react';
import {View, Text, Image, TouchableOpacity, TextInput} from 'react-native';
import Styles from './style';
import User from '../../../images/user.jpg';

const Video = ({navigation, data}) => {
  const [user, setUser] = useState('');
  const [Url, setUrl] = useState('');
  const [Mail, setMail] = useState('');

  const checkData = () => {
    const dataUrl = () => {
      const {name, url, mail} = data;
      url === undefined ? console.log('No Data') : setUrl(url);
      mail === undefined ? console.log('No Data') : setMail(mail);
      name === undefined ? console.log('No Data') : setUser(name);
    };
    data === undefined ? console.log('No Data') : dataUrl();
  };
  checkData();

  return (
    <View style={Styles.body}>
      <Image source={User} style={Styles.logoHome} />
      <Text>{user} </Text>
      <Text>{Mail} </Text>
      <View>
        <TextInput
          placeholder="Liens de la conférence"
          label={'vidéo Conférence'}
          onChange={setUrl}
          value={Url}
          minLength={3}
          style={Styles.inputConf}
        />
        <TouchableOpacity style={Styles.btnVideo} onPress={() => navigation.navigate('Singup')}>
          <Text style={Styles.btnVideoTitle}>Rejoindre</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Video;
