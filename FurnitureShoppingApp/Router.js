import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from './src/components/Screen/Home/Home';
import Furniture from './src/components/Screen/Furniture/Furniture.js';
import Basket from './src/components/Screen/Basket';
import Favorite from './src/components/Screen/Favorite';

{
  /*Icon*/
}
import Icon from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon3 from 'react-native-vector-icons/Ionicons';
import Icon4 from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
export default function Router() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerTitle: 'Test',
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {backgroundColor: 'white'},
          tabBarInactiveTintColor: 'yellow',
          tabBarActiveBackgroundColor: '#C8DBBE',
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: () => <Icon name="home" size={33} color="grey" />,
          }}
        />
        <Tab.Screen
          name="Furniture"
          component={Furniture}
          options={{
            tabBarIcon: () => (
              <Icon2 name="table-furniture" size={33} color="grey" />
            ),
          }}
        />
        <Tab.Screen
          name="Basket"
          component={Basket}
          options={{
            tabBarIcon: () => <Icon3 name="md-basket" size={33} color="grey" />,
          }}
        />
        <Tab.Screen
          name="Favorite"
          component={Favorite}
          options={{
            tabBarIcon: () => <Icon4 name="heart" size={33} color="grey" />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
