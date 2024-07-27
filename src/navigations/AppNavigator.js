import React from 'react';
import {Alert, Image, Linking, Share, StyleSheet, Text} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import SplashScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import HomeScreen from '../screens/HomeScreen';
import DashboardScreen from '../screens/DashboardScreen';
import StackingScreen from '../screens/StackingScreen';
import {DrawerImages, DashboardScreenImg} from '../asserts/images/image';
import CustomDrawerContent from './CustomDrawerContent';
import FietCurrencyScreen from '../screens/FietCurrency';
import ProfileScreen from '../screens/ProfileScreen';
import VerificationScreen from '../screens/VerificationScreen';

import {getToken} from '../keyChain/keychain';

import config from '../config';
import URL from '../api/url';
import axios from 'axios';
import Scanner from '../screens/ScannerScreen';
import PinCodeScreen from '../screens/PinCodeScreen';

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
  const onShare = async () => {
    try {
      const {action, activityType} = await Share.share({
        message: 'https://proctur.com', // Replace with your content
        // You can also include title or URL if needed
      });

      switch (action) {
        case Share.sharedAction:
          if (activityType) {
            console.log('Shared with activity type:', activityType);
          } else {
            console.log('Content shared successfully');
          }
          break;
        case Share.dismissedAction:
          console.log('Share action dismissed');
          break;
        default:
          console.log('Unhandled action:', action);
      }
    } catch (error) {}
  };

  const handleLogout = async () => {
    Alert.alert(
      'Confirm Logout',
      'Are you sure you want to logout?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Logout',
          onPress: async () => {
            try {
              const authToken = await getToken();
              const response = await axios.post(
                URL[config.env].BASE_URL + 'auth/logout',
                '', // Body is empty
                {
                  headers: {
                    Authorization: `Bearer ${authToken}`, // Include the token in the Authorization header
                    accept: '*/*', // Match the curl request headers
                  },
                },
              );
              if (response.status === 201) {
                navigation.navigate('Login');
              } else {
                Alert.alert('Error', 'Failed to logout. Please try again.');
              }
            } catch (error) {
              Alert.alert('Error', 'Failed to logout. Please try again.');
            }
          },
        },
      ],
      {cancelable: false},
    );
  };

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
      
      {/* 
      
      <Drawer.Screen
        name="Settings"
        component={HomeScreen}
        options={{
          drawerIcon: () => (
            <Image source={DrawerImages.setting} style={styles.image} />
          ),
        }}
      />
      <Drawer.Screen
        name="Fiat Currencies"
        component={FietCurrencyScreen}
        options={{
          headerShown: false,
          drawerIcon: () => (
            <Image source={DrawerImages.fiet} style={styles.image} />
          ),
        }}
      />
      <Drawer.Screen
        name="Block Matching Dividend"
        component={HomeScreen}
        options={{
          drawerIcon: () => (
            <Image source={DrawerImages.dividend} style={styles.image} />
          ),
        }}
      />
      <Drawer.Screen
        name="Staking Referral Dividends"
        component={HomeScreen}
        options={{
          drawerIcon: () => (
            <Image source={DrawerImages.refferal} style={styles.image} />
          ),
        }}
      />
      <Drawer.Screen
        name="My Referral Code"
        component={HomeScreen}
        options={{
          drawerIcon: () => (
            <Image source={DrawerImages.refCode} style={styles.image} />
          ),
        }}
      />
      <Drawer.Screen
        name="Security"
        component={ProfileScreen}
        options={{
          headerShown: false,
          drawerIcon: () => (
            <Image source={DrawerImages.security} style={styles.image} />
          ),
        }}
      />
      <Drawer.Screen
        name="Currency Calculator"
        component={HomeScreen}
        options={{
          drawerIcon: () => (
            <Image source={DrawerImages.calculator} style={styles.image} />
          ),
        }}
      />
      <Drawer.Screen
        name="Common Function For Vip"
        component={HomeScreen}
        options={{
          drawerIcon: () => (
            <Image source={DrawerImages.commanFunction} style={styles.image} />
          ),
        }}
      />
      <Drawer.Screen
        name="Help And Support"
        component={HomeScreen}
        options={{
          drawerIcon: () => (
            <Image source={DrawerImages.shareApp} style={styles.image} />
          ),
        }}
      />
      <Drawer.Screen
        name="Terms and Conditions"
        component={HomeScreen}
        options={{
          drawerIcon: () => (
            <Image source={DrawerImages.terms} style={styles.image} />
          ),
        }}
      />
      <Drawer.Screen
        name="Logout"
        component={DashboardScreen}
        options={{
          drawerIcon: () => (
            <Image source={DrawerImages.logout} style={styles.image} />
          ),
          // Call the handleLogout function when the item is pressed
          drawerLabel: () => (
            <Text onPress={handleLogout} style={styles.drawerLabel}>
              Logout
            </Text>
          ),
        }}
      />
      <Drawer.Screen
        name="Share App"
        component={HomeScreen}
        options={{
          drawerIcon: () => (
            <Image source={DrawerImages.shareApp} style={styles.image} />
          ),
          drawerLabel: () => (
            <Text onPress={onShare} style={styles.drawerLabel}>
              Share App
            </Text>
          ),
        }}
      /> */}
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
