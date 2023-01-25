import React from 'react';
import {StyleSheet} from 'react-native';
import CheckboxProps from './types';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

function Checkbox({isChecked, label, onPress}: CheckboxProps): JSX.Element {
  return (
    <>
      <BouncyCheckbox
        style={{marginTop: 16}}
        isChecked={isChecked}
        text={label}
        onPress={onPress}
        iconStyle={{
          backgroundColor: '#674747',
          borderColor: '#674747',
          borderWidth: 0,
          borderRadius: 10,
        }}
        textStyle={{
          textDecorationLine: 'none',
          fontSize: 20,
        }}
        innerIconStyle={{
          borderRadius: 2, // to make it a little round increase the value accordingly
          borderWidth: 0,
        }}
      />
    </>
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

export default Checkbox;
