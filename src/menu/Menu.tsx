import React from 'react';
import {StyleSheet, View} from 'react-native';

import {
  NavigationContainer,
  DefaultTheme,
  RouteProp,
  ParamListBase,
} from '@react-navigation/native';

import {
  createBottomTabNavigator,
  BottomTabNavigationOptions,
} from '@react-navigation/bottom-tabs';

import {Home, Profile, Ingredients} from '../screens';

import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

function Menu(): JSX.Element {
  const colorsHeader: BottomTabNavigationOptions = {
    headerStyle: {
      backgroundColor: styles.headerStyle.backgroundColor,
    },
    headerTintColor: styles.headerTintColor.color,
    headerTitleStyle: {
      fontWeight: styles.headerTitleStyle.fontWeight,
      fontSize: 26,
    },
    tabBarStyle: {backgroundColor: '#674747'},
    tabBarLabelStyle: {fontSize: 14},
  };

  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: '#DBC8AC',
    },
  };

  function returnNameIcon(
    route: RouteProp<ParamListBase, string>,
    focused: boolean,
  ) {
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

    return iconName;
  }

  return (
    <NavigationContainer theme={MyTheme}>
      <Tab.Navigator
        initialRouteName="Preparação"
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            const iconName: String = returnNameIcon(route, focused);

            return (
              <Ionicons name={iconName.toString()} size={30} color={color} />
            );
          },
          tabBarActiveTintColor: '#3D8361',
          tabBarInactiveTintColor: '#EEEEEE',
        })}>
        <Tab.Screen
          name="Ingredientes"
          options={{
            ...colorsHeader,
          }}
          component={Ingredients}
        />
        <Tab.Screen
          name="Preparação"
          options={{
            ...colorsHeader,
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
        <Tab.Screen
          options={{
            ...colorsHeader,
          }}
          name="Perfíl"
          component={Profile}
        />
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

  headerStyle: {
    backgroundColor: '#F96666',
  },
  headerTitleStyle: {
    fontWeight: 'bold',
  },
  headerTintColor: {
    color: '#EDDFB3',
  },
});

export default Menu;
