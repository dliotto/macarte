/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

function Profile(): JSX.Element {
  return (
    <SafeAreaView>
      <StatusBar barStyle={'dark-content'} />

      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={{backgroundColor: '#DBC8AC'}}>
          <Text>Profile</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default Profile;
