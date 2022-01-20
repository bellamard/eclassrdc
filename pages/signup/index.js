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
  const [Schools, setSchools] = useState(['']);
  const [Sections, setSections] = useState(['']);
  const [Options, setOptions] = useState(['']);
  const [Loading, setLoading] = useState(false);
  const [MyClass, setMyClass] = useState('');

  const myclass = () => {
    axios
      .get(
        'https://my-json-server.typicode.com/bellamard/eclassrdc/ecole?title',
      )
      .then(res => res.data)
      .then(data => {
        setMyClass(
          data.map(item => {
            return item;
          }),
        );
      })
      .catch(err => console.warn(err));
  };

  const option = () => {
    axios
      .get(
        'https://my-json-server.typicode.com/bellamard/eclassrdc/ecole?title',
      )
      .then(res => res.data)
      .then(data => {
        setOptions(
          data.map(item => {
            return item;
          }),
        );
      })
      .catch(err => console.warn(err));
  };

  const section = () => {
    axios
      .get(
        'https://my-json-server.typicode.com/bellamard/eclassrdc/ecole?title',
      )
      .then(res => res.data)
      .then(data => {
        setSections(
          data.map(item => {
            return item;
          }),
        );
      })
      .catch(err => console.warn(err));
  };
  const school = () => {
    axios
      .get('https://my-json-server.typicode.com/bellamard/eclassrdc/ecole')
      .then(res => res.data)
      .then(data =>
        setSchools(
          data.map(item => {
            return item;
          }),
        ),
      )
      .catch(err => console.warn(err));
  };

  useEffect(() => {
    option();
    school();
    section();
  }, []);

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
              <MyPicker itemsSelect={Schools} />
              <MyPicker itemsSelect={Sections} />
              <MyPicker itemsSelect={Options} />
              <MyPicker itemsSelect={MyClass} />
              <TextInput
                style={Styles.input}
                placeholder="Nom d'utilisateur"
                label={"Nom d'utilisateur"}
                onChange={setUsername}
                value={UserName}
                minLength={3}
              />
              <TextInput
                style={Styles.input}
                placeholder="Email"
                label={'E-mail'}
                onChange={setUsername}
                value={UserName}
                minLength={3}
              />
              <TouchableOpacity onPress={() => alert('enregistrement')}>
                <Text style={Styles.button}>S'enregistre</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};
export default Singup;
