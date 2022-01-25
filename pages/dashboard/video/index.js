import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, TextInput} from 'react-native';
import Styles from './style';
import User from '../../../images/user.jpg';

const Video = ({navigation}) => {
  const [user, setUser] = useState('');
  const [Url, setUrl] = useState('');
  const [mail, setMail] = useState('');
  return (
    <View style={Styles.body}>
      <Image source={User} style={Styles.logoHome} />
      <Text>{user} </Text>
      <Text>{mail} </Text>
      <View>
        <TextInput
          placeholder="Liens de la conférence"
          label={'vidéo Conférence'}
          onChange={setUrl}
          value={Url}
          minLength={3}
          style={Styles.inputConf}
        />
        <TouchableOpacity style={Styles.btnVideo}>
          <Text style={Styles.btnVideoTitle}>Rejoindre</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Video;
