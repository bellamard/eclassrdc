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
    <TouchableOpacity
      onPress={() => {
        console.log(props.name);
        props.navigation.navigate('Conversation', {
          user: props.name,
          id: props.id,
        });
      }}>
      <View style={Styles.boxItem}>
        <Image source={User} style={Styles.logoUser} />
        <View style={Styles.boxtitle}>
          <Text style={Styles.title}>{props.name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const serveurData = [
  {id: 1, name: 'christian'},
  {id: 2, name: 'james'},
  {id: 3, name: 'Luc'},
  {id: 4, name: 'lionnel'},
  {id: 5, name: 'christian'},
  {id: 6, name: 'james'},
  {id: 7, name: 'Luc'},
  {id: 8, name: 'lionnel'},
];

const Discussion = ({navigation}) => {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);

  const renderIte = ({item}) => {
    return <Item name={item.name} navigation={navigation} />;
  };

  useEffect(() => {
    setData(
      serveurData
        .filter(student => {
          if (search === '') {
            console.log(student.name);
            return student;
          } else if (student.name.includes(search)) {
            return student;
          }
        })
        .map(students => students),
    );
  }, [search]);
  return (
    <View style={Styles.body}>
      <TextInput
        onChange={setSearch}
        value={search}
        placeholder="Recherche contacts"
        style={Styles.input}
      />

      <FlatList
        onPress={item => {
          navigation.navigate('Conversation', {
            user: item.name,
            id: item.id,
          });
        }}
        data={data}
        renderItem={renderIte}
        keyExtractor={item => item.id}
      />
    </View>
  );
};
export default Discussion;
