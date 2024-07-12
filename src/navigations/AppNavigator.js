// App.js

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Text, Button} from 'react-native';

// Example Screens
const SplashScreen = ({navigation}) => (
  <View>
    <Text>Splash Screen</Text>
    <Button title="Go to Login" onPress={() => navigation.navigate('Login')} />
  </View>
);

const LoginScreen = ({navigation}) => (
  <View>
    <Text>Login Screen</Text>
    <Button
      title="Go to Signup"
      onPress={() => navigation.navigate('Signup')}
    />
  </View>
);

const SignupScreen = ({navigation}) => (
  <View>
    <Text>Signup Screen</Text>
    <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
  </View>
);

const DashboardScreen = () => (
  <View>
    <Text>Dashboard Screen</Text>
  </View>
);

const StackingScreen = () => (
  <View>
    <Text>Stacking Screen</Text>
  </View>
);

const FiatCurrenciesScreen = () => (
  <View>
    <Text>Fiat Currencies Screen</Text>
  </View>
);

const SettingsScreen = () => (
  <View>
    <Text>Settings Screen</Text>
  </View>
);

const HomeScreen = () => (
  <View>
    <Text>Home Screen</Text>
  </View>
);

// Create Navigators
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

// Bottom Tab Navigator
const BottomTabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Block Matching" component={StackingScreen} />
    <Tab.Screen name="Staking" component={DashboardScreen} />
  </Tab.Navigator>
);

// Drawer Navigator
const DrawerNavigator = () => (
  <Drawer.Navigator initialRouteName="Dashboard">
    <Drawer.Screen name="Dashboard" component={BottomTabNavigator} />
    <Drawer.Screen name="Fiat Currencies" component={FiatCurrenciesScreen} />
    <Drawer.Screen name="Settings" component={SettingsScreen} />
    {/* Add other screens here */}
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
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
