import React from 'react';
import AppNavigator from './src/navigations/AppNavigator';
import {SafeAreaView} from 'react-native';
import Toast from 'react-native-toast-message';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Toast />
      <AppNavigator />
    </SafeAreaView>
  );
};

export default App;
