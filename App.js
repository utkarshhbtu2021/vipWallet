import React from 'react';
import AppNavigator from './src/navigations/AppNavigator';
import {SafeAreaView} from 'react-native';
import Toast from 'react-native-toast-message';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DashboardScreen from './src/screens/DashboardScreen';
const App = () => {
  const Drawer = createDrawerNavigator();
  return (
    <SafeAreaView style={{flex: 1}}>
      <Toast />
      <AppNavigator />
    </SafeAreaView>
  );
};

export default App;
