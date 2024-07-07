import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import DashBoard from '../modules/dashboard';

const DashboardScreen = ({navigation}) => (
  <>
    <DashBoard />
  </>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DashboardScreen;
