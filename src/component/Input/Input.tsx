import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import InputProps from './types';

function Input(props: InputProps): JSX.Element {
  return <></>;
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
    marginLeft: 100,
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

export default Input;
