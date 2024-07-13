import React from 'react';
import {Image, StyleSheet} from 'react-native';

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

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const TabIcon = ({source}) => (
  <Image source={source} style={styles.icon} />
);

const BottomTabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Home"
      component={DashboardScreen}
      options={{
        headerShown: false,
        tabBarIcon: ({color, size}) => <TabIcon source={DashboardScreenImg.HomeButton} />,
      }}
    />
    <Tab.Screen
      name="Block Matching"
      component={DashboardScreen}
      options={{
        headerShown: false,
        tabBarIcon: ({color, size}) => <TabIcon source={DashboardScreenImg.StackingButton} />,
      }}
    />
    <Tab.Screen
      name="Staking"
      component={DashboardScreen}
      options={{
        headerShown: false,
        tabBarIcon: ({color, size}) => <TabIcon source={DashboardScreenImg.StackingButton} />,
      }}
    />
  </Tab.Navigator>
);

const DrawerScreen = ({name, component, iconSource}) => (
  <Drawer.Screen
    name={name}
    component={component}
    options={{
      drawerIcon: ({color, size}) => <Image source={iconSource} style={styles.image} />,
    }}
  />
);

const DrawerNavigator = () => (
  <Drawer.Navigator
    initialRouteName="Dashboard"
    drawerContent={props => <CustomDrawerContent {...props} />}
    screenOptions={{
      drawerLabelStyle: styles.drawerLabelStyle,
    }}
  >
    <Drawer.Screen
      name="Dashboard"
      component={BottomTabNavigator}
      options={{
        drawerIcon: ({color, size}) => <Image source={DrawerImages.dashIcon} style={styles.image} />,
      }}
    />
    <Drawer.Screen
      name="Fiat Currencies"
      component={HomeScreen}
      options={{
        drawerIcon: ({color, size}) => <Image source={DrawerImages.fiet} style={styles.image} />,
      }}
    />
    <Drawer.Screen
      name="Settings"
      component={HomeScreen}
      options={{
        drawerIcon: ({color, size}) => <Image source={DrawerImages.setting} style={styles.image} />,
      }}
    />
    <Drawer.Screen
      name="Block Matching Dividend"
      component={HomeScreen}
      options={{
        drawerIcon: ({color, size}) => <Image source={DrawerImages.dividend} style={styles.image} />,
      }}
    />
    <Drawer.Screen
      name="Staking Referral Dividends"
      component={HomeScreen}
      options={{
        drawerIcon: ({color, size}) => <Image source={DrawerImages.refferal} style={styles.image} />,
      }}
    />
    <Drawer.Screen
      name="My Referral Code"
      component={HomeScreen}
      options={{
        drawerIcon: ({color, size}) => <Image source={DrawerImages.refCode} style={styles.image} />,
      }}
    />
    <Drawer.Screen
      name="Security"
      component={HomeScreen}
      options={{
        drawerIcon: ({color, size}) => <Image source={DrawerImages.security} style={styles.image} />,
      }}
    />
    <Drawer.Screen
      name="Currency Calculator"
      component={HomeScreen}
      options={{
        drawerIcon: ({color, size}) => <Image source={DrawerImages.calculator} style={styles.image} />,
      }}
    />
    <Drawer.Screen
      name="Common Function For Vip"
      component={HomeScreen}
      options={{
        drawerIcon: ({color, size}) => <Image source={DrawerImages.commanFunction} style={styles.image} />,
      }}
    />
    <Drawer.Screen
      name="Help And Support"
      component={HomeScreen}
      options={{
        drawerIcon: ({color, size}) => <Image source={DrawerImages.shareApp} style={styles.image} />,
      }}
    />
    <Drawer.Screen
      name="Terms and Conditions"
      component={HomeScreen}
      options={{
        drawerIcon: ({color, size}) => <Image source={DrawerImages.terms} style={styles.image} />,
      }}
    />
    <Drawer.Screen
      name="Logout"
      component={HomeScreen}
      options={{
        drawerIcon: ({color, size}) => <Image source={DrawerImages.logout} style={styles.image} />,
      }}
    />
    <Drawer.Screen
      name="Share App"
      component={HomeScreen}
      options={{
        drawerIcon: ({color, size}) => <Image source={DrawerImages.shareApp} style={styles.image} />,
      }}
    />
  </Drawer.Navigator>
);

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen name="Splash" component={SplashScreen} options={{headerShown: false}} />
      <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}} />
      <Stack.Screen name="Signup" component={SignupScreen} options={{headerShown: false}} />
      <Stack.Screen name="Home" component={DrawerNavigator} options={{headerShown: false}} />
      <Stack.Screen name="Stacking" component={StackingScreen} options={{headerShown: false}} />
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
    height: 24,
    width: 24,
    marginRight: -15,
  },
  drawerLabelStyle: {
    color: 'white',
  },
});

export default AppNavigator;