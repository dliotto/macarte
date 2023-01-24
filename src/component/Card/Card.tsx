import React from 'react';
import {Image, StyleSheet, Text, View, ImageBackground} from 'react-native';
import CardProps from './types';

function Card({name, qtd, img, id}: CardProps): JSX.Element {
  return (
    <View key={`card-key-id-${id}`} style={styles.container}>
      <ImageBackground source={img} style={styles.image} />

      <View style={styles.infos}>
        <View>
          <View>
            <Text style={styles.textContainer}>Name: {name}</Text>
          </View>
          <View>
            <Text style={styles.textContainer}>Qtd: {qtd}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#61481C',
    width: 300,
    height: 100,
    borderRadius: 20,
    justifyContent: 'center',
    padding: 10,
    marginBottom: 4,
    marginTop: 6,
  },
  infos: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 20,
  },
  textContainer: {
    color: '#fff',
    fontSize: 20,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    width: 100,
    height: 100,
    backgroundColor: 'transparent',
    opacity: 0.8,
    borderRadius: 20,
    justifyContent: 'flex-end',
    flex: 1,
    display: 'flex',
    alignItems: 'flex-end',
    alignContent: 'flex-end',
    alignSelf: 'flex-end',
  },
});

export default Card;
