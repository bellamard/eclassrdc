import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import Styles from './style';
import User from '../../../images/user.jpg';
import sending from '../../../images/fa-fa-send.png';

const Item = props => {
  return (
    <View style={Styles.cardMessage}>
      <Image source={User} style={[Styles.logoItem]} />
      <View style={Styles.boxItemMessage}>
        <Text style={Styles.title}>{props.name}</Text>
        <Text>{props.message}</Text>
      </View>
      <Text>{props.date}</Text>
    </View>
  );
};

const Conversation = ({route}) => {
  const visitor = route.params.user;
  const visitorId = route.params.Id;
  const [user, setUser] = useState('Moi');
  const [dialogues, setDialogues] = useState([]);
  const [message, setMessage] = useState('');
  //
  const renderIte = ({item}) => {
    return <Item name={item.name} message={item.message} date={item.date} />;
  };
  //
  const sendMessage = () => {
    const d = new Date();
    const heure = d.getHours() + ':' + d.getMinutes();
    setDialogues([
      ...dialogues,
      {
        id: dialogues.length + 1,
        message: message,
        date: heure,
      },
    ]);
  };

  return (
    <View style={Styles.container}>
      <View style={Styles.boxNametchat}>
        <Text>Chats Message: {visitor}</Text>
      </View>

      <SafeAreaView style={Styles.boxMessage}>
        <FlatList
          keyExtractor={item => item.id}
          data={dialogues}
          renderItem={renderIte}
          style={Styles.flatlist}
        />
      </SafeAreaView>
      <View style={Styles.boxInput}>
        <View style={Styles.input}>
          <TextInput
            onChange={setMessage}
            value={message}
            placeholder="ecrivez votre message ici"
          />
          <TouchableOpacity onPress={() => sendMessage(user, message)}>
            <Image
              source={sending}
              style={Styles.sendingMessageIcon}
              resizeMode="stretch"
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default Conversation;
