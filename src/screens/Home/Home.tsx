import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

function Home({navigation}: any): JSX.Element {
  return (
    <SafeAreaView>
      <StatusBar barStyle={'dark-content'} />

      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={{backgroundColor: '#DBC8AC'}}>
          <Text>Home</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default Home;
