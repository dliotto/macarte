import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import {Card} from '../../component';

import {CardProps} from '../../component/types';

const OBJ: Array<CardProps> = [
  {
    name: 'Tomate',
    id: '12eqsdqd1233245345',
    img: require('../../assets/Tomato.png'),
    qtd: 1,
  },
  {
    name: 'Cebola',
    id: '12eqsdqd123123345345435',
    img: require('../../assets/Onion.png'),
    qtd: 1,
  },
  {
    name: 'Hamburguer',
    id: '12eqsdqd12312356667',
    img: 'teste',
    qtd: 3,
  },
  {
    name: 'Alface',
    id: '12eqsdqd123123777324',
    img: 'teste',
    qtd: 1,
  },
  {
    name: 'Queijo',
    id: '12eqsdqd12312392359834',
    img: 'teste',
    qtd: 3,
  },
  {
    name: 'Presunto',
    id: '12eqsdqd12312392359234234',
    img: 'teste',
    qtd: 3,
  },
  {
    name: 'Pepino',
    id: '12eqsdqd12312393482389434',
    img: 'teste',
    qtd: 3,
  },
];

function Ingredients({navigation}: any): JSX.Element {
  return (
    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.container}>
        {OBJ.map(ing => (
          <Card {...ing} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
    backgroundColor: '#DBC8AC',
  },
});

export default Ingredients;
