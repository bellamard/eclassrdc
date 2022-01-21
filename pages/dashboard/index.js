import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Alert,
  BackHandler,
  Image,
  Animated,
} from 'react-native';
import Styles from './style';
import Icon from 'react-native-vector-icons/FontAwesome';
import Accueil from './accueil';
import Cours from './cours';
import Discussion from './discussion';
import Mail from './mail';
import Travaux from './travaux';
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
  const [showMenu, setShowMenu] = useState(false);

  const offsetValue = useRef(new Animated.Value(0)).current;
  const scaleValue = useRef(new Animated.Value(1)).current;
  const closeButtonOffset = useRef(new Animated.Value(0)).current;

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
      <Animated.View
        style={{
          flexGrow: 1,
          backgroundColor: 'white',
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          paddingHorizontal: showMenu ? 15 : 0,
          paddingVertical: showMenu ? 20 : 0,
          borderRadius: showMenu ? 15 : 0,
          transform: [{scale: scaleValue}, {translateX: offsetValue}],
        }}>
        <Animated.View
          style={{
            transform: [
              {
                translateY: closeButtonOffset,
              },
            ],
          }}>
          <View style={Styles.header}>
            <View style={Styles.headerbox}>
              <Image
                source={require('../../images/logos.png')}
                style={Styles.logosHeaders}
              />
              <TouchableOpacity
                onPress={() => {
                  // Do Actions Here....
                  // Scaling the view...
                  Animated.timing(scaleValue, {
                    toValue: showMenu ? 1 : 0.88,
                    duration: 300,
                    useNativeDriver: true,
                  }).start();

                  Animated.timing(offsetValue, {
                    // YOur Random Value...
                    toValue: showMenu ? 0 : 230,
                    duration: 300,
                    useNativeDriver: true,
                  }).start();

                  Animated.timing(closeButtonOffset, {
                    // YOur Random Value...
                    toValue: !showMenu ? -30 : 0,
                    duration: 300,
                    useNativeDriver: true,
                  }).start();

                  setShowMenu(!showMenu);
                }}>
                {myIcon('align-justify')}
                <Text style={Styles.text}>Menu</Text>
              </TouchableOpacity>
            </View>

            <View style={Styles.headerbox}>
              <TouchableOpacity onClick={() => {}}>
                {myIcon('align-justify')}
              </TouchableOpacity>
              <TouchableOpacity onClick={() => {}}>
                {myIcon('align-justify')}
              </TouchableOpacity>
              <TouchableOpacity onClick={() => {}}>
                <Image
                  source={require('../../images/user.jpg')}
                  style={Styles.userHeaders}
                />
              </TouchableOpacity>
            </View>
          </View>
        </Animated.View>
      </Animated.View>
    </SafeAreaView>
  );
};
export default Dashboard;
