import {StyleSheet, View,Text} from 'react-native';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';

const Tab=createBottomTabNavigator();
const PruebaTopBar = () => {
    return(
        <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{title: 'Inicio'}}
          />
          <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    );
};
export default PruebaTopBar;