import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';

const Conversation = () => {
  const [user, setUser] = useState('');
  const [dialog, setDialog] = useState([]);

  return (
    <View>
      <Text>Conversation</Text>
    </View>
  );
};
export default Conversation;
