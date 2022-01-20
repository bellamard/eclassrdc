import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Styles from './style';

const Header = ({navigation}) => {
  const openMenu = () => {
    navigation.openDrawer();
  };
  return (
    <View style={Styles.container}>
      <TouchableOpacity
        onPress={() => {
          console.log('openMenu');
        }}>
        <Image source={require('../images/menu.png')} style={Styles.menu} />
      </TouchableOpacity>
    </View>
  );
};
export default Header;
