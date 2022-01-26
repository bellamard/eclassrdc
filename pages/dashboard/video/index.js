import React, {useState, useEffect} from 'react';
import {View, Text, Image, TouchableOpacity, TextInput} from 'react-native';
import Styles from './style';
import User from '../../../images/user.jpg';

const Video = ({navigation}) => {
  const [user, setUser] = useState('');
  const [Url, setUrl] = useState('');
  const [Mail, setMail] = useState('');

  const checkData = () => {
    setUrl('https://meet.jit.si/testeclassrdc');
    setMail('smartapp@gmail.com');
    setUser('smartapp');
  };
  useEffect(() => {
    checkData();
  });

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
        <TouchableOpacity
          style={Styles.btnVideo}
          onPress={() => {
            console.log({user, Url, Mail});
            navigation.push('Conference', {
              user: user,
              roomName: Url,
              mail: Mail,
            });
          }}>
          <Text style={Styles.btnVideoTitle}>Rejoindre</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Video;
