import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
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
    name: 'Carne',
    id: '12eqsdqd12312356667',
    img: require('../../assets/burguer.png'),
    qtd: 3,
  },
  {
    name: 'Alface',
    id: '12eqsdqd123123777324',
    img: require('../../assets/alface.png'),
    qtd: 1,
  },
  {
    name: 'Queijo',
    id: '12eqsdqd12312392359834',
    img: require('../../assets/queijo.png'),
    qtd: 3,
  },
  {
    name: 'Presunto',
    id: '12eqsdqd12312392359234234',
    img: require('../../assets/presunto.png'),
    qtd: 3,
  },
  {
    name: 'Pepino',
    id: '12eqsdqd12312393482389434',
    img: require('../../assets/pepino.png'),
    qtd: 3,
  },
];

function Ingredients({navigation}: any): JSX.Element {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const totalIng = OBJ.reduce((total, elemento) => {
      return elemento?.qtd && (total += elemento?.qtd);
    }, 0);

    setTotal(totalIng);
  }, []);

  return (
    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.container}>
        {OBJ.map(ing => (
          <Card {...ing} />
        ))}
        <View style={styles.total}>
          <Text style={styles.totalText}>Total ingredientes: {total}</Text>
        </View>
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
  total: {
    margin: 10,
    height: 50,
  },
  totalText: {
    fontSize: 20,
  },
});

export default Ingredients;
