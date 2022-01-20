import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  ImageBackground,
  ActivityIndicator,
  BackHandler,
  Alert,
} from 'react-native';
import MyPicker from '../../componnents/picket';
import Styles from './style';
import axios from 'axios';

const Singup = ({navigation}) => {
  const [UserName, setUsername] = useState('');
  const school = () => {};

  return (
    <ImageBackground
      source={require('../../images/bglaunch.jpeg')}
      style={Styles.backgroundImage}>
      <ScrollView>
        <View style={Styles.container}>
          <View style={Styles.layer}>
            <Image
              source={require('../../images/logos.png')}
              style={Styles.logo}
            />
            <View style={Styles.boxLogin}>
              <Text style={Styles.title}>Inscription</Text>
              <TextInput
                style={Styles.input}
                placeholder="Nom"
                label={'Nom'}
                onChange={setUsername}
                value={UserName}
                minLength={3}
              />
              <TextInput
                style={Styles.input}
                placeholder="Prénom"
                label={'Prenom'}
                onChange={setUsername}
                value={UserName}
                minLength={3}
              />
              <TextInput
                style={Styles.input}
                placeholder="Adresse"
                label={'Adresse'}
                onChange={setUsername}
                value={UserName}
                minLength={3}
              />
              <TextInput
                style={Styles.input}
                placeholder="Téléphone"
                label={'Téléphone'}
                onChange={setUsername}
                value={UserName}
                minLength={3}
              />
              <MyPicker itemsSelect={School} />
            </View>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};
export default Singup;
