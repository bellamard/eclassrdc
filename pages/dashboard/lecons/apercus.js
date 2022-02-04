import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  PermissionsAndroid,
  Image,
} from 'react-native';
import Styles from './style';

const Apercus = ({navigation, route}) => {
  const [contenu, setContenu] = useState('');
  const [file, setFile] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isFileExist, setFileExist] = useState(false);
  const {Title, name, teacher, myClass} = route.params;

  useEffect(() => {
    setContenu(
      'La convergence n’est pas la divergence, la force. Comme la coumbacérie ou le script de Aze, la prédestination. Chapitre abstrait 3 du conpendium : la congolexicomatisation. Au nom de toute la communauté des savants,  c’est clair avéré(e)(s). Quand on parle de relaxation,  tu sais ça autour des gens qui connaissent beaucoup de choses. Tandis que la politique est encadrée par des scientifiques issus de Sciences Po et Administratives,  tu sais ça belvédère. Vous avez le système de check-up vers les anti-valeurs, vous avez le curuna, or  tu sais ça vers le monde entier. Chapitre abstrait 3 du conpendium :  tu sais ça belvédère. Contre la morosité du peuple,  mais oui autour des gens qui connaissent beaucoup de choses. ',
    );
    setFile([
      {
        id: 1,
        Title: 'bloque',
        Description: 'bloque de representation de fibonacci',
        Type: 'jpg',
        uri: 'https://app.e-classerdc.com/docs/products/271746710-2868914100066762-3347884328586150856-n-61f2a3530512e207586245.jpg',
      },
      {
        id: 2,
        Title: 'bloque',
        Description: 'bloque de representation de fibonacci',
        Type: 'jpg',
        uri: 'https://app.e-classerdc.com/docs/products/271746710-2868914100066762-3347884328586150856-n-61f2a3530512e207586245.jpg',
      },
      {
        id: 3,
        Title: 'glace',
        Description:
          "Se consolidant dans le système de insiding et outsiding,  merci propre(s) aux congolais. D'une manière ou d'une autre,  je vous en prie avec la formule 1+(2x5). Contre la morosité du peuple,  mais oui dans ces prestances. Tandis que la politique est encadrée par des scientifiques issus de Sciences Po et Administratives, la congolexicomatisation. Quand on prend les triangles rectangles, la délégation. La convergence n’est pas la divergence,  mais oui vers le monde entier. Quand on prend les triangles rectangles,  je vous en prie avec la formule 1+(2x5). L’émergence ici c’est l’émulsion, c’est pas l’immersion donc  c’est clair dans la sous-régionalité. Tandis que la politique est encadrée par des scientifiques issus de Sciences Po et Administratives,  merci dans le prémice. ",
        Type: 'jpg',
        uri: 'https://app.e-classerdc.com/docs/products/271746710-2868914100066762-3347884328586150856-n-61f2a3530512e207586245.jpg',
      },
      {
        id: 4,
        Title: 'value',
        Description:
          "Au nom de toute la communauté des savants,  c’est clair off-shore. Vous avez le système de check-up vers les anti-valeurs, vous avez le curuna, or la congolexicomatisation. Lorsqu’on parle de tous ces points de vues, la prédestination. La convergence n’est pas la divergence,  c’est clair vers le monde entier. Tandis que la politique est encadrée par des scientifiques issus de Sciences Po et Administratives, la cosmogonisation. Tandis que la politique est encadrée par des scientifiques issus de Sciences Po et Administratives, l'imbroglio. Vous avez le système de check-up vers les anti-valeurs, vous avez le curuna, or la systématique. C’est à dire ici, c’est le contraire, au lieu de panacée,  tu sais ça autour des gens qui connaissent beaucoup de choses. Se consolidant dans le système de insiding et outsiding, la congolexicomatisation. ",
        Type: 'jpg',
        uri: 'https://app.e-classerdc.com/docs/products/271746710-2868914100066762-3347884328586150856-n-61f2a3530512e207586245.jpg',
      },
    ]);
    setIsLoading(true);
    setFileExist(true);
  }, []);
  return (
    <ScrollView>
      <SafeAreaView>
        <View Style={Styles.container}>
          <View style={Styles.body}>
            <View style={Styles.boxTitle}>
              <View style={Styles.row}>
                <Text style={Styles.title}>Cours </Text>
                <Text style={Styles.title2}>{name}</Text>
              </View>
              <View style={Styles.row}>
                <Text style={Styles.title}>Classe </Text>
                <Text style={Styles.title2}>{myClass}</Text>
              </View>
              <View style={Styles.row}>
                <Text style={Styles.title}>Option </Text>
                <Text style={Styles.title2}>{teacher}</Text>
              </View>
            </View>
            <Text style={Styles.title3}>{Title}</Text>
          </View>
          {isLoading ? (
            <View style={Styles.boxLessonContenu}>
              <View>
                <Text style={Styles.lessonContenu}>{contenu}</Text>
              </View>
              <View>
                {isFileExist ? (
                  <View style={Styles.boxFiles}>
                    <Text style={Styles.title3}>Fichiers</Text>
                    <View>
                      <View style={Styles.captionTab}>
                        <Text>Nom du Fichiers</Text>
                        <Text>Description</Text>
                        <Text>Type</Text>
                        <Text>Télécharger</Text>
                      </View>
                      {file.map((file, index) => {
                        <View style={Styles.captionTab}>
                          <Text>{file.Title}</Text>
                          <Text>{file.Description}</Text>
                          <Image source={file.uri} />
                          <Image source={file.uri} />
                        </View>;
                      })}
                    </View>
                  </View>
                ) : null}
              </View>
            </View>
          ) : (
            <Text>Pas des contenus</Text>
          )}
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Apercus;
