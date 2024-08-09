import React from 'react';
import {Image, StyleSheet } from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {DrawerImages, DashboardScreenImg} from '../assets/images/image';

import SplashScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import DashboardScreen from '../screens/DashboardScreen';
import StackingScreen from '../screens/StackingScreen';
import CustomDrawerContent from './CustomDrawerContent';
import VerificationScreen from '../screens/VerificationScreen';
import Scanner from '../screens/ScannerScreen';
import PinCodeScreen from '../screens/PinCodeScreen';
import TermsConditionScreen from '../screens/TermsConditionScreen';
import HelpSupportScreen from '../screens/HelpSupportScreen';
import SupportCentreScreen from '../screens/SupportCentre';
import FiatCurrencyScreen from '../screens/FietCurrency';

import HomeScreen from '../screens/HomeScreen';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const TabIcon = ({source}) => <Image source={source} style={styles.icon} />;

const BottomTabNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      tabBarLabelStyle: styles.tabBarLabelStyle,
      tabBarIconStyle: styles.tabBarIconStyle,
      tabBarStyle: styles.tabBarStyle,
    }}>
    <Tab.Screen
      name="Home"
      component={DashboardScreen}
      options={{
        headerShown: false,
        tabBarIcon: ({color, size}) => (
          <TabIcon source={DashboardScreenImg.HomeButton} />
        ),
      }}
    />
    <Tab.Screen
      name="Block Matching"
      component={DashboardScreen}
      options={{
        headerShown: false,
        tabBarIcon: () => (
          <TabIcon source={DashboardScreenImg.StackingButton} />
        ),
      }}
    />
    <Tab.Screen
      name="Staking"
      component={DashboardScreen}
      options={{
        headerShown: false,
        tabBarIcon: () => (
          <TabIcon source={DashboardScreenImg.StackingButton} />
        ),
      }}
    />
  </Tab.Navigator>
);

const DrawerNavigator = ({navigation}) => {

  return (
    <Drawer.Navigator
      initialRouteName="Dashboard"
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerLabelStyle: styles.drawerLabelStyle,
        drawerStyle: {
          width: 320,
        },

      }}>
        <Drawer.Screen
        name="Dashboard"
        component={BottomTabNavigator}
        options={{
          drawerIcon: () => (
            <Image source={DrawerImages.dashIcon} style={styles.image} />
          ),
          headerTitle: 'My Dashboard',
        }}
      />
    </Drawer.Navigator>
  );
};

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
        name="VerificationScreen"
        component={VerificationScreen}
        options={{headerShown: false}}
      />
        <Stack.Screen
        name="ScannerScreen"
        component={Scanner}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name="PinCodeScreen"
        component={PinCodeScreen}
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
      <Stack.Screen
        name="TermsConditionScreen"
        component={TermsConditionScreen}
        options={{headerShown: false}}
      /> 
      <Stack.Screen
        name="HelpSupportScreen"
        component={HelpSupportScreen}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name="SupportCentreScreen"
        component={SupportCentreScreen}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name="FiatCurrencyScreen"
        component={FiatCurrencyScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

const styles = StyleSheet.create({
  tabBarLabelStyle: {
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'Montserrat',
    paddingBottom: 5,
    marginBottom: 8,
  },
  tabBarStyle: {
    backgroundColor: '#F4F4F4',
    height: 70,
  },
  tabBarIconStyle: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  icon: {
    width: 24,
    height: 24,
  },
  image: {
    height: 24,
    width: 24,
    marginRight: -15,
  },
  drawerLabelStyle: {
    color: 'white',
  },
  drawerLabel: {
    color: 'white',
  },
});

export default AppNavigator;
