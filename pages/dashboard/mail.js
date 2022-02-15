import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Image,
  FlatList,
} from 'react-native';
import Styles from './style';
import msg from '../../images/gmail.png';
import receive from '../../images/text-box.png';

const Item = props => {
  return (
    <View>
      <Text>{props.subject}</Text>
      <Text>{props.destine}</Text>
      <Text>{props.date}</Text>
    </View>
  );
};

const Mail = ({navigation}) => {
  const [current, setCurrent] = useState('');
  const [sendMessage, setToSendMessage] = useState([]);

  const renderIte = ({item}) => {
    return (
      <Item
        subject={item.subject}
        message={item.message}
        date={item.date}
        destine={item.destine}
      />
    );
  };
  const listen = item => {
    return (
      <View>
        <View>
          <Text>{item.subject}</Text>
        </View>
        <View>
          <Text>{item.name}</Text>
          <Text>{item.profilname}</Text>
        </View>
        <View>
          <Text>{item.message}</Text>
        </View>
      </View>
    );
  };
  const listMessage = items => {
    return (
      <View>
        <FlatList
          data={items}
          keyExtractor={item => item.id}
          renderItem={renderIte}
        />
      </View>
    );
  };

  return (
    <SafeAreaView>
      <View>
        <Text>Mail</Text>
        <TouchableOpacity>
          <Text>Compose</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Image source={msg} />
          <Text>inbox</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Image source={receive} />
          <Text>send Mail</Text>
        </TouchableOpacity>
        <View>
          <View>
            <View>
              <TouchableOpacity>
                <Image source={receive} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={receive} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={receive} />
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity>
                <Image source={receive} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={receive} />
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity>
                <Image source={receive} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={receive} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View>{}</View>
      </View>
    </SafeAreaView>
  );
};
export default Mail;
