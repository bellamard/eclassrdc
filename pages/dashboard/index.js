import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Alert,
  BackHandler,
  Image,
  ImageBackground,
} from 'react-native';
import Styles from './style';
import Icon from 'react-native-vector-icons/FontAwesome';
const myIcon = icone => <Icon name={icone} size={30} color="#607d8b" />;

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
const ItemsTab = ({current, setCurrent, title, icon}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        title === 'Quitter' ? backAction() : setCurrent(title);
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingVertical: 8,
          paddingLeft: 8,
          paddingRight: 8,
          borderRadius: 8,
          backgroundColor: current == title ? '#009efb' : 'transparent',
        }}>
        {myIcon(icon)}
        <Text
          style={{
            marginLeft: 5,
            color: current == title ? 'black' : '#607d8b',
          }}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const Dashboard = ({navigation}) => {
  const [current, setCurrent] = useState('accueil');

  return (
    <SafeAreaView style={Styles.container}>
      <View style={Styles.table}>
        <ScrollView>
          <View style={{flexGrow: 1}}>
            <ItemsTab
              current={current}
              setCurrent={setCurrent}
              title="accueil"
              icon="home"
            />
            <ItemsTab
              current={current}
              setCurrent={setCurrent}
              title="Mes Cours"
              icon="github"
            />
            <ItemsTab
              current={current}
              setCurrent={setCurrent}
              title="Mes travaux"
              icon="dropbox"
            />
            <ItemsTab
              current={current}
              setCurrent={setCurrent}
              title="Vidéo conférence"
              icon="video-camera"
            />
            <ItemsTab
              current={current}
              setCurrent={setCurrent}
              title="Discussion"
              icon="comment"
            />
            <ItemsTab
              current={current}
              setCurrent={setCurrent}
              title="Email"
              icon="comment"
            />
          </View>
        </ScrollView>
        <ItemsTab
          current={current}
          setCurrent={setCurrent}
          title="Quitter"
          icon="logout"
        />
      </View>
      <View
        style={{
          flexGrow: 1,
          backgroundColor: 'white',
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
        }}>
        <View style={Styles.header}>
          <View style={Styles.headerbox}>
            <Image
              source={require('../../images/logos.png')}
              style={Styles.logosHeaders}
            />
            {myIcon('align-justify')}
          </View>
          <View style={Styles.headerbox}>
            {myIcon('align-justify')}
            {myIcon('align-justify')}
            <Image
              source={require('../../images/user.jpg')}
              style={Styles.userHeaders}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Dashboard;
