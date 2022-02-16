import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Image,
  FlatList,
} from 'react-native';
import Styles from './style';
import msg from '../../images/gmail.png';
import receive from '../../images/text-box.png';
import delette from '../../images/delete.png';
import alert from '../../images/alert-octagon.png';
import inbox from '../../images/inbox-arrow-up.png';
import folder from '../../images/folder.png';
import label from '../../images/label.png';
import reload from '../../images/reload.png';
import paper from '../../images/paperclip.png';
import users from '../../images/user.jpg';
import axios from 'axios';

const Item = props => {
  return (
    <View style={Styles.boxItem}>
      <Text style={Styles.titleRecipient}>{props.recipient}</Text>
      <View style={Styles.boxSujet}>
        <View style={Styles.colorBlue}></View>
        <Text style={Styles.titleSujet}>{props.sujet}</Text>
      </View>
      <Image source={paper} style={Styles.imageItem} />
      <Text>{props.date}</Text>
    </View>
  );
};

const UselessTextInput = props => {
  return <TextInput {...props} editable maxLength={512} />;
};
const Conversation = [
  {
    id: 1,
    recipient: 'Moi',
    sujet: 'bonjour',
    contenu: 'Bonjour, je suis en train de travailler sur ce projet',
    date: '12:00',
  },
  {
    id: 2,
    recipient: 'toi',
    sujet: 'bonjour',
    contenu: 'Bonjour, je suis en train de travailler sur ce projet',
    date: '12:00',
  },
  {
    id: 3,
    recipient: 'Nous',
    sujet: 'bonjour',
    contenu:
      "Nous n’allons pas seulement danser ou jouer au football,  Bonne Année propre(s) aux congolais. Lorsqu’on parle de tous ces points de vues,  je vous en prie dans le prémice. Au nom de toute la communauté des savants,  merci provenant d'une dynamique syncronique. C’est à dire quand on parle de ces rollers,  tu sais ça vers l'humanisme. Au nom de toute la communauté des savants, le colloque. Comme la coumbacérie ou le script de Aze,  c’est clair belvédère. D'une manière ou d'une autre,  merci propre(s) aux congolais. Lorsque l'on parle des végétaliens, du végétalisme,  mais oui autour des gens qui connaissent beaucoup de choses. Au nom de toute la communauté des savants, le savoir. ",
    date: '12:00',
  },
];
const Mail = ({navigation}) => {
  const [current, setCurrent] = useState('sendMessage');
  const [sendMessage, setToSendMessage] = useState(Conversation);
  const [selectMsg, setSelectMsg] = useState([]);
  const [recipient, setRecipient] = useState('');
  const [sujet, setSujet] = useState('');
  const [contenu, setContenu] = useState('');

  const renderIte = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          setSelectMsg(item);
          setCurrent('listenMessage');
        }}>
        <Item recipient={item.recipient} sujet={item.sujet} date={item.date} />
      </TouchableOpacity>
    );
  };
  const listenMessage = item => {
    return (
      <ScrollView>
        <View style={Styles.listenBox}>
          <Text style={Styles.titleSujetItem}>{item.sujet}</Text>
          <View style={Styles.boxSujetItem}>
            <Image source={users} style={Styles.logoUser} />
            <Text>{item.recipient}</Text>
          </View>
          <Text>{item.contenu}</Text>
        </View>
      </ScrollView>

      //
    );
  };
  const listMessage = items => {
    return (
      <View style={Styles.boxnu}>
        <View style={Styles.boxMenu}>
          <View style={Styles.boxMenuItem}>
            <TouchableOpacity style={Styles.buttonDrow}>
              <Image source={inbox} />
            </TouchableOpacity>
            <TouchableOpacity style={Styles.buttonDrow}>
              <Image source={alert} />
            </TouchableOpacity>
            <TouchableOpacity style={Styles.buttonDrow}>
              <Image source={delette} />
            </TouchableOpacity>
          </View>
          <View style={Styles.boxMenuItem}>
            <TouchableOpacity style={Styles.buttonDrow}>
              <Image source={folder} />
            </TouchableOpacity>
            <TouchableOpacity style={Styles.buttonDrow}>
              <Image source={label} />
            </TouchableOpacity>
          </View>
          <View style={Styles.boxMenuItem}>
            <TouchableOpacity style={Styles.buttonDrow}>
              <Image source={reload} />
            </TouchableOpacity>
          </View>
          <View style={Styles.boxMenuItem}>
            <TouchableOpacity style={Styles.buttonDrow}>
              <Text style={Styles.textDrow}>More</Text>
            </TouchableOpacity>
          </View>
        </View>
        <SafeAreaView style={Styles.messageListBox}>
          <FlatList
            data={items}
            keyExtractor={item => item.id}
            renderItem={renderIte}
          />
        </SafeAreaView>
      </View>
    );
  };

  const send = () => {
    return (
      <View>
        <Text>Compose Nouveau Message</Text>
        <View>
          <TextInput
            values={recipient}
            onChangeText={setRecipient}
            placeholder="Destinateur"
            style={Styles.Input}
          />
        </View>
        <Text>Sujet</Text>
        <View>
          <UselessTextInput
            multiline
            numberOfLines={2}
            onChangeText={text => setSujet(text)}
            value={sujet}
            placeholder="Sujet"
            style={Styles.Input}
          />
        </View>
        <Text>contenu</Text>
        <View>
          <UselessTextInput
            multiline
            numberOfLines={5}
            onChangeText={text => setContenu(text)}
            value={contenu}
            placeholder="Entrer Texte"
            style={Styles.Input}
          />
        </View>
        <View style={Styles.boxButton}>
          <TouchableOpacity style={Styles.buttonSend} onPress={() => {}}>
            <Text style={Styles.buttonComposeTitle}>Envoyer</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Styles.buttonCancel} onPress={() => {}}>
            <Text style={Styles.buttonComposeTitle}>Annuler</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const containerManager = () => {
    switch (current) {
      case 'sendMessage':
        return send();
      case 'listMessage':
        return listMessage(sendMessage);
      case 'listenMessage':
        return listenMessage(selectMsg);
    }
  };

  return (
    <SafeAreaView>
      <View style={Styles.bodyDash}>
        <TouchableOpacity
          style={Styles.buttonCompose}
          onPress={() => {
            setCurrent('sendMessage');
          }}>
          <Text style={Styles.buttonComposeTitle}>Compose</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={Styles.buttonMsg}
          onPress={() => {
            setCurrent('listMessage');
          }}>
          <Image source={msg} />
          <Text>inbox</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={Styles.buttonMsg}
          onPress={() => {
            setCurrent('listMessage');
          }}>
          <Image source={receive} />
          <Text>send Mail</Text>
        </TouchableOpacity>
        <View>{containerManager()}</View>
      </View>
    </SafeAreaView>
  );
};
export default Mail;
