import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import Styles from './style';
import Icon from 'react-native-vector-icons/FontAwesome';
import PickContenu from '../../../componnents/pickContenu';
const Lecons = ({navigation, lesson}) => {
  const {id, name, teacher, myClass} = lesson;
  const [contenu, setContenu] = useState([]);
  const [epreuves, setEpreuves] = useState([]);
  const [researchContenu, setResearchContenu] = useState('');
  const [researchEpreuve, setResearchEpreuve] = useState('');
  const [stateAction, setStateAction] = useState(false);
  const [statecontenu, setStateContenu] = useState(false);
  const [increment, setIncrement] = useState(1);
  const [page, setPage] = useState([]);
  const [maxPage, setMaxPage] = useState(5);
  const [nbrMax, setNbrMax] = useState(0);
  const [nbrMin, setNbrMin] = useState(4);

  //
  const myIcon = icone => <Icon name={icone} size={30} color="#000" />;
  const mIcon = icone => <Icon name={icone} size={30} color="#fff" />;

  const BoxContenu = () => {
    return (
      <View style={Styles.BoxContenu}>
        <View style={Styles.boxTitleContenu}>
          <Text style={Styles.TitleContenu}>Contenu</Text>
          <View style={Styles.boxPrint}>
            <TouchableOpacity onPress={() => {}} style={Styles.boxPrintExcel}>
              <Text>Excel</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}} style={Styles.boxPrintPDF}>
              <Text>PDF</Text>
            </TouchableOpacity>
          </View>
          <TextInput
            onChangeText={researchContenu}
            placeholder="Recherche Contenu"
            style={Styles.boxResearch}
            icon={<myIcon name="search" />}
          />
        </View>
        <View>
          {contenu.map((contenu, index) => {
            let Title = contenu.Title;
            return (
              <View style={Styles.boxItem} key={index}>
                <Text style={Styles.boxItemTitle}>{contenu.Title}</Text>
                <TouchableOpacity
                  onPress={() => {
                    navigation.push('Lecons', {Title, name, teacher, myClass});
                  }}
                  style={Styles.boxItemButton}>
                  {mIcon('eye')}
                  <Text style={Styles.boxItemButtonTitle}>Consulter</Text>
                </TouchableOpacity>
              </View>
            );
          })}
        </View>
      </View>
    );
  };
  //
  const BoxEpreuve = () => {
    return (
      <View style={Styles.BoxContenu}>
        <View style={Styles.boxTitleContenu}>
          <Text style={Styles.TitleContenu}>Epreuves</Text>
          <View style={Styles.boxPrint}>
            <TouchableOpacity onPress={() => {}} style={Styles.boxPrintExcel}>
              <Text>Excel</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}} style={Styles.boxPrintPDF}>
              <Text>PDF</Text>
            </TouchableOpacity>
          </View>
          <TextInput
            onChangeText={researchContenu}
            placeholder="Recherche Épreuvre"
            style={Styles.boxResearch}
            icon={<myIcon name="search" />}
          />
        </View>
        <View>
          {epreuves.map((epreuve, index) => {
            let Title = epreuve.Title;
            return (
              <View style={Styles.boxItem} key={index}>
                <Text style={Styles.boxItemTitle}>{epreuve.Title}</Text>
                <View style={Styles.boxButton}>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('Lecons', {
                        Title,
                        name,
                        teacher,
                        myClass,
                      })
                    }
                    style={Styles.boxItemButton}>
                    {mIcon('eye')}
                    <Text style={Styles.boxItemButtonTitle}>Consulter</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('Lecons', epreuve)}
                    style={Styles.boxItemButton}>
                    {mIcon('eye')}
                    <Text style={Styles.boxItemButtonTitle}>Resolution</Text>
                  </TouchableOpacity>
                </View>
              </View>
            );
          })}
          <View style={Styles.boxIncrement}>
            <TouchableOpacity
              onPress={() => {
                increment === 1 ? setIncrement(1) : setIncrement(increment - 1);
              }}
              style={Styles.buttonIncrement}>
              <Text>-</Text>
            </TouchableOpacity>
            <Text>{increment}</Text>
            <TouchableOpacity
              onPress={() => {
                increment === maxPage
                  ? setIncrement(maxPage)
                  : setIncrement(increment + 1);
              }}
              style={Styles.buttonIncrement}>
              <Text>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };
  const managedPage = () => {};
  useEffect(() => {
    setContenu([
      {id: 1, Title: 'suite de fibonacci'},
      {id: 2, Title: 'suite de Cauchy'},
      {id: 3, Title: 'suite Premiere'},
      {id: 4, Title: 'suite de fibonacci'},
      {id: 5, Title: 'suite de Cauchy'},
      {id: 6, Title: 'suite Premiere'},
      {id: 7, Title: 'suite de fibonacci'},
      {id: 8, Title: 'suite de Cauchy'},
      {id: 9, Title: 'suite Premiere'},
    ]);
    setEpreuves([
      {id: 1, Title: 'suite de fibonacci'},
      {id: 2, Title: 'suite de Cauchy'},
      {id: 3, Title: 'suite Premiere'},
      {id: 4, Title: 'suite de fibonacci'},
      {id: 5, Title: 'suite de Cauchy'},
      {id: 6, Title: 'suite Premiere'},
      {id: 7, Title: 'suite de fibonacci'},
      {id: 8, Title: 'suite de Cauchy'},
      {id: 9, Title: 'suite Premiere'},
    ]);
    setStateContenu(true);
    setStateAction(true);
  }, []);
  //
  //
  //
  return (
    <ScrollView>
      <SafeAreaView style={Styles.safe}>
        <View style={Styles.body}>
          <View style={Styles.boxTitle}>
            <View style={Styles.row}>
              <Text style={Styles.title}>Cours </Text>
              <Text style={Styles.title2}>{name}</Text>
            </View>
            <View style={Styles.rowid}>
              <Text style={Styles.title}>Classe </Text>
              <Text style={Styles.title2}>{myClass}</Text>
            </View>
            <View style={Styles.row}>
              <Text style={Styles.title}>Option </Text>
              <Text style={Styles.title2}>{teacher}</Text>
            </View>
            <View style={Styles.rowid}>
              <Text style={Styles.title}>Section </Text>
              <Text style={Styles.title2}>{id}</Text>
            </View>
          </View>
        </View>
        <View>
          {statecontenu ? <BoxContenu /> : alert('pas des contenus')}

          {stateAction ? <BoxEpreuve /> : alert('pas des épreuve')}
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Lecons;
