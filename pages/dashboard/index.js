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
import menuImage from '../../images/menu.png';
import messageImage from '../../images/msg.png';
import mailImage from '../../images/email.png';
import coursImage from '../../images/book-solid.png';
import homeImage from '../../images/home.png';
import travailImage from '../../images/travail.png';
import videoImage from '../../images/video.png';
import discusionImage from '../../images/comment.png';
import mailImageI from '../../images/email2.png';
import powerImage from '../../images/power.png';

const myIcon = icone => (
  <Image source={icone} style={{width: 30, height: 30}} color="#607d8b" />
);

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
  setshowStateProfil,
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
    setshowStateProfil(true);
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
  const [userInfo, setUserInfo] = useState({
    name: 'Bellamard kiala',
    classe: '4é CG',
    option: 'Scientifique',
  });
  // useEffect(() => {
  //   setshowStateProfil(!showStateProfil);
  // }, [showStateProfil]);
  const [showStateProfil, setshowStateProfil] = useState(true);
  const offsetValue = useRef(new Animated.Value(0)).current;
  const scaleValue = useRef(new Animated.Value(1)).current;
  const closeButtonOffset = useRef(new Animated.Value(0)).current;

  const scaleValueProfile = useRef(new Animated.Value(1)).current;
  const offsetValueProfile = useRef(new Animated.Value(0)).current;
  const closeButtonOffsetProfile = useRef(new Animated.Value(0)).current;

  const mypage = current => {
    switch (current) {
      case 'Accueil':
        return <Accueil user={userInfo} />;

      case 'Mes Cours':
        return <Cours setCurrent={setCurrent} setLesson={setLesson} />;

      case 'Discussion':
        return <Discussion navigation={navigation} />;

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
  const menuProfil = () => {
    return (
      <Animated.View
        style={{
          flexGrow: 1,
          backgroundColor: 'white',
          position: 'absolute',
          top: 60,
          zIndex: 100,
          width: '100%',
          display: showStateProfil ? 'none' : 'flex',
          borderBottomWidth: 1,
          padding: 10,
          transform: [
            {scale: scaleValueProfile},
            {translateX: offsetValueProfile},
            {
              translateY: closeButtonOffsetProfile,
            },
          ],
        }}>
        <View>
          <View>
            <Image
              source={require('../../images/user.jpg')}
              style={Styles.logoProfil}
            />
            <Text>{userInfo.name}</Text>

            <Text style={Styles.itemProfEmail}>
              {userInfo.name}+'@eclasse.com'
            </Text>
          </View>
          <View>
            <TouchableOpacity onPress={() => {}} style={Styles.itemProf}>
              <Text>Mon Compte</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                backAction();
              }}
              style={Styles.itemProf}>
              <View style={Styles.headerbox}>
                <Image style={{width: 20, height: 20}} source={powerImage} />
                <Text>Quitter</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </Animated.View>
    );
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
              setshowStateProfil={setshowStateProfil}
              title="Accueil"
              icon={homeImage}
            />
            <ItemsTab
              current={current}
              setCurrent={setCurrent}
              setShowMenu={setShowMenu}
              showMenu={showMenu}
              offsetValue={offsetValue}
              scaleValue={scaleValue}
              closeButtonOffset={closeButtonOffset}
              setshowStateProfil={setshowStateProfil}
              title="Mes Cours"
              icon={coursImage}
            />
            <ItemsTab
              current={current}
              setCurrent={setCurrent}
              setShowMenu={setShowMenu}
              showMenu={showMenu}
              offsetValue={offsetValue}
              scaleValue={scaleValue}
              closeButtonOffset={closeButtonOffset}
              setshowStateProfil={setshowStateProfil}
              title="Mes travaux"
              icon={travailImage}
            />
            <ItemsTab
              current={current}
              setCurrent={setCurrent}
              setShowMenu={setShowMenu}
              showMenu={showMenu}
              offsetValue={offsetValue}
              scaleValue={scaleValue}
              closeButtonOffset={closeButtonOffset}
              setshowStateProfil={setshowStateProfil}
              title="Vidéo conférence"
              icon={videoImage}
            />
            <ItemsTab
              current={current}
              setCurrent={setCurrent}
              setShowMenu={setShowMenu}
              showMenu={showMenu}
              offsetValue={offsetValue}
              scaleValue={scaleValue}
              closeButtonOffset={closeButtonOffset}
              setshowStateProfil={setshowStateProfil}
              title="Discussion"
              icon={discusionImage}
            />
            <ItemsTab
              current={current}
              setCurrent={setCurrent}
              setShowMenu={setShowMenu}
              showMenu={showMenu}
              offsetValue={offsetValue}
              scaleValue={scaleValue}
              closeButtonOffset={closeButtonOffset}
              setshowStateProfil={setshowStateProfil}
              title="Email"
              icon={mailImageI}
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
          setshowStateProfil={setshowStateProfil}
          title="Quitter"
          icon={powerImage}
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
                  setshowStateProfil(true);
                  setShowMenu(!showMenu);
                }}>
                {myIcon(menuImage)}
                {/* <Text style={Styles.text}>Menu</Text> */}
              </TouchableOpacity>
            </View>

            <View style={Styles.headerbox}>
              <TouchableOpacity onPress={() => {}}>
                {myIcon(messageImage)}
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {}}>
                {myIcon(mailImage)}
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  Animated.timing(scaleValueProfile, {
                    toValue: showStateProfil ? 1 : 0.88,
                    duration: 300,
                    useNativeDriver: true,
                  }).start();

                  Animated.timing(offsetValueProfile, {
                    // YOur Random Value...
                    toValue: showStateProfil ? 0 : 230,
                    duration: 300,
                    useNativeDriver: true,
                  }).start();

                  Animated.timing(closeButtonOffsetProfile, {
                    // YOur Random Value...
                    toValue: !showStateProfil ? -30 : 0,
                    duration: 300,
                    useNativeDriver: true,
                  }).start();

                  setshowStateProfil(!showStateProfil);
                }}>
                <Image
                  source={require('../../images/user.jpg')}
                  style={Styles.userHeaders}
                />
              </TouchableOpacity>
            </View>
          </View>
          {menuProfil()}
          {mypage(current)}
        </Animated.View>
      </Animated.View>
    </SafeAreaView>
  );
};
export default Dashboard;
