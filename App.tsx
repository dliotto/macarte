import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  useColorScheme,
  Button,
  Text,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import {NavigationContainer} from '@react-navigation/native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from './src/screens/Home/Home';
import Profile from './src/screens/Profile/Profile';

import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Preparação"
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName: String = '';

            if (route.name === 'Preparação') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'Perfíl') {
              iconName = focused
                ? 'ios-person-circle-sharp'
                : 'ios-person-circle-outline';
            } else if (route.name === 'Ingredientes') {
              iconName = focused ? 'ios-fast-food' : 'ios-fast-food-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen name="Ingredientes" component={Profile} />
        <Tab.Screen
          name="Preparação"
          options={{
            tabBarLabel: '',
            tabBarIcon: ({color, focused}) => {
              const iconName = focused ? 'ios-layers' : 'ios-layers-outline';

              return (
                <View style={styles.preparationIconContainer}>
                  <Ionicons name={iconName} color={color} size={68} />
                </View>
              );
            },
          }}
          component={Home}
        />
        <Tab.Screen name="Perfíl" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  preparationIconContainer: {
    position: 'absolute',
    bottom: 0, // space from bottombar
    height: 68,
    width: 68,
    borderRadius: 68,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
