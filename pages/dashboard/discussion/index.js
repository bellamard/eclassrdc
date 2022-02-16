import React, {useState} from 'react';
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
  {id: 1, name: 'christian', code: '00024'},
  {id: 2, name: 'james', code: '00025'},
  {id: 3, name: 'Luc', code: '00026'},
  {id: 4, name: 'lionnel', code: '00027'},
  {id: 5, name: 'christian', code: '00028'},
  {id: 6, name: 'james', code: '00029'},
  {id: 7, name: 'Luc', code: '00030'},
  {id: 8, name: 'lionnel', code: '00031'},
  {id: 9, name: 'React', code: '00032'},
];

const Discussion = ({navigation}) => {
  const [search, setSearch] = useState('');
  const [Contacts, setContacts] = useState(serveurData);
  const [Filters, setFilters] = useState(serveurData);

  const renderIte = ({item}) => {
    return <Item name={item.name} id={item.id} navigation={navigation} />;
  };

  const managedContacts = () => {
    setFilters(
      ...Contacts.filter(contacts => {
        if (search.length === 0 || search === ' ') {
          return contacts;
        } else if (`${contacts.name}`.includes(search)) {
          return contacts;
        }
        return null;
      }).map(contact => {
        console.log(contact);
        return contact;
      }),
    );
    return (
      <FlatList
        data={Filters}
        renderItem={renderIte}
        keyExtractor={item => item.id}
      />
    );
  };

  return (
    <View style={Styles.body}>
      <TextInput
        onChange={setSearch}
        placeholder="Recherche contacts"
        value={search}
        style={Styles.input}
      />
      <View style={Styles.flatlist}>{managedContacts()}</View>
    </View>
  );
};
export default Discussion;
