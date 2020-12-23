/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from '../Screens/HomeScreen';
import TrackingScreen from '../Screens/TrackingScreen';
import SettingScreen from '../Screens/SettingScreen';
import LoginScreen from '../Screens/LoginScreen';
import SignUpScreen from '../Screens/SignUpScreen';
import {createStackNavigator} from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';
import {DrawerContent} from './DrawerContent';
import {colors} from '../assets/data';

const HomeStack = createStackNavigator();
const TrackingStack = createStackNavigator();
const SettingStack = createStackNavigator();
const Drawer = createDrawerNavigator();
const HomeStackScreen = ({navigation}) => (
  <HomeStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: colors.Primary,
      },
      headerTintColor: '#fff',
      headerTitleStyle: 'bold',
    }}>
    <HomeStack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        title: 'Home',
        headerLeft: () => (
          <Icon.Button
            name="medal"
            size={15}
            backgroundColor={colors.Primary}
            onPress={() => {
              navigation.openDrawer();
            }}
          ></Icon.Button>
        ),
      }}
    />
  </HomeStack.Navigator>
);

const TrackingStackScreen = ({navigation}) => (
  <TrackingStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: colors.Primary,
      },
      headerTintColor: '#fff',
      headerTitleStyle: 'bold',
    }}>
    <HomeStack.Screen
      name="Track"
      component={TrackingScreen}
      options={{
        title: 'Track',
        headerLeft: () => (
          <Icon.Button
            name="medal"
            size={15}
            backgroundColor={colors.Primary}
            onPress={() => {
              navigation.openDrawer();
            }}
          ></Icon.Button>
        ),
      }}/>
  </TrackingStack.Navigator>
);

const SettingStackScreen = ({navigation}) => (
  <TrackingStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: colors.Primary,
      },
      headerTintColor: '#fff',
      headerTitleStyle: 'bold',
    }}>
    <SettingStack.Screen
      name="Setting"
      component={SettingScreen}
      options={{
        title: 'Setting',
        headerLeft: () => (
          <Icon.Button
            name="medal"
            size={15}
            backgroundColor={colors.Primary}
            onPress={() => {
              navigation.openDrawer();
            }}
          ></Icon.Button>
        ),
      }}/>
  </TrackingStack.Navigator>
);

const LoginStackScreen = ({navigation}) => (
  <SettingStack.Navigator>
    <SettingStack.Screen
      name="Login"
      component={LoginScreen}
    />
  </SettingStack.Navigator>
);
export default function DrawerNavigation() {

  const [authStatus, setAuthStatus] = React.useState('Login');
  
  return (
    <>
      <Drawer.Navigator initialRouteName={authStatus} drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen name="Home" component={HomeStackScreen} />
        <Drawer.Screen name="Tracking" component={TrackingStackScreen} />
        <Drawer.Screen name="Setting" component={SettingStackScreen} />
        <Drawer.Screen name="Login" component={LoginScreen} />
        <Drawer.Screen name="SignUp" component={SignUpScreen} />
      </Drawer.Navigator>
    </>
  );
}
