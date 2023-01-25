import React, {useState} from 'react';
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Checkbox} from '../../component';
import {CardProps} from '../../component/types';

const OBJ: Array<CardProps> = [
  {
    name: 'Tomate',
    id: '1',
    img: require('../../assets/Tomato.png'),
    qtd: 1,
  },
  {
    name: 'Cebola',
    id: '2',
    img: require('../../assets/Onion.png'),
    qtd: 1,
  },
  {
    name: 'Carne',
    id: '3',
    img: require('../../assets/burguer.png'),
    qtd: 3,
  },
  {
    name: 'Alface',
    id: '4',
    img: require('../../assets/alface.png'),
    qtd: 1,
  },
  {
    name: 'Queijo',
    id: '5',
    img: require('../../assets/queijo.png'),
    qtd: 3,
  },
  {
    name: 'Presunto',
    id: '6',
    img: require('../../assets/presunto.png'),
    qtd: 3,
  },
  {
    name: 'Pepino',
    id: '7',
    img: require('../../assets/pepino.png'),
    qtd: 3,
  },
];

function Home({navigation}: any): JSX.Element {
  const [checkedSupplies, setCheckedSupplies] = useState<Array<CardProps>>([]);
  const [suppliesConcat, setSuppliesConcat] = useState<String>();

  const checkboxSupplies = (value: CardProps) => {
    let newArr: Array<CardProps> = [];

    checkedSupplies.some(sup => sup.id === value.id)
      ? (newArr = checkedSupplies.filter(sup => sup.id !== value.id))
      : (newArr = [...checkedSupplies, value]);

    const ret = newArr
      .sort((a, b) => {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();
        if (nameA > nameB) {
          return 1;
        }
        if (nameA < nameB) {
          return -1;
        }
        return 0;
      })
      .map(sup => sup.name)
      .join(', ');

    setSuppliesConcat(ret);
    setCheckedSupplies(newArr);
  };

  return (
    <SafeAreaView>
      <StatusBar barStyle={'dark-content'} />

      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.container}>
        {OBJ.map(sup => (
          <Checkbox
            key={`checkbox-key-${sup.id}`}
            isChecked={checkedSupplies.includes(sup)}
            label={sup.name}
            onPress={() => {
              checkboxSupplies(sup);
            }}
          />
        ))}
        <View style={styles.viewFind}>
          <Text style={styles.textFind}>
            Busque um prato para fazer com os produtos:
          </Text>
          <Text style={styles.supplieFind}>{suppliesConcat}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: '#DBC8AC',
    marginLeft: 10,
  },
  viewFind: {
    marginTop: 16,
  },
  textFind: {
    fontSize: 22,
  },
  supplieFind: {
    fontSize: 16,
    marginTop: 2,
    fontWeight: '600',
  },
});

export default Home;
