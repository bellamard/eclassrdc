import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Styles from './style';
import User from '../../../images/user.jpg';

const Item = props => {
  return (
    <View style={Styles.boxItem}>
      <Image source={User} style={Styles.logoUser} />
      <View style={Styles.boxtitle}>
        <Text style={Styles.title}>{props.name}</Text>
      </View>
    </View>
  );
};

const Discussion = ({navigation}) => {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([
    {id: 1, name: 'christian'},
    {id: 2, name: 'james'},
    {id: 3, name: 'Luc'},
    {id: 4, name: 'lionnel'},
  ]);

  const [localdata, setLocalData] = useState(false);

  const renderIte = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.push('conversation', {
            user: item.name,
            id: item.id,
          });
        }}>
        <Item name={item.name} navigation={navigation} />;
      </TouchableOpacity>
    );
  };

  useEffect(() => {}, [data, search]);
  return (
    <View style={Styles.body}>
      <Text>Discussion</Text>
      <TextInput
        onChange={setSearch}
        value={search}
        placeholder="Recherche contacts"
        style={Styles.input}
      />
      <FlatList
        data={data}
        renderItem={renderIte}
        keyExtractor={item => item.id}
        navigation={navigation}
      />
    </View>
  );
};
export default Discussion;
