/* eslint-disable react-native/no-inline-styles */
import React, {useState, useRef, useEffect} from 'react';
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
import Video from './video';
import Lecons from './lecons';
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
const ItemsTab = ({
  current,
  setCurrent,
  title,
  icon,
  setShowMenu,
  showMenu,
  scaleValue,
  closeButtonOffset,
  offsetValue,
  label,
}) => {
  const actionNavigation = () => {
    setCurrent(title);
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
  };

  return (
    <TouchableOpacity
      onPress={() => {
        title === 'Quitter' ? backAction() : actionNavigation();
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingVertical: 8,
          paddingLeft: 8,
          paddingRight: 8,
          borderRadius: 8,
          backgroundColor: current === title ? '#009efb' : 'transparent',
        }}>
        {myIcon(icon)}
        <Text
          style={{
            marginLeft: 5,
            color: current === title ? 'black' : '#607d8b',
          }}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const Dashboard = ({navigation}) => {
  const [current, setCurrent] = useState('Accueil');
  const [lesson, setLesson] = useState({});
  const [showMenu, setShowMenu] = useState(false);
  const offsetValue = useRef(new Animated.Value(0)).current;
  const scaleValue = useRef(new Animated.Value(1)).current;
  const closeButtonOffset = useRef(new Animated.Value(0)).current;

  const mypage = current => {
    switch (current) {
      case 'Accueil':
        return <Accueil />;

      case 'Mes Cours':
        return <Cours setCurrent={setCurrent} setLesson={setLesson} />;

      case 'Discussion':
        return <Discussion />;

      case 'Email':
        return <Mail />;

      case 'Mes travaux':
        return <Travaux />;

      case 'Vidéo conférence':
        return <Video navigation={navigation} />;

      case 'Lecons':
        return <Lecons lesson={lesson} navigation={navigation} />;
    }
  };

  return (
    <SafeAreaView style={Styles.container}>
      <View style={Styles.table}>
        <ScrollView>
          <View style={{flexGrow: 1}}>
            <ItemsTab
              current={current}
              setCurrent={setCurrent}
              setShowMenu={setShowMenu}
              showMenu={showMenu}
              offsetValue={offsetValue}
              scaleValue={scaleValue}
              closeButtonOffset={closeButtonOffset}
              title="Accueil"
              icon="home"
            />
            <ItemsTab
              current={current}
              setCurrent={setCurrent}
              setShowMenu={setShowMenu}
              showMenu={showMenu}
              offsetValue={offsetValue}
              scaleValue={scaleValue}
              closeButtonOffset={closeButtonOffset}
              title="Mes Cours"
              icon="github"
            />
            <ItemsTab
              current={current}
              setCurrent={setCurrent}
              setShowMenu={setShowMenu}
              showMenu={showMenu}
              offsetValue={offsetValue}
              scaleValue={scaleValue}
              closeButtonOffset={closeButtonOffset}
              title="Mes travaux"
              icon="dropbox"
            />
            <ItemsTab
              current={current}
              setCurrent={setCurrent}
              setShowMenu={setShowMenu}
              showMenu={showMenu}
              offsetValue={offsetValue}
              scaleValue={scaleValue}
              closeButtonOffset={closeButtonOffset}
              title="Vidéo conférence"
              icon="video-camera"
            />
            <ItemsTab
              current={current}
              setCurrent={setCurrent}
              setShowMenu={setShowMenu}
              showMenu={showMenu}
              offsetValue={offsetValue}
              scaleValue={scaleValue}
              closeButtonOffset={closeButtonOffset}
              title="Discussion"
              icon="comment"
            />
            <ItemsTab
              current={current}
              setCurrent={setCurrent}
              setShowMenu={setShowMenu}
              showMenu={showMenu}
              offsetValue={offsetValue}
              scaleValue={scaleValue}
              closeButtonOffset={closeButtonOffset}
              title="Email"
              icon="comment"
            />
          </View>
        </ScrollView>
        <ItemsTab
          current={current}
          setCurrent={setCurrent}
          setShowMenu={setShowMenu}
          showMenu={showMenu}
          offsetValue={offsetValue}
          scaleValue={scaleValue}
          closeButtonOffset={closeButtonOffset}
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
          {mypage(current)}
        </Animated.View>
      </Animated.View>
    </SafeAreaView>
  );
};
export default Dashboard;
