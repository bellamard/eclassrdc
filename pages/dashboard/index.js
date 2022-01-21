import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Styles from './style';
import Icon from 'react-native-vector-icons/FontAwesome';
const myIcon = icone => <Icon name={icone} size={30} color="#607d8b" />;
const ItemsTab = ({current, setCurrent, title, icon}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        setCurrent(title);
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
        <Text style={{color: current == title ? 'black' : '#607d8b'}}>
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
    </SafeAreaView>
  );
};
export default Dashboard;
