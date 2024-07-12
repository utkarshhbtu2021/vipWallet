import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import SplashScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/loginScreen';
import SignupScreen from '../screens/signupScreen';
import HomeScreen from '../screens/HomeScreen';
import DashboardScreen from '../screens/DashboardScreen';
import StackingScreen from '../screens/StackingScreen';
import {DashboardScreenImg} from '../asserts/images/image';
import CustomDrawerContent from './customDrawerContent';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Home"
      component={DashboardScreen}
      options={{
        headerShown: false,
        tabBarIcon: ({color, size}) => (
          <Image source={DashboardScreenImg.HomeButton} style={styles.icon} />
        ),
      }}
    />
    <Tab.Screen
      name="Block Matching"
      component={DashboardScreen}
      options={{
        headerShown: false,
        tabBarIcon: ({color, size}) => (
          <Image
            source={DashboardScreenImg.StackingButton}
            style={styles.icon}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Staking"
      component={DashboardScreen}
      options={{
        headerShown: false,
        tabBarIcon: ({color, size}) => (
          <Image
            source={DashboardScreenImg.StackingButton}
            style={styles.icon}
          />
        ),
      }}
    />
  </Tab.Navigator>
);

// Drawer Navigator
const DrawerNavigator = () => (
  <Drawer.Navigator
    initialRouteName="Dashboard"
    drawerContent={props => <CustomDrawerContent {...props} />}>
    <Drawer.Screen
      name="Dashboard"
      component={BottomTabNavigator}
      options={{
        drawerIcon: ({color, size}) => (
          <TouchableOpacity>
            <Image
              source={DashboardScreenImg?.DashBoardNav}
              style={styles.image}
            />
          </TouchableOpacity>
        ),
      }}
    />
    <Drawer.Screen name="Fiat Currencies" component={HomeScreen} />
    <Drawer.Screen name="Settings" component={HomeScreen} />
  </Drawer.Navigator>
);
// Main App Navigator
const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Signup"
        component={SignupScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={DrawerNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Stacking"
        component={StackingScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
    marginBottom: 4,
  },
  image: {
    height: 23,
    width: 23,
  },
});

export default AppNavigator;
